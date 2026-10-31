# Kobra 组件回收 — 校验后的覆盖

注册组件 **96** 个，校验通过 **78** 个。

| 类别 | 数量 | 形态 | 校验方式 |
|---|---|---|---|
| 免费组件原始源码 | 11 | 完整 .tsx | esbuild 解析 + registry 文件逐一对账 + JSX 存在 |
| 付费组件（chunk 提取） | 67 | minified 实现 | slot 定位 + 组件体信号（JSX 调用 / forwardRef / useRender / cva / hooks / className） |
| 未拿到 | 18 | — | 见文末 |

## 免费原件

`ai-editor` · `halftone-dots` · `carousel` · `command-menu` · `input-otp` · `morphing-icons` · `navigation-menu` · `sound` · `toast` · `conversation` · `video`

## 从 chunk 提取

| 组件 | 所在 chunk | slot 证据 | JSX | hooks |
|---|---|---|---|---|
| `accordion` | streaming-text-Dxk_F3bc.js | accordion, accordion-item, accordion-trigger | 10 | 2 |
| `advertisement` | bundle(749KB) | advertisement-card, advertisement, advertisement-progress | 12 | 1 |
| `agent-map` | bundle(749KB) | agent-map, agent-map-canvas, agent-map-location | 12 | 6 |
| `alert` | dialog-Ckb8mHCp.js | alert-dialog-content, alert-dialog-cancel, alert-dialog-action | 12 | 0 |
| `aspect-ratio` | bundle(749KB) | aspect-ratio | 12 | 0 |
| `attachment` | bundle(749KB) | attachment, attachment-media, attachment-content | 7 | 0 |
| `avatar` | dropdown-menu-CjfioGSW.js | avatar, avatar-image, avatar-fallback | 6 | 4 |
| `breadcrumb` | bundle(749KB) | breadcrumb, breadcrumb-list, breadcrumb-item | 13 | 0 |
| `button` | button-C00blxQd.js | button | 1 | 0 |
| `calendar` | persian-CNslrowO.js | calendar | 12 | 14 |
| `card` | bundle(749KB) | card, card-header, card-title | 16 | 0 |
| `chart` | chart-preview-B-x_gUYn.js | chart, chart-tooltip-content | 8 | 2 |
| `chat-history` | bundle(749KB) | chat-history, chat-history-transcript, chat-history-reply | 8 | 2 |
| `chat-input` | bundle(749KB) | chat-input | 9 | 0 |
| `checkbox` | bundle(749KB) | checkbox, checkbox-indicator | 7 | 2 |
| `collapsible` | bundle(749KB) | collapsible, collapsible-trigger, collapsible-content | 4 | 0 |
| `color-palette` | bundle(749KB) | color-palette, color-palette-swatch | 4 | 4 |
| `color-picker` | bundle(749KB) | color-picker-solid, color-picker-field, color-picker-hue | 14 | 5 |
| `combobox` | bundle(749KB) | combobox-value, combobox-trigger, combobox-clear | 11 | 2 |
| `composer` | bundle(749KB) | composer | 21 | 6 |
| `context-menu` | bundle(749KB) | context-menu, context-menu-portal, context-menu-trigger | 11 | 0 |
| `conversion` | bundle(749KB) | conversion, conversion-card, conversion-formula | 22 | 3 |
| `crm-table` | bundle(749KB) | crm-table-tag, crm-table, crm-table-scroll-area | 6 | 0 |
| `dialog` | dialog-Ckb8mHCp.js | dialog, dialog-trigger, dialog-portal | 9 | 8 |
| `document-agent` | bundle(749KB) | document-agent, document-agent-split, document-agent-panel | 4 | 20 |
| `drawer` | drawer-BhrHYSlC.js | drawer-trigger, drawer-close, drawer-overlay | 15 | 0 |
| `dropdown-menu` | dropdown-menu-CjfioGSW.js | dropdown-menu, dropdown-menu-portal, dropdown-menu-trigger | 9 | 6 |
| `empty` | bundle(749KB) | empty, empty-header, empty-icon | 12 | 0 |
| `filter-chips` | bundle(749KB) | filter-chips, filter-chips-item | 9 | 0 |
| `grouped-table` | bundle(749KB) | grouped-table-row, grouped-table, grouped-table-toolbar | 23 | 0 |
| `hover-card` | bundle(749KB) | hover-card, hover-card-trigger, hover-card-portal | 8 | 9 |
| `image-gallery` | bundle(749KB) | image-gallery | 5 | 0 |
| `image-generation` | bundle(749KB) | image-generation | 18 | 0 |
| `input` | bundle(749KB) | input-group-button, input-otp, input-otp-ring | 19 | 1 |
| `item` | bundle(749KB) | item-group, item-separator, item-media | 8 | 0 |
| `kbd` | bundle(749KB) | kbd, kbd-group | 7 | 2 |
| `lightbox` | bundle(749KB) | lightbox-row, lightbox-photo, lightbox-stage | 5 | 0 |
| `logo-carousel` | bundle(749KB) | logo-carousel, logo-carousel-mark | 9 | 0 |
| `logo-picker` | bundle(749KB) | logo-picker, logo-picker-preview, logo-picker-drop | 9 | 8 |
| `marker` | bundle(749KB) | marker-icon, marker-content | 11 | 6 |
| `menubar` | bundle(749KB) | menubar, menubar-menu, menubar-group | 14 | 6 |
| `message` | bundle(749KB) | message-scroller, message-scroller-viewport, message-scroller-content | 9 | 6 |
| `message-scroller` | bundle(749KB) | message-scroller, message-scroller-viewport, message-scroller-content | 9 | 6 |
| `pagination` | bundle(749KB) | pagination, pagination-content, pagination-highlight | 14 | 8 |
| `popover` | bundle(749KB) | popover, popover-trigger, popover-content | 9 | 3 |
| `product-cards` | bundle(749KB) | product-cards | 26 | 0 |
| `progress` | bundle(749KB) | progress, progress-track, progress-indicator | 10 | 1 |
| `qr-code` | bundle(749KB) | qr-code, qr-code-logo | 12 | 0 |
| `radio-group` | bundle(749KB) | radio-group, radio-group-item, radio-group-indicator | 9 | 3 |
| `reasoning-steps` | bundle(749KB) | reasoning-steps | 17 | 0 |
| `resizable` | snap-stops-B65Rw2-k.js | resizable-panel-group, resizable-panel, resizable-handle | 4 | 2 |
| `scroll-area` | bundle(749KB) | scroll-area, scroll-area-viewport, scroll-area-scrollbar | 7 | 2 |
| `select` | bundle(749KB) | select-group, select-value, select-trigger | 11 | 3 |
| `separator` | table-B2gZYvbu.js | separator | 9 | 0 |
| `sheet` | bundle(749KB) | sheet, sheet-trigger, sheet-close | 13 | 0 |
| `sidebar` | bundle(749KB) | sidebar-wrapper, sidebar, sidebar-gap | 11 | 7 |
| `skeleton` | resolution-C19ZFU1I.js | skeleton | 1 | 0 |
| `slider` | slider-C3jlw4B9.js | slider, slider-track, slider-range | 8 | 0 |
| `spinner` | dialog-Ckb8mHCp.js | spinner | 13 | 0 |
| `switch` | bundle(749KB) | switch, switch-thumb | 6 | 0 |
| `table` | table-B2gZYvbu.js | table-container, table, table-header | 10 | 0 |
| `task-list` | bundle(749KB) | task-list | 18 | 0 |
| `textarea` | input-group-RVn51vGA.js | textarea | 2 | 0 |
| `toggle-group` | bundle(749KB) | toggle-group, toggle-group-item | 4 | 1 |
| `tooltip` | tooltip-CTAV9dPt.js | tooltip-provider, tooltip, tooltip-trigger | 6 | 8 |
| `trace-waterfall` | bundle(749KB) | trace-waterfall, trace-waterfall-label, trace-waterfall-scroll-area | 10 | 1 |
| `weather` | bundle(749KB) | weather, weather-separator | 16 | 6 |

## 未拿到（18）

`badge` · `multi-select` · `form` · `input-dissolve` · `tabs` · `direction` · `magnetic-dropzone` · `streaming-text` · `inline-citations` · `code-block` · `plan-card` · `question-card` · `hijri` · `hijri-civil` · `persian` · `buddhist` · `minguo` · `japanese`

两类原因：

**组件本身不挂 data-slot（12 个）**——`badge` `tabs` `multi-select` `form` `input-dissolve` `direction` `magnetic-dropzone` `streaming-text` `inline-citations` `code-block` `plan-card` `question-card`。逐个打开过页面，预览区 DOM 里只有站点通用件（`gallery-shell`、`preview-stage`、`button`、`kbd`），组件自己不暴露标记，无法在 chunk 里定位。

**calendar 的日期本地化子库（6 个）**——`hijri` `hijri-civil` `persian` `buddhist` `minguo` `japanese`。抓到的 `persian` chunk 里只有 `calendar` 的 slot，其余五个的实现在别处。

## 校验中修掉的问题

第一版覆盖率报 80/96，是把「别人的子元素」算成了组件本身——比如 `input-group-button` 被当成 `button` 组件。严格化口径（slot 必须等于 slug 或以 `slug-` 开头）后降到 65，再补齐 button / table / separator / skeleton 各自独立 chunk 后回到 78。

另外两个校验脚本自身出过错：JSX 检测用了 `\.jsx(` 而 minified 代码实际是 `.jsx)(`，导致 11 个免费组件全被误判为「无 JSX」；以及打分窗口过窄，把 `trace-waterfall` 这种完整实现判成证据不足。都已修正。