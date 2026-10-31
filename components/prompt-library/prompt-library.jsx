/*
 * affectUI · prompt-library (Pro)
 * Implementation recovered from public bundle asset: demo-Dag7eJtM.js
 * Styles inlined in the module -> prompt-library.css (1 block(s))
 * Demo usage: prompt-library.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [`blue`, `violet`, `amber`, `green`, `red`, `gray`],
  a = /\{([A-Za-z0-9_-]+)\}/g,
  o = (e) => {
    let t = [],
      n = 0;
    for (let r of e.matchAll(a)) {
      r.index > n && t.push({ text: e.slice(n, r.index) });
      let i = r.index + r[0].length,
        a = /^[.,;:!?)\]"'’…]+/.exec(e.slice(i))?.[0] ?? ``;
      (t.push({ name: r[1], tail: a }), (n = i + a.length));
    }
    return (n < e.length && t.push({ text: e.slice(n) }), t);
  },
  s = (e) => [...new Set([...e.matchAll(a)].map((e) => e[1]))],
  c = (e, t) => e.replace(a, (e, n) => (t[n]?.trim() ? t[n] : e)),
  l = new Intl.NumberFormat(`en`),
  u = (e) => Math.max(1, Math.round(e.length / 4)),
  ee = (e) => {
    let t = {};
    for (let n of s(e.body)) t[n] = e.variables?.[n]?.default ?? ``;
    return t;
  },
  d = (e) => 1 - (1 - e) ** 4,
  f = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function p(e, t) {
  let [r, i] = (0, n.useState)(e),
    a = (0, n.useRef)(e);
  return (
    (0, n.useEffect)(() => {
      let n = a.current;
      if (f() || n === e) {
        ((a.current = e), i(e));
        return;
      }
      let r = performance.now(),
        o = 0,
        s = (c) => {
          let l = Math.min(1, (c - r) / t);
          ((a.current = n + (e - n) * d(l)), i(a.current), l < 1 && (o = requestAnimationFrame(s)));
        };
      return ((o = requestAnimationFrame(s)), () => cancelAnimationFrame(o));
    }, [e, t]),
    r
  );
}
function m({ id: e, tone: t, children: i }) {
  let a = (0, n.useRef)({ id: e, tone: t, node: i }),
    [o, s] = (0, n.useState)(e),
    [c, l] = (0, n.useState)(null);
  return (
    o !== e && (s(e), l(a.current)),
    (a.current = { id: e, tone: t, node: i }),
    (0, n.useEffect)(() => {
      if (!c) return;
      let e = window.setTimeout(() => l(null), 260);
      return () => window.clearTimeout(e);
    }, [c]),
    (0, r.jsxs)(`span`, {
      className: `ui-pli__swap`,
      children: [
        c &&
          (0, r.jsx)(
            `span`,
            {
              className: `ui-pli__swap-item`,
              "data-out": ``,
              "data-tone": c.tone,
              "aria-hidden": `true`,
              children: c.node,
            },
            `out-${c.id}`,
          ),
        (0, r.jsx)(`span`, { className: `ui-pli__swap-item`, "data-tone": t, children: i }, e),
      ],
    })
  );
}
var h = { stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` },
  te = () =>
    (0, r.jsxs)(`svg`, {
      width: `13`,
      height: `13`,
      viewBox: `0 0 13 13`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `5.8`, cy: `5.8`, r: `3.8`, ...h }),
        (0, r.jsx)(`path`, { d: `m8.6 8.6 2.4 2.4`, ...h }),
      ],
    }),
  ne = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, { x: `3.8`, y: `3.8`, width: `6.4`, height: `6.4`, rx: `1.6`, ...h }),
        (0, r.jsx)(`path`, {
          d: `M8.2 3.6V3.2A1.4 1.4 0 0 0 6.8 1.8H3.2a1.4 1.4 0 0 0-1.4 1.4v3.6a1.4 1.4 0 0 0 1.4 1.4h.4`,
          ...h,
        }),
      ],
    }),
  re = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m2.6 6.3 2.2 2.2 4.6-5`, ...h, strokeWidth: 1.6 }),
    }),
  ie = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...h }),
    });
function g({
  template: e,
  tone: t,
  values: i,
  flash: a,
  idBase: c,
  onChange: l,
  onHint: u,
  onEnter: ee,
  out: d,
}) {
  let f = o(e.body),
    p = s(e.body),
    m = p.filter((e) => i[e]?.trim()).length,
    h = (e) => (a && a.name === e ? (a.n % 2 ? `a` : `b`) : void 0);
  return (0, r.jsxs)(`div`, {
    className: `ui-pli__panel`,
    "data-out": d ? `` : void 0,
    "aria-hidden": d || void 0,
    inert: d,
    children: [
      (0, r.jsxs)(`div`, {
        className: `ui-pli__panel-head`,
        children: [
          (0, r.jsx)(`span`, {
            className: `ui-pli__panel-title`,
            dir: `auto`,
            title: e.title,
            children: e.title,
          }),
          e.category &&
            (0, r.jsx)(`span`, {
              className: `ui-pli__tag`,
              "data-tone": t,
              dir: `auto`,
              title: e.category,
              children: e.category,
            }),
          p.length > 0 &&
            (0, r.jsxs)(`span`, {
              className: `ui-pli__count`,
              children: [
                p.length <= 12 &&
                  (0, r.jsx)(`span`, {
                    className: `ui-pli__bars`,
                    "aria-hidden": `true`,
                    children: p.map((e) =>
                      (0, r.jsx)(
                        `span`,
                        { className: `ui-pli__bar`, "data-on": i[e]?.trim() ? `` : void 0 },
                        e,
                      ),
                    ),
                  }),
                m,
                ` of `,
                p.length,
                ` filled`,
              ],
            }),
        ],
      }),
      (0, r.jsx)(`p`, {
        className: `ui-pli__body`,
        dir: `auto`,
        children: f.map((t, a) =>
          `text` in t
            ? (0, r.jsx)(n.Fragment, { children: t.text }, a)
            : (0, r.jsxs)(
                `span`,
                {
                  className: `ui-pli__glue`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-pli__token`,
                      "data-filled": i[t.name]?.trim() ? `` : void 0,
                      "data-flash": h(t.name),
                      onPointerEnter: (e) => e.pointerType === `mouse` && u?.(t.name),
                      onPointerLeave: (e) => e.pointerType === `mouse` && u?.(null),
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-pli__sizer`,
                          "aria-hidden": `true`,
                          children: i[t.name] || t.name,
                        }),
                        (0, r.jsx)(`input`, {
                          className: `ui-pli__input`,
                          "data-var": t.name,
                          size: 1,
                          value: i[t.name] ?? ``,
                          placeholder: t.name,
                          "aria-label": e.variables?.[t.name]?.description
                            ? `${t.name} – ${e.variables[t.name].description}`
                            : t.name,
                          spellCheck: !1,
                          autoComplete: `off`,
                          onChange: (e) => l?.(t.name, e.target.value),
                          onFocus: () => u?.(t.name),
                          onBlur: () => u?.(null),
                          onKeyDown: (e) => {
                            e.key === `Enter` && (e.preventDefault(), ee?.(t.name));
                          },
                        }),
                      ],
                    }),
                    t.tail,
                  ],
                },
                a,
              ),
        ),
      }),
      (0, r.jsx)(`div`, { className: `ui-pli__label`, id: `${c}-preview`, children: `Preview` }),
      (0, r.jsx)(`div`, {
        className: `ui-pli__preview`,
        dir: `auto`,
        "aria-labelledby": `${c}-preview`,
        role: `region`,
        children: f.map((e, t) =>
          `text` in e
            ? (0, r.jsx)(n.Fragment, { children: e.text }, t)
            : (0, r.jsxs)(
                `span`,
                {
                  className: `ui-pli__glue`,
                  children: [
                    i[e.name]?.trim()
                      ? (0, r.jsx)(`span`, {
                          className: `ui-pli__fill`,
                          "data-flash": h(e.name),
                          children: i[e.name],
                        })
                      : (0, r.jsx)(`span`, { className: `ui-pli__hole`, children: `{${e.name}}` }),
                    e.tail,
                  ],
                },
                t,
              ),
        ),
      }),
    ],
  });
}
var ae = (0, n.memo)(function ({
  id: e,
  title: t,
  category: n,
  tone: i,
  on: a,
  focusable: o,
  pick: s,
  register: c,
}) {
  return (0, r.jsxs)(`div`, {
    ref: (t) => c(e, t),
    className: `ui-pli__option`,
    role: `option`,
    "aria-selected": a,
    tabIndex: o ? 0 : -1,
    onClick: () => s(e),
    onKeyDown: (t) => {
      (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), s(e));
    },
    children: [
      (0, r.jsx)(`span`, { className: `ui-pli__option-title`, dir: `auto`, title: t, children: t }),
      n &&
        (0, r.jsx)(`span`, { className: `ui-pli__tag`, "data-tone": i, dir: `auto`, title: n, children: n }),
    ],
  });
});
function _({
  templates: e,
  value: t,
  defaultValue: a,
  onSelect: o,
  onUse: d,
  onCopy: h,
  title: _ = `Prompts`,
  useLabel: v = `Use prompt`,
  className: y,
}) {
  let b = (0, n.useId)(),
    [se, ce] = (0, n.useState)(a ?? e[0]?.id),
    le = t ?? se,
    x = e.find((e) => e.id === le) ?? e[0],
    [S, ue] = (0, n.useState)(``),
    [de, fe] = (0, n.useState)({}),
    C = (e) => ({ ...ee(e), ...de[e.id] }),
    [pe, w] = (0, n.useState)(null),
    [T, E] = (0, n.useState)(null),
    [me, D] = (0, n.useState)(!1),
    [O, k] = (0, n.useState)(null),
    [A, j] = (0, n.useState)(``),
    M = (() => {
      let t = new Map();
      for (let n of e) n.category && !t.has(n.category) && t.set(n.category, i[t.size % i.length]);
      return (e) => e.tone ?? t.get(e.category ?? ``) ?? `gray`;
    })(),
    N = S.trim().toLowerCase(),
    P = N ? e.filter((e) => [e.title, e.category ?? ``, e.body].some((e) => e.toLowerCase().includes(N))) : e,
    F = (e) => {
      e !== le && (t === void 0 && ce(e), o?.(e));
    },
    [I, L] = (0, n.useState)(null),
    [R, he] = (0, n.useState)(x?.id);
  (x && R !== x.id && (R && !f() && L({ id: R, key: Date.now() }), he(x.id), E(null), w(null)),
    (0, n.useEffect)(() => {
      if (!I) return;
      let e = window.setTimeout(() => L(null), 260);
      return () => window.clearTimeout(e);
    }, [I]));
  let z = I ? e.find((e) => e.id === I.id) : void 0,
    B = (0, n.useRef)(null),
    V = (0, n.useRef)(new Map()),
    H = (0, n.useRef)(F);
  H.current = F;
  let ge = (0, n.useCallback)((e) => H.current(e), []),
    _e = (0, n.useCallback)((e, t) => {
      t ? V.current.set(e, t) : V.current.delete(e);
    }, []),
    [U, ve] = (0, n.useState)({ y: 0, h: 0, on: !1, moved: !1 }),
    ye = P.map((e) => e.id).join(`|`),
    be = P.some((e) => e.id === x?.id);
  (0, n.useLayoutEffect)(() => {
    let e = () => {
      let e = x ? V.current.get(x.id) : void 0;
      ve((t) =>
        e ? { y: e.offsetTop, h: e.offsetHeight, on: !0, moved: t.on } : { ...t, on: !1, moved: !1 },
      );
    };
    e();
    let t = B.current;
    if (!t || typeof ResizeObserver > `u`) return;
    let n = new ResizeObserver(e);
    return (n.observe(t), () => n.disconnect());
  }, [x?.id, ye]);
  let xe = (e) => {
      if (!P.length) return;
      let t = P.findIndex((e) => e.id === x?.id),
        n = -1;
      if (e.key === `ArrowDown`) n = t < 0 ? 0 : Math.min(P.length - 1, t + 1);
      else if (e.key === `ArrowUp`) n = t < 0 ? P.length - 1 : Math.max(0, t - 1);
      else if (e.key === `Home`) n = 0;
      else if (e.key === `End`) n = P.length - 1;
      else return;
      (e.preventDefault(), F(P[n].id), V.current.get(P[n].id)?.focus());
    },
    W = x ? C(x) : {},
    G = x ? s(x.body) : [],
    K = G.filter((e) => !W[e]?.trim()),
    q = !!x && K.length === 0,
    J = x ? c(x.body, W) : ``,
    Se = p(u(J), 420),
    Ce = (e, t) => {
      if (!x) return;
      let n = x.id;
      (fe((r) => ({ ...r, [n]: { ...C(x), ...r[n], [e]: t } })), w((t) => ({ name: e, n: (t?.n ?? 0) + 1 })));
    },
    [we, Te] = (0, n.useState)(0),
    Y = (0, n.useRef)(q),
    Ee = (0, n.useRef)(x?.id);
  (0, n.useEffect)(() => {
    (q && !Y.current && Ee.current === x?.id && (Te((e) => e + 1), j(`All variables filled`)),
      (Y.current = q),
      (Ee.current = x?.id));
  }, [q, x?.id]);
  let De = (0, n.useRef)(null),
    Oe = (e) => {
      let t = [...(De.current?.querySelectorAll(`.ui-pli__panel:not([data-out]) .ui-pli__input`) ?? [])],
        n = t.findIndex((t) => t.dataset.var === e),
        r = [...t.slice(n + 1), ...t.slice(0, n)].find((e) => !e.value.trim());
      r ? r.focus() : q && Ae();
    },
    ke = async () => {
      try {
        await navigator.clipboard?.writeText(J);
      } catch {}
      (h?.(J), k({ id: Date.now(), kind: `copied` }), j(`Prompt copied`));
    },
    Ae = () => {
      q && x && (d?.(J, x, W), k({ id: Date.now(), kind: `used` }), j(`${x.title} used`));
    };
  ((0, n.useEffect)(() => {
    if (!O) return;
    let e = window.setTimeout(() => k(null), 1800);
    return () => window.clearTimeout(e);
  }, [O]),
    (0, n.useEffect)(() => {
      if (!A) return;
      let e = window.setTimeout(() => j(``), 2e3);
      return () => window.clearTimeout(e);
    }, [A]));
  let je = Math.round(Se),
    X = x
      ? (0, r.jsxs)(r.Fragment, { children: [`~`, l.format(je), ` `, je === 1 ? `token` : `tokens`] })
      : null,
    Z = `tokens`,
    Q,
    $ = T && G.includes(T) ? T : null;
  if (O)
    ((X = O.kind === `copied` ? `Copied to clipboard` : `Prompt sent`),
      (Z = `${O.kind}-${O.id}`),
      (Q = `ok`));
  else if ($) {
    let e = x?.variables?.[$]?.description;
    ((X = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(`b`, { children: $ }), ` · `, e ?? (W[$]?.trim() ? `filled` : `fill this in`)],
    })),
      (Z = `hint-${$}`));
  } else me && !q && ((X = `Fill ${K.length} more to use`), (Z = `missing`));
  return (0, r.jsxs)(`div`, {
    ref: De,
    className: [`ui-pli`, y].filter(Boolean).join(` `),
    role: `group`,
    "aria-labelledby": `${b}-title`,
    children: [
      (0, r.jsx)(`style`, { href: `ui-prompt-library`, precedence: `default`, children: oe }),
      (0, r.jsxs)(`div`, {
        className: `ui-pli__card`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-pli__side`,
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-pli__side-head`,
                children: [
                  (0, r.jsx)(`span`, { id: `${b}-title`, className: `ui-pli__title`, title: _, children: _ }),
                  (0, r.jsx)(`span`, { className: `ui-pli__total`, children: l.format(e.length) }),
                ],
              }),
              (0, r.jsxs)(`label`, {
                className: `ui-pli__search`,
                children: [
                  (0, r.jsx)(te, {}),
                  (0, r.jsx)(`input`, {
                    type: `search`,
                    value: S,
                    placeholder: `Search templates`,
                    "aria-label": `Search templates`,
                    "aria-controls": `${b}-list`,
                    onChange: (e) => ue(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === `ArrowDown` && P.length) {
                        e.preventDefault();
                        let t = P.find((e) => e.id === x?.id) ?? P[0];
                        (F(t.id), V.current.get(t.id)?.focus());
                      } else e.key === `Escape` && S && (e.preventDefault(), ue(``));
                    },
                  }),
                ],
              }),
              (0, r.jsxs)(`div`, {
                ref: B,
                id: `${b}-list`,
                className: `ui-pli__list`,
                "data-scroll": P.length > 12 ? `` : void 0,
                role: `listbox`,
                "aria-label": `Templates`,
                onKeyDown: xe,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-pli__glide`,
                    "aria-hidden": `true`,
                    "data-on": U.on ? `` : void 0,
                    "data-moved": U.moved ? `` : void 0,
                    style: { transform: `translateY(${U.y}px)`, height: U.h },
                  }),
                  P.map((e) => {
                    let t = e.id === x?.id,
                      n = t || (!be && e === P[0]);
                    return (0, r.jsx)(
                      ae,
                      {
                        id: e.id,
                        title: e.title,
                        category: e.category,
                        tone: M(e),
                        on: t,
                        focusable: n,
                        pick: ge,
                        register: _e,
                      },
                      e.id,
                    );
                  }),
                  P.length === 0 &&
                    (0, r.jsx)(`div`, {
                      className: `ui-pli__empty`,
                      children: e.length ? `No templates match` : `No templates yet`,
                    }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-pli__main`,
            children: [
              z &&
                (0, r.jsx)(
                  g,
                  { template: z, tone: M(z), values: C(z), flash: null, idBase: `${b}-out`, out: !0 },
                  `out-${I.key}`,
                ),
              x &&
                (0, r.jsx)(
                  g,
                  {
                    template: x,
                    tone: M(x),
                    values: W,
                    flash: pe,
                    idBase: b,
                    onChange: Ce,
                    onHint: E,
                    onEnter: Oe,
                  },
                  x.id,
                ),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-pli__foot`,
        children: [
          (0, r.jsx)(`span`, {
            className: `ui-pli__caption`,
            children: (0, r.jsx)(m, { id: Z, tone: Q, children: X }),
          }),
          (0, r.jsxs)(`button`, {
            type: `button`,
            className: `ui-pli__copy`,
            onClick: ke,
            "aria-label": `Copy prompt`,
            disabled: !x,
            children: [
              (0, r.jsx)(
                `span`,
                {
                  className: `ui-pli__copy-icon`,
                  children: O?.kind === `copied` ? (0, r.jsx)(re, {}) : (0, r.jsx)(ne, {}),
                },
                O?.kind === `copied` ? `done` : `copy`,
              ),
              (0, r.jsx)(`span`, { className: `ui-pli__copy-text`, children: `Copy` }),
            ],
          }),
          (0, r.jsxs)(`button`, {
            type: `button`,
            className: `ui-pli__use`,
            "aria-disabled": !q,
            "data-pulse": we ? (we % 2 ? `a` : `b`) : void 0,
            onClick: Ae,
            onPointerEnter: () => D(!0),
            onPointerLeave: () => D(!1),
            onFocus: () => D(!0),
            onBlur: () => D(!1),
            title: v,
            children: [
              (0, r.jsx)(`span`, { className: `ui-pli__use-label`, children: v }),
              (0, r.jsx)(ie, {}),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-pli__sr`, role: `status`, "aria-live": `polite`, children: A }),
    ],
  });
}
var oe = `.ui-pli{--ui-pli-tray: #f0f0f0;--ui-pli-card: #ffffff;--ui-pli-line: #ececec;--ui-pli-ink: #171717;--ui-pli-text: #404040;--ui-pli-muted: #8f8f8f;--ui-pli-well: #f4f4f5;--ui-pli-accent: #2f6bff;--ui-pli-accent-ink: #1f55d6;--ui-pli-accent-bg: rgba(47, 107, 255, 0.09);--ui-pli-accent-flash: rgba(47, 107, 255, 0.24);--ui-pli-hole: #b4b4b9;--ui-pli-on-ink: #ffffff;--ui-pli-ok: #18794e;--ui-pli-blue: #2f6bff;--ui-pli-blue-bg: rgba(47, 107, 255, 0.1);--ui-pli-violet: #6941c6;--ui-pli-violet-bg: rgba(105, 65, 198, 0.1);--ui-pli-amber: #96590a;--ui-pli-amber-bg: rgba(240, 160, 32, 0.14);--ui-pli-green: #18794e;--ui-pli-green-bg: rgba(34, 160, 90, 0.11);--ui-pli-red: #b42318;--ui-pli-red-bg: rgba(229, 72, 77, 0.1);--ui-pli-gray: #5f5f66;--ui-pli-gray-bg: #f0f0f2;--ui-pli-focus: rgba(23, 23, 23, 0.22);--ui-pli-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-pli-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-pli-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pli *, .ui-pli *::before, .ui-pli *::after{box-sizing: border-box}:where(.ui-pli) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-pli) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-pli button:focus-visible, .ui-pli__option:focus-visible{outline: 2px solid var(--ui-pli-focus);outline-offset: 2px}.ui-pli svg{display: block;flex: none}.ui-pli b{font-weight: 500;color: var(--ui-pli-ink)}.ui-pli p{margin: 0}.ui-pli__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-pli__card{display: grid;grid-template-columns: 220px minmax(0, 1fr);border-radius: 16px;background: var(--ui-pli-card);box-shadow: 0 0 0 1px var(--ui-pli-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pli__side{min-width: 0;padding: 12px 8px 8px;border-right: 1px solid var(--ui-pli-line)}.ui-pli__side-head{display: flex;align-items: center;gap: 6px;height: 22px;padding: 0 6px}.ui-pli__title{overflow: hidden;font-size: 13px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;text-overflow: ellipsis}.ui-pli__total{font-size: 12px;color: var(--ui-pli-muted);font-variant-numeric: tabular-nums}.ui-pli__search{display: flex;align-items: center;gap: 7px;height: 30px;margin-top: 8px;padding: 0 9px;border-radius: 8px;background: var(--ui-pli-well);color: var(--ui-pli-muted);cursor: text;transition: box-shadow 160ms ease}.ui-pli__search:focus-within{box-shadow: 0 0 0 1px var(--ui-pli-line), 0 0 0 3px var(--ui-pli-focus)}.ui-pli__search input{flex: 1;min-width: 0;height: 100%;font-size: 12.5px;color: var(--ui-pli-ink);-webkit-appearance: none;appearance: none}.ui-pli__search input::placeholder{color: var(--ui-pli-muted)}.ui-pli__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-pli__list{position: relative;display: flex;flex-direction: column;gap: 2px;margin-top: 6px}.ui-pli__glide{position: absolute;top: 0;left: 0;right: 0;border-radius: 9px;background: var(--ui-pli-well);opacity: 0;pointer-events: none;transition: opacity 180ms ease}.ui-pli__glide[data-on]{opacity: 1}.ui-pli__glide[data-moved]{transition: transform 340ms var(--ui-pli-ease), height 340ms var(--ui-pli-ease), opacity 180ms ease}.ui-pli__option{position: relative;display: flex;align-items: center;gap: 8px;height: 34px;padding: 0 6px 0 8px;border-radius: 9px;color: var(--ui-pli-text);cursor: pointer;user-select: none;transition: color 160ms ease;-webkit-tap-highlight-color: transparent}.ui-pli__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 160ms ease}.ui-pli__list{isolation: isolate}.ui-pli__glide{z-index: -1}.ui-pli__option:hover:not([aria-selected="true"])::before{background: color-mix(in srgb, var(--ui-pli-well) 55%, transparent)}.ui-pli__option[aria-selected="true"]{color: var(--ui-pli-ink)}.ui-pli__option-title{text-align: start;flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pli__empty{height: 34px;padding: 0 8px;font-size: 12.5px;line-height: 34px;color: var(--ui-pli-muted)}.ui-pli__tag{flex: 0 1 auto;min-width: 0;max-width: 50%;overflow: hidden;text-overflow: ellipsis;height: 18px;padding: 0 5px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-pli-gray);background: var(--ui-pli-gray-bg)}.ui-pli__tag[data-tone="blue"]{color: var(--ui-pli-blue);background: var(--ui-pli-blue-bg)}.ui-pli__tag[data-tone="violet"]{color: var(--ui-pli-violet);background: var(--ui-pli-violet-bg)}.ui-pli__tag[data-tone="amber"]{color: var(--ui-pli-amber);background: var(--ui-pli-amber-bg)}.ui-pli__tag[data-tone="green"]{color: var(--ui-pli-green);background: var(--ui-pli-green-bg)}.ui-pli__tag[data-tone="red"]{color: var(--ui-pli-red);background: var(--ui-pli-red-bg)}.ui-pli__main{display: grid;min-width: 0}.ui-pli__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 14px 14px;animation: ui-pli-in 360ms ease both}.ui-pli__panel[data-out]{animation: ui-pli-out 240ms ease both;pointer-events: none}.ui-pli__panel-head{display: flex;flex-wrap: wrap;row-gap: 4px;align-items: center;gap: 8px;min-height: 22px}.ui-pli__panel-title{flex: 1 1 auto;min-width: 0;text-align: start;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-pli-ink);white-space: nowrap;text-overflow: ellipsis}.ui-pli__count{display: inline-flex;flex: none;align-items: center;gap: 7px;margin-left: auto;font-size: 12px;color: var(--ui-pli-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pli__bars{display: inline-flex;gap: 2px}.ui-pli__bar{width: 8px;height: 4px;border-radius: 2px;background: var(--ui-pli-line);transition: background-color 300ms ease}.ui-pli__bar[data-on]{background: var(--ui-pli-accent)}.ui-pli__body{margin-top: 10px !important;white-space: pre-line;text-align: start;font-size: 13px;line-height: 26px;color: var(--ui-pli-text);overflow-wrap: anywhere}.ui-pli__glue{white-space: nowrap}.ui-pli__preview .ui-pli__glue{white-space: inherit}.ui-pli__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 2px 0;padding: 0 6px;border-radius: 6px;background: var(--ui-pli-well);box-shadow: inset 0 0 0 1px var(--ui-pli-line);line-height: 22px;color: var(--ui-pli-muted);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-pli__token:hover{box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-pli-muted) 45%, transparent)}.ui-pli__token[data-filled]{background: var(--ui-pli-accent-bg);box-shadow: none;color: var(--ui-pli-accent-ink)}.ui-pli__token:focus-within{box-shadow: inset 0 0 0 1px var(--ui-pli-accent), 0 0 0 3px var(--ui-pli-accent-bg)}.ui-pli__token[data-flash="a"]{animation: ui-pli-flash-a 900ms ease-out}.ui-pli__token[data-flash="b"]{animation: ui-pli-flash-b 900ms ease-out}.ui-pli__sizer, .ui-pli__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-pli__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-pli__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis}.ui-pli__input::placeholder{color: var(--ui-pli-muted);font-weight: 400;opacity: 1}.ui-pli__label{margin-top: 12px;font-size: 12px;color: var(--ui-pli-muted)}.ui-pli__preview{max-height: 168px;overflow-y: auto;overscroll-behavior: contain;text-align: start;margin-top: 4px;padding: 9px 11px;border-radius: 10px;background: var(--ui-pli-well);font-size: 12.5px;line-height: 20px;color: var(--ui-pli-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-pli__fill{border-radius: 4px;color: var(--ui-pli-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-pli__fill[data-flash="a"]{animation: ui-pli-mark-a 1100ms ease-out}.ui-pli__fill[data-flash="b"]{animation: ui-pli-mark-b 1100ms ease-out}.ui-pli__hole{color: var(--ui-pli-hole)}.ui-pli__foot{display: flex;align-items: center;gap: 4px;min-height: 40px;padding: 4px 2px 0 10px}.ui-pli__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-pli-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pli__swap{display: grid;min-width: 0}.ui-pli__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-pli-swap-in 320ms ease both}.ui-pli__swap-item[data-out]{animation: ui-pli-swap-out 220ms ease both}.ui-pli__swap-item[data-tone="ok"]{color: var(--ui-pli-ok)}.ui-pli__copy{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-pli__copy:hover:not(:disabled){background: var(--ui-pli-card);color: var(--ui-pli-ink)}.ui-pli__copy-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-pli-swap-in 300ms ease both}.ui-pli__use{position: relative;display: inline-flex;flex: 0 1 auto;min-width: 0;max-width: 60%;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 11px;border-radius: 10px;background: var(--ui-pli-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-pli-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease}.ui-pli__use svg{transition: transform 220ms var(--ui-pli-ease)}.ui-pli__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-pli__use[aria-disabled="true"]{background: color-mix(in srgb, var(--ui-pli-ink) 10%, transparent);color: var(--ui-pli-muted);cursor: default}.ui-pli__use[data-pulse="a"]{animation: ui-pli-pulse-a 1400ms ease-out}.ui-pli__use[data-pulse="b"]{animation: ui-pli-pulse-b 1400ms ease-out}.ui-pli__use-label{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-pli__list[data-scroll]{max-height: 400px;overflow-y: auto;overscroll-behavior: contain;padding: 3px;margin: 3px -3px -3px}.ui-pli__list[data-scroll] .ui-pli__glide{left: 3px;right: 3px}@keyframes ui-pli-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-pli-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-flash-a{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-flash-b{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-mark-a{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-mark-b{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-pulse-a{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@keyframes ui-pli-pulse-b{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@container (max-width: 540px){.ui-pli__card{grid-template-columns: minmax(0, 1fr)}.ui-pli__side{border-right: 0;border-bottom: 1px solid var(--ui-pli-line)}}@container (max-width: 360px){.ui-pli__copy{width: 28px;padding: 0;justify-content: center}.ui-pli__copy-text{display: none}.ui-pli__count .ui-pli__bars{display: none}}@media (pointer: coarse){.ui-pli__option{height: 40px}.ui-pli__search{height: 36px}.ui-pli__copy, .ui-pli__use{height: 34px}.ui-pli__body{line-height: 30px}.ui-pli__token, .ui-pli__input, .ui-pli__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-pli *, .ui-pli *::before, .ui-pli *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pli{--ui-pli-tray: #111113;--ui-pli-card: #19191b;--ui-pli-line: #2a2a2e;--ui-pli-ink: #ededed;--ui-pli-text: #c8c8cc;--ui-pli-muted: #8b8b92;--ui-pli-well: #222225;--ui-pli-accent: #4f82ff;--ui-pli-accent-ink: #9dbbff;--ui-pli-accent-bg: rgba(79, 130, 255, 0.16);--ui-pli-accent-flash: rgba(79, 130, 255, 0.36);--ui-pli-hole: #5c5c63;--ui-pli-on-ink: #111113;--ui-pli-ok: #6ee7a8;--ui-pli-blue: #8fb1ff;--ui-pli-blue-bg: rgba(79, 130, 255, 0.16);--ui-pli-violet: #b9a2f5;--ui-pli-violet-bg: rgba(150, 110, 240, 0.16);--ui-pli-amber: #f5c264;--ui-pli-amber-bg: rgba(240, 160, 32, 0.15);--ui-pli-green: #6ee7a8;--ui-pli-green-bg: rgba(34, 160, 90, 0.16);--ui-pli-red: #ff9b93;--ui-pli-red-bg: rgba(229, 72, 77, 0.16);--ui-pli-gray: #b4b4ba;--ui-pli-gray-bg: #26262a;--ui-pli-focus: rgba(255, 255, 255, 0.3)}`,
  v = [
    {
      id: `meeting`,
      title: `Summarize a meeting`,
      category: `Notes`,
      body: `Summarize the meeting below for {audience} in under {length}. Lead with the decisions, then list open questions about {topic}.`,
      variables: {
        audience: { description: `Who reads the summary` },
        length: { description: `How long it may be`, default: `150 words` },
        topic: { description: `What the open questions are about` },
      },
    },
    {
      id: `release`,
      title: `Write release notes`,
      category: `Product`,
      body: `Write release notes for {product} {version} for {audience}. Keep the tone {tone} and group the changes into New, Improved and Fixed.`,
      variables: {
        product: { description: `Name of the product` },
        version: { description: `Version number, e.g. 2.4` },
        audience: { description: `Who reads the notes` },
        tone: { description: `How it should sound`, default: `friendly` },
      },
    },
    {
      id: `error`,
      title: `Explain an error`,
      category: `Debug`,
      body: `Explain this {language} error in plain words: {error}. Say what most likely caused it and suggest a fix that works with {framework}.`,
      variables: {
        language: { description: `Programming language` },
        error: { description: `The error message` },
        framework: { description: `Framework or runtime in use` },
      },
    },
    {
      id: `email`,
      title: `Draft a cold email`,
      category: `Sales`,
      body: `Draft a short cold email to {name}, {role} at {company}. Open with {hook} and ask for a 15-minute call. No more than {length}.`,
      variables: {
        name: { description: `First name of the person` },
        role: { description: `Their job title` },
        company: { description: `Where they work` },
        hook: { description: `Something specific about them` },
        length: { description: `How long it may be`, default: `120 words` },
      },
    },
  ],
  y = [
    {
      id: `release`,
      type: [
        [`product`, `Relay`],
        [`version`, `2.4`],
        [`audience`, `existing customers`],
      ],
    },
    {
      id: `error`,
      type: [
        [`language`, `TypeScript`],
        [`error`, `Cannot read properties of undefined`],
        [`framework`, `Next.js`],
      ],
    },
    {
      id: `meeting`,
      type: [
        [`audience`, `the design team`],
        [`topic`, `the onboarding flow`],
      ],
    },
  ];
function b(e, t) {
  (Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`)?.set?.call(e, t),
    e.dispatchEvent(new Event(`input`, { bubbles: !0 })));
}
function se() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(0),
    [a, o] = (0, n.useState)(`meeting`),
    s = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    let n = y[t % y.length],
      r = [[t === 0 ? 700 : 900, () => o(n.id)]];
    (n.type.forEach(([n, i], a) => {
      for (let o = 1; o <= i.length; o++) {
        let s = o === 1 ? (a === 0 && t === 0 ? 2500 : 520) : 55 + ((o * 37) % 40);
        r.push([
          s,
          () => {
            let t = e.current?.querySelector(
              `.ui-pli__panel:not([data-out]) .ui-pli__input[data-var="${n}"]`,
            );
            t && b(t, i.slice(0, o));
          },
        ]);
      }
    }),
      r.push([3600, () => i((e) => e + 1)]));
    let a = 0,
      c = 0,
      l = () => {
        s.current ||
          a >= r.length ||
          (c = window.setTimeout(() => {
            s.current || (r[a][1](), a++, l());
          }, r[a][0]));
      };
    return (l(), () => window.clearTimeout(c));
  }, [t]);
  let c = () => (s.current = !0);
  return (0, r.jsx)(`div`, {
    ref: e,
    className: `pli-demo`,
    onPointerEnter: c,
    onPointerDownCapture: c,
    onKeyDownCapture: c,
    onFocusCapture: c,
    children: (0, r.jsx)(_, { templates: v, value: a, onSelect: o, onUse: () => {} }, t),
  });
}
