/*
 * affectUI · thinking-loader
 * Implementation recovered from public bundle asset: component-Ek9d4icg.js
 * Styles inlined in the module -> thinking-loader.css (0 block(s))
 * Demo usage: thinking-loader.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = [`Thinking`, `Searching the web`, `Reading sources`, `Writing response`],
  a = Array.from({ length: 8 }, (e, t) => t),
  o = (e) => {
    if (e < 60) return `${e}s`;
    let t = Math.floor(e / 60);
    if (t < 60) return `${t}m ${e % 60}s`;
    let n = Math.floor(t / 60);
    return n < 24 ? `${n}h ${String(t % 60).padStart(2, `0`)}m` : `${Math.floor(n / 24)}d ${n % 24}h`;
  };
function s({
  phases: e = i,
  interval: t = 2200,
  phase: s,
  loop: l = !1,
  done: u = !1,
  doneLabel: d = (e) => `Thought for ${o(e)}`,
  size: f = `md`,
  variant: p = `pill`,
  className: m,
}) {
  let h = Array.isArray(e) ? e.map((e) => String(e ?? ``)) : [],
    g = h.length ? h : i.slice(0, 1),
    _ = Number.isFinite(t) && t > 0 ? Math.max(t, 200) : 2200,
    [v, y] = (0, n.useState)(0),
    [b, x] = (0, n.useState)(() => Date.now()),
    [S, C] = (0, n.useState)(null),
    w = S ?? Math.max(1, Math.round((Date.now() - b) / 1e3));
  (u && S === null && C(w),
    !u && S !== null && (C(null), x(Date.now()), y(0)),
    (0, n.useEffect)(() => {
      if (u || (s !== void 0 && Number.isFinite(s)) || g.length < 2) return;
      let e = window.setInterval(() => {
        y((e) => (e + 1 < g.length ? e + 1 : l ? 0 : e));
      }, _);
      return () => window.clearInterval(e);
    }, [u, s, g.length, _, l]));
  let T = Math.min(
      Math.max(s !== void 0 && Number.isFinite(s) ? Math.floor(s) : v, 0),
      Math.max(g.length - 1, 0),
    ),
    E = String((u ? (typeof d == `function` ? d(w) : d) : g[T]) ?? ``),
    [D, O] = (0, n.useState)({ key: 0, text: E }),
    [k, A] = (0, n.useState)(null);
  E !== D.text && (A(D), O({ key: D.key + 1, text: E }));
  let j = (0, n.useRef)(null),
    M = (0, n.useRef)(null),
    N = (0, n.useRef)(null),
    P = (0, n.useRef)(!1),
    F = (0, n.useRef)(() => {});
  return (
    (F.current = () => {
      let e = j.current,
        t = M.current,
        n = N.current;
      if (!e || !t || !n) return;
      let r = n.scrollWidth + 1,
        i = e.parentElement,
        a = { width: t.style.width, transition: t.style.transition };
      ((t.style.transition = `none`), (t.style.width = `${r}px`));
      let o = i ? getComputedStyle(i) : null,
        s = i && o ? i.clientWidth - parseFloat(o.paddingLeft) - parseFloat(o.paddingRight) : 0,
        c = i ? Math.floor(s - (e.offsetWidth - t.offsetWidth)) : r;
      ((t.style.width = a.width), t.getBoundingClientRect(), (t.style.transition = a.transition));
      let l = c > 0 && r > c;
      (e.toggleAttribute(`data-cut`, l), (t.style.width = `${l ? c : r}px`));
    }),
    (0, n.useLayoutEffect)(() => {
      let e = M.current;
      e &&
        (P.current || (e.style.transition = `none`),
        F.current(),
        (P.current ||= (e.getBoundingClientRect(), (e.style.transition = ``), !0)));
    }, [D.key]),
    (0, n.useEffect)(() => {
      let e = j.current?.parentElement;
      if (!e || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(() => F.current());
      return (t.observe(e), () => t.disconnect());
    }, []),
    (0, r.jsxs)(`span`, {
      ref: j,
      className: [`ui-tl`, m].filter(Boolean).join(` `),
      "data-size": f,
      "data-variant": p,
      "data-done": u || void 0,
      role: `status`,
      "aria-live": `polite`,
      children: [
        (0, r.jsx)(`style`, { href: `ui-thinking-loader`, precedence: `default`, children: c }),
        (0, r.jsxs)(`span`, {
          className: `ui-tl__icon`,
          "aria-hidden": `true`,
          children: [
            (0, r.jsx)(`svg`, {
              className: `ui-tl__spinner`,
              viewBox: `0 0 16 16`,
              children: a.map((e) =>
                (0, r.jsx)(
                  `line`,
                  {
                    x1: `8`,
                    y1: `1.75`,
                    x2: `8`,
                    y2: `4.75`,
                    transform: `rotate(${e * 45} 8 8)`,
                    style: { animationDelay: `${(e - 8) * 100}ms` },
                  },
                  e,
                ),
              ),
            }),
            (0, r.jsx)(`svg`, {
              className: `ui-tl__check`,
              viewBox: `0 0 16 16`,
              children: (0, r.jsx)(`path`, { d: `M3.5 8.4 6.6 11.3 12.5 4.9`, pathLength: 1 }),
            }),
          ],
        }),
        (0, r.jsxs)(`span`, {
          ref: M,
          className: `ui-tl__text`,
          children: [
            k &&
              (0, r.jsx)(
                `span`,
                {
                  className: `ui-tl__label ui-tl__label--out`,
                  "aria-hidden": `true`,
                  dir: `auto`,
                  onAnimationEnd: () => A(null),
                  children: k.text,
                },
                k.key,
              ),
            (0, r.jsx)(
              `span`,
              {
                ref: N,
                className: [`ui-tl__label`, D.key > 0 && `ui-tl__label--in`, !u && `ui-tl__shine`]
                  .filter(Boolean)
                  .join(` `),
                "data-text": D.text,
                title: D.text,
                dir: `auto`,
                children: D.text,
              },
              D.key,
            ),
          ],
        }),
      ],
    })
  );
}
var c = `
.ui-tl {
  --ui-tl-ink: #171717;
  --ui-tl-text: #6b6b6b;
  --ui-tl-ray: #171717;
  --ui-tl-bg: #ffffff;
  --ui-tl-line: #e7e7e7;
  --ui-tl-shine: rgba(255, 255, 255, 0.82);
  --ui-tl-done: #171717;
  --ui-tl-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tl-h: 34px;
  --ui-tl-font: 14px;
  --ui-tl-icon: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  height: var(--ui-tl-h);
  padding: 0 15px 0 12px;
  border-radius: 999px;
  background: var(--ui-tl-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tl-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tl-text);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-tl-font);
  font-weight: 450;
  line-height: 1;
  letter-spacing: -0.006em;
  max-width: 100%;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
}
.ui-tl[data-size="sm"] {
  --ui-tl-h: 28px;
  --ui-tl-font: 13px;
  --ui-tl-icon: 13px;
  gap: 7px;
  padding: 0 12px 0 10px;
}
.ui-tl[data-variant="plain"] {
  padding: 0;
  background: none;
  box-shadow: none;
}

/* Spinner and check share one square and swap with a little scale */
.ui-tl__icon {
  position: relative;
  flex: none;
  width: var(--ui-tl-icon);
  height: var(--ui-tl-icon);
}
.ui-tl__icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transition: opacity 240ms ease, transform 420ms var(--ui-tl-ease);
}
.ui-tl__spinner line {
  stroke: var(--ui-tl-ray);
  stroke-width: 1.6;
  stroke-linecap: round;
  opacity: 0.18;
  animation: ui-tl-ray 800ms linear infinite;
}
.ui-tl__check {
  opacity: 0;
  transform: scale(0.6);
  fill: none;
  stroke: var(--ui-tl-done);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ui-tl__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.ui-tl[data-done] .ui-tl__spinner {
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
}
.ui-tl[data-done] .ui-tl__check {
  opacity: 1;
  transform: none;
}
.ui-tl[data-done] .ui-tl__check path {
  animation: ui-tl-draw 360ms var(--ui-tl-ease) 120ms forwards;
}

/* The text box glides to the width of the incoming label; labels roll through it */
/* min-width 0: in a narrow container the box gives way and the label ends in "…" */
.ui-tl__text {
  position: relative;
  display: block;
  min-width: 0;
  height: 1.3em;
  overflow: hidden;
  transition: width 460ms var(--ui-tl-ease);
}
.ui-tl__label {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.3em;
  white-space: nowrap;
}
.ui-tl[data-cut] .ui-tl__label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ui-tl[data-done] .ui-tl__label {
  color: var(--ui-tl-ink);
}
.ui-tl__label--in {
  animation: ui-tl-in 460ms var(--ui-tl-ease) both;
}
.ui-tl__label--out {
  animation: ui-tl-out 320ms var(--ui-tl-ease) both;
}

/* A soft light sweeping over the label while it works */
.ui-tl__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tl-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tl-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tl-ray {
  0% { opacity: 1; }
  100% { opacity: 0.18; }
}
@keyframes ui-tl-in {
  from { opacity: 0; transform: translateY(70%); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tl-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(-70%); filter: blur(3px); }
}
@keyframes ui-tl-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ui-tl-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tl *,
  .ui-tl *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tl__spinner line { opacity: 0.6; }
  .ui-tl__shine::after { display: none; }
  .ui-tl__check path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tl {
  --ui-tl-ink: #ededed;
  --ui-tl-text: #8f8f8f;
  --ui-tl-ray: #ededed;
  --ui-tl-bg: #161618;
  --ui-tl-line: rgba(255, 255, 255, 0.1);
  --ui-tl-shine: rgba(255, 255, 255, 0.95);
  --ui-tl-done: #ededed;
}
`;
