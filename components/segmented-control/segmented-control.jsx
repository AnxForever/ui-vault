import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t();
function i({
  options: e,
  value: t,
  defaultValue: i,
  onChange: s,
  size: c = `md`,
  variant: l = `tray`,
  fullWidth: u = !1,
  kind: d = `radio`,
  disabled: f = !1,
  "aria-label": p,
  "aria-labelledby": m,
  className: h,
}) {
  let g = (0, n.useMemo)(() => {
      let t = new Set();
      return (Array.isArray(e) ? e : []).filter((e) =>
        !e || e.value == null || t.has(String(e.value)) ? !1 : (t.add(String(e.value)), !0),
      );
    }, [e]),
    _ = c === `sm` || c === `lg` ? c : `md`,
    v = l === `underline` ? l : `tray`,
    [y, b] = (0, n.useState)(() => i ?? g.find((e) => !e.disabled)?.value),
    x = t === void 0 ? y : t,
    S = (0, n.useRef)(null),
    C = (0, n.useRef)(null),
    w = (0, n.useRef)(null),
    T = (0, n.useRef)(null),
    E = (0, n.useRef)(x);
  E.current = x;
  let D = (0, n.useRef)(!1),
    O = (0, n.useRef)(0),
    k = (0, n.useRef)(void 0),
    A = (0, n.useRef)(null),
    j = () => Array.from(w.current?.querySelectorAll(`:scope > .ui-seg__opt`) ?? []),
    M = g.findIndex((e) => e.value === x),
    N = M >= 0 ? M : g.findIndex((e) => !e.disabled),
    P = (e) => {
      let n = g.find((t) => t.value === e);
      !n || n.disabled || f || e === E.current || ((E.current = e), t === void 0 && b(e), s?.(e));
    },
    F = () => {
      let e = j();
      if (!e.length || !w.current) return;
      let t = getComputedStyle(e[0]),
        n = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
        r = e.map((e) => e.firstElementChild.offsetWidth + n);
      u
        ? (w.current.style.setProperty(`--ui-seg-min`, `${Math.max(...r)}px`),
          e.forEach((e) => (e.style.width = ``)))
        : e.forEach((e, t) => (e.style.width = `${r[t]}px`));
    },
    I = (e) => {
      let t = w.current,
        n = T.current;
      if (!t || !n) return;
      let r = t.querySelector(`:scope > .ui-seg__opt[data-active]`);
      if (!r || !r.offsetWidth) {
        n.style.opacity = `0`;
        return;
      }
      let i = r.offsetLeft,
        a = r.offsetWidth;
      if (v === `underline`) {
        let e = r.firstElementChild;
        ((i += e.offsetLeft), (a = e.offsetWidth));
      }
      let o = !n.dataset.ready || (!e && !D.current),
        s = parseFloat(n.style.left) || 0;
      (!o && i !== s && (n.dataset.dir = i > s ? `right` : `left`),
        o && (n.style.transition = `none`),
        (n.style.opacity = `1`),
        (n.style.left = `${i}px`),
        (n.style.right = `${t.clientWidth - i - a}px`),
        o && ((n.dataset.ready = `1`), n.offsetWidth, (n.style.transition = ``)));
    },
    L = () => {
      let e = C.current;
      if (!e) return;
      let t = e.scrollWidth - e.clientWidth;
      (S.current?.toggleAttribute(`data-overflow`, t > 1),
        e.style.setProperty(`--ui-seg-fade-l`, e.scrollLeft > 1 ? `24px` : `0px`),
        e.style.setProperty(`--ui-seg-fade-r`, e.scrollLeft < t - 1 ? `24px` : `0px`));
    },
    R = (e) => {
      let t = C.current,
        n = w.current,
        r = n?.querySelector(`:scope > .ui-seg__opt[data-active]`);
      if (!t || !n || !r || t.scrollWidth <= t.clientWidth + 1) return;
      let i = n.offsetLeft + r.offsetLeft - (t.clientWidth - r.offsetWidth) / 2;
      t.scrollTo({ left: Math.max(0, i), behavior: e ? `smooth` : `auto` });
    };
  ((0, n.useLayoutEffect)(() => {
    let e = w.current,
      t = C.current;
    if (!e || !t) return;
    let n = () => {
      (F(), I(!1), L());
    };
    n();
    let r = requestAnimationFrame(() => S.current?.setAttribute(`data-ready`, ``)),
      i = 0,
      a = new ResizeObserver(() => {
        (cancelAnimationFrame(i), (i = requestAnimationFrame(n)));
      });
    return (
      a.observe(t),
      a.observe(e),
      e.querySelectorAll(`.ui-seg__opt, .ui-seg__content`).forEach((e) => a.observe(e)),
      () => {
        (a.disconnect(), cancelAnimationFrame(i), cancelAnimationFrame(r));
      }
    );
  }, [g.length, u, v, _]),
    (0, n.useLayoutEffect)(() => {
      if (k.current === x) return;
      let e = k.current === void 0;
      ((k.current = x),
        e ||
          ((D.current = !0),
          clearTimeout(O.current),
          (O.current = window.setTimeout(() => (D.current = !1), 440))),
        I(!e),
        R(!e));
      let t = w.current;
      !e && t && t.contains(document.activeElement) && j()[M]?.focus({ preventScroll: !0 });
    }, [x]),
    (0, n.useEffect)(() => () => clearTimeout(O.current), []));
  let z = (e) => {
      let t = g.filter((e) => !e.disabled);
      if (!t.length || f) return;
      let n = d === `radio` ? [`ArrowLeft`, `ArrowUp`] : [`ArrowLeft`],
        r = d === `radio` ? [`ArrowRight`, `ArrowDown`] : [`ArrowRight`],
        i = t.findIndex((e) => e.value === E.current),
        a;
      (n.includes(e.key)
        ? (a = t[(i - 1 + t.length) % t.length])
        : r.includes(e.key)
          ? (a = t[(i + 1) % t.length])
          : e.key === `Home`
            ? (a = t[0])
            : e.key === `End` && (a = t[t.length - 1]),
        a && (e.preventDefault(), P(a.value), j()[g.indexOf(a)]?.focus()));
    },
    B = (e) => {
      let t = -1,
        n = 1 / 0;
      return (
        j().forEach((r, i) => {
          let a = r.getBoundingClientRect(),
            o = e < a.left ? a.left - e : e > a.right ? e - a.right : 0;
          o < n && ((n = o), (t = i));
        }),
        g[t]
      );
    },
    V = () => {
      ((A.current = null), S.current?.removeAttribute(`data-pressed`));
    },
    H = (e) => {
      if (f || e.button !== 0) return;
      let t = B(e.clientX);
      if (!t || t.disabled) return;
      let n = e.pointerType === `touch`,
        r = !n || t.value === E.current;
      if (
        ((A.current = { id: e.pointerId, touch: n, drag: r, x: e.clientX, moved: !1 }),
        r && S.current?.setAttribute(`data-pressed`, ``),
        !n)
      ) {
        P(t.value);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
      }
    },
    U = (e) => {
      let t = A.current;
      if (
        !t ||
        t.id !== e.pointerId ||
        (!t.moved && Math.abs(e.clientX - t.x) < (t.touch ? 8 : 3)) ||
        ((t.moved = !0), !t.drag)
      )
        return;
      let n = B(e.clientX);
      n && !n.disabled && P(n.value);
    },
    W = (e) => {
      let t = A.current;
      if (t && t.id === e.pointerId) {
        if (t.touch && !t.moved) {
          let t = B(e.clientX);
          t && P(t.value);
        }
        V();
      }
    },
    G = d === `tabs`;
  return (0, r.jsxs)(`div`, {
    ref: S,
    className: [`ui-seg`, h].filter(Boolean).join(` `),
    "data-size": _,
    "data-variant": v,
    "data-full": u || void 0,
    "data-disabled": f || void 0,
    children: [
      (0, r.jsx)(`style`, { href: `ui-segmented-control`, precedence: `default`, children: o }),
      (0, r.jsx)(`div`, {
        ref: C,
        className: `ui-seg__scroller`,
        onScroll: L,
        children: (0, r.jsxs)(`div`, {
          ref: w,
          className: `ui-seg__track`,
          role: G ? `tablist` : `radiogroup`,
          "aria-label": p,
          "aria-labelledby": m,
          "aria-disabled": f || void 0,
          "aria-orientation": G ? `horizontal` : void 0,
          onKeyDown: z,
          onPointerDown: H,
          onPointerMove: U,
          onPointerUp: W,
          onPointerCancel: V,
          onLostPointerCapture: V,
          children: [
            (0, r.jsx)(`span`, { ref: T, className: `ui-seg__pill`, "aria-hidden": `true` }),
            g.map((e, t) => {
              let n = t === M,
                i = e.label ?? (e.icon ? null : String(e.value)),
                o = a(e.count);
              return (0, r.jsx)(
                `button`,
                {
                  type: `button`,
                  className: `ui-seg__opt`,
                  role: G ? `tab` : `radio`,
                  "aria-checked": G ? void 0 : n,
                  "aria-selected": G ? n : void 0,
                  "aria-controls": G ? e.controls : void 0,
                  "aria-label": e.ariaLabel,
                  "data-active": n || void 0,
                  disabled: e.disabled || f,
                  tabIndex: t === N ? 0 : -1,
                  onClick: () => P(e.value),
                  children: (0, r.jsxs)(`span`, {
                    className: `ui-seg__content`,
                    children: [
                      e.icon &&
                        (0, r.jsx)(`span`, {
                          className: `ui-seg__icon`,
                          onErrorCapture: (e) => (e.target.style.visibility = `hidden`),
                          children: e.icon,
                        }),
                      i != null &&
                        (0, r.jsxs)(`span`, {
                          className: `ui-seg__label`,
                          dir: `auto`,
                          children: [
                            (0, r.jsx)(`span`, { className: `ui-seg__text`, children: i }),
                            (0, r.jsx)(`span`, {
                              className: `ui-seg__text ui-seg__text-bold`,
                              "aria-hidden": `true`,
                              children: i,
                            }),
                          ],
                        }),
                      o != null &&
                        o !== `` &&
                        (0, r.jsx)(`span`, { className: `ui-seg__count`, children: o }, String(o)),
                      e.badge != null &&
                        (0, r.jsx)(`span`, { className: `ui-seg__badge`, children: e.badge }),
                    ],
                  }),
                },
                String(e.value),
              );
            }),
          ],
        }),
      }),
    ],
  });
}
var a = (e) => (typeof e == `number` ? (Number.isFinite(e) ? e.toLocaleString(`en-US`) : null) : e),
  o = `
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-seg-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-seg-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-seg-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-seg {
  --ui-seg-tray: #f0f0f0;
  --ui-seg-pill: #ffffff;
  --ui-seg-line: #ececec;
  --ui-seg-ink: #171717;
  --ui-seg-text: #404040;
  --ui-seg-soft: #737373;
  --ui-seg-muted: #8f8f8f;
  --ui-seg-count: rgba(0, 0, 0, 0.06);
  --ui-seg-accent: #2f6bff;
  --ui-seg-accent-soft: rgba(47, 107, 255, 0.1);
  --ui-seg-pill-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.06);
  --ui-seg-focus: rgba(23, 23, 23, 0.22);
  --ui-seg-ease: cubic-bezier(0.22, 1, 0.36, 1);
  /* Size: md */
  --ui-seg-h: 30px;
  --ui-seg-px: 12px;
  --ui-seg-fs: 13.5px;
  --ui-seg-r: 11px;
  --ui-seg-pad: 3px;
  --ui-seg-icon: 15px;
  --ui-seg-gap: 20px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: var(--ui-seg-r);
  background: var(--ui-seg-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-seg-fs);
  line-height: 1;
  color: var(--ui-seg-soft);
  -webkit-font-smoothing: antialiased;
}
.ui-seg[data-size="sm"] { --ui-seg-h: 26px; --ui-seg-px: 10px; --ui-seg-fs: 12.5px; --ui-seg-r: 9px; --ui-seg-pad: 2px; --ui-seg-icon: 14px; --ui-seg-gap: 16px; }
.ui-seg[data-size="lg"] { --ui-seg-h: 36px; --ui-seg-px: 16px; --ui-seg-fs: 14px; --ui-seg-r: 13px; --ui-seg-pad: 4px; --ui-seg-icon: 16px; --ui-seg-gap: 24px; }
.ui-seg[data-full] { display: flex; width: 100%; }
.ui-seg[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-seg *, .ui-seg *::before, .ui-seg *::after { box-sizing: border-box; }
:where(.ui-seg) button { margin: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-seg) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-seg__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-seg-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  transition: --ui-seg-fade-l 200ms ease, --ui-seg-fade-r 200ms ease;
}
.ui-seg__scroller::-webkit-scrollbar { display: none; }

.ui-seg__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the pill; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the pill */
.ui-seg[data-overflow] .ui-seg__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-seg[data-full] .ui-seg__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-seg-min), 1fr); }
.ui-seg[data-ready] .ui-seg__track { transition: --ui-seg-min 320ms var(--ui-seg-ease); }

/* An option */
.ui-seg__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-seg-h);
  padding: 0 var(--ui-seg-px);
  overflow: clip;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  white-space: nowrap;
  transition: color 200ms ease;
}
.ui-seg[data-ready]:not([data-full]) .ui-seg__opt { transition: color 200ms ease, width 320ms var(--ui-seg-ease); }
.ui-seg__opt[data-active] { color: var(--ui-seg-ink); }
.ui-seg__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-seg__opt:focus-visible { outline: 2px solid var(--ui-seg-focus); outline-offset: 0; }
@media (hover: hover) {
  .ui-seg__opt:not([data-active]):not(:disabled):hover { color: var(--ui-seg-text); }
}

.ui-seg__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-seg__icon { display: grid; place-items: center; width: var(--ui-seg-icon); height: var(--ui-seg-icon); }
.ui-seg__icon svg, .ui-seg__icon img { width: 100%; height: 100%; }
/* Images fill the tile without leaving it, whatever their shape */
.ui-seg__icon { overflow: hidden; }
.ui-seg__icon img { display: block; object-fit: contain; }

/* Regular and semibold copies of the label crossfade */
.ui-seg__label { display: grid; justify-items: center; }
.ui-seg__text { grid-area: 1 / 1; font-weight: 500; transition: opacity 200ms ease; }
.ui-seg__text-bold { font-weight: 600; opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text { opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text-bold { opacity: 1; }

.ui-seg__count {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--ui-seg-count);
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--ui-seg-text);
  animation: ui-seg-in 260ms var(--ui-seg-ease) both;
}
.ui-seg[data-size="sm"] .ui-seg__count { min-width: 16px; height: 16px; padding: 0 4px; font-size: 10.5px; }
.ui-seg__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--ui-seg-accent-soft);
  font-size: 11px;
  font-weight: 500;
  color: var(--ui-seg-accent);
}

/* The indicator: left and right edges glide separately – the one facing the target leads, so it stretches and settles */
.ui-seg__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  background: var(--ui-seg-pill);
  box-shadow: var(--ui-seg-pill-shadow);
  opacity: 0;
  pointer-events: none;
  transition: left 380ms var(--ui-seg-ease), right 380ms var(--ui-seg-ease), scale 200ms var(--ui-seg-ease), opacity 160ms ease;
}
.ui-seg__pill[data-dir="right"] { transition-duration: 400ms, 270ms, 200ms, 160ms; }
.ui-seg__pill[data-dir="left"] { transition-duration: 270ms, 400ms, 200ms, 160ms; }
/* Press feedback: the pill gives a little while held or dragged */
.ui-seg[data-pressed]:not([data-variant="underline"]) .ui-seg__pill { scale: 0.97; }

/* Underline variant: text tabs on a hairline */
.ui-seg[data-variant="underline"] { --ui-seg-px: 2px; border-radius: 0; background: none; box-shadow: inset 0 -1px 0 var(--ui-seg-line); }
.ui-seg[data-variant="underline"] .ui-seg__scroller { padding: 0; }
.ui-seg[data-variant="underline"]:not([data-full]) .ui-seg__track { gap: var(--ui-seg-gap); }
.ui-seg[data-variant="underline"][data-full] { --ui-seg-px: 10px; }
.ui-seg[data-variant="underline"] .ui-seg__opt { height: calc(var(--ui-seg-h) + 6px); border-radius: 6px; }
.ui-seg[data-variant="underline"] .ui-seg__opt:focus-visible { outline-offset: -2px; }
.ui-seg[data-variant="underline"] .ui-seg__pill { top: auto; height: 2px; border-radius: 2px 2px 0 0; background: var(--ui-seg-ink); box-shadow: none; }

@keyframes ui-seg-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-seg[data-size] { --ui-seg-h: 40px; }
  .ui-seg[data-size="lg"] { --ui-seg-h: 44px; }
  .ui-seg[data-variant="underline"] .ui-seg__opt { height: var(--ui-seg-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-seg *, .ui-seg *::before, .ui-seg *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-seg {
  --ui-seg-tray: #111113;
  --ui-seg-pill: #26262a;
  --ui-seg-line: #2a2a2e;
  --ui-seg-ink: #ededed;
  --ui-seg-text: #c8c8cc;
  --ui-seg-soft: #8b8b92;
  --ui-seg-muted: #8b8b92;
  --ui-seg-count: rgba(255, 255, 255, 0.08);
  --ui-seg-accent: #6d8bff;
  --ui-seg-accent-soft: rgba(109, 139, 255, 0.14);
  --ui-seg-pill-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-seg-focus: rgba(255, 255, 255, 0.3);
}
`;
