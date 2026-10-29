/* =========================================================
   Harness Market — app
   Data: awesome-dsh-plugin catalog (CC0), generated into data/
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector)
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector))

const DEFAULT_RUNTIME = '0.2.1-rc.2'
const PAGE_SIZE = 24

const STRINGS = {
  zh: {
    skip: '跳到插件列表',
    navPicks: '精选',
    navBrowse: '全部插件',
    navInstall: '接入 DSH',
    addToDsh: '添加到 DSH',
    heroEyebrow: '社区插件索引 · 每日同步',
    heroSub: '从 3,800 多个社区插件里，找到真正适合你这版 DSH 的那一个。先看兼容性，再安装。',
    heroFoot: '由社区维护，数据来自 awesome-dsh-plugin。不是官方项目。',
    tryLabel: '试试',
    verifiedShort: '已验证兼容',
    statPlugins: '个插件',
    statCategories: '个分类',
    statDeclared: '声明范围',
    yourRuntime: '你的 DSH 版本',
    change: '修改',
    picksTitle: '编辑精选',
    picksNote: '从已验证兼容的插件里，挑出五个体面、好用、装完就能感受到差别的。',
    collectionsTitle: '按场景逛',
    collectionsNote: '四组工作流，直接开箱。',
    browseTitle: '全部插件',
    browseNote: '兼容性由 engines.dsh 计算。下载量来自 npm 近 30 天数据，评分为下载、Stars、新鲜度与兼容性的综合分，不是用户评价。',
    filters: '筛选',
    reset: '重置',
    compatFilter: '兼容性',
    categoryFilter: '分类',
    savedFilter: '我的收藏',
    savedOnly: '只看收藏',
    filterTip: '未声明版本范围的插件不一定会坏，但 DSH 无法替你保证。',
    sortBy: '排序',
    sortRecommended: '推荐',
    sortNewest: '最近发布',
    sortName: '名称 A–Z',
    sortDownloads: '下载最多',
    sortRating: '评分最高',
    downloads30d: '近 30 天下载',
    stars: 'GitHub Stars',
    rating: '综合评分',
    ratingOutOf: '满分 5',
    ratingFormula: '下载 40% · Stars 30% · 新鲜度 15% · 兼容性 15%',
    ratingNote: '综合评分由数据指标计算，不是用户评价。',
    downloadsWindow: '统计窗口',
    noStats: '暂无数据',
    per30d: '30 天',
    per30dShort: '30天',
    downloadShort: '下载',
    showing: '显示',
    pluginsWord: '个插件',
    loadMore: '加载更多',
    remaining: '剩余',
    emptyTitle: '没有找到这个组合',
    emptyBody: '换一个关键词，或者把兼容性筛选放宽一点。',
    emptyReset: '清空筛选',
    installTitle: '把整个市场<br>搬进 DSH。',
    installBody: '不用离开对话框。把这个索引加进 DSH 的 Discover，之后搜索、看兼容性、安装，都在 Harness 里完成。',
    stepOne: '在 Plugins 页打开 <b>More → Experimental plugins</b>，启用 <b>Custom plugin markets</b>。',
    stepTwo: '进入 <b>Discover → Index sources</b>，粘贴右侧的索引地址。',
    stepThree: '搜索插件，确认来源，然后安装。',
    copyCompat: '复制兼容索引',
    moreOptions: '更多接入方式 →',
    pasteInDiscover: '粘贴到 Discover → Index sources',
    terminalNote: '索引为 format 1 · 由 DSH 原生校验',
    submitTitle: '你的插件，也应该在这里。',
    submitBody: '这个目录由 GitHub 上的社区数据生成。提交仓库、补充描述，或者直接参与改进市场本身。',
    submitCta: '提交插件',
    viewDsh: '查看 DSH',
    footerTagline: '给 Harness 装点好东西。',
    footerSource: '数据源',
    footerDisclaimer: '社区项目，与 DeepSeek 官方无关。安装第三方插件会在你的机器上执行代码，请先阅读源码。',
    marketDialogTitle: '把市场接进 DSH',
    marketDialogSub: '添加一个索引源，Discover 里就能搜到同样的插件。',
    recommended: '推荐',
    verifiedIndex: '已验证兼容索引',
    fullIndex: '完整目录',
    copyAndAdd: '复制索引地址',
    copyFullIndex: '复制完整索引',
    marketDialogNote: 'Custom plugin markets 目前是实验功能。找不到入口时，改用命令行安装单个插件。',
    cliTitle: '或者，直接装一个',
    runtimeTitle: '你的 DSH 版本',
    runtimeSub: '兼容性按这个版本重新计算。它只保存在本地浏览器里。',
    runtimeLabel: '版本号',
    apply: '应用',
    runtimeHint: '版本号取自 DSH 的 package.json。不确定就保留默认值。',
    invalidVersion: '这不是一个有效的 SemVer 版本号',
    runtimeChanged: '已按 DSH 版本重新计算',
    compatAll: '全部插件',
    compatOk: '已验证兼容',
    compatUnknown: '未声明范围',
    compatBad: '不兼容',
    compatPillOk: '兼容',
    compatPillUnknown: '未声明',
    compatPillBad: '不兼容',
    rangeOkTitle: '兼容当前 DSH',
    rangeOkBody: '声明的 engines.dsh 接受这个版本，安装器不会拦截。',
    rangeUnknownTitle: '未声明兼容范围',
    rangeUnknownBody: '包没有声明 engines.dsh。安装器不会拦截，但 DSH 无法保证兼容性。',
    rangeBadTitle: '与当前 DSH 不兼容',
    rangeBadBody: '声明的范围不接受这个版本。升级 DSH，或使用 version exemption（风险自负）。',
    install: '安装',
    view: '查看',
    copyCommand: '复制安装命令',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动选择命令',
    openGithub: '打开 GitHub',
    save: '收藏',
    saved: '已收藏',
    removeSaved: '取消收藏',
    detailVersion: '版本',
    detailPublished: '发布于',
    detailPackage: 'npm 包',
    detailCategory: '分类',
    detailSource: '安装来源',
    editorPick: '编辑推荐',
    securityNote: '安装第三方插件会在本机执行代码。请先阅读仓库源码，并确认你信任作者。',
    savedToast: '已加入收藏',
    unsavedToast: '已取消收藏',
    collectionChip: '合集',
    categoryChip: '分类',
    compatChip: '兼容性',
    queryChip: '搜索',
    allCategories: '全部分类',
    updated: '同步于',
    justNow: '刚刚',
    today: '今天',
    yesterday: '昨天',
    daysAgo: '{n} 天前',
    monthsAgo: '{n} 个月前',
    yearsAgo: '{n} 年前',
    future: '即将发布',
    marketUpdated: '索引同步',
    copyIndex: '索引地址已复制',
    openFilters: '打开筛选',
    closeFilters: '完成',
    collectionHint: '正在查看合集',
    resultUnit: '个结果',
    noRepo: '没有 GitHub 仓库',
    na: '—',
    footerTheme: '切换主题',
    themeLight: '切换到浅色主题',
    themeDark: '切换到深色主题',
    langLabel: '切换语言',
    removeFilter: '移除筛选',
    close: '关闭',
  },
  en: {
    skip: 'Skip to plugins',
    navPicks: 'Picks',
    navBrowse: 'All plugins',
    navInstall: 'Connect DSH',
    addToDsh: 'Add to DSH',
    heroEyebrow: 'COMMUNITY PLUGIN INDEX · DAILY SYNC',
    heroSub: 'Find the one that actually fits your build of DSH among 3,800+ community plugins. Compatibility first, install second.',
    heroFoot: 'Community-maintained. Data from awesome-dsh-plugin. Not an official project.',
    tryLabel: 'Try',
    verifiedShort: 'verified',
    statPlugins: 'plugins',
    statCategories: 'categories',
    statDeclared: 'declare a range',
    yourRuntime: 'your DSH version',
    change: 'change',
    picksTitle: 'The short list',
    picksNote: 'Five plugins from the verified set that are useful, well-made, and make a difference on day one.',
    collectionsTitle: 'Shop by workflow',
    collectionsNote: 'Four starting points, already assembled.',
    browseTitle: 'Every plugin',
    browseNote: 'Compatibility comes from engines.dsh. Downloads are npm data for the last 30 days. The Harness score blends downloads, stars, freshness and compatibility — it is not a user review.',
    filters: 'Filters',
    reset: 'Reset',
    compatFilter: 'Compatibility',
    categoryFilter: 'Category',
    savedFilter: 'Saved',
    savedOnly: 'Saved only',
    filterTip: 'A plugin without a declared range is not necessarily broken, but DSH cannot promise it will work.',
    sortBy: 'Sort',
    sortRecommended: 'Recommended',
    sortNewest: 'Newest',
    sortName: 'Name A–Z',
    sortDownloads: 'Most downloaded',
    sortRating: 'Top rated',
    downloads30d: 'Downloads · 30 days',
    stars: 'GitHub stars',
    rating: 'Harness score',
    ratingOutOf: 'out of 5',
    ratingFormula: '40% downloads · 30% stars · 15% freshness · 15% compatibility',
    ratingNote: 'A data-derived score, not a user review.',
    downloadsWindow: 'Window',
    noStats: 'No data',
    per30d: '30 days',
    per30dShort: '30d',
    downloadShort: 'downloads',
    showing: 'Showing',
    pluginsWord: 'plugins',
    loadMore: 'Load more',
    remaining: 'remaining',
    emptyTitle: 'Nothing matches that combination',
    emptyBody: 'Try another keyword, or loosen the compatibility filter.',
    emptyReset: 'Clear filters',
    installTitle: 'Move the whole market<br>into DSH.',
    installBody: 'No need to leave the chat. Add this index to DSH Discover, then search, compare compatibility and install from inside Harness.',
    stepOne: 'In Plugins, open <b>More → Experimental plugins</b> and enable <b>Custom plugin markets</b>.',
    stepTwo: 'Go to <b>Discover → Index sources</b> and paste the index URL.',
    stepThree: 'Search, confirm the source, install.',
    copyCompat: 'Copy verified index',
    moreOptions: 'More ways to connect →',
    pasteInDiscover: 'paste in Discover → Index sources',
    terminalNote: 'format 1 index · validated by DSH',
    submitTitle: 'Your plugin belongs here too.',
    submitBody: 'This directory is generated from community data on GitHub. Submit a repo, improve a description, or help build the market itself.',
    submitCta: 'Submit a plugin',
    viewDsh: 'View DSH',
    footerTagline: 'A little better every day.',
    footerSource: 'Data source',
    footerDisclaimer: 'A community project, not affiliated with DeepSeek. Installing third-party plugins runs code on your machine. Read the source first.',
    marketDialogTitle: 'Connect the market to DSH',
    marketDialogSub: 'Add one index source and the same plugins appear in Discover.',
    recommended: 'Recommended',
    verifiedIndex: 'Verified-compatible index',
    fullIndex: 'Full catalog',
    copyAndAdd: 'Copy index URL',
    copyFullIndex: 'Copy full index',
    marketDialogNote: 'Custom plugin markets is experimental. If you cannot find it, install a single plugin from the CLI instead.',
    cliTitle: 'Or install one directly',
    runtimeTitle: 'Your DSH version',
    runtimeSub: 'Compatibility is recalculated for this version. It stays in your browser.',
    runtimeLabel: 'Version',
    apply: 'Apply',
    runtimeHint: 'Use the version from DSH’s package.json. Keep the default if you are unsure.',
    invalidVersion: 'That is not a valid SemVer version',
    runtimeChanged: 'Compatibility recalculated for DSH',
    compatAll: 'All plugins',
    compatOk: 'Verified compatible',
    compatUnknown: 'No declared range',
    compatBad: 'Incompatible',
    compatPillOk: 'compatible',
    compatPillUnknown: 'undeclared',
    compatPillBad: 'incompatible',
    rangeOkTitle: 'Works with this DSH',
    rangeOkBody: 'The declared engines.dsh range accepts this version, so installation will not be blocked.',
    rangeUnknownTitle: 'No compatibility range',
    rangeUnknownBody: 'The package does not declare engines.dsh. Installation will not be blocked, but DSH cannot guarantee it works.',
    rangeBadTitle: 'Not compatible with this DSH',
    rangeBadBody: 'The declared range rejects this version. Upgrade DSH, or use a version exemption at your own risk.',
    install: 'Install',
    view: 'View',
    copyCommand: 'Copy install command',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed — select the command manually',
    openGithub: 'Open GitHub',
    save: 'Save',
    saved: 'Saved',
    removeSaved: 'Remove from saved',
    detailVersion: 'Version',
    detailPublished: 'Published',
    detailPackage: 'npm package',
    detailCategory: 'Category',
    detailSource: 'Install source',
    editorPick: 'Editor’s pick',
    securityNote: 'Installing a third-party plugin runs code on your machine. Read the repository and trust the author before you install.',
    savedToast: 'Saved',
    unsavedToast: 'Removed from saved',
    collectionChip: 'Collection',
    categoryChip: 'Category',
    compatChip: 'Compatibility',
    queryChip: 'Search',
    allCategories: 'All categories',
    updated: 'Synced',
    justNow: 'just now',
    today: 'today',
    yesterday: 'yesterday',
    daysAgo: '{n} days ago',
    monthsAgo: '{n} months ago',
    yearsAgo: '{n} years ago',
    future: 'publishing soon',
    marketUpdated: 'Index synced',
    copyIndex: 'Index URL copied',
    openFilters: 'Open filters',
    closeFilters: 'Done',
    collectionHint: 'Viewing collection',
    resultUnit: 'results',
    noRepo: 'No GitHub repository',
    na: '—',
    footerTheme: 'Theme',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    langLabel: 'Switch language',
    removeFilter: 'Remove filter',
    close: 'Close',
  },
}

const CATEGORY_COLORS = {
  agi: '#c9f75a',
  ui: '#9cbbff',
  usage: '#e3c96b',
  theme: '#ff9fce',
  model: '#ff9fce',
  identity: '#c5a6ff',
  session: '#80e6d2',
  memory: '#a9e86a',
  tools: '#c9f75a',
  wsl: '#9cbbff',
  browser: '#9cbbff',
  vision: '#c5a6ff',
  voice: '#80e6d2',
  docs: '#e3c96b',
  skill: '#c9f75a',
  workflow: '#c5a6ff',
  git: '#ffbc72',
  notify: '#ffbc72',
  dev: '#ffbc72',
  security: '#ff8d7a',
  remote: '#80e6d2',
  market: '#c9f75a',
  fun: '#ff9fce',
}

const state = {
  ready: false,
  lang: readString('hm.lang', 'zh'),
  theme: readString('hm.theme', 'dark'),
  runtime: readString('hm.runtime', DEFAULT_RUNTIME),
  query: '',
  category: 'all',
  compat: 'all',
  savedOnly: false,
  collection: null,
  sort: 'recommended',
  visible: PAGE_SIZE,
  loading: true,
}

let PLUGINS = []
let STATS = {}
let CURATED = { picks: [], collections: [] }
let BY_NAME = new Map()
let SAVED = new Set()
let categoryMeta = {}
let compatCache = new Map()
let ratingCache = new Map()
let currentDetailName = null
let toastTimer = null
let searchTimer = null

/* ---------------------------------------------------------
   Storage and small helpers
   --------------------------------------------------------- */
function readString(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ?? fallback
  } catch {
    return fallback
  }
}

function storeString(key, value) {
  try { localStorage.setItem(key, value) } catch { /* private mode */ }
}

function readSaved() {
  try {
    const value = JSON.parse(localStorage.getItem('hm.saved') ?? '[]')
    return new Set(Array.isArray(value) ? value : [])
  } catch {
    return new Set()
  }
}

function persistSaved() {
  try { localStorage.setItem('hm.saved', JSON.stringify([...SAVED])) } catch { /* ignore */ }
}

function t(key, params = {}) {
  let value = STRINGS[state.lang]?.[key] ?? STRINGS.zh[key] ?? key
  for (const [name, replacement] of Object.entries(params)) {
    value = value.replaceAll(`{${name}}`, String(replacement))
  }
  return value
}

function normalize(value) {
  return String(value ?? '').normalize('NFKC').toLowerCase()
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function formatNumber(value) {
  return new Intl.NumberFormat(state.lang === 'zh' ? 'zh-CN' : 'en-US').format(value)
}

function formatBytes(bytes) {
  if (!bytes) return t('na')
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function formatDate(timestamp, options = {}) {
  if (!timestamp) return t('na')
  const date = new Date(timestamp * 1000)
  return new Intl.DateTimeFormat(state.lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }).format(date)
}

function relativeTime(timestamp) {
  if (!timestamp) return t('na')
  const diffMs = timestamp * 1000 - Date.now()
  const abs = Math.abs(diffMs)
  if (diffMs > 0) return t('future')
  if (abs < 60 * 60 * 1000) return t('justNow')
  const rtf = new Intl.RelativeTimeFormat(state.lang === 'zh' ? 'zh-CN' : 'en-US', { numeric: 'auto' })
  if (abs < 24 * 60 * 60 * 1000) {
    return rtf.format(Math.round(diffMs / (60 * 60 * 1000)), 'hour')
  }
  const days = Math.round(diffMs / (24 * 60 * 60 * 1000))
  if (Math.abs(days) < 30) return rtf.format(days, 'day')
  const months = Math.round(days / 30)
  if (Math.abs(months) < 18) return rtf.format(months, 'month')
  return rtf.format(Math.round(days / 365), 'year')
}

function categoryTitle(id) {
  return categoryMeta[id]?.[state.lang] ?? categoryMeta[id]?.en ?? id
}

function categoryColor(id) {
  return CATEGORY_COLORS[id] ?? 'var(--acid)'
}

function compatOf(plugin) {
  if (!plugin.engines) {
    return { kind: 'unknown', range: '', title: t('rangeUnknownTitle'), body: t('rangeUnknownBody') }
  }
  const key = `${state.runtime}|${plugin.engines}`
  if (compatCache.has(key)) return compatCache.get(key)
  let result
  try {
    if (!window.semver?.validRange?.(plugin.engines)) {
      result = { kind: 'unknown', range: plugin.engines, invalid: true, title: t('rangeUnknownTitle'), body: t('rangeUnknownBody') }
    } else {
      const ok = window.semver.satisfies(state.runtime, plugin.engines, { includePrerelease: true })
      result = ok
        ? { kind: 'ok', range: plugin.engines, title: t('rangeOkTitle'), body: t('rangeOkBody') }
        : { kind: 'bad', range: plugin.engines, title: t('rangeBadTitle'), body: t('rangeBadBody') }
    }
  } catch {
    result = { kind: 'unknown', range: plugin.engines, invalid: true, title: t('rangeUnknownTitle'), body: t('rangeUnknownBody') }
  }
  compatCache.set(key, result)
  return result
}

function ratingOf(plugin) {
  const key = `${state.runtime}|${plugin.name}`
  if (ratingCache.has(key)) return ratingCache.get(key)
  if (plugin.downloads === null && plugin.stars === null) {
    ratingCache.set(key, null)
    return null
  }
  const downloads = Math.max(0, Number(plugin.downloads) || 0)
  const stars = Math.max(0, Number(plugin.stars) || 0)
  const ageDays = Math.max(0, (Date.now() / 1000 - plugin.published) / 86400)
  const popularity = Math.min(1, Math.log10(downloads + 1) / 6)
  const community = Math.min(1, Math.log10(stars + 1) / 4.5)
  const freshness = Math.exp(-ageDays / 240)
  const compatKind = compatOf(plugin).kind
  const compatibility = compatKind === 'ok' ? 1 : compatKind === 'unknown' ? 0.7 : 0.15
  const raw = popularity * 0.4 + community * 0.3 + freshness * 0.15 + compatibility * 0.15
  const rating = Math.round((2 + raw * 3) * 10) / 10
  ratingCache.set(key, rating)
  return rating
}

function compactNumber(value) {
  if (value === null || value === undefined || !Number.isFinite(Number(value))) return t('noStats')
  const number = Number(value)
  if (number < 1000) return formatNumber(number)
  if (state.lang === 'zh') {
    if (number >= 100_000_000) return `${(number / 100_000_000).toFixed(1).replace(/\.0$/u, '')}亿`
    if (number >= 10_000) return `${(number / 10_000).toFixed(1).replace(/\.0$/u, '')}万`
    return formatNumber(number)
  }
  if (number >= 1_000_000_000) return `${(number / 1_000_000_000).toFixed(1).replace(/\.0$/u, '')}b`
  if (number >= 1_000_000) return `${(number / 1_000_000).toFixed(1).replace(/\.0$/u, '')}m`
  return `${(number / 1_000).toFixed(number >= 100_000 ? 0 : 1).replace(/\.0$/u, '')}k`
}

function downloadsTitle(plugin) {
  if (plugin.downloads === null) return t('noStats')
  const range = plugin.downloadsStart && plugin.downloadsEnd
    ? ` · ${plugin.downloadsStart} → ${plugin.downloadsEnd}`
    : ''
  return `${t('downloads30d')}: ${formatNumber(plugin.downloads)}${range}`
}

function ratingTitle(plugin) {
  const rating = ratingOf(plugin)
  if (rating === null) return t('noStats')
  return `${t('rating')}: ${rating.toFixed(1)} / 5 · ${t('ratingFormula')}`
}

function isCurated(name) {
  return CURATED.picks.some((pick) => pick.name === name)
}

function curatedReason(name) {
  return CURATED.picks.find((pick) => pick.name === name)?.reason?.[state.lang]
    ?? CURATED.picks.find((pick) => pick.name === name)?.reason?.en
}

function score(plugin) {
  const compat = compatOf(plugin).kind
  let value = 0
  if (compat === 'ok') value += 3000
  else if (compat === 'unknown') value += 600
  else value -= 1200
  const curatedIndex = CURATED.picks.findIndex((pick) => pick.name === plugin.name)
  if (curatedIndex >= 0) value += 940 - curatedIndex * 15
  const ageDays = Math.max(0, (Date.now() / 1000 - plugin.published) / 86400)
  value += Math.max(0, 120 - ageDays / 3)
  value += Math.min(40, plugin.description[state.lang]?.length ?? 0) / 4
  const downloads = Number(plugin.downloads) || 0
  value += Math.min(1, Math.log10(downloads + 1) / 6) * 220
  value += (ratingOf(plugin) ?? 0) * 35
  return value
}

function safeUrl(url) {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '#'
  } catch {
    return '#'
  }
}

function avatarUrl(plugin) {
  if (!plugin.owner) return ''
  return `https://github.com/${encodeURIComponent(plugin.owner)}.png?size=96`
}

function makeAvatar(plugin, className = 'plugin-avatar') {
  const wrap = document.createElement('div')
  wrap.className = className
  wrap.style.setProperty('--cat', categoryColor(plugin.category))
  const initial = (plugin.repoName || plugin.owner || plugin.name).replace(/^@/, '').slice(0, 1).toUpperCase()
  const url = avatarUrl(plugin)
  wrap.textContent = initial
  wrap.style.position = 'relative'
  if (url) {
    const image = document.createElement('img')
    image.src = url
    image.alt = ''
    image.loading = 'lazy'
    image.decoding = 'async'
    image.referrerPolicy = 'no-referrer'
    wrap.append(image)
    image.addEventListener('error', () => image.remove(), { once: true })
    if (image.complete && image.naturalWidth === 0) image.remove()
  }
  return wrap
}

function highlightInto(element, text, tokens) {
  element.textContent = ''
  if (!tokens.length) {
    element.textContent = text
    return
  }
  const expression = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi')
  let cursor = 0
  for (const match of text.matchAll(expression)) {
    if (match.index > cursor) element.append(document.createTextNode(text.slice(cursor, match.index)))
    const mark = document.createElement('mark')
    mark.textContent = match[0]
    element.append(mark)
    cursor = match.index + match[0].length
  }
  if (cursor < text.length) element.append(document.createTextNode(text.slice(cursor)))
}

function copyText(text, message = t('copied')) {
  const fallback = () => {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.append(area)
    area.select()
    try {
      document.execCommand('copy')
      showToast(message)
    } catch {
      showToast(t('copyFailed'))
    } finally {
      area.remove()
    }
  }
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(message), fallback)
  } else {
    fallback()
  }
}

function showToast(message, icon = 'check') {
  const toast = $('#toast')
  const openDialog = document.querySelector('dialog[open]')
  if (openDialog && toast.parentElement !== openDialog) openDialog.append(toast)
  else if (!openDialog && toast.parentElement !== document.body) document.body.append(toast)
  toast.innerHTML = ''
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
  use.setAttribute('href', `#i-${icon}`)
  svg.append(use)
  toast.append(svg, document.createTextNode(message))
  toast.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toast.classList.remove('show')
    if (!document.querySelector('dialog[open]')) document.body.append(toast)
  }, 2400)
}

/* ---------------------------------------------------------
   Theme and language
   --------------------------------------------------------- */
function setTheme(theme, persist = true) {
  state.theme = theme
  document.documentElement.dataset.theme = theme
  if (persist) storeString('hm.theme', theme)
  const meta = $('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f3f4ec' : '#080a09')
  const toggle = $('#themeToggle')
  if (toggle) toggle.setAttribute('aria-label', theme === 'light' ? t('themeDark') : t('themeLight'))
}

function setLang(lang, rerender = true) {
  state.lang = lang === 'en' ? 'en' : 'zh'
  storeString('hm.lang', state.lang)
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en'
  $('#langToggle').textContent = state.lang === 'zh' ? 'EN' : '中文'
  document.title = state.lang === 'zh'
    ? 'Harness Market · DeepSeek Harness 插件市场'
    : 'Harness Market · A marketplace for DeepSeek Harness plugins'
  compatCache = new Map()
  applyI18n()
  if (rerender && state.ready) renderAll()
  if (state.ready && currentDetailName && $('#pluginDialog').open) openPlugin(currentDetailName, false)
}

function applyI18n() {
  $$('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n)
  })
  $$('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml)
  })
  const search = $('#searchInput')
  if (search) {
    const kbd = $('.search-kbd')
    if (kbd) kbd.innerHTML = /Mac|iPhone|iPad/.test(navigator.platform) ? '<kbd>⌘</kbd><kbd>K</kbd>' : '<kbd>Ctrl</kbd><kbd>K</kbd>'
    search.placeholder = state.lang === 'zh' ? '搜索插件、作者或能力…' : 'Search plugins, authors, capabilities…'
    search.setAttribute('aria-label', state.lang === 'zh' ? '搜索插件' : 'Search plugins')
  }
  $$('.quick-search [data-query-en]').forEach((button) => {
    button.textContent = state.lang === 'en' ? button.dataset.queryEn : button.dataset.query
  })
  const heroTitle = $('#heroTitle')
  if (heroTitle) {
    heroTitle.innerHTML = state.lang === 'zh'
      ? '给 Harness<br><em>装点好东西</em>。'
      : 'Give Harness<br><em>something better</em>.'
  }
  $('#filters')?.setAttribute('aria-label', t('filters'))
  const filtersClose = $('#closeFilters')
  if (filtersClose) filtersClose.textContent = t('closeFilters')
  const langToggle = $('#langToggle')
  if (langToggle) langToggle.setAttribute('aria-label', t('langLabel'))
  const themeToggle = $('#themeToggle')
  if (themeToggle) themeToggle.setAttribute('aria-label', state.theme === 'light' ? t('themeDark') : t('themeLight'))
  renderRuntimeLabel()
}

function initStaticAvatars() {
  $$('.stack-avatar img').forEach((image) => {
    const drop = () => image.remove()
    image.addEventListener('error', drop, { once: true })
    if (image.complete && image.naturalWidth === 0) drop()
  })
}

function renderRuntimeLabel() {
  const label = $('#runtimeLabel')
  if (label) label.textContent = `v${state.runtime}`
  const input = $('#runtimeInput')
  if (input && !$('#runtimeDialog').open) input.value = state.runtime
}

/* ---------------------------------------------------------
   Data loading
   --------------------------------------------------------- */
async function loadData() {
  renderSkeletons()
  try {
    const [pluginsResponse, statsResponse, curatedResponse] = await Promise.all([
      fetch('data/plugins.json'),
      fetch('data/stats.json'),
      fetch('data/curated.json'),
    ])
    if (!pluginsResponse.ok || !statsResponse.ok || !curatedResponse.ok) {
      throw new Error('data fetch failed')
    }
    const [plugins, stats, curated] = await Promise.all([
      pluginsResponse.json(),
      statsResponse.json(),
      curatedResponse.json(),
    ])
    PLUGINS = plugins
    STATS = stats
    CURATED = curated
    categoryMeta = stats.categoryTitles ?? {}
    BY_NAME = new Map(PLUGINS.map((plugin) => [plugin.name, plugin]))
    for (const plugin of PLUGINS) {
      plugin._haystack = normalize([
        plugin.name,
        plugin.title,
        plugin.owner,
        plugin.repoName,
        plugin.description.en,
        plugin.description.zh,
        plugin.category,
        categoryTitle(plugin.category),
        plugin.engines,
      ].join(' '))
    }
    state.runtime = stats.runtime || state.runtime
    state.loading = false
    state.ready = true
    parseInitialState()
    renderAll()
  } catch (error) {
    console.error(error)
    state.loading = false
    renderError()
  }
}

function parseInitialState() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('q')) state.query = params.get('q')
  if (params.get('cat') && Object.hasOwn(STATS.categories ?? {}, params.get('cat'))) state.category = params.get('cat')
  if (params.get('compat')) state.compat = params.get('compat')
  if (params.get('sort')) state.sort = ['recommended', 'newest', 'name', 'downloads', 'rating'].includes(params.get('sort')) ? params.get('sort') : 'recommended'
  if (params.get('saved') === '1') state.savedOnly = true
  if (params.get('collection')) state.collection = CURATED.collections.some((item) => item.id === params.get('collection')) ? params.get('collection') : null
  if (params.get('compat') && !['all', 'ok', 'unknown', 'bad'].includes(state.compat)) state.compat = 'all'
  if (!$('#runtimeDialog').open) {
    state.runtime = readString('hm.runtime', state.runtime)
    if (!window.semver?.valid?.(state.runtime)) state.runtime = STATS.runtime ?? DEFAULT_RUNTIME
  }
  const search = $('#searchInput')
  if (search) search.value = state.query
  if ($('#searchClear')) $('#searchClear').hidden = !state.query
  if ($('#sortSelect')) $('#sortSelect').value = state.sort
  if ($('#savedToggle')) $('#savedToggle').checked = state.savedOnly
}

function renderError() {
  const grid = $('#pluginGrid')
  grid.innerHTML = ''
  const box = document.createElement('div')
  box.className = 'empty-state'
  box.innerHTML = `
    <div class="empty-mark"><svg><use href="#i-alert"></use></svg></div>
    <h3>${state.lang === 'zh' ? '数据没有加载出来' : 'The data did not load'}</h3>
    <p>${state.lang === 'zh' ? '请通过本地服务器打开（npm run dev），而不是直接双击 index.html。' : 'Open this through the local server (npm run dev), not by double-clicking index.html.'}</p>
  `
  grid.append(box)
  $('#resultCount').textContent = t('na')
}

/* ---------------------------------------------------------
   Filtering / sorting
   --------------------------------------------------------- */
function matches(plugin, options = {}) {
  if (state.collection) {
    const collection = CURATED.collections.find((item) => item.id === state.collection)
    if (!collection?.names.includes(plugin.name)) return false
  }
  if (!options.ignoreCategory && state.category !== 'all' && plugin.category !== state.category) return false
  if (!options.ignoreCompat && state.compat !== 'all' && compatOf(plugin).kind !== state.compat) return false
  if (state.savedOnly && !SAVED.has(plugin.name)) return false
  if (state.query.trim()) {
    const tokens = normalize(state.query).trim().split(/\s+/).filter(Boolean)
    if (!tokens.every((token) => plugin._haystack.includes(token))) return false
  }
  return true
}

function filteredPlugins() {
  const result = PLUGINS.filter((plugin) => matches(plugin))
  if (state.sort === 'newest') {
    result.sort((a, b) => b.published - a.published || a.name.localeCompare(b.name))
  } else if (state.sort === 'downloads') {
    result.sort((a, b) => (b.downloads ?? -1) - (a.downloads ?? -1) || (ratingOf(b) ?? 0) - (ratingOf(a) ?? 0))
  } else if (state.sort === 'rating') {
    result.sort((a, b) => (ratingOf(b) ?? -1) - (ratingOf(a) ?? -1) || (b.downloads ?? -1) - (a.downloads ?? -1))
  } else if (state.sort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    result.sort((a, b) => score(b) - score(a) || b.published - a.published)
  }
  return result
}

/* ---------------------------------------------------------
   Hero / ticker
   --------------------------------------------------------- */
function countUp(element, target, format = formatNumber) {
  if (!element) return
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduced || target < 40) {
    element.textContent = format(target)
    return
  }
  const duration = 850
  const start = performance.now()
  const from = 0
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)
    element.textContent = format(Math.round(from + (target - from) * eased))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function renderIndexUrls() {
  const base = indexBase()
  const compat = $('#compatIndexUrl')
  const full = $('#fullIndexUrl')
  if (compat) compat.textContent = `${base}data/market-compatible.json`
  if (full) full.textContent = `${base}data/market.json`
  const live = $('#terminalLive')
  if (live) live.textContent = `${formatNumber(STATS.compatible ?? 938)} ${state.lang === 'zh' ? '个插件' : 'plugins'}`
  const compatComment = $('#terminalCompatComment')
  if (compatComment) compatComment.textContent = state.lang === 'zh' ? `# 已验证兼容 · DSH ${STATS.runtime ?? state.runtime}` : `# verified · DSH ${STATS.runtime ?? state.runtime}`
  const fullComment = $('#terminalFullComment')
  if (fullComment) fullComment.textContent = state.lang === 'zh' ? `# 完整目录 · ${formatNumber(STATS.total ?? 3823)} 个插件` : `# full catalog · ${formatNumber(STATS.total ?? 3823)} plugins`
}

function renderHero() {
  if (!STATS.total) return
  const compatibleNow = PLUGINS.filter((plugin) => compatOf(plugin).kind === 'ok').length
  countUp($('#scanCompatible'), compatibleNow)
  countUp($('#statTotal'), STATS.total)
  countUp($('#statCategories'), Object.keys(STATS.categories).length)
  countUp($('#statDeclared'), STATS.declared)
  const updated = $('#heroUpdated')
  if (updated) {
    const stamp = STATS.generatedAt ? Date.parse(STATS.generatedAt) : Date.now()
    const seconds = Math.floor(stamp / 1000)
    updated.textContent = `${relativeTime(seconds)}`
    updated.title = formatDate(seconds)
  }
  const dialogCompat = $('#dialogCompatCount')
  if (dialogCompat) dialogCompat.textContent = formatNumber(STATS.compatible)
  const dialogFull = $('#dialogFullCount')
  if (dialogFull) dialogFull.textContent = formatNumber(STATS.total)
  const compatSize = $('#dialogCompatSize')
  if (compatSize) compatSize.textContent = formatBytes(STATS.sizes?.compatible)
  const fullSize = $('#dialogFullSize')
  if (fullSize) fullSize.textContent = formatBytes(STATS.sizes?.market)
  const dialogRuntime = $('#dialogCompatRuntime')
  if (dialogRuntime) dialogRuntime.textContent = `DSH ${STATS.runtime ?? state.runtime}`
}

function renderTicker() {
  const track = $('#tickerTrack')
  if (!track || !STATS.categories) return
  track.innerHTML = ''
  const categories = Object.keys(STATS.categories)
    .sort((a, b) => STATS.categories[b] - STATS.categories[a])
  const item = (id) => {
    const span = document.createElement('span')
    span.className = 'ticker-item'
    span.style.setProperty('--cat', categoryColor(id))
    const dot = document.createElement('i')
    const name = document.createElement('b')
    name.textContent = categoryTitle(id)
    const count = document.createTextNode(` ${formatNumber(STATS.categories[id])}`)
    span.append(dot, name, count)
    return span
  }
  for (let round = 0; round < 2; round += 1) {
    for (const id of categories) track.append(item(id))
  }
}

/* ---------------------------------------------------------
   Featured / collections
   --------------------------------------------------------- */
function renderFeatured() {
  const grid = $('#featuredGrid')
  if (!grid) return
  grid.innerHTML = ''
  const picks = CURATED.picks
    .map((pick) => ({ ...pick, plugin: BY_NAME.get(pick.name) }))
    .filter((pick) => pick.plugin)
  picks.forEach((pick, index) => {
    const plugin = pick.plugin
    const card = document.createElement('article')
    card.className = `pick-card${index === 0 ? ' pick-lead' : ''}`
    card.dataset.name = plugin.name
    card.dataset.glyph = (categoryTitle(plugin.category) || plugin.category || '?').slice(0, 1).toUpperCase()
    card.style.setProperty('--cat', categoryColor(plugin.category))

    const top = document.createElement('div')
    top.className = 'pick-top'
    top.append(makeAvatar(plugin, 'pick-avatar'))
    const cat = document.createElement('span')
    cat.className = 'pick-cat'
    const dot = document.createElement('i')
    cat.append(dot, document.createTextNode(categoryTitle(plugin.category)))
    top.append(cat)
    const editor = document.createElement('span')
    editor.className = 'pick-editor'
    editor.textContent = index === 0 ? t('editorPick').toUpperCase() : `0${index + 1}`
    top.append(editor)
    card.append(top)

    const title = document.createElement('h3')
    title.className = 'pick-title'
    const titleButton = document.createElement('button')
    titleButton.type = 'button'
    titleButton.className = 'title-link'
    titleButton.textContent = plugin.title || plugin.name
    titleButton.dataset.open = plugin.name
    title.append(titleButton)
    card.append(title)

    const repo = document.createElement('p')
    repo.className = 'pick-repo'
    repo.textContent = `${plugin.owner}/${plugin.repoName}`.replace(/^\/|\/$/g, '') || plugin.name
    card.append(repo)

    const reason = document.createElement('p')
    reason.className = 'pick-reason'
    reason.textContent = pick.reason?.[state.lang] ?? pick.reason?.en ?? plugin.description[state.lang] ?? plugin.description.en
    card.append(reason)

    const bottom = document.createElement('div')
    bottom.className = 'pick-bottom'
    const version = document.createElement('span')
    version.className = 'pick-version'
    version.innerHTML = `<span>v</span><b></b>`
    version.querySelector('b').textContent = plugin.version
    bottom.append(version)

    const pickStats = document.createElement('span')
    pickStats.className = 'pick-stats'
    const pickDownloads = document.createElement('span')
    pickDownloads.className = 'pick-stat'
    pickDownloads.title = downloadsTitle(plugin)
    pickDownloads.innerHTML = '<svg><use href="#i-download"></use></svg>'
    pickDownloads.append(document.createTextNode(plugin.downloads === null ? '—' : compactNumber(plugin.downloads)))
    const pickRatingValue = ratingOf(plugin)
    const pickRating = document.createElement('span')
    pickRating.className = 'pick-stat pick-stat-rating'
    pickRating.title = ratingTitle(plugin)
    pickRating.innerHTML = '<svg><use href="#i-star"></use></svg>'
    pickRating.append(document.createTextNode(pickRatingValue === null ? '—' : pickRatingValue.toFixed(1)))
    pickStats.append(pickDownloads, pickRating)
    bottom.append(pickStats)

    const open = document.createElement('span')
    open.className = 'pick-open'
    open.innerHTML = '<svg><use href="#i-arrow"></use></svg>'
    bottom.append(open)
    card.append(bottom)

    grid.append(card)
  })
}

function renderCollections() {
  const grid = $('#collectionGrid')
  if (!grid) return
  grid.innerHTML = ''
  CURATED.collections.forEach((collection, index) => {
    const card = document.createElement('article')
    card.className = 'collection-card'
    card.dataset.collection = collection.id
    card.tabIndex = 0
    card.setAttribute('role', 'button')
    if (state.collection === collection.id) {
      card.style.borderColor = 'var(--acid)'
      card.style.background = 'var(--surface-2)'
    }

    const number = document.createElement('span')
    number.className = 'collection-num'
    number.textContent = `0${index + 1} / ${collection.id.toUpperCase()}`
    const arrow = document.createElement('span')
    arrow.className = 'collection-arrow'
    arrow.innerHTML = '<svg><use href="#i-up-right"></use></svg>'
    const title = document.createElement('h4')
    title.textContent = collection.title[state.lang] ?? collection.title.en
    const description = document.createElement('p')
    description.textContent = collection.description[state.lang] ?? collection.description.en
    const list = document.createElement('div')
    list.className = 'collection-list'
    collection.names.slice(0, 4).forEach((name) => {
      const row = document.createElement('span')
      const dot = document.createElement('i')
      row.append(dot, document.createTextNode(name))
      list.append(row)
    })
    card.append(number, arrow, title, description, list)

    const activate = () => {
      state.collection = state.collection === collection.id ? null : collection.id
      if (state.collection) {
        state.category = 'all'
        state.compat = 'all'
        state.savedOnly = false
        state.query = ''
        state.visible = PAGE_SIZE
        const search = $('#searchInput')
        if (search) search.value = ''
        const saved = $('#savedToggle')
        if (saved) saved.checked = false
        if ($('#searchClear')) $('#searchClear').hidden = true
      }
      syncUrl()
      renderAll()
      if (state.collection) {
        $('#browse')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    card.addEventListener('click', activate)
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        activate()
      }
    })
    grid.append(card)
  })
}

/* ---------------------------------------------------------
   Filter UI
   --------------------------------------------------------- */
function renderFilters() {
  const compatWrap = $('#compatFilters')
  const categoryWrap = $('#categoryFilters')
  if (!compatWrap || !categoryWrap) return

  const compatBase = PLUGINS.filter((plugin) => matches(plugin, { ignoreCompat: true }))
  const compatCounts = {
    all: compatBase.length,
    ok: compatBase.filter((plugin) => compatOf(plugin).kind === 'ok').length,
    unknown: compatBase.filter((plugin) => compatOf(plugin).kind === 'unknown').length,
    bad: compatBase.filter((plugin) => compatOf(plugin).kind === 'bad').length,
  }

  compatWrap.innerHTML = ''
  const compatRows = [
    { id: 'all', label: t('compatAll'), color: 'var(--faint)' },
    { id: 'ok', label: t('compatOk'), color: 'var(--ok)' },
    { id: 'unknown', label: t('compatUnknown'), color: 'var(--unknown)' },
    { id: 'bad', label: t('compatBad'), color: 'var(--danger)' },
  ]
  for (const row of compatRows) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'filter-row'
    button.dataset.compat = row.id
    button.dataset.filterKey = `compat:${row.id}`
    button.setAttribute('aria-pressed', String(state.compat === row.id))
    const dot = document.createElement('span')
    dot.className = 'dot'
    dot.style.setProperty('--dot', row.color)
    const label = document.createElement('span')
    label.textContent = row.label
    const count = document.createElement('span')
    count.className = 'count'
    count.textContent = formatNumber(compatCounts[row.id] ?? 0)
    button.append(dot, label, count)
    compatWrap.append(button)
  }

  const categoryBase = PLUGINS.filter((plugin) => matches(plugin, { ignoreCategory: true }))
  const categoryCounts = {}
  for (const plugin of categoryBase) categoryCounts[plugin.category] = (categoryCounts[plugin.category] ?? 0) + 1
  const categoryIds = Object.keys(categoryCounts)
    .sort((a, b) => categoryCounts[b] - categoryCounts[a] || categoryTitle(a).localeCompare(categoryTitle(b)))

  categoryWrap.innerHTML = ''
  const allRow = document.createElement('button')
  allRow.type = 'button'
  allRow.className = 'filter-row'
  allRow.dataset.category = 'all'
  allRow.dataset.filterKey = 'category:all'
  allRow.setAttribute('aria-pressed', String(state.category === 'all'))
  const allDot = document.createElement('span')
  allDot.className = 'dot'
  allDot.style.setProperty('--dot', 'var(--acid)')
  const allLabel = document.createElement('span')
  allLabel.textContent = t('allCategories')
  const allCount = document.createElement('span')
  allCount.className = 'count'
  allCount.textContent = formatNumber(categoryBase.length)
  allRow.append(allDot, allLabel, allCount)
  categoryWrap.append(allRow)

  for (const id of categoryIds) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'filter-row'
    button.dataset.category = id
    button.dataset.filterKey = `category:${id}`
    button.setAttribute('aria-pressed', String(state.category === id))
    const dot = document.createElement('span')
    dot.className = 'dot'
    dot.style.setProperty('--dot', categoryColor(id))
    const label = document.createElement('span')
    label.textContent = categoryTitle(id)
    const count = document.createElement('span')
    count.className = 'count'
    count.textContent = formatNumber(categoryCounts[id])
    button.append(dot, label, count)
    categoryWrap.append(button)
  }

  const resetButton = $('#resetFilters')
  if (resetButton) resetButton.hidden = !hasActiveFilters()
}

function hasActiveFilters() {
  return Boolean(state.query || state.category !== 'all' || state.compat !== 'all' || state.savedOnly || state.collection)
}

/* ---------------------------------------------------------
   Results
   --------------------------------------------------------- */
function renderSkeletons() {
  const grid = $('#pluginGrid')
  if (!grid) return
  grid.innerHTML = ''
  for (let index = 0; index < 6; index += 1) {
    const card = document.createElement('div')
    card.className = 'skeleton-card'
    card.innerHTML = '<span class="skeleton-avatar"></span><span class="skeleton-line w-40"></span><span class="skeleton-line w-80"></span><span class="skeleton-line w-70"></span><span class="skeleton-line w-90"></span><span class="skeleton-line w-50"></span>'
    grid.append(card)
  }
}

function renderResults(focusKey = '') {
  const grid = $('#pluginGrid')
  const results = filteredPlugins()
  const total = results.length
  if (state.visible > total) state.visible = Math.max(PAGE_SIZE, Math.ceil(total / PAGE_SIZE) * PAGE_SIZE)
  const visible = results.slice(0, state.visible)

  grid.innerHTML = ''
  visible.forEach((plugin, index) => {
    grid.append(renderPluginCard(plugin, index, state.query.trim() ? normalize(state.query).trim().split(/\s+/) : []))
  })

  const empty = $('#emptyState')
  empty.hidden = total !== 0
  const loadMore = $('#loadMore')
  loadMore.hidden = total === 0 || state.visible >= total
  const loadCount = $('#loadCount')
  if (loadCount) loadCount.textContent = total > state.visible ? `${formatNumber(total - state.visible)} ${t('remaining')}` : ''
  const resultCount = $('#resultCount')
  resultCount.innerHTML = ''
  if (total === 0) {
    resultCount.textContent = `0 ${t('pluginsWord')}`
  } else {
    const prefix = document.createTextNode(`${t('showing')} `)
    const range = document.createElement('strong')
    range.textContent = `${formatNumber(1)}–${formatNumber(Math.min(state.visible, total))}`
    const suffix = document.createElement('span')
    suffix.textContent = ` / ${formatNumber(total)} ${t('pluginsWord')}`
    resultCount.append(prefix, range, suffix)
  }

  renderActiveFilters()
  if (focusKey) {
    const escaped = window.CSS?.escape ? CSS.escape(focusKey) : focusKey
    document.querySelector(`[data-filter-key="${escaped}"]`)?.focus()
  }
}

function renderPluginCard(plugin, index, tokens) {
  const card = document.createElement('article')
  card.className = 'plugin-card'
  card.dataset.name = plugin.name
  card.style.setProperty('--cat', categoryColor(plugin.category))
  card.style.animationDelay = `${Math.min(index, 12) * 18}ms`
  if (SAVED.has(plugin.name)) card.classList.add('fav')

  const top = document.createElement('div')
  top.className = 'plugin-top'
  top.append(makeAvatar(plugin))

  const cat = document.createElement('div')
  cat.className = 'plugin-cat'
  const dot = document.createElement('i')
  const catName = document.createElement('span')
  catName.textContent = categoryTitle(plugin.category)
  const version = document.createElement('span')
  version.className = 'plugin-version'
  version.textContent = `v${plugin.version}`
  cat.append(dot, catName, version)
  top.append(cat)

  const fav = document.createElement('button')
  fav.type = 'button'
  fav.className = 'fav-btn'
  fav.dataset.fav = plugin.name
  fav.setAttribute('aria-pressed', String(SAVED.has(plugin.name)))
  fav.setAttribute('aria-label', SAVED.has(plugin.name) ? t('removeSaved') : t('save'))
  fav.innerHTML = '<svg><use href="#i-star"></use></svg>'
  top.append(fav)
  card.append(top)

  const title = document.createElement('h3')
  const titleButton = document.createElement('button')
  titleButton.type = 'button'
  titleButton.className = 'title-link'
  titleButton.dataset.open = plugin.name
  titleButton.textContent = plugin.title || plugin.name
  title.append(titleButton)
  card.append(title)

  const repo = document.createElement('p')
  repo.className = 'plugin-repo'
  repo.innerHTML = '<svg><use href="#i-github"></use></svg>'
  repo.append(document.createTextNode(`${plugin.owner}/${plugin.repoName}`.replace(/^\/|\/$/g, '') || plugin.name))
  card.append(repo)

  const description = document.createElement('p')
  description.className = 'plugin-desc'
  highlightInto(description, plugin.description[state.lang] ?? plugin.description.en, tokens)
  card.append(description)

  const meta = document.createElement('div')
  meta.className = 'plugin-meta'
  const compat = compatOf(plugin)
  const pill = document.createElement('span')
  pill.className = `compat-pill ${compat.kind}`
  pill.title = compat.range ? `engines.dsh: ${compat.range}` : 'engines.dsh: —'
  const pillDot = document.createElement('i')
  pill.append(pillDot, document.createTextNode(
    compat.kind === 'ok' ? t('compatPillOk') : compat.kind === 'bad' ? t('compatPillBad') : t('compatPillUnknown')
  ))
  meta.append(pill)

  const downloads = document.createElement('span')
  downloads.className = 'plugin-metric'
  downloads.title = downloadsTitle(plugin)
  downloads.setAttribute('aria-label', downloadsTitle(plugin))
  downloads.innerHTML = '<svg><use href="#i-download"></use></svg>'
  downloads.append(document.createTextNode(plugin.downloads === null ? '—' : compactNumber(plugin.downloads)))
  if (plugin.downloads !== null) {
    const downloadUnit = document.createElement('span')
    downloadUnit.className = 'metric-unit'
    downloadUnit.textContent = ` / ${t('per30dShort')}`
    downloads.append(downloadUnit)
  }

  const ratingValue = ratingOf(plugin)
  const rating = document.createElement('span')
  rating.className = 'plugin-metric plugin-rating'
  rating.title = ratingTitle(plugin)
  rating.setAttribute('aria-label', ratingTitle(plugin))
  rating.innerHTML = '<svg><use href="#i-star"></use></svg>'
  rating.append(document.createTextNode(ratingValue === null ? '—' : ratingValue.toFixed(1)))

  const date = document.createElement('span')
  date.className = 'plugin-date'
  date.textContent = relativeTime(plugin.published)
  meta.append(downloads, rating, date)
  card.append(meta)

  const actions = document.createElement('div')
  actions.className = 'plugin-actions'
  const install = document.createElement('button')
  install.type = 'button'
  install.className = 'install-btn'
  install.dataset.install = plugin.name
  install.innerHTML = '<svg><use href="#i-terminal"></use></svg>'
  install.append(document.createTextNode(t('install')))
  const repoLink = document.createElement('a')
  repoLink.className = 'repo-btn'
  repoLink.href = safeUrl(plugin.repo)
  repoLink.target = '_blank'
  repoLink.rel = 'noreferrer noopener'
  repoLink.setAttribute('aria-label', `${t('openGithub')}: ${plugin.title}`)
  repoLink.innerHTML = '<svg><use href="#i-github"></use></svg>'
  actions.append(install, repoLink)
  card.append(actions)

  return card
}

function renderActiveFilters() {
  const wrap = $('#activeFilters')
  wrap.innerHTML = ''
  const chips = []
  if (state.query.trim()) chips.push({ key: 'query', label: `${t('queryChip')} “${state.query.trim()}”` })
  if (state.category !== 'all') chips.push({ key: 'category', label: `${t('categoryChip')} · ${categoryTitle(state.category)}` })
  if (state.compat !== 'all') {
    const label = state.compat === 'ok' ? t('compatOk') : state.compat === 'bad' ? t('compatBad') : t('compatUnknown')
    chips.push({ key: 'compat', label: `${t('compatChip')} · ${label}` })
  }
  if (state.savedOnly) chips.push({ key: 'saved', label: t('savedOnly') })
  if (state.collection) {
    const collection = CURATED.collections.find((item) => item.id === state.collection)
    if (collection) chips.push({ key: 'collection', label: `${t('collectionChip')} · ${collection.title[state.lang] ?? collection.title.en}` })
  }
  wrap.hidden = chips.length === 0
  for (const chip of chips) {
    const element = document.createElement('span')
    element.className = 'filter-chip'
    const label = document.createElement('span')
    label.textContent = chip.label
    const clear = document.createElement('button')
    clear.type = 'button'
    clear.dataset.clearFilter = chip.key
    clear.setAttribute('aria-label', t('removeFilter'))
    clear.innerHTML = '<svg><use href="#i-close"></use></svg>'
    element.append(label, clear)
    wrap.append(element)
  }
}

/* ---------------------------------------------------------
   Detail dialog
   --------------------------------------------------------- */
function openPlugin(name, show = true) {
  const plugin = BY_NAME.get(name)
  if (!plugin) return
  currentDetailName = name
  const compat = compatOf(plugin)
  const panel = $('#pluginDialogPanel')
  panel.innerHTML = ''

  const close = document.createElement('button')
  close.type = 'button'
  close.className = 'dialog-close'
  close.dataset.closeDialog = ''
  close.setAttribute('aria-label', 'Close')
  close.innerHTML = '<svg><use href="#i-close"></use></svg>'
  close.addEventListener('click', () => $('#pluginDialog').close())
  panel.append(close)

  const head = document.createElement('div')
  head.className = 'plugin-detail-head'
  head.style.setProperty('--cat', categoryColor(plugin.category))
  head.append(makeAvatar(plugin, 'detail-avatar'))
  const heading = document.createElement('div')
  heading.className = 'detail-heading'
  const cat = document.createElement('div')
  cat.className = 'detail-cat'
  const dot = document.createElement('i')
  cat.append(dot, document.createTextNode(categoryTitle(plugin.category)))
  const title = document.createElement('h2')
  title.id = 'pluginDialogTitle'
  title.textContent = plugin.title || plugin.name
  const repo = document.createElement('a')
  repo.className = 'detail-repo'
  repo.href = safeUrl(plugin.repo)
  repo.target = '_blank'
  repo.rel = 'noreferrer noopener'
  repo.innerHTML = '<svg><use href="#i-github"></use></svg>'
  repo.append(document.createTextNode(`${plugin.owner}/${plugin.repoName}`.replace(/^\/|\/$/g, '') || plugin.name))
  heading.append(cat, title, repo)
  head.append(heading)
  panel.append(head)

  const description = document.createElement('p')
  description.className = 'detail-desc'
  description.textContent = plugin.description[state.lang] ?? plugin.description.en
  panel.append(description)

  const reason = curatedReason(plugin.name)
  if (reason) {
    const box = document.createElement('div')
    box.className = 'detail-reason'
    box.innerHTML = '<svg><use href="#i-spark"></use></svg>'
    const text = document.createElement('span')
    text.textContent = `${t('editorPick')} · ${reason}`
    box.append(text)
    panel.append(box)
  }

  const metrics = document.createElement('div')
  metrics.className = 'detail-metrics'

  const downloadsMetric = document.createElement('div')
  downloadsMetric.className = 'detail-metric'
  const downloadsLabel = document.createElement('span')
  downloadsLabel.className = 'metric-label'
  downloadsLabel.textContent = t('downloads30d')
  const downloadsValue = document.createElement('strong')
  downloadsValue.textContent = plugin.downloads === null ? t('noStats') : formatNumber(plugin.downloads)
  const downloadsSub = document.createElement('span')
  downloadsSub.className = 'metric-sub'
  downloadsSub.textContent = plugin.downloadsStart && plugin.downloadsEnd
    ? `${plugin.downloadsStart} → ${plugin.downloadsEnd}`
    : t('noStats')
  downloadsMetric.append(downloadsLabel, downloadsValue, downloadsSub)
  metrics.append(downloadsMetric)

  const starsMetric = document.createElement('div')
  starsMetric.className = 'detail-metric'
  const starsLabel = document.createElement('span')
  starsLabel.className = 'metric-label'
  starsLabel.textContent = t('stars')
  const starsValue = document.createElement('strong')
  starsValue.textContent = plugin.stars === null ? t('noStats') : formatNumber(plugin.stars)
  const starsSub = document.createElement('span')
  starsSub.className = 'metric-sub'
  starsSub.textContent = plugin.owner ? `github.com/${plugin.owner}` : 'GitHub'
  starsMetric.append(starsLabel, starsValue, starsSub)
  metrics.append(starsMetric)

  const ratingValue = ratingOf(plugin)
  const ratingMetric = document.createElement('div')
  ratingMetric.className = 'detail-metric'
  const ratingLabel = document.createElement('span')
  ratingLabel.className = 'metric-label'
  ratingLabel.textContent = t('rating')
  const ratingLine = document.createElement('strong')
  ratingLine.textContent = ratingValue === null ? t('noStats') : ratingValue.toFixed(1)
  if (ratingValue !== null) {
    const outOf = document.createElement('small')
    outOf.textContent = ` / 5`
    ratingLine.append(outOf)
  }
  const meter = document.createElement('span')
  meter.className = 'rating-meter'
  meter.setAttribute('aria-hidden', 'true')
  const meterBase = document.createElement('span')
  meterBase.className = 'rating-meter-base'
  meterBase.textContent = '★★★★★'
  const meterFill = document.createElement('span')
  meterFill.className = 'rating-meter-fill'
  meterFill.textContent = '★★★★★'
  meterFill.style.width = `${((ratingValue ?? 0) / 5) * 100}%`
  if (ratingValue === null) meter.style.display = 'none'
  meter.append(meterBase, meterFill)
  const ratingSub = document.createElement('span')
  ratingSub.className = 'metric-sub'
  ratingSub.textContent = t('ratingFormula')
  ratingMetric.append(ratingLabel, ratingLine, meter, ratingSub)
  metrics.append(ratingMetric)
  panel.append(metrics)

  const grid = document.createElement('div')
  grid.className = 'detail-grid'

  const compatBox = document.createElement('div')
  compatBox.className = 'detail-box'
  const compatLabel = document.createElement('h3')
  compatLabel.textContent = t('compatFilter')
  const compatRow = document.createElement('div')
  compatRow.className = 'compat-detail'
  const icon = document.createElement('span')
  icon.className = `compat-icon ${compat.kind}`
  icon.innerHTML = `<svg><use href="#i-${compat.kind === 'ok' ? 'check' : 'alert'}"></use></svg>`
  const compatText = document.createElement('div')
  const compatTitle = document.createElement('strong')
  compatTitle.textContent = compat.title
  const compatBody = document.createElement('span')
  compatBody.textContent = compat.body
  const range = document.createElement('code')
  range.textContent = compat.range ? `engines.dsh: ${compat.range}` : 'engines.dsh: —'
  compatText.append(compatTitle, compatBody, range)
  compatRow.append(icon, compatText)
  compatBox.append(compatLabel, compatRow)
  grid.append(compatBox)

  const versionBox = document.createElement('div')
  versionBox.className = 'detail-box'
  versionBox.innerHTML = `<h3>${t('detailPublished')}</h3>`
  const versionValue = document.createElement('div')
  versionValue.className = 'value'
  versionValue.textContent = formatDate(plugin.published)
  const versionSub = document.createElement('div')
  versionSub.className = 'subvalue'
  versionSub.textContent = `v${plugin.version} · ${relativeTime(plugin.published)}`
  versionBox.append(versionValue, versionSub)
  grid.append(versionBox)

  const packageBox = document.createElement('div')
  packageBox.className = 'detail-box'
  packageBox.innerHTML = `<h3>${t('detailPackage')}</h3>`
  const packageValue = document.createElement('div')
  packageValue.className = 'value mono'
  packageValue.textContent = plugin.name
  const packageSub = document.createElement('div')
  packageSub.className = 'subvalue'
  packageSub.textContent = plugin.install
  packageBox.append(packageValue, packageSub)
  grid.append(packageBox)

  const categoryBox = document.createElement('div')
  categoryBox.className = 'detail-box'
  categoryBox.innerHTML = `<h3>${t('detailCategory')}</h3>`
  const categoryValue = document.createElement('div')
  categoryValue.className = 'value'
  categoryValue.textContent = categoryTitle(plugin.category)
  const categorySub = document.createElement('div')
  categorySub.className = 'subvalue'
  categorySub.textContent = `${plugin.owner || t('noRepo')}`
  categoryBox.append(categoryValue, categorySub)
  grid.append(categoryBox)
  panel.append(grid)

  const command = `dsh plugin --profile web add ${plugin.install}`
  const installBox = document.createElement('div')
  installBox.className = 'detail-install'
  const code = document.createElement('code')
  code.textContent = command
  const copy = document.createElement('button')
  copy.type = 'button'
  copy.className = 'copy-btn'
  copy.setAttribute('aria-label', t('copyCommand'))
  copy.innerHTML = '<svg><use href="#i-copy"></use></svg>'
  copy.addEventListener('click', () => copyText(command))
  installBox.append(code, copy)
  panel.append(installBox)

  const actions = document.createElement('div')
  actions.className = 'detail-actions'
  const installButton = document.createElement('button')
  installButton.type = 'button'
  installButton.className = 'btn btn-primary'
  installButton.innerHTML = '<svg><use href="#i-terminal"></use></svg>'
  installButton.append(document.createTextNode(t('copyCommand')))
  installButton.addEventListener('click', () => copyText(command))
  const repoButton = document.createElement('a')
  repoButton.className = 'btn btn-secondary'
  repoButton.href = safeUrl(plugin.repo)
  repoButton.target = '_blank'
  repoButton.rel = 'noreferrer noopener'
  repoButton.innerHTML = '<svg><use href="#i-github"></use></svg>'
  repoButton.append(document.createTextNode(t('openGithub')))
  const saveButton = document.createElement('button')
  saveButton.type = 'button'
  saveButton.className = 'btn btn-secondary'
  const setSaveLabel = () => {
    const saved = SAVED.has(plugin.name)
    saveButton.innerHTML = '<svg><use href="#i-star"></use></svg>'
    saveButton.append(document.createTextNode(saved ? t('saved') : t('save')))
    saveButton.setAttribute('aria-pressed', String(saved))
    if (saved) saveButton.style.color = 'var(--acid)'
    else saveButton.style.color = ''
  }
  setSaveLabel()
  saveButton.addEventListener('click', () => {
    toggleSaved(plugin.name)
    setSaveLabel()
  })
  actions.append(installButton, repoButton, saveButton)
  panel.append(actions)

  const warning = document.createElement('p')
  warning.className = 'detail-warning'
  warning.innerHTML = '<svg><use href="#i-alert"></use></svg>'
  warning.append(document.createTextNode(t('securityNote')))
  panel.append(warning)

  if (show) {
    const dialog = $('#pluginDialog')
    if (!dialog.open) dialog.showModal()
    panel.scrollTop = 0
    close.focus({ preventScroll: true })
  }
}

/* ---------------------------------------------------------
   Market dialog
   --------------------------------------------------------- */
function indexBase() {
  if (window.location.protocol.startsWith('http')) {
    const url = new URL(window.location.href)
    if (!url.pathname.endsWith('/') && !url.pathname.split('/').pop().includes('.')) {
      url.pathname += '/'
    }
    return new URL('./', url).href
  }
  return 'https://your-name.github.io/harness-market/'
}

function openMarket() {
  const base = indexBase()
  const compatUrl = `${base}data/market-compatible.json`
  const fullUrl = `${base}data/market.json`
  $('#dialogCompatUrl').textContent = compatUrl
  $('#dialogFullUrl').textContent = fullUrl
  $('#dialogCompatCount').textContent = formatNumber(STATS.compatible ?? 938)
  $('#dialogFullCount').textContent = formatNumber(STATS.total ?? 3823)
  $('#dialogCompatSize').textContent = formatBytes(STATS.sizes?.compatible)
  $('#dialogFullSize').textContent = formatBytes(STATS.sizes?.market)
  const cli = $('#dialogCli')
  const sample = BY_NAME.get('dsh-context') ?? PLUGINS[0]
  if (sample) cli.textContent = `dsh plugin --profile web add ${sample.install}`
  const dialog = $('#marketDialog')
  if (!dialog.open) dialog.showModal()
}

function copyIndex(kind) {
  const base = indexBase()
  const url = `${base}data/${kind === 'full' ? 'market.json' : 'market-compatible.json'}`
  copyText(url, t('copyIndex'))
}

/* ---------------------------------------------------------
   Runtime dialog
   --------------------------------------------------------- */
function openRuntime() {
  const dialog = $('#runtimeDialog')
  $('#runtimeInput').value = state.runtime
  $('#runtimeInput').classList.remove('invalid')
  renderRuntimePresets()
  if (!dialog.open) dialog.showModal()
  setTimeout(() => $('#runtimeInput')?.select(), 30)
}

function renderRuntimePresets() {
  const wrap = $('#runtimePresets')
  wrap.innerHTML = ''
  const presets = ['0.2.1-rc.2', '0.2.1-rc.3', '0.2.0', '0.1.7', '0.3.0']
  for (const version of presets) {
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = `v${version}`
    if (version === state.runtime) button.classList.add('active')
    button.addEventListener('click', () => {
      $('#runtimeInput').value = version
      applyRuntime(version)
    })
    wrap.append(button)
  }
}

function applyRuntime(version) {
  const clean = version.trim().replace(/^v/, '')
  if (!window.semver?.valid?.(clean)) {
    $('#runtimeInput').classList.add('invalid')
    showToast(t('invalidVersion'), 'alert')
    return
  }
  state.runtime = clean
  storeString('hm.runtime', clean)
  compatCache = new Map()
  ratingCache = new Map()
  $('#runtimeInput').classList.remove('invalid')
  const dialog = $('#runtimeDialog')
  if (dialog.open) dialog.close()
  renderAll()
  showToast(`${t('runtimeChanged')} v${clean}`)
}

/* ---------------------------------------------------------
   Render orchestration
   --------------------------------------------------------- */
function renderAll(options = {}) {
  if (!state.ready) return
  renderHero()
  renderIndexUrls()
  renderTicker()
  renderFeatured()
  renderCollections()
  renderFilters()
  renderResults(options.focusFilter)
  renderRuntimeLabel()
  syncUrl()
}

function syncUrl() {
  const params = new URLSearchParams()
  if (state.query.trim()) params.set('q', state.query.trim())
  if (state.category !== 'all') params.set('cat', state.category)
  if (state.compat !== 'all') params.set('compat', state.compat)
  if (state.sort !== 'recommended') params.set('sort', state.sort)
  if (state.savedOnly) params.set('saved', '1')
  if (state.collection) params.set('collection', state.collection)
  const query = params.toString()
  const next = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
  history.replaceState(null, '', next)
}

function resetAll() {
  state.query = ''
  state.category = 'all'
  state.compat = 'all'
  state.savedOnly = false
  state.collection = null
  state.visible = PAGE_SIZE
  const search = $('#searchInput')
  if (search) search.value = ''
  if ($('#searchClear')) $('#searchClear').hidden = true
  if ($('#savedToggle')) $('#savedToggle').checked = false
  renderAll()
}

function toggleSaved(name) {
  if (SAVED.has(name)) {
    SAVED.delete(name)
    showToast(t('unsavedToast'))
  } else {
    SAVED.add(name)
    showToast(t('savedToast'))
  }
  persistSaved()
  if (state.savedOnly || state.ready) renderResults()
}

function closeFilters() {
  document.body.classList.remove('filters-open')
}

/* ---------------------------------------------------------
   Events
   --------------------------------------------------------- */
function bindEvents() {
  setTheme(state.theme, false)
  setLang(state.lang, false)
  $('#searchClear').hidden = true

  $('#themeToggle').addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark')
  })
  $('#footerTheme').addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark')
  })
  $('#langToggle').addEventListener('click', () => {
    setLang(state.lang === 'zh' ? 'en' : 'zh')
  })

  const searchInput = $('#searchInput')
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer)
    $('#searchClear').hidden = !searchInput.value
    searchTimer = setTimeout(() => {
      state.query = searchInput.value
      state.visible = PAGE_SIZE
      renderFilters()
      renderResults()
      syncUrl()
    }, 110)
  })
  $('#searchForm').addEventListener('submit', (event) => {
    event.preventDefault()
    state.query = searchInput.value
    state.visible = PAGE_SIZE
    renderAll()
    $('#browse').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
  $('#searchClear').addEventListener('click', () => {
    searchInput.value = ''
    state.query = ''
    state.visible = PAGE_SIZE
    $('#searchClear').hidden = true
    renderAll()
    searchInput.focus()
  })
  $$('.quick-search button').forEach((button) => {
    button.addEventListener('click', () => {
      searchInput.value = button.dataset.query
      state.query = button.dataset.query
      state.visible = PAGE_SIZE
      $('#searchClear').hidden = false
      renderAll()
      $('#browse').scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  $('#sortSelect').addEventListener('change', (event) => {
    state.sort = event.target.value
    state.visible = PAGE_SIZE
    renderResults()
    syncUrl()
  })
  $('#savedToggle').addEventListener('change', (event) => {
    state.savedOnly = event.target.checked
    state.visible = PAGE_SIZE
    renderFilters()
    renderResults()
    syncUrl()
  })

  $('#compatFilters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-compat]')
    if (!button) return
    state.compat = button.dataset.compat
    state.visible = PAGE_SIZE
    renderAll({ focusFilter: button.dataset.filterKey })
    if (window.innerWidth <= 980) closeFilters()
  })
  $('#categoryFilters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]')
    if (!button) return
    state.category = button.dataset.category
    state.visible = PAGE_SIZE
    renderAll({ focusFilter: button.dataset.filterKey })
    if (window.innerWidth <= 980) closeFilters()
  })
  $('#resetFilters').addEventListener('click', resetAll)
  $('#emptyReset').addEventListener('click', resetAll)
  $('#activeFilters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-clear-filter]')
    if (!button) return
    const key = button.dataset.clearFilter
    if (key === 'query') {
      state.query = ''
      searchInput.value = ''
      $('#searchClear').hidden = true
    }
    if (key === 'category') state.category = 'all'
    if (key === 'compat') state.compat = 'all'
    if (key === 'saved') {
      state.savedOnly = false
      $('#savedToggle').checked = false
    }
    if (key === 'collection') state.collection = null
    state.visible = PAGE_SIZE
    renderAll()
  })

  $('#loadMore').addEventListener('click', () => {
    state.visible += PAGE_SIZE
    renderResults()
  })

  $('#mobileFilter').addEventListener('click', () => {
    document.body.classList.add('filters-open')
    $('#closeFilters')?.focus()
  })
  $('#closeFilters')?.addEventListener('click', closeFilters)
  window.addEventListener('resize', () => { if (window.innerWidth > 980) closeFilters() })
  document.addEventListener('click', (event) => {
    if (document.body.classList.contains('filters-open')
      && !event.target.closest('.filters')
      && !event.target.closest('#mobileFilter')) {
      closeFilters()
    }
  })

  $('#pluginGrid').addEventListener('click', (event) => {
    const fav = event.target.closest('[data-fav]')
    if (fav) {
      event.stopPropagation()
      toggleSaved(fav.dataset.fav)
      const saved = SAVED.has(fav.dataset.fav)
      fav.setAttribute('aria-pressed', String(saved))
      fav.setAttribute('aria-label', saved ? t('removeSaved') : t('save'))
      fav.closest('.plugin-card')?.classList.toggle('fav', saved)
      return
    }
    const install = event.target.closest('[data-install]')
    if (install) {
      openPlugin(install.dataset.install)
      return
    }
    const title = event.target.closest('[data-open]')
    if (title) {
      openPlugin(title.dataset.open)
      return
    }
    const card = event.target.closest('.plugin-card')
    if (card) openPlugin(card.dataset.name)
  })

  $('#featuredGrid').addEventListener('click', (event) => {
    const open = event.target.closest('[data-open]')
    if (open) {
      openPlugin(open.dataset.open)
      return
    }
    if (event.target.closest('button')) return
    const card = event.target.closest('.pick-card')
    if (card) openPlugin(card.dataset.name)
  })

  $('#openMarket').addEventListener('click', openMarket)
  $('#openMarketInline').addEventListener('click', openMarket)
  $('#runtimeButton').addEventListener('click', openRuntime)

  $('#dialogCopyCompat').addEventListener('click', () => copyIndex('compatible'))
  $('#dialogCopyFull').addEventListener('click', () => copyIndex('full'))
  $('#copyCompatIndex').addEventListener('click', () => copyIndex('compatible'))

  $('#runtimeForm').addEventListener('submit', (event) => {
    event.preventDefault()
    applyRuntime($('#runtimeInput').value)
  })
  $('#runtimeInput').addEventListener('input', () => {
    $('#runtimeInput').classList.remove('invalid')
  })

  $$('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => button.closest('dialog')?.close())
  })
  $$('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close()
    })
  })

  document.addEventListener('click', (event) => {
    const copy = event.target.closest('[data-copy-target]')
    if (copy) {
      const target = document.getElementById(copy.dataset.copyTarget)
      if (target) copyText(target.textContent.trim())
    }
  })

  document.addEventListener('keydown', (event) => {
    const target = event.target
    const typing = target.matches?.('input, textarea, select, [contenteditable="true"]')
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault()
      searchInput.focus()
      searchInput.select()
      return
    }
    if (event.key === '/' && !typing) {
      event.preventDefault()
      searchInput.focus()
      return
    }
    if (event.key === 'Escape' && document.body.classList.contains('filters-open')) {
      closeFilters()
    }
  })
}

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */
SAVED = readSaved()
if (window.semver?.valid?.(readString('hm.runtime', ''))) {
  state.runtime = readString('hm.runtime', DEFAULT_RUNTIME)
}
setTheme(state.theme, false)
setLang(state.lang, false)
initStaticAvatars()
bindEvents()
renderSkeletons()
loadData()
