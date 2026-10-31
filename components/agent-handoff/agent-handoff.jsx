/*
 * affectUI · agent-handoff (Pro)
 * Implementation recovered from public bundle asset: demo-CW_0t88D.js
 * Styles inlined in the module -> agent-handoff.css (1 block(s))
 * Demo usage: agent-handoff.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 12 12`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: e,
    }),
  a = {
    file: i(
      (0, r.jsx)(`path`, { d: `M7 1.5H3.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4Zm0 0V4h2.5` }),
    ),
    source: i(
      (0, r.jsx)(`path`, {
        d: `M5 7a1.8 1.8 0 0 0 2.6 0l1.4-1.4a1.8 1.8 0 0 0-2.6-2.6l-.4.4M7 5a1.8 1.8 0 0 0-2.6 0L3 6.4A1.8 1.8 0 0 0 5.6 9l.4-.4`,
      }),
    ),
    fact: i((0, r.jsx)(`path`, { d: `M2.5 9.5v-3M5 9.5v-6M7.5 9.5V5M10 9.5V2.5` })),
    decision: i((0, r.jsx)(`path`, { d: `m3 6.2 2 2L9.2 4` })),
    note: i((0, r.jsx)(`path`, { d: `M2.5 3h7M2.5 6h7M2.5 9h4` })),
  },
  o = () =>
    i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `4` }),
          (0, r.jsx)(`path`, { d: `m3.2 8.8 5.6-5.6` }),
        ],
      }),
    ),
  s = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      className: `ui-ah__spin`,
      children: [
        (0, r.jsx)(`circle`, {
          cx: `6`,
          cy: `6`,
          r: `4.25`,
          stroke: `currentColor`,
          strokeOpacity: `0.25`,
          strokeWidth: `1.5`,
        }),
        (0, r.jsx)(`path`, {
          d: `M6 1.75A4.25 4.25 0 0 1 10.25 6`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  c = { idle: `Idle`, working: `Working` },
  l = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 14 14`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`,
          fill: `currentColor`,
        }),
        (0, r.jsx)(`circle`, { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` }),
      ],
    }),
  u = ({ status: e }) =>
    (0, r.jsxs)(`span`, {
      className: `ui-ah__state-icon`,
      "data-status": e,
      "aria-hidden": `true`,
      children: [
        e === `todo` &&
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 12 12`,
            children: [
              (0, r.jsx)(`circle`, {
                cx: `6`,
                cy: `6`,
                r: `4.4`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.4`,
              }),
              (0, r.jsx)(`path`, { d: `M6 1.6a4.4 4.4 0 0 1 0 8.8Z`, fill: `currentColor` }),
            ],
          }),
        e === `working` &&
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 12 12`,
            className: `ui-ah__spin`,
            children: [
              (0, r.jsx)(`circle`, {
                cx: `6`,
                cy: `6`,
                r: `4.6`,
                fill: `none`,
                stroke: `currentColor`,
                strokeOpacity: `0.25`,
                strokeWidth: `1.6`,
              }),
              (0, r.jsx)(`path`, {
                d: `M6 1.4a4.6 4.6 0 0 1 4.6 4.6`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.6`,
                strokeLinecap: `round`,
              }),
            ],
          }),
        e === `warning` &&
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 12 12`,
            children: (0, r.jsx)(`path`, { d: `M6 1.6 11 10.2H1L6 1.6Z`, fill: `currentColor` }),
          }),
        e === `done` &&
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 12 12`,
            children: (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `3.4`, fill: `currentColor` }),
          }),
      ],
    }),
  d = { todo: `Ready`, done: `Done`, warning: `Needs attention` },
  f = () => i((0, r.jsx)(`path`, { d: `M2 6h7M7 3.5 9.5 6 7 8.5` }));
function p({ id: e, className: t, children: i }) {
  let a = (0, n.useRef)({ id: e, node: i }),
    [o, s] = (0, n.useState)(null);
  return (
    a.current.id !== e && o?.id !== a.current.id && s(a.current),
    (0, n.useLayoutEffect)(() => {
      a.current = { id: e, node: i };
    }),
    (0, r.jsxs)(`span`, {
      className: [`ui-ah__swap`, t].filter(Boolean).join(` `),
      children: [
        o &&
          (0, r.jsx)(
            `span`,
            {
              className: `ui-ah__swap-layer`,
              "data-leaving": ``,
              "aria-hidden": `true`,
              onAnimationEnd: (e) => e.target === e.currentTarget && s(null),
              children: o.node,
            },
            `out-${o.id}`,
          ),
        (0, r.jsx)(
          `span`,
          { className: `ui-ah__swap-layer`, "data-coming": o ? `` : void 0, children: i },
          e,
        ),
      ],
    })
  );
}
var m = new Intl.NumberFormat(`en`, { style: `currency`, currency: `USD` }),
  h = new Intl.NumberFormat(`en`, {
    style: `currency`,
    currency: `USD`,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }),
  g = new Intl.NumberFormat(`en`, {
    style: `currency`,
    currency: `USD`,
    notation: `compact`,
    maximumFractionDigits: 1,
  }),
  _ = (e) =>
    typeof e != `number` || !Number.isFinite(e) || e < 0
      ? null
      : e > 0 && e < 0.001
        ? `<$0.001`
        : e < 0.01
          ? h.format(e)
          : e >= 1e4
            ? g.format(e)
            : m.format(e),
  v = new Intl.NumberFormat(`en`),
  y = (e) => (e > 999 ? `999+` : v.format(e)),
  b = (e) =>
    typeof Intl.Segmenter == `function`
      ? Array.from(new Intl.Segmenter().segment(e), (e) => e.segment)
      : Array.from(e),
  x = (e) => {
    let t = e.trim().split(/\s+/).filter(Boolean);
    return (b(t.find((e) => /^[\p{L}\p{N}]/u.test(e)) ?? t[0] ?? ``)[0] ?? ``).toUpperCase();
  },
  S = [`todo`, `working`, `done`, `warning`],
  ee = (e) => (S.includes(e) ? e : `todo`),
  C = (e) => {
    let t = new Map();
    return (Array.isArray(e) ? e : [])
      .filter((e) => !!e && typeof e == `object`)
      .map((e) => {
        let n = String(e.id ?? ``),
          r = t.get(n) ?? 0;
        return (t.set(n, r + 1), { ...e, id: n, key: r ? `${n}#${r}` : n, src: e });
      });
  };
function w({ avatar: e, name: t, className: i }) {
  let [a, o] = (0, n.useState)(!1);
  return (0, r.jsx)(`span`, {
    className: i,
    "aria-hidden": `true`,
    onErrorCapture: () => o(!0),
    children: e != null && e !== !1 && !a ? e : x(t),
  });
}
var te = 10,
  ne = 16,
  re = 850,
  ie = 3;
function T({ agents: e, handoffs: t, tasks: h, onAssign: g, onRestore: b, className: x }) {
  let S = C(e).map((e) => ({ ...e, name: String(e.name ?? ``).trim() || e.id || `Agent` })),
    T = C(t).map((e) => ({
      ...e,
      from: String(e.from ?? ``),
      to: String(e.to ?? ``),
      task: String(e.task ?? ``),
      items: (Array.isArray(e.items) ? e.items : []).filter((e) => !!e && typeof e == `object`),
    })),
    E = (Array.isArray(h) ? h : [])
      .filter((e) => !!e && typeof e == `object`)
      .map((e) => ({
        ...e,
        status: ee(e.status),
        title: String(e.title ?? ``),
        tools: (Array.isArray(e.tools) ? e.tools : []).filter((e) => !!e && typeof e == `object`),
      })),
    [D, O] = (0, n.useState)(null),
    [k, A] = (0, n.useState)(null),
    [j, M] = (0, n.useState)(null),
    N = (0, n.useRef)(null),
    P = (0, n.useRef)(new Map()),
    F = (0, n.useRef)(new Map()),
    [I, L] = (0, n.useState)([]),
    R = S.length,
    z = (0, n.useRef)(new Set(T.map((e) => e.key))),
    [B, V] = (0, n.useState)([]),
    H = T.filter((e) => !z.current.has(e.key)).map((e) => e.key),
    U = new Set([...B, ...H]);
  (0, n.useLayoutEffect)(() => {
    H.length &&
      (H.forEach((e) => z.current.add(e)),
      V((e) => [...e, ...H]),
      window.setTimeout(() => V((e) => e.filter((e) => !H.includes(e))), re));
  });
  let W = S.slice(0, -1).map((e, t) => [...T].reverse().find((n) => n.from === e.id && n.to === S[t + 1].id)),
    oe = (e) => E.find((t) => t.status === `working` && t.agent === e.id),
    se = (e) => E.find((t) => t.title === e),
    [ce, le] = (0, n.useState)(null),
    [G, K] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    if (!G) return;
    let e = (e) => {
        P.current.get(G)?.contains(e.target) || K(null);
      },
      t = (e) => e.key === `Escape` && K(null);
    return (
      document.addEventListener(`pointerdown`, e),
      document.addEventListener(`keydown`, t),
      () => {
        (document.removeEventListener(`pointerdown`, e), document.removeEventListener(`keydown`, t));
      }
    );
  }, [G]);
  let q = (0, n.useRef)(new Map()),
    ue = (0, n.useRef)(new Map()),
    de = (0, n.useRef)(``);
  ((0, n.useLayoutEffect)(() => {
    let e = T.filter((e) => !U.has(e.key))
        .map((e) => e.key)
        .join(),
      t = e !== de.current;
    de.current = e;
    let n = new Map();
    (q.current.forEach((e, r) => {
      let i = e.offsetTop;
      n.set(r, i);
      let a = ue.current.get(r);
      t &&
        a != null &&
        a !== i &&
        e.animate([{ transform: `translateY(${a - i}px)` }, { transform: `none` }], {
          duration: 480,
          easing: `cubic-bezier(0.32, 0.72, 0.24, 1)`,
        });
    }),
      (ue.current = n));
  }),
    (0, n.useLayoutEffect)(() => {
      let e = N.current;
      if (!e) return;
      let t = () => {
        let t = e.getBoundingClientRect(),
          n = t.width / (e.offsetWidth || 1),
          r = (e) => {
            let r = e.getBoundingClientRect();
            return { x: (r.left - t.left) / n, y: (r.top - t.top) / n, w: r.width / n, h: r.height / n };
          },
          i = [];
        for (let e = 0; e < R - 1; e++) {
          let t = P.current.get(S[e].key),
            n = P.current.get(S[e + 1].key),
            a = F.current.get(e);
          if (!t || !n || !a) continue;
          let o = r(t),
            s = r(n),
            c = r(a),
            l = o.x + o.w / 2,
            u = o.y + o.h,
            d = s.x + s.w / 2,
            f = s.y + s.h,
            p = c.y,
            m = Math.round(u + (p - u) / 2),
            h = c.x + c.w / 2 - 14,
            g = c.x + c.w / 2 + 14,
            _ = (e, t, n, r) => {
              let i = n - e;
              if (Math.abs(i) < 2) return `M${e} ${t}V${r}`;
              let a = Math.max(0, Math.min(te, Math.abs(i) / 2, Math.abs(m - t) - 1, Math.abs(r - m) - 1)),
                o = Math.sign(i),
                s = Math.sign(m - t),
                c = Math.sign(r - m);
              return `M${e} ${t}V${m - s * a}Q${e} ${m} ${e + o * a} ${m}H${n - o * a}Q${n} ${m} ${n} ${m + c * a}V${r}`;
            },
            v = (e, t, n, r) => Math.abs(m - t) + Math.abs(n - e) + Math.abs(r - m),
            y = _(l, u, h, p),
            b = _(g, p, d, f);
          i.push({
            i: e,
            into: y,
            on: b,
            inLen: v(l, u, h, p),
            onLen: v(g, p, d, f),
            dots: [
              [l, u],
              [d, f],
              [h, p],
              [g, p],
            ],
          });
        }
        L((e) => (JSON.stringify(e) === JSON.stringify(i) ? e : i));
      };
      t();
      let n = new ResizeObserver(t);
      return (n.observe(e), () => n.disconnect());
    }, [R, S.map((e) => e.key).join()]));
  let fe = (e, t, n) =>
      Array.from({ length: ne }, (i, a) =>
        (0, r.jsx)(
          `path`,
          {
            className: `ui-ah__streak`,
            "data-on": n ? `` : void 0,
            d: e,
            style: {
              "--len": `${t}px`,
              "--shift": `${a * ie}px`,
              "--o": Math.max(0.06, 1 - Math.abs((2 * a) / 15 - 1)).toFixed(2),
            },
          },
          a,
        ),
      ),
    [J, Y] = (0, n.useState)(null),
    X = (0, n.useRef)(null),
    Z = (0, n.useRef)(null),
    Q = (0, n.useRef)(!1),
    $ = J ?? k,
    pe = (e) => !$ || e > $.after,
    me = (e, t, n) => {
      let r = (Array.isArray(h) ? h : []).find((t) => t && t.id === e);
      (r && S.findIndex((e) => e.key === t.key) > n && g?.(r, t.src), A(null), M(null));
    },
    he = (e, t, n, r) => {
      if (e.button !== 0 || e.pointerType === `touch`) return;
      Q.current = !1;
      let i = e.currentTarget.getBoundingClientRect();
      X.current = {
        hand: t,
        task: n.id,
        after: r,
        title: n.title,
        logo: n.logo,
        sx: e.clientX,
        sy: e.clientY,
        dx: e.clientX - i.left,
        dy: e.clientY - i.top,
        w: i.width,
      };
    },
    ge = (e, t, n) => {
      let r = document.elementFromPoint(e, t)?.closest(`.ui-ah__agent`),
        i = r && N.current?.contains(r) ? Number(r.dataset.i) : -1;
      return i > n ? S[i] : void 0;
    };
  return (
    (0, n.useEffect)(() => {
      let e = (e) => {
          let t = X.current;
          if (!t || (!Z.current && Math.hypot(e.clientX - t.sx, e.clientY - t.sy) < 5)) return;
          let n = { ...t, x: e.clientX, y: e.clientY };
          ((Z.current = n), (Q.current = !0), Y(n), M(ge(e.clientX, e.clientY, t.after)?.key ?? null));
        },
        t = (e) => {
          let t = Z.current;
          if (((X.current = null), (Z.current = null), !t)) return;
          let n = ge(e.clientX, e.clientY, t.after);
          (n && me(t.task, n, t.after), Y(null), M(null));
        },
        n = (e) => {
          e.key === `Escape` && ((X.current = null), (Z.current = null), Y(null), M(null), A(null));
        };
      return (
        document.addEventListener(`pointermove`, e),
        document.addEventListener(`pointerup`, t),
        document.addEventListener(`pointercancel`, t),
        document.addEventListener(`keydown`, n),
        () => {
          (document.removeEventListener(`pointermove`, e),
            document.removeEventListener(`pointerup`, t),
            document.removeEventListener(`pointercancel`, t),
            document.removeEventListener(`keydown`, n));
        }
      );
    }),
    (0, r.jsxs)(`div`, {
      ref: N,
      className: [`ui-ah`, x].filter(Boolean).join(` `),
      style: { "--n": R },
      "data-holding": k ? `` : void 0,
      "data-carrying": J ? `` : void 0,
      children: [
        (0, r.jsx)(`style`, { href: `ui-agent-handoff`, precedence: `default`, children: ae }),
        S.length === 0 && (0, r.jsx)(`p`, { className: `ui-ah__none`, children: `No agents yet` }),
        J &&
          N.current &&
          (0, r.jsxs)(`div`, {
            className: `ui-ah__ghost`,
            "aria-hidden": `true`,
            style: {
              left: J.x - J.dx - N.current.getBoundingClientRect().left,
              top: J.y - J.dy - N.current.getBoundingClientRect().top,
              width: J.w,
            },
            children: [
              (0, r.jsx)(`span`, { className: `ui-ah__card-mark`, children: J.logo ?? (0, r.jsx)(l, {}) }),
              (0, r.jsx)(`span`, { className: `ui-ah__card-title`, children: J.title }),
            ],
          }),
        (0, r.jsx)(`svg`, {
          className: `ui-ah__lines`,
          "aria-hidden": `true`,
          children: I.map((e) =>
            (0, r.jsxs)(
              `g`,
              {
                "data-passed": W[e.i] ? `` : void 0,
                children: [
                  (0, r.jsx)(`path`, { className: `ui-ah__line`, d: e.into }),
                  (0, r.jsx)(`path`, { className: `ui-ah__line`, d: e.on }),
                  W[e.i] &&
                    (0, r.jsxs)(
                      `g`,
                      { className: `ui-ah__light`, children: [fe(e.into, e.inLen), fe(e.on, e.onLen, !0)] },
                      W[e.i].key,
                    ),
                ],
              },
              e.i,
            ),
          ),
        }),
        (0, r.jsxs)(`div`, {
          className: `ui-ah__flow`,
          children: [
            S.map((e, t) => {
              let n = oe(e),
                a = n ? `working` : `idle`,
                o = n ?? (t === 0 ? E.find((e) => e.status === `todo`) : void 0),
                u = G === e.key && !!o,
                d = e.cost == null ? null : _(e.cost),
                f = t === 0 ? E.filter((e) => e.status === `todo`) : [];
              return (0, r.jsxs)(
                `div`,
                {
                  ref: (t) => {
                    t ? P.current.set(e.key, t) : P.current.delete(e.key);
                  },
                  className: `ui-ah__agent`,
                  style: { "--c": t * 2 + 1 },
                  "data-status": a,
                  "data-over": j === e.key ? `` : void 0,
                  "data-i": t,
                  "data-blocked": $ && !pe(t) ? `` : void 0,
                  "data-peek": u ? `` : void 0,
                  role: `button`,
                  tabIndex: 0,
                  "aria-label": k ? `Give the task to ${e.name}` : `${e.name}${o ? ` – ${o.title}` : ``}`,
                  "aria-expanded": k ? void 0 : u,
                  onClick: () => (k ? pe(t) && me(k.task, e, k.after) : o && K(u ? null : e.key)),
                  onKeyDown: (e) => {
                    e.target !== e.currentTarget ||
                      (e.key !== `Enter` && e.key !== ` `) ||
                      (e.preventDefault(), e.currentTarget.click());
                  },
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-ah__top`,
                      children: [
                        (0, r.jsx)(w, { className: `ui-ah__face`, avatar: e.avatar, name: e.name }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-ah__who`,
                          children: [
                            (0, r.jsx)(`span`, {
                              className: `ui-ah__name`,
                              dir: `auto`,
                              title: e.name,
                              children: e.name,
                            }),
                            e.model &&
                              (0, r.jsx)(`span`, {
                                className: `ui-ah__model`,
                                dir: `auto`,
                                title: String(e.model),
                                children: e.model,
                              }),
                          ],
                        }),
                        d &&
                          (0, r.jsx)(`span`, {
                            className: `ui-ah__cost`,
                            "data-live": n ? `` : void 0,
                            title: `Cost so far: ${m.format(e.cost)}`,
                            children: d,
                          }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-ah__status`,
                          "data-status": a,
                          children: [
                            a === `working` && (0, r.jsx)(s, {}),
                            (0, r.jsx)(p, { id: a, className: `ui-ah__status-word`, children: c[a] }),
                          ],
                        }),
                      ],
                    }),
                    e.description &&
                      (0, r.jsx)(`span`, {
                        className: `ui-ah__desc`,
                        dir: `auto`,
                        title: String(e.description),
                        children: e.description,
                      }),
                    (0, r.jsx)(`span`, {
                      className: `ui-ah__now`,
                      children: (0, r.jsx)(p, {
                        id: n ? `now-${n.id}` : f.length ? `next-${f[0].id}` : `idle`,
                        children: n
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                n.logo && (0, r.jsx)(`span`, { className: `ui-ah__logo`, children: n.logo }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-ah__now-task`,
                                  dir: `auto`,
                                  title: n.title,
                                  children: n.title,
                                }),
                                n.note &&
                                  (0, r.jsx)(`span`, {
                                    className: `ui-ah__now-note ui-ah__shine`,
                                    dir: `auto`,
                                    title: n.note,
                                    children: n.note,
                                  }),
                              ],
                            })
                          : f.length
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(`span`, { className: `ui-ah__now-idle`, children: `Up next` }),
                                  f[0].logo &&
                                    (0, r.jsx)(`span`, { className: `ui-ah__logo`, children: f[0].logo }),
                                  (0, r.jsx)(`span`, {
                                    className: `ui-ah__now-task`,
                                    dir: `auto`,
                                    title: f[0].title,
                                    children: f[0].title,
                                  }),
                                  f.length > 1 &&
                                    (0, r.jsxs)(`span`, {
                                      className: `ui-ah__now-more`,
                                      title: `${v.format(f.length - 1)} more`,
                                      children: [`+`, y(f.length - 1)],
                                    }),
                                ],
                              })
                            : (0, r.jsx)(`span`, {
                                className: `ui-ah__now-idle`,
                                children: `Ready for a task`,
                              }),
                      }),
                    }),
                    u &&
                      o &&
                      (0, r.jsxs)(`div`, {
                        className: `ui-ah__peek`,
                        role: `dialog`,
                        "aria-label": o.title,
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          (0, r.jsxs)(`span`, {
                            className: `ui-ah__peek-head`,
                            children: [
                              o.logo && (0, r.jsx)(`span`, { className: `ui-ah__logo`, children: o.logo }),
                              (0, r.jsx)(`span`, {
                                className: `ui-ah__peek-title`,
                                dir: `auto`,
                                title: o.title,
                                children: o.title,
                              }),
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                className: `ui-ah__peek-x`,
                                "aria-label": `Close`,
                                onClick: () => K(null),
                                children: i((0, r.jsx)(`path`, { d: `m3.5 3.5 5 5m0-5-5 5` })),
                              }),
                            ],
                          }),
                          (0, r.jsx)(`span`, {
                            className: `ui-ah__peek-state`,
                            children: n
                              ? (0, r.jsx)(`span`, {
                                  className: `ui-ah__shine`,
                                  children: n.note ?? `Working`,
                                })
                              : `Up next`,
                          }),
                          (0, r.jsxs)(`div`, {
                            className: `ui-ah__peek-body`,
                            children: [
                              o.description &&
                                (0, r.jsx)(`p`, { className: `ui-ah__peek-desc`, children: o.description }),
                              !!o.tools?.length &&
                                (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(`span`, { className: `ui-ah__peek-label`, children: `Tools` }),
                                    (0, r.jsx)(`ul`, {
                                      className: `ui-ah__tools`,
                                      children: o.tools.map((e, t) =>
                                        (0, r.jsxs)(
                                          `li`,
                                          {
                                            className: `ui-ah__tool`,
                                            children: [
                                              (0, r.jsx)(`span`, {
                                                className: `ui-ah__logo`,
                                                children: e.logo ?? (0, r.jsx)(l, {}),
                                              }),
                                              (0, r.jsx)(`span`, {
                                                className: `ui-ah__tool-name`,
                                                dir: `auto`,
                                                title: e.name,
                                                children: e.name,
                                              }),
                                              e.detail &&
                                                (0, r.jsx)(`span`, {
                                                  className: `ui-ah__tool-detail`,
                                                  title: String(e.detail),
                                                  children: e.detail,
                                                }),
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                  ],
                },
                e.key,
              );
            }),
            S.slice(0, -1).map((e, t) => {
              let n = S[t + 1],
                i = T.filter((t) => t.from === e.id && t.to === n.id && !U.has(t.key)).reverse();
              return (0, r.jsxs)(
                `section`,
                {
                  ref: (e) => {
                    e ? F.current.set(t, e) : F.current.delete(t);
                  },
                  className: `ui-ah__col`,
                  style: { "--c": t * 2 + 2 },
                  "aria-label": `Handed from ${e.name} to ${n.name}`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-ah__col-head`,
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-ah__col-who`,
                          title: `${e.name} → ${n.name}`,
                          children: [
                            (0, r.jsx)(w, { className: `ui-ah__col-face`, avatar: e.avatar, name: e.name }),
                            (0, r.jsx)(`span`, {
                              className: `ui-ah__col-name`,
                              dir: `auto`,
                              children: e.name,
                            }),
                            (0, r.jsx)(`span`, {
                              className: `ui-ah__col-arrow`,
                              children: (0, r.jsx)(f, {}),
                            }),
                            (0, r.jsx)(w, { className: `ui-ah__col-face`, avatar: n.avatar, name: n.name }),
                            (0, r.jsx)(`span`, {
                              className: `ui-ah__col-name`,
                              dir: `auto`,
                              children: n.name,
                            }),
                          ],
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-ah__lane-n`,
                          title: i.length > 999 ? v.format(i.length) : void 0,
                          children: y(i.length),
                        }),
                      ],
                    }),
                    (0, r.jsxs)(`ul`, {
                      className: `ui-ah__cards`,
                      children: [
                        i.map((e) => {
                          let n = se(e.task),
                            i = e.items.filter((e) => !e.lost),
                            s = e.items.filter((e) => e.lost),
                            c = ce === e.key,
                            f = n?.status ?? `done`,
                            m = S.find((e) => e.id === n?.agent);
                          return (0, r.jsxs)(
                            `li`,
                            {
                              ref: (t) => {
                                t ? q.current.set(e.key, t) : q.current.delete(e.key);
                              },
                              className: `ui-ah__card`,
                              "data-status": f,
                              "data-open": c ? `` : void 0,
                              "data-lost": s.length ? `` : void 0,
                              children: [
                                (0, r.jsxs)(`button`, {
                                  type: `button`,
                                  className: `ui-ah__card-main`,
                                  "data-movable": n ? `` : void 0,
                                  "data-carried": J?.hand === e.key ? `` : void 0,
                                  "aria-expanded": c,
                                  "aria-pressed": n ? k?.hand === e.key : void 0,
                                  onPointerDown: (r) => n && he(r, e.key, n, t),
                                  onClick: () => {
                                    if (Q.current) return void (Q.current = !1);
                                    le(c ? null : e.key);
                                  },
                                  onDoubleClick: () =>
                                    n && A(k?.hand === e.key ? null : { hand: e.key, task: n.id, after: t }),
                                  children: [
                                    (0, r.jsxs)(`span`, {
                                      className: `ui-ah__card-top`,
                                      children: [
                                        (0, r.jsx)(`span`, {
                                          className: `ui-ah__card-mark`,
                                          children: n?.logo ?? (0, r.jsx)(l, {}),
                                        }),
                                        (0, r.jsx)(`span`, {
                                          className: `ui-ah__card-title`,
                                          dir: `auto`,
                                          title: e.task,
                                          children: e.task,
                                        }),
                                      ],
                                    }),
                                    (i.length > 0 || s.length > 0) &&
                                      (0, r.jsx)(`span`, {
                                        className: `ui-ah__card-desc`,
                                        dir: `auto`,
                                        title: i.length ? i.map((e) => e.label).join(`, `) : void 0,
                                        children: i.length ? i.map((e) => e.label).join(`, `) : `All lost`,
                                      }),
                                    (0, r.jsx)(`span`, {
                                      className: `ui-ah__card-foot`,
                                      children: (0, r.jsxs)(p, {
                                        id: `${f}-${n?.agent}-${k?.hand === e.key}`,
                                        className: `ui-ah__card-state`,
                                        children: [
                                          (0, r.jsx)(u, { status: f }),
                                          (0, r.jsx)(`span`, {
                                            className: `ui-ah__card-word`,
                                            dir: `auto`,
                                            children:
                                              k?.hand === e.key
                                                ? `Now tap an agent`
                                                : f === `working`
                                                  ? m
                                                    ? `With ${m.name}`
                                                    : `Handing on`
                                                  : f === `todo`
                                                    ? d.todo
                                                    : (n?.note ?? d[f]),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(`div`, {
                                  className: `ui-ah__fold`,
                                  "data-open": c ? `` : void 0,
                                  inert: !c,
                                  children: (0, r.jsx)(`div`, {
                                    className: `ui-ah__clip`,
                                    children: (0, r.jsx)(`ul`, {
                                      className: `ui-ah__items`,
                                      children: [...i, ...s].map((t, n) => {
                                        let i = `${e.key}-${n}`;
                                        return (0, r.jsxs)(
                                          `li`,
                                          {
                                            className: `ui-ah__item-wrap`,
                                            children: [
                                              (0, r.jsxs)(`button`, {
                                                type: `button`,
                                                className: `ui-ah__item`,
                                                "data-lost": t.lost ? `` : void 0,
                                                "aria-expanded": t.lost ? D === i : void 0,
                                                onClick: () => t.lost && O(D === i ? null : i),
                                                children: [
                                                  (0, r.jsx)(`span`, {
                                                    className: `ui-ah__kind`,
                                                    children: t.lost
                                                      ? (0, r.jsx)(o, {})
                                                      : (a[t.kind] ?? a.note),
                                                  }),
                                                  (0, r.jsx)(`span`, {
                                                    className: `ui-ah__label`,
                                                    dir: `auto`,
                                                    title: String(t.label ?? ``),
                                                    children: t.label,
                                                  }),
                                                ],
                                              }),
                                              t.lost &&
                                                D === i &&
                                                (0, r.jsxs)(`span`, {
                                                  className: `ui-ah__why`,
                                                  children: [
                                                    (0, r.jsx)(`span`, {
                                                      children:
                                                        t.why ?? `It didn't make it to the next agent.`,
                                                    }),
                                                    b &&
                                                      (0, r.jsx)(`button`, {
                                                        type: `button`,
                                                        className: `ui-ah__restore`,
                                                        onClick: () => {
                                                          (b(e.src, t), O(null));
                                                        },
                                                        children: `Add back`,
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          },
                                          i,
                                        );
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            },
                            e.key,
                          );
                        }),
                        i.length === 0 &&
                          (0, r.jsx)(`li`, {
                            className: `ui-ah__lane-empty`,
                            children: `Nothing handed over yet`,
                          }),
                      ],
                    }),
                  ],
                },
                `p-${t}`,
              );
            }),
          ],
        }),
        (0, r.jsx)(`svg`, {
          className: `ui-ah__lines ui-ah__top-layer`,
          "aria-hidden": `true`,
          children: I.map((e) =>
            e.dots.map(([t, n], i) =>
              (0, r.jsx)(
                `circle`,
                { cx: t, cy: n, r: 3.25, className: `ui-ah__dot`, "data-passed": W[e.i] ? `` : void 0 },
                `${e.i}-${i}`,
              ),
            ),
          ),
        }),
      ],
    })
  );
}
var ae = `.ui-ah{--ui-ah-card: #ffffff;--ui-ah-strong: #171717;--ui-ah-ink: #171717;--ui-ah-text: #6b6b6b;--ui-ah-muted: #8a8a8a;--ui-ah-faint: #c2c2c2;--ui-ah-line: #ececec;--ui-ah-edge: #ececec;--ui-ah-well: #f5f5f5;--ui-ah-lane: #f0f0f0;--ui-ah-blue: #2f6bff;--ui-ah-board-line: #ececec;--ui-ah-board-ink: #171717;--ui-ah-board-text: #6b6b6b;--ui-ah-board-green: #1f9d55;--ui-ah-board-amber: #e8a20c;--ui-ah-board-red: #e5484d;--ui-ah-shine: #d4d4d4;--ui-ah-kpi-shine: #a3a3a3;--ui-ah-link: #a9c2ff;--ui-ah-link-muted: #d6d6d6;--ui-ah-accent: #2f6bff;--ui-ah-accent-bg: #edf2ff;--ui-ah-glow: rgba(47, 107, 255, 0.45);--ui-ah-drop: #a9c2ff;--ui-ah-green: #1a7f45;--ui-ah-green-bg: #e6f6ec;--ui-ah-amber: #b45309;--ui-ah-amber-bg: #fdf3e1;--ui-ah-red: #c2410c;--ui-ah-red-line: #f0a56d;--ui-ah-red-bg: #fdeee3;--ui-ah-tip: #171717;--ui-ah-lift: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-ah-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-ah-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;container: ui-ah / inline-size;padding: 8px 0 0;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;color: var(--ui-ah-text);letter-spacing: -0.006em;-webkit-font-smoothing: antialiased}.ui-ah *, .ui-ah *::before, .ui-ah *::after{box-sizing: border-box}.ui-ah :is(ol, ul){margin: 0;padding: 0;list-style: none}:where(.ui-ah) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;cursor: pointer}.ui-ah button:focus-visible, .ui-ah__agent:focus-visible{outline: 2px solid var(--ui-ah-accent);outline-offset: 2px}.ui-ah__lines{position: absolute;inset: 0;z-index: 1;width: 100%;height: 100%;overflow: visible;pointer-events: none}.ui-ah__top-layer{z-index: 3}.ui-ah__line{fill: none;stroke: var(--ui-ah-link-muted);stroke-width: 1.5;stroke-linecap: round;transition: stroke 300ms ease}.ui-ah__lines [data-passed] .ui-ah__line{stroke: var(--ui-ah-link)}.ui-ah__dot{fill: var(--ui-ah-card);stroke: var(--ui-ah-link-muted);stroke-width: 1.5;transition: stroke 300ms ease}.ui-ah__dot[data-passed]{stroke: var(--ui-ah-link)}.ui-ah__flow{position: relative;z-index: 2;display: grid;grid-template-columns: repeat(calc(var(--n) * 2), minmax(0, 1fr));row-gap: 72px}.ui-ah__agent{grid-column: var(--c) / span 2;justify-self: center;width: calc(100% - 16px);max-width: 300px;border-radius: 16px;background: var(--ui-ah-card);box-shadow: 0 0 0 1px var(--ui-ah-edge), var(--ui-ah-lift)}.ui-ah__agent{grid-row: 1;display: grid;gap: 10px;padding: 14px 14px 12px;transition: box-shadow 200ms ease, transform 200ms var(--ui-ah-ease)}.ui-ah__agent[data-over], .ui-ah[data-holding] .ui-ah__agent:not([data-blocked]):hover{box-shadow: 0 0 0 1px var(--ui-ah-drop), 0 12px 24px -12px rgba(0, 96, 226, 0.14);transform: translateY(-2px)}.ui-ah[data-holding] .ui-ah__agent{cursor: copy}.ui-ah[data-carrying], .ui-ah[data-carrying] *{cursor: grabbing !important;user-select: none}.ui-ah__card-main[data-carried]{opacity: 0.4}.ui-ah__ghost{position: absolute;z-index: 10;display: flex;align-items: center;gap: 8px;padding: 10px 12px 10px 10px;border-radius: 12px;background: var(--ui-ah-card);box-shadow: 0 0 0 1px var(--ui-ah-board-line), 0 16px 32px -12px rgba(16, 16, 24, 0.3);pointer-events: none;transform: rotate(-2deg);animation: ui-ah-lift 160ms var(--ui-ah-ease) both}.ui-ah__agent{transition: box-shadow 200ms ease, transform 200ms var(--ui-ah-ease), opacity 200ms ease}.ui-ah__agent[data-blocked]{opacity: 0.45;cursor: not-allowed !important}.ui-ah__top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-ah__face{display: grid;flex: none;place-items: center;width: 26px;height: 26px;border-radius: 8px;background: var(--ui-ah-card);box-shadow: var(--ui-ah-shadow);font-size: 12px;font-weight: 600;color: var(--ui-ah-ink)}.ui-ah__face > img, .ui-ah__col-face > img, .ui-ah__logo > img, .ui-ah__card-mark > img{display: block;width: 100%;height: 100%;object-fit: cover;border-radius: inherit}.ui-ah__face > svg{width: 14px;height: 14px}.ui-ah__who{display: grid;flex: 1;min-width: 3em}.ui-ah__agent{container: ui-ah-agent / inline-size}@container ui-ah-agent (max-width: 200px){.ui-ah__status-word{display: none}.ui-ah__status{width: 20px;padding: 0;justify-content: center}.ui-ah__status[data-status="idle"]{display: none}}.ui-ah__name{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 18px;color: var(--ui-ah-strong);white-space: nowrap;text-overflow: ellipsis}.ui-ah__desc{display: -webkit-box;height: 40px;overflow: hidden;-webkit-line-clamp: 2;-webkit-box-orient: vertical;font-size: 13px;line-height: 20px;color: var(--ui-ah-text)}.ui-ah__model{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-ah-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ah__status{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 20px;padding: 0 6px;border-radius: 6px;background: var(--ui-ah-well);font-size: 11.5px;font-weight: 500;color: var(--ui-ah-muted);transition: background-color 300ms ease, color 300ms ease}.ui-ah__status > svg{width: 10px;height: 10px}.ui-ah__status[data-status="working"]{background: var(--ui-ah-accent-bg);color: var(--ui-ah-accent)}.ui-ah__now{display: grid;align-items: center;min-width: 0;height: 34px;padding: 0 10px;overflow: hidden;border-radius: 10px;background: var(--ui-ah-lane);font-size: 13px}.ui-ah__now > .ui-ah__swap > .ui-ah__swap-layer{display: flex;align-items: center;gap: 6px}.ui-ah__swap{display: inline-grid;grid-template-columns: minmax(0, 1fr);align-items: center;min-width: 0;overflow: hidden}.ui-ah__swap-layer{grid-area: 1 / 1;min-width: 0}.ui-ah__swap-layer[data-leaving]{animation: ui-ah-swap-out 380ms var(--ui-ah-ease) both;pointer-events: none}.ui-ah__swap-layer[data-coming]{animation: ui-ah-swap-in 380ms var(--ui-ah-ease) both}.ui-ah__now-task{flex: none;max-width: 55%;overflow: hidden;font-weight: 600;color: var(--ui-ah-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ah__now-note{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ah__now-more{flex: none}.ui-ah__now-idle{color: var(--ui-ah-faint)}.ui-ah__agent{position: relative;cursor: pointer}.ui-ah:has(.ui-ah__agent[data-peek]) .ui-ah__flow{z-index: 4}.ui-ah__agent[data-peek]{z-index: 1}.ui-ah__peek{position: absolute;top: calc(100% + 8px);left: 0;right: 0;z-index: 2;display: grid;gap: 2px;padding: 12px;border-radius: 18px;background: var(--ui-ah-card);box-shadow: 0 0 0 1px var(--ui-ah-edge), 0 18px 40px -14px rgba(16, 16, 24, 0.28), 0 4px 10px -4px rgba(16, 16, 24, 0.08);cursor: default;transform-origin: 50% 0;animation: ui-ah-peek 240ms var(--ui-ah-ease) both}.ui-ah__peek-head{display: flex;align-items: center;gap: 8px;min-width: 0;padding: 0 0 0 2px}.ui-ah__peek-title{flex: 1;min-width: 0;overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-ah-strong);white-space: nowrap;text-overflow: ellipsis}.ui-ah__peek-x{display: grid;flex: none;place-items: center;width: 22px;height: 22px;margin: -2px -2px -2px 0;border-radius: 7px;color: var(--ui-ah-faint);transition: background-color 150ms ease, color 150ms ease}.ui-ah__peek-x:hover{background: var(--ui-ah-lane);color: var(--ui-ah-ink)}.ui-ah__peek-x > svg{width: 12px;height: 12px}.ui-ah__peek-state{padding-left: 26px;font-size: 13px;line-height: 18px;color: var(--ui-ah-muted)}.ui-ah__peek-body{display: grid;gap: 6px;margin-top: 8px;padding: 10px;border-radius: 12px;background: var(--ui-ah-lane)}.ui-ah__peek-desc{margin: 0;font-size: 13px;line-height: 20px;color: var(--ui-ah-text)}.ui-ah__peek-label{margin-top: 4px;font-size: 12px;font-weight: 600;line-height: 16px;color: var(--ui-ah-faint)}.ui-ah__tools{display: grid;gap: 2px;margin: 0;padding: 0;list-style: none}.ui-ah__tool{display: flex;align-items: center;gap: 8px;min-width: 0;height: 28px;font-size: 13px;color: var(--ui-ah-ink);animation: ui-ah-in 260ms var(--ui-ah-ease) both}.ui-ah__tool:nth-child(2){animation-delay: 40ms}.ui-ah__tool:nth-child(3){animation-delay: 80ms}.ui-ah__tool:nth-child(n + 4){animation-delay: 120ms}.ui-ah__tool-name{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ah__tool-detail{flex: none;max-width: 45%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums;color: var(--ui-ah-muted)}.ui-ah__cost{flex: none;font-size: 11.5px;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-ah-muted)}.ui-ah__cost[data-live]{background: linear-gradient(90deg, var(--ui-ah-ink) 0%, var(--ui-ah-ink) 38%, var(--ui-ah-kpi-shine) 50%, var(--ui-ah-ink) 62%, var(--ui-ah-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-ah-shine 1500ms linear infinite}.ui-ah__shine{background: linear-gradient(90deg, var(--ui-ah-muted) 0%, var(--ui-ah-muted) 38%, var(--ui-ah-shine) 50%, var(--ui-ah-muted) 62%, var(--ui-ah-muted) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-ah-shine 1500ms linear infinite}.ui-ah__logo{display: grid;flex: none;place-items: center;width: 16px;height: 16px;border-radius: 4px;background: var(--ui-ah-card);box-shadow: var(--ui-ah-shadow);color: var(--ui-ah-faint)}.ui-ah__logo > svg{width: 10px;height: 10px}.ui-ah__spin{animation: ui-ah-spin 900ms linear infinite}.ui-ah__light{filter: drop-shadow(0 0 1.5px var(--ui-ah-glow))}.ui-ah__streak{--d: 48px;fill: none;stroke: var(--ui-ah-accent);stroke-width: 2;stroke-dasharray: 3.4px calc(var(--len) + var(--d) * 2);stroke-dashoffset: calc(var(--d) - var(--shift));opacity: 0;animation: ui-ah-streak 1000ms cubic-bezier(0.45, 0, 0.55, 1) both}.ui-ah__streak[data-on]{animation-delay: 850ms}.ui-ah__col{grid-column: var(--c) / span 2;grid-row: 2;justify-self: center;width: calc(100% - 16px);max-width: 360px;height: 228px;padding: 4px;overflow: hidden;border-radius: 16px;background: var(--ui-ah-lane);-webkit-mask-image: linear-gradient(180deg, #000 calc(100% - 64px), transparent);mask-image: linear-gradient(180deg, #000 calc(100% - 64px), transparent)}.ui-ah__col-head{display: flex;align-items: center;justify-content: space-between;gap: 8px;height: 30px;padding: 0 6px 0 8px}.ui-ah__col-who{display: flex;align-items: center;gap: 5px;min-width: 0;overflow: hidden;font-size: 12px;font-weight: 600;color: var(--ui-ah-muted);white-space: nowrap}.ui-ah__col-face{display: grid;flex: none;place-items: center;width: 16px;height: 16px;border-radius: 4px;background: var(--ui-ah-card);box-shadow: var(--ui-ah-shadow);font-size: 9px;color: var(--ui-ah-ink)}.ui-ah__col-name{min-width: 1.6em;max-width: 45%;overflow: hidden;text-overflow: ellipsis}.ui-ah__col-face > svg{width: 10px;height: 10px}.ui-ah__col-arrow{display: grid;flex: none;place-items: center;width: 12px;height: 12px;margin: 0 2px;color: var(--ui-ah-faint)}.ui-ah__col-arrow > svg{width: 12px;height: 12px}.ui-ah__lane-n{display: grid;flex: none;place-items: center;min-width: 20px;height: 18px;padding: 0 5px;border-radius: 7px;background: rgba(16, 16, 24, 0.06);font-size: 12px;font-weight: 600;color: var(--ui-ah-text);font-variant-numeric: tabular-nums}.ui-ah__cards{display: grid;gap: 4px}.ui-ah__lane-empty{padding: 18px 0 20px;font-size: 13px;text-align: center;color: var(--ui-ah-faint)}.ui-ah__none{margin: 0;padding: 24px 0;font-size: 12.5px;text-align: center;color: var(--ui-ah-faint)}.ui-ah__card{border-radius: 12px;background: var(--ui-ah-card);box-shadow: 0 0 0 1px var(--ui-ah-board-line), 0 1px 2px rgba(16, 16, 24, 0.04);animation: ui-ah-drop 420ms var(--ui-ah-ease) both;transition: box-shadow 200ms ease}.ui-ah__card:hover, .ui-ah__card[data-open]{box-shadow: 0 0 0 1px #dcdce1, 0 4px 14px -6px rgba(16, 16, 24, 0.12)}.ui-ah__card-main{display: grid;gap: 3px;width: 100%;padding: 9px 12px 9px 10px;border-radius: 12px;text-align: left;cursor: pointer}.ui-ah__card-main[data-movable]{cursor: grab}.ui-ah__card-main[data-movable]:active{cursor: grabbing}.ui-ah__card-main[aria-pressed="true"]{box-shadow: 0 0 0 1.5px var(--ui-ah-link)}.ui-ah__card-top{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-ah__card-mark{display: grid;flex: none;place-items: center;width: 14px;height: 18px;color: var(--ui-ah-blue)}.ui-ah__card-mark > svg{width: 12px;height: 12px}.ui-ah__card-title{min-width: 0;overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-ah-board-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ah__card-desc{padding-left: 22px;overflow: hidden;font-size: 13px;line-height: 18px;color: var(--ui-ah-board-text);white-space: nowrap;text-overflow: ellipsis}.ui-ah__card-foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-width: 0;margin-top: 3px;padding-left: 22px}.ui-ah__card-state{font-size: 13px;color: var(--ui-ah-board-text)}.ui-ah__card-state > .ui-ah__swap-layer{display: inline-flex;align-items: center;gap: 6px}.ui-ah__card-word{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ah__state-icon{display: grid;flex: none;place-items: center;width: 11px;height: 11px;color: var(--ui-ah-blue)}.ui-ah__state-icon > svg{width: 11px;height: 11px}.ui-ah__state-icon[data-status="done"]{color: var(--ui-ah-board-green)}.ui-ah__state-icon[data-status="warning"]{color: var(--ui-ah-board-amber)}.ui-ah__fold{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 360ms var(--ui-ah-ease)}.ui-ah__fold[data-open]{grid-template-rows: 1fr}.ui-ah__clip{min-height: 0;overflow: hidden}.ui-ah__items{display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;margin: 0 10px 10px !important;padding-top: 8px !important;border-top: 1px solid var(--ui-ah-board-line)}.ui-ah__item-wrap{display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;min-width: 0}.ui-ah__item{display: flex;align-items: center;gap: 6px;width: 100%;height: 26px;padding: 0 8px;border-radius: 7px;background: var(--ui-ah-well);font-size: 13px;font-weight: 600;color: var(--ui-ah-ink);text-align: left;white-space: nowrap;cursor: default}.ui-ah__kind{display: grid;flex: none;place-items: center;width: 12px;height: 12px;color: var(--ui-ah-muted)}.ui-ah__kind > svg{width: 12px;height: 12px}.ui-ah__label{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-ah__item[data-lost]{background: var(--ui-ah-red-bg);box-shadow: inset 0 0 0 1px var(--ui-ah-red-line);color: var(--ui-ah-text);cursor: pointer}.ui-ah__item[data-lost] .ui-ah__kind{color: var(--ui-ah-red)}.ui-ah__item[data-lost] .ui-ah__label{text-decoration: line-through;text-decoration-color: var(--ui-ah-red)}.ui-ah__why{display: grid;gap: 8px;padding: 9px 10px;border-radius: 10px;background: var(--ui-ah-tip);font-size: 13px;line-height: 18px;color: #ffffff;animation: ui-ah-fade 160ms ease both}.ui-ah__restore{justify-self: start;height: 24px;padding: 0 9px;border-radius: 7px;background: rgba(255, 255, 255, 0.14);font-size: 13px;font-weight: 600;color: #ffffff}.ui-ah__restore:hover{background: rgba(255, 255, 255, 0.22)}@container ui-ah (max-width: 760px){.ui-ah__status-word{display: none}.ui-ah__status{width: 20px;padding: 0;justify-content: center}.ui-ah__status[data-status="idle"]{display: none}.ui-ah__status > svg{margin: 0}}@container ui-ah (max-width: 620px){.ui-ah__flow{grid-template-columns: minmax(0, 1fr);row-gap: 12px}.ui-ah__agent, .ui-ah__col{grid-column: 1;grid-row: auto;width: 100%;max-width: none}.ui-ah__flow > *{order: var(--c)}.ui-ah__lines{display: none}.ui-ah__col{width: calc(100% - 32px);height: 220px}}@keyframes ui-ah-streak{0%{stroke-dashoffset: calc(var(--d) - var(--shift));opacity: 0}12%{opacity: var(--o)}85%{opacity: var(--o)}100%{stroke-dashoffset: calc(var(--len) * -1 - var(--shift));opacity: 0}}@keyframes ui-ah-drop{from{opacity: 0;transform: translateY(-6px) scale(0.97)}}@keyframes ui-ah-strike{to{background-size: 100% 1px;opacity: 0.6}}@keyframes ui-ah-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-ah-fade{from{opacity: 0}}@keyframes ui-ah-lift{from{transform: none;box-shadow: 0 0 0 1px var(--ui-ah-board-line)}}@keyframes ui-ah-peek{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}@keyframes ui-ah-swap-in{from{opacity: 0;transform: translateY(70%);filter: blur(2px)}}@keyframes ui-ah-swap-out{to{opacity: 0;transform: translateY(-70%);filter: blur(2px)}}@keyframes ui-ah-shine{from{background-position: 100% 0}to{background-position: 0 0}}@keyframes ui-ah-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-ah *, .ui-ah *::before, .ui-ah *::after{animation-duration: 1ms !important}.ui-ah__streak{display: none}}:where(.dark, [data-theme="dark"]) .ui-ah{--ui-ah-card: #232326;--ui-ah-strong: #f5f5f5;--ui-ah-ink: #f0f0f0;--ui-ah-text: #a1a1a1;--ui-ah-muted: #8a8a8a;--ui-ah-faint: #5c5c5c;--ui-ah-line: #2e2e31;--ui-ah-edge: #2e2e31;--ui-ah-well: #2c2c30;--ui-ah-lane: #1a1a1c;--ui-ah-blue: #6d93ff;--ui-ah-board-line: #2e2e31;--ui-ah-board-ink: #f0f0f0;--ui-ah-board-text: #a1a1a1;--ui-ah-board-green: #55d68c;--ui-ah-board-amber: #f2b33d;--ui-ah-board-red: #ff6369;--ui-ah-shine: #f5f5f5;--ui-ah-kpi-shine: #8a8a8a;--ui-ah-link: #6d93ff;--ui-ah-link-muted: #3a3a3e;--ui-ah-accent: #6d93ff;--ui-ah-accent-bg: #1d2b4d;--ui-ah-glow: rgba(109, 147, 255, 0.5);--ui-ah-drop: #3c5fb3;--ui-ah-green: #55d68c;--ui-ah-green-bg: #15321f;--ui-ah-amber: #fbbf24;--ui-ah-amber-bg: #3a2a10;--ui-ah-red: #ffa057;--ui-ah-red-line: #b06a35;--ui-ah-red-bg: #432614;--ui-ah-tip: #fafafa;--ui-ah-lift: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-ah-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-ah__why{color: #111113}:where(.dark, [data-theme="dark"]) .ui-ah__restore{background: rgba(0, 0, 0, 0.08);color: #111113}`,
  E = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  D = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-ah-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  O = () => {
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
  k = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-ah-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  A = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-ah-strong, #181717)` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  j = () =>
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
  M = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#5E6AD2`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`,
      }),
    }),
  N = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#1FA463`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z`,
      }),
    }),
  P = [
    {
      id: `research`,
      name: `Researcher`,
      model: `Opus 5.5`,
      avatar: (0, r.jsx)(E, {}),
      description: `Finds the sources, pulls the facts and decides the angle.`,
    },
    {
      id: `writer`,
      name: `Writer`,
      model: `GPT-5`,
      avatar: (0, r.jsx)(D, {}),
      description: `Turns the brief into a first draft in the team’s voice.`,
    },
    {
      id: `reviewer`,
      name: `Reviewer`,
      model: `Gemini Pro`,
      avatar: (0, r.jsx)(O, {}),
      description: `Checks every claim against its source before it ships.`,
    },
  ],
  F = [
    {
      id: `macro`,
      title: `Support macro for refunds`,
      description: `A saved reply for refund requests, in the tone of the last 50 good answers.`,
      logo: (0, r.jsx)(j, {}),
      status: `done`,
      agent: `reviewer`,
      note: `Looks good`,
      tools: [
        { id: `s`, name: `Read refund threads in #support`, logo: (0, r.jsx)(j, {}), detail: `50` },
        { id: `n`, name: `Open the refund policy`, logo: (0, r.jsx)(k, {}) },
      ],
    },
    {
      id: `api`,
      title: `API release notes`,
      description: `Notes for the three endpoints shipped this week, with one example each.`,
      logo: (0, r.jsx)(A, {}),
      status: `done`,
      agent: `reviewer`,
      note: `Looks good`,
      tools: [
        { id: `g`, name: `Read the merged pull requests`, logo: (0, r.jsx)(A, {}), detail: `3` },
        { id: `l`, name: `Look up the shipped issues`, logo: (0, r.jsx)(M, {}), detail: `5` },
        { id: `n`, name: `Search the API docs`, logo: (0, r.jsx)(k, {}) },
      ],
    },
    {
      id: `onboard`,
      title: `Onboarding email`,
      description: `The first email a new team gets – one step, one link, no feature tour.`,
      logo: (0, r.jsx)(k, {}),
      status: `done`,
      agent: `reviewer`,
      note: `Looks good`,
      tools: [
        { id: `n`, name: `Read the first-run guide`, logo: (0, r.jsx)(k, {}) },
        { id: `d`, name: `Open the signup funnel sheet`, logo: (0, r.jsx)(N, {}) },
        { id: `s`, name: `Search #feedback for onboarding`, logo: (0, r.jsx)(j, {}), detail: `14` },
      ],
    },
    {
      id: `changelog`,
      title: `Changelog v2`,
      description: `Everything that changed since v1, grouped for people who skim.`,
      logo: (0, r.jsx)(A, {}),
      status: `todo`,
      tools: [
        { id: `g`, name: `List the commits since v1`, logo: (0, r.jsx)(A, {}), detail: `124` },
        { id: `l`, name: `Read the closed issues`, logo: (0, r.jsx)(M, {}), detail: `38` },
        { id: `n`, name: `Open the release template`, logo: (0, r.jsx)(k, {}) },
      ],
    },
    {
      id: `pricing`,
      title: `Pricing page copy`,
      description: `New copy for the three plans – shorter, with the fallback feature up front.`,
      logo: (0, r.jsx)(k, {}),
      status: `todo`,
      tools: [
        { id: `n`, name: `Read the current pricing page`, logo: (0, r.jsx)(k, {}) },
        { id: `d`, name: `Open the plan comparison sheet`, logo: (0, r.jsx)(N, {}) },
        { id: `s`, name: `Search #sales for objections`, logo: (0, r.jsx)(j, {}), detail: `12` },
      ],
    },
    {
      id: `launch`,
      title: `Launch post`,
      description: `The routing API launch post – lead with fallback, back it with numbers.`,
      logo: (0, r.jsx)(k, {}),
      status: `todo`,
      tools: [
        { id: `n`, name: `Read the launch brief`, logo: (0, r.jsx)(k, {}) },
        { id: `g`, name: `Read the fallback pull request`, logo: (0, r.jsx)(A, {}) },
        { id: `d`, name: `Open the latency numbers`, logo: (0, r.jsx)(N, {}) },
      ],
    },
    {
      id: `churn`,
      title: `Reply to churned team`,
      description: `Acme left after the outage in March – what happened and what changed since.`,
      logo: (0, r.jsx)(j, {}),
      status: `todo`,
      tools: [
        { id: `s`, name: `Read Acme’s support thread`, logo: (0, r.jsx)(j, {}), detail: `46` },
        { id: `l`, name: `Look up the March incident`, logo: (0, r.jsx)(M, {}) },
        { id: `n`, name: `Read the postmortem`, logo: (0, r.jsx)(k, {}) },
      ],
    },
  ],
  I = [
    (e) => [
      { id: `brief`, label: `${e.toLowerCase().split(` `)[0]}-brief.md`, kind: `file` },
      { id: `sources`, label: `12 sources`, kind: `source` },
      { id: `angle`, label: `Lead with fallback`, kind: `decision` },
      {
        id: `quotes`,
        label: `3 user quotes`,
        kind: `note`,
        lost: !0,
        why: `Over the Writer's 32k context budget – summarized away before the handoff.`,
      },
    ],
    () => [
      { id: `draft`, label: `Draft v1`, kind: `file` },
      { id: `tone`, label: `Tone: confident`, kind: `note` },
      { id: `p95`, label: `p95 1.9s → 1.2s`, kind: `fact` },
      {
        id: `sources2`,
        label: `12 sources`,
        kind: `source`,
        lost: !0,
        why: `Only the draft went on – the sources behind its numbers stayed with the Researcher's notes.`,
      },
    ],
  ],
  L = [`Reading sources`, `Drafting`, `Checking claims`],
  R = 3e3,
  z = 1750,
  B = { research: { cost: 1.24 }, writer: { cost: 0.57 }, reviewer: { cost: 0.3 } },
  V = { research: 0.0031, writer: 0.0017, reviewer: 0.0011 },
  H = [
    {
      id: `onboard-0`,
      from: `research`,
      to: `writer`,
      task: `Onboarding email`,
      items: [
        { id: `steps`, label: `first-run.md`, kind: `file` },
        { id: `drop`, label: `Where teams drop off`, kind: `fact` },
        { id: `one`, label: `One step only`, kind: `decision` },
      ],
    },
    {
      id: `onboard-1`,
      from: `writer`,
      to: `reviewer`,
      task: `Onboarding email`,
      items: [
        { id: `d0`, label: `Email draft`, kind: `file` },
        { id: `t0`, label: `Tone: friendly`, kind: `note` },
      ],
    },
    {
      id: `api-0`,
      from: `research`,
      to: `writer`,
      task: `API release notes`,
      items: [
        { id: `spec`, label: `endpoints.yaml`, kind: `file` },
        { id: `ex`, label: `3 examples`, kind: `source` },
        { id: `aud`, label: `Write for integrators`, kind: `decision` },
      ],
    },
    {
      id: `macro-0`,
      from: `research`,
      to: `writer`,
      task: `Support macro for refunds`,
      items: [
        { id: `good`, label: `50 good replies`, kind: `source` },
        { id: `pol`, label: `refund-policy.md`, kind: `file` },
        {
          id: `edge`,
          label: `2 edge cases`,
          kind: `note`,
          lost: !0,
          why: `Cut when the replies were summarized – they were in the long tail.`,
        },
      ],
    },
    {
      id: `api-1`,
      from: `writer`,
      to: `reviewer`,
      task: `API release notes`,
      items: [
        { id: `d`, label: `Draft v2`, kind: `file` },
        { id: `ex2`, label: `3 examples`, kind: `source` },
      ],
    },
    {
      id: `macro-1`,
      from: `writer`,
      to: `reviewer`,
      task: `Support macro for refunds`,
      items: [
        { id: `d2`, label: `Macro draft`, kind: `file` },
        { id: `t`, label: `Tone: warm`, kind: `note` },
      ],
    },
  ];
function U() {
  let [e, t] = (0, n.useState)(F),
    [i, a] = (0, n.useState)(H),
    o = (0, n.useRef)([]),
    s = (0, n.useRef)(F),
    c = (0, n.useRef)([]),
    l = (0, n.useRef)(0),
    u = (0, n.useRef)(new Map()),
    [d, f] = (0, n.useState)(B),
    p = (e, n) => {
      ((s.current = s.current.map((t) => (t.id === e ? { ...t, ...n } : t))), t(s.current));
    },
    m = (e, t) => {
      (o.current.push({ task: e, at: t, since: performance.now() }),
        p(e, { status: `working`, agent: P[t].id, note: L[t] }));
    },
    h = (e, t) => {
      ((o.current = o.current.filter((t) => t.task !== e.id)),
        window.clearTimeout(u.current.get(e.id)),
        u.current.delete(e.id),
        m(
          e.id,
          P.findIndex((e) => e.id === t.id),
        ),
        (l.current = 0));
    };
  return (
    (0, n.useEffect)(() => {
      let e = window.setInterval(() => {
        let e = performance.now();
        o.current.length &&
          f((e) => {
            let t = { ...e };
            for (let e of o.current) {
              let n = P[e.at].id;
              t[n] = { cost: t[n].cost + V[n] };
            }
            return t;
          });
        let n = o.current.filter((t) => e - t.since >= R);
        o.current = o.current.filter((t) => e - t.since < R);
        for (let t of n) {
          let n = s.current.find((e) => e.id === t.task);
          if (t.at < P.length - 1)
            (a((r) => [
              ...r,
              {
                id: `${t.task}-${t.at}-${Math.round(e)}`,
                from: P[t.at].id,
                to: P[t.at + 1].id,
                task: n.title,
                items: I[t.at](n.title).map((e) => (c.current.includes(e.id) ? { ...e, lost: !1 } : e)),
              },
            ]),
              p(t.task, { agent: void 0, note: void 0 }),
              u.current.set(
                t.task,
                window.setTimeout(() => {
                  (u.current.delete(t.task), m(t.task, t.at + 1));
                }, z),
              ));
          else {
            let e = !c.current.includes(`sources2`);
            p(t.task, { status: e ? `warning` : `done`, note: e ? `2 claims unchecked` : `Looks good` });
          }
        }
        let r = o.current.length > 0 || s.current.some((e) => e.status === `working`);
        r || (l.current += 1);
        let i = [...s.current].reverse().find((e) => e.status === `todo`);
        (!r && l.current === 14 && i && h(i, P[0]),
          !r &&
            l.current > 60 &&
            !i &&
            ((l.current = 0), (s.current = F), (c.current = []), t(F), a(H), f(B)));
      }, 100);
      return () => clearInterval(e);
    }, []),
    (0, r.jsx)(`div`, {
      className: `ah-demo`,
      children: (0, r.jsx)(T, {
        agents: P.map((e) => ({ ...e, ...d[e.id] })),
        handoffs: i,
        tasks: e,
        onAssign: h,
        onRestore: (e, t) => {
          ((c.current = [...c.current, t.id]),
            a((n) =>
              n.map((n) =>
                n.id === e.id
                  ? { ...n, items: n.items.map((e) => (e.id === t.id ? { ...e, lost: !1 } : e)) }
                  : n,
              ),
            ));
        },
      }),
    })
  );
}
