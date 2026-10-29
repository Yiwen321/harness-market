#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import zlib from 'node:zlib'
import semver from 'semver'

const ROOT = path.resolve(import.meta.dirname, '..')
const RUNTIME = process.env.DSH_RUNTIME_VERSION ?? '0.2.1-rc.2'
const NPM_METADATA_URL = 'https://registry.npmjs.org/dsh-plugin-catalog/latest'
const sourceFile = path.join(ROOT, 'data/catalog.source.json')
const communityFile = path.join(ROOT, 'data/community-stats.json')
const WANTED_TAR_FILES = ['package/index.json', 'package/plugins.json']

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function repoFromUrl(url) {
  try {
    const u = new URL(url)
    if (u.hostname !== 'github.com' && u.hostname !== 'www.github.com') return {}
    const [owner, repo] = u.pathname.split('/').filter(Boolean)
    if (!owner || !repo) return {}
    return { owner, repo: repo.replace(/\.git$/i, '') }
  } catch {
    return {}
  }
}

function readTarGz(buffer, wanted) {
  const tar = zlib.gunzipSync(Buffer.from(buffer))
  const found = {}
  let offset = 0
  while (offset + 512 <= tar.length && Object.keys(found).length < wanted.length) {
    const header = tar.subarray(offset, offset + 512)
    if (header.every((byte) => byte === 0)) break
    const rawName = header.subarray(0, 100).toString('utf8').replace(/\0.*$/u, '')
    const prefix = header.subarray(345, 500).toString('utf8').replace(/\0.*$/u, '')
    const name = prefix ? `${prefix}/${rawName}` : rawName
    const size = Number.parseInt(header.subarray(124, 136).toString('ascii').trim() || '0', 8)
    if (wanted.includes(name)) found[name] = tar.subarray(offset + 512, offset + 512 + size)
    offset += 512 + Math.ceil(size / 512) * 512
  }
  return found
}

function statsFromCatalog(pluginsDocument) {
  const packages = {}
  for (const plugin of pluginsDocument.plugins ?? []) {
    if (!plugin.npm) continue
    packages[plugin.npm] = {
      stars: Number.isFinite(plugin.stars) ? plugin.stars : null,
      downloads: Number.isFinite(plugin.downloads) ? plugin.downloads : null,
      downloadsStart: plugin.downloadsStart ?? null,
      downloadsEnd: plugin.downloadsEnd ?? null,
      checkedAt: plugin.downloadsCheckedAt ?? null,
    }
  }
  return {
    source: 'dsh-plugin-catalog/plugins.json',
    catalogUpdated: pluginsDocument.updated ?? null,
    generatedAt: new Date().toISOString(),
    packages,
  }
}

async function readLocalBundle() {
  const index = JSON.parse(await fs.readFile(sourceFile, 'utf8'))
  let community = { packages: {} }
  try {
    community = JSON.parse(await fs.readFile(communityFile, 'utf8'))
  } catch { /* stats are optional before the first refresh */ }
  return { index, community }
}

async function downloadBundle() {
  const metadataResponse = await fetch(NPM_METADATA_URL, { signal: AbortSignal.timeout(30_000) })
  if (!metadataResponse.ok) throw new Error(`catalog metadata failed: HTTP ${metadataResponse.status}`)
  const metadata = await metadataResponse.json()
  const tarballUrl = metadata.dist?.tarball
  if (!tarballUrl) throw new Error('catalog metadata has no tarball')
  const tarballResponse = await fetch(tarballUrl, { signal: AbortSignal.timeout(180_000) })
  if (!tarballResponse.ok) throw new Error(`catalog tarball failed: HTTP ${tarballResponse.status}`)
  const tarball = Buffer.from(await tarballResponse.arrayBuffer())
  const files = readTarGz(tarball, WANTED_TAR_FILES)
  if (!files['package/index.json'] || !files['package/plugins.json']) {
    throw new Error('catalog tarball is missing index.json or plugins.json')
  }
  const pluginsDocument = JSON.parse(files['package/plugins.json'].toString('utf8'))
  const community = statsFromCatalog(pluginsDocument)
  await fs.mkdir(path.dirname(sourceFile), { recursive: true })
  await fs.writeFile(sourceFile, files['package/index.json'])
  await fs.writeFile(communityFile, JSON.stringify(community))
  return { index: JSON.parse(files['package/index.json'].toString('utf8')), community }
}

async function loadBundle(forceRefresh = false) {
  if (!forceRefresh) {
    try {
      return await readLocalBundle()
    } catch { /* fall through to download */ }
  }
  try {
    return await downloadBundle()
  } catch (error) {
    try {
      console.warn(`catalog refresh failed, using the checked-in snapshot: ${error.message}`)
      return await readLocalBundle()
    } catch {
      throw error
    }
  }
}

const bundle = await loadBundle(process.argv.includes('--refresh'))
const source = bundle.index
const community = bundle.community

if (source.format !== 1 || !Array.isArray(source.plugins)) {
  throw new Error('unexpected catalog format')
}

const categories = Object.fromEntries(
  Object.entries(source.metadata?.categories ?? {}).map(([id, value]) => [
    id,
    {
      id,
      title: { en: clean(value.title?.en), zh: clean(value.title?.zh ?? value.title?.en) },
    },
  ]),
)

const seen = new Set()
const entries = []
for (const plugin of source.plugins) {
  const version = plugin.versions?.[0]
  if (!plugin.name || !version?.version || !semver.valid(version.version)) continue
  if (seen.has(plugin.name)) continue
  seen.add(plugin.name)
  const repo = repoFromUrl(plugin.repository?.url)
  const description = {
    en: clean(plugin.description?.en ?? plugin.description),
    zh: clean(plugin.description?.zh ?? plugin.description?.en ?? plugin.description),
  }
  const title = clean(plugin.title?.en ?? plugin.title ?? `${repo.owner}/${repo.repo}`)
  const category = categories[plugin.metadata?.category] ? plugin.metadata.category : 'tools'
  const stat = community.packages?.[plugin.name] ?? {}
  entries.push({
    name: plugin.name,
    title,
    owner: repo.owner ?? '',
    repo: plugin.repository?.url ?? `https://www.npmjs.com/package/${plugin.name}`,
    repoName: repo.repo ?? '',
    description,
    category,
    version: version.version,
    published: Number(version.publishTimestamp) || 0,
    engines: clean(version.engines?.dsh ?? ''),
    install: `${plugin.name}@${version.version}`,
    stars: Number.isFinite(stat.stars) ? stat.stars : null,
    downloads: Number.isFinite(stat.downloads) ? stat.downloads : null,
    downloadsStart: stat.downloadsStart ?? null,
    downloadsEnd: stat.downloadsEnd ?? null,
    statsCheckedAt: stat.checkedAt ?? null,
  })
}

const compatible = (engines) => {
  if (!engines) return null
  try {
    return semver.satisfies(RUNTIME, engines, { includePrerelease: true })
  } catch {
    return null
  }
}

let declared = 0
let compatibleCount = 0
for (const entry of entries) {
  const ok = compatible(entry.engines)
  if (entry.engines) declared += 1
  if (ok === true) compatibleCount += 1
}

const now = new Date().toISOString()
const categoryCounts = {}
for (const entry of entries) categoryCounts[entry.category] = (categoryCounts[entry.category] ?? 0) + 1

const marketPlugins = source.plugins
  .filter((plugin) => seen.has(plugin.name))
  .map((plugin) => {
    const version = plugin.versions[0]
    return {
      name: plugin.name,
      title: plugin.title,
      description: plugin.description,
      homepage: plugin.homepage,
      repository: plugin.repository,
      metadata: {
        category: categories[plugin.metadata?.category] ? plugin.metadata.category : 'tools',
        keywords: plugin.metadata?.keywords ?? [],
        labels: plugin.metadata?.labels ?? [],
        sortKeys: plugin.metadata?.sortKeys ?? {},
      },
      versions: [
        {
          version: version.version,
          publishTimestamp: version.publishTimestamp,
          source: version.source,
          engines: version.engines ?? {},
        },
      ],
    }
  })

const market = {
  format: 1,
  title: { en: 'Harness Market', zh: 'Harness 插件市场' },
  description: {
    en: `A GitHub-first catalog of ${entries.length.toLocaleString('en-US')} DeepSeek Harness plugins, checked against DSH ${RUNTIME}.`,
    zh: `面向 GitHub 的 DeepSeek Harness 插件目录，收录 ${entries.length.toLocaleString('zh-CN')} 个插件，并按 DSH ${RUNTIME} 检查兼容性。`,
  },
  'x-generatedAt': now,
  'x-runtime': RUNTIME,
  'x-source': 'https://github.com/awesome-dsh-plugin/awesome-dsh-plugin',
  metadata: { categories },
  plugins: marketPlugins,
}

const compatibleMarket = {
  ...market,
  title: { en: 'Harness Market · Verified', zh: 'Harness 插件市场 · 已验证兼容' },
  description: {
    en: `The ${compatibleCount} plugins in the Harness Market whose declared engines.dsh accepts DSH ${RUNTIME}.`,
    zh: `Harness 插件市场中，声明范围明确接受 DSH ${RUNTIME} 的 ${compatibleCount} 个插件。`,
  },
  plugins: marketPlugins.filter((plugin) => {
    const engines = clean(plugin.versions[0].engines?.dsh)
    return engines && compatible(engines) === true
  }),
}

const sitePlugins = entries.sort((a, b) => a.name.localeCompare(b.name))
const stats = {
  generatedAt: now,
  runtime: RUNTIME,
  total: entries.length,
  declared,
  compatible: compatibleCount,
  incompatible: declared - compatibleCount,
  unknown: entries.length - declared,
  rated: entries.filter((entry) => entry.downloads !== null || entry.stars !== null).length,
  downloads30d: entries.reduce((sum, entry) => sum + (entry.downloads ?? 0), 0),
  starsTotal: entries.reduce((sum, entry) => sum + (entry.stars ?? 0), 0),
  statsUpdated: community.generatedAt ?? null,
  categories: Object.fromEntries(
    Object.values(categories)
      .map((category) => [category.id, categoryCounts[category.id] ?? 0])
      .filter(([, count]) => count > 0),
  ),
  categoryTitles: Object.fromEntries(Object.values(categories).map((category) => [category.id, category.title])),
  sizes: {
    market: Buffer.byteLength(JSON.stringify(market)),
    compatible: Buffer.byteLength(JSON.stringify(compatibleMarket)),
    plugins: Buffer.byteLength(JSON.stringify(sitePlugins)),
  },
}

await fs.mkdir(path.join(ROOT, 'data'), { recursive: true })
await fs.writeFile(path.join(ROOT, 'data/plugins.json'), JSON.stringify(sitePlugins))
await fs.writeFile(path.join(ROOT, 'data/market.json'), JSON.stringify(market))
await fs.writeFile(path.join(ROOT, 'data/market-compatible.json'), JSON.stringify(compatibleMarket))
await fs.writeFile(path.join(ROOT, 'data/stats.json'), JSON.stringify(stats, null, 2))

console.log(`DSH ${RUNTIME}`)
console.log(`plugins: ${entries.length} · declared: ${declared} · compatible: ${compatibleCount} · unknown: ${stats.unknown}`)
console.log(`downloads/stars: ${stats.rated} plugins · ${stats.downloads30d.toLocaleString('en-US')} downloads / 30d · ${stats.starsTotal.toLocaleString('en-US')} stars`)
console.log(`market.json: ${(Buffer.byteLength(JSON.stringify(market)) / 1024 / 1024).toFixed(2)} MiB`)
console.log(`market-compatible.json: ${(Buffer.byteLength(JSON.stringify(compatibleMarket)) / 1024 / 1024).toFixed(2)} MiB`)
console.log(`plugins.json: ${(Buffer.byteLength(JSON.stringify(sitePlugins)) / 1024 / 1024).toFixed(2)} MiB`)
