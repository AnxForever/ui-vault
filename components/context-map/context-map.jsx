/*
 * affectUI · context-map (Pro)
 * Implementation recovered from public bundle asset: demo-B9Q3KRp_.js
 * Styles inlined in the module -> context-map.css (1 block(s))
 * Demo usage: context-map.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) => {
    let t = e.parentElement;
    for (; t && t !== document.body && getComputedStyle(t).overflow === `visible`;) t = t.parentElement;
    return t && t !== document.body
      ? t.getBoundingClientRect()
      : { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
  },
  a = { kept: `· kept`, summarized: `· summarized`, dropped: `· dropped` },
  o = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `m2.5 6.3 2.3 2.2 4.7-5`,
        stroke: `currentColor`,
        strokeWidth: `1.3`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
  s = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `m3.2 3.2 5.6 5.6M8.8 3.2 3.2 8.8`,
        stroke: `currentColor`,
        strokeWidth: `1.3`,
        strokeLinecap: `round`,
      }),
    }),
  c = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M6 1.5v3.2M4.4 3.3 6 4.9l1.6-1.6M6 10.5V7.3M4.4 8.7 6 7.1l1.6 1.6M2 6h8`,
        stroke: `currentColor`,
        strokeWidth: `1.2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
  l = { kept: o, summarized: c, dropped: s },
  u = {
    system: `System prompt`,
    tools: `Tools`,
    memory: `Memory`,
    file: `File`,
    chat: `Chat`,
    result: `Tool result`,
    summary: `Summary`,
  },
  d = `__free`,
  f = (e) => {
    let t = Number.isFinite(e) ? Math.max(0, e) : 0;
    return t >= 999500
      ? `${(t / 1e6).toFixed(t >= 995e4 ? 0 : 1).replace(/\.0$/, ``)}M`
      : t >= 1e5
        ? `${Math.round(t / 1e3)}k`
        : t >= 1e3
          ? `${(t / 1e3).toFixed(1).replace(/\.0$/, ``)}k`
          : String(Math.round(t));
  },
  p = (e) => typeof e == `number` && Number.isFinite(e) && e > 0,
  ee = (e) => {
    let t = new Map();
    return (Array.isArray(e) ? e : []).filter(Boolean).map((e) => {
      let n = String(e.id),
        r = (t.get(n) ?? 0) + 1;
      t.set(n, r);
      let i = e.kind in u ? e.kind : `file`;
      return {
        ...e,
        id: r > 1 ? `${n}#${r}` : n,
        kind: i,
        label: String(e.label ?? ``).trim() || u[i],
        tokens: Number.isFinite(e.tokens) ? Math.max(0, e.tokens) : 0,
      };
    });
  },
  m = (e) => (e.currentTarget.style.display = `none`),
  h = 12,
  g = (e, t, n) => {
    if (!e.length) return;
    if (e.length === 1) {
      n.set(e[0].id, t);
      return;
    }
    let r = e.reduce((e, t) => e + t.value, 0) || 1,
      i = 0,
      a = 1;
    for (let t = 0; t < e.length - 1 && ((i += e[t].value), (a = t + 1), !(i >= r / 2)); t++);
    let o = e.slice(0, a).reduce((e, t) => e + t.value, 0) / r;
    if (t.w >= t.h) {
      let r = t.w * o;
      (g(e.slice(0, a), { x: t.x, y: t.y, w: r, h: t.h }, n),
        g(e.slice(a), { x: t.x + r, y: t.y, w: t.w - r, h: t.h }, n));
    } else {
      let r = t.h * o;
      (g(e.slice(0, a), { x: t.x, y: t.y, w: t.w, h: r }, n),
        g(e.slice(a), { x: t.x, y: t.y + r, w: t.w, h: t.h - r }, n));
    }
  },
  te = () =>
    (0, r.jsx)(`svg`, {
      className: `ui-cm__spin`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: Array.from({ length: 8 }, (e, t) =>
        (0, r.jsx)(
          `line`,
          {
            x1: `8`,
            y1: `1.75`,
            x2: `8`,
            y2: `4.75`,
            stroke: `currentColor`,
            strokeWidth: `1.6`,
            strokeLinecap: `round`,
            opacity: 1 - t * 0.11,
            transform: `rotate(${-t * 45} 8 8)`,
          },
          t,
        ),
      ),
    }),
  ne = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, {
          x: `1.8`,
          y: `1.8`,
          width: `7`,
          height: `12.4`,
          rx: `1.6`,
          fill: `currentColor`,
        }),
        (0, r.jsx)(`rect`, {
          x: `10`,
          y: `1.8`,
          width: `4.2`,
          height: `6`,
          rx: `1.4`,
          fill: `currentColor`,
          opacity: `0.6`,
        }),
        (0, r.jsx)(`rect`, {
          x: `10`,
          y: `9`,
          width: `4.2`,
          height: `5.2`,
          rx: `1.4`,
          fill: `currentColor`,
          opacity: `0.3`,
        }),
      ],
    });
function re({
  blocks: e,
  limit: t,
  model: o,
  modelIcon: s,
  agents: re,
  agent: oe,
  onAgentChange: se,
  compaction: v,
  view: ce,
  onViewChange: y,
  status: b,
  onSelect: x,
  title: S = `Context`,
  className: le,
}) {
  let C = (0, n.useId)(),
    w = re?.filter((e, t, n) => e && n.findIndex((t) => t?.id === e.id) === t),
    T = w?.find((e) => e.id === oe) ?? w?.[0],
    E = ee(e),
    D = ee(v?.before),
    [O, k] = (0, n.useState)(!1),
    A = (0, n.useRef)(null),
    j = (0, n.useRef)(null);
  ((0, n.useLayoutEffect)(() => {
    let e = j.current;
    if (!O || !e) return;
    e.style.left = `0px`;
    let t = e.parentElement.getBoundingClientRect().left + e.offsetWidth - (i(e).right - 8);
    t > 0 && (e.style.left = `${-t}px`);
  }, [O]),
    (0, n.useEffect)(() => {
      if (!O) return;
      let e = (e) => !A.current?.contains(e.target) && k(!1),
        t = (e) => e.key === `Escape` && k(!1);
      return (
        document.addEventListener(`pointerdown`, e),
        document.addEventListener(`keydown`, t),
        () => {
          (document.removeEventListener(`pointerdown`, e), document.removeEventListener(`keydown`, t));
        }
      );
    }, [O]));
  let M = (0, n.useRef)(null),
    [N, ue] = (0, n.useState)({ w: 0, h: 0 }),
    [P, F] = (0, n.useState)(null),
    [I, L] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    if (!I) return;
    let e = (e) => e.key === `Escape` && L(null);
    return (document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e));
  }, [I]);
  let [de, R] = (0, n.useState)(`after`),
    z = v ? (ce ?? de) : `after`,
    fe = (e) => {
      (R(e), y?.(e));
    };
  (0, n.useEffect)(() => R(`after`), [v]);
  let B = (e) => (v?.summarized?.includes(e) ? `summarized` : v?.dropped?.includes(e) ? `dropped` : `kept`),
    V = z === `before` && v ? D : E,
    pe = (0, n.useRef)(null);
  (0, n.useLayoutEffect)(() => {
    let e = M.current;
    if (!e) return;
    let t = new ResizeObserver(() => ue({ w: e.clientWidth, h: e.clientHeight }));
    return (t.observe(e), () => t.disconnect());
  }, []);
  let H = V.reduce((e, t) => e + t.tokens, 0),
    U = T?.limit ?? t,
    W = p(U) ? U : Math.max(1, H),
    me = Math.max(0, W - H),
    G = H / W,
    he = G >= 0.95 ? `full` : G >= 0.8 ? `high` : void 0,
    K = (0, n.useRef)(new Map());
  for (let e of V) K.current.set(e.id, e);
  let q = (0, n.useRef)([]),
    ge = V.filter((e) => e.tokens > 0).map((e) => e.id);
  {
    let e = [...q.current];
    (ge.forEach((t, n) => {
      if (e.includes(t)) return;
      let r = ge
        .slice(0, n)
        .reverse()
        .find((t) => e.includes(t));
      e.splice(r ? e.indexOf(r) + 1 : 0, 0, t);
    }),
      (q.current = e));
  }
  let J = new Map([
      ...q.current.map((e) => [e, Math.max(0, V.find((t) => t.id === e)?.tokens ?? 0)]),
      [d, me],
    ]),
    Y = (0, n.useRef)(new Map()),
    [, _e] = (0, n.useState)(0),
    X = (0, n.useRef)(0);
  (0, n.useEffect)(() => {
    let e = 0,
      t = (n) => {
        let r = X.current ? Math.min(64, Math.max(0, n - X.current)) : 16;
        X.current = n;
        let i = 1 - Math.exp(-r / 110),
          a = !1,
          o = !1;
        for (let [e, t] of J) {
          let n = Y.current.get(e) ?? 0,
            r = Math.abs(t - n) < 1 ? t : n + (t - n) * i;
          (r !== t && (a = !0), r !== n && (o = !0), Y.current.set(e, r));
        }
        for (let e of [...Y.current.keys()])
          J.has(e)
            ? e !== d &&
              (J.get(e) ?? 0) === 0 &&
              (Y.current.get(e) ?? 0) === 0 &&
              q.current.includes(e) &&
              ((q.current = q.current.filter((t) => t !== e)), (o = !0))
            : (Y.current.delete(e), (o = !0));
        (o && _e((e) => e + 1), a ? (e = requestAnimationFrame(t)) : (X.current = 0));
      };
    return ((e = requestAnimationFrame(t)), () => cancelAnimationFrame(e));
  });
  let ve = [...q.current, d]
      .map((e) => ({ id: e, value: Y.current.get(e) ?? 0 }))
      .filter((e) => e.value > 0.5),
    Z = new Map();
  (N.w && N.h && g(ve, { x: 3, y: 3, w: N.w - 6, h: N.h - 6 }, Z), I && !q.current.includes(I) && L(null));
  let Q = P && P !== d ? P : I,
    $ = Q ? (K.current.get(Q) ?? null) : null;
  return (
    (0, n.useLayoutEffect)(() => {
      let e = pe.current,
        t = M.current,
        n = Q ? Z.get(Q) : void 0;
      if (!e || !t || !n) return;
      let r = e.offsetWidth,
        a = e.offsetHeight,
        o = t.getBoundingClientRect(),
        s = i(t),
        c = {
          l: s.left - o.left + 8,
          t: s.top - o.top + 8,
          r: s.right - o.left - 8,
          b: s.bottom - o.top - 8,
        },
        l = Math.max(c.l, Math.min(n.x + n.w / 2 - r / 2, c.r - r)),
        u = n.y - a - 8,
        d = n.y + n.h + 8,
        f = u >= c.t ? u : d + a <= c.b ? d : Math.max(c.t, Math.min(n.y + 8, c.b - a));
      ((e.style.left = `${l}px`), (e.style.top = `${f}px`));
    }),
    (0, r.jsxs)(`div`, {
      className: [`ui-cm`, le].filter(Boolean).join(` `),
      children: [
        (0, r.jsx)(`style`, { href: `ui-context-map`, precedence: `default`, children: ae }),
        (0, r.jsxs)(`header`, {
          className: `ui-cm__bar`,
          children: [
            (0, r.jsx)(`span`, { className: `ui-cm__mark`, children: (0, r.jsx)(ne, {}) }),
            (0, r.jsx)(`span`, { className: `ui-cm__title`, id: C, title: S, children: S }),
            T
              ? (0, r.jsxs)(`span`, {
                  className: `ui-cm__pick`,
                  ref: A,
                  children: [
                    (0, r.jsxs)(`button`, {
                      type: `button`,
                      className: `ui-cm__who ui-cm__agent`,
                      "aria-haspopup": `menu`,
                      "aria-expanded": O,
                      title: T.name,
                      onClick: () => k((e) => !e),
                      children: [
                        T.icon &&
                          (0, r.jsx)(`span`, {
                            className: `ui-cm__logo`,
                            "aria-hidden": `true`,
                            onErrorCapture: m,
                            children: T.icon,
                          }),
                        (0, r.jsx)(`span`, { className: `ui-cm__model`, children: T.name }),
                        p(T.limit) && (0, r.jsx)(`span`, { className: `ui-cm__limit`, children: f(W) }),
                        (0, r.jsx)(`svg`, {
                          className: `ui-cm__chev`,
                          viewBox: `0 0 12 12`,
                          fill: `none`,
                          "aria-hidden": `true`,
                          children: (0, r.jsx)(`path`, {
                            d: `m3.5 4.75 2.5 2.5 2.5-2.5`,
                            stroke: `currentColor`,
                            strokeWidth: `1.4`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                          }),
                        }),
                      ],
                    }),
                    O &&
                      (0, r.jsx)(`span`, {
                        ref: j,
                        className: `ui-cm__menu`,
                        role: `menu`,
                        children: w.map((e) =>
                          (0, r.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              role: `menuitemradio`,
                              "aria-checked": e.id === T.id,
                              className: `ui-cm__option`,
                              onClick: () => {
                                (k(!1), e.id !== T.id && se?.(e.id));
                              },
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-cm__logo`,
                                  "aria-hidden": `true`,
                                  onErrorCapture: m,
                                  children: e.icon,
                                }),
                                (0, r.jsxs)(`span`, {
                                  className: `ui-cm__option-text`,
                                  title: [e.name, e.model].filter(Boolean).join(` · `),
                                  children: [
                                    (0, r.jsx)(`span`, { className: `ui-cm__option-name`, children: e.name }),
                                    e.model &&
                                      (0, r.jsx)(`span`, {
                                        className: `ui-cm__option-model`,
                                        children: e.model,
                                      }),
                                  ],
                                }),
                                p(e.limit) &&
                                  (0, r.jsx)(`span`, { className: `ui-cm__limit`, children: f(e.limit) }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                  ],
                })
              : (o || s) &&
                (0, r.jsxs)(`span`, {
                  className: `ui-cm__who`,
                  title: o,
                  children: [
                    s &&
                      (0, r.jsx)(`span`, {
                        className: `ui-cm__logo`,
                        "aria-hidden": `true`,
                        onErrorCapture: m,
                        children: s,
                      }),
                    o && (0, r.jsx)(`span`, { className: `ui-cm__model`, children: o }),
                    p(U) && (0, r.jsx)(`span`, { className: `ui-cm__limit`, children: f(W) }),
                  ],
                }),
            b &&
              (0, r.jsxs)(
                `span`,
                {
                  className: `ui-cm__status`,
                  title: b,
                  children: [
                    (0, r.jsx)(te, {}),
                    (0, r.jsx)(`span`, { className: `ui-cm__status-text`, children: b }),
                  ],
                },
                b,
              ),
            (0, r.jsxs)(`span`, {
              className: `ui-cm__sum`,
              children: [
                v &&
                  (0, r.jsx)(`span`, {
                    className: `ui-cm__compare`,
                    role: `group`,
                    "aria-label": `Compaction`,
                    children: [`before`, `after`].map((e) =>
                      (0, r.jsx)(
                        `button`,
                        {
                          type: `button`,
                          "aria-pressed": z === e,
                          onClick: () => fe(e),
                          children: e === `before` ? `Before` : `After`,
                        },
                        e,
                      ),
                    ),
                  }),
                (0, r.jsxs)(`span`, {
                  children: [(0, r.jsx)(`b`, { className: `ui-cm__used`, children: f(H) }), ` / `, f(W)],
                }),
                (0, r.jsxs)(`span`, {
                  className: `ui-cm__pct`,
                  "data-level": he,
                  children: [Math.round(G * 100), `%`],
                }),
              ],
            }),
          ],
        }),
        (0, r.jsxs)(`div`, {
          ref: M,
          className: `ui-cm__area`,
          role: `list`,
          "aria-labelledby": C,
          onMouseLeave: () => F(null),
          children: [
            ve.map((e) => {
              let t = Z.get(e.id);
              if (!t) return null;
              let n = K.current.get(e.id),
                i = e.id === d,
                o = t.w >= 54 && t.h >= 28,
                s = o && t.h >= 44,
                l = s && t.w >= 120;
              return (0, r.jsxs)(
                `div`,
                {
                  role: `listitem`,
                  className: `ui-cm__tile`,
                  "data-kind": i ? `free` : n?.kind,
                  "data-fate":
                    i || !v
                      ? void 0
                      : z === `before`
                        ? D.some((t) => t.id === e.id)
                          ? B(e.id)
                          : void 0
                        : e.id === v.summary
                          ? `summary`
                          : void 0,
                  "data-dim": P && P !== e.id ? `` : void 0,
                  style: { "--x": `${t.x}px`, "--y": `${t.y}px`, "--w": `${t.w}px`, "--h": `${t.h}px` },
                  "aria-label": i
                    ? `Free – ${f(e.value)} tokens`
                    : `${n?.label}, ${u[n.kind]} – ${f(e.value)} tokens`,
                  onMouseEnter: () => F(e.id),
                  "data-pinned": I === e.id ? `` : void 0,
                  onClick: () => {
                    if (i) return x?.(null);
                    (L((t) => (t === e.id ? null : e.id)), x?.(n ?? null));
                  },
                  children: [
                    z === `before` &&
                      D.some((t) => t.id === e.id) &&
                      B(e.id) === `summarized` &&
                      t.w >= 40 &&
                      t.h >= 28 &&
                      (0, r.jsx)(`span`, {
                        className: `ui-cm__badge`,
                        title: `Summarized – click for more`,
                        "aria-hidden": `true`,
                        children: (0, r.jsx)(c, {}),
                      }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-cm__label`,
                      "aria-hidden": `true`,
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-cm__name`,
                          "data-show": o ? `` : void 0,
                          children: [
                            n?.icon &&
                              !i &&
                              (0, r.jsx)(`span`, {
                                className: `ui-cm__icon`,
                                onErrorCapture: m,
                                children: n.icon,
                              }),
                            i ? `Free` : n?.label,
                          ],
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-cm__tokens`,
                          "data-show": s ? `` : void 0,
                          children: [
                            f(J.get(e.id) || e.value),
                            !i &&
                              n &&
                              (0, r.jsxs)(`span`, {
                                className: `ui-cm__kind`,
                                "data-show": l ? `` : void 0,
                                children: [
                                  ` `,
                                  z === `before` && D.some((t) => t.id === e.id)
                                    ? (0, r.jsx)(_, {
                                        k: B(e.id),
                                        children: (0, r.jsx)(`span`, {
                                          "data-fate": B(e.id),
                                          children: a[B(e.id)],
                                        }),
                                      })
                                    : (0, r.jsxs)(_, { k: `kind`, children: [`· `, u[n.kind]] }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
            $ &&
              (0, r.jsxs)(
                `div`,
                {
                  ref: pe,
                  className: `ui-cm__tip`,
                  role: `tooltip`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-cm__tip-head`,
                      children: [
                        $.icon
                          ? (0, r.jsx)(`span`, {
                              className: `ui-cm__logo`,
                              "aria-hidden": `true`,
                              onErrorCapture: m,
                              children: $.icon,
                            })
                          : (0, r.jsx)(`span`, {
                              className: `ui-cm__swatch`,
                              "data-kind": $.kind,
                              "aria-hidden": `true`,
                            }),
                        (0, r.jsx)(`span`, { className: `ui-cm__tip-name`, children: $.label }),
                      ],
                    }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-cm__tip-meta`,
                      children: [
                        u[$.kind],
                        ` · `,
                        f($.tokens),
                        ` tokens · `,
                        (Math.round(($.tokens / W) * 1e3) / 10).toLocaleString(`en-US`),
                        `%`,
                      ],
                    }),
                    $.detail && (0, r.jsx)(`span`, { className: `ui-cm__tip-detail`, children: $.detail }),
                    v &&
                      z === `before` &&
                      D.some((e) => e.id === $.id) &&
                      (0, r.jsxs)(`span`, {
                        className: `ui-cm__tip-fate`,
                        "data-fate": B($.id),
                        children: [
                          (() => {
                            let e = l[B($.id)];
                            return (0, r.jsx)(e, {});
                          })(),
                          B($.id) === `summarized`
                            ? `Folded into the summary`
                            : B($.id) === `dropped`
                              ? `Dropped when it compacted`
                              : `Kept as it was`,
                        ],
                      }),
                    v &&
                      z === `after` &&
                      $.id === v.summary &&
                      (0, r.jsxs)(`span`, {
                        className: `ui-cm__tip-fate`,
                        "data-fate": `summary`,
                        children: [
                          (0, r.jsx)(c, {}),
                          (() => {
                            let e = D.filter((e) => v.summarized?.includes(e.id));
                            return `From ${e.length.toLocaleString(`en-US`)} ${e.length === 1 ? `block` : `blocks`}, ${f(e.reduce((e, t) => e + t.tokens, 0))} before`;
                          })(),
                        ],
                      }),
                    Array.isArray($.items) &&
                      $.items.length > 0 &&
                      (0, r.jsxs)(`ul`, {
                        className: `ui-cm__tip-items`,
                        children: [
                          $.items
                            .slice(0, $.items.length > h ? 11 : h)
                            .map((e, t) =>
                              (0, r.jsxs)(
                                `li`,
                                {
                                  children: [
                                    e?.icon &&
                                      (0, r.jsx)(`span`, {
                                        className: `ui-cm__logo`,
                                        "aria-hidden": `true`,
                                        onErrorCapture: m,
                                        children: e.icon,
                                      }),
                                    (0, r.jsx)(`span`, { className: `ui-cm__tip-item`, children: e?.label }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          $.items.length > h &&
                            (0, r.jsxs)(`li`, {
                              className: `ui-cm__tip-more`,
                              children: [`+`, ($.items.length - h + 1).toLocaleString(`en-US`), ` more`],
                            }),
                        ],
                      }),
                  ],
                },
                $.id,
              ),
          ],
        }),
        v !== void 0 && (0, r.jsx)(ie, { compaction: v && { ...v, before: D }, after: E }),
      ],
    })
  );
}
function _({ k: e, children: t }) {
  let i = (0, n.useRef)({ k: e, node: t }),
    [a, o] = (0, n.useState)(null);
  if (i.current.k !== e) {
    let n = i.current;
    ((i.current = { k: e, node: t }), o(n));
  } else i.current.node = t;
  return (
    (0, n.useEffect)(() => {
      if (!a) return;
      let e = window.setTimeout(() => o(null), 360);
      return () => clearTimeout(e);
    }, [a]),
    (0, r.jsxs)(`span`, {
      className: `ui-cm__roll`,
      children: [
        a &&
          (0, r.jsx)(
            `span`,
            { className: `ui-cm__roll-out`, "aria-hidden": `true`, children: a.node },
            `out-${a.k}`,
          ),
        (0, r.jsx)(`span`, { className: `ui-cm__roll-in`, "data-rolling": a ? `` : void 0, children: t }, e),
      ],
    })
  );
}
function ie({ compaction: e, after: t }) {
  if (!e)
    return (0, r.jsx)(`div`, {
      className: `ui-cm__fates-row`,
      children: (0, r.jsx)(_, {
        k: `none`,
        children: (0, r.jsx)(`p`, {
          className: `ui-cm__fates ui-cm__fates--none`,
          children: `Not compacted yet – once it is, compare before and after here.`,
        }),
      }),
    });
  let n = (e) => e.reduce((e, t) => e + Math.max(0, t.tokens), 0),
    i = (t) =>
      e.before.filter(
        (n) =>
          (e.summarized?.includes(n.id) ? `summarized` : e.dropped?.includes(n.id) ? `dropped` : `kept`) ===
          t,
      ),
    a = i(`kept`),
    o = i(`summarized`),
    s = i(`dropped`),
    c = t.find((t) => t.id === e.summary);
  return (0, r.jsx)(`div`, {
    className: `ui-cm__fates-row`,
    children: (0, r.jsx)(_, {
      k: `done`,
      children: (0, r.jsxs)(`p`, {
        className: `ui-cm__fates`,
        children: [
          (0, r.jsxs)(`b`, { children: [f(n(e.before)), ` → `, f(n(t))] }),
          (0, r.jsxs)(`span`, {
            className: `ui-cm__fate`,
            "data-fate": `kept`,
            children: [a.length, ` kept · `, f(n(a))],
          }),
          o.length > 0 &&
            (0, r.jsxs)(`span`, {
              className: `ui-cm__fate`,
              "data-fate": `summarized`,
              children: [
                o.length,
                ` summarized · `,
                f(n(o)),
                c && (0, r.jsxs)(r.Fragment, { children: [` into `, f(c.tokens)] }),
              ],
            }),
          s.length > 0 &&
            (0, r.jsxs)(`span`, {
              className: `ui-cm__fate`,
              "data-fate": `dropped`,
              children: [s.length, ` dropped · `, f(n(s))],
            }),
        ],
      }),
    }),
  });
}
var ae = `.ui-cm{--ui-cm-tray: #f0f0f0;--ui-cm-panel: #ffffff;--ui-cm-card: #ffffff;--ui-cm-strong: #171717;--ui-cm-ink: #171717;--ui-cm-text: #6b6b6b;--ui-cm-muted: #8a8a8a;--ui-cm-faint: #b8b8b8;--ui-cm-line: #ececec;--ui-cm-accent: #2f6bff;--ui-cm-shine: #b8b8b8;--ui-cm-hover: rgba(0, 0, 0, 0.05);--ui-cm-high: #b85c00;--ui-cm-high-bg: #ffefd6;--ui-cm-full: #c2331f;--ui-cm-full-bg: #fde3df;--ui-cm-system-bg: #f3f3f3;--ui-cm-system-edge: #e1e1e1;--ui-cm-system-ink: #5c5c5c;--ui-cm-tools-bg: #e2f2f9;--ui-cm-tools-edge: #a6d6ea;--ui-cm-tools-ink: #006a94;--ui-cm-memory-bg: #ececfc;--ui-cm-memory-edge: #bdbdf0;--ui-cm-memory-ink: #4a4ac2;--ui-cm-file-bg: #e6effd;--ui-cm-file-edge: #a9c4f5;--ui-cm-file-ink: #2456d6;--ui-cm-chat-bg: #f3eafa;--ui-cm-chat-edge: #d3b6ec;--ui-cm-chat-ink: #7b3fb0;--ui-cm-result-bg: #ffefd6;--ui-cm-result-edge: #f7c27a;--ui-cm-result-ink: #b35400;--ui-cm-summary-bg: #dcf3e4;--ui-cm-summary-edge: #9fd9b4;--ui-cm-summary-ink: #1a7f45;--ui-cm-free-edge: #d6d6d6;--ui-cm-free-hatch: rgba(0, 0, 0, 0.035);--ui-cm-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-cm-button: var(--ui-cm-shadow);--ui-cm-button-hover: 0 0 0 1px #e2e2e2, 0 1px 3px rgba(0, 0, 0, 0.07);--ui-cm-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-cm-height: 280px;--ui-cm-gap: 3px;--ui-cm-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-cm-tray);min-width: 0;container: ui-cm / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;color: var(--ui-cm-text);text-align: left;letter-spacing: -0.006em;-webkit-font-smoothing: antialiased}.ui-cm *, .ui-cm *::before, .ui-cm *::after{box-sizing: border-box}.ui-cm__bar{display: flex;flex-wrap: wrap;align-items: center;gap: 6px 8px;min-width: 0;padding: 10px 12px 12px}.ui-cm__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-cm-accent)}.ui-cm__title{flex: 0 1 auto;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-cm-strong);white-space: nowrap;text-overflow: ellipsis}.ui-cm__who{display: inline-flex;align-items: center;gap: 7px;min-width: 0}.ui-cm__logo{display: grid;flex: none;place-items: center;width: 22px;height: 22px;border-radius: 7px;background: var(--ui-cm-card);box-shadow: var(--ui-cm-shadow)}.ui-cm__logo > svg{width: 12px;height: 12px}.ui-cm__model{min-width: 0;overflow: hidden;color: var(--ui-cm-text);white-space: nowrap;text-overflow: ellipsis}.ui-cm__pick{position: relative;display: inline-flex;min-width: 0}.ui-cm__agent{min-width: 0;height: 32px;margin: -5px 0;padding: 0 8px 0 11px;border: 0;border-radius: 999px;letter-spacing: inherit;background: var(--ui-cm-card);box-shadow: var(--ui-cm-button);font: inherit;color: inherit;cursor: pointer;transition: box-shadow 160ms ease}.ui-cm__agent:hover, .ui-cm__agent[aria-expanded="true"]{box-shadow: var(--ui-cm-button-hover)}.ui-cm__agent .ui-cm__logo{width: 14px;height: 14px;border-radius: 0;background: none;box-shadow: none}.ui-cm__agent .ui-cm__logo > svg{width: 15px;height: 15px}.ui-cm__agent:focus-visible, .ui-cm__option:focus-visible{outline: 2px solid rgba(23, 23, 23, 0.22);outline-offset: 2px}.ui-cm__chev{flex: none;width: 13px;height: 13px;margin-left: -2px;color: var(--ui-cm-muted);transition: transform 180ms var(--ui-cm-ease)}.ui-cm__agent[aria-expanded="true"] .ui-cm__chev{transform: rotate(180deg)}.ui-cm__menu{position: absolute;top: calc(100% + 8px);left: 0;z-index: 6;display: grid;gap: 2px;width: 268px;padding: 5px;border-radius: 16px;background: var(--ui-cm-card);box-shadow: var(--ui-cm-shadow);animation: ui-cm-tip 160ms var(--ui-cm-ease) both}.ui-cm__option{display: flex;align-items: center;gap: 10px;width: 100%;padding: 7px 10px 7px 7px;border: 0;border-radius: 11px;letter-spacing: inherit;background: none;font: inherit;text-align: left;color: inherit;cursor: pointer}.ui-cm__option:hover{background: var(--ui-cm-hover)}.ui-cm__option[aria-checked="true"]{background: var(--ui-cm-hover)}.ui-cm__option-text{display: grid;flex: 1;min-width: 0}.ui-cm__option-name{overflow: hidden;font-size: 14px;font-weight: 600;line-height: 19px;color: var(--ui-cm-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cm__option-model{overflow: hidden;font-size: 12.5px;line-height: 17px;color: var(--ui-cm-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cm__option .ui-cm__logo{width: 28px;height: 28px;border-radius: 8px}.ui-cm__option .ui-cm__logo > svg{width: 14px;height: 14px}.ui-cm__limit{flex: none;height: 20px;padding: 0 7px;border-radius: 999px;background: var(--ui-cm-hover);font-size: 12px;font-weight: 500;line-height: 20px;color: var(--ui-cm-text);font-variant-numeric: tabular-nums}.ui-cm__status{display: inline-flex;flex: none;align-items: center;max-width: 100%;min-width: 0;overflow: hidden;white-space: nowrap;gap: 5px;height: 24px;padding: 0 10px 0 8px;border-radius: 999px;background: var(--ui-cm-summary-bg);font-size: 12.5px;font-weight: 500;color: var(--ui-cm-summary-ink);animation: ui-cm-fade 240ms ease both}.ui-cm__sum{display: flex;align-items: center;gap: 10px;margin-left: auto;font-size: 13px;line-height: 18px;color: var(--ui-cm-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-cm__sum b{font-weight: 600;color: var(--ui-cm-ink)}.ui-cm__used{background: linear-gradient(90deg, var(--ui-cm-ink) 0%, var(--ui-cm-ink) 38%, var(--ui-cm-shine) 50%, var(--ui-cm-ink) 62%, var(--ui-cm-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent !important;animation: ui-cm-shine 1100ms linear infinite}.ui-cm__pct{min-width: 44px;height: 24px;padding: 0 8px;border-radius: 999px;background: var(--ui-cm-card);box-shadow: var(--ui-cm-shadow);font-size: 12.5px;font-weight: 600;line-height: 24px;color: var(--ui-cm-text);text-align: center;transition: background-color 300ms ease, color 300ms ease}.ui-cm__pct[data-level="high"]{background: var(--ui-cm-high-bg);color: var(--ui-cm-high)}.ui-cm__pct[data-level="full"]{background: var(--ui-cm-full-bg);color: var(--ui-cm-full)}.ui-cm__status-text{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cm__compare{display: inline-flex;flex: none;gap: 1px;padding: 2px;border-radius: 999px;background: var(--ui-cm-hover)}.ui-cm__compare{margin: -2px 0;animation: ui-cm-fade 280ms ease both}.ui-cm__roll{display: inline-grid;vertical-align: top;overflow: hidden}.ui-cm__roll > *{grid-area: 1 / 1}.ui-cm__roll-in[data-rolling]{animation: ui-cm-roll-in 340ms var(--ui-cm-ease) both}.ui-cm__roll-out{animation: ui-cm-roll-out 300ms var(--ui-cm-ease) both;pointer-events: none}.ui-cm__fates-row{display: grid}.ui-cm__fates-row > .ui-cm__roll{display: grid}@keyframes ui-cm-roll-in{from{opacity: 0;transform: translateY(80%)}}@keyframes ui-cm-roll-out{to{opacity: 0;transform: translateY(-80%)}}.ui-cm__compare button{height: 24px;padding: 0 9px;border: 0;border-radius: 999px;background: none;font: inherit;font-size: 12.5px;font-weight: 500;color: var(--ui-cm-muted);cursor: pointer;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-cm__compare button:hover{color: var(--ui-cm-ink)}.ui-cm__compare button[aria-pressed="true"]{background: var(--ui-cm-card);color: var(--ui-cm-ink);box-shadow: var(--ui-cm-shadow)}.ui-cm__compare button:focus-visible{outline: 2px solid var(--ui-cm-accent);outline-offset: 1px}.ui-cm__area{position: relative;height: var(--ui-cm-height);padding: 0;border-radius: 16px;background: var(--ui-cm-panel);box-shadow: var(--ui-cm-shadow)}.ui-cm__tile{position: absolute;left: 0;top: 0;width: max(0px, calc(var(--w) - var(--ui-cm-gap)));height: max(0px, calc(var(--h) - var(--ui-cm-gap)));border-radius: min(9px, calc(var(--w) / 4), calc(var(--h) / 4));background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);overflow: hidden;transform: translate(calc(var(--x) + var(--ui-cm-gap) / 2), calc(var(--y) + var(--ui-cm-gap) / 2));transition: opacity 200ms ease, background-color 300ms ease;cursor: default}.ui-cm__tile[data-kind="free"]{background: repeating-linear-gradient(135deg, transparent 0 6px, var(--ui-cm-free-hatch) 6px 7px);box-shadow: none;outline: 1.5px dashed var(--ui-cm-free-edge);outline-offset: -2px}.ui-cm__tile[data-dim]{opacity: 0.55}.ui-cm__label{position: absolute;top: 8px;right: 0;left: 10px;display: grid;min-width: 0;pointer-events: none}.ui-cm__name, .ui-cm__tokens{overflow: hidden;white-space: nowrap;-webkit-mask-image: linear-gradient(90deg, #000 calc(100% - 22px), transparent calc(100% - 4px));mask-image: linear-gradient(90deg, #000 calc(100% - 22px), transparent calc(100% - 4px));opacity: 0;transition: opacity 220ms ease}.ui-cm__name{font-size: 13px;font-weight: 600;line-height: 17px;color: var(--k-ink)}.ui-cm__tokens{font-size: 12.5px;line-height: 17px;color: var(--k-ink);font-variant-numeric: tabular-nums}.ui-cm__name[data-show]{opacity: 1}.ui-cm__tokens[data-show]{opacity: 0.7}.ui-cm__kind{opacity: 0;transition: opacity 220ms ease}.ui-cm__kind[data-show]{opacity: 1}.ui-cm__tile[data-kind="free"] :is(.ui-cm__name, .ui-cm__tokens){color: var(--ui-cm-muted)}.ui-cm [data-kind="system"]{--k-bg: var(--ui-cm-system-bg);--k-edge: var(--ui-cm-system-edge);--k-ink: var(--ui-cm-system-ink)}.ui-cm [data-kind="tools"]{--k-bg: var(--ui-cm-tools-bg);--k-edge: var(--ui-cm-tools-edge);--k-ink: var(--ui-cm-tools-ink)}.ui-cm [data-kind="memory"]{--k-bg: var(--ui-cm-memory-bg);--k-edge: var(--ui-cm-memory-edge);--k-ink: var(--ui-cm-memory-ink)}.ui-cm [data-kind="file"]{--k-bg: var(--ui-cm-file-bg);--k-edge: var(--ui-cm-file-edge);--k-ink: var(--ui-cm-file-ink)}.ui-cm [data-kind="chat"]{--k-bg: var(--ui-cm-chat-bg);--k-edge: var(--ui-cm-chat-edge);--k-ink: var(--ui-cm-chat-ink)}.ui-cm [data-kind="result"]{--k-bg: var(--ui-cm-result-bg);--k-edge: var(--ui-cm-result-edge);--k-ink: var(--ui-cm-result-ink)}.ui-cm [data-kind="summary"]{--k-bg: var(--ui-cm-summary-bg);--k-edge: var(--ui-cm-summary-edge);--k-ink: var(--ui-cm-summary-ink)}.ui-cm__tip{position: absolute;top: 0;left: 0;z-index: 5;display: grid;gap: 2px;width: max-content;max-width: 320px;padding: 10px 14px 11px;border-radius: 14px;background: var(--ui-cm-card);box-shadow: var(--ui-cm-pop);pointer-events: none;animation: ui-cm-tip 160ms var(--ui-cm-ease) both}.ui-cm__tip-head{display: flex;align-items: center;gap: 7px;min-width: 0}.ui-cm__swatch{flex: none;width: 10px;height: 10px;border-radius: 3px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge)}.ui-cm__tip-name{display: -webkit-box;overflow: hidden;font-weight: 600;color: var(--ui-cm-ink);overflow-wrap: anywhere;-webkit-box-orient: vertical;-webkit-line-clamp: 3}.ui-cm__tip-head{align-items: flex-start}.ui-cm__tip-head > .ui-cm__swatch{margin-top: 5px}.ui-cm__tip-meta{font-size: 12.5px;line-height: 18px;color: var(--ui-cm-muted);font-variant-numeric: tabular-nums}.ui-cm__tip-items{display: grid;grid-template-columns: repeat(2, minmax(0, max-content));gap: 7px 18px;margin: 8px 0 0;padding: 9px 0 0;border-top: 1px solid var(--ui-cm-line);list-style: none}.ui-cm__tip-items li{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 13px;line-height: 20px;color: var(--ui-cm-text);white-space: nowrap}.ui-cm__tip-item{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cm__tip-more{color: var(--ui-cm-muted)}.ui-cm :is(.ui-cm__logo, .ui-cm__icon) > img{width: 14px;height: 14px;object-fit: contain}.ui-cm__tip-items .ui-cm__logo, .ui-cm__tip-head .ui-cm__logo{width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cm-ink)}.ui-cm__tip-items .ui-cm__logo > svg, .ui-cm__tip-head .ui-cm__logo > svg{width: 11px;height: 11px}.ui-cm__icon{display: inline-flex;vertical-align: -2px;margin-right: 5px}.ui-cm__icon > svg{width: 13px;height: 13px;border-radius: 3px}.ui-cm__tip-detail{display: -webkit-box;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-cm-text);overflow-wrap: anywhere;-webkit-box-orient: vertical;-webkit-line-clamp: 4}.ui-cm__tip-fate{display: flex;align-items: center;gap: 6px;margin-top: 4px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cm-text)}.ui-cm__tip-fate > svg{flex: none;width: 12px;height: 12px}.ui-cm__tip-fate:is([data-fate="summarized"], [data-fate="summary"]){color: var(--ui-cm-summary-ink)}.ui-cm__tip-fate[data-fate="dropped"]{color: var(--ui-cm-muted)}.ui-cm__tile[data-fate="summarized"]{box-shadow: none;outline: 1.5px dashed color-mix(in srgb, var(--k-ink) 55%, transparent);outline-offset: -1.5px}.ui-cm__tile[data-fate="dropped"]{opacity: 0.42;filter: grayscale(1)}.ui-cm__tile[data-fate="dropped"] .ui-cm__name{text-decoration: line-through}.ui-cm__tile[data-fate="summary"]{box-shadow: inset 0 0 0 1px var(--ui-cm-summary-edge)}.ui-cm__badge{position: absolute;top: 6px;right: 6px;z-index: 1;display: grid;place-items: center;width: 18px;height: 18px;border-radius: 5px;background: var(--ui-cm-hover);color: var(--ui-cm-muted);pointer-events: none;animation: ui-cm-fade 240ms ease both}.ui-cm__badge > svg{width: 11px;height: 11px}.ui-cm__tile[data-pinned]{box-shadow: inset 0 0 0 1.5px var(--k-ink)}.ui-cm__tile[data-fate="summarized"][data-pinned]{outline-style: solid}.ui-cm__tile{cursor: pointer}.ui-cm__tile[data-kind="free"]{cursor: default}.ui-cm__fates{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 16px;min-height: 18px;margin: 10px 0 0;padding: 0 10px 8px;font-size: 13px;line-height: 18px;color: var(--ui-cm-muted);font-variant-numeric: tabular-nums}.ui-cm__fates b{font-weight: 500;color: var(--ui-cm-ink)}.ui-cm__fates--none{color: var(--ui-cm-faint)}.ui-cm__fate{display: inline-flex;align-items: center;gap: 6px;white-space: nowrap}.ui-cm__fate::before{content: "";flex: none;width: 9px;height: 9px;border-radius: 2.5px;background: var(--ui-cm-system-bg);box-shadow: inset 0 0 0 1.5px var(--ui-cm-system-edge)}.ui-cm__fate[data-fate="summarized"]::before{background: none;box-shadow: none;outline: 1px dashed var(--ui-cm-muted);outline-offset: -1px}.ui-cm__fate[data-fate="dropped"]::before{opacity: 0.45}@container ui-cm (max-width: 480px){.ui-cm__compare{order: 2;margin-left: auto}.ui-cm__sum{min-height: 28px}.ui-cm__fates{min-height: 40px;align-content: flex-start}.ui-cm__pct{order: 3}.ui-cm__sum{flex-basis: 100%;justify-content: space-between;margin-left: 0}.ui-cm__area{--ui-cm-height: 240px}}@keyframes ui-cm-in{from{opacity: 0}}@keyframes ui-cm-fade{from{opacity: 0}}@keyframes ui-cm-shine{from{background-position: 100% 0}to{background-position: 0 0}}.ui-cm__spin{flex: none;width: 12px;height: 12px;animation: ui-cm-spin 800ms steps(8) infinite}@keyframes ui-cm-spin{to{transform: rotate(360deg)}}@keyframes ui-cm-tip{from{opacity: 0;transform: translateY(4px) scale(0.96)}}@media (prefers-reduced-motion: reduce){.ui-cm *, .ui-cm *::before, .ui-cm *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cm{--ui-cm-tray: #1a1a1c;--ui-cm-panel: #232326;--ui-cm-card: #2a2a2e;--ui-cm-strong: #f5f5f5;--ui-cm-ink: #f0f0f0;--ui-cm-text: #a1a1a1;--ui-cm-muted: #8a8a8a;--ui-cm-faint: #5c5c5c;--ui-cm-line: #2e2e31;--ui-cm-accent: #6d93ff;--ui-cm-shine: #8a8a8a;--ui-cm-hover: rgba(255, 255, 255, 0.07);--ui-cm-high: #ffb357;--ui-cm-high-bg: #3a2a12;--ui-cm-full: #ff8a76;--ui-cm-full-bg: #3d1a16;--ui-cm-system-bg: #2b2b2f;--ui-cm-system-edge: #3a3a40;--ui-cm-system-ink: #bdbdbd;--ui-cm-tools-bg: #12303b;--ui-cm-tools-edge: #2a6a84;--ui-cm-tools-ink: #6fd0f2;--ui-cm-memory-bg: #24244a;--ui-cm-memory-edge: #4a4aa0;--ui-cm-memory-ink: #b3b3ff;--ui-cm-file-bg: #1d2b4d;--ui-cm-file-edge: #3c5fb3;--ui-cm-file-ink: #8aaeff;--ui-cm-chat-bg: #2f2140;--ui-cm-chat-edge: #6a4a94;--ui-cm-chat-ink: #d4a8ff;--ui-cm-result-bg: #3a2a12;--ui-cm-result-edge: #8a5a1c;--ui-cm-result-ink: #ffc078;--ui-cm-summary-bg: #15321f;--ui-cm-summary-edge: #2f7a4b;--ui-cm-summary-ink: #55d68c;--ui-cm-free-edge: #3a3a40;--ui-cm-free-hatch: rgba(255, 255, 255, 0.04);--ui-cm-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4);--ui-cm-button: var(--ui-cm-shadow);--ui-cm-button-hover: 0 0 0 1px #3a3a40, 0 1px 3px rgba(0, 0, 0, 0.45);--ui-cm-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.7)}`,
  oe = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  se = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  v = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, { d: `M24 22.525H0l12-21.05 12 21.05z` }),
    }),
  ce = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 49.883 49.877`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsxs)(`g`, {
          transform: `translate(0 0)`,
          children: [
            (0, r.jsx)(`path`, {
              d: `M18.3549 10.4784C15.4713 10.4784 13.1157 8.12279 13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V10.4784H18.3549Z`,
              fill: `#36C5F0`,
            }),
            (0, r.jsx)(`path`, {
              d: `M18.3575 13.12C21.2411 13.12 23.5967 15.4756 23.5967 18.3592C23.5967 21.2428 21.2411 23.5984 18.3575 23.5984H5.2392C2.35561 23.5984 0 21.2428 0 18.3592C0 15.4756 2.35561 13.12 5.2392 13.12H18.3575Z`,
              fill: `#36C5F0`,
            }),
          ],
        }),
        (0, r.jsxs)(`g`, {
          transform: `translate(26.28 0)`,
          children: [
            (0, r.jsx)(`path`, {
              d: `M13.1244 18.3592C13.1244 15.4756 15.48 13.12 18.3636 13.12C21.2472 13.12 23.6028 15.4756 23.6028 18.3592C23.6028 21.2428 21.2472 23.5984 18.3636 23.5984H13.1244V18.3592Z`,
              fill: `#2EB67D`,
            }),
            (0, r.jsx)(`path`, {
              d: `M10.4785 18.3575C10.4785 21.2411 8.12286 23.5967 5.23927 23.5967C2.35568 23.5967 7.4362e-05 21.2411 7.4362e-05 18.3575V5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0C8.12286 0 10.4785 2.35561 10.4785 5.2392V18.3575Z`,
              fill: `#2EB67D`,
            }),
          ],
        }),
        (0, r.jsxs)(`g`, {
          transform: `translate(0 26.28)`,
          children: [
            (0, r.jsx)(`path`, {
              d: `M10.4784 5.2392C10.4784 8.12279 8.12279 10.4784 5.2392 10.4784C2.35561 10.4784 0 8.12279 0 5.2392C0 2.35561 2.35561 0 5.2392 0H10.4784V5.2392Z`,
              fill: `#E01E5A`,
            }),
            (0, r.jsx)(`path`, {
              d: `M13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V18.3575C23.5941 21.2411 21.2385 23.5967 18.3549 23.5967C15.4713 23.5967 13.1157 21.2411 13.1157 18.3575V5.2392Z`,
              fill: `#E01E5A`,
            }),
          ],
        }),
        (0, r.jsxs)(`g`, {
          transform: `translate(26.28 26.28)`,
          children: [
            (0, r.jsx)(`path`, {
              d: `M5.23927 13.1157C8.12286 13.1157 10.4785 15.4713 10.4785 18.3549C10.4785 21.2385 8.12286 23.5941 5.23927 23.5941C2.35568 23.5941 7.4362e-05 21.2385 7.4362e-05 18.3549V13.1157H5.23927Z`,
              fill: `#ECB22E`,
            }),
            (0, r.jsx)(`path`, {
              d: `M5.23927 10.4784C2.35568 10.4784 7.4362e-05 8.12279 7.4362e-05 5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0H18.3576C21.2412 0 23.5968 2.35561 23.5968 5.2392C23.5968 8.12279 21.2412 10.4784 18.3576 10.4784H5.23927Z`,
              fill: `#ECB22E`,
            }),
          ],
        }),
      ],
    }),
  y = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, { width: `24`, height: `24`, rx: `6`, fill: `#635BFF` }),
        (0, r.jsx)(`path`, {
          fill: `#fff`,
          transform: `translate(5 5) scale(0.5833)`,
          d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`,
        }),
      ],
    }),
  b = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z`,
      }),
    }),
  x = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `#632CA6` },
      children: (0, r.jsx)(`path`, {
        d: `M19.57 17.04l-1.997-1.316-1.665 2.782-1.937-.567-1.706 2.604.087.82 9.274-1.71-.538-5.794zm-8.649-2.498l1.488-.204c.241.108.409.15.697.223.45.117.97.23 1.741-.16.18-.088.553-.43.704-.625l6.096-1.106.622 7.527-10.444 1.882zm11.325-2.712l-.602.115L20.488 0 .789 2.285l2.427 19.693 2.306-.334c-.184-.263-.471-.581-.96-.989-.68-.564-.44-1.522-.039-2.127.53-1.022 3.26-2.322 3.106-3.956-.056-.594-.15-1.368-.702-1.898-.02.22.017.432.017.432s-.227-.289-.34-.683c-.112-.15-.2-.199-.319-.4-.085.233-.073.503-.073.503s-.186-.437-.216-.807c-.11.166-.137.48-.137.48s-.241-.69-.186-1.062c-.11-.323-.436-.965-.343-2.424.6.421 1.924.321 2.44-.439.171-.251.288-.939-.086-2.293-.24-.868-.835-2.16-1.066-2.651l-.028.02c.122.395.374 1.223.47 1.625.293 1.218.372 1.642.234 2.204-.116.488-.397.808-1.107 1.165-.71.358-1.653-.514-1.713-.562-.69-.55-1.224-1.447-1.284-1.883-.062-.477.275-.763.445-1.153-.243.07-.514.192-.514.192s.323-.334.722-.624c.165-.109.262-.178.436-.323a9.762 9.762 0 0 0-.456.003s.42-.227.855-.392c-.318-.014-.623-.003-.623-.003s.937-.419 1.678-.727c.509-.208 1.006-.147 1.286.257.367.53.752.817 1.569.996.501-.223.653-.337 1.284-.509.554-.61.99-.688.99-.688s-.216.198-.274.51c.314-.249.66-.455.66-.455s-.134.164-.259.426l.03.043c.366-.22.797-.394.797-.394s-.123.156-.268.358c.277-.002.838.012 1.056.037 1.285.028 1.552-1.374 2.045-1.55.618-.22.894-.353 1.947.68.903.888 1.609 2.477 1.259 2.833-.294.295-.874-.115-1.516-.916a3.466 3.466 0 0 1-.716-1.562 1.533 1.533 0 0 0-.497-.85s.23.51.23.96c0 .246.03 1.165.424 1.68-.039.076-.057.374-.1.43-.458-.554-1.443-.95-1.604-1.067.544.445 1.793 1.468 2.273 2.449.453.927.186 1.777.416 1.997.065.063.976 1.197 1.15 1.767.306.994.019 2.038-.381 2.685l-1.117.174c-.163-.045-.273-.068-.42-.153.08-.143.241-.5.243-.572l-.063-.111c-.348.492-.93.97-1.414 1.245-.633.359-1.363.304-1.838.156-1.348-.415-2.623-1.327-2.93-1.566 0 0-.01.191.048.234.34.383 1.119 1.077 1.872 1.56l-1.605.177.759 5.908c-.337.048-.39.071-.757.124-.325-1.147-.946-1.895-1.624-2.332-.599-.384-1.424-.47-2.214-.314l-.05.059a2.851 2.851 0 0 1 1.863.444c.654.413 1.181 1.481 1.375 2.124.248.822.42 1.7-.248 2.632-.476.662-1.864 1.028-2.986.237.3.481.705.876 1.25.95.809.11 1.577-.03 2.106-.574.452-.464.69-1.434.628-2.456l.714-.104.258 1.834 11.827-1.424zM15.05 6.848c-.034.075-.085.125-.007.37l.004.014.013.032.032.073c.14.287.295.558.552.696.067-.011.136-.019.207-.023.242-.01.395.028.492.08.009-.048.01-.119.005-.222-.018-.364.072-.982-.626-1.308-.264-.122-.634-.084-.757.068a.302.302 0 0 1 .058.013c.186.066.06.13.027.207m1.958 3.392c-.092-.05-.52-.03-.821.005-.574.068-1.193.267-1.328.372-.247.191-.135.523.047.66.511.382.96.638 1.432.575.29-.038.546-.497.728-.914.124-.288.124-.598-.058-.698m-5.077-2.942c.162-.154-.805-.355-1.556.156-.554.378-.571 1.187-.041 1.646.053.046.096.078.137.104a4.77 4.77 0 0 1 1.396-.412c.113-.125.243-.345.21-.745-.044-.542-.455-.456-.146-.749`,
      }),
    }),
  S = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M9.854 14.5 5 9.647.854 5.5A.5.5 0 0 0 0 5.854V8.44a.5.5 0 0 0 .146.353L5 13.647l.147.146L9.854 18.5l.146.147v-.049c.065.03.134.049.207.049h2.586a.5.5 0 0 0 .353-.854L9.854 14.5zm0-5-4-4a.487.487 0 0 0-.409-.144.515.515 0 0 0-.356.21.493.493 0 0 0-.089.288V8.44a.5.5 0 0 0 .147.353l9 9a.5.5 0 0 0 .853-.354v-2.585a.5.5 0 0 0-.146-.354l-5-5zm1-4a.5.5 0 0 0-.854.354V8.44a.5.5 0 0 0 .147.353l4 4a.5.5 0 0 0 .853-.354V9.854a.5.5 0 0 0-.146-.354l-4-4zm12.647 11.515a3.863 3.863 0 0 1-2.232-1.1l-4.708-4.707a.5.5 0 0 0-.854.354v6.585a.5.5 0 0 0 .5.5H23.5a.5.5 0 0 0 .5-.5v-.6c0-.276-.225-.497-.499-.532zm-5.394.032a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM.854 15.5a.5.5 0 0 0-.854.354v2.293a.5.5 0 0 0 .5.5h2.293c.222 0 .39-.135.462-.309a.493.493 0 0 0-.109-.545L.854 15.501zM5 14.647.854 10.5a.5.5 0 0 0-.854.353v2.586a.5.5 0 0 0 .146.353L4.854 18.5l.146.147h2.793a.5.5 0 0 0 .353-.854L5 14.647z`,
      }),
    }),
  le = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  C = () => {
    let e = `gm` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``);
    return (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`defs`, {
          children: (0, r.jsxs)(`linearGradient`, {
            id: e,
            x1: `0`,
            y1: `24`,
            x2: `24`,
            y2: `0`,
            gradientUnits: `userSpaceOnUse`,
            children: [
              (0, r.jsx)(`stop`, { stopColor: `#1C7DFF` }),
              (0, r.jsx)(`stop`, { offset: `0.52`, stopColor: `#1C69FF` }),
              (0, r.jsx)(`stop`, { offset: `1`, stopColor: `#B04DFF` }),
            ],
          }),
        }),
        (0, r.jsx)(`path`, {
          fill: `url(#${e})`,
          d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81`,
        }),
      ],
    });
  },
  w = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#FF7A59`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
      }),
    }),
  T = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  E = {
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.6,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  D = [
    { label: `GitHub`, icon: (0, r.jsx)(se, {}) },
    {
      label: `Terminal`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            ...E,
            children: [
              (0, r.jsx)(`rect`, { x: `3`, y: `4`, width: `18`, height: `16`, rx: `3` }),
              (0, r.jsx)(`path`, { d: `m7.5 9.5 2.5 2.5-2.5 2.5M12.5 15h4` }),
            ],
          }),
        {},
      ),
    },
    {
      label: `Search`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            ...E,
            children: [
              (0, r.jsx)(`circle`, { cx: `11`, cy: `11`, r: `6.5` }),
              (0, r.jsx)(`path`, { d: `m16 16 4.5 4.5` }),
            ],
          }),
        {},
      ),
    },
    {
      label: `Read file`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            ...E,
            children: [
              (0, r.jsx)(`path`, {
                d: `M6 3.5h8l4.5 4.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-16a.5.5 0 0 1 .5-.5Z`,
              }),
              (0, r.jsx)(`path`, { d: `M13.5 3.5V8.5h5` }),
            ],
          }),
        {},
      ),
    },
    {
      label: `Edit file`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            ...E,
            children: (0, r.jsx)(`path`, {
              d: `M14.5 5.5 18.5 9.5M4 20l1-4.5L15.8 4.7a1.4 1.4 0 0 1 2 0l1.5 1.5a1.4 1.4 0 0 1 0 2L8.5 19 4 20Z`,
            }),
          }),
        {},
      ),
    },
    {
      label: `Browser`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            ...E,
            children: [
              (0, r.jsx)(`circle`, { cx: `12`, cy: `12`, r: `8.5` }),
              (0, r.jsx)(`path`, {
                d: `M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5s1.1-6.1 3.4-8.5Z`,
              }),
            ],
          }),
        {},
      ),
    },
    { label: `Vercel`, icon: (0, r.jsx)(v, {}) },
    { label: `Sentry`, icon: (0, r.jsx)(b, {}) },
    { label: `Stripe`, icon: (0, r.jsx)(y, {}) },
    { label: `Slack`, icon: (0, r.jsx)(ce, {}) },
    { label: `Datadog`, icon: (0, r.jsx)(x, {}) },
    { label: `PostHog`, icon: (0, r.jsx)(S, {}) },
  ],
  O = 14.4,
  k = 1.2,
  A = 25,
  j = (e) => 1 - (1 - Math.min(1, Math.max(0, e))) ** 3,
  M =
    (e, t, n = 0.8) =>
    (r) =>
      t * j((r - e) / n),
  N = [
    {
      id: `system`,
      label: `System prompt`,
      kind: `system`,
      from: 0,
      size: () => 6200,
      detail: `Coding agent instructions and repo rules`,
    },
    { id: `tools`, label: `Tool definitions`, kind: `tools`, from: 0, size: () => 14800, items: D },
    {
      id: `memory`,
      label: `Project memory`,
      kind: `memory`,
      from: 0,
      size: () => 9400,
      detail: `Notes from earlier sessions in this repo`,
    },
    {
      id: `spec`,
      label: `checkout.spec.ts`,
      kind: `file`,
      from: 0.8,
      size: M(0.8, 8200),
      detail: `Read at 0:09`,
    },
    {
      id: `payment`,
      label: `payment.ts`,
      kind: `file`,
      from: 2.2,
      size: M(2.2, 17600),
      detail: `Read at 0:24`,
    },
    {
      id: `chat`,
      label: `Chat`,
      kind: `chat`,
      from: 1.2,
      size: (e) => 2e3 + Math.max(0, e - 1.2) * 3100,
      until: O,
      detail: `41 turns with you and the agent`,
    },
    {
      id: `run1`,
      label: `Test run · 20×`,
      kind: `result`,
      from: 4.4,
      size: M(4.4, 22400),
      until: O,
      detail: `18 passed, 2 failed`,
    },
    {
      id: `mock`,
      label: `stripe.ts (mock)`,
      icon: (0, r.jsx)(y, {}),
      kind: `file`,
      from: 5.8,
      size: M(5.8, 11800),
      detail: `Read at 0:48`,
    },
    {
      id: `search`,
      label: `Search results`,
      kind: `result`,
      drop: !0,
      from: 7.2,
      size: M(7.2, 15600),
      until: O,
      detail: `"confirmPayment" in 14 files`,
    },
    {
      id: `receipt`,
      label: `receipt.tsx`,
      kind: `file`,
      from: 8.8,
      size: M(8.8, 23800),
      detail: `Read at 1:32`,
    },
    {
      id: `run2`,
      label: `Test run · 20×`,
      kind: `result`,
      from: 10.6,
      size: M(10.6, 21200),
      until: O,
      detail: `20 passed`,
    },
    {
      id: `summary`,
      label: `Summary`,
      kind: `summary`,
      from: O,
      size: M(O, 8600, k),
      detail: `The chat and old tool results, squeezed`,
    },
    {
      id: `chat2`,
      label: `Chat`,
      kind: `chat`,
      from: 16.2,
      size: (e) => 1200 + Math.max(0, e - O - k - 0.6) * 1400,
      detail: `Since the summary`,
    },
  ],
  ue = [
    {
      id: `system`,
      label: `System prompt`,
      kind: `system`,
      from: 0,
      size: () => 5200,
      detail: `Read-only explorer, map before you change`,
    },
    {
      id: `tools`,
      label: `Tool definitions`,
      kind: `tools`,
      from: 0,
      size: () => 9800,
      items: [D[0], D[2], D[3], D[1], D[5]],
    },
    {
      id: `memory`,
      label: `Project memory`,
      kind: `memory`,
      from: 0,
      size: () => 7400,
      detail: `The last refactor's notes`,
    },
    {
      id: `api`,
      label: `src/api/`,
      kind: `file`,
      from: 0.8,
      size: M(0.8, 62e3, 1.2),
      detail: `38 files read at 0:12`,
    },
    {
      id: `chat`,
      label: `Chat`,
      kind: `chat`,
      from: 1.2,
      size: (e) => 1500 + Math.max(0, e - 1.2) * 2450,
      until: O,
      detail: `12 turns with you and the agent`,
    },
    {
      id: `billing`,
      label: `src/billing/`,
      kind: `file`,
      from: 2.4,
      size: M(2.4, 88e3, 1.2),
      detail: `51 files read at 0:40`,
    },
    {
      id: `grep`,
      label: `Search results`,
      kind: `result`,
      drop: !0,
      from: 3.4,
      size: M(3.4, 38e3),
      until: O,
      detail: `"useSession" in 212 files`,
    },
    {
      id: `web`,
      label: `src/web/`,
      kind: `file`,
      from: 4.6,
      size: M(4.6, 104e3, 1.2),
      detail: `73 files read at 1:18`,
    },
    {
      id: `ui`,
      label: `packages/ui/`,
      kind: `file`,
      from: 7,
      size: M(7, 71e3, 1.2),
      detail: `64 files read at 2:05`,
    },
    {
      id: `deps`,
      label: `Dependency graph`,
      kind: `result`,
      from: 9.6,
      size: M(9.6, 46e3),
      until: O,
      detail: `1,240 imports between 9 packages`,
    },
    {
      id: `cover`,
      label: `Test coverage`,
      kind: `result`,
      from: 11.4,
      size: M(11.4, 18e3),
      until: O,
      detail: `71% lines, 4 packages under 50%`,
    },
    {
      id: `summary`,
      label: `Summary`,
      kind: `summary`,
      from: O,
      size: M(O, 21e3, k),
      detail: `The chat and old tool results, squeezed`,
    },
    {
      id: `chat2`,
      label: `Chat`,
      kind: `chat`,
      from: 16.2,
      size: (e) => 1200 + Math.max(0, e - O - k - 0.6) * 2400,
      detail: `Since the summary`,
    },
  ],
  P = [
    {
      id: `system`,
      label: `System prompt`,
      kind: `system`,
      from: 0,
      size: () => 4800,
      detail: `Support agent tone and refund rules`,
    },
    {
      id: `tools`,
      label: `Tool definitions`,
      kind: `tools`,
      from: 0,
      size: () => 11200,
      items: [
        { label: `Stripe`, icon: (0, r.jsx)(y, {}) },
        { label: `HubSpot`, icon: (0, r.jsx)(w, {}) },
        { label: `Notion`, icon: (0, r.jsx)(T, {}) },
        D[9],
        D[2],
      ],
    },
    {
      id: `memory`,
      label: `Support playbook`,
      kind: `memory`,
      from: 0,
      size: () => 6400,
      detail: `How refunds were handled before`,
    },
    {
      id: `policy`,
      label: `Refund policy`,
      icon: (0, r.jsx)(T, {}),
      kind: `file`,
      from: 0.8,
      size: M(0.8, 12400),
      detail: `From Notion, read at 0:06`,
    },
    {
      id: `chat`,
      label: `Chat`,
      kind: `chat`,
      from: 1.2,
      size: (e) => 1500 + Math.max(0, e - 1.2) * 2080,
      until: O,
      detail: `4 tickets so far`,
    },
    {
      id: `t4821`,
      label: `Ticket #4821`,
      kind: `result`,
      from: 2.2,
      size: M(2.2, 9200),
      until: O,
      detail: `Charged twice for the annual plan`,
    },
    {
      id: `charges`,
      label: `Stripe charges`,
      icon: (0, r.jsx)(y, {}),
      kind: `result`,
      from: 3.8,
      size: M(3.8, 14600),
      until: O,
      detail: `18 charges for 3 customers`,
    },
    {
      id: `contact`,
      label: `HubSpot contact`,
      icon: (0, r.jsx)(w, {}),
      kind: `result`,
      from: 5.6,
      size: M(5.6, 8800),
      until: O,
      detail: `Acme Inc., 3 open deals`,
    },
    {
      id: `orders`,
      label: `Order history`,
      kind: `result`,
      drop: !0,
      from: 7.4,
      size: M(7.4, 10600),
      until: O,
      detail: `Last 24 months`,
    },
    {
      id: `t4830`,
      label: `Ticket #4830`,
      kind: `result`,
      from: 9.4,
      size: M(9.4, 16400),
      until: O,
      detail: `Refund after the trial ended`,
    },
    {
      id: `summary`,
      label: `Summary`,
      kind: `summary`,
      from: O,
      size: M(O, 7200, k),
      detail: `Tickets handled so far, squeezed`,
    },
    {
      id: `chat2`,
      label: `Chat`,
      kind: `chat`,
      from: 16.2,
      size: (e) => 1e3 + Math.max(0, e - O - k - 0.6) * 1200,
      detail: `Since the summary`,
    },
  ],
  F = [
    {
      id: `fixer`,
      name: `Checkout fixer`,
      model: `Opus 5.5`,
      icon: (0, r.jsx)(oe, {}),
      limit: 2e5,
      parts: N,
    },
    {
      id: `scout`,
      name: `Codebase scout`,
      model: `Gemini Pro`,
      icon: (0, r.jsx)(C, {}),
      limit: 5e5,
      parts: ue,
    },
    {
      id: `triage`,
      name: `Support triage`,
      model: `GPT-5`,
      icon: (0, r.jsx)(le, {}),
      limit: 128e3,
      parts: P,
    },
  ],
  I = (e, t) =>
    e
      .filter((e) => t >= e.from)
      .flatMap(({ from: e, size: n, until: r, drop: i, ...a }) => {
        let o = n(Math.min(t, r ?? t));
        return (
          r !== void 0 && t > r && (o *= 1 - j((t - r) / k)),
          o > 40 ? [{ ...a, tokens: Math.round(o) }] : []
        );
      }),
  L = (e) => ({
    before: I(e, O),
    summarized: e.filter((e) => e.until !== void 0 && !e.drop).map((e) => e.id),
    dropped: e.filter((e) => e.drop).map((e) => e.id),
    summary: `summary`,
  }),
  de = 15.9,
  R = [17.3, 20.9];
function z() {
  let [e, t] = (0, n.useState)(F[0].id),
    [i, a] = (0, n.useState)(null),
    [o, s] = (0, n.useState)(0),
    c = (0, n.useRef)(performance.now());
  (0, n.useEffect)(() => {
    let e = 0,
      t = () => {
        let n = (performance.now() - c.current) / 1e3;
        (n > A && ((c.current = performance.now()), (n = 0), a(null)), s(n), (e = requestAnimationFrame(t)));
      };
    return ((e = requestAnimationFrame(t)), () => cancelAnimationFrame(e));
  }, []);
  let l = F.find((t) => t.id === e) ?? F[0],
    u = o >= 13.8 && o < 16,
    d = o >= de,
    f = (0, n.useMemo)(() => (d ? L(l.parts) : null), [d, l]),
    p = i ?? (o >= R[0] && o < R[1] ? `before` : `after`);
  return (0, r.jsx)(`div`, {
    className: `cm-demo`,
    children: (0, r.jsx)(re, {
      blocks: I(l.parts, o),
      limit: l.limit,
      agents: F,
      agent: e,
      onAgentChange: (e) => {
        (t(e), (c.current = performance.now()), s(0), a(null));
      },
      compaction: f,
      view: p,
      onViewChange: a,
      status: u ? `Compacting` : void 0,
    }),
  });
}
