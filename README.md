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

`.github/workflows/watch.yml` 每 6 小时在 GitHub 上跑一次。无变化时不产生提交；有变化才抓取、重建并自动提交，时间线写入 `CHANGELOG.md`。本机无需常驻任何进程。

```
gh workflow run watch.yml -f check_only=true   # 只报告，不落盘
gh workflow run watch.yml                      # 抓取并提交
gh run list --workflow=watch.yml               # 运行历史
```

## 使用条款

**仅限自用。** 本仓库由仓库所有者建立并维护，供其在本人私有项目中阅读、修改与组合使用。

明确禁止：

- 再分发：公开发布、镜像、转载、上传公开仓库或网盘、打包进对外分发的产品
- 商业使用：售卖、作为付费产品或服务的一部分、用于客户交付或外包项目
- 转授权：转让、共享、出借访问权限或副本
- 数据集用途：用于训练、微调或构建对外提供的模型与数据集

所有条目的著作权归 affectUI 原作者。本仓库不附带、不转让任何 affectUI 的授权，也不构成对原作者任何权利的许可。使用者自行承担全部合规责任；如需在受限场景使用，请向原作者取得正式授权。

## 附注

组件样式为「每文件自带」，不依赖 Tailwind；目标 React 19；深色模式与 reduced-motion 均走 CSS 变量。
