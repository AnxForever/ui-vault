/* Usage example (recovered from demo-DAuHP3Xc.js) */

import { t as e } from "./jsx-runtime-CTsRTJUX.js";
import { d as t, f as n } from "./index-CFGVEsd9.js";
import { i as r } from "./component-90nTR1WK.js";
import { n as i } from "./component-By-qHuWo.js";
import { t as a } from "./component-BxbkRf5G.js";
var o = e();
function s({ panel: e, panelTitle: t = `Workspace`, tools: n, sources: r, onOpen: s, ...c }) {
  return (0, o.jsx)(a, {
    ...c,
    panelTitle: t,
    panel: e ?? (0, o.jsx)(i, { tools: n, sources: r, onOpen: s }),
  });
}
function c() {
  return (0, o.jsx)(t, {
    children: (0, o.jsx)(s, {
      active: `New chat`,
      onNavigate: n,
      children: (0, o.jsx)(`div`, {
        className: `ui-as-center`,
        children: (0, o.jsx)(r, {
          bare: !0,
          title: `Your page goes here`,
          text: `The flat shell brings both sidebars and the scroll container – put any screen inside.`,
        }),
      }),
    }),
  });
}
