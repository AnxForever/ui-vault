/*
 * affectUI · inline-diff (Pro)
 * Implementation recovered from public bundle asset: component-LiY5Y6pa.js
 * Styles inlined in the module -> inline-diff.css (1 block(s))
 * Demo usage: inline-diff.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = RegExp(
    `\\s+|[\\p{L}\\p{M}\\p{N}_'’]+|\\p{Extended_Pictographic}[\\u{1F3FB}-\\u{1F3FF}\\uFE0F\\u20E3]*(?:\\u200D\\p{Extended_Pictographic}[\\u{1F3FB}-\\u{1F3FF}\\uFE0F]*)*|\\p{Regional_Indicator}{2}|[^\\s\\p{L}\\p{N}_]\\p{M}*`,
    `gu`,
  ),
  a = (e) => /^\s+$/.test(e);
function o(e, t, n = 1500) {
  let r = e.length,
    i = t.length,
    a = r + i + 1,
    o = new Int32Array(2 * a + 1),
    s = [],
    c = -1;
  for (let l = 0; l <= Math.min(n, r + i) && c < 0; l++) {
    s.push(o.slice(a - l - 1, a + l + 2));
    for (let n = -l; n <= l; n += 2) {
      let s = n === -l || (n !== l && o[a + n - 1] < o[a + n + 1]) ? o[a + n + 1] : o[a + n - 1] + 1,
        u = s - n;
      for (; s < r && u < i && e[s] === t[u];) (s++, u++);
      if (((o[a + n] = s), s >= r && u >= i)) {
        c = l;
        break;
      }
    }
  }
  if (c < 0) return null;
  let l = [],
    u = r,
    d = i;
  for (let n = c; n > 0; n--) {
    let r = s[n],
      i = (e) => r[e + n + 1],
      a = u - d,
      o = a === -n || (a !== n && i(a - 1) < i(a + 1)),
      c = o ? a + 1 : a - 1,
      f = i(c),
      p = f - c;
    for (; u > f && d > p;) (l.push({ t: 0, s: e[--u] }), d--);
    o ? l.push({ t: 2, s: t[--d] }) : l.push({ t: 1, s: e[--u] });
  }
  for (; u > 0 && d > 0;) (l.push({ t: 0, s: e[--u] }), d--);
  return l.reverse();
}
function s(e, t) {
  let n = e.match(i) ?? [],
    r = t.match(i) ?? [],
    s = 0;
  for (; s < n.length && s < r.length && n[s] === r[s];) s++;
  let c = 0;
  for (; c < n.length - s && c < r.length - s && n[n.length - 1 - c] === r[r.length - 1 - c];) c++;
  let l = n.slice(s, n.length - c),
    u = r.slice(s, r.length - c),
    d = l.length,
    f = u.length,
    p = n.slice(0, s).map((e) => ({ t: 0, s: e }));
  if (d * f > 4e6) {
    let e = o(l, u);
    e ? p.push(...e) : (l.forEach((e) => p.push({ t: 1, s: e })), u.forEach((e) => p.push({ t: 2, s: e })));
  } else {
    let e = f + 1,
      t = new Uint16Array((d + 1) * e);
    for (let n = d - 1; n >= 0; n--)
      for (let r = f - 1; r >= 0; r--)
        t[n * e + r] =
          l[n] === u[r] ? t[(n + 1) * e + r + 1] + 1 : Math.max(t[(n + 1) * e + r], t[n * e + r + 1]);
    let n = 0,
      r = 0;
    for (; n < d && r < f;)
      l[n] === u[r]
        ? (p.push({ t: 0, s: l[n] }), n++, r++)
        : t[(n + 1) * e + r] >= t[n * e + r + 1]
          ? p.push({ t: 1, s: l[n++] })
          : p.push({ t: 2, s: u[r++] });
    for (; n < d;) p.push({ t: 1, s: l[n++] });
    for (; r < f;) p.push({ t: 2, s: u[r++] });
  }
  n.slice(n.length - c).forEach((e) => p.push({ t: 0, s: e }));
  for (let e = 0; e < p.length; e++) {
    if (p[e].t === 0 || (e > 0 && p[e - 1].t !== 0)) continue;
    let t = p[e].t,
      n = e;
    for (; n < p.length && p[n].t === t;) n++;
    if (!(n < p.length && p[n].t !== 0)) {
      for (; n < p.length && p[n].t === 0 && p[n].s === p[e].s && a(p[e].s);)
        ((p[n] = { t, s: p[n].s }), (p[e] = { t: 0, s: p[e].s }), e++, n++);
      e = n - 1;
    }
  }
  let m = [];
  for (let e of p) {
    let t = m[m.length - 1];
    if (e.t === 0) t?.type === `equal` ? (t.text += e.s) : m.push({ type: `equal`, text: e.s });
    else {
      t?.type !== `change` && m.push({ type: `change`, remove: ``, insert: `` });
      let n = m[m.length - 1];
      e.t === 1 ? (n.remove += e.s) : (n.insert += e.s);
    }
  }
  let h = [];
  for (let e = 0; e < m.length; e++) {
    let t = m[e],
      n = h[h.length - 1],
      r = m[e + 1];
    if (t.type === `equal` && a(t.text) && n?.type === `change` && r?.type === `change`) {
      ((n.remove += t.text + r.remove), (n.insert += t.text + r.insert), e++);
      continue;
    }
    h.push({ ...t });
  }
  let g = [],
    _ = (e) => {
      if (!e) return;
      let t = g[g.length - 1];
      t?.type === `equal` ? (t.text += e) : g.push({ type: `equal`, text: e });
    };
  for (let e of h) {
    if (e.type === `equal`) {
      _(e.text);
      continue;
    }
    let { remove: t, insert: n } = e,
      r = ``,
      i = ``;
    if (t && n) {
      let e = t.match(/^\s+/)?.[0] ?? ``;
      e &&
        n.startsWith(e) &&
        e.length < t.length &&
        e.length < n.length &&
        ((r = e), (t = t.slice(e.length)), (n = n.slice(e.length)));
      let a = t.match(/\s+$/)?.[0] ?? ``;
      a &&
        n.endsWith(a) &&
        a.length < t.length &&
        a.length < n.length &&
        ((i = a), (t = t.slice(0, -a.length)), (n = n.slice(0, -a.length)));
    }
    (_(r), g.push({ type: `change`, remove: t, insert: n }), _(i));
  }
  return g;
}
var c = (e) => (typeof e == `string` ? e : e == null ? `` : String(e)),
  l = (e) =>
    (Array.isArray(e) ? e : []).flatMap((e) => {
      if (e?.type === `equal`) return c(e.text) ? [{ type: `equal`, text: c(e.text) }] : [];
      if (e?.type === `change`) {
        let t = c(e.remove),
          n = c(e.insert);
        return t || n ? [{ type: `change`, remove: t, insert: n }] : [];
      }
      return [];
    }),
  u = (e) => e.toLocaleString(`en-US`),
  d = (e) => `${e.toLocaleString(`en-US`)} suggestion${e === 1 ? `` : `s`}`,
  f = (e) => `“${e.trim()}”`,
  p = (e) =>
    e.remove.trim() && e.insert.trim()
      ? `replace ${f(e.remove)} with ${f(e.insert)}`
      : e.insert.trim()
        ? `add ${f(e.insert)}`
        : `remove ${f(e.remove)}`;
function m({
  original: e = ``,
  suggested: t = ``,
  changes: i,
  onChange: a,
  onDone: o,
  label: c,
  ref: f,
  className: m,
}) {
  let g = (0, n.useMemo)(() => (i ? l(i) : s(String(e ?? ``), String(t ?? ``))), [i, e, t]),
    _ = (0, n.useMemo)(() => JSON.stringify(g), [g]),
    v = (0, n.useMemo)(() => {
      let e = [];
      return (
        g.forEach((t, n) => {
          t.type === `change` && e.push({ seg: n, remove: t.remove, insert: t.insert });
        }),
        e
      );
    }, [g]),
    [y, b] = (0, n.useState)({}),
    [x, S] = (0, n.useState)([]),
    [C, w] = (0, n.useState)(null),
    [T, E] = (0, n.useState)(null),
    [D, O] = (0, n.useState)(null),
    [ee, k] = (0, n.useState)(``),
    [A, j] = (0, n.useState)(_);
  A !== _ && (j(_), b({}), S([]), w(null), E(null), O(null));
  let M = (0, n.useRef)(null),
    N = (0, n.useRef)(null),
    P = (0, n.useRef)(null),
    F = (0, n.useRef)(null),
    I = (0, n.useRef)([]),
    L = (0, n.useRef)(0),
    R = (0, n.useRef)(null),
    z = (0, n.useRef)(null),
    B = (0, n.useRef)({ onChange: a, onDone: o });
  B.current = { onChange: a, onDone: o };
  let V = v.map((e, t) => t).filter((e) => !y[e]),
    H = v.length > 0 && V.length === 0,
    U = (e) => {
      let t = -1;
      return g
        .map((n) => (n.type === `equal` ? n.text : (t++, e[t] === `accepted` ? n.insert : n.remove)))
        .join(``);
    },
    W = (0, n.useRef)({ decisions: y, history: x, list: v, pending: V });
  W.current = { decisions: y, history: x, list: v, pending: V };
  let G = (e, t, n = !1) => {
      let { decisions: r, list: i } = W.current,
        a = e.filter((e) => e >= 0 && e < i.length && !r[e]);
      if (!a.length) return;
      let o = { ...r };
      a.forEach((e) => (o[e] = t));
      let s = i.length - Object.keys(o).length;
      (b(o), S((e) => [...e, a]), O(null), (z.current = Math.max(...a)));
      let c = t === `accepted` ? `Accepted` : `Rejected`,
        l = a.length === 1 ? p(i[a[0]]).replace(/^./, (e) => e.toUpperCase()) : `${u(a.length)} suggestions`;
      if ((k(`${c}: ${l}. ${s ? `${d(s)} left.` : `All changes reviewed.`}`), n)) {
        let e = Math.max(...a),
          t = i.map((e, t) => t).filter((e) => !o[e]);
        R.current = s ? (t.find((t) => t > e) ?? t[0]) : `undo`;
      }
      let f = U(o);
      (B.current.onChange?.(f), s || B.current.onDone?.(f));
    },
    K = (e = !1) => {
      let { decisions: t, history: n } = W.current,
        r = n[n.length - 1];
      if (!r) return;
      let i = { ...t };
      (r.forEach((e) => delete i[e]),
        b(i),
        S(n.slice(0, -1)),
        k(`Undone. ${d(W.current.list.length - Object.keys(i).length)} left.`),
        e && (R.current = Math.min(...r)),
        B.current.onChange?.(U(i)));
    },
    te = () => {
      (b({}), S([]), O(null), w(null), k(``), (z.current = null));
    };
  ((0, n.useImperativeHandle)(f, () => ({
    highlight: (e) => O(e),
    accept: (e) => G([e], `accepted`),
    reject: (e) => G([e], `rejected`),
    acceptAll: () => G(W.current.pending, `accepted`),
    rejectAll: () => G(W.current.pending, `rejected`),
    undo: () => K(),
    reset: te,
  })),
    (0, n.useLayoutEffect)(() => {
      let e = R.current;
      e !== null && ((R.current = null), e === `undo` ? F.current?.focus() : I.current[e]?.focus());
    }, [y]));
  let q = [C, T, D].find((e) => e !== null && !y[e] && e < v.length) ?? null;
  (0, n.useEffect)(() => {
    q !== null && (z.current = q);
  }, [q]);
  let J = (e) => {
    let t = W.current.pending;
    if (!t.length) return;
    let n = q ?? z.current ?? (e === 1 ? -1 : 1 / 0),
      r = e === 1 ? (t.find((e) => e > n) ?? t[0]) : ([...t].reverse().find((e) => e < n) ?? t[t.length - 1]);
    (window.clearTimeout(L.current), w(null), O(r), (z.current = r));
    let i = I.current[r];
    if (!i) return;
    T !== null && i.focus({ preventScroll: !0 });
    let a = window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
    i.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: a ? `auto` : `smooth` });
  };
  (0, n.useEffect)(() => {
    if (D === null) return;
    let e = (e) => {
      M.current?.contains(e.target) || O(null);
    };
    return (
      document.addEventListener(`pointerdown`, e),
      () => document.removeEventListener(`pointerdown`, e)
    );
  }, [D]);
  let [Y, ne] = (0, n.useState)(null),
    X = (0, n.useRef)(!1);
  (0, n.useLayoutEffect)(() => {
    let e = () => {
      let e = N.current,
        t = P.current,
        n = q === null ? null : I.current[q];
      if (!e || !t || !n) return;
      let r = e.getBoundingClientRect(),
        i = r.width ? e.offsetWidth / r.width : 1,
        a = n.getClientRects()[0] ?? n.getBoundingClientRect(),
        o = t.offsetWidth,
        s = t.offsetHeight,
        c = (a.left - r.left + a.width / 2) * i,
        l = Math.min(Math.max(c - o / 2, 8), Math.max(8, e.offsetWidth - o - 8)),
        u = (a.top - r.top) * i - s - 6,
        d = u < 4,
        f = d ? (a.bottom - r.top) * i + 6 : u;
      (ne({ left: l, top: f, snap: !X.current, below: d }), (X.current = !0));
    };
    if (q === null) {
      X.current = !1;
      return;
    }
    e();
    let t = new ResizeObserver(e);
    return (N.current && t.observe(N.current), () => t.disconnect());
  }, [q, y]);
  let Z = (e) => {
      (window.clearTimeout(L.current), w(e));
    },
    Q = () => {
      (window.clearTimeout(L.current), (L.current = window.setTimeout(() => w(null), 140)));
    };
  (0, n.useEffect)(() => () => window.clearTimeout(L.current), []);
  let re = (e, t) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      let n = e.key.toLowerCase();
      n === `y` || n === `enter`
        ? (e.preventDefault(), G([t], `accepted`, !0))
        : n === `n` || n === `backspace` || n === `delete`
          ? (e.preventDefault(), G([t], `rejected`, !0))
          : n === `escape` && e.currentTarget.blur();
    },
    ie = v.length,
    $ = -1;
  return (0, r.jsxs)(`div`, {
    ref: M,
    className: [`ui-df`, m].filter(Boolean).join(` `),
    "data-done": H || void 0,
    onKeyDown: (e) => {
      e.key === `Escape` && D !== null && O(null);
    },
    children: [
      (0, r.jsx)(`style`, { href: `ui-inline-diff`, precedence: `default`, children: h }),
      c &&
        (0, r.jsxs)(`div`, {
          className: `ui-df__label`,
          children: [
            (0, r.jsxs)(`svg`, {
              viewBox: `0 0 16 16`,
              "aria-hidden": `true`,
              children: [
                (0, r.jsx)(`path`, {
                  d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z`,
                }),
                (0, r.jsx)(`path`, {
                  d: `M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z`,
                }),
              ],
            }),
            (0, r.jsx)(`span`, { dir: `auto`, title: c, children: c }),
          ],
        }),
      (0, r.jsxs)(`div`, {
        ref: N,
        className: `ui-df__card`,
        children: [
          (0, r.jsx)(`div`, {
            className: `ui-df__head`,
            children: (0, r.jsxs)(`div`, {
              className: `ui-df__bar`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-df__layer`,
                  "data-show": !H || void 0,
                  inert: H,
                  "aria-hidden": H || void 0,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-df__count`,
                      children: [
                        (0, r.jsx)(`span`, { className: `ui-df__num`, children: u(V.length) }),
                        (0, r.jsx)(`span`, {
                          className: `ui-df__word`,
                          children: V.length === 1 ? `suggestion` : `suggestions`,
                        }),
                      ],
                    }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-df__actions`,
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-df__nav`,
                          onMouseDown: (e) => e.preventDefault(),
                          children: [
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-df__icon`,
                              onClick: () => J(-1),
                              disabled: !V.length,
                              "aria-label": `Previous suggestion`,
                              children: (0, r.jsx)(`svg`, {
                                viewBox: `0 0 16 16`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(`path`, { d: `M10 12.5 5.5 8 10 3.5` }),
                              }),
                            }),
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-df__icon`,
                              onClick: () => J(1),
                              disabled: !V.length,
                              "aria-label": `Next suggestion`,
                              children: (0, r.jsx)(`svg`, {
                                viewBox: `0 0 16 16`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(`path`, { d: `M6 3.5 10.5 8 6 12.5` }),
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(`button`, {
                          type: `button`,
                          className: `ui-df__btn`,
                          onClick: () => G(V, `rejected`),
                          disabled: !V.length,
                          children: `Reject all`,
                        }),
                        (0, r.jsx)(`button`, {
                          type: `button`,
                          className: `ui-df__btn ui-df__btn--primary`,
                          onClick: () => G(V, `accepted`),
                          disabled: !V.length,
                          children: `Accept all`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`div`, {
                  className: `ui-df__layer`,
                  "data-show": H || void 0,
                  inert: !H,
                  "aria-hidden": !H || void 0,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-df__count ui-df__count--done`,
                      children: [
                        (0, r.jsx)(`svg`, {
                          className: `ui-df__ok`,
                          viewBox: `0 0 16 16`,
                          "aria-hidden": `true`,
                          children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5`, pathLength: 1 }),
                        }),
                        `All changes reviewed`,
                      ],
                    }),
                    (0, r.jsxs)(`button`, {
                      ref: F,
                      type: `button`,
                      className: `ui-df__btn`,
                      onClick: () => K(!0),
                      disabled: !x.length,
                      children: [
                        (0, r.jsxs)(`svg`, {
                          viewBox: `0 0 16 16`,
                          "aria-hidden": `true`,
                          children: [
                            (0, r.jsx)(`path`, { d: `M5.5 4 2.75 6.75 5.5 9.5` }),
                            (0, r.jsx)(`path`, { d: `M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5` }),
                          ],
                        }),
                        `Undo`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, r.jsx)(`div`, {
            className: `ui-df__body`,
            children: (0, r.jsx)(`p`, {
              className: `ui-df__text`,
              dir: `auto`,
              children: g.map((e, t) => {
                if (e.type === `equal`) return (0, r.jsx)(`span`, { children: e.text }, t);
                $++;
                let n = $,
                  i = y[n] ?? `pending`,
                  a = i === `pending`;
                return (0, r.jsxs)(
                  `span`,
                  {
                    ref: (e) => {
                      I.current[n] = e;
                    },
                    className: `ui-df__chg`,
                    "data-state": i,
                    "data-active": q === n || void 0,
                    tabIndex: a ? 0 : void 0,
                    role: a ? `button` : void 0,
                    "aria-label": a
                      ? `Suggestion ${u(n + 1)} of ${u(ie)}: ${p(e)}. Press Y to accept, N to reject`
                      : void 0,
                    onKeyDown: a ? (e) => re(e, n) : void 0,
                    onFocus: () => E(n),
                    onBlur: () => E((e) => (e === n ? null : e)),
                    onMouseEnter: () => Z(n),
                    onMouseLeave: Q,
                    children: [
                      e.remove &&
                        (0, r.jsx)(`del`, {
                          className: `ui-df__del`,
                          "aria-hidden": i === `accepted` || void 0,
                          children: e.remove,
                        }),
                      e.insert &&
                        (0, r.jsx)(`ins`, {
                          className: `ui-df__ins`,
                          "aria-hidden": i === `rejected` || void 0,
                          children: e.insert,
                        }),
                    ],
                  },
                  t,
                );
              }),
            }),
          }),
          (0, r.jsxs)(`div`, {
            ref: P,
            className: `ui-df__pop`,
            "data-open": q !== null || void 0,
            "data-snap": Y?.snap || void 0,
            "data-below": Y?.below || void 0,
            style: Y ? { left: Y.left, top: Y.top } : void 0,
            role: `group`,
            "aria-label": `Review suggestion`,
            "aria-hidden": q === null || void 0,
            onMouseEnter: () => q !== null && Z(q),
            onMouseLeave: Q,
            onMouseDown: (e) => e.preventDefault(),
            children: [
              (0, r.jsxs)(`button`, {
                type: `button`,
                tabIndex: -1,
                className: `ui-df__pbtn`,
                "aria-label": `Accept suggestion`,
                onClick: () => q !== null && G([q], `accepted`, T === q),
                children: [
                  (0, r.jsx)(`svg`, {
                    viewBox: `0 0 16 16`,
                    "aria-hidden": `true`,
                    children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5` }),
                  }),
                  `Accept`,
                  (0, r.jsx)(`kbd`, { children: `Y` }),
                ],
              }),
              (0, r.jsx)(`span`, { className: `ui-df__sep`, "aria-hidden": `true` }),
              (0, r.jsxs)(`button`, {
                type: `button`,
                tabIndex: -1,
                className: `ui-df__pbtn`,
                "aria-label": `Reject suggestion`,
                onClick: () => q !== null && G([q], `rejected`, T === q),
                children: [
                  (0, r.jsx)(`svg`, {
                    viewBox: `0 0 16 16`,
                    "aria-hidden": `true`,
                    children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }),
                  }),
                  `Reject`,
                  (0, r.jsx)(`kbd`, { children: `N` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-df__sr`, role: `status`, "aria-live": `polite`, children: ee }),
    ],
  });
}
var h = `.ui-df{--ui-df-ink: #171717;--ui-df-text: #525252;--ui-df-muted: #8a8a8a;--ui-df-tray: #f0f0f0;--ui-df-line: #ececec;--ui-df-bg: #ffffff;--ui-df-soft: #f5f5f5;--ui-df-add: rgba(34, 160, 90, 0.1);--ui-df-add-strong: rgba(34, 160, 90, 0.18);--ui-df-add-ink: #18794e;--ui-df-del: rgba(220, 60, 60, 0.08);--ui-df-del-strong: rgba(220, 60, 60, 0.15);--ui-df-del-ink: #b42318;--ui-df-strike: rgba(180, 35, 24, 0.55);--ui-df-ok: #1f8a4c;--ui-df-pop: #171717;--ui-df-pop-ink: #ffffff;--ui-df-pop-soft: rgba(255, 255, 255, 0.14);--ui-df-pop-kbd: rgba(255, 255, 255, 0.55);--ui-df-primary: #171717;--ui-df-primary-ink: #ffffff;--ui-df-focus: rgba(23, 23, 23, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-df-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-df-tray);color: var(--ui-df-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;-webkit-font-smoothing: antialiased;text-align: left}.ui-df *, .ui-df *::before, .ui-df *::after{box-sizing: border-box}.ui-df__label{display: flex;align-items: center;gap: 6px;min-width: 0;padding: 6px 8px 4px;color: var(--ui-df-muted);font-size: 12.5px;line-height: 1.3;letter-spacing: -0.003em}.ui-df__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-df__label svg{flex: none;width: 13px;height: 13px;fill: currentColor}.ui-df__card{position: relative;min-width: 0;border-radius: 16px;background: var(--ui-df-bg);box-shadow: 0 0 0 1px var(--ui-df-line), var(--ui-df-shadow)}.ui-df__head{padding: 10px 10px 10px 16px;border-bottom: 1px solid var(--ui-df-line)}.ui-df__bar{display: grid}.ui-df__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-df-ease), filter 260ms ease, visibility 0s 420ms}.ui-df__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-df-ease) 80ms, filter 320ms ease 80ms, visibility 0s}.ui-df__card{container: ui-df-card / inline-size}@container ui-df-card (max-width: 400px){.ui-df__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-df__count{display: inline-flex;align-items: center;gap: 7px;color: var(--ui-df-ink);font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap}.ui-df__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 999px;background: var(--ui-df-add);color: var(--ui-df-add-ink);font-size: 11.5px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-df__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-df-ok);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-df[data-done] .ui-df__ok{animation: ui-df-draw 420ms var(--ui-df-ease) 220ms forwards}.ui-df__actions{display: inline-flex;align-items: center;gap: 6px;margin-left: auto}.ui-df__nav{display: inline-flex;gap: 2px;margin-right: 2px}.ui-df__btn, .ui-df__icon{appearance: none;display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 30px;margin: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-df-ink);font: inherit;font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap;cursor: pointer;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-df-ease);-webkit-tap-highlight-color: transparent}.ui-df__btn{padding: 0 11px;box-shadow: inset 0 0 0 1px var(--ui-df-line)}.ui-df__icon{width: 28px;color: var(--ui-df-muted)}.ui-df__btn svg, .ui-df__icon svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-df__btn:hover:not(:disabled){background: var(--ui-df-soft)}.ui-df__icon:hover:not(:disabled){background: var(--ui-df-soft);color: var(--ui-df-ink)}.ui-df__btn--primary{background: var(--ui-df-primary);color: var(--ui-df-primary-ink);box-shadow: none}.ui-df__btn--primary:hover:not(:disabled){background: var(--ui-df-primary);opacity: 0.88}.ui-df__btn:active:not(:disabled), .ui-df__icon:active:not(:disabled){transform: scale(0.97)}.ui-df__btn:disabled, .ui-df__icon:disabled{opacity: 0.4;cursor: default}.ui-df__btn:focus-visible, .ui-df__icon:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__body{padding: 16px 18px 18px}.ui-df__text{margin: 0;color: var(--ui-df-text);font-size: 15px;line-height: 1.65;letter-spacing: -0.006em;text-align: start;white-space: pre-line;overflow-wrap: anywhere}.ui-df__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 24px}.ui-df__chg:not([data-state="pending"]){cursor: auto}.ui-df__chg:focus{outline: none}.ui-df__chg:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__del, .ui-df__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-df-ease), padding 460ms var(--ui-df-ease), margin 460ms var(--ui-df-ease), opacity 300ms ease}.ui-df__del{background: var(--ui-df-del);color: var(--ui-df-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-df-strike);text-decoration-thickness: 1.2px}.ui-df__ins{background: var(--ui-df-add);color: var(--ui-df-add-ink);text-decoration: none}.ui-df__del + .ui-df__ins{margin-left: 3px}.ui-df__chg[data-active] .ui-df__del{background: var(--ui-df-del-strong)}.ui-df__chg[data-active] .ui-df__ins{background: var(--ui-df-add-strong)}.ui-df__chg[data-state="accepted"] .ui-df__del, .ui-df__chg[data-state="rejected"] .ui-df__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-df__chg[data-state="accepted"] .ui-df__ins, .ui-df__chg[data-state="rejected"] .ui-df__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-df__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 2px;padding: 3px;border-radius: 10px;background: var(--ui-df-pop);color: var(--ui-df-pop-ink);box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 180ms ease, transform 260ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s 260ms}.ui-df__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 180ms ease, transform 300ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s}.ui-df__pop[data-below]{transform-origin: 50% 0}.ui-df__pop[data-below]:not([data-open]){transform: translateY(-4px) scale(0.96)}.ui-df__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-df__pbtn{appearance: none;display: inline-flex;align-items: center;gap: 6px;height: 28px;margin: 0;padding: 0 8px 0 7px;border: 0;border-radius: 7px;background: transparent;color: inherit;font: inherit;font-size: 12.5px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;transition: background-color 140ms ease}.ui-df__pbtn:hover{background: var(--ui-df-pop-soft)}.ui-df__pbtn svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-df__pbtn kbd{display: inline-grid;place-items: center;min-width: 17px;height: 17px;padding: 0 4px;border-radius: 4px;background: var(--ui-df-pop-soft);color: var(--ui-df-pop-kbd);font: inherit;font-size: 10.5px;font-weight: 500}.ui-df__sep{width: 1px;height: 16px;background: var(--ui-df-pop-soft)}.ui-df__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-df-draw{to{stroke-dashoffset: 0}}@media (max-width: 400px){.ui-df__nav{display: none}.ui-df__head{padding-left: 14px}.ui-df__label{padding-left: 6px}.ui-df__body{padding: 14px 14px 16px}}@media (hover: none) and (pointer: coarse){.ui-df__pbtn kbd{display: none}.ui-df__pbtn{height: 34px;padding: 0 11px 0 9px}}@media (prefers-reduced-motion: reduce){.ui-df *, .ui-df *::before, .ui-df *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-df__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-df{--ui-df-ink: #ededed;--ui-df-text: #b4b4b8;--ui-df-muted: #8b8b92;--ui-df-tray: #111113;--ui-df-line: #2a2a2e;--ui-df-bg: #19191b;--ui-df-soft: #232326;--ui-df-add: rgba(60, 200, 120, 0.13);--ui-df-add-strong: rgba(60, 200, 120, 0.22);--ui-df-add-ink: #6ee7a8;--ui-df-del: rgba(240, 90, 90, 0.12);--ui-df-del-strong: rgba(240, 90, 90, 0.2);--ui-df-del-ink: #ff8a80;--ui-df-strike: rgba(255, 138, 128, 0.6);--ui-df-ok: #5fd68f;--ui-df-pop: #f4f4f5;--ui-df-pop-ink: #171717;--ui-df-pop-soft: rgba(0, 0, 0, 0.08);--ui-df-pop-kbd: rgba(0, 0, 0, 0.5);--ui-df-primary: #ededed;--ui-df-primary-ink: #19191b;--ui-df-focus: rgba(255, 255, 255, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)}`;
