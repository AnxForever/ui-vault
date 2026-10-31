# affectUI 组件快照

本地参考库。建立于 2026-10-31，后续由自动化任务跟进上游变化。

## 说明

affectUI 是一套面向 AI 产品与 SaaS 的 React 组件集合，每个组件一个文件、自带样式、不依赖 Tailwind。这份快照把站点公开的组件条目整理成可直接查阅、可直接接入项目的本地形式，用于自有项目中的选型、比对与试用。

| 类别 | 数量 | 形态 |
|---|---|---|
| 开源条目 | 57 | 原始 `.tsx`，含类型与注释 |
| 扩展条目 | 89 | 由站点公开发布的客户端模块还原的 `.jsx`，含结构、逻辑与完整 CSS |
| 目录总数 | 146 | `components/<slug>/` |
| 文档 | 127 | `docs.md`，含 Usage / Props / 无障碍 / 键盘 |
| registry | 146 | `registry/<slug>.json`，可直接喂 shadcn CLI |

内容全部取自站点公开发布的静态资源，未使用任何账号、密钥或后台接口。

## 目录

```
components/<slug>/
  <slug>.tsx       开源条目：原始文件
  <slug>.jsx       扩展条目：还原实现（自包含，内联 CSS 变量仍在）
  <slug>.css       抽出的样式块（组件原本把 CSS 以字符串内联在模块里）
  <slug>.demo.jsx  官方示例用法（仅薄壳型条目单独拆出）
  docs.md          官方文档原文
registry/
  registry.json    146 条索引
  <slug>.json      单条 registry-item（name / type / files[].content）
serve.mjs          本地 registry 服务
watch.mjs          上游变更探针
```

## 保真度

还原条目保有 JSX 结构、组件逻辑、状态与副作用、全部 CSS 规则与设计变量、props 形状。

丢失：TypeScript 类型注解、JSDoc 注释、原始变量命名（压缩器已重命名）、拆分子模块的边界。子组件与工具函数仍在同一文件内，可独立运行。

需要无损原始文件的条目，用第一条路径；其余条目请对照 `docs.md` 的 Props 表补齐类型后再投入使用。

## 用法

直接拷：

```
cp components/<slug>/<slug>.jsx 你的项目/src/components/ui/<slug>.tsx
```

本地 registry：

```
node serve.mjs        # http://127.0.0.1:8787
```

`components.json`：

```json
{
  "registries": {
    "@affectui": "http://127.0.0.1:8787/r/{name}.json"
  }
}
```

之后 `npx shadcn@latest add @affectui/<slug>` 即可，全程离线。

## 更新

`watch.mjs` 跟踪三个信号判断上游是否变化：入口 bundle 名、`sitemap.xml` 的条目列表、单条目的模块名。任何一处变化都会重新拉取该条目并重建 registry。

本地按需运行，仓库不包含任何 CI 配置：

```
node watch.mjs --check   # 只报告漂移，不写盘
node watch.mjs           # 抓取、重建 registry 并写入 CHANGELOG.md
```

无变化时不产生任何写入；有变化才更新条目并追加时间线。结果自行提交。

## 许可

本仓库自有内容（`serve.mjs`、`watch.mjs`、`registry/`、`manifest.json`、`.state.json`、文档整理）以 **PolyForm Strict 1.0.0** 授权：仅限非商业目的使用，禁止分发，禁止分发修改版或衍生作品，不授予再许可。全文见 [LICENSE](LICENSE)。

`components/<slug>/` 下各组件的著作权归 affectUI 原作者，本仓库不附带、不转让、不隐含原作者对任何人的许可；上述许可不适用于这些条目，也不能替代原作者许可。需在受限场景使用请向原作者取得正式授权。

商业使用、对外分发、数据集用途一律不在授权范围内。

## 附注

组件样式为「每文件自带」，不依赖 Tailwind；目标 React 19；深色模式与 reduced-motion 均走 CSS 变量。
