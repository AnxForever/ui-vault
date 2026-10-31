/*
 * affectUI · review-center (Pro)
 * Implementation recovered from public bundle asset: demo-ocpQ0Pxs.js
 * Styles inlined in the module -> review-center.css (1 block(s))
 * Demo usage: review-center.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = {
    high: { label: `High risk`, rank: 0 },
    medium: { label: `Medium risk`, rank: 1 },
    low: { label: `Low risk`, rank: 2 },
  },
  a = [`Wrong info`, `Tone`, `Not allowed`, `Other`],
  o = 180,
  s = 300,
  c = 6e3,
  l = (e) => {
    let t = typeof e == `number` ? e : e.getTime();
    return Number.isFinite(t) ? t : 1 / 0;
  },
  u = (e) => {
    if (!Number.isFinite(e)) return ``;
    let t = Math.floor(Math.max(0, e) / 6e4);
    if (t < 1) return `now`;
    if (t < 60) return `${t}m`;
    let n = Math.floor(t / 60);
    return n < 24 ? (t % 60 ? `${n}h ${t % 60}m` : `${n}h`) : `${Math.floor(n / 24)}d`;
  },
  d = (e) => (e === void 0 ? [] : typeof e == `string` ? [e] : e),
  f = (e) =>
    d(e)
      .map((e) => (typeof e == `string` ? e : e.text))
      .join(``),
  p = (e) => d(e).filter((e) => typeof e != `string`).length,
  ee = (e) => (Number.isFinite(e) ? `${Math.round(Math.max(0, Math.min(1, e)) * 100)}%` : `unknown`),
  te = (e) => (e.match(/[\p{L}\p{N}]/u)?.[0] ?? `?`).toUpperCase(),
  m = new Intl.NumberFormat(`en`),
  ne = (e, t) => {
    let n = 0;
    for (; n < e.length && n < t.length && e[n] === t[n];) n++;
    let r = 0;
    for (; r < e.length - n && r < t.length - n && e[e.length - 1 - r] === t[t.length - 1 - r];) r++;
    return [t.slice(0, n), t.slice(n, t.length - r), t.slice(t.length - r)];
  },
  re = (e) => {
    let t = [[]];
    for (let n of e) {
      if (typeof n != `string`) {
        t[t.length - 1].push(n);
        continue;
      }
      n.split(
        `
`,
      ).forEach((e, n) => {
        (n && t.push([]), e && t[t.length - 1].push(e));
      });
    }
    return t;
  },
  ie = (e) => [
    ...(e.fields ?? []).map((e) => e.value),
    e.body,
    ...(e.files ?? []).map((e) => e.diff),
    ...(e.steps ?? []).flatMap((e) => [e.title, e.detail]),
  ],
  ae =
    /(\/\/.*|--\s.*|"[^"]*"|'[^']*'|`[^`]*`|\b(?:const|let|var|return|if|else|await|async|function|export|import|from|new|throw|for|of|in|try|catch|null|undefined|true|false|SELECT|FROM|WHERE|UPDATE|SET|ALTER|TABLE|ADD|DROP|COLUMN|CREATE|INDEX|ON|NOT|NULL|DEFAULT|BEGIN|COMMIT|AND|IS)\b|\b[a-z_]\w*(?=\()|\b[A-Z][A-Za-z]+\b)/,
  oe =
    /^(?:const|let|var|return|if|else|await|async|function|export|import|from|new|throw|for|of|in|try|catch|null|undefined|true|false|[A-Z]{2,})$/,
  se = (e) =>
    e.split(ae).map((e, t) => {
      if (t % 2 == 0 || !e) return e;
      let n = /^(\/\/|--)/.test(e)
        ? `com`
        : /^["'`]/.test(e)
          ? `str`
          : oe.test(e)
            ? `kw`
            : /^[A-Z]/.test(e)
              ? `type`
              : `fn`;
      return (0, r.jsx)(`span`, { "data-tok": n, children: e }, t);
    }),
  h = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  g = () =>
    (0, r.jsx)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M5 14L8.5 17.5L19 6.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  _ = () =>
    (0, r.jsx)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M18 6L6.00081 17.9992M17.9992 18L6 6.00085`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  ce = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `1.6`,
        }),
        (0, r.jsx)(`path`, {
          d: `M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.6`,
        }),
      ],
    }),
  le = () =>
    (0, r.jsx)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  ue = () =>
    (0, r.jsxs)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 9V13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 16.8V17`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.4`,
        }),
      ],
    }),
  de = () =>
    (0, r.jsx)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.79275 3 5.97733 4.67765 4.38341 7.20327M3.29339 3.00076L3.46556 5.05452C3.58958 6.53384 3.65159 7.27349 4.13359 7.68914C4.61559 8.10479 5.32673 8.03185 6.74899 7.88595L8.79339 7.67625`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  fe = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `2`,
        }),
      ],
    }),
  pe = ({ size: e = 16 }) =>
    (0, r.jsxs)(`svg`, {
      width: e,
      height: e,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
        }),
        (0, r.jsx)(`path`, {
          d: `M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.6`,
        }),
      ],
    }),
  me = (e) =>
    (0, r.jsx)(`span`, {
      className: `ui-rvc__avatar`,
      "data-logo": e.icon ? `` : void 0,
      "aria-hidden": `true`,
      children: e.icon ?? te(e.agent),
    }),
  he = (0, n.memo)(function ({
    it: e,
    ghost: t,
    current: n,
    focusable: a,
    enter: o,
    wait: s,
    sla: c,
    skipped: l,
    onPick: u,
    setEl: d,
  }) {
    let f = t?.result?.decision;
    return (0, r.jsx)(`li`, {
      className: `ui-rvc__item`,
      "data-enter": o?.kind,
      "data-leaving": t ? `` : void 0,
      "data-decision": f,
      style: { "--d": `${t ? t.delay : (o?.delay ?? 0)}ms` },
      children: (0, r.jsxs)(`button`, {
        ref: t ? void 0 : (t) => d(e.id, t),
        type: `button`,
        className: `ui-rvc__row`,
        "data-risk": e.risk,
        "aria-current": n ? `true` : void 0,
        "aria-label": `${e.title}. ${e.type}, ${i[e.risk].label.toLowerCase()}, ${ee(e.confidence)} confidence${s ? (s === `now` ? `, just in` : `, waiting ${s}`) : ``}${l ? `, skipped` : ``}`,
        tabIndex: a ? 0 : -1,
        onClick: () => !t && u(e.id),
        children: [
          me(e),
          (0, r.jsxs)(`span`, {
            className: `ui-rvc__row-main`,
            children: [
              (0, r.jsxs)(`span`, {
                className: `ui-rvc__row-top`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-rvc__row-title`,
                    dir: `auto`,
                    title: e.title,
                    children: e.title,
                  }),
                  f
                    ? (0, r.jsx)(`span`, {
                        className: `ui-rvc__row-done`,
                        "data-decision": f,
                        "aria-hidden": `true`,
                        children: f === `rejected` ? (0, r.jsx)(_, {}) : (0, r.jsx)(g, {}),
                      })
                    : (0, r.jsx)(`span`, { className: `ui-rvc__wait`, "data-sla": c, children: s }),
                ],
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-rvc__row-meta`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-rvc__tag`,
                    dir: `auto`,
                    title: e.type,
                    children: e.type,
                  }),
                  l && (0, r.jsx)(`span`, { className: `ui-rvc__skipped`, children: `· skipped` }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  });
function ge({
  items: e,
  onDecide: t,
  onUndo: ee,
  onSkip: te,
  reviewed: ae = 0,
  total: oe,
  sla: ge = 18e5,
  now: v,
  lowConfidence: ve = 0.7,
  reasons: ye = a,
  order: y = `risk`,
  filter: b,
  defaultFilter: be = `all`,
  onFilterChange: xe,
  title: x = `Review center`,
  ref: S,
  className: C,
}) {
  let w = (0, n.useId)(),
    T = (0, n.useRef)(null),
    E = (0, n.useRef)(null),
    D = (0, n.useRef)(null),
    Se = (0, n.useRef)(null),
    Ce = (0, n.useRef)(null),
    O = (0, n.useRef)(null),
    we = (0, n.useRef)(null),
    k = (0, n.useRef)(new Map()),
    Te = (0, n.useRef)(new Map()),
    Ee = (0, n.useRef)([]),
    De = (e, t) => {
      Ee.current.push(window.setTimeout(e, t));
    };
  (0, n.useEffect)(() => () => Ee.current.forEach((e) => window.clearTimeout(e)), []);
  let [Oe, ke] = (0, n.useState)(() => Date.now());
  (0, n.useEffect)(() => {
    if (v !== void 0) return;
    let e = window.setInterval(() => ke(Date.now()), 1e4);
    return () => window.clearInterval(e);
  }, [v]);
  let Ae = v ?? Oe,
    je = (e) => {
      let t = Ae - l(e.createdAt);
      return t >= ge ? `over` : t >= ge * 0.75 ? `near` : void 0;
    },
    [Me, Ne] = (0, n.useState)(be),
    Pe = b ?? Me,
    [A, Fe] = (0, n.useState)({}),
    [Ie, Le] = (0, n.useState)([]),
    [Re, ze] = (0, n.useState)({}),
    [Be, Ve] = (0, n.useState)(null),
    [j, M] = (0, n.useState)(`view`),
    [N, P] = (0, n.useState)({}),
    [He, F] = (0, n.useState)(null),
    [Ue, We] = (0, n.useState)(null),
    [I, Ge] = (0, n.useState)(null),
    [Ke, qe] = (0, n.useState)(null),
    [L, Je] = (0, n.useState)(null),
    [Ye, Xe] = (0, n.useState)(``),
    R = (
      y === `given`
        ? e
        : [...e].sort(
            (e, t) => (y === `risk` ? i[e.risk].rank - i[t.risk].rank : 0) || l(e.createdAt) - l(t.createdAt),
          )
    ).filter((e) => !A[e.id]),
    z = (e, t) => t === `all` || (t === `high` ? e.risk === `high` : e.confidence < ve),
    B = R.filter((e) => z(e, Pe)),
    Ze = new Set(B.map((e) => e.id)),
    Qe = {
      all: R.length,
      high: R.filter((e) => z(e, `high`)).length,
      unsure: R.filter((e) => z(e, `unsure`)).length,
    },
    V = ae + Object.keys(A).length,
    H = Math.max(oe ?? V + R.length, V),
    $e = R.reduce((e, t) => (!e || l(t.createdAt) < l(e.createdAt) ? t : e), void 0),
    et = (0, n.useRef)(0),
    tt = B.findIndex((e) => e.id === Be),
    U = tt >= 0 ? tt : Math.min(et.current, B.length - 1),
    W = U >= 0 ? B[U] : void 0,
    nt = W ? ie(W).reduce((e, t) => e + p(t), 0) : 0,
    G = (0, n.useRef)(`first`),
    rt = (0, n.useRef)({ mode: `first` });
  (W?.id !== rt.current.id && ((rt.current = { id: W?.id, mode: G.current ?? `down` }), (G.current = null)),
    (0, n.useLayoutEffect)(() => {
      ((et.current = Math.max(0, U)), W && W.id !== Be && Ve(W.id));
    }),
    (0, n.useLayoutEffect)(() => {
      (M(`view`), F(null), We(null), P({}), E.current && (E.current.scrollTop = 0));
    }, [W?.id]));
  let [it, at] = (0, n.useState)([]),
    ot = (0, n.useRef)([]);
  (0, n.useLayoutEffect)(() => {
    let e = ot.current;
    ot.current = B;
    let t = e.map((e, t) => ({ item: e, i: t })).filter((e) => !Ze.has(e.item.id));
    if (!t.length || h()) return;
    let n = performance.now(),
      r = t.map((e) => ({
        item: e.item,
        index: e.i,
        result: A[e.item.id]?.result,
        delay: A[e.item.id]?.delay ?? 0,
        key: n,
      }));
    at((e) => [...e.filter((e) => !r.some((t) => t.item.id === e.item.id)), ...r]);
    let i = Math.max(...r.map((e) => e.delay + (e.result ? o : 0) + s));
    De(() => at((e) => e.filter((e) => e.key !== n)), i + 80);
  });
  let st = B.map((e) => ({ item: e }));
  for (let e of [...it].filter((e) => !Ze.has(e.item.id)).sort((e, t) => e.index - t.index))
    st.splice(Math.min(e.index, st.length), 0, { item: e.item, ghost: e });
  let ct = (0, n.useRef)(new Set()),
    lt = (0, n.useRef)(!1),
    K = (0, n.useRef)(new Map()),
    ut = 0;
  for (let e of B) {
    if (K.current.has(e.id)) continue;
    let t = lt.current ? (ct.current.has(e.id) ? `in` : `new`) : `first`;
    K.current.set(e.id, { kind: t, delay: Math.min(420, t === `first` ? 80 + ut++ * 50 : ut++ * 30) });
  }
  (0, n.useLayoutEffect)(() => {
    lt.current = !0;
    for (let t of e) ct.current.add(t.id);
    for (let e of [...K.current.keys()]) Ze.has(e) || K.current.delete(e);
  });
  let dt = (0, n.useRef)(null),
    ft = () => {
      let e = document.activeElement;
      dt.current = O.current?.contains(e) ? `row` : T.current?.contains(e) ? `root` : null;
    };
  ((0, n.useLayoutEffect)(() => {
    let e = dt.current;
    if (!e) return;
    dt.current = null;
    let t = T.current,
      n = document.activeElement;
    e === `row` && W
      ? k.current.get(W.id)?.focus({ preventScroll: !0 })
      : (!t?.contains(n) || n === document.body) && t?.focus({ preventScroll: !0 });
  }),
    (0, n.useLayoutEffect)(() => {
      let e = O.current,
        t = W ? k.current.get(W.id)?.parentElement : void 0;
      if (!e || !t || e.scrollHeight <= e.clientHeight) return;
      let n = t.offsetTop - 6,
        r = t.offsetTop + t.offsetHeight + 6;
      n < e.scrollTop
        ? e.scrollTo({ top: n, behavior: h() ? `auto` : `smooth` })
        : r > e.scrollTop + e.clientHeight &&
          e.scrollTo({ top: r - e.clientHeight, behavior: h() ? `auto` : `smooth` });
    }, [W?.id]));
  let q = (e) => {
      (qe(e), De(() => qe((t) => (t === e ? null : t)), 220));
    },
    pt = (e) => Xe(e),
    mt = (0, n.useRef)(null),
    ht = (e, n) => {
      if (!e.length) return;
      ft();
      let r = {};
      if (
        (e.forEach((e) => (r[e.id] = { item: e, result: n, delay: 0 })),
        Fe((e) => ({ ...e, ...r })),
        Le((t) => [...t.slice(-19), e.map((e) => e.id)]),
        W && r[W.id] && !h())
      ) {
        let e = performance.now(),
          t = r[W.id].delay;
        ((G.current = `decide`),
          Ge({ item: W, result: n, draft: { ...N }, delay: t, key: e, dir: n.decision }),
          De(() => Ge((t) => (t?.key === e ? null : t)), t + o + s + 100));
      } else W && r[W.id] && (G.current = `fade`);
      (M(`view`), F(null));
      let i = n.decision === `approved` ? `Approved` : `Rejected`,
        a = n.text !== void 0 || n.fields !== void 0,
        l =
          e.length > 1
            ? `${e.length} approved`
            : `${i}${a ? ` with edits` : n.reason ? ` · ${n.reason}` : ``}`,
        u = performance.now();
      (Je({ text: l, decision: n.decision, key: u }),
        De(() => Je((e) => (e?.key === u ? null : e)), c),
        pt(
          `${e.length > 1 ? `${e.length} items approved` : `${i}: ${e[0].title}${n.reason ? `, ${n.reason}` : ``}`}. ${V + e.length} of ${H} reviewed.`,
        ));
      for (let r of e) t?.(r, n);
    };
  mt.current = ht;
  let gt = () => {
      if (W) {
        if (j === `edit`) return xt();
        (q(`approve`), ht([W], { decision: `approved` }));
      }
    },
    _t = () => {
      W && (q(`reject`), M(j === `reject` ? `view` : `reject`));
    },
    vt = (e) => {
      W && (q(`reason:${e}`), ht([W], { decision: `rejected`, reason: e }));
    },
    yt = (e) => {
      let t = {};
      for (let n of e.fields ?? []) t[`field:${n.label}`] = f(n.value);
      return (e.body !== void 0 && (t.body = f(e.body)), t);
    },
    bt = (e = !0) => {
      W &&
        (q(`edit`),
        j !== `edit` &&
          (P(yt(W)),
          M(`edit`),
          F(null),
          e &&
            requestAnimationFrame(() =>
              (we.current ?? T.current?.querySelector(`.ui-rvc__input`))?.focus({ preventScroll: !0 }),
            )));
    },
    xt = () => {
      if (!W || j !== `edit`) return;
      q(`save`);
      let e = yt(W),
        t = { decision: `approved` };
      N.body !== void 0 && N.body !== e.body && (t.text = N.body);
      let n = {};
      for (let t of W.fields ?? []) {
        let r = `field:${t.label}`;
        N[r] !== void 0 && N[r] !== e[r] && (n[t.label] = N[r]);
      }
      (Object.keys(n).length && (t.fields = n), ht([W], t));
    },
    St = () => {
      j !== `view` && (ft(), M(`view`), P({}));
    },
    J = (e) => {
      if (B.length < 2 || !W) return;
      ft();
      let t = (U + e + B.length) % B.length;
      ((G.current = e > 0 ? `down` : `up`), Ve(B[t].id));
    },
    Ct = () => {
      W && (q(`skip`), ze((e) => ({ ...e, [W.id]: !0 })), te?.(W), pt(`Skipped: ${W.title}`), J(1));
    },
    Y = () => {
      let e = Ie[Ie.length - 1];
      if (!e) return;
      (ft(), q(`undo`));
      let t = e.map((e) => A[e]).filter(Boolean);
      (Fe((t) => {
        let n = { ...t };
        for (let t of e) delete n[t];
        return n;
      }),
        Le((e) => e.slice(0, -1)),
        Je(null),
        t[0] && ((G.current = `up`), Ve(t[0].item.id), z(t[0].item, Pe) || Tt(`all`)),
        pt(
          `Undone – ${t.length > 1 ? `${t.length} items are` : `${t[0]?.item.title} is`} back in the queue.`,
        ));
      for (let e of t) ee?.(e.item, e.result);
    },
    wt = () => {
      nt && F((e) => (e === null ? 0 : e + 1 >= nt ? null : e + 1));
    },
    Tt = (e) => {
      ((G.current = `fade`), Ne(e), xe?.(e));
    },
    Et = (e) => {
      let t = B.findIndex((t) => t.id === e);
      t < 0 || t === U || ((G.current = t > U ? `down` : `up`), Ve(e));
    },
    Dt = (0, n.useRef)(Et);
  Dt.current = Et;
  let Ot = (0, n.useCallback)((e) => Dt.current(e), []),
    kt = (0, n.useCallback)((e, t) => {
      t ? k.current.set(e, t) : k.current.delete(e);
    }, []);
  (0, n.useImperativeHandle)(S, () => ({
    approve: gt,
    reject: (e) => (e ? vt(e) : _t()),
    edit: () => bt(!1),
    setDraft: (e, t) => P((n) => ({ ...n, [t ? `field:${t}` : `body`]: e })),
    save: xt,
    cancel: St,
    skip: Ct,
    next: () => J(1),
    previous: () => J(-1),
    undo: Y,
    peek: (e) => F(e),
    select: Et,
  }));
  let At = (e) => {
      if (e.defaultPrevented || e.nativeEvent.isComposing) return;
      let t = e.target.closest(`textarea, input, select, [contenteditable='true']`),
        n = e.metaKey || e.ctrlKey,
        r = (t) => {
          (e.preventDefault(), t());
        };
      if (j === `edit` && n && e.key === `Enter`) return r(xt);
      if (e.key === `Escape`) return j === `view` ? (He === null ? void 0 : r(() => F(null))) : r(St);
      if (t || e.altKey) return;
      if (n) {
        e.key.toLowerCase() === `z` && !e.shiftKey && r(Y);
        return;
      }
      if (j === `reject`) {
        let t = Number(e.key);
        if (t >= 1 && t <= ye.length) return r(() => vt(ye[t - 1]));
      }
      let i = {
        a: gt,
        e: () => bt(),
        r: _t,
        s: Ct,
        j: () => J(1),
        arrowdown: () => J(1),
        k: () => J(-1),
        arrowup: () => J(-1),
        f: wt,
        z: Y,
        u: Y,
      }[e.key.toLowerCase()];
      i && r(i);
    },
    X = Ue ?? He,
    Z = (() => {
      if (W && X !== null)
        return ie(W)
          .flatMap((e) => d(e))
          .filter((e) => typeof e != `string`)[X];
    })(),
    jt = `${w}-tip`;
  (0, n.useLayoutEffect)(() => {
    let e = Ce.current,
      t = E.current,
      n = X === null ? void 0 : Te.current.get(X);
    if (!e || !t || !n) return;
    let r = t.getBoundingClientRect(),
      i = t.offsetWidth ? r.width / t.offsetWidth : 1,
      a = n.getClientRects(),
      o = a[0] ?? n.getBoundingClientRect(),
      s = a[a.length - 1] ?? o,
      c = e.offsetWidth,
      l = e.offsetHeight,
      u = (o.top - r.top) / i + t.scrollTop,
      d = (s.bottom - r.top) / i + t.scrollTop,
      f = (o.left + o.width / 2 - r.left) / i,
      p = !(d + 8 + l <= t.scrollTop + t.clientHeight - 4) && u - l - 8 >= t.scrollTop + 4;
    ((e.style.top = `${p ? u - l - 8 : d + 8}px`),
      (e.style.left = `${Math.max(10, Math.min(f - c / 2, t.offsetWidth - c - 10))}px`),
      e.style.setProperty(`--x`, `${f - Math.max(10, Math.min(f - c / 2, t.offsetWidth - c - 10))}px`),
      (e.dataset.side = p ? `above` : `below`));
  });
  let [Mt, Nt] = (0, n.useState)(!1);
  ((0, n.useLayoutEffect)(() => {
    let e = E.current;
    if (!e) return;
    if (!Mt) {
      e.style.height = ``;
      return;
    }
    let t = () => {
      let t = D.current?.offsetHeight ?? 0,
        n = I && performance.now() - I.key < I.delay + o ? (Se.current?.offsetHeight ?? 0) : 0;
      e.style.height = `${Math.max(t, n)}px`;
    };
    t();
    let n = new ResizeObserver(t);
    D.current && n.observe(D.current);
    let r = I ? window.setTimeout(t, Math.max(0, I.key + I.delay + o - performance.now()) + 10) : 0;
    return () => {
      (n.disconnect(), window.clearTimeout(r));
    };
  }),
    (0, n.useLayoutEffect)(() => {
      let e = T.current;
      if (!e) return;
      let t = new ResizeObserver(() => Nt(e.clientWidth - 8 < 640));
      return (t.observe(e), () => t.disconnect());
    }, []));
  let Pt = me,
    Q = (e, t, n, i, a = 1) => {
      let o = d(e),
        s = (e, i) => {
          let a = n.n++,
            o = t && X === a;
          return (0, r.jsx)(
            `mark`,
            {
              ref: t
                ? (e) => {
                    e ? Te.current.set(a, e) : Te.current.delete(a);
                  }
                : void 0,
              className: `ui-rvc__flag`,
              "data-on": o ? `` : void 0,
              tabIndex: t ? 0 : -1,
              "aria-describedby": o ? jt : void 0,
              "aria-label": `${e.text} – the agent is unsure`,
              onMouseEnter: t ? () => We(a) : void 0,
              onMouseLeave: t ? () => We((e) => (e === a ? null : e)) : void 0,
              onFocus: t ? () => F(a) : void 0,
              onBlur: t ? () => F((e) => (e === a ? null : e)) : void 0,
              children: e.text,
            },
            i,
          );
        },
        c = (e, t = !1) =>
          e.map((e, n) =>
            typeof e == `string` ? (0, r.jsx)(`span`, { children: t ? se(e) : e }, n) : s(e, n),
          );
      if (i !== `code`) return c(o);
      let l = a,
        u = a;
      return re(o).map((e, t) => {
        let n = e[0],
          i = typeof n == `string` ? n : ``;
        if (i.startsWith(`@@`)) {
          let e = /-(\d+)(?:,\d+)? \+(\d+)/.exec(i);
          return (
            e && ((l = Number(e[1])), (u = Number(e[2]))),
            (0, r.jsx)(`span`, { className: `ui-rvc__hunk`, children: i }, t)
          );
        }
        let a = i.startsWith(`+`) ? `add` : i.startsWith(`-`) ? `del` : `ctx`,
          o = typeof n == `string` ? [n.slice(1), ...e.slice(1)] : e,
          s = a === `add` ? u++ : a === `del` ? l++ : (l++, u++);
        return (0, r.jsxs)(
          `span`,
          {
            className: `ui-rvc__line`,
            "data-diff": a,
            children: [
              (0, r.jsxs)(`span`, {
                className: `ui-rvc__ln`,
                children: [
                  a !== `ctx` &&
                    (0, r.jsx)(`span`, { className: `ui-rvc__sign`, children: a === `add` ? `+` : `−` }),
                  s,
                ],
              }),
              (0, r.jsx)(`span`, { className: `ui-rvc__src`, children: o.length ? c(o, !0) : `​` }),
            ],
          },
          t,
        );
      });
    },
    Ft = (e, t) => {
      let [n, i, a] = ne(e, t);
      return (0, r.jsxs)(r.Fragment, {
        children: [n, i && (0, r.jsx)(`ins`, { className: `ui-rvc__ins`, children: i }), a],
      });
    },
    It = (e, t) => {
      let n = !t,
        a = { n: 0 },
        o = n && j === `edit`,
        s = t?.draft ?? {},
        c = t ? yt(e) : {},
        l = t?.result.decision;
      return (0, r.jsxs)(
        `div`,
        {
          ref: t ? Se : D,
          className: `ui-rvc__detail`,
          "data-ghost": t ? `` : void 0,
          "data-decision": l,
          "data-enter": t ? void 0 : rt.current.mode,
          "aria-hidden": t ? !0 : void 0,
          style: { "--d": `${t?.delay ?? I?.delay ?? 0}ms` },
          children: [
            (0, r.jsxs)(`div`, {
              className: `ui-rvc__who`,
              children: [
                Pt(e),
                (0, r.jsxs)(`div`, {
                  className: `ui-rvc__meta`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-rvc__name`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-rvc__agent`,
                          dir: `auto`,
                          title: e.agent,
                          children: e.agent,
                        }),
                        e.risk !== `low` &&
                          (0, r.jsx)(`span`, {
                            className: `ui-rvc__risk`,
                            "data-risk": e.risk,
                            children: i[e.risk].label,
                          }),
                      ],
                    }),
                    e.model &&
                      (0, r.jsx)(`span`, { className: `ui-rvc__model`, title: e.model, children: e.model }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(`div`, {
              className: `ui-rvc__ask`,
              children: (0, r.jsx)(`h3`, { className: `ui-rvc__title`, dir: `auto`, children: e.title }),
            }),
            e.reasoning &&
              (0, r.jsxs)(`p`, {
                className: `ui-rvc__why`,
                dir: `auto`,
                children: [(0, r.jsx)(`b`, { children: `Why ` }), e.reasoning],
              }),
            (0, r.jsxs)(`section`, {
              className: `ui-rvc__proposal`,
              "data-editing": o ? `` : void 0,
              "aria-label": `Proposal: ${e.type}`,
              children: [
                !!e.fields?.length &&
                  (0, r.jsx)(`dl`, {
                    className: `ui-rvc__fields`,
                    children: e.fields.map((e, i) => {
                      let l = `field:${e.label}`;
                      return (0, r.jsxs)(
                        `div`,
                        {
                          children: [
                            (0, r.jsx)(`dt`, { children: e.label }),
                            (0, r.jsx)(`dd`, {
                              dir: `auto`,
                              title: o ? void 0 : f(e.value),
                              children: o
                                ? (0, r.jsx)(`input`, {
                                    className: `ui-rvc__input`,
                                    value: N[l] ?? ``,
                                    "aria-label": e.label,
                                    onChange: (e) => P((t) => ({ ...t, [l]: e.target.value })),
                                  })
                                : t && s[l] !== void 0 && s[l] !== c[l]
                                  ? Ft(c[l], s[l])
                                  : Q(e.value, n, a),
                            }),
                          ],
                        },
                        `${e.label}-${i}`,
                      );
                    }),
                  }),
                e.body !== void 0 &&
                  (0, r.jsxs)(`div`, {
                    className: `ui-rvc__body`,
                    "data-format": e.format,
                    children: [
                      e.bodyLabel &&
                        (0, r.jsx)(`span`, { className: `ui-rvc__body-label`, children: e.bodyLabel }),
                      o
                        ? (0, r.jsxs)(`div`, {
                            className: `ui-rvc__editor`,
                            children: [
                              (0, r.jsxs)(`div`, {
                                className: `ui-rvc__mirror`,
                                "aria-hidden": `true`,
                                children: [Ft(f(e.body), N.body ?? ``), `​`],
                              }),
                              (0, r.jsx)(`textarea`, {
                                ref: we,
                                value: N.body ?? ``,
                                "aria-label": e.bodyLabel ?? `Proposal`,
                                spellCheck: !1,
                                onChange: (e) => P((t) => ({ ...t, body: e.target.value })),
                              }),
                            ],
                          })
                        : e.format === `code` && !(t && s.body !== void 0 && s.body !== c.body)
                          ? (0, r.jsx)(`div`, {
                              className: `ui-rvc__code`,
                              children: (0, r.jsx)(`div`, {
                                className: `ui-rvc__diff`,
                                children: Q(e.body, n, a, `code`),
                              }),
                            })
                          : (0, r.jsx)(`p`, {
                              className: `ui-rvc__text`,
                              dir: `auto`,
                              children:
                                t && s.body !== void 0 && s.body !== c.body
                                  ? Ft(c.body, s.body)
                                  : Q(e.body, n, a),
                            }),
                    ],
                  }),
                !!e.files?.length &&
                  (0, r.jsx)(`div`, {
                    className: `ui-rvc__code`,
                    children: e.files.map((e, t) =>
                      (0, r.jsxs)(
                        `div`,
                        {
                          className: `ui-rvc__file`,
                          children: [
                            (0, r.jsxs)(`div`, {
                              className: `ui-rvc__file-head`,
                              children: [
                                (0, r.jsxs)(`span`, {
                                  className: `ui-rvc__path`,
                                  title: e.path,
                                  children: [
                                    e.path.includes(`/`) &&
                                      (0, r.jsx)(`span`, {
                                        className: `ui-rvc__dir`,
                                        children: e.path.slice(0, e.path.lastIndexOf(`/`) + 1),
                                      }),
                                    e.path.slice(e.path.lastIndexOf(`/`) + 1),
                                  ],
                                }),
                                e.added !== void 0 &&
                                  (0, r.jsxs)(`span`, {
                                    className: `ui-rvc__count-add`,
                                    children: [`+`, m.format(e.added)],
                                  }),
                                e.removed !== void 0 &&
                                  (0, r.jsxs)(`span`, {
                                    className: `ui-rvc__count-del`,
                                    children: [`−`, m.format(e.removed)],
                                  }),
                              ],
                            }),
                            e.diff !== void 0 &&
                              (0, r.jsx)(`div`, {
                                className: `ui-rvc__diff`,
                                children: Q(e.diff, n, a, `code`, e.start ?? 1),
                              }),
                          ],
                        },
                        `${e.path}-${t}`,
                      ),
                    ),
                  }),
                !!e.steps?.length &&
                  (0, r.jsx)(`ol`, {
                    className: `ui-rvc__steps`,
                    children: e.steps.map((e, t) =>
                      (0, r.jsxs)(
                        `li`,
                        {
                          className: `ui-rvc__step`,
                          "data-flagged": p(e.title) + p(e.detail) ? `` : void 0,
                          children: [
                            (0, r.jsx)(`span`, {
                              className: `ui-rvc__step-n`,
                              "aria-hidden": `true`,
                              children: t + 1,
                            }),
                            (0, r.jsxs)(`span`, {
                              className: `ui-rvc__step-main`,
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-rvc__step-title`,
                                  dir: `auto`,
                                  children: Q(e.title, n, a),
                                }),
                                e.tool &&
                                  (0, r.jsxs)(`span`, {
                                    className: `ui-rvc__step-tool`,
                                    title: e.tool,
                                    children: [
                                      e.icon &&
                                        (0, r.jsx)(`span`, {
                                          className: `ui-rvc__source-icon`,
                                          children: e.icon,
                                        }),
                                      (0, r.jsx)(`span`, {
                                        className: `ui-rvc__source-label`,
                                        children: e.tool,
                                      }),
                                    ],
                                  }),
                                e.detail !== void 0 &&
                                  (0, r.jsx)(`span`, {
                                    className: `ui-rvc__step-detail`,
                                    dir: `auto`,
                                    children: Q(e.detail, n, a),
                                  }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
              ],
            }),
            !!e.sources?.length &&
              (0, r.jsx)(`div`, {
                className: `ui-rvc__foot`,
                children: (0, r.jsx)(`ul`, {
                  className: `ui-rvc__sources`,
                  "aria-label": `Sources`,
                  children: e.sources.map((e, t) => {
                    let i = (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-rvc__source-icon`,
                          children: e.icon ?? (0, r.jsx)(fe, {}),
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-rvc__source-label`,
                          dir: `auto`,
                          children: e.label,
                        }),
                      ],
                    });
                    return (0, r.jsx)(
                      `li`,
                      {
                        title: e.label,
                        children:
                          e.href && n
                            ? (0, r.jsx)(`a`, {
                                className: `ui-rvc__source`,
                                href: e.href,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: i,
                              })
                            : (0, r.jsx)(`span`, { className: `ui-rvc__source`, children: i }),
                      },
                      `${e.label}-${t}`,
                    );
                  }),
                }),
              }),
          ],
        },
        t ? `out-${t.key}` : e.id,
      );
    },
    $ = (e, t, n, i, a, o = {}) =>
      (0, r.jsxs)(`button`, {
        type: `button`,
        className: `ui-rvc__btn`,
        "data-primary": o.primary ? `` : void 0,
        "data-danger": o.danger ? `` : void 0,
        "data-pressed": Ke === e ? `` : void 0,
        "data-tone": o.danger ? `rejected` : o.primary ? `approved` : void 0,
        disabled: o.disabled,
        "aria-keyshortcuts": i.length === 1 ? i.toUpperCase() : void 0,
        onClick: a,
        children: [
          n,
          (0, r.jsx)(`span`, { children: t }),
          (0, r.jsx)(`kbd`, { className: `ui-rvc__kbd`, children: i }),
        ],
      }),
    Lt = !!Z && j !== `edit`,
    Rt = (0, r.jsx)(`div`, {
      className: `ui-rvc__filters`,
      role: `group`,
      "aria-label": `Filter the queue`,
      children: [
        { id: `all`, label: `All` },
        { id: `high`, label: `High risk` },
        { id: `unsure`, label: `Unsure` },
      ].map((e) =>
        (0, r.jsxs)(
          `button`,
          {
            type: `button`,
            className: `ui-rvc__filter`,
            "aria-pressed": Pe === e.id,
            onClick: () => Tt(e.id),
            children: [
              e.label,
              (0, r.jsx)(`span`, { className: `ui-rvc__filter-count`, children: m.format(Qe[e.id]) }),
            ],
          },
          e.id,
        ),
      ),
    }),
    zt = H ? V / H : 0,
    Bt = !W;
  return (0, r.jsxs)(`div`, {
    ref: T,
    className: [`ui-rvc`, C].filter(Boolean).join(` `),
    tabIndex: -1,
    onKeyDown: At,
    onMouseDown: (e) => {
      e.target.closest(`button, a, input, textarea, mark`) ||
        requestAnimationFrame(() => T.current?.focus({ preventScroll: !0 }));
    },
    children: [
      (0, r.jsx)(`style`, { href: `ui-review-center`, precedence: `default`, children: _e }),
      (0, r.jsxs)(`header`, {
        className: `ui-rvc__head`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-rvc__mark`, children: (0, r.jsx)(pe, {}) }),
          (0, r.jsx)(`span`, { className: `ui-rvc__heading`, title: x, children: x }),
          (0, r.jsxs)(`span`, {
            className: `ui-rvc__progress`,
            children: [
              (0, r.jsx)(`span`, {
                className: `ui-rvc__track`,
                "data-live": R.length ? `` : void 0,
                "aria-hidden": `true`,
                children: (0, r.jsx)(`span`, { className: `ui-rvc__fill`, style: { width: `${zt * 100}%` } }),
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-rvc__count`,
                children: [(0, r.jsx)(`b`, { children: m.format(V) }, V), ` of `, m.format(H), ` reviewed`],
              }),
            ],
          }),
          $e &&
            (0, r.jsxs)(`span`, {
              className: `ui-rvc__oldest`,
              children: [
                `oldest `,
                (0, r.jsx)(`b`, { "data-sla": je($e), children: u(Ae - l($e.createdAt)) }),
              ],
            }),
          L &&
            (0, r.jsxs)(
              `div`,
              {
                className: `ui-rvc__undo`,
                "data-decision": L.decision,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-rvc__undo-text`,
                    children: [L.decision === `rejected` ? (0, r.jsx)(_, {}) : (0, r.jsx)(g, {}), L.text],
                  }),
                  (0, r.jsxs)(`button`, {
                    type: `button`,
                    className: `ui-rvc__undo-btn`,
                    "data-pressed": Ke === `undo` ? `` : void 0,
                    onClick: Y,
                    "aria-keyshortcuts": `Z`,
                    children: [
                      (0, r.jsx)(de, {}),
                      `Undo`,
                      (0, r.jsx)(`kbd`, { className: `ui-rvc__kbd`, children: `Z` }),
                    ],
                  }),
                ],
              },
              L.key,
            ),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-rvc__card`,
        "data-narrow": Mt ? `` : void 0,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-rvc__queue`,
            children: [
              (0, r.jsx)(`div`, { className: `ui-rvc__queue-head`, children: Rt }),
              (0, r.jsxs)(`ul`, {
                ref: O,
                className: `ui-rvc__list`,
                "aria-label": `Queue`,
                children: [
                  st.map(({ item: e, ghost: t }) =>
                    (0, r.jsx)(
                      he,
                      {
                        it: e,
                        ghost: t,
                        current: !t && W?.id === e.id,
                        focusable: !t && (W?.id === e.id || (!W && e === B[0])),
                        enter: t ? void 0 : K.current.get(e.id),
                        wait: u(Ae - l(e.createdAt)),
                        sla: je(e),
                        skipped: !!Re[e.id],
                        onPick: Ot,
                        setEl: kt,
                      },
                      t ? `${e.id}~out` : e.id,
                    ),
                  ),
                  !st.length &&
                    (0, r.jsx)(`li`, {
                      className: `ui-rvc__none`,
                      children: R.length ? `Nothing matches this filter` : `Nothing waiting`,
                    }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-rvc__main`,
            children: [
              (0, r.jsxs)(`div`, {
                ref: E,
                className: `ui-rvc__stage`,
                children: [
                  I && It(I.item, I),
                  W
                    ? It(W)
                    : (0, r.jsxs)(`div`, {
                        ref: D,
                        className: `ui-rvc__empty`,
                        "data-after": I ? `` : void 0,
                        style: { "--d": `${I?.delay ?? 0}ms` },
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-rvc__empty-mark`,
                            children: (0, r.jsx)(pe, { size: 22 }),
                          }),
                          (0, r.jsx)(`b`, {
                            children: R.length ? `Nothing matches this filter` : `All caught up`,
                          }),
                          (0, r.jsx)(`span`, {
                            children: R.length
                              ? `${m.format(R.length)} more in the queue under All`
                              : `${m.format(V)} of ${m.format(H)} reviewed – new items from your agents show up here`,
                          }),
                        ],
                      }),
                  Lt &&
                    Z &&
                    (0, r.jsxs)(
                      `div`,
                      {
                        ref: Ce,
                        id: jt,
                        role: `tooltip`,
                        className: `ui-rvc__tip`,
                        children: [
                          (0, r.jsxs)(`span`, {
                            className: `ui-rvc__tip-head`,
                            children: [(0, r.jsx)(ue, {}), `Agent's note`],
                          }),
                          (0, r.jsx)(`p`, { children: Z.note }),
                          Z.source &&
                            (0, r.jsx)(`span`, { className: `ui-rvc__tip-source`, children: Z.source }),
                        ],
                      },
                      X,
                    ),
                ],
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-rvc__actions`,
                "data-mode": j,
                children: [
                  j === `view` &&
                    (0, r.jsxs)(
                      `div`,
                      {
                        className: `ui-rvc__btns`,
                        children: [
                          $(`approve`, `Approve`, (0, r.jsx)(g, {}), `A`, gt, { primary: !0, disabled: Bt }),
                          $(`edit`, `Edit`, (0, r.jsx)(ce, {}), `E`, () => bt(), {
                            disabled: Bt || (!W?.body && !W?.fields?.length),
                          }),
                          $(`reject`, `Reject`, (0, r.jsx)(_, {}), `R`, _t, { disabled: Bt, danger: !0 }),
                          $(`skip`, `Skip`, (0, r.jsx)(le, {}), `S`, Ct, { disabled: B.length < 2 }),
                        ],
                      },
                      `view`,
                    ),
                  j === `reject` &&
                    (0, r.jsxs)(
                      `div`,
                      {
                        className: `ui-rvc__btns`,
                        role: `group`,
                        "aria-label": `Why reject it?`,
                        children: [
                          (0, r.jsx)(`span`, { className: `ui-rvc__why-label`, children: `Why?` }),
                          ye.map((e, t) =>
                            (0, r.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                className: `ui-rvc__reason`,
                                "data-pressed": Ke === `reason:${e}` ? `` : void 0,
                                onClick: () => vt(e),
                                "aria-keyshortcuts": String(t + 1),
                                children: [
                                  (0, r.jsx)(`kbd`, { className: `ui-rvc__kbd`, children: t + 1 }),
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-rvc__cancel`,
                            onClick: St,
                            "aria-label": `Cancel`,
                            children: `Esc`,
                          }),
                        ],
                      },
                      `reject`,
                    ),
                  j === `edit` &&
                    (0, r.jsxs)(
                      `div`,
                      {
                        className: `ui-rvc__btns`,
                        children: [
                          $(`save`, `Approve with edits`, (0, r.jsx)(g, {}), `⌘↵`, xt, { primary: !0 }),
                          $(`cancel`, `Cancel`, (0, r.jsx)(_, {}), `Esc`, St),
                        ],
                      },
                      `edit`,
                    ),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-rvc__sr`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: Ye,
      }),
    ],
  });
}
var _e = `.ui-rvc{--ui-rvc-tray: #f0f0f0;--ui-rvc-card: #ffffff;--ui-rvc-strong: #171717;--ui-rvc-ink: #171717;--ui-rvc-text: #5f5f5f;--ui-rvc-muted: #8a8a8a;--ui-rvc-faint: #b8b8b8;--ui-rvc-line: #ececec;--ui-rvc-queue-bg: #fafafa;--ui-rvc-line-strong: #dedede;--ui-rvc-code-ink: rgba(0, 0, 0, 0.88);--ui-rvc-code-num: rgba(0, 0, 0, 0.45);--ui-rvc-diff-add: rgba(0, 160, 80, 0.06);--ui-rvc-diff-del: rgba(215, 36, 0, 0.05);--ui-rvc-diff-add-fg: #2f8a4c;--ui-rvc-diff-del-fg: #c4472e;--ui-rvc-tok-kw: color(display-p3 0.843 0.298 0.507);--ui-rvc-tok-str: color(display-p3 0.38 0.647 0.378);--ui-rvc-tok-type: color(display-p3 0.247 0.556 0.969);--ui-rvc-tok-fn: color(display-p3 0.587 0.29 0.667);--ui-rvc-ring-soft: rgba(47, 107, 255, 0.12);--ui-rvc-hover: rgba(0, 0, 0, 0.03);--ui-rvc-chip: #f3f3f3;--ui-rvc-wash: #f7f7f7;--ui-rvc-accent: #2f6bff;--ui-rvc-new: rgba(47, 107, 255, 0.09);--ui-rvc-primary: #171717;--ui-rvc-primary-fg: #ffffff;--ui-rvc-bar-bg: #e9efff;--ui-rvc-bar-edge: #bccdfb;--ui-rvc-bar-mark: #5b86f5;--ui-rvc-track: #f1f1f1;--ui-rvc-high-bg: #fde8e5;--ui-rvc-high-edge: #f1a397;--ui-rvc-high-fg: #c2331f;--ui-rvc-mid-bg: #fff3e0;--ui-rvc-mid-edge: #f3c98d;--ui-rvc-mid-fg: #b85c00;--ui-rvc-low-bg: #e6f6ec;--ui-rvc-low-edge: #a9dcbc;--ui-rvc-low-fg: #1a7f45;--ui-rvc-flag-bg: #fff2d4;--ui-rvc-flag-edge: #f0b44c;--ui-rvc-flag-hot: #ffe2a6;--ui-rvc-flag-ink: #6e4300;--ui-rvc-ins-bg: #dcf5e5;--ui-rvc-ins-ink: #11673a;--ui-rvc-add-bg: #effaf3;--ui-rvc-del-bg: #fdf0ee;--ui-rvc-ring: rgba(23, 23, 23, 0.22);--ui-rvc-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-rvc-raised: 0 0 0 1px #e8e8e8, 0 1px 3px rgba(0, 0, 0, 0.07);--ui-rvc-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-rvc-height: 560px;--ui-rvc-queue: 300px;--ui-rvc-row: 60px;--ui-rvc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-rvc-ease-in: cubic-bezier(0.55, 0, 0.75, 0.3);position: relative;box-sizing: border-box;width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-rvc-tray);outline: none;container: ui-rvc / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-rvc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-rvc *, .ui-rvc *::before, .ui-rvc *::after{box-sizing: border-box}:where(.ui-rvc) :is(button, input, textarea){margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;-webkit-tap-highlight-color: transparent}:where(.ui-rvc) button{cursor: pointer}:where(.ui-rvc) button:disabled{cursor: default}.ui-rvc :is(button, a, mark, input, textarea):focus-visible{outline: 2px solid var(--ui-rvc-ring);outline-offset: 1px}:where(.ui-rvc) :is(p, dl, dd, h3, ul, ol){margin: 0;padding: 0}.ui-rvc svg{display: block;flex: none}.ui-rvc__kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-rvc-chip);font-size: 10.5px;font-weight: 500;line-height: 1;color: var(--ui-rvc-muted);letter-spacing: 0}.ui-rvc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-rvc__head{position: relative;display: flex;flex-wrap: wrap;align-items: center;gap: 8px 12px;min-width: 0;min-height: 44px;padding: 4px 6px 8px 12px}.ui-rvc__mark{display: grid;flex: none;place-items: center;width: 16px;margin-right: -4px;color: var(--ui-rvc-accent)}.ui-rvc__heading{flex: none;font-weight: 600;color: var(--ui-rvc-strong)}.ui-rvc__progress{display: flex;flex: none;align-items: center;gap: 8px;font-size: 13px;color: var(--ui-rvc-muted);white-space: nowrap}.ui-rvc__count{font-variant-numeric: tabular-nums}.ui-rvc__count b{display: inline-block;font-weight: 500;color: var(--ui-rvc-ink);animation: ui-rvc-tick 420ms var(--ui-rvc-ease) both}.ui-rvc__track{position: relative;width: 84px;height: 8px;overflow: hidden;border-radius: 4px;background: var(--ui-rvc-card);box-shadow: inset 0 0 0 1px var(--ui-rvc-line)}.ui-rvc__fill{position: absolute;inset: 0 auto 0 0;overflow: hidden;border-radius: 4px;background: var(--ui-rvc-bar-bg);box-shadow: inset 0 0 0 1px var(--ui-rvc-bar-edge);transition: width 700ms var(--ui-rvc-ease)}.ui-rvc__track[data-live] .ui-rvc__fill::before{content: "";position: absolute;inset: 0;background: linear-gradient(90deg, transparent, var(--ui-rvc-card), transparent) -40px 0 / 40px 100% no-repeat;opacity: 0.7;animation: ui-rvc-sweep 1800ms linear infinite}.ui-rvc__fill::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: min(18px, 100%);background: linear-gradient(90deg, transparent, var(--ui-rvc-bar-mark));opacity: 0.55;animation: ui-rvc-glow 1100ms ease-in-out infinite alternate}.ui-rvc__oldest{flex: none;margin-left: -4px;font-size: 13px;color: var(--ui-rvc-muted);white-space: nowrap}.ui-rvc__oldest::before{content: "·";margin-right: 8px;color: var(--ui-rvc-faint)}.ui-rvc__oldest b{font-weight: 500;color: var(--ui-rvc-text);font-variant-numeric: tabular-nums}.ui-rvc__oldest b[data-sla="near"]{color: var(--ui-rvc-mid-fg)}.ui-rvc__oldest b[data-sla="over"]{color: var(--ui-rvc-high-fg)}.ui-rvc__filters{display: flex;flex: 1;gap: 4px;min-width: 0}.ui-rvc__filter{display: inline-flex;align-items: center;gap: 6px;padding: 4px 10px;border-radius: 8px;font-size: 12.5px;font-weight: 500;line-height: 18px;color: var(--ui-rvc-muted);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-rvc__filter:hover{color: var(--ui-rvc-ink)}.ui-rvc__filter[aria-pressed="true"]{background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-raised);color: var(--ui-rvc-ink)}.ui-rvc__filter-count{font-size: 11.5px;color: var(--ui-rvc-faint);font-variant-numeric: tabular-nums}.ui-rvc__filter[aria-pressed="true"] .ui-rvc__filter-count{color: var(--ui-rvc-muted)}.ui-rvc__card{position: relative;display: grid;grid-template-columns: var(--ui-rvc-queue) minmax(0, 1fr);height: var(--ui-rvc-height);overflow: hidden;border-radius: 16px;background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-shadow)}.ui-rvc__queue{display: flex;flex-direction: column;min-width: 0;min-height: 0;border-right: 1px solid var(--ui-rvc-line);background: var(--ui-rvc-queue-bg)}.ui-rvc__queue-head{display: flex;flex: none;align-items: center;padding: 8px;background: var(--ui-rvc-card);border-bottom: 1px solid var(--ui-rvc-line)}.ui-rvc__list{position: relative;flex: 1;min-height: 0;padding: 8px;overflow: hidden auto;overscroll-behavior: contain;list-style: none;scrollbar-width: thin}.ui-rvc__item{height: calc(var(--ui-rvc-row) + 4px);padding: 2px 0;overflow: hidden}.ui-rvc__item[data-enter="first"]{animation: ui-rvc-row-in 460ms var(--ui-rvc-ease) var(--d) backwards}.ui-rvc__item:is([data-enter="new"], [data-enter="in"]){animation: ui-rvc-open 520ms var(--ui-rvc-ease) var(--d) backwards}.ui-rvc__item[data-enter="new"] .ui-rvc__row{animation: ui-rvc-arrive 2200ms ease-out backwards}.ui-rvc__item[data-leaving]{pointer-events: none;animation: ui-rvc-close ${s}ms var(--ui-rvc-ease) var(--d) forwards}.ui-rvc__item[data-leaving][data-decision]{animation-delay: calc(var(--d) + ${o}ms)}.ui-rvc__row{position: relative;display: grid;grid-template-columns: 28px minmax(0, 1fr);align-items: center;column-gap: 10px;width: 100%;height: var(--ui-rvc-row);padding: 0 10px;border-radius: 10px;transition: background-color 160ms ease, box-shadow 200ms ease}.ui-rvc__row:hover{background: var(--ui-rvc-hover)}.ui-rvc__row[aria-current]{background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-raised)}.ui-rvc__row:focus-visible{outline-offset: -2px}.ui-rvc__avatar{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 8px;background: var(--ui-rvc-card);box-shadow: 0 0 0 1px var(--ui-rvc-line), 0 1px 2px rgba(0, 0, 0, 0.06);font-size: 12px;font-weight: 600;color: var(--ui-rvc-text)}.ui-rvc__avatar > svg{width: 15px;height: 15px}.ui-rvc__row-main{display: grid;gap: 3px;min-width: 0;transition: opacity 200ms ease}.ui-rvc__row-top{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-rvc__row-title{flex: 1;min-width: 0;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 18px;color: var(--ui-rvc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-rvc__wait{flex: none;font-size: 11.5px;line-height: 16px;color: var(--ui-rvc-muted);font-variant-numeric: tabular-nums}.ui-rvc__wait[data-sla="near"]{color: var(--ui-rvc-mid-fg)}.ui-rvc__wait[data-sla="over"]{color: var(--ui-rvc-high-fg)}.ui-rvc__row-meta{display: flex;align-items: center;gap: 5px;min-width: 0;font-size: 11.5px;line-height: 16px;color: var(--ui-rvc-muted);white-space: nowrap}.ui-rvc__tag{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-rvc [data-risk="high"]{--k-bg: var(--ui-rvc-high-bg);--k-edge: var(--ui-rvc-high-edge);--k-fg: var(--ui-rvc-high-fg)}.ui-rvc [data-risk="medium"]{--k-bg: var(--ui-rvc-mid-bg);--k-edge: var(--ui-rvc-mid-edge);--k-fg: var(--ui-rvc-mid-fg)}.ui-rvc [data-risk="low"]{--k-bg: var(--ui-rvc-low-bg);--k-edge: var(--ui-rvc-low-edge);--k-fg: var(--ui-rvc-low-fg)}.ui-rvc__skipped{flex: none;color: var(--ui-rvc-faint)}.ui-rvc__item[data-decision] .ui-rvc__row-main{opacity: 0.5;transition-delay: var(--d)}.ui-rvc__row-done{display: grid;flex: none;place-items: center;width: 18px;height: 18px;border-radius: 50%;background: var(--k-bg);color: var(--k-fg);animation: ui-rvc-fade 160ms ease var(--d) backwards}.ui-rvc__row-done > svg{width: 12px;height: 12px}:is(.ui-rvc__row-done, .ui-rvc__undo, .ui-rvc__btn)[data-decision="approved"], .ui-rvc__btn[data-tone="approved"]{--k-bg: var(--ui-rvc-low-bg);--k-edge: var(--ui-rvc-low-edge);--k-fg: var(--ui-rvc-low-fg)}:is(.ui-rvc__row-done, .ui-rvc__undo, .ui-rvc__btn)[data-decision="rejected"], .ui-rvc__btn[data-tone="rejected"]{--k-bg: var(--ui-rvc-high-bg);--k-edge: var(--ui-rvc-high-edge);--k-fg: var(--ui-rvc-high-fg)}.ui-rvc__none{display: grid;place-items: center;height: 120px;font-size: 12.5px;color: var(--ui-rvc-faint);list-style: none;animation: ui-rvc-fade 300ms ease 300ms backwards}.ui-rvc__main{position: relative;display: flex;flex-direction: column;min-width: 0;min-height: 0}.ui-rvc__stage{position: relative;flex: 1;min-height: 0;overflow: hidden auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 420ms var(--ui-rvc-ease)}.ui-rvc__detail{position: relative;display: grid;gap: 16px;padding: 22px 26px 24px;background: var(--ui-rvc-card)}.ui-rvc__detail[data-enter="first"] > *{animation: ui-rvc-in 420ms var(--ui-rvc-ease) calc(120ms + var(--i, 0) * 40ms) backwards}.ui-rvc__detail[data-enter="decide"]{animation: ui-rvc-in 320ms var(--ui-rvc-ease) calc(var(--d) + 90ms) backwards}.ui-rvc__detail[data-enter="down"]{animation: ui-rvc-in 280ms var(--ui-rvc-ease) backwards}.ui-rvc__detail[data-enter="up"]{animation: ui-rvc-in-up 280ms var(--ui-rvc-ease) backwards}.ui-rvc__detail[data-enter="fade"]{animation: ui-rvc-fade 240ms ease backwards}.ui-rvc__detail[data-ghost]{position: absolute;inset: 0 0 auto;z-index: 2;min-height: 100%;pointer-events: none;animation: ui-rvc-away 240ms var(--ui-rvc-ease) var(--d) forwards}.ui-rvc__who{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-rvc__who .ui-rvc__avatar{width: 34px;height: 34px;border-radius: 9px}.ui-rvc__who .ui-rvc__avatar > svg{width: 17px;height: 17px}.ui-rvc__meta{display: grid;flex: 1;gap: 1px;min-width: 0}.ui-rvc__name{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-rvc__agent{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 18px;color: var(--ui-rvc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-rvc__model{overflow: hidden;font-size: 12.5px;line-height: 16px;color: var(--ui-rvc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-rvc__risk{display: inline-flex;flex: none;align-items: center;height: 20px;padding: 0 8px;border-radius: 999px;background: var(--k-bg);font-size: 11.5px;font-weight: 500;line-height: 16px;color: var(--k-fg);white-space: nowrap}.ui-rvc__ask{display: grid;gap: 4px}.ui-rvc__title{font-size: 18px;font-weight: 600;line-height: 24px;letter-spacing: -0.012em;color: var(--ui-rvc-strong);text-wrap: balance}.ui-rvc__why{margin-top: -6px;font-size: 13px;line-height: 20px;color: var(--ui-rvc-muted);text-wrap: pretty}.ui-rvc__why b{font-weight: 500;color: var(--ui-rvc-text)}.ui-rvc__proposal{display: grid;gap: 16px;min-width: 0;padding-top: 2px}.ui-rvc__fields{display: flex;flex-wrap: wrap;gap: 12px 36px}.ui-rvc__fields > div{display: grid;gap: 1px;min-width: 0;max-width: 100%}.ui-rvc__fields dt{font-size: 12px;line-height: 16px;color: var(--ui-rvc-muted)}.ui-rvc__fields dd{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 500;line-height: 22px;color: var(--ui-rvc-ink);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-rvc__body{display: grid;gap: 6px;min-width: 0}.ui-rvc__body-label{font-size: 12px;line-height: 16px;color: var(--ui-rvc-muted)}.ui-rvc__text{padding-left: 14px;box-shadow: inset 1px 0 0 var(--ui-rvc-line-strong);font-size: 13.5px;line-height: 22px;color: var(--ui-rvc-ink);white-space: pre-wrap;overflow-wrap: anywhere;text-wrap: pretty}.ui-rvc__code{overflow: hidden;border-radius: 12px;background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-shadow)}.ui-rvc__file + .ui-rvc__file{border-top: 1px solid var(--ui-rvc-line)}.ui-rvc__file-head{display: flex;align-items: center;gap: 8px;min-width: 0;height: 36px;padding: 0 12px 0 15.6px;font-size: 13px;line-height: 20px}.ui-rvc__path{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-rvc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-rvc__dir{color: var(--ui-rvc-muted)}:is(.ui-rvc__count-add, .ui-rvc__count-del){flex: none;font-size: 12px;font-variant-numeric: tabular-nums}.ui-rvc__count-add{color: var(--ui-rvc-diff-add-fg)}.ui-rvc__count-del{color: var(--ui-rvc-diff-del-fg)}.ui-rvc__diff{padding: 8px 0 2px;overflow-x: auto;border-top: 1px solid var(--ui-rvc-line);font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;font-size: 13px;font-weight: 400;line-height: 20px;letter-spacing: normal;white-space: pre;scrollbar-width: thin}.ui-rvc__line{display: flex;min-width: max-content;color: var(--ui-rvc-code-ink)}.ui-rvc__line[data-diff="add"]{background: var(--ui-rvc-diff-add)}.ui-rvc__line[data-diff="del"]{background: var(--ui-rvc-diff-del)}.ui-rvc__ln{position: relative;flex: none;min-width: calc(2ch + 23.4px);padding: 0 7.8px 0 15.6px;color: var(--ui-rvc-code-num);text-align: right;font-variant-numeric: tabular-nums;user-select: none}.ui-rvc__sign{position: absolute;left: 4px;font-size: 11px}.ui-rvc__line[data-diff="add"] .ui-rvc__sign{color: var(--ui-rvc-diff-add-fg)}.ui-rvc__line[data-diff="del"] .ui-rvc__sign{color: var(--ui-rvc-diff-del-fg)}.ui-rvc__src{padding: 0 7.8px}.ui-rvc__hunk{display: block;padding: 0 7.8px 0 calc(2ch + 31.2px);color: var(--ui-rvc-code-num)}.ui-rvc [data-tok="kw"]{color: var(--ui-rvc-tok-kw)}.ui-rvc [data-tok="str"]{color: var(--ui-rvc-tok-str)}.ui-rvc [data-tok="fn"]{color: var(--ui-rvc-tok-fn)}.ui-rvc [data-tok="type"]{color: var(--ui-rvc-tok-type)}.ui-rvc [data-tok="com"]{color: var(--ui-rvc-code-num)}.ui-rvc__line .ui-rvc__flag{padding: 1px 1px;margin: 0}.ui-rvc__line .ui-rvc__flag [data-tok]{color: inherit}.ui-rvc__steps{display: grid;gap: 12px;list-style: none}.ui-rvc__step{display: grid;grid-template-columns: 22px minmax(0, 1fr);column-gap: 12px}.ui-rvc__step-n{display: grid;place-items: center;width: 22px;height: 22px;border-radius: 50%;box-shadow: inset 0 0 0 1px var(--ui-rvc-line-strong);font-size: 11.5px;font-weight: 500;color: var(--ui-rvc-muted);font-variant-numeric: tabular-nums}.ui-rvc__step[data-flagged] .ui-rvc__step-n{background: var(--ui-rvc-flag-bg);box-shadow: inset 0 0 0 1px var(--ui-rvc-flag-edge);color: var(--ui-rvc-flag-ink)}.ui-rvc__step-main{display: flex;flex-wrap: wrap;align-items: baseline;gap: 2px 10px;min-width: 0;padding-top: 1px}.ui-rvc__step-title{font-size: 13.5px;line-height: 20px;color: var(--ui-rvc-ink)}.ui-rvc__step-tool{display: inline-flex;align-items: center;gap: 5px;font-size: 12px;line-height: 20px;color: var(--ui-rvc-muted);white-space: nowrap}.ui-rvc__step-detail{width: 100%;font-size: 12.5px;line-height: 19px;color: var(--ui-rvc-muted)}.ui-rvc__flag{padding: 1px 2px;margin: 0 -1px;border-radius: 4px;background: var(--ui-rvc-flag-bg);box-shadow: inset 0 -1.5px 0 var(--ui-rvc-flag-edge);color: var(--ui-rvc-flag-ink);cursor: help;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-rvc__flag:is(:hover, [data-on]){background: var(--ui-rvc-flag-hot);box-shadow: inset 0 0 0 1px var(--ui-rvc-flag-edge)}.ui-rvc__ins{padding: 1px 2px;margin: 0 -1px;border-radius: 4px;background: var(--ui-rvc-ins-bg);color: var(--ui-rvc-ins-ink);text-decoration: none;-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-rvc__editor{display: grid;margin: -6px -8px;border-radius: 10px;box-shadow: inset 0 0 0 1px var(--ui-rvc-accent), 0 0 0 3px var(--ui-rvc-ring-soft)}.ui-rvc__editor > *{grid-area: 1 / 1;padding: 6px 8px;font-size: 13.5px;line-height: 22px;white-space: pre-wrap;overflow-wrap: anywhere}.ui-rvc__body[data-format="code"] .ui-rvc__editor > *{font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace;font-size: 12px;line-height: 20px;letter-spacing: 0}.ui-rvc__mirror{color: transparent}.ui-rvc__mirror .ui-rvc__ins{padding: 0;margin: 0;color: transparent;box-shadow: 0 0 0 2px var(--ui-rvc-ins-bg)}.ui-rvc__editor textarea{width: 100%;height: 100%;overflow: hidden;resize: none;color: var(--ui-rvc-ink);caret-color: var(--ui-rvc-accent);outline: none}.ui-rvc__editor textarea:focus-visible{outline: none}.ui-rvc__input{width: 100%;min-width: 120px;height: 24px;margin: 0 -6px;padding: 0 6px;border-radius: 6px;background: var(--ui-rvc-wash);box-shadow: inset 0 0 0 1px var(--ui-rvc-line);font-weight: 500;color: var(--ui-rvc-ink);outline: none}.ui-rvc__input:focus{box-shadow: inset 0 0 0 1px var(--ui-rvc-accent)}.ui-rvc__foot{display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 10px 16px}.ui-rvc__sources{display: flex;flex-wrap: wrap;gap: 4px 14px;min-width: 0;list-style: none}.ui-rvc__source{display: inline-flex;align-items: center;gap: 6px;font-size: 12.5px;line-height: 20px;color: var(--ui-rvc-muted);white-space: nowrap;text-decoration: none;transition: color 160ms ease}a.ui-rvc__source:hover{color: var(--ui-rvc-ink)}.ui-rvc__source-icon{display: grid;place-items: center;width: 14px;height: 14px;color: var(--ui-rvc-muted)}.ui-rvc__source-icon > svg{width: 13px;height: 13px}.ui-rvc__empty{display: grid;place-content: center;justify-items: center;gap: 4px;min-height: 100%;padding: 48px 24px;text-align: center;animation: ui-rvc-in 360ms var(--ui-rvc-ease) 120ms backwards}.ui-rvc__empty[data-after]{animation-delay: calc(var(--d) + 120ms)}.ui-rvc__empty-mark{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 8px;border-radius: 14px;background: var(--ui-rvc-low-bg);color: var(--ui-rvc-low-fg);box-shadow: inset 0 0 0 1px var(--ui-rvc-low-edge)}.ui-rvc__empty b{font-size: 15px;font-weight: 600;line-height: 22px;color: var(--ui-rvc-strong)}.ui-rvc__empty > span:last-child{max-width: 280px;font-size: 13px;line-height: 19px;color: var(--ui-rvc-muted);text-wrap: balance}.ui-rvc__tip{position: absolute;top: 0;left: 0;z-index: 6;display: grid;gap: 4px;width: min(300px, calc(100% - 20px));padding: 10px 12px 11px;border-radius: 12px;background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-pop);pointer-events: none;transform-origin: var(--x, 50%) bottom;animation: ui-rvc-tip 200ms var(--ui-rvc-ease) both}.ui-rvc__tip[data-side="below"]{transform-origin: var(--x, 50%) top}.ui-rvc__tip-head{display: inline-flex;align-items: center;gap: 6px;font-size: 11.5px;font-weight: 600;line-height: 16px;color: var(--ui-rvc-mid-fg)}.ui-rvc__tip p{font-size: 12.5px;line-height: 18px;color: var(--ui-rvc-ink);text-wrap: pretty}.ui-rvc__tip-source{justify-self: start;margin-top: 2px;padding: 1px 7px;border-radius: 6px;background: var(--ui-rvc-chip);font-size: 11.5px;line-height: 16px;color: var(--ui-rvc-text)}.ui-rvc__actions{position: relative;display: flex;flex: none;align-items: center;gap: 12px;min-height: 60px;padding: 12px 16px;border-top: 1px solid var(--ui-rvc-line);background: var(--ui-rvc-card)}.ui-rvc__btns{display: flex;flex-wrap: wrap;align-items: center;gap: 8px;min-width: 0;animation: ui-rvc-swap 220ms var(--ui-rvc-ease) both}.ui-rvc__btn{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 7px 0 10px;border-radius: 10px;background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-shadow);font-size: 13px;font-weight: 500;color: var(--ui-rvc-ink);white-space: nowrap;transition: transform 140ms ease, box-shadow 200ms ease, background-color 200ms ease, color 200ms ease, opacity 200ms ease}.ui-rvc__btn > svg{color: var(--ui-rvc-muted)}.ui-rvc__btn:hover:not(:disabled){box-shadow: var(--ui-rvc-raised)}.ui-rvc__btn[data-primary]{padding-left: 11px;background: var(--ui-rvc-primary);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08);color: var(--ui-rvc-primary-fg)}.ui-rvc__btn[data-primary] > svg{color: inherit}.ui-rvc__btn[data-primary] .ui-rvc__kbd{background: rgba(255, 255, 255, 0.14);color: rgba(255, 255, 255, 0.75)}.ui-rvc__btn[data-primary]:hover:not(:disabled){background: #2a2a2a}.ui-rvc__btn:disabled{opacity: 0.45}:is(.ui-rvc__btn, .ui-rvc__reason, .ui-rvc__undo-btn)[data-pressed]{transform: scale(0.97)}.ui-rvc__btn[data-pressed]{background: var(--k-bg, var(--ui-rvc-wash));box-shadow: inset 0 0 0 1px var(--k-edge, var(--ui-rvc-line));color: var(--k-fg, var(--ui-rvc-ink))}.ui-rvc__btn[data-pressed] > svg{color: inherit}.ui-rvc__why-label{margin-right: 2px;font-size: 13px;font-weight: 500;color: var(--ui-rvc-ink)}.ui-rvc__reason{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 11px 0 7px;border-radius: 10px;background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-shadow);font-size: 13px;font-weight: 500;color: var(--ui-rvc-ink);white-space: nowrap;transition: transform 140ms ease, box-shadow 160ms ease, background-color 160ms ease, color 160ms ease}.ui-rvc__reason:hover{box-shadow: inset 0 0 0 1px var(--ui-rvc-high-edge)}.ui-rvc__reason[data-pressed]{background: var(--ui-rvc-high-bg);box-shadow: inset 0 0 0 1px var(--ui-rvc-high-edge);color: var(--ui-rvc-high-fg)}.ui-rvc__cancel{height: 34px;padding: 0 8px;border-radius: 8px;font-size: 12px;color: var(--ui-rvc-muted)}.ui-rvc__cancel:hover{color: var(--ui-rvc-ink)}.ui-rvc__undo{display: flex;flex: 0 1 auto;align-items: center;gap: 2px;min-width: 0;height: 30px;margin-left: auto;padding: 0 2px 0 4px;border-radius: 999px;background: var(--ui-rvc-tray);animation: ui-rvc-chip-in 360ms var(--ui-rvc-ease) both, ui-rvc-chip-out 300ms ease 5700ms forwards}.ui-rvc__undo-text{display: inline-flex;align-items: center;gap: 5px;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-rvc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-rvc__undo-text > svg{width: 14px;height: 14px;color: var(--k-fg)}.ui-rvc__undo-btn{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;margin-left: 6px;padding: 0 4px 0 8px;border-radius: 999px;font-size: 12.5px;font-weight: 500;color: var(--ui-rvc-ink);transition: background-color 140ms ease, transform 140ms ease}.ui-rvc__undo-btn:hover{background: var(--ui-rvc-card);box-shadow: var(--ui-rvc-shadow)}.ui-rvc__undo-btn > svg{color: var(--ui-rvc-muted)}.ui-rvc__undo-btn .ui-rvc__kbd{min-width: 18px;border-radius: 999px}.ui-rvc__detail{grid-template-columns: minmax(0, 1fr)}.ui-rvc__heading{flex: 0 1 auto;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-rvc__title, .ui-rvc__why, .ui-rvc__row-title{text-align: start}.ui-rvc__title, .ui-rvc__why, .ui-rvc__step-title, .ui-rvc__tip p, .ui-rvc__tip-source{overflow-wrap: anywhere}.ui-rvc__step-detail{overflow-wrap: anywhere;white-space: pre-line}.ui-rvc__sources > li{min-width: 0;max-width: 100%}.ui-rvc__source{max-width: 100%}.ui-rvc__source-label{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-rvc__source-icon{flex: none}.ui-rvc__step-tool{min-width: 0;max-width: 100%}@container ui-rvc (max-width: 820px){.ui-rvc__card{--ui-rvc-queue: 272px}.ui-rvc__detail{padding: 18px 20px 20px}}@container ui-rvc (max-width: 740px){.ui-rvc__btn .ui-rvc__kbd{display: none}.ui-rvc__btn{padding-right: 11px}.ui-rvc__filter-count{font-size: 11.5px;color: var(--ui-rvc-faint);font-variant-numeric: tabular-nums}}@container ui-rvc (max-width: 639px){.ui-rvc__head{padding: 4px 4px 8px 10px}.ui-rvc__oldest{margin-left: auto;padding-right: 6px}.ui-rvc__oldest::before{content: none}.ui-rvc__progress{order: 5;width: 100%;padding-right: 8px}.ui-rvc__progress .ui-rvc__track{flex: 1}.ui-rvc__filter-count{font-size: 11.5px;color: var(--ui-rvc-faint);font-variant-numeric: tabular-nums}.ui-rvc__undo{position: absolute;top: auto;right: 4px;bottom: 6px;z-index: 2;max-width: calc(100% - 8px)}.ui-rvc__card{display: flex;flex-direction: column;height: auto}.ui-rvc__queue{border-right: 0;border-bottom: 1px solid var(--ui-rvc-line)}.ui-rvc__list{flex: none;height: calc(3 * (var(--ui-rvc-row) + 4px) + 16px)}.ui-rvc__stage{flex: none;overflow: hidden}.ui-rvc__detail{gap: 14px;padding: 16px 16px 18px}.ui-rvc__title{font-size: 16px;line-height: 22px}.ui-rvc__actions{flex-wrap: wrap;padding: 10px 12px 12px}.ui-rvc__btns{flex: 1;flex-wrap: nowrap}.ui-rvc__btns > .ui-rvc__btn{flex: 1;justify-content: center;padding: 0 8px}.ui-rvc__btns[role="group"]{flex-wrap: wrap}.ui-rvc__reason{flex: 1 1 40%;justify-content: center}.ui-rvc__why-label{width: 100%}.ui-rvc__empty{min-height: 220px;padding: 36px 20px}}@container ui-rvc (max-width: 420px){.ui-rvc__btn > svg{display: none}.ui-rvc__filter{gap: 4px;font-size: 12px}.ui-rvc__undo-btn .ui-rvc__kbd{display: none}.ui-rvc__sources{width: 100%}}@container ui-rvc (max-width: 360px){.ui-rvc__filter-count{font-size: 11.5px;color: var(--ui-rvc-faint);font-variant-numeric: tabular-nums}}@keyframes ui-rvc-row-in{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-rvc-open{from{height: 0;padding: 0;opacity: 0}}@keyframes ui-rvc-close{from{height: calc(var(--ui-rvc-row) + 4px)}to{height: 0;padding: 0;opacity: 0}}@keyframes ui-rvc-arrive{0%, 40%{background: var(--ui-rvc-new)}}@keyframes ui-rvc-fade{from{opacity: 0}}@keyframes ui-rvc-in{from{opacity: 0;transform: translateY(8px)}}@keyframes ui-rvc-in-up{from{opacity: 0;transform: translateY(-8px)}}@keyframes ui-rvc-away{to{opacity: 0;transform: translateY(-6px)}}@keyframes ui-rvc-tip{from{opacity: 0;transform: translateY(4px) scale(0.96)}}@keyframes ui-rvc-swap{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-rvc-chip-in{from{opacity: 0;transform: translateX(8px)}}@keyframes ui-rvc-chip-out{to{opacity: 0;transform: translateX(6px)}}@keyframes ui-rvc-tick{from{opacity: 0;transform: translateY(-6px)}}@keyframes ui-rvc-sweep{to{background-position: calc(100% + 40px) 0}}@keyframes ui-rvc-glow{from{opacity: 0.25}to{opacity: 0.7}}@media (pointer: coarse){.ui-rvc .ui-rvc__kbd{display: none}.ui-rvc__btn{padding-right: 11px}}@media (prefers-reduced-motion: reduce){.ui-rvc *, .ui-rvc *::before, .ui-rvc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-rvc{--ui-rvc-tray: #19191c;--ui-rvc-card: #232326;--ui-rvc-strong: #ededed;--ui-rvc-ink: #ededed;--ui-rvc-text: #a8a8ad;--ui-rvc-muted: #7c7c82;--ui-rvc-faint: #55555b;--ui-rvc-line: #2e2e33;--ui-rvc-queue-bg: #1f1f22;--ui-rvc-line-strong: #3a3a40;--ui-rvc-code-ink: rgba(255, 255, 255, 0.88);--ui-rvc-code-num: rgba(255, 255, 255, 0.42);--ui-rvc-diff-add: rgba(60, 220, 130, 0.07);--ui-rvc-diff-del: rgba(255, 90, 70, 0.07);--ui-rvc-diff-add-fg: #5fd38d;--ui-rvc-diff-del-fg: #ff8a73;--ui-rvc-tok-kw: color(display-p3 0.98 0.52 0.68);--ui-rvc-tok-str: color(display-p3 0.56 0.82 0.54);--ui-rvc-tok-type: color(display-p3 0.48 0.7 1);--ui-rvc-tok-fn: color(display-p3 0.78 0.56 0.88);--ui-rvc-ring-soft: rgba(91, 154, 255, 0.16);--ui-rvc-hover: rgba(255, 255, 255, 0.03);--ui-rvc-chip: #2e2e32;--ui-rvc-wash: #29292d;--ui-rvc-accent: #5b9aff;--ui-rvc-new: rgba(91, 154, 255, 0.12);--ui-rvc-primary: #ededed;--ui-rvc-primary-fg: #171717;--ui-rvc-bar-bg: #1d2a4a;--ui-rvc-bar-edge: #34508f;--ui-rvc-bar-mark: #5b9aff;--ui-rvc-track: #2c2c30;--ui-rvc-high-bg: #3b1714;--ui-rvc-high-edge: #74302a;--ui-rvc-high-fg: #ff977d;--ui-rvc-mid-bg: #3a2610;--ui-rvc-mid-edge: #74491c;--ui-rvc-mid-fg: #ffb068;--ui-rvc-low-bg: #12301f;--ui-rvc-low-edge: #23593a;--ui-rvc-low-fg: #4fd890;--ui-rvc-flag-bg: #3d2b0c;--ui-rvc-flag-edge: #a8741f;--ui-rvc-flag-hot: #54390c;--ui-rvc-flag-ink: #ffd28a;--ui-rvc-ins-bg: #173d27;--ui-rvc-ins-ink: #7deaa9;--ui-rvc-add-bg: #15291e;--ui-rvc-del-bg: #2e1916;--ui-rvc-ring: rgba(237, 237, 237, 0.3);--ui-rvc-shadow: 0 0 0 1px #2e2e33, 0 1px 2px rgba(0, 0, 0, 0.3);--ui-rvc-raised: 0 0 0 1px #38383e, 0 1px 3px rgba(0, 0, 0, 0.4);--ui-rvc-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-rvc__btn[data-primary] .ui-rvc__kbd{background: rgba(0, 0, 0, 0.1);color: rgba(0, 0, 0, 0.55)}:where(.dark, [data-theme="dark"]) .ui-rvc__btn[data-primary]:hover:not(:disabled){background: #ffffff}:where(.dark, [data-theme="dark"]) .ui-rvc__row[aria-current]{background: #2a2a2e}`,
  v = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  ve = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-rvcc-strong, var(--ui-rvc-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  ye = () => {
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
  y = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-rvcc-strong, var(--ui-rvc-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  b = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-rvcc-strong, var(--ui-rvc-ink, #181717))` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  be = () =>
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
  xe = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#FF7A59`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
      }),
    }),
  x = () =>
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
  S = 6e4,
  C = `Each party's total liability under this Agreement is limited to the fees paid in the 12 months before the claim, except for breaches of confidentiality, gross negligence and indemnity obligations.`,
  w = (e) => [
    {
      id: `retry`,
      title: `Merge #511 – retries for webhook delivery`,
      agent: `Coder`,
      model: `GPT-6 Sol`,
      icon: (0, r.jsx)(ve, {}),
      type: `Code change`,
      risk: `high`,
      confidence: 0.41,
      createdAt: e - 28 * S,
      reasoning: `Deliveries time out under load – I added retries with backoff. Tests pass.`,
      files: [
        {
          path: `src/webhooks/deliver.ts`,
          added: 3,
          removed: 2,
          start: 38,
          diff: [
            `   const endpoint = await getEndpoint(event.accountId);
-  `,
            {
              text: `if (!endpoint) return;`,
              note: `Removed the null check – paused accounts have no endpoint, so this now throws for them.`,
              source: `accounts.paused · 214 rows`,
            },
            `
+  // endpoint is always set for active accounts
   const body = JSON.stringify(event.payload);
-  for (let i = 0; i < 3; i++) {
+  for (let i = 0; `,
            {
              text: `i < 10`,
              note: `Retries went from 3 to 10 with backoff – the last wait is over 2 minutes, longer than the worker's 60s timeout.`,
              source: `queue/worker.ts`,
            },
            `; i++) {
     const res = await post(endpoint.url, body);
+    await sleep(250 * 2 ** i);`,
          ],
        },
        { path: `src/webhooks/deliver.test.ts`, added: 14, removed: 0 },
        { path: `src/queue/config.ts`, added: 1, removed: 1 },
      ],
      sources: [
        { label: `PR #511`, icon: (0, r.jsx)(b, {}) },
        { label: `CI run 1204`, icon: (0, r.jsx)(b, {}) },
      ],
    },
    {
      id: `clause`,
      title: `Redline §7.2 Limitation of liability`,
      agent: `Legal agent`,
      model: `Opus 5.5`,
      icon: (0, r.jsx)(v, {}),
      type: `Contract clause`,
      risk: `high`,
      confidence: 0.58,
      createdAt: e - 18 * S,
      reasoning: `Northwind asked for unlimited liability. The playbook caps it at 12 months of fees, so I kept the cap and added the carve-outs they usually accept.`,
      body: [
        `Each party's total liability under this Agreement is limited to the fees paid in the `,
        {
          text: `12 months`,
          note: `The playbook says 12 months, but Northwind's last two contracts used 24.`,
          source: `Playbook · Liability`,
        },
        ` before the claim, except for breaches of confidentiality, `,
        {
          text: `gross negligence`,
          note: `Not one of our standard carve-outs – usually needs a sign-off from Legal.`,
          source: `Playbook · Carve-outs`,
        },
        ` and indemnity obligations.`,
      ],
      sources: [
        { label: `Northwind MSA v3`, icon: (0, r.jsx)(y, {}) },
        { label: `Legal playbook`, icon: (0, r.jsx)(y, {}) },
        { label: `Deal · $240k`, icon: (0, r.jsx)(xe, {}) },
      ],
    },
    {
      id: `migration`,
      title: `Split customers.name into first and last name`,
      agent: `Data agent`,
      model: `Opus 5.5`,
      icon: (0, r.jsx)(v, {}),
      type: `Migration`,
      risk: `medium`,
      confidence: 0.64,
      createdAt: e - 14 * S,
      reasoning: `Billing needs first names for invoices. 48,210 rows; the split takes about 40 seconds.`,
      files: [
        {
          path: `migrations/0042_split_customer_name.sql`,
          added: 5,
          removed: 0,
          diff: [
            `@@ -0,0 +1,5 @@
+ALTER TABLE customers ADD COLUMN first_name text;
+ALTER TABLE customers ADD COLUMN last_name text;
+UPDATE customers SET first_name = split_part(name, ' ', 1),
+  last_name = split_part(name, ' ', 2);
+ALTER TABLE customers `,
            {
              text: `DROP COLUMN name`,
              note: `Drops the original in the same step – 312 names have three or more parts and would lose them, with no way back.`,
              source: `SELECT count(*) … 312 rows`,
            },
            `;`,
          ],
        },
      ],
      sources: [{ label: `Ticket BILL-88`, icon: (0, r.jsx)(y, {}) }],
    },
    {
      id: `rotate`,
      title: `Rotate the Stripe API keys`,
      agent: `Ops agent`,
      model: `Sonnet 5.5`,
      icon: (0, r.jsx)(v, {}),
      type: `Plan`,
      risk: `medium`,
      confidence: 0.72,
      createdAt: e - 11 * S,
      reasoning: `The current key is 13 months old; the security policy asks for a rotation every 12.`,
      steps: [
        { title: `Create a new restricted key`, tool: `Stripe`, icon: (0, r.jsx)(x, {}) },
        { title: `Store it in the vault as STRIPE_KEY_NEXT`, tool: `Vault` },
        { title: `Deploy api and workers with the new key`, tool: `GitHub Actions`, icon: (0, r.jsx)(b, {}) },
        {
          title: [
            {
              text: `Revoke the old key right away`,
              note: `Workers still finishing a deploy hold the old key for up to 15 minutes – revoking now fails their charges.`,
              source: `Deploy logs · last rotation`,
            },
          ],
          tool: `Stripe`,
          icon: (0, r.jsx)(x, {}),
        },
        { title: `Post a summary in #ops`, tool: `Slack`, icon: (0, r.jsx)(be, {}) },
      ],
      sources: [{ label: `Security policy`, icon: (0, r.jsx)(y, {}) }],
    },
    {
      id: `refund`,
      title: `Refund order #4821 for Maya Chen`,
      agent: `Support agent`,
      model: `Sonnet 5.5`,
      icon: (0, r.jsx)(v, {}),
      type: `Refund`,
      risk: `medium`,
      confidence: 0.62,
      createdAt: e - 9 * S,
      reasoning: `Her blender arrived cracked – two photos in the ticket. Damaged items are covered within 30 days.`,
      fields: [
        {
          label: `Amount`,
          value: [
            {
              text: `$184.00`,
              note: `The order was $164.00 plus $20.00 express shipping. Shipping is only refunded when we caused the delay.`,
              source: `Refund policy §4`,
            },
          ],
        },
        { label: `Order`, value: `#4821` },
        { label: `Card`, value: `Visa •••• 4242` },
      ],
      body: `Hi Maya, I'm so sorry your blender arrived cracked. I've refunded the full $184.00 to your Visa – no need to send it back.
– Ava, Support`,
      sources: [{ label: `Charge ch_3P8x…`, icon: (0, r.jsx)(x, {}) }, { label: `Ticket #10293` }],
    },
    {
      id: `triage`,
      title: `Tag 14 tickets as Billing`,
      agent: `Ops agent`,
      model: `Haiku 5`,
      icon: (0, r.jsx)(v, {}),
      type: `Triage`,
      risk: `low`,
      confidence: 0.97,
      createdAt: e - 6 * S,
      reasoning: `All 14 mention an invoice, a charge or a refund in the first message.`,
      fields: [
        { label: `Tickets`, value: `14` },
        { label: `Tag`, value: `Billing` },
      ],
    },
    {
      id: `bump`,
      title: `Bump @stripe/stripe-js to 4.2.1`,
      agent: `Coder`,
      model: `GPT-6 Mini`,
      icon: (0, r.jsx)(ve, {}),
      type: `Code change`,
      risk: `low`,
      confidence: 0.95,
      createdAt: e - 4 * S,
      files: [
        {
          path: `package.json`,
          added: 1,
          removed: 1,
          start: 24,
          diff: `@@ -24,4 +24,4 @@
   "dependencies": {
-    "@stripe/stripe-js": "4.1.0",
+    "@stripe/stripe-js": "4.2.1",
     "react": "19.1.0",`,
        },
      ],
      sources: [{ label: `PR #509`, icon: (0, r.jsx)(b, {}) }],
    },
    {
      id: `notes`,
      title: `Post release notes to #announcements`,
      agent: `Marketing agent`,
      model: `GPT-6 Mini`,
      icon: (0, r.jsx)(ve, {}),
      type: `Slack message`,
      risk: `low`,
      confidence: 0.91,
      createdAt: e - 2 * S,
      body: `v4.12 is live – per-seat coupons, a faster pricing page and 9 fixes. Full notes in the changelog.`,
      sources: [{ label: `#announcements`, icon: (0, r.jsx)(be, {}) }],
    },
  ],
  T = (e) => ({
    id: `invoice`,
    title: `Pay INV-2207 from Acme Logistics`,
    agent: `Finance agent`,
    model: `Gemini 3.8 Pro`,
    icon: (0, r.jsx)(ye, {}),
    type: `Invoice`,
    risk: `high`,
    confidence: 0.55,
    createdAt: e,
    reasoning: `Amount and line items match PO-118. The bank details differ from the last six payments to Acme.`,
    fields: [
      { label: `Amount`, value: `$12,480.00` },
      { label: `Due`, value: `Oct 24` },
      {
        label: `IBAN`,
        value: [
          {
            text: `DE89 •••• 3000`,
            note: `New IBAN – changed by email two days ago. Confirm it by phone before paying.`,
            source: `Email from billing@acme-logistics.co`,
          },
        ],
      },
    ],
    sources: [{ label: `INV-2207.pdf` }, { label: `PO-118` }, { label: `Vendor email` }],
  }),
  E = [
    [0.9, (e) => e.peek(0)],
    [3.2, (e) => e.peek(1)],
    [4.4, (e) => e.peek(null)],
    [4.6, (e) => e.reject()],
    [5.3, (e) => e.reject(`Too risky`)],
    [6.3, (e) => e.peek(0)],
    [7.6, (e) => (e.peek(null), e.edit())],
    [7.9, (e, t) => t(T(Date.now()))],
    ...[
      C.replace(`12 months`, `1 months`),
      C.replace(`12 months`, ` months`),
      C.replace(`12 months`, `2 months`),
      C.replace(`12 months`, `24 months`),
    ].map((e, t) => [8.3 + t * 0.17, (t) => t.setDraft(e)]),
    [9.6, (e) => e.save()],
    [10.8, (e) => e.peek(0)],
    [12, (e) => (e.peek(null), e.reject())],
    [12.7, (e) => e.reject(`Not allowed`)],
    [13.9, (e) => e.peek(0)],
    [15.3, (e) => (e.peek(null), e.skip())],
    [16.4, (e) => e.peek(0)],
    [17.8, (e) => (e.peek(null), e.approve())],
    [18.9, (e) => e.approve()],
    [19.8, (e) => e.approve()],
    [20.6, (e) => e.approve()],
    [21.4, (e) => e.approve()],
    [22.3, (e) => e.approve()],
  ],
  D = [`Incorrect`, `Too risky`, `Not allowed`, `Other`],
  Se = 26,
  Ce = 9e3;
function O() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(0),
    [a, o] = (0, n.useState)(() => w(Date.now())),
    [s, c] = (0, n.useState)(!1),
    l = (0, n.useRef)(0);
  ((0, n.useEffect)(() => {
    if (s) return;
    let t = (e) => o((t) => (t.some((t) => t.id === e.id) ? t : [...t, e])),
      n = E.map(([n, r]) => window.setTimeout(() => e.current && r(e.current, t), n * 1e3));
    return (
      n.push(
        window.setTimeout(() => {
          (o(w(Date.now())), i((e) => e + 1));
        }, Se * 1e3),
      ),
      () => n.forEach((e) => window.clearTimeout(e))
    );
  }, [t, s]),
    (0, n.useEffect)(() => () => window.clearTimeout(l.current), []));
  let u = () => {
    (c(!0),
      window.clearTimeout(l.current),
      (l.current = window.setTimeout(() => {
        (o(w(Date.now())), i((e) => e + 1), c(!1));
      }, Ce)));
  };
  return (0, r.jsx)(`div`, {
    className: `rvc-demo`,
    onPointerDownCapture: u,
    onKeyDownCapture: u,
    children: (0, r.jsx)(ge, { ref: e, items: a, reviewed: 24, reasons: D, onUndo: () => void 0 }, t),
  });
}
