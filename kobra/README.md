# Kobra 组件回收

来源 `https://kobra.systems`，2026-10-31。注册组件 96 个，**拿到 86 个**。

## 两类产出

| 类别 | 数量 | 形态 |
|---|---|---|
| 免费组件原始源码 | 11 | 完整 `.tsx`，可直接编译 |
| 付费组件提取 | 75 | minified 实现，已格式化 |
| 未拿到 | 7 | `direction` + 6 个 calendar 日期子库 |

### 免费那 11 个

`/r/<slug>.json` 不要凭据就是明文，`files[].content` 里是完整 tsx：import、`cva` 变体、类型注解、Tailwind 类名全在。

```
ai-editor  carousel  command-menu  conversation  halftone-dots  input-otp
morphing-icons  navigation-menu  sound  toast  video
```

依赖都是公开包：`@base-ui/react`、`@tabler/icons-react`、`motion`、`embla-carousel-react`、`input-otp`、`kmenu`、`loomix`、`@web-kits/audio`。

### 付费那 75 个怎么来的

`/r/<slug>.json` 一律 401，`/r/<slug>.md` 只给元数据。但页面预览是真渲染——833 个元素里 760 个带 React fiber。做法分三层，前两层失败才用第三层：

1. **按 `data-slot` 在 chunk 里定位**——覆盖大部分组件，因为 Kobra 的组件普遍挂这个属性
2. **chunk 差集**——把目标页和基线页的脚本请求做差，新增的就是该页专属 chunk。不依赖任何标记
3. **导出链**——公开 `.md` 里有 `Exports:` 字段，拿导出名在 chunk 里找 `{Name: () => X}` 重导出，再追到 `function X(...)`。第三层是关键，见下

## 第三层救回了 8 个

第一版按 `data-slot` 找，报 78/96，其中 12 个组件被判「拿不到」——因为它们根本不挂 `data-slot`。换成导出链后全部定位到：

| 组件 | 函数 | props |
|---|---|---|
| `plan-card` | `function Ij` | icon, title, description, steps, visibleSteps=3, autoApproveIn, onApprove |
| `question-card` | `function UN` | icon, title='Questions', questions, onSubmitAnswers, onSkip, onReset |
| `multi-select` | `function hj` | items, value, onValueChange, placeholder, renderChip, itemKey |
| `tabs` | `function Db` | tabs, value, onChange, indicator='pill', flat, icons |
| `magnetic-dropzone` | `function xk` | accept, maxSize=1048576, multiple, onFilesChange, animated |
| `input-dissolve` | `function nD` | onSubmit, label='Value', placeholder='Type something', send='Send' |
| `inline-citations` | `function JE` | sources, className |
| `badge` | 独立 chunk | `badge-BPpa500U.js` |

props 名和默认值都在，说明是完整实现不是片段。

## 校验

- **免费 11 个**：esbuild 逐文件解析零语法错误；registry 声明文件数与落盘数 100% 匹配；每个文件 4–84 处 JSX 标签
- **提取的 75 个**：`data-slot` 定位 + 组件体信号（JSX 调用 / forwardRef / useRender / cva / hooks / className 常量）。抽样确认：`document-agent` 有 21 个 hook 调用、12 个箭头函数；`chat-history` 的 className 是完整的 `group/history relative isolate min-h-0 h-full w-full`

校验脚本自身出过三次错，都已修正并记录在 `_split-attempt.json` 与提交历史里：

- JSX 检测写成 `\.jsx(`，但 minified 代码实际是 `.jsx)(`，导致 11 个免费组件一度全被判「无 JSX」
- 打分窗口取 1600 字符太窄，把 `trace-waterfall`（实际 9KB 完整实现）判成证据不足
- 第一版匹配规则把「别人的子元素」算成本组件——`input-group-button` 被当成 `button`，虚高到 80

## 目录

```
free/<slug>/<slug>.tsx       11 个原始源码
allchunks/*.js               84 个完整 chunk（原始 minified，留档）
components.bundle.js         749KB 总包，已格式化（1166KB / 34637 行）
components.bundle.min.js     原始留档
COVERAGE.md                  逐条覆盖表，带 slot 证据和 JSX/hooks 计数
INDEX.md                     组件 → 在总包里的行号
verification.json            校验明细
verification-free.json       免费组件逐文件校验
registry-public.json         96 个组件的公开元数据
inventory.json               总包内 325 个 data-slot 的归属
_split-attempt.json          自动切分尝试记录
```

## 没拿到的 7 个

`direction`（provider，实现在别处，导出名 `DirectionProvider` / `useDirection` 只在重导出层出现）；`hijri` `hijri-civil` `persian` `buddhist` `minguo` `japanese`（calendar 的日期本地化子库，`.md` 元数据里连 `Exports:` 行都没有）。

这 7 个的补法：日期库是 `Intl.DateTimeFormat` 的封装，公开等价实现很多；`direction` 是 Base UI 的 `DirectionProvider` 再导出，`@base-ui/react` 里就有原件。

## 为什么没有独立文件

affectui 的源码在静态 chunk 里，一个组件一个模块，边界清晰。Kobra 是全塞进一个 749KB chunk 再 minify，组件边界和顶层声明不对应。自动切分试过——65 个里只有 11 个能切准，其余跨度错到几万行（`_split-attempt.json` 留了记录）。所以交付是「格式化总包 + 行号索引」，不是 75 个独立文件。
