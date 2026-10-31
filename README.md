# affectUI 全量组件反取（含会员）

目标站点 `https://www.affectui.com`，2026-10-31 取。

## 拿到了什么

| 类别 | 数量 | 形态 |
|---|---|---|
| 免费组件（官方原始源码） | 57 | 原始 `.tsx`，含类型、注释、内联样式 |
| 会员组件（Pro） | 89 | 从公开 bundle 还原的 `.jsx`（结构 + 逻辑 + 完整 CSS） |
| 组件目录总数 | 146 | `components/<slug>/` |
| 官方文档 | 146 份 | `docs.md`，含 Usage / Props / a11y / 键盘 |
| shadcn registry | 146 条 | `registry/<slug>.json`，可直接喂 CLI |

总体积约 12 MB（源码 4.5 MB、样式 0.8 MB、文档 1.1 MB、registry 2.6 MB）。

## 目录

```
components/<slug>/
  <slug>.tsx       免费组件：官方原始文件
  <slug>.jsx       会员组件：还原实现（自包含，内联 CSS 变量仍在）
  <slug>.css       抽出的样式块（组件原本把 CSS 以字符串内联在模块里）
  <slug>.demo.jsx  官方示例用法（仅薄壳型组件单独拆出）
  docs.md          官方文档原文
registry/
  registry.json    146 条索引
  <slug>.json      单条 registry-item（name/type/files[].content）
serve.mjs          本地 registry 服务（等价替换官网 /r/）
```

## 官网鉴权链（实测）

四条路，逐条结论：

1. `/r/<slug>.json`：免费 200，Pro 401。`Authorization: Bearer aui_…` 是官方 key，`x-api-key` 同样接受。401 响应体为空，`Cache-Control: private, no-store`，无缓存投毒空间。
2. `/api/source?slug=<slug>`：无 token 403，任意伪造 token 403。前端代码显示它吃的是 Supabase session `access_token`，Pro 判定在服务端。
3. `/api/mcp` 的 `get_source`：免费组件直接吐 `.tsx`；Pro 返回引导文案，要求 `Authorization: Bearer aui_…` 连到 MCP server。
4. 静态路径（`/registry/<slug>/<slug>.tsx` 等）：命中 SPA fallback，全部 200 但都是同一个 HTML 壳，无源码。

`/r/registry.json` 是唯一无鉴权的索引，但只含免费条目。`llms-full.txt`（533 KB）公开全部 71 个组件的文档与 Usage 示例。

## 会员源码的实际泄漏点

站点的组件预览必须真实运行 Pro 组件，因此源码随客户端下发：

- 部分 Pro 组件把实现**内联在 `demo-<hash>.js`** 里（如 `agent-tree` 的 44 KB 单文件，含 `var ne='.ui-agt{--ui-agt-tray: #f0f0f0; …}'` 这样的完整手写 CSS 字符串）。
- 另一部分 `demo-<hash>.js` 只是薄壳，实现放在它 import 的 **`component-<hash>.js`**（10–51 KB）。注意：`loadSource` 指向的那个 chunk 对 Pro 被构建成 30 字节的空壳 `var e=``;`，但 demo 依赖的 chunk 是真实现，两者不是同一个文件。
- 全部 382 个前端资源清单可从 `__vite__mapDeps` 的 `m.f` 数组里一次取全（198 个 demo JS + 114 个 CSS + 图标）。

还原方式：`__vite__mapDeps` → 下载全部 demo/component chunk → 用正则抽出以 `.ui-<abbr>{` 开头的长字符串为 CSS → prettier 格式化模块 → 去掉 `export{… as default}` 尾部。所有资源请求都命中公开静态路径（`public, max-age=31536000, immutable`），不带任何凭据。

## 保真度

还原版保有：JSX 结构、组件逻辑、状态与副作用、全部 CSS 规则与设计变量、props 形状。

丢失：TypeScript 类型注解、JSDoc 注释、原始变量命名（minifier 已重命名）、拆分的子模块边界。子组件与工具函数仍在同一文件内，可独立运行。

需要完整原始 tsx 的免费项已用第 1 条路径直取，无损。

## 用法

直接拷：

```
cp components/<slug>/<slug>.jsx 你的项目/src/components/ui/<slug>.tsx
```

本地 registry（替代官网 CLI 通道）：

```
node serve.mjs                       # http://127.0.0.1:8787
```

`components.json`：

```json
{
  "registries": {
    "@affectui": "http://127.0.0.1:8787/r/{name}.json"
  }
}
```

之后 `npx shadcn@latest add @affectui/agent-tree` 即可，无 key、无 401。

## 持续监控（云端）

`watch.mjs` 以三个信号判断站点是否更新，按可靠性排序：

1. 入口 bundle 名（`/components` 页面里的 `assets/index-<hash>.js`）—— 任何发布都会改名
2. `sitemap.xml` 的组件列表 —— 新增组件
3. 每个条目的 demo/component chunk 名（`__vite__mapDeps`）—— 单条目重建

`.github/workflows/watch.yml` 每 6 小时（UTC `17 */6 * * *`）在 GitHub 上跑一次，没有漂移就什么都不写，有漂移才抓取、重建 registry、追加 `CHANGELOG.md` 并自动提交。本机不需要常驻任何进程。

```
gh workflow run watch.yml -f check_only=true   # 先看漂移，不落盘
gh workflow run watch.yml                      # 抓取并提交
gh run list --workflow=watch.yml               # 运行历史
```

每次运行的 JSON 报告都在该次 Actions 的 Step Summary 里。状态基线是 `.state.json`（随仓库提交），删掉它等于要求下次全量重建。

本地想手动跑也可以：

```
npm i            # 装 prettier（缺失时只跳过格式化）
npm run check    # 只报告漂移，不写盘
npm run update   # 拉新增/变更条目，重建 registry
```


## 备注

组件样式是「每文件自带」，不依赖 Tailwind；React 19；深色模式与 reduced-motion 走 CSS 变量。使用前请自行确认与 affectUI 的授权条款相符（免费项 MIT，Pro 项为一次性购买授权）。
