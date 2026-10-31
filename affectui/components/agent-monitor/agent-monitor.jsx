import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e, t = 14) =>
    (0, r.jsx)(`svg`, {
      width: t,
      height: t,
      viewBox: `0 0 16 16`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.4`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: e,
    }),
  a = {
    read: i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`path`, { d: `M4 1.75h5.25L12 4.5v9.75H4z` }),
          (0, r.jsx)(`path`, { d: `M9 1.75V4.75h3M6.25 8h3.5M6.25 10.5h3.5` }),
        ],
      }),
      12,
    ),
    search: i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `7.25`, cy: `7.25`, r: `4.25` }),
          (0, r.jsx)(`path`, { d: `m10.5 10.5 3.25 3.25` }),
        ],
      }),
      12,
    ),
    edit: i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`path`, { d: `M10.75 2.75 13.25 5.25 6 12.5H3.5V10z` }),
          (0, r.jsx)(`path`, { d: `m9.25 4.25 2.5 2.5` }),
        ],
      }),
      12,
    ),
    run: i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`rect`, { x: `1.75`, y: `2.75`, width: `12.5`, height: `10.5`, rx: `2` }),
          (0, r.jsx)(`path`, { d: `m4.75 6.25 2 1.75-2 1.75M8.5 10h2.75` }),
        ],
      }),
      12,
    ),
    think: i(
      (0, r.jsx)(`path`, {
        d: `M8 1.75c.4 3.1 1.6 4.4 4.75 4.75-3.15.35-4.35 1.65-4.75 4.75-.4-3.1-1.6-4.4-4.75-4.75C6.4 6.15 7.6 4.85 8 1.75z`,
      }),
      12,
    ),
    web: i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.25` }),
          (0, r.jsx)(`path`, {
            d: `M1.75 8h12.5M8 1.75c1.75 1.9 2.6 4 2.6 6.25S9.75 12.35 8 14.25C6.25 12.35 5.4 10.25 5.4 8S6.25 3.65 8 1.75z`,
          }),
        ],
      }),
      12,
    ),
  },
  o = { read: `Read`, search: `Search`, edit: `Edit`, run: `Terminal`, think: `Thinking`, web: `Web` },
  s = () => i((0, r.jsx)(`path`, { d: `m5 3 3 3 3-3M5 13l3-3 3 3` }), 12),
  c = () => i((0, r.jsx)(`path`, { d: `M6 4v8M10 4v8` }), 11),
  l = () => i((0, r.jsx)(`path`, { d: `M5.5 3.75v8.5L12 8z` }), 11),
  u = () => i((0, r.jsx)(`path`, { d: `m5 5 6 6M11 5l-6 6` }), 11),
  d = () => i((0, r.jsx)(`path`, { d: `m3.75 8.25 2.75 2.75 5.75-6` }), 11),
  f = () =>
    i(
      (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`path`, {
            d: `M7.13 2.5a1 1 0 0 1 1.74 0l5.5 9.75a1 1 0 0 1-.87 1.5H2.5a1 1 0 0 1-.87-1.5z`,
          }),
          (0, r.jsx)(`path`, { d: `M8 6.25v3M8 11.5v.25` }),
        ],
      }),
      11,
    ),
  p = () => i((0, r.jsx)(`path`, { d: `M5.5 10.5 10.75 5.25M6 5h4.75v4.75` }), 12),
  m = () => i((0, r.jsx)(`path`, { d: `M3.25 8a4.75 4.75 0 1 0 1.4-3.35M3.25 2.75v2.5h2.5` }), 12),
  h = (e) => {
    let t = Math.max(0, Math.floor(e / 1e3)),
      n = Math.floor(t / 3600),
      r = Math.floor((t % 3600) / 60),
      i = (e) => String(e).padStart(2, `0`);
    return n ? `${n}:${i(r)}:${i(t % 60)}` : `${r}:${i(t % 60)}`;
  },
  g = (e) => {
    let t = Math.max(0, Math.floor(e / 1e3));
    return t < 60 ? `${t}s` : `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
  },
  _ = (e) => (e < 1e4 ? `${(Math.max(0, e) / 1e3).toFixed(1)}s` : g(e)),
  ee = (e) => (e > 0 && e < 0.001 ? `<$0.001` : e < 1 ? `$${e.toFixed(3)}` : `$${e.toFixed(2)}`),
  v = new Intl.NumberFormat(`en-US`),
  y = {
    idle: `Idle`,
    running: `Running`,
    waiting: `Needs you`,
    paused: `Paused`,
    finished: `Finished`,
    failed: `Failed`,
    cancelled: `Cancelled`,
  };
function b({ id: e, className: t, children: i }) {
  let a = (0, n.useRef)({ id: e, node: i }),
    [o, s] = (0, n.useState)(null);
  return (
    a.current.id !== e && o?.id !== a.current.id && s(a.current),
    (0, n.useLayoutEffect)(() => {
      a.current = { id: e, node: i };
    }),
    (0, r.jsxs)(`span`, {
      className: [`ui-agm__roll`, t].filter(Boolean).join(` `),
      children: [
        o &&
          (0, r.jsx)(
            `span`,
            {
              className: `ui-agm__roll-layer`,
              "data-leaving": ``,
              "aria-hidden": `true`,
              onAnimationEnd: (e) => e.target === e.currentTarget && s(null),
              children: o.node,
            },
            `out-${o.id}`,
          ),
        (0, r.jsx)(
          `span`,
          { className: `ui-agm__roll-layer`, "data-coming": o ? `` : void 0, children: i },
          e,
        ),
      ],
    })
  );
}
function x({ id: e, className: t, children: i }) {
  let a = (0, n.useRef)({ id: e, node: i }),
    [o, s] = (0, n.useState)(null);
  (a.current.id !== e && o?.id !== a.current.id && s(a.current),
    (0, n.useLayoutEffect)(() => {
      a.current = { id: e, node: i };
    }));
  let c = (0, n.useRef)(null),
    [l, u] = (0, n.useState)();
  return (
    (0, n.useLayoutEffect)(() => {
      let e = c.current?.offsetWidth;
      e != null && e !== l && u(e);
    }),
    (0, r.jsxs)(`span`, {
      className: [`ui-agm__morph`, t].filter(Boolean).join(` `),
      style: { width: l },
      children: [
        o &&
          (0, r.jsx)(
            `span`,
            {
              className: `ui-agm__morph-layer`,
              "data-leaving": ``,
              "aria-hidden": `true`,
              inert: !0,
              onAnimationEnd: (e) => e.target === e.currentTarget && s(null),
              children: o.node,
            },
            `out-${o.id}`,
          ),
        (0, r.jsx)(
          `span`,
          { ref: c, className: `ui-agm__morph-layer`, "data-coming": o ? `` : void 0, children: i },
          e,
        ),
      ],
    })
  );
}
function te({
  state: e = `idle`,
  agent: t = { name: `Agent` },
  steps: i = [],
  current: te,
  since: S,
  until: re,
  pausedFor: ie = 0,
  cost: C,
  ask: w,
  outcome: T,
  error: E,
  defaultFolded: D = !1,
  onPause: O,
  onResume: k,
  onCancel: A,
  onAllow: j,
  onDecline: M,
  onRetry: N,
  onOpenLog: ae,
  className: oe,
}) {
  let P = (0, n.useId)(),
    [F, se] = (0, n.useState)(D),
    ce = (0, n.useRef)(null),
    le = (0, n.useRef)(null),
    I = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    I.current && ((I.current = !1), (F ? ce : le).current?.focus());
  }, [F]);
  let ue = (e) => {
      ((I.current = !0), se(e));
    },
    [de, fe] = (0, n.useState)(null),
    [L, R] = (0, n.useState)(null),
    z = de ?? L?.id ?? null,
    B = (0, n.useRef)(null),
    V = (0, n.useRef)(null),
    pe = (e, t) => R((n) => (n?.id === e ? null : { id: e, from: t })),
    me = (e) => {
      let t = L?.id;
      (R(null),
        e && t && B.current?.querySelector(`[data-id="${CSS.escape(t)}"] .ui-agm__step-hit`)?.focus());
    };
  ((0, n.useEffect)(() => {
    if (!L) return;
    V.current?.querySelector(`.ui-agm__info-close`)?.focus({ preventScroll: !0 });
    let e = (e) => {
      let t = e.target;
      !V.current?.contains(t) && !t.closest?.(`.ui-agm__step, .ui-agm__strip .ui-agm__seg`) && R(null);
    };
    return (
      document.addEventListener(`pointerdown`, e),
      () => document.removeEventListener(`pointerdown`, e)
    );
  }, [L?.id]),
    (0, n.useLayoutEffect)(() => {
      let e = B.current,
        t = V.current;
      if (!L || !e || !t) return;
      let n =
        L.from === `row`
          ? e.querySelector(`[data-id="${CSS.escape(L.id)}"]`)
          : e.querySelector(`.ui-agm__strip-wrap`);
      n && (t.style.top = `${n.getBoundingClientRect().bottom - e.getBoundingClientRect().top + 6}px`);
    }));
  let he = (0, n.useRef)(null),
    H = (0, n.useRef)(0);
  (0, n.useEffect)(() => () => window.clearTimeout(H.current), []);
  let ge = (e, t = !1) => ({
      onPointerEnter: () => {
        (window.clearTimeout(H.current), fe(e));
        let n = he.current,
          r = t ? n?.querySelector(`[data-id="${CSS.escape(e)}"]`) : null;
        n &&
          r &&
          (r.offsetTop < n.scrollTop || r.offsetTop + r.offsetHeight > n.scrollTop + n.clientHeight) &&
          n.scrollTo({ top: r.offsetTop - n.clientHeight / 2 + r.offsetHeight / 2, behavior: `smooth` });
      },
      onPointerLeave: () => {
        (window.clearTimeout(H.current),
          (H.current = window.setTimeout(() => fe((t) => (t === e ? null : t)), 70)));
      },
    }),
    [_e, ve] = (0, n.useState)({ top: !1, bottom: !1 }),
    ye = () => {
      let e = he.current;
      if (!e) return;
      let t = { top: e.scrollTop > 2, bottom: e.scrollTop + e.clientHeight < e.scrollHeight - 2 };
      ve((e) => (e.top === t.top && e.bottom === t.bottom ? e : t));
    },
    U = e === `running` || e === `waiting`,
    [be, xe] = (0, n.useState)(() => Date.now());
  (0, n.useEffect)(() => {
    if (!U) return;
    let e = window.setInterval(() => xe(Date.now()), 100);
    return () => window.clearInterval(e);
  }, [U]);
  let Se = (0, n.useRef)(be);
  U && (Se.current = be);
  let Ce = U ? be : Se.current,
    W = S ? Math.max(0, (re ?? Ce) - S - ie) : 0,
    we = (t) => {
      e === `waiting` &&
        t.target === t.currentTarget &&
        (t.key === `Enter` && j
          ? (t.preventDefault(), j())
          : t.key === `Escape` && M && (t.preventDefault(), M()));
    },
    G = i.find((e) => e.state === `running`),
    Te = Math.min(i.length, i.filter((e) => e.state !== `queued`).length),
    K = te ?? (G ? { label: G.label, kind: G.kind, icon: G.icon } : void 0),
    q = (e) => e?.icon ?? a[e?.kind ?? `think`],
    J = (e) => (e.state === `running` ? (e.since ? Math.max(0, Ce - e.since) : 0) : (e.took ?? 0)),
    Ee = T && (T.added != null || T.removed != null),
    De = `${t.name}: ${y[e]}${e === `running` && K ? ` – ${K.label}` : ``}${e === `waiting` && w ? ` – ${w.title}` : ``}`,
    Y = i.filter((e) => e.state !== `queued`),
    Oe = Y.reduce((e, t) => e + Math.max(J(t), 1), 0),
    X = Y.filter((e) => e.state !== `running`).reverse(),
    Z = L ? Y.find((e) => e.id === L.id) : void 0,
    ke = Z
      ? Z.since != null && S != null
        ? Math.max(0, Z.since - S)
        : Y.slice(0, Y.indexOf(Z)).reduce((e, t) => e + J(t), 0)
      : 0;
  ((0, n.useEffect)(() => {
    L && !Z && R(null);
  }, [L, Z]),
    (0, n.useEffect)(ye, [X.length, F]));
  let Q = [],
    Ae = new Map(),
    je = (e, t, r, i) => {
      let a = (0, n.isValidElement)(t.icon) ? t.icon.type : (t.icon ?? `kind-${t.kind ?? `think`}`),
        o = Ae.get(a);
      if (o != null) {
        Q[o] = { ...Q[o], live: i ?? Q[o].live, tip: r };
        return;
      }
      (Ae.set(a, Q.length), Q.push({ id: e, icon: q(t), live: i, tip: r }));
    };
  (Y.forEach((t) =>
    je(
      t.id,
      t,
      {
        title: t.label,
        sub: [t.tool ?? o[t.kind ?? `think`], t.state === `failed` ? `Failed` : _(J(t))].join(` · `),
      },
      t.state === `running` && e === `running` ? `run` : void 0,
    ),
  ),
    e === `waiting` &&
      w?.icon &&
      je(`ask`, { icon: w.icon }, { title: w.title, sub: `Waiting on you` }, `ask`));
  let $ = Q.slice(-4),
    Me = (t, n) =>
      (0, r.jsxs)(`span`, {
        className: t,
        "aria-hidden": `true`,
        children: [
          Y.map((e) =>
            (0, r.jsx)(
              `span`,
              {
                className: `ui-agm__seg`,
                "data-state": e.state,
                "data-hot": n && z === e.id ? `` : void 0,
                style: { flexGrow: Math.max(J(e), 1) / Oe },
                title: n ? `${e.label} · ${_(J(e))}` : void 0,
                ...(n ? { ...ge(e.id, !0), onClick: () => pe(e.id, `bar`) } : {}),
              },
              e.id,
            ),
          ),
          e === `waiting` && (0, r.jsx)(`span`, { className: `ui-agm__seg`, "data-state": `waiting` }),
        ],
      }),
    Ne =
      e === `running` && K
        ? {
            id: `r-${K.label}`,
            node: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(`span`, { className: `ui-agm__tile`, children: q(K) }),
                (0, r.jsx)(`span`, { className: `ui-agm__task ui-agm__shine`, children: K.label }),
              ],
            }),
          }
        : e === `waiting`
          ? {
              id: `w-${w?.title ?? ``}-${w?.command ?? ``}`,
              node: (0, r.jsxs)(r.Fragment, {
                children: [
                  w?.icon && (0, r.jsx)(`span`, { className: `ui-agm__tile`, children: w.icon }),
                  (0, r.jsx)(`span`, { className: `ui-agm__task`, children: w?.title ?? `Waiting on you` }),
                  w?.command &&
                    (0, r.jsx)(`code`, { className: `ui-agm__code`, title: w.command, children: w.command }),
                ],
              }),
            }
          : e === `paused`
            ? {
                id: `p`,
                node: (0, r.jsxs)(`span`, {
                  className: `ui-agm__task ui-agm__task--quiet`,
                  children: [`Paused`, K ? ` · ${K.label}` : ``],
                }),
              }
            : e === `finished`
              ? {
                  id: `f`,
                  node: (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(`span`, { className: `ui-agm__task`, children: [`Finished in `, g(W)] }),
                      Ee &&
                        (0, r.jsxs)(`span`, {
                          className: `ui-agm__diff`,
                          children: [
                            (0, r.jsxs)(`span`, {
                              className: `ui-agm__add`,
                              children: [`+`, v.format(T.added ?? 0)],
                            }),
                            (0, r.jsxs)(`span`, {
                              className: `ui-agm__del`,
                              children: [`−`, v.format(T.removed ?? 0)],
                            }),
                          ],
                        }),
                      T?.files != null &&
                        (0, r.jsx)(`span`, {
                          className: `ui-agm__note`,
                          children: T.files === 1 ? `1 file` : `${T.files} files`,
                        }),
                      T?.note && (0, r.jsx)(`span`, { className: `ui-agm__note`, children: T.note }),
                    ],
                  }),
                }
              : e === `failed`
                ? {
                    id: `x-${E ?? ``}`,
                    node: (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(`span`, { className: `ui-agm__flag`, "aria-hidden": `true` }),
                        (0, r.jsx)(`span`, {
                          className: `ui-agm__task`,
                          children: E ?? `Something went wrong`,
                        }),
                      ],
                    }),
                  }
                : e === `cancelled`
                  ? {
                      id: `c`,
                      node: (0, r.jsxs)(`span`, {
                        className: `ui-agm__task ui-agm__task--quiet`,
                        children: [`Cancelled after `, g(W)],
                      }),
                    }
                  : {
                      id: `i`,
                      node: (0, r.jsx)(`span`, {
                        className: `ui-agm__task ui-agm__task--quiet`,
                        children: `No task yet`,
                      }),
                    },
    Pe = t.mark ?? t.name.trim().slice(0, 1).toUpperCase(),
    Fe = S != null && (e === `running` || e === `paused` || e === `waiting` || e === `failed`);
  return (0, r.jsxs)(`div`, {
    className: [`ui-agm`, oe].filter(Boolean).join(` `),
    "data-status": e,
    "data-folded": F ? `` : void 0,
    "data-pointing": z ? `` : void 0,
    onKeyDown: (e) => {
      e.key === `Escape` && L && (e.stopPropagation(), me(!0));
    },
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-monitor`, precedence: `default`, children: ne }),
      F
        ? (0, r.jsxs)(`button`, {
            ref: ce,
            type: `button`,
            className: `ui-agm__icon`,
            title: De,
            "aria-label": `${De} – open`,
            "aria-expanded": !1,
            "aria-controls": P,
            onClick: () => ue(!1),
            children: [
              (0, r.jsxs)(`span`, {
                className: `ui-agm__icon-who`,
                children: [
                  (0, r.jsx)(`span`, { className: `ui-agm__face`, "aria-hidden": `true`, children: Pe }),
                  (0, r.jsx)(`span`, { className: `ui-agm__icon-name`, children: t.name }),
                ],
              }),
              $.length > 0 &&
                (0, r.jsxs)(`span`, {
                  className: `ui-agm__tools`,
                  "aria-hidden": `true`,
                  children: [
                    Q.length > $.length &&
                      (0, r.jsxs)(`span`, {
                        className: `ui-agm__tools-more`,
                        children: [`+`, Q.length - $.length],
                      }),
                    $.map((e) =>
                      (0, r.jsxs)(
                        `span`,
                        {
                          className: `ui-agm__tool`,
                          "data-live": e.live,
                          children: [
                            e.icon,
                            (0, r.jsxs)(`span`, {
                              className: `ui-agm__tip`,
                              children: [
                                (0, r.jsx)(`span`, { className: `ui-agm__tip-title`, children: e.tip.title }),
                                e.tip.sub &&
                                  (0, r.jsx)(`span`, { className: `ui-agm__tip-sub`, children: e.tip.sub }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  ],
                }),
              (0, r.jsx)(x, {
                id: e === `running` || e === `paused` ? `clock` : e,
                className: `ui-agm__icon-end`,
                children:
                  e === `finished`
                    ? (0, r.jsxs)(`span`, {
                        className: `ui-agm__done-tag`,
                        "data-tone": `done`,
                        children: [(0, r.jsx)(d, {}), g(W)],
                      })
                    : e === `waiting`
                      ? (0, r.jsxs)(`span`, {
                          className: `ui-agm__done-tag`,
                          "data-tone": `ask`,
                          children: [(0, r.jsx)(f, {}), y[e]],
                        })
                      : e === `failed`
                        ? (0, r.jsxs)(`span`, {
                            className: `ui-agm__done-tag`,
                            "data-tone": `fail`,
                            children: [(0, r.jsx)(u, {}), y[e]],
                          })
                        : (0, r.jsx)(`span`, {
                            className: [`ui-agm__icon-meta`, e === `running` ? `ui-agm__shine` : ``]
                              .filter(Boolean)
                              .join(` `),
                            "data-status": e,
                            children: e === `running` || e === `paused` ? h(W) : y[e],
                          }),
              }),
            ],
          })
        : (0, r.jsxs)(`section`, {
            ref: B,
            id: P,
            className: `ui-agm__panel`,
            "aria-label": De,
            tabIndex: e === `waiting` ? 0 : void 0,
            onKeyDown: we,
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-agm__card`,
                children: [
                  (0, r.jsxs)(`div`, {
                    className: `ui-agm__top`,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-agm__face`, "aria-hidden": `true`, children: Pe }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-agm__who`,
                        children: [
                          (0, r.jsx)(`span`, { className: `ui-agm__name`, children: t.name }),
                          t.role && (0, r.jsx)(`span`, { className: `ui-agm__role`, children: t.role }),
                        ],
                      }),
                      C != null &&
                        e !== `idle` &&
                        (0, r.jsx)(`span`, {
                          className: `ui-agm__cost`,
                          "data-live": U ? `` : void 0,
                          "aria-label": `Cost so far ${ee(C)}`,
                          children: ee(C),
                        }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-agm__state`,
                        "data-status": e,
                        children: [
                          (0, r.jsx)(`span`, { className: `ui-agm__dot` }),
                          (0, r.jsx)(b, { id: e, children: y[e] }),
                        ],
                      }),
                      (0, r.jsx)(`button`, {
                        ref: le,
                        type: `button`,
                        className: `ui-agm__fold`,
                        "aria-label": `Fold away`,
                        title: `Fold away`,
                        "aria-expanded": !0,
                        "aria-controls": P,
                        onClick: () => ue(!0),
                        children: (0, r.jsx)(s, {}),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-agm__well`,
                    "data-status": e,
                    children: [
                      (0, r.jsx)(b, { id: Ne.id, className: `ui-agm__well-line`, children: Ne.node }),
                      Fe &&
                        (0, r.jsx)(`span`, {
                          className: `ui-agm__clock`,
                          "aria-label": `Running for ${g(W)}`,
                          children: h(W),
                        }),
                    ],
                  }),
                  Y.length > 0 &&
                    (0, r.jsx)(`div`, {
                      className: `ui-agm__strip-wrap`,
                      role: `img`,
                      "aria-label": Y.map((e) => `${e.label}, ${_(J(e))}`).join(`; `),
                      children: Me(`ui-agm__strip`, !0),
                    }),
                  X.length > 0 &&
                    (0, r.jsx)(`ol`, {
                      ref: he,
                      className: `ui-agm__steps`,
                      style: { "--ui-agm-shown": Math.min(X.length, 3) },
                      "data-fade-top": _e.top ? `` : void 0,
                      "data-fade-bottom": _e.bottom ? `` : void 0,
                      tabIndex: X.length > 3 ? 0 : void 0,
                      "aria-label": X.length > 3 ? `Finished steps` : void 0,
                      onScroll: ye,
                      children: X.map((e) =>
                        (0, r.jsxs)(
                          `li`,
                          {
                            className: `ui-agm__step`,
                            "data-id": e.id,
                            "data-state": e.state,
                            "data-hot": z === e.id ? `` : void 0,
                            ...ge(e.id),
                            children: [
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                className: `ui-agm__step-hit`,
                                "aria-label": `${e.label} – details`,
                                "aria-expanded": L?.id === e.id,
                                onClick: () => pe(e.id, `row`),
                              }),
                              (0, r.jsx)(`span`, { className: `ui-agm__step-icon`, children: q(e) }),
                              (0, r.jsx)(`span`, {
                                className: `ui-agm__step-label`,
                                title: e.label,
                                children: e.label,
                              }),
                              (0, r.jsx)(`span`, {
                                className: `ui-agm__step-time`,
                                children: e.state === `failed` ? `Failed` : _(J(e)),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                ],
              }),
              Z &&
                (0, r.jsxs)(
                  `div`,
                  {
                    ref: V,
                    className: `ui-agm__info`,
                    role: `dialog`,
                    "aria-label": Z.label,
                    "data-state": Z.state,
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-agm__info-head`,
                        children: [
                          (0, r.jsx)(`span`, { className: `ui-agm__tile`, children: q(Z) }),
                          (0, r.jsxs)(`span`, {
                            className: `ui-agm__info-title`,
                            children: [
                              (0, r.jsx)(`span`, { className: `ui-agm__info-label`, children: Z.label }),
                              (0, r.jsx)(`span`, {
                                className: `ui-agm__info-sub`,
                                children: Z.tool ?? o[Z.kind ?? `think`],
                              }),
                            ],
                          }),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-agm__info-close`,
                            "aria-label": `Close`,
                            onClick: () => me(!0),
                            children: (0, r.jsx)(u, {}),
                          }),
                        ],
                      }),
                      (0, r.jsxs)(`dl`, {
                        className: `ui-agm__info-facts`,
                        children: [
                          (0, r.jsxs)(`div`, {
                            children: [
                              (0, r.jsx)(`dt`, { children: `Started` }),
                              (0, r.jsxs)(`dd`, { children: [`+`, h(ke)] }),
                            ],
                          }),
                          (0, r.jsxs)(`div`, {
                            children: [
                              (0, r.jsx)(`dt`, { children: `Took` }),
                              (0, r.jsx)(`dd`, { children: _(J(Z)) }),
                            ],
                          }),
                          (0, r.jsxs)(`div`, {
                            children: [
                              (0, r.jsx)(`dt`, { children: `Share` }),
                              (0, r.jsxs)(`dd`, {
                                children: [Math.max(1, Math.round((Math.max(J(Z), 1) / Oe) * 100)), `%`],
                              }),
                            ],
                          }),
                          (0, r.jsxs)(`div`, {
                            children: [
                              (0, r.jsx)(`dt`, { children: `State` }),
                              (0, r.jsx)(`dd`, {
                                "data-state": Z.state,
                                children:
                                  Z.state === `running`
                                    ? `Running`
                                    : Z.state === `failed`
                                      ? `Failed`
                                      : `Done`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Z.detail && (0, r.jsx)(`p`, { className: `ui-agm__info-detail`, children: Z.detail }),
                      Z.output &&
                        (0, r.jsx)(`code`, {
                          className: `ui-agm__info-output`,
                          title: Z.output,
                          children: Z.output,
                        }),
                    ],
                  },
                  Z.id,
                ),
              (0, r.jsxs)(`div`, {
                className: `ui-agm__foot`,
                children: [
                  (0, r.jsx)(x, {
                    id:
                      e === `waiting`
                        ? `answer`
                        : e === `failed` && N
                          ? `retry`
                          : e === `running` || e === `paused`
                            ? `steer`
                            : `none`,
                    className: `ui-agm__controls`,
                    children:
                      e === `waiting`
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              M &&
                                (0, r.jsxs)(`button`, {
                                  type: `button`,
                                  className: `ui-agm__btn`,
                                  onClick: M,
                                  children: [`Decline `, (0, r.jsx)(`kbd`, { children: `Esc` })],
                                }),
                              j &&
                                (0, r.jsxs)(`button`, {
                                  type: `button`,
                                  className: `ui-agm__btn ui-agm__btn--go`,
                                  onClick: j,
                                  children: [`Allow `, (0, r.jsx)(`kbd`, { children: `⏎` })],
                                }),
                            ],
                          })
                        : e === `failed` && N
                          ? (0, r.jsxs)(`button`, {
                              type: `button`,
                              className: `ui-agm__btn ui-agm__btn--go`,
                              onClick: N,
                              children: [(0, r.jsx)(m, {}), ` Try again`],
                            })
                          : (e === `running` || e === `paused`) &&
                            (O || k || A) &&
                            (0, r.jsxs)(`span`, {
                              className: `ui-agm__group`,
                              children: [
                                (e === `running` ? O : k) &&
                                  (0, r.jsx)(`button`, {
                                    type: `button`,
                                    className: `ui-agm__seg-btn`,
                                    onClick: e === `running` ? O : k,
                                    children: (0, r.jsxs)(x, {
                                      id: e,
                                      className: `ui-agm__seg-label`,
                                      children: [
                                        e === `running` ? (0, r.jsx)(c, {}) : (0, r.jsx)(l, {}),
                                        e === `running` ? `Pause` : `Resume`,
                                      ],
                                    }),
                                  }),
                                A &&
                                  (0, r.jsxs)(`button`, {
                                    type: `button`,
                                    className: `ui-agm__seg-btn`,
                                    onClick: A,
                                    children: [(0, r.jsx)(u, {}), ` Cancel`],
                                  }),
                              ],
                            }),
                  }),
                  (0, r.jsx)(`span`, {
                    className: `ui-agm__where`,
                    children: i.length > 0 && e !== `idle` ? `${Te}/${i.length}` : ``,
                  }),
                  ae &&
                    (0, r.jsxs)(`button`, {
                      type: `button`,
                      className: `ui-agm__btn ui-agm__btn--quiet`,
                      onClick: ae,
                      children: [`Log `, (0, r.jsx)(p, {})],
                    }),
                ],
              }),
            ],
          }),
    ],
  });
}
var ne = `.ui-agm{--ui-agm-tray: #f0f0f0;--ui-agm-card: #ffffff;--ui-agm-strong: #171717;--ui-agm-ink: #171717;--ui-agm-text: #6b6b6b;--ui-agm-muted: #8a8a8a;--ui-agm-faint: #b8b8b8;--ui-agm-line: #ececec;--ui-agm-edge: #ececec;--ui-agm-lane: #f5f5f5;--ui-agm-fill: #e4e4e5;--ui-agm-accent: #2f6bff;--ui-agm-accent-bg: rgba(47, 107, 255, 0.08);--ui-agm-green: #1f9254;--ui-agm-green-bg: rgba(34, 160, 90, 0.1);--ui-agm-red: #dc3d43;--ui-agm-red-bg: rgba(229, 72, 77, 0.08);--ui-agm-amber: #b4690e;--ui-agm-amber-bg: rgba(232, 162, 12, 0.14);--ui-agm-shine: rgba(23, 23, 23, 0.25);--ui-agm-ring: rgba(23, 23, 23, 0.22);--ui-agm-seg: #e6e6e7;--ui-agm-live: 47, 107, 255;--ui-agm-hot: #a3a3a8;--ui-agm-shadow: 0 0 0 1px var(--ui-agm-line), 0 1px 2px rgba(0, 0, 0, 0.04);--ui-agm-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;display: inline-block;max-width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agm-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agm *, .ui-agm *::before, .ui-agm *::after{box-sizing: border-box}:where(.ui-agm) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agm :is(button, .ui-agm__panel, .ui-agm__steps):focus-visible{outline: 2px solid var(--ui-agm-ring);outline-offset: 2px}.ui-agm :is(ol, ul){margin: 0;padding: 0;list-style: none}.ui-agm svg{display: block;flex: none}.ui-agm__panel{position: relative;display: grid;width: 372px;max-width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-agm-tray);transform-origin: 24px 24px;animation: ui-agm-open 340ms var(--ui-agm-ease) both}.ui-agm__card{display: grid;gap: 12px;min-width: 0;padding: 14px 14px 12px;border-radius: 16px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow)}.ui-agm__top{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-agm__face{display: grid;flex: none;place-items: center;width: 30px;height: 30px;margin-right: 2px;border-radius: 9px;background: var(--ui-agm-card);box-shadow: inset 0 0 0 1px var(--ui-agm-line);font-size: 12px;font-weight: 600;color: var(--ui-agm-ink)}.ui-agm__face > svg{width: 16px;height: 16px}.ui-agm__face > img{display: block;width: 100%;height: 100%;object-fit: cover;border-radius: inherit}.ui-agm__who{display: grid;flex: 1;min-width: 3em}.ui-agm__name{overflow: hidden;font-weight: 600;line-height: 18px;color: var(--ui-agm-strong);white-space: nowrap;text-overflow: ellipsis}.ui-agm__role{overflow: hidden;font-size: 12.5px;line-height: 17px;color: var(--ui-agm-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agm__cost{flex: none;font-size: 12.5px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-agm-text);animation: ui-agm-morph-in 380ms var(--ui-agm-ease) both}.ui-agm__cost[data-live]{background: linear-gradient(90deg, var(--ui-agm-ink) 0%, var(--ui-agm-ink) 38%, var(--ui-agm-shine) 50%, var(--ui-agm-ink) 62%, var(--ui-agm-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-agm-shine 1500ms linear infinite}.ui-agm__state{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 26px;padding: 0 10px 0 9px;overflow: hidden;border-radius: 999px;background: var(--ui-agm-lane);font-size: 12.5px;font-weight: 500;color: var(--ui-agm-text);white-space: nowrap;transition: background-color 300ms ease, color 300ms ease}.ui-agm__dot{position: relative;flex: none;width: 6px;height: 6px;border-radius: 50%;background: currentColor;opacity: 0.6}.ui-agm__dot::after{content: "";position: absolute;inset: -3px;border-radius: 50%;background: currentColor;opacity: 0}.ui-agm__state:is([data-status="running"], [data-status="waiting"]) .ui-agm__dot{opacity: 1}.ui-agm__state:is([data-status="running"], [data-status="waiting"]) .ui-agm__dot::after{animation: ui-agm-pulse 1600ms ease-out infinite}.ui-agm__state .ui-agm__roll{flex: none;height: 26px}.ui-agm__state[data-status="running"]{background: var(--ui-agm-accent-bg);color: var(--ui-agm-accent)}.ui-agm__state[data-status="waiting"]{background: var(--ui-agm-amber-bg);color: var(--ui-agm-amber)}.ui-agm__state[data-status="finished"]{background: var(--ui-agm-green-bg);color: var(--ui-agm-green)}.ui-agm__state[data-status="failed"]{background: var(--ui-agm-red-bg);color: var(--ui-agm-red)}.ui-agm__fold{display: grid;flex: none;place-items: center;width: 28px;height: 28px;margin-right: -4px;border-radius: 9px;color: var(--ui-agm-muted);box-shadow: inset 0 0 0 1px var(--ui-agm-line);transition: background-color 160ms ease, color 160ms ease}.ui-agm__fold:hover{background: var(--ui-agm-lane);color: var(--ui-agm-ink)}.ui-agm__well{display: flex;align-items: center;gap: 10px;min-width: 0;height: 44px;padding: 0 12px 0 8px;border-radius: 12px;background: var(--ui-agm-lane);font-size: 13px;transition: background-color 300ms ease}.ui-agm__well[data-status="waiting"]{background: var(--ui-agm-amber-bg)}.ui-agm__well:not([data-status="running"]):not(:has(.ui-agm__tile)){padding-left: 12px}.ui-agm__roll{display: inline-grid;flex: 1;grid-template-columns: minmax(0, 1fr);align-items: center;min-width: 0;height: 44px;overflow: hidden}.ui-agm__roll-layer{grid-area: 1 / 1;display: flex;align-items: center;gap: 8px;min-width: 0}.ui-agm__roll-layer[data-leaving]{animation: ui-agm-out 380ms var(--ui-agm-ease) both;pointer-events: none}.ui-agm__roll-layer[data-coming]{animation: ui-agm-in 380ms var(--ui-agm-ease) both}.ui-agm__tile{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 8px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow);color: var(--ui-agm-text)}.ui-agm__tile > svg{width: 15px;height: 15px}.ui-agm__task{min-width: 0;overflow: hidden;font-weight: 500;color: var(--ui-agm-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agm__well[data-status="waiting"] .ui-agm__task{flex: none}.ui-agm__task--quiet{font-weight: 400;color: var(--ui-agm-muted)}.ui-agm__flag{flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-agm-red)}.ui-agm__shine{background: linear-gradient(90deg, var(--ui-agm-ink) 0%, var(--ui-agm-ink) 38%, var(--ui-agm-shine) 50%, var(--ui-agm-ink) 62%, var(--ui-agm-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-agm-shine 1500ms linear infinite}.ui-agm__code{flex: 0 1 auto;min-width: 0;overflow: hidden;padding: 0 7px;border-radius: 7px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11.5px;line-height: 22px;letter-spacing: 0;color: var(--ui-agm-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agm__diff{display: inline-flex;flex: none;gap: 6px;font-weight: 500;font-variant-numeric: tabular-nums}.ui-agm__add{color: var(--ui-agm-green)}.ui-agm__del{color: var(--ui-agm-red)}.ui-agm__note{flex: none;color: var(--ui-agm-muted)}.ui-agm__clock{flex: none;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-agm-muted);animation: ui-agm-morph-in 380ms var(--ui-agm-ease) both}.ui-agm__strip-wrap{margin: 2px 0}.ui-agm__strip{display: flex;gap: 3px;height: 8px}.ui-agm__seg{position: relative;min-width: 4px;border-radius: 4px;background: var(--ui-agm-seg);transition: flex-grow 300ms linear, background-color 400ms ease, opacity 200ms ease;animation: ui-agm-grow 420ms var(--ui-agm-ease) backwards}.ui-agm__strip .ui-agm__seg::after{content: "";position: absolute;inset: -6px -1px}.ui-agm__seg[data-state="running"]{background: rgba(var(--ui-agm-live), 0.3)}.ui-agm__seg[data-state="running"]::before{content: "";position: absolute;inset: 0;border-radius: inherit;background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.75) 50%, transparent 100%) 0 0 / 50% 100% no-repeat;animation: ui-agm-sheen 1600ms ease-in-out infinite}.ui-agm__seg[data-state="failed"]{background: repeating-linear-gradient(-45deg, var(--ui-agm-red-bg) 0 2px, transparent 2px 4px), var(--ui-agm-seg)}.ui-agm__seg[data-state="waiting"]{flex: 0 0 14px;background: var(--ui-agm-amber);opacity: 0.6;animation: ui-agm-grow 420ms var(--ui-agm-ease) backwards, ui-agm-breathe 1600ms ease-in-out infinite}.ui-agm:not([data-status="running"]) .ui-agm__seg[data-state="running"]::before{animation: none;opacity: 0}.ui-agm[data-status="finished"] .ui-agm__seg:not([data-state="failed"]){background: var(--ui-agm-green-bg)}.ui-agm[data-status="paused"] .ui-agm__seg[data-state="running"]{opacity: 0.45}.ui-agm[data-pointing] .ui-agm__strip .ui-agm__seg:not([data-hot]), .ui-agm[data-pointing] .ui-agm__step:not([data-hot]){opacity: 0.35}.ui-agm__strip .ui-agm__seg[data-hot]:not([data-state="running"]){background: var(--ui-agm-hot)}.ui-agm__steps::-webkit-scrollbar{display: none}.ui-agm__steps[data-fade-top]{--ui-agm-fade-top: transparent}.ui-agm__steps[data-fade-bottom]{--ui-agm-fade-bottom: transparent}.ui-agm__steps{position: relative;display: grid;align-content: start;height: calc(var(--ui-agm-shown, 0) * 30px);overflow-y: auto;overscroll-behavior: contain;scrollbar-width: none;margin: -2px -6px 0;--ui-agm-fade-top: #000;--ui-agm-fade-bottom: #000;-webkit-mask-image: linear-gradient(to bottom, var(--ui-agm-fade-top), #000 14px, #000 calc(100% - 14px), var(--ui-agm-fade-bottom));mask-image: linear-gradient(to bottom, var(--ui-agm-fade-top), #000 14px, #000 calc(100% - 14px), var(--ui-agm-fade-bottom));transition: height 420ms var(--ui-agm-ease)}.ui-agm__step{position: relative;display: flex;align-items: center;gap: 10px;height: 30px;padding: 0 8px;border-radius: 9px;font-size: 13px;cursor: pointer;transition: opacity 200ms ease, background-color 200ms ease;animation: ui-agm-drop 460ms var(--ui-agm-ease) backwards}.ui-agm__step[data-hot]{background: var(--ui-agm-lane)}.ui-agm__strip .ui-agm__seg{cursor: pointer}.ui-agm__step-hit{position: absolute;inset: 0;border-radius: inherit}.ui-agm .ui-agm__step-hit:focus-visible{outline-offset: -2px}.ui-agm__step > :not(.ui-agm__step-hit){position: relative;pointer-events: none}.ui-agm__step-icon{display: grid;flex: none;place-items: center;width: 20px;height: 20px;border-radius: 6px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow);color: var(--ui-agm-muted)}.ui-agm__step-icon > svg{width: 12px;height: 12px}.ui-agm__step-label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-agm-text);white-space: nowrap;text-overflow: ellipsis}.ui-agm__step-time{flex: none;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-agm-faint)}.ui-agm__step[data-state="failed"] .ui-agm__step-time{color: var(--ui-agm-red)}.ui-agm__info{position: absolute;z-index: 2;right: 12px;left: 12px;display: grid;gap: 10px;padding: 12px;border-radius: 14px;background: var(--ui-agm-card);box-shadow: 0 0 0 1px var(--ui-agm-line), 0 12px 24px -8px rgba(0, 0, 0, 0.16), 0 4px 8px -4px rgba(0, 0, 0, 0.06);transform-origin: 50% 0;animation: ui-agm-pop 260ms var(--ui-agm-ease) both}.ui-agm__info-head{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-agm__info-title{display: grid;flex: 1;min-width: 0}.ui-agm__info-label{overflow: hidden;font-weight: 600;line-height: 18px;color: var(--ui-agm-strong);white-space: nowrap;text-overflow: ellipsis}.ui-agm__info-sub{font-size: 12px;line-height: 16px;color: var(--ui-agm-muted)}.ui-agm__info-close{display: grid;flex: none;place-items: center;width: 26px;height: 26px;margin: -2px -2px 0 0;border-radius: 8px;color: var(--ui-agm-faint);transition: background-color 160ms ease, color 160ms ease}.ui-agm__info-close:hover{background: var(--ui-agm-lane);color: var(--ui-agm-ink)}.ui-agm__info-facts{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 4px;margin: 0}.ui-agm__info-facts > div{display: grid;gap: 1px;padding: 6px 8px;border-radius: 9px;background: var(--ui-agm-lane)}.ui-agm__info-facts dt{font-size: 11px;line-height: 14px;color: var(--ui-agm-muted)}.ui-agm__info-facts dd{margin: 0;font-size: 12.5px;font-weight: 500;line-height: 17px;font-variant-numeric: tabular-nums;color: var(--ui-agm-ink)}.ui-agm__info-facts dd[data-state="failed"]{color: var(--ui-agm-red)}.ui-agm__info-facts dd[data-state="running"]{color: var(--ui-agm-accent)}.ui-agm__info-detail{margin: 0;font-size: 13px;line-height: 19px;color: var(--ui-agm-text)}.ui-agm__info-output{display: block;overflow: hidden;padding: 6px 9px;border-radius: 8px;background: var(--ui-agm-lane);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11.5px;line-height: 16px;letter-spacing: 0;color: var(--ui-agm-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agm__foot{display: flex;align-items: center;gap: 6px;min-height: 46px;padding: 8px 6px 4px 4px}.ui-agm__where{flex: 1;padding-right: 4px;font-size: 12px;font-variant-numeric: tabular-nums;color: var(--ui-agm-muted);text-align: right}.ui-agm__morph{display: inline-grid;flex: none;align-items: center;transition: width 380ms var(--ui-agm-ease)}.ui-agm__morph-layer{grid-area: 1 / 1;justify-self: start;display: inline-flex;align-items: center;gap: 6px;white-space: nowrap}.ui-agm__morph-layer[data-leaving]{animation: ui-agm-morph-out 240ms ease both;pointer-events: none}.ui-agm__morph-layer[data-coming]{animation: ui-agm-morph-in 380ms var(--ui-agm-ease) both}.ui-agm__icon-end{overflow: hidden}.ui-agm__icon-end .ui-agm__morph-layer, .ui-agm__controls .ui-agm__morph-layer{transform-origin: 0 50%}.ui-agm__icon-meta.ui-agm__shine{color: transparent}.ui-agm__seg-label .ui-agm__morph-layer{gap: 5px}.ui-agm__seg-label .ui-agm__morph-layer > svg{color: var(--ui-agm-muted)}.ui-agm__group{display: inline-flex;gap: 6px}.ui-agm__seg-btn, .ui-agm__btn{display: inline-flex;align-items: center;gap: 5px;height: 32px;padding: 0 12px 0 10px;border-radius: 10px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow);font-size: 13px;font-weight: 500;color: var(--ui-agm-ink);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, transform 160ms ease, opacity 160ms ease}.ui-agm__seg-btn > svg{color: var(--ui-agm-muted)}.ui-agm__seg-btn:hover, .ui-agm__btn:hover{background: var(--ui-agm-lane)}.ui-agm__seg-btn:active, .ui-agm__btn:active{transform: scale(0.96)}.ui-agm__btn{padding: 0 12px}.ui-agm__btn--go{padding: 0 10px 0 12px;background: var(--ui-agm-ink);box-shadow: none;color: var(--ui-agm-card)}.ui-agm__btn--go:hover{background: var(--ui-agm-ink);opacity: 0.86}.ui-agm__btn--go > svg{color: inherit}.ui-agm__btn--quiet{height: 30px;padding: 0 8px;background: none;box-shadow: none;color: var(--ui-agm-text)}.ui-agm__btn--quiet:hover{background: var(--ui-agm-fill);color: var(--ui-agm-ink)}.ui-agm__btn kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-agm-card);box-shadow: 0 0 0 1px var(--ui-agm-line);font: inherit;font-size: 10.5px;font-weight: 400;color: var(--ui-agm-muted)}.ui-agm__btn--go kbd{background: rgba(255, 255, 255, 0.16);box-shadow: none;color: rgba(255, 255, 255, 0.8)}.ui-agm__icon{position: relative;display: inline-flex;align-items: center;gap: 12px;height: 48px;padding: 4px 14px 4px 4px;border-radius: 16px;background: var(--ui-agm-tray);text-align: left;transform-origin: 24px 50%;animation: ui-agm-open 300ms var(--ui-agm-ease) both}.ui-agm__icon-who{display: inline-flex;align-items: center;gap: 8px;height: 40px;padding: 0 12px 0 5px;border-radius: 12px;background: var(--ui-agm-card);box-shadow: var(--ui-agm-shadow)}.ui-agm__icon-who .ui-agm__face{width: 30px;height: 30px;box-shadow: none;background: var(--ui-agm-lane)}.ui-agm__icon-name{max-width: 140px;overflow: hidden;font-size: 13px;font-weight: 600;color: var(--ui-agm-strong);white-space: nowrap;text-overflow: ellipsis}.ui-agm__tools{display: flex;align-items: center}.ui-agm__tool{position: relative;display: grid;flex: none;place-items: center;width: 26px;height: 26px;border-radius: 8px;background: var(--ui-agm-card);box-shadow: inset 0 0 0 1px var(--ui-agm-line), 0 0 0 2px var(--ui-agm-tray);color: var(--ui-agm-muted);animation: ui-agm-join 480ms var(--ui-agm-ease) backwards;transition: transform 220ms var(--ui-agm-ease), box-shadow 220ms ease}.ui-agm__tool + .ui-agm__tool{margin-left: -6px}.ui-agm__tool > svg{width: 13px;height: 13px;opacity: 0.4;filter: grayscale(1);pointer-events: none;transition: opacity 300ms ease, filter 300ms ease}.ui-agm__tool[data-live]{z-index: 1}.ui-agm__tool[data-live] > svg, .ui-agm[data-status="finished"] .ui-agm__tool > svg{opacity: 1;filter: none}.ui-agm__tool[data-live="ask"]{background: linear-gradient(var(--ui-agm-amber-bg), var(--ui-agm-amber-bg)), var(--ui-agm-card)}.ui-agm__tool:hover{z-index: 3;transform: translateY(-4px);box-shadow: inset 0 0 0 1px var(--ui-agm-line), 0 0 0 2px var(--ui-agm-tray), 0 6px 12px -2px rgba(0, 0, 0, 0.14)}.ui-agm__tool:hover > svg{opacity: 1;filter: none}.ui-agm__tip{position: absolute;bottom: calc(100% + 10px);left: 50%;display: grid;gap: 1px;width: max-content;max-width: 220px;padding: 8px 11px;border-radius: 11px;background: var(--ui-agm-card);box-shadow: 0 0 0 1px var(--ui-agm-line), 0 12px 24px -8px rgba(0, 0, 0, 0.16), 0 4px 8px -4px rgba(0, 0, 0, 0.06);font-weight: 400;text-align: left;white-space: normal;opacity: 0;transform: translate(-50%, 4px) scale(0.97);transform-origin: 50% 100%;pointer-events: none;transition: opacity 160ms ease, transform 220ms var(--ui-agm-ease)}.ui-agm__tool:hover .ui-agm__tip{opacity: 1;transform: translate(-50%, 0)}.ui-agm__tip-title{overflow: hidden;font-size: 13px;font-weight: 500;line-height: 18px;color: var(--ui-agm-strong);white-space: nowrap;text-overflow: ellipsis}.ui-agm__tip-sub{font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-agm-muted)}.ui-agm__tools-more{flex: none;margin-right: 4px;font-size: 11px;font-weight: 500;color: var(--ui-agm-muted)}.ui-agm__icon-meta{flex: none;min-width: 36px;font-size: 13px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-agm-ink);white-space: nowrap}.ui-agm__icon-meta:is([data-status="idle"], [data-status="paused"], [data-status="cancelled"]){color: var(--ui-agm-muted)}.ui-agm__done-tag{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;padding: 0 10px 0 8px;border-radius: 999px;background: var(--ui-agm-green-bg);font-size: 12.5px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-agm-green);white-space: nowrap}.ui-agm__done-tag > svg{stroke-width: 1.8}.ui-agm__done-tag[data-tone="ask"]{background: var(--ui-agm-amber-bg);color: var(--ui-agm-amber)}.ui-agm__done-tag[data-tone="ask"] > svg{stroke-width: 1.5}.ui-agm__done-tag[data-tone="fail"]{background: var(--ui-agm-red-bg);color: var(--ui-agm-red)}@keyframes ui-agm-breathe{50%{opacity: 0.35}}@keyframes ui-agm-pulse{from{opacity: 0.45;transform: scale(0.6)}to{opacity: 0;transform: scale(1.8)}}@keyframes ui-agm-pop{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}@keyframes ui-agm-morph-in{from{opacity: 0;transform: scale(0.88);filter: blur(3px)}}@keyframes ui-agm-morph-out{to{opacity: 0;transform: scale(0.88);filter: blur(3px)}}@keyframes ui-agm-join{from{width: 0;margin-left: 0;opacity: 0;transform: scale(0.5)}40%{opacity: 0}}@keyframes ui-agm-drop{from{margin-top: -30px;opacity: 0;filter: blur(2px)}}@keyframes ui-agm-open{from{opacity: 0;transform: scale(0.92)}}@keyframes ui-agm-in{from{opacity: 0;transform: translateY(70%);filter: blur(2px)}}@keyframes ui-agm-out{to{opacity: 0;transform: translateY(-70%);filter: blur(2px)}}@keyframes ui-agm-shine{from{background-position: 100% 0}to{background-position: 0 0}}@keyframes ui-agm-grow{from{clip-path: inset(0 100% 0 0 round 4px)}to{clip-path: inset(0 0 0 0 round 4px)}}@keyframes ui-agm-sheen{from{background-position: -100% 0}to{background-position: 200% 0}}@media (pointer: coarse){.ui-agm__fold, .ui-agm__info-close{width: 36px;height: 36px}.ui-agm__seg-btn, .ui-agm__btn{height: 36px}}@media (prefers-reduced-motion: reduce){.ui-agm *, .ui-agm *::before, .ui-agm *::after{animation-duration: 1ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important}}:where(.dark, [data-theme="dark"]) .ui-agm{--ui-agm-tray: #111113;--ui-agm-card: #19191b;--ui-agm-strong: #ededed;--ui-agm-ink: #ededed;--ui-agm-text: #a1a1a1;--ui-agm-muted: #8b8b92;--ui-agm-faint: #5c5c63;--ui-agm-line: #2a2a2e;--ui-agm-edge: #2a2a2e;--ui-agm-lane: #232326;--ui-agm-fill: #2a2a2e;--ui-agm-accent: #5b8cff;--ui-agm-accent-bg: rgba(91, 140, 255, 0.14);--ui-agm-green: #3ecf8e;--ui-agm-green-bg: rgba(62, 207, 142, 0.13);--ui-agm-red: #ff6b6b;--ui-agm-red-bg: rgba(255, 107, 107, 0.12);--ui-agm-amber: #f5b638;--ui-agm-amber-bg: rgba(245, 182, 56, 0.14);--ui-agm-shine: rgba(255, 255, 255, 0.95);--ui-agm-ring: rgba(255, 255, 255, 0.3);--ui-agm-seg: #2c2c30;--ui-agm-live: 91, 140, 255;--ui-agm-hot: #6b6b72;--ui-agm-shadow: 0 0 0 1px var(--ui-agm-line), 0 1px 2px rgba(0, 0, 0, 0.3)}:where(.dark, [data-theme="dark"]) .ui-agm__btn--go{color: #111113}:where(.dark, [data-theme="dark"]) .ui-agm__btn--go kbd{background: rgba(0, 0, 0, 0.1);color: rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-agm__seg[data-state="running"]::before{background-image: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.22) 50%, transparent 100%)}`,
  S = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  re = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  ie = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agm-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  C = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agm-strong, #181717)` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  w = () =>
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
  T = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#5E6AD2`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`,
      }),
    }),
  E = {
    release: {
      agent: { name: `Claude Opus 5.5`, role: `Release agent · web-app v3.2`, mark: (0, r.jsx)(S, {}) },
      rate: 0.0058,
      phases: [
        {
          id: `issues`,
          kind: `read`,
          logo: (0, r.jsx)(T, {}),
          tool: `Linear`,
          doing: `Collecting the v3.2 issues`,
          did: `Collected 14 issues`,
          ms: 1700,
          detail: `Everything closed in the v3.2 cycle – 9 features and 5 fixes, 2 left for v3.3.`,
          output: `cycle:v3.2 status:done`,
        },
        {
          id: `diff`,
          kind: `search`,
          logo: (0, r.jsx)(C, {}),
          tool: `GitHub`,
          doing: `Comparing v3.1…main`,
          did: `Compared 38 commits`,
          ms: 2300,
          detail: `38 commits from 6 people since the v3.1 tag, each matched to one of the issues.`,
          output: `git log v3.1..main --oneline`,
        },
        {
          id: `notes`,
          kind: `edit`,
          logo: (0, r.jsx)(ie, {}),
          tool: `Notion`,
          doing: `Drafting the release notes`,
          did: `Drafted the release notes`,
          ms: 2800,
          detail: `Grouped by area and written for people who skim – the two breaking changes up top.`,
          output: `Releases / v3.2`,
        },
        {
          id: `build`,
          kind: `run`,
          tool: `Terminal`,
          doing: `Building the preview`,
          did: `Built the preview in 41s`,
          ms: 2600,
          detail: `Built without warnings and checked the three busiest routes on the preview.`,
          output: `npm run build && npm run smoke`,
        },
        {
          id: `ask`,
          ask: {
            title: `Ready to ship`,
            command: `gh release create v3.2.0 --latest`,
            icon: (0, r.jsx)(C, {}),
          },
        },
        {
          id: `tag`,
          kind: `run`,
          logo: (0, r.jsx)(C, {}),
          tool: `GitHub`,
          doing: `Publishing v3.2.0`,
          did: `Published v3.2.0`,
          ms: 1600,
          detail: `Tagged main and published the release with the notes attached.`,
          output: `gh release create v3.2.0 --latest`,
        },
        {
          id: `post`,
          kind: `web`,
          logo: (0, r.jsx)(w, {}),
          tool: `Slack`,
          doing: `Announcing in #releases`,
          did: `Announced in #releases`,
          ms: 1300,
          detail: `Posted the highlights and a link to the notes, and pinned it.`,
          output: `#releases`,
        },
      ],
      outcome: { note: `v3.2.0 is live · 14 changes` },
    },
    support: {
      agent: { name: `GPT-5`, role: `Support agent · ticket #4821`, mark: (0, r.jsx)(re, {}) },
      rate: 0.0036,
      phases: [
        {
          id: `thread`,
          kind: `read`,
          logo: (0, r.jsx)(w, {}),
          tool: `Slack`,
          doing: `Reading the customer thread`,
          did: `Read the customer thread`,
          ms: 1900,
          detail: `12 messages – the customer was charged twice for a single order.`,
          output: `#support › Maria Lopez`,
        },
        {
          id: `policy`,
          kind: `search`,
          logo: (0, r.jsx)(ie, {}),
          tool: `Notion`,
          doing: `Looking up the refund policy`,
          did: `Found the refund policy`,
          ms: 2e3,
          detail: `Double charges are refunded in full, no approval needed.`,
          output: `Policies / Refunds`,
        },
        {
          id: `orders`,
          kind: `read`,
          logo: (0, r.jsx)(
            () =>
              (0, r.jsx)(`svg`, {
                viewBox: `0 0 24 24`,
                fill: `#1FA463`,
                "aria-hidden": `true`,
                children: (0, r.jsx)(`path`, {
                  d: `M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z`,
                }),
              }),
            {},
          ),
          tool: `Google Drive`,
          doing: `Checking the orders sheet`,
          did: `Matched order #20931`,
          ms: 2100,
          detail: `Order #20931 shows two charges of $129 a minute apart.`,
          output: `Orders 2026 › October`,
          fails: {
            error: `The orders sheet is locked`,
            label: `Orders sheet was locked`,
            detail: `Someone else had the sheet open for editing – it tried again a few seconds later.`,
          },
        },
        {
          id: `reply`,
          kind: `edit`,
          doing: `Writing the reply`,
          did: `Wrote the reply`,
          ms: 2700,
          detail: `A short apology, the refund of $129 and when it lands – 3 to 5 days.`,
        },
        {
          id: `close`,
          kind: `web`,
          logo: (0, r.jsx)(T, {}),
          tool: `Linear`,
          doing: `Closing SUP-4821`,
          did: `Closed SUP-4821`,
          ms: 1200,
          detail: `Linked the refund to the ticket and closed it.`,
          output: `SUP-4821`,
        },
      ],
      outcome: { note: `Refund sent · ticket closed` },
    },
  },
  D = { state: `idle`, steps: [], pausedFor: 0, cost: 0 };
function O() {
  let [e, t] = (0, n.useState)(`release`),
    [i, a] = (0, n.useState)(D),
    o = (0, n.useRef)(D),
    s = (0, n.useRef)(0),
    c = (0, n.useRef)(0),
    l = (0, n.useRef)(0),
    u = (0, n.useRef)(!1),
    d = (0, n.useRef)(0),
    f = (0, n.useRef)(e),
    p = (e) => {
      ((o.current = { ...o.current, ...e }), a(o.current));
    },
    m = () => E[f.current],
    h = (e) => {
      let t = m().phases[e];
      if (((s.current = e), (c.current = Date.now()), !t)) {
        (p({
          state: `finished`,
          until: Date.now(),
          steps: o.current.steps.map((e) => (e.state === `running` ? { ...e, state: `done` } : e)),
        }),
          (d.current = Date.now() + 5200));
        return;
      }
      if (`ask` in t) {
        (p({ state: `waiting`, ask: t.ask }), (d.current = Date.now() + 6500));
        return;
      }
      let n = o.current.steps.filter((e) => e.state === `queued` && e.id !== t.id),
        r = o.current.steps.filter((e) => e.state === `done` || e.state === `failed`);
      p({
        state: `running`,
        ask: void 0,
        error: void 0,
        steps: [
          ...r,
          {
            id: `${t.id}-${Date.now()}`,
            kind: t.kind,
            icon: t.logo,
            tool: t.tool,
            label: t.doing,
            detail: t.detail,
            output: t.output,
            state: `running`,
            since: Date.now(),
          },
          ...n,
        ],
      });
    },
    g = (e) => {
      ((f.current = e), (u.current = !1));
      let t = E[e].phases
        .filter((e) => !(`ask` in e))
        .map((e) => ({ id: e.id, kind: e.kind, icon: e.logo, label: e.doing, state: `queued` }));
      ((o.current = { ...D, state: `running`, since: Date.now(), steps: t }), a(o.current), h(0));
    };
  ((0, n.useEffect)(() => {
    g(e);
  }, [e]),
    (0, n.useEffect)(() => {
      let e = Date.now(),
        n = window.setInterval(() => {
          let n = Date.now(),
            r = n - e;
          e = n;
          let i = o.current;
          (i.state === `running` || i.state === `waiting`) &&
            p({ cost: i.cost + ((m().rate * r) / 1e3) * (i.state === `running` ? 1 : 0.15) });
          let a = m().phases[s.current];
          if (i.state === `running` && a && !(`ask` in a) && n - c.current >= a.ms) {
            if (a.fails && !u.current) {
              ((u.current = !0),
                p({
                  state: `failed`,
                  error: a.fails.error,
                  steps: i.steps.map((e) =>
                    e.state === `running`
                      ? {
                          ...e,
                          state: `failed`,
                          label: a.fails.label,
                          detail: a.fails.detail,
                          took: n - (e.since ?? n),
                        }
                      : e,
                  ),
                }),
                (d.current = n + 4e3));
              return;
            }
            (p({
              steps: i.steps
                .map((e) =>
                  e.state === `running` ? { ...e, state: `done`, label: a.did, took: n - (e.since ?? n) } : e,
                )
                .filter((e) => e.state !== `queued` || e.id !== a.id),
            }),
              h(s.current + 1));
          } else
            i.state === `waiting` && n > d.current
              ? _()
              : i.state === `failed` && n > d.current
                ? v()
                : (i.state === `finished` || i.state === `cancelled`) && n > d.current
                  ? (p({ ...D }), (d.current = n + 2400))
                  : i.state === `idle` &&
                    d.current &&
                    n > d.current &&
                    ((d.current = 0), t(f.current === `release` ? `support` : `release`));
        }, 100);
      return () => window.clearInterval(n);
    }, []));
  let _ = () => {
      o.current.state === `waiting` && h(s.current + 1);
    },
    ee = () => {
      o.current.state === `waiting` &&
        (p({ state: `cancelled`, until: Date.now(), ask: void 0 }), (d.current = Date.now() + 4e3));
    },
    v = () => {
      o.current.state === `failed` && h(s.current);
    },
    y = () => {
      o.current.state === `running` && ((l.current = Date.now()), p({ state: `paused` }));
    },
    b = () => {
      if (o.current.state !== `paused`) return;
      let e = Date.now() - l.current;
      ((c.current += e),
        p({
          state: `running`,
          pausedFor: o.current.pausedFor + e,
          steps: o.current.steps.map((t) =>
            t.state === `running` ? { ...t, since: (t.since ?? 0) + e } : t,
          ),
        }));
    },
    x = () => {
      if (![`running`, `paused`, `waiting`].includes(o.current.state)) return;
      let e = Date.now();
      (p({
        state: `cancelled`,
        until: e,
        ask: void 0,
        steps: o.current.steps
          .filter((e) => e.state !== `queued`)
          .map((t) => (t.state === `running` ? { ...t, state: `done`, took: e - (t.since ?? e) } : t)),
      }),
        (d.current = e + 4e3));
    },
    ne = E[e];
  return (0, r.jsx)(`div`, {
    className: `agmc-demo`,
    children: (0, r.jsx)(
      te,
      {
        state: i.state,
        agent: ne.agent,
        steps: i.steps,
        since: i.since,
        until: i.state === `finished` || i.state === `cancelled` ? i.until : void 0,
        pausedFor: i.pausedFor,
        cost: i.state === `idle` ? void 0 : i.cost,
        ask: i.ask,
        outcome: ne.outcome,
        error: i.error,
        onPause: y,
        onResume: b,
        onCancel: x,
        onAllow: _,
        onDecline: ee,
        onRetry: v,
        onOpenLog: () => {},
      },
      e,
    ),
  });
}
