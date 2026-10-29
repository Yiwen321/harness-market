# Harness Market

> 给 Harness 装点好东西。一个 GitHub 原生的 DeepSeek Harness 插件市场。

[![DeepSeek Harness](https://img.shields.io/badge/DSH-0.2.1--rc.2-c9f75a)](https://github.com/deepseek-ai/deepseek-harness)
[![catalog](https://img.shields.io/badge/catalog-3%2C823%20plugins-c9f75a)](https://awesome-dsh-plugin.com)
[![format](https://img.shields.io/badge/market%20index-format%201-9cbbff)](https://github.com/deepseek-ai/deepseek-harness)

![Harness Market 首页](assets/preview.png)

![插件卡片上的下载量、评分与兼容性](assets/preview-browse.png)

Harness Market 把社区里的 DeepSeek Harness 插件整理成一个可搜索、可筛选、可安装的目录。它默认先回答一个问题：**这个插件能不能跑在我的 DSH 上？**

目录里的每个条目都保留 GitHub 仓库、npm 包名、版本和 `engines.dsh` 声明。你可以先浏览，再把整个目录作为一个 [format 1 插件市场索引](https://github.com/deepseek-ai/deepseek-harness) 接进 DSH 的 **Discover**。

## 包含什么

- **3,917 个插件**，覆盖 UI、工具、记忆、远程、主题、语音、工作流等 23 个分类
- **下载量与综合评分**：近 30 天 npm 下载、GitHub Stars，以及由这些指标计算的 5 分制评分
- **兼容性优先**：用 `engines.dsh` 对当前 DSH 版本实时计算，分为「已验证兼容 / 未声明范围 / 不兼容」
- **GitHub 直达**：每张卡片都链接到源仓库，安装命令可一键复制
- **编辑精选**：5 个已验证兼容的插件和 4 组场景合集
- **接入 DSH**：复制索引地址，在 Discover 里搜索和安装；同时提供 CLI 命令
- **不是官方项目**：数据来自社区目录 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)，本项目只负责呈现和校验

## 本地运行

需要 Node.js 20+。

```sh
npm install
npm run dev
```

打开 <http://127.0.0.1:4173>。

其他命令：

```sh
npm run build:data      # 从 data/catalog.source.json 生成站点数据和两个 DSH 索引
npm run validate        # 校验索引结构、版本范围、统计数字
npm run prepare:pages   # 生成可部署的 dist/
npm run test:ui         # Playwright 交互验收（需要本机 Chrome）
```

`test:ui` 默认使用 macOS 的 Google Chrome 路径；其他平台可以这样指定：

```sh
CHROME_PATH=/path/to/chrome npm run test:ui
```

> 不要直接双击 `index.html`。数据通过 `fetch()` 读取，浏览器会阻止 `file://` 下的请求。

## 接入 DSH

### 方式一：Discover 索引

1. 在 DSH 的 **Plugins** 页打开 **More → Experimental plugins**，启用 **Custom plugin markets**。
2. 进入 **Discover → Index sources**。
3. 粘贴下面任意一个地址。

本地：

```text
http://127.0.0.1:4173/data/market-compatible.json
```

部署到 GitHub Pages 后：

```text
https://<你的用户名>.github.io/<仓库名>/data/market-compatible.json
```

两个索引：

| 文件 | 内容 | 建议 |
|---|---|---|
| `data/market-compatible.json` | 938 个声明范围明确接受 DSH `0.2.1-rc.2` 的插件 | 日常使用，约 0.75 MiB，加载快 |
| `data/market.json` | 全部 3,917 个插件 | 想浏览完整目录时使用，约 3.0 MiB |

索引使用 DSH 的 format 1，直接由 DSH 原生解析和过滤。`market-compatible.json` 是一个**构建产物**：默认按 `0.2.1-rc.2` 生成；要换目标版本，重新构建：

```sh
DSH_RUNTIME_VERSION=0.2.1-rc.3 npm run build:data
```

### 方式二：命令行

在没有 Discover 的 host 上，可以直接安装单个插件：

```sh
dsh plugin --profile web add dsh-context@0.77.0
```

`web` 是 `dsh web` 的默认 profile；自定义 profile 请替换成实际的 profile 名。DSH Desktop 用户请优先使用应用内的 **Settings → Plugins**。

## 数据与兼容性

站点读取 `data/plugins.json`，它由社区目录快照生成：

- 数据源：[`awesome-dsh-plugin/awesome-dsh-plugin`](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)，npm 包 `dsh-plugin-catalog`，CC0
- 每个插件的版本信息来自其 npm 发布记录
- `engines.dsh` 是插件作者声明的 DSH 版本范围
- **下载量** 是上游目录提供的近 30 天 npm 下载数，不是累计下载量
- **Stars** 来自目录快照里的 GitHub 数据
- 索引只收录 **npm 上可安装** 的条目；目录里的 GitHub-only 条目不在 format 1 索引里

### 评分怎么算

页面上的 5 分制 **综合评分** 不是用户评价，而是由四项指标合成：

```text
score = 2 + 3 × (
  0.40 × 下载热度
+ 0.30 × GitHub Stars
+ 0.15 × 发布新鲜度
+ 0.15 × 兼容性
)
```

下载和 Stars 使用对数缩放，避免头部项目把分数拉满；兼容性为“已验证 / 未声明 / 不兼容”三档权重。评分会随右上角切换的 DSH 版本重新计算，鼠标悬停卡片上的指标可以看到当前数值和统计窗口。

当前统计（DSH `0.2.1-rc.2`）：

| 状态 | 数量 | 含义 |
|---|---:|---|
| 已验证兼容 | 938 | 声明了 `engines.dsh`，且范围接受当前版本 |
| 未声明范围 | 2,880 | 没有 `engines.dsh`，DSH 不会拦截，但无法保证 |
| 不兼容 | 99 | 声明了范围，但不接受当前版本 |

兼容性判断使用 `semver.satisfies(runtime, range, { includePrerelease: true })`，与 DSH 自身的 `evaluatePluginCompatibility` 语义一致。页面右上角的版本按钮可以临时切换目标版本，只影响浏览器里的计算结果，不改变索引文件。

## 更新数据

```sh
npm run build:data -- --refresh
npm run validate
```

`--refresh` 会从 npm registry 拉取最新的 `dsh-plugin-catalog` tarball，同时更新目录、下载量和 Stars；网络失败时回退到仓库里的快照。生成的五个文件：

```text
data/plugins.json            站点用的轻量数据
data/market.json             完整 format 1 索引
data/market-compatible.json  仅已验证兼容的 format 1 索引
data/stats.json              统计和分类标题
data/community-stats.json    下载量与 Stars 快照
```

## 部署到 GitHub Pages

仓库已经包含 `.github/workflows/pages.yml`。把它推到 GitHub 后：

1. 在仓库 **Settings → Pages** 把 **Source** 设为 **GitHub Actions**。
2. 推送到 `main`，或在 Actions 里手动运行 **Deploy Harness Market**。
3. 工作流会安装依赖、刷新目录、校验索引、生成 `dist/` 并部署。

工作流每天 03:17 UTC **自动更新**目录、下载量和 Stars，不需要网页上的按钮。想立刻更新时，在 GitHub Actions 里手动运行 **Deploy Harness Market** 即可。页面里的索引 URL 由当前访问地址推导，所以 fork 或改名后无需改代码。

## 项目结构

```text
.
├── index.html                 页面骨架
├── styles.css                 视觉系统（深色 / 浅色，响应式）
├── app.js                     搜索、筛选、兼容性、对话框、收藏
├── vendor/semver.js           npm semver 的浏览器 bundle
├── data/
│   ├── catalog.source.json    上游目录快照（CC0）
│   ├── plugins.json           站点数据
│   ├── market.json            完整 DSH 索引
│   ├── market-compatible.json 已验证 DSH 索引
│   ├── stats.json             统计
│   ├── community-stats.json   下载量与 Stars 快照
│   └── curated.json           编辑精选和合集
├── scripts/
│   ├── build-data.mjs         生成索引和站点数据
│   ├── validate-market.mjs    结构校验
│   ├── prepare-pages.mjs      生成 dist/
│   ├── serve.mjs              本地静态服务器
│   └── test-ui.mjs            Playwright 交互验收
└── .github/workflows/pages.yml
```

## 提交插件

这个页面不维护自己的插件数据库，收录逻辑在上游目录。提交或修正条目请去：

- [awesome-dsh-plugin 提交入口](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/issues/new/choose)
- [目录仓库](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

一个条目至少应当能用 `dsh plugin add` 安装，并声明 `dsh.bundle`。

## 安全

安装第三方插件会在你的机器上以你的权限执行代码，可以读取文件、使用凭据和访问网络。工具审批不会沙箱化插件代码。

- 安装前阅读仓库源码
- 不要把未知插件装在有密钥的机器上
- 这个目录和上游列表都不构成安全审计，也不代表官方背书
- 页面会从 `github.com` 加载作者头像；图片失败时回退为首字母。浏览页面会把你的 IP 暴露给 GitHub，和直接打开 GitHub 页面相同

## License

- 代码：[MIT](LICENSE)
- 上游目录数据：[CC0-1.0](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
- `vendor/semver.js`：[ISC](https://github.com/npm/node-semver)

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
