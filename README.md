# UI Vault

两个 React 组件库的本地快照，各放一个目录。用于自有项目里的选型、比对与试用。

| 目录 | 来源 | 条目 | 形态 |
|---|---|---|---|
| [`affectui/`](affectui/) | [affectui.com](https://www.affectui.com) | 146 | 57 个原始 `.tsx` + 89 个还原的 `.jsx`，每个组件独立文件，自带 CSS |
| [`kobra/`](kobra/) | [kobra.systems](https://kobra.systems) | 86 / 96 | 11 个原始 `.tsx` + 75 个从运行时 chunk 提取的 minified 实现 |

内容全部取自两个站点公开发布的静态资源，未使用任何账号、密钥或后台接口。

## 两边的差别在哪

**affectui** 每个组件一个文件、自带样式、不依赖 Tailwind。89 个扩展条目是从站点公开发布的客户端模块还原的，含结构、逻辑与完整 CSS，接近原始形态。`registry/` 下 146 个单条 registry-item，可直接喂 shadcn CLI。

**kobra** 走 shadcn registry 协议，96 个组件里 11 个免费、85 个需要 registry token。免费那 11 个是明文原始源码；其余 75 个是从客户端运行时 chunk 里提取的，变量名 minified，但 Tailwind 类名、`data-slot`、aria 属性、状态机逻辑完整。因为没有独立模块边界，交付形态是「一份格式化总包 + 行号索引」，不是 75 个独立文件。

## 目录

```
affectui/                     原 affectui 快照（含自己的 serve.mjs / watch.mjs / README）
  components/<slug>/          146 个组件目录
  registry/                   146 条 registry-item + 索引
kobra/
  free/<slug>/<slug>.tsx      11 个原始源码，可直接编译
  allchunks/                  84 个完整 chunk（原始 minified，留档）
  components.bundle.js        749KB 总包，已格式化
  COVERAGE.md                 86 项覆盖表，逐条带证据
  INDEX.md                    组件 → 总包里的行号
LICENSE                       PolyForm Strict 1.0.0
```

## 各自的用法

**affectui**：`cd affectui && npm run serve`，起本地 registry 服务在 8787，配合 `components.json` 里的 `"@affectui": "http://127.0.0.1:8787/r/{name}.json"` 使用。`npm run update` 拉取上游变化。

**kobra**：11 个免费组件直接把 `free/<slug>/<slug>.tsx` 拷进项目即可，依赖是 `@base-ui/react`、`@tabler/icons-react`、`motion` 这些公开包。其余 75 个按 `COVERAGE.md` 找到 chunk 和函数名，从 `components.bundle.js` 取对应行号范围的实现。

## 许可

两个来源的组件版权归各自作者。本仓库是本地参考用的快照，`LICENSE` 里的 PolyForm Strict 1.0.0 约束的是本仓库自身的整理内容，不改变上游组件的授权状态。商用前请自行确认原站条款——kobra 的商业授权是 $199 一次性（个人）/ $499（团队）。
