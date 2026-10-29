#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const DIST = path.join(ROOT, 'dist')

const files = ['index.html', 'styles.css', 'app.js']
const directories = ['vendor', 'data', 'assets']

await fs.rm(DIST, { recursive: true, force: true })
await fs.mkdir(DIST, { recursive: true })

for (const file of files) {
  await fs.copyFile(path.join(ROOT, file), path.join(DIST, file))
}
for (const directory of directories) {
  const source = path.join(ROOT, directory)
  try {
    await fs.cp(source, path.join(DIST, directory), {
      recursive: true,
      filter: (file) => !file.endsWith('catalog.source.json') && !file.endsWith('community-stats.json'),
    })
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}
await fs.writeFile(path.join(DIST, '.nojekyll'), '')
await fs.writeFile(path.join(DIST, 'robots.txt'), 'User-agent: *\nAllow: /\n')

const filesInDist = []
async function walk(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(full)
    else filesInDist.push(full)
  }
}
await walk(DIST)
const bytes = (await Promise.all(filesInDist.map(async (file) => (await fs.stat(file)).size))).reduce((sum, size) => sum + size, 0)
console.log(`dist: ${filesInDist.length} files · ${(bytes / 1024 / 1024).toFixed(2)} MiB`)
