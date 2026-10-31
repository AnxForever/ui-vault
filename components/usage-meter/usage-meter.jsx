import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = (e, t = 0) =>
    new Intl.NumberFormat(`en-US`, { minimumFractionDigits: t, maximumFractionDigits: t }).format(e),
  a = (e, t) => (t ? `${e} ${t}` : e),
  o = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` }),
  s = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric`, year: `numeric` }),
  c = (e) => (typeof e == `number` && Number.isFinite(e) ? e : 0),
  l = (e, t) => (e > 0 && e < 1 ? `<1` : i(t));
function u(e) {
  let t = Math.ceil((e.getTime() - Date.now()) / 864e5);
  return t <= 0
    ? `Resets today`
    : t === 1
      ? `Resets tomorrow`
      : t > 60
        ? `Resets ${s.format(e)}`
        : `Resets in ${t} days`;
}
var d = [`var(--ui-um-c1)`, `var(--ui-um-c2)`, `var(--ui-um-c3)`, `var(--ui-um-c4)`, `var(--ui-um-c5)`],
  f = (e) => 1 - (1 - e) ** 4,
  p = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function m(e, t, r) {
  let [i, a] = (0, n.useState)(() => Object.fromEntries(Object.keys(e).map((e) => [e, 0]))),
    o = (0, n.useRef)(i),
    s = (0, n.useRef)(!1),
    c = JSON.stringify(e);
  return (
    (0, n.useEffect)(() => {
      let e = JSON.parse(c),
        n = { ...o.current };
      if (p()) {
        ((o.current = e), a(e));
        return;
      }
      let i = Object.values(e).some((e) => e !== 0),
        l = i && !s.current ? t : r;
      i && (s.current = !0);
      let u = performance.now(),
        d = 0,
        m = (t) => {
          let r = Math.min(1, (t - u) / l),
            i = f(r),
            s = {};
          for (let t in e) s[t] = (n[t] ?? 0) + (e[t] - (n[t] ?? 0)) * i;
          ((o.current = s), a(s), r < 1 && (d = requestAnimationFrame(m)));
        };
      return ((d = requestAnimationFrame(m)), () => cancelAnimationFrame(d));
    }, [c]),
    (e) => i[e] ?? 0
  );
}
function ee(e, t, n) {
  if (!e || !t) return;
  let r = e.querySelector(n);
  if (!r || !r.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i = !t.dataset.ready;
  (i && (t.style.transition = `none`),
    (t.style.opacity = `1`),
    (t.style.width = `${r.offsetWidth}px`),
    (t.style.height = `${r.offsetHeight}px`),
    (t.style.transform = `translate(${r.offsetLeft}px, ${r.offsetTop}px)`),
    i && ((t.dataset.ready = `1`), t.offsetWidth, (t.style.transition = ``)));
}
function te(e, t) {
  let n = [...t];
  return (
    e.forEach((e, r) => {
      t.some((t) => t.label === e.label) ||
        n.splice(Math.min(r, n.length), 0, { ...e, value: 0, leaving: !0 });
    }),
    n
  );
}
function h({
  total: e,
  used: t,
  limits: s = [],
  periods: f,
  period: p,
  defaultPeriod: h,
  onPeriodChange: re,
  resetAt: g,
  daily: _,
  onUpgrade: ie,
  title: v = `Usage`,
  plan: y,
  unit: b = `credits`,
  warnAt: ae = 0.8,
  upgradeLabel: oe = `Upgrade`,
  topUpLabel: se = `Add credits`,
  className: ce,
}) {
  let x = (0, n.useId)(),
    le = (0, n.useRef)(null),
    ue = (0, n.useRef)(null),
    S = (0, n.useRef)(null),
    C = (0, n.useRef)(null),
    w = (0, n.useRef)(null),
    T = (0, n.useRef)(null),
    de = (0, n.useRef)(null),
    [fe, pe] = (0, n.useState)(h ?? f?.[0]?.id),
    E = p ?? fe,
    [me, he] = (0, n.useState)(!1),
    [D, O] = (0, n.useState)(null),
    [k, ge] = (0, n.useState)(null),
    [A, j] = (0, n.useState)(null),
    [_e, ve] = (0, n.useState)(``),
    M = (0, n.useRef)(new Map()),
    ye = (e) =>
      e.color
        ? e.color
        : (M.current.has(e.label) || M.current.set(e.label, d[M.current.size % d.length]),
          M.current.get(e.label)),
    N = t.map((e) => ({ ...e, color: ye(e) })),
    [P, F] = (0, n.useState)(N),
    be = t.map((e) => `${e.label}:${e.value}:${e.color ?? ``}`).join(`|`),
    I = (0, n.useRef)(!0);
  ((0, n.useLayoutEffect)(() => {
    if (I.current) {
      I.current = !1;
      return;
    }
    F((e) =>
      te(
        e.filter((e) => !e.leaving),
        N,
      ),
    );
    let e = window.setTimeout(() => F((e) => e.filter((e) => !e.leaving)), 460);
    return () => clearTimeout(e);
  }, [be]),
    (0, n.useEffect)(() => {
      let e = le.current;
      if (!e || typeof IntersectionObserver > `u`) {
        he(!0);
        return;
      }
      let t = new IntersectionObserver(
        (e) => {
          e.some((e) => e.isIntersecting) && (he(!0), t.disconnect());
        },
        { threshold: 0.2 },
      );
      return (t.observe(e), () => t.disconnect());
    }, []),
    (e = Math.max(0, c(e))));
  let L = t.reduce((e, t) => e + Math.max(0, c(t.value)), 0),
    R = e > 0 ? L / e : L > 0 ? 1 / 0 : 0,
    z = R >= 1 ? `limit` : R >= ae ? `warn` : `ok`,
    xe = Math.max(e, L) || 1,
    B = { used: L, left: Math.max(0, e - L), pct: Math.min(R * 100, 1e3) };
  if (
    (P.forEach((e) => (B[`r:${e.label}`] = e.leaving ? 0 : Math.max(0, c(e.value)))),
    s.forEach((e) => (B[`l:${e.label}`] = c(e.used))),
    _?.forEach((e, t) => (B[`d:${t}`] = c(e.value))),
    !me)
  )
    for (let e in B) B[e] = 0;
  let V = m(B, 1200, 650),
    H = 0,
    U = P.map((e) => {
      let t = (V(`r:${e.label}`) / xe) * 100,
        n = { ...e, left: H, width: t };
      return ((H += t), n);
    }),
    W = P.find((e) => e.label === D && !e.leaving),
    G = P.find((e) => e.label === k),
    K = U.find((e) => e.label === k),
    Se = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50,
    q = (e) => {
      (O(e), e && ge(e));
    },
    Ce = (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = ((e.clientX - t.left) / t.width) * 100;
      return U.find((e) => !e.leaving && e.width > 0 && n >= e.left && n <= e.left + e.width)?.label ?? null;
    },
    we = (e) => {
      let t = P.filter((e) => !e.leaving && e.value > 0);
      if (!t.length) return;
      let n = t.findIndex((e) => e.label === D);
      if (e.key === `ArrowRight`) q(t[(n + 1) % t.length].label);
      else if (e.key === `ArrowLeft`) q(t[(n - 1 + t.length) % t.length].label);
      else if (e.key === `Escape`) q(null);
      else return;
      e.preventDefault();
    },
    J = _ ?? [],
    Te = Math.max(1, ...J.map((e) => c(e.value))),
    Y = J.filter((e) => e.value !== null),
    Ee = Y.length ? Y.reduce((e, t) => e + c(t.value), 0) / Y.length : 0,
    De = (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = Math.floor(((e.clientX - t.left) / t.width) * J.length);
      return Math.min(J.length - 1, Math.max(0, n));
    },
    Oe = (e) => {
      if (J.length) {
        if (e.key === `ArrowRight`) j((e) => Math.min(J.length - 1, e === null ? 0 : e + 1));
        else if (e.key === `ArrowLeft`) j((e) => Math.max(0, e === null ? J.length - 1 : e - 1));
        else if (e.key === `Escape`) j(null);
        else return;
        e.preventDefault();
      }
    },
    X = A === null ? void 0 : J[A],
    ke = (0, n.useRef)(J.length),
    Ae = (0, n.useRef)(!1);
  ke.current !== J.length && ((ke.current = J.length), (Ae.current = !0));
  let je = (e) => {
      e !== E && (p === void 0 && pe(e), re?.(e), O(null), j(null));
    },
    Me = (e) => {
      if (!f?.length) return;
      let t = f.findIndex((e) => e.id === E),
        n = -1;
      (e.key === `ArrowRight` || e.key === `ArrowDown`
        ? (n = (t + 1) % f.length)
        : (e.key === `ArrowLeft` || e.key === `ArrowUp`) && (n = (t - 1 + f.length) % f.length),
        !(n < 0) &&
          (e.preventDefault(), je(f[n].id), C.current?.querySelectorAll(`[role=radio]`)[n]?.focus()));
    };
  ((0, n.useLayoutEffect)(() => {
    ee(C.current, w.current, `[aria-checked="true"]`);
  }),
    (0, n.useLayoutEffect)(() => {
      let e = C.current;
      if (!e) return;
      let t = new ResizeObserver(() => ee(e, w.current, `[aria-checked="true"]`));
      return (t.observe(e), () => t.disconnect());
    }, []),
    (0, n.useLayoutEffect)(() => {
      let e = ue.current,
        t = S.current;
      if (!e || !t) return;
      let n = () => (e.style.height = `${t.offsetHeight}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, []),
    (0, n.useLayoutEffect)(() => {
      let e = T.current,
        t = de.current;
      if (!e || !t) return;
      let n = () => (e.style.width = `${t.offsetWidth}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, []));
  let Ne = (0, n.useRef)(z);
  (0, n.useEffect)(() => {
    Ne.current !== z &&
      ((Ne.current = z),
      ve(
        z === `limit`
          ? `${v}: limit reached, ${i(L)} of ${i(e)} ${b} used`
          : z === `warn`
            ? `${v}: running low, ${Math.round(R * 100)}% of ${b} used`
            : `${v}: ${i(L)} of ${i(e)} ${b} used`,
      ));
  }, [z]);
  let Z = g === void 0 ? null : new Date(g),
    Q = Z && !Number.isNaN(Z.getTime()) ? Z : null,
    $ = z !== `ok`,
    Pe = V(`pct`);
  return (0, r.jsxs)(`section`, {
    ref: le,
    className: [`ui-um`, ce].filter(Boolean).join(` `),
    "aria-labelledby": `${x}-title`,
    "data-state": z,
    children: [
      (0, r.jsx)(`style`, { href: `ui-usage-meter`, precedence: `default`, children: ne }),
      (0, r.jsx)(`div`, {
        ref: ue,
        className: `ui-um__card`,
        children: (0, r.jsxs)(`div`, {
          ref: S,
          className: `ui-um__inner`,
          children: [
            (0, r.jsxs)(`header`, {
              className: `ui-um__head`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-um__heading`,
                  children: [
                    (0, r.jsx)(`h3`, {
                      id: `${x}-title`,
                      className: `ui-um__title`,
                      title: v,
                      dir: `auto`,
                      children: v,
                    }),
                    (y || Q) &&
                      (0, r.jsxs)(`p`, {
                        className: `ui-um__sub`,
                        title: [y, Q && u(Q)].filter(Boolean).join(` · `),
                        children: [
                          y,
                          y && Q && (0, r.jsx)(`span`, { className: `ui-um__sep`, children: `·` }),
                          Q &&
                            (0, r.jsx)(`time`, {
                              dateTime: Q.toISOString(),
                              title: `Resets on ${o.format(Q)}`,
                              children: u(Q),
                            }),
                        ],
                      }),
                  ],
                }),
                f &&
                  f.length > 1 &&
                  (0, r.jsxs)(`div`, {
                    ref: C,
                    className: `ui-um__switch`,
                    role: `radiogroup`,
                    "aria-label": `Period`,
                    onKeyDown: Me,
                    children: [
                      (0, r.jsx)(`span`, { ref: w, className: `ui-um__pill`, "aria-hidden": `true` }),
                      f.map((e) =>
                        (0, r.jsx)(
                          `button`,
                          {
                            type: `button`,
                            role: `radio`,
                            "aria-checked": e.id === E,
                            tabIndex: e.id === E ? 0 : -1,
                            className: `ui-um__option`,
                            title: e.label,
                            onClick: () => je(e.id),
                            children: e.label,
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
            (0, r.jsxs)(`div`, {
              className: `ui-um__figure`,
              children: [
                (0, r.jsxs)(`p`, {
                  className: `ui-um__amount`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-um__big`, children: i(V(`used`)) }),
                    (0, r.jsxs)(`span`, { className: `ui-um__of`, children: [`of `, a(i(e), b)] }),
                  ],
                }),
                (0, r.jsxs)(`span`, {
                  className: `ui-um__pct`,
                  "data-state": z,
                  children: [
                    $ && (0, r.jsx)(`span`, { className: `ui-um__dot`, "aria-hidden": `true` }),
                    Pe > 999 ? `>999` : i(Pe),
                    `%`,
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(`div`, {
              className: `ui-um__bar`,
              tabIndex: 0,
              role: `group`,
              "aria-label": `${i(L)} of ${i(e)} ${b} used – arrow keys read each category`,
              "data-active": W ? `` : void 0,
              onPointerMove: (e) => e.pointerType === `mouse` && q(Ce(e)),
              onPointerLeave: (e) => e.pointerType === `mouse` && q(null),
              onPointerUp: (e) => {
                if (e.pointerType === `mouse`) return;
                let t = Ce(e);
                q(t === D ? null : t);
              },
              onKeyDown: we,
              onBlur: () => q(null),
              children: [
                (0, r.jsx)(`div`, {
                  className: `ui-um__track`,
                  role: `meter`,
                  "aria-valuemin": 0,
                  "aria-valuemax": e,
                  "aria-valuenow": Math.min(L, e),
                  "aria-valuetext": `${i(L)} of ${i(e)} ${b}`,
                  children: U.map((e) =>
                    (0, r.jsx)(
                      `span`,
                      {
                        className: `ui-um__seg`,
                        "data-active": e.label === D || void 0,
                        style: { width: `${e.width}%`, background: e.color },
                      },
                      e.label,
                    ),
                  ),
                }),
                (0, r.jsx)(`div`, {
                  className: `ui-um__tip`,
                  "data-open": W ? `` : void 0,
                  style: { left: `${Se}%`, "--ui-um-tip-x": `${-Se}%` },
                  "aria-live": `polite`,
                  children:
                    G &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-um__tip-label`,
                          children: [
                            (0, r.jsx)(`span`, {
                              className: `ui-um__swatch`,
                              style: { background: G.color },
                            }),
                            (0, r.jsx)(`span`, {
                              className: `ui-um__tip-name`,
                              dir: `auto`,
                              children: G.label,
                            }),
                          ],
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-um__tip-value`,
                          children: [
                            a(l(c(G.value), c(G.value)), b),
                            (0, r.jsxs)(`span`, {
                              className: `ui-um__muted`,
                              children: [` · `, i(L ? (c(G.value) / L) * 100 : 0), `%`],
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, r.jsx)(`ul`, {
              className: `ui-um__legend`,
              "aria-label": `By category`,
              "data-active": W ? `` : void 0,
              children: P.map((e) => {
                let t = V(`r:${e.label}`);
                return (0, r.jsx)(
                  `li`,
                  {
                    className: `ui-um__row`,
                    "data-leaving": e.leaving || void 0,
                    children: (0, r.jsxs)(`div`, {
                      className: `ui-um__item`,
                      "data-active": e.label === D || void 0,
                      onPointerEnter: (t) => t.pointerType === `mouse` && !e.leaving && q(e.label),
                      onPointerLeave: (e) => e.pointerType === `mouse` && q(null),
                      onPointerUp: (t) =>
                        t.pointerType !== `mouse` && !e.leaving && q(e.label === D ? null : e.label),
                      children: [
                        (0, r.jsx)(`span`, { className: `ui-um__swatch`, style: { background: e.color } }),
                        (0, r.jsx)(`span`, {
                          className: `ui-um__label`,
                          title: e.label,
                          dir: `auto`,
                          children: e.label,
                        }),
                        (0, r.jsx)(`span`, { className: `ui-um__value`, children: l(c(e.value), t) }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-um__share`,
                          children: [i(V(`used`) ? (t / V(`used`)) * 100 : 0), `%`],
                        }),
                      ],
                    }),
                  },
                  e.label,
                );
              }),
            }),
            J.length > 0 &&
              (0, r.jsxs)(`div`, {
                className: `ui-um__daily`,
                children: [
                  (0, r.jsxs)(`div`, {
                    className: `ui-um__daily-head`,
                    children: [
                      (0, r.jsx)(`span`, { children: `Per day` }),
                      (0, r.jsx)(
                        `span`,
                        {
                          className: `ui-um__daily-read`,
                          children: X
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  X.label,
                                  ` · `,
                                  (0, r.jsx)(`b`, { children: X.value === null ? `–` : a(i(X.value), b) }),
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [`Avg `, (0, r.jsx)(`b`, { children: i(Ee) }), ` / day`],
                              }),
                        },
                        X ? `d${A}` : `avg`,
                      ),
                    ],
                  }),
                  (0, r.jsx)(
                    `div`,
                    {
                      className: `ui-um__spark`,
                      tabIndex: 0,
                      role: `img`,
                      "aria-label": `${v} per day, ${i(Ee)} ${b} on average – arrow keys read each day`,
                      "data-hover": A !== null || void 0,
                      "data-regrow": Ae.current || void 0,
                      "data-few": J.length <= 14 || void 0,
                      "data-many": J.length > 45 ? (J.length > 120 ? `dense` : ``) : void 0,
                      onPointerMove: (e) => j(De(e)),
                      onPointerDown: (e) => j(De(e)),
                      onPointerLeave: (e) => e.pointerType === `mouse` && j(null),
                      onKeyDown: Oe,
                      onBlur: () => j(null),
                      children: J.map((e, t) =>
                        (0, r.jsx)(
                          `span`,
                          {
                            className: `ui-um__day`,
                            "data-future": e.value === null || void 0,
                            "data-active": t === A || void 0,
                            style: { "--i": t },
                            children: (0, r.jsx)(`span`, {
                              style: {
                                height:
                                  e.value === null ? void 0 : `${Math.max(4, (V(`d:${t}`) / Te) * 100)}%`,
                              },
                            }),
                          },
                          t,
                        ),
                      ),
                    },
                    J.length,
                  ),
                ],
              }),
            s.length > 0 &&
              (0, r.jsx)(`ul`, {
                className: `ui-um__limits`,
                "aria-label": `Plan limits`,
                style: { "--n": Math.min(3, s.length) },
                children: s.map((e) => {
                  let t = e.total == null || !isFinite(e.total),
                    n =
                      e.decimals ?? (Number.isInteger(c(e.used)) && (t || Number.isInteger(e.total)) ? 0 : 1),
                    o = c(e.used),
                    s = t ? 0 : o / Math.max(e.total, 1e-9),
                    l = t ? `ok` : s >= 1 ? `limit` : s >= ae ? `warn` : `ok`,
                    u = V(`l:${e.label}`),
                    d = t ? `∞` : i(e.total, Number.isInteger(e.total) ? 0 : n);
                  return (0, r.jsxs)(
                    `li`,
                    {
                      className: `ui-um__limit`,
                      "data-state": l,
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-um__limit-label`,
                          children: [
                            (0, r.jsx)(`span`, {
                              className: `ui-um__limit-name`,
                              title: e.label,
                              dir: `auto`,
                              children: e.label,
                            }),
                            l !== `ok` &&
                              (0, r.jsx)(`span`, {
                                className: `ui-um__dot`,
                                "aria-label": l === `limit` ? `At the limit` : `Close to the limit`,
                              }),
                          ],
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-um__limit-value`,
                          children: [
                            i(u, n),
                            (0, r.jsxs)(`span`, {
                              className: `ui-um__muted`,
                              children: [` of `, a(d, t ? void 0 : e.unit)],
                            }),
                          ],
                        }),
                        t
                          ? (0, r.jsx)(`span`, {
                              className: `ui-um__thin`,
                              "data-unlimited": ``,
                              "aria-label": `${e.label}: ${i(o, n)}, unlimited`,
                              role: `img`,
                            })
                          : (0, r.jsx)(`span`, {
                              className: `ui-um__thin`,
                              role: `meter`,
                              "aria-label": e.label,
                              "aria-valuemin": 0,
                              "aria-valuemax": e.total,
                              "aria-valuenow": Math.min(o, e.total),
                              "aria-valuetext": `${i(o, n)} of ${a(d, e.unit)}`,
                              children: (0, r.jsx)(`span`, {
                                style: { width: `${Math.min(100, (u / Math.max(e.total, 1e-9)) * 100)}%` },
                              }),
                            }),
                      ],
                    },
                    e.label,
                  );
                }),
              }),
          ],
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-um__foot`,
        children: [
          (0, r.jsxs)(
            `span`,
            {
              className: `ui-um__status`,
              children: [
                $ && (0, r.jsx)(`span`, { className: `ui-um__dot`, "aria-hidden": `true` }),
                z === `limit`
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(`b`, { children: `Limit reached` }),
                        L > e &&
                          (0, r.jsx)(`span`, { className: `ui-um__muted`, children: a(i(L - e), `over`) }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        z === `warn` && (0, r.jsx)(`b`, { children: `Running low` }),
                        (0, r.jsxs)(`span`, {
                          className: z === `warn` ? `ui-um__muted` : void 0,
                          children: [a(i(V(`left`)), b), ` left`],
                        }),
                      ],
                    }),
              ],
            },
            z,
          ),
          (0, r.jsx)(`button`, {
            ref: T,
            type: `button`,
            className: `ui-um__action`,
            "data-strong": $ || void 0,
            onClick: () => ie?.(z),
            children: (0, r.jsx)(`span`, {
              ref: de,
              className: `ui-um__action-inner`,
              children: (0, r.jsx)(
                `span`,
                { className: `ui-um__action-text`, children: $ ? se : oe },
                $ ? `top-up` : `upgrade`,
              ),
            }),
          }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-um__live`, "aria-live": `polite`, children: _e }),
    ],
  });
}
var ne = `.ui-um{--ui-um-tray: #f0f0f0;--ui-um-card: #ffffff;--ui-um-line: #ececec;--ui-um-ink: #171717;--ui-um-text: #404040;--ui-um-muted: #8f8f8f;--ui-um-faint: #b5b5b5;--ui-um-well: #f4f4f5;--ui-um-hover: #f4f4f5;--ui-um-track: #efeff1;--ui-um-fill: #4a4a4f;--ui-um-spark: #dcdce0;--ui-um-accent: #2f6bff;--ui-um-warn: #f59e0b;--ui-um-warn-text: #b45309;--ui-um-c1: #2f6bff;--ui-um-c2: #74a0ff;--ui-um-c3: #b4cbff;--ui-um-c4: #a8a8ae;--ui-um-c5: #d4d4d8;--ui-um-focus: rgba(23, 23, 23, 0.22);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.06);--ui-um-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;grid-template-columns: minmax(0, 1fr);width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-um-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-um-text);-webkit-font-smoothing: antialiased}.ui-um *, .ui-um *::before, .ui-um *::after{box-sizing: border-box}:where(.ui-um) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-um) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-um) ul{list-style: none}.ui-um :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-um-focus);outline-offset: 2px}.ui-um b{font-weight: 500;color: var(--ui-um-ink)}.ui-um__muted{color: var(--ui-um-muted)}.ui-um__card{overflow: hidden;border-radius: 16px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 360ms var(--ui-um-ease)}.ui-um__inner{display: flow-root;padding: 14px 16px 18px}.ui-um__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-um__heading{flex: 1 1 auto;min-width: min(120px, 40%);padding-top: 2px}.ui-um__title{overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-um-ink);white-space: nowrap;text-overflow: ellipsis}.ui-um__sub{font-size: 12.5px;color: var(--ui-um-muted);white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-um__sep{margin: 0 6px;color: var(--ui-um-faint)}.ui-um__switch{position: relative;display: grid;grid-auto-columns: minmax(0, auto);grid-auto-flow: column;flex: 0 1 auto;min-width: 0;padding: 2px;border-radius: 10px;background: var(--ui-um-well);box-shadow: inset 0 0 0 1px var(--ui-um-line)}.ui-um__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-um-ease), width 320ms var(--ui-um-ease), height 320ms var(--ui-um-ease), opacity 200ms ease}.ui-um__option{position: relative;z-index: 1;min-width: 0;height: 26px;padding: 0 9px;overflow: hidden;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-um-muted);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease}.ui-um__option:hover, .ui-um__option[aria-checked="true"]{color: var(--ui-um-ink)}.ui-um__figure{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;margin-top: 18px}.ui-um__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 6px;min-width: 0}.ui-um__big{font-size: 28px;font-weight: 600;line-height: 34px;letter-spacing: -0.02em;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__of{font-size: 13px;color: var(--ui-um-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-um__pct{display: inline-flex;flex: none;align-items: center;gap: 6px;font-size: 13px;font-weight: 500;color: var(--ui-um-text);font-variant-numeric: tabular-nums;transition: color 260ms ease}.ui-um__pct[data-state="warn"]{color: var(--ui-um-warn-text)}.ui-um__pct[data-state="limit"]{color: var(--ui-um-ink)}.ui-um__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-um-warn);animation: ui-um-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-um[data-state="limit"] .ui-um__pct .ui-um__dot, .ui-um[data-state="limit"] .ui-um__status .ui-um__dot, .ui-um__limit[data-state="limit"] .ui-um__dot{box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-um-warn) 22%, transparent)}.ui-um__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 6px;cursor: default}.ui-um__track{display: flex;height: 10px;overflow: hidden;border-radius: 5px;background: var(--ui-um-track)}.ui-um__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-um__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-um-card)}.ui-um__bar[data-active] .ui-um__seg:not([data-active]){opacity: 0.28}.ui-um__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 1px;padding: 7px 10px 8px;border: 1px solid var(--ui-um-line);border-radius: 10px;background: var(--ui-um-card);box-shadow: var(--ui-um-tip-shadow);max-width: 100%;white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-um-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-um-ease), transform 260ms var(--ui-um-ease), opacity 160ms ease}.ui-um__tip[data-open]{opacity: 1;transform: translate(var(--ui-um-tip-x), 0)}.ui-um__tip-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-um__tip-label{display: flex;align-items: center;gap: 7px;font-size: 12px;color: var(--ui-um-muted)}.ui-um__tip-value{font-size: 13px;font-weight: 500;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__tip-value .ui-um__muted{font-weight: 400}.ui-um__legend{display: grid;margin-top: 10px}.ui-um__row{display: grid;grid-template-rows: 1fr;animation: ui-um-grow 380ms var(--ui-um-ease) both;transition: grid-template-rows 320ms var(--ui-um-ease) 80ms, opacity 200ms ease}.ui-um__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-um__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;transition: background-color 160ms ease, opacity 200ms ease}.ui-um__row[data-leaving] .ui-um__item{background: none}.ui-um__item[data-active]{background: var(--ui-um-hover)}.ui-um__legend[data-active] .ui-um__item:not([data-active]){opacity: 0.45}.ui-um__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-um__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-um-text)}.ui-um__value{color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-um__share{width: 40px;text-align: right;color: var(--ui-um-muted);font-variant-numeric: tabular-nums}.ui-um__daily{margin-top: 12px}.ui-um__daily-head{display: flex;justify-content: space-between;gap: 12px;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__daily-read{font-variant-numeric: tabular-nums;animation: ui-um-in 220ms var(--ui-um-ease) both}.ui-um__spark{display: flex;align-items: stretch;gap: 2px;height: 34px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-um__spark[data-many]{gap: 1px}.ui-um__spark[data-many="dense"]{gap: 0}.ui-um__spark[data-few]{gap: 5px}.ui-um__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-um__day > span{width: 100%;border-radius: 2px;background: var(--ui-um-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-um__spark[data-regrow] .ui-um__day > span{animation: ui-um-rise 520ms var(--ui-um-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-um__day[data-future] > span{height: 2px;background: var(--ui-um-track)}.ui-um__spark[data-hover] .ui-um__day:not([data-active]) > span{opacity: 0.6}.ui-um__day[data-active] > span{background: var(--ui-um-accent)}.ui-um__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 1px solid var(--ui-um-line)}.ui-um__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-um__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__limit-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-um__limit-value{color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums;overflow-wrap: anywhere}.ui-um__limit-value .ui-um__muted{font-weight: 400}.ui-um__thin{position: relative;display: block;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-um-track)}.ui-um__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-um-fill)}.ui-um__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-um-track) 0 3px, transparent 3px 6px)}.ui-um__foot{display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 6px 12px;min-height: 44px;padding: 6px 2px 2px 12px;font-size: 12.5px;color: var(--ui-um-muted)}.ui-um__status{display: flex;align-items: center;gap: 7px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-um__action{display: inline-flex;flex: none;justify-content: center;max-width: 100%;height: 32px;margin-left: auto;overflow: hidden;border-radius: 14px;font-size: 13px;font-weight: 500;color: var(--ui-um-ink);background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-um-ease), transform 140ms ease}.ui-um__action:hover{background: var(--ui-um-hover)}.ui-um__action:active{transform: scale(0.97)}.ui-um__action[data-strong]{background: var(--ui-um-ink);color: var(--ui-um-card);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 6px 14px -6px rgba(0, 0, 0, 0.35);animation: ui-um-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-um__action[data-strong]:hover{background: var(--ui-um-ink);opacity: 0.88}.ui-um__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 14px;white-space: nowrap}.ui-um__action-text{animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-um-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-um-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-um-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-um-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-um-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-um__inner{padding: 12px 14px 16px}.ui-um__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-um__switch{grid-auto-columns: minmax(0, auto)}.ui-um__option{padding: 0 6px}.ui-um__big{font-size: 26px}.ui-um__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-um__limit{grid-template-columns: minmax(0, 1fr) fit-content(60%);column-gap: 12px}.ui-um__limit-value{font-size: 12.5px;text-align: end}.ui-um__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-um__of{font-size: 12px}.ui-um__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-um__option{height: 34px}.ui-um__item{height: 36px}.ui-um__action{height: 38px;border-radius: 13px}.ui-um__foot{min-height: 50px}.ui-um__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-um *, .ui-um *::before, .ui-um *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-um{--ui-um-tray: #111113;--ui-um-card: #19191b;--ui-um-line: #2a2a2e;--ui-um-ink: #ededed;--ui-um-text: #c8c8cc;--ui-um-muted: #8b8b92;--ui-um-faint: #5c5c63;--ui-um-well: #111113;--ui-um-hover: #232326;--ui-um-track: #2a2a2e;--ui-um-fill: #b4b4ba;--ui-um-spark: #3a3a40;--ui-um-accent: #6d8bff;--ui-um-warn: #f5a524;--ui-um-warn-text: #f5b350;--ui-um-c1: #6d8bff;--ui-um-c2: #4c66c9;--ui-um-c3: #34468a;--ui-um-c4: #6b6b72;--ui-um-c5: #45454b;--ui-um-focus: rgba(255, 255, 255, 0.3);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35)}:where(.dark, [data-theme="dark"]) .ui-um__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-um__tip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;
