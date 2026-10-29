#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import semver from 'semver'

const ROOT = path.resolve(import.meta.dirname, '..')
const errors = []
const warnings = []

function fail(message) { errors.push(message) }
function warn(message) { warnings.push(message) }

function isObject(value) { return value !== null && typeof value === 'object' && !Array.isArray(value) }
function isLocalized(value) {
  return typeof value === 'string' || (isObject(value) && typeof value.en === 'string' && value.en.trim() !== '')
}

async function validate(file, { expectCompatibleOnly = false } = {}) {
  const body = await fs.readFile(path.join(ROOT, 'data', file), 'utf8')
  if (Buffer.byteLength(body) > 16 * 1024 * 1024) fail(`${file}: larger than 16 MiB`)
  const market = JSON.parse(body)
  if (market.format !== 1) fail(`${file}: format must be 1`)
  if (!isLocalized(market.title)) fail(`${file}: title must contain an English string`)
  if (market.description !== undefined && !isLocalized(market.description)) fail(`${file}: description must contain English`)
  if (!isObject(market.metadata)) fail(`${file}: metadata must be an object`)
  const categories = market.metadata?.categories ?? {}
  if (!isObject(categories)) fail(`${file}: metadata.categories must be an object`)
  if (!Array.isArray(market.plugins)) return fail(`${file}: plugins must be an array`)

  const names = new Set()
  for (const [index, plugin] of market.plugins.entries()) {
    const at = `${file}: plugins[${index}]`
    if (!isObject(plugin)) { fail(`${at} must be an object`); continue }
    if (typeof plugin.name !== 'string' || !plugin.name.trim()) fail(`${at}.name is missing`)
    if (names.has(plugin.name)) fail(`${at}.name duplicates ${plugin.name}`)
    names.add(plugin.name)
    if (plugin.description !== undefined && !isLocalized(plugin.description)) fail(`${at}.description must contain English`)
    if (plugin.metadata?.category && !categories[plugin.metadata.category]) fail(`${at}.metadata.category references undeclared ${plugin.metadata.category}`)
    if (!Array.isArray(plugin.versions) || plugin.versions.length === 0) { fail(`${at}.versions must be non-empty`); continue }
    const versions = new Set()
    for (const [versionIndex, version] of plugin.versions.entries()) {
      const vAt = `${at}.versions[${versionIndex}]`
      if (!semver.valid(version.version)) fail(`${vAt}.version is not exact SemVer`)
      if (versions.has(version.version)) fail(`${vAt}.version duplicates ${version.version}`)
      versions.add(version.version)
      if (!Number.isInteger(version.publishTimestamp) || version.publishTimestamp < 0 || version.publishTimestamp >= 1e11) {
        fail(`${vAt}.publishTimestamp must be Unix seconds`)
      }
      if (!['npm', 'git'].includes(version.source?.type)) fail(`${vAt}.source.type must be npm or git`)
      if (version.engines?.dsh && !semver.validRange(version.engines.dsh)) fail(`${vAt}.engines.dsh is not a SemVer range`)
      if (expectCompatibleOnly && version.engines?.dsh) {
        try {
          if (!semver.satisfies(market['x-runtime'] ?? '0.2.1-rc.2', version.engines.dsh, { includePrerelease: true })) {
            fail(`${vAt} is outside the verified index runtime`)
          }
        } catch { /* reported above */ }
      }
    }
  }
  console.log(`${file}: ${market.plugins.length.toLocaleString('en-US')} plugins, ${(Buffer.byteLength(body) / 1024 / 1024).toFixed(2)} MiB`)
  return market
}

const full = await validate('market.json')
const compatible = await validate('market-compatible.json', { expectCompatibleOnly: true })
const stats = JSON.parse(await fs.readFile(path.join(ROOT, 'data/stats.json'), 'utf8'))
const site = JSON.parse(await fs.readFile(path.join(ROOT, 'data/plugins.json'), 'utf8'))

if (full.plugins.length !== stats.total) fail(`stats.total ${stats.total} does not match market ${full.plugins.length}`)
if (compatible.plugins.length !== stats.compatible) fail(`stats.compatible ${stats.compatible} does not match verified index ${compatible.plugins.length}`)
if (site.length !== stats.total) fail(`site plugins ${site.length} does not match total ${stats.total}`)
if (new Set(site.map((plugin) => plugin.name)).size !== site.length) fail('site plugins contain duplicate names')
for (const plugin of site) {
  if (plugin.downloads !== null && (!Number.isInteger(plugin.downloads) || plugin.downloads < 0)) {
    fail(`${plugin.name}: downloads must be a non-negative integer or null`)
  }
  if (plugin.stars !== null && (!Number.isInteger(plugin.stars) || plugin.stars < 0)) {
    fail(`${plugin.name}: stars must be a non-negative integer or null`)
  }
}
const rated = site.filter((plugin) => plugin.downloads !== null || plugin.stars !== null).length
if (rated !== stats.rated) fail(`rated count ${rated} does not match stats ${stats.rated}`)
if (!(stats.downloads30d > 0) || !(stats.starsTotal > 0)) fail('aggregate download/star totals are missing')

const missingRepo = site.filter((plugin) => !/^https:\/\/github\.com\//.test(plugin.repo))
if (missingRepo.length) warn(`${missingRepo.length} plugins have no github.com repository URL`)
const unknownCompat = site.filter((plugin) => !plugin.engines).length
if (unknownCompat !== stats.unknown) fail(`unknown compatibility count mismatch: ${unknownCompat} vs ${stats.unknown}`)
const stale = site.filter((plugin) => plugin.published > Date.now() / 1000 + 86400 * 7).length
if (stale) warn(`${stale} plugins have a publish date more than a week in the future`)

for (const message of warnings) console.warn(`WARN ${message}`)
if (errors.length) {
  for (const message of errors) console.error(`FAIL ${message}`)
  console.error(`\n${errors.length} validation error(s)`)
  process.exit(1)
}
console.log(`\nOK · DSH ${stats.runtime} · ${stats.total} plugins · ${stats.compatible} verified · ${stats.unknown} undeclared`)
