import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = 0,
  a = () => `step-${Date.now().toString(36)}-${(i++).toString(36)}`,
  o = Array.from({ length: 8 }, (e, t) => t),
  s = (e, t, n) => {
    let r = e.slice(),
      [i] = r.splice(t, 1);
    return (r.splice(n, 0, i), r);
  },
  c = () => typeof window < `u` && !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,
  ee = (e) => {
    let t = getComputedStyle(e).transform;
    if (!t || t === `none`) return 0;
    try {
      return new DOMMatrixReadOnly(t).m42;
    } catch {
      return 0;
    }
  },
  l = (e) => (typeof e == `number` && Number.isFinite(e) ? e : void 0),
  u = (e) => String(e).padStart(2, `0`),
  d = (e) => {
    let t = Math.floor(e / 60);
    if (t < 60) return `${t}m ${u(e % 60)}s`;
    let n = Math.floor(t / 60);
    return n < 24 ? `${n}h ${u(t % 60)}m` : `${Math.floor(n / 24)}d ${n % 24}h`;
  },
  f = (e) => {
    let t = Math.max(0, l(e) ?? 0) / 1e3;
    return t < 10 ? `${t.toFixed(1)}s` : t < 60 ? `${Math.round(t)}s` : d(Math.round(t));
  },
  p = (e) => {
    let t = Math.max(1, Math.round((l(e) ?? 0) / 1e3));
    return t < 60 ? `${t}s` : d(t);
  },
  m = new Intl.NumberFormat(`en`),
  h = { subs: new Set(), id: 0 },
  g = (e) => {
    let [t, r] = (0, n.useState)(() => Date.now());
    return (
      (0, n.useEffect)(() => {
        if (!e) return;
        let t = () => r(Date.now());
        return (
          t(),
          h.subs.add(t),
          (h.id ||= window.setInterval(() => h.subs.forEach((e) => e()), 100)),
          () => {
            (h.subs.delete(t), h.subs.size || (window.clearInterval(h.id), (h.id = 0)));
          }
        );
      }, [e]),
      t
    );
  },
  _ = ({ since: e, whole: t }) => {
    let n = g(e !== void 0),
      i = e === void 0 ? 0 : n - e;
    return (0, r.jsx)(r.Fragment, { children: t ? p(i) : f(i) });
  },
  te = { pending: `Pending`, active: `In progress`, done: `Done`, failed: `Failed`, skipped: `Skipped` };
function v({
  steps: e,
  defaultSteps: t = [],
  status: i = `draft`,
  onChange: o,
  onRun: u,
  onCancel: d,
  onRetry: h,
  title: g,
  estimate: v,
  className: ie,
}) {
  let [ae, oe] = (0, n.useState)(t),
    y = e ?? ae,
    b = i === `draft`,
    x = (0, n.useRef)(y);
  x.current = y;
  let [S, C] = (0, n.useState)(null),
    w = (0, n.useRef)(S);
  w.current = S;
  let [T, E] = (0, n.useState)(``),
    [D, se] = (0, n.useState)([]),
    [O, k] = (0, n.useState)(null),
    [ce, le] = (0, n.useState)(``),
    [A, j] = (0, n.useState)(null),
    ue = (0, n.useRef)(null),
    M = (0, n.useRef)(null),
    N = (0, n.useRef)(new Map()),
    P = (0, n.useRef)(new Map()),
    F = (0, n.useRef)(null),
    I = (0, n.useRef)(null),
    L = (0, n.useRef)(new Set()),
    R = (0, n.useRef)(new Set()),
    z = (0, n.useRef)(new Map()),
    B = (0, n.useRef)(new Map()),
    V = (0, n.useRef)(null),
    H = (0, n.useRef)(new Map()),
    U = (0, n.useId)(),
    de = (e, t) => {
      let n = window.setTimeout(() => {
        (R.current.delete(n), e());
      }, t);
      R.current.add(n);
    };
  (0, n.useEffect)(() => {
    let e = R.current;
    return () => e.forEach((e) => window.clearTimeout(e));
  }, []);
  let W = (t) => {
      (e === void 0 && oe(t), o?.(t));
    },
    G = (e) => le((t) => (t === e ? `${e} ` : e)),
    K = y.map((e) => e.id).join(`
`),
    fe = (0, n.useRef)(K);
  (0, n.useLayoutEffect)(() => {
    let e = fe.current !== K;
    fe.current = K;
    let t = new Map(),
      n = e && !c();
    if (
      (N.current.forEach((r, i) => {
        let a = r.offsetTop;
        if ((t.set(i, a), !e)) return;
        let o = P.current.get(i);
        (n &&
          o !== void 0 &&
          o !== a &&
          ((r.style.transition = `none`),
          (r.style.transform = `translateY(${o - a}px)`),
          r.getBoundingClientRect()),
          (r.style.transition = ``),
          (r.style.transform = ``));
      }),
      (P.current = t),
      I.current)
    ) {
      let e = N.current.get(I.current);
      ((I.current = null), e && document.activeElement !== e && e.focus());
    }
  });
  let pe = (0, n.useRef)(i);
  ((0, n.useLayoutEffect)(() => {
    let e = pe.current;
    if (
      ((pe.current = i),
      i === `running` && (V.current === null || e === `done`) && (V.current = Date.now()),
      i === `draft` && ((V.current = null), j(null)),
      i === `done`)
    ) {
      let e = x.current.reduce((e, t) => e + (l(t.duration) ?? B.current.get(t.id) ?? 0), 0);
      j(V.current === null ? e : Date.now() - V.current);
    }
  }, [i]),
    (0, n.useLayoutEffect)(() => {
      y.forEach((e) => {
        let t = e.status ?? `pending`;
        (t === `active`
          ? z.current.has(e.id) || z.current.set(e.id, Date.now())
          : z.current.has(e.id) &&
            (t === `done` && B.current.set(e.id, Date.now() - z.current.get(e.id)), z.current.delete(e.id)),
          t === `pending` && B.current.delete(e.id));
      });
    }),
    (0, n.useEffect)(() => {
      let e = [];
      (y.forEach((t, n) => {
        let r = t.status ?? `pending`,
          i = H.current.get(t.id);
        (!b &&
          i !== void 0 &&
          i !== r &&
          (r === `done` && e.push(`Step ${n + 1} done: ${t.title}`),
          r === `failed` && e.push(`Step ${n + 1} failed: ${t.title}${t.error ? `. ${t.error}` : ``}`),
          r === `skipped` && e.push(`Step ${n + 1} skipped`)),
          H.current.set(t.id, r));
      }),
        e.length && G(e.join(`. `)));
    }),
    (0, n.useEffect)(() => {
      (i === `running` && G(`Running plan`), i === `done` && A !== null && G(`Plan done in ${p(A)}`));
    }, [i, A]),
    (0, n.useEffect)(() => {
      b || (C(null), E(``));
    }, [b]));
  let q = (e) => {
      e ? N.current.get(e)?.focus() : M.current?.focus();
    },
    me = (e, t) => {
      let n = x.current,
        r = n.findIndex((t) => t.id === e),
        i = r + t;
      r < 0 ||
        i < 0 ||
        i >= n.length ||
        ((I.current = e), W(s(n, r, i)), G(`Moved “${n[r].title}” to position ${i + 1} of ${n.length}`));
    },
    he = (e) => {
      if (!b || D.includes(e)) return;
      let t = x.current,
        n = t.findIndex((t) => t.id === e);
      if (n < 0) return;
      let r = N.current.get(e);
      if (
        (r?.contains(document.activeElement) && q((t[n + 1] ?? t[n - 1])?.id),
        G(`Removed “${t[n].title}”`),
        !r || c())
      ) {
        W(t.filter((t) => t.id !== e));
        return;
      }
      ((r.style.height = `${r.offsetHeight}px`),
        r.getBoundingClientRect(),
        se((t) => [...t, e]),
        de(() => {
          ((r.style.height = ``),
            se((t) => t.filter((t) => t !== e)),
            W(x.current.filter((t) => t.id !== e)));
        }, 260));
    },
    ge = (e) => {
      if (!b) return;
      let t = x.current.find((t) => t.id === e);
      t && C({ id: e, value: t.title });
    },
    J = (e, t = !1) => {
      let n = w.current;
      if (!n) return;
      ((w.current = null), C(null), t && (I.current = n.id));
      let r = n.value.trim(),
        i = x.current.find((e) => e.id === n.id);
      e &&
        i &&
        r &&
        r !== i.title &&
        (W(x.current.map((e) => (e.id === n.id ? { ...e, title: r } : e))), G(`Renamed to “${r}”`));
    },
    _e = () => {
      let e = T.trim();
      if (!e) return;
      let t = a();
      (L.current.add(t),
        W([...x.current, { id: t, title: e }]),
        E(``),
        G(`Added “${e}” as step ${x.current.length + 1}`));
    },
    ve = (e, t) => {
      if (!b || e.target !== e.currentTarget) return;
      let n = x.current,
        r = n.findIndex((e) => e.id === t);
      if (e.altKey && (e.key === `ArrowUp` || e.key === `ArrowDown`))
        (e.preventDefault(), me(t, e.key === `ArrowUp` ? -1 : 1));
      else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
        e.preventDefault();
        let t = n[r + (e.key === `ArrowUp` ? -1 : 1)];
        t ? q(t.id) : e.key === `ArrowDown` && M.current?.focus();
      } else
        e.key === `Enter` || e.key === `F2`
          ? (e.preventDefault(), ge(t))
          : (e.key === `Delete` || e.key === `Backspace`) && (e.preventDefault(), he(t));
    },
    ye = (e, t) => {
      if (!b || e.button !== 0 || w.current || D.length) return;
      let n = x.current.map((e) => e.id),
        r = n.map((e) => N.current.get(e));
      if (r.some((e) => !e)) return;
      let i = r,
        a = n.indexOf(t),
        o = i[a],
        s = o.offsetHeight ? o.getBoundingClientRect().height / o.offsetHeight : 1;
      e.preventDefault();
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      ((F.current = {
        id: t,
        pointer: e.pointerId,
        ids: n,
        from: a,
        to: a,
        startY: e.clientY,
        scale: s || 1,
        dy: 0,
        tops: i.map((e) => e.offsetTop),
        heights: i.map((e) => e.offsetHeight),
      }),
        k(t));
    },
    be = (e) => {
      let t = F.current;
      if (!t || t.pointer !== e.pointerId) return;
      let n = t.ids.length - 1,
        r = t.tops[0] - t.tops[t.from],
        i = t.tops[n] + t.heights[n] - (t.tops[t.from] + t.heights[t.from]);
      ((t.dy = Math.min(i, Math.max(r, (e.clientY - t.startY) / t.scale))),
        N.current.get(t.id)?.style.setProperty(`transform`, `translateY(${t.dy}px)`));
      let a = t.tops[t.from] + t.dy + t.heights[t.from] / 2,
        o = 0;
      if (
        (t.ids.forEach((e, n) => {
          n !== t.from && t.tops[n] + t.heights[n] / 2 < a && o++;
        }),
        o === t.to)
      )
        return;
      t.to = o;
      let s = t.heights[t.from];
      t.ids.forEach((e, n) => {
        if (n === t.from) return;
        let r = t.from < o && n > t.from && n <= o ? -s : o < t.from && n >= o && n < t.from ? s : 0,
          i = N.current.get(e);
        i && (i.style.transform = r ? `translateY(${r}px)` : ``);
      });
    },
    xe = (e) => {
      let t = F.current;
      if (!t || t.pointer !== e.pointerId) return;
      if (((F.current = null), k(null), t.to === t.from)) {
        let e = N.current.get(t.id);
        e && (e.style.transform = ``);
        return;
      }
      N.current.forEach((e, t) => {
        (P.current.set(t, e.offsetTop + ee(e)), (e.style.transition = `none`), (e.style.transform = ``));
      });
      let n = x.current,
        r = n.find((e) => e.id === t.id);
      (W(s(n, t.from, t.to)),
        requestAnimationFrame(() => N.current.forEach((e) => (e.style.transition = ``))),
        r && G(`Moved “${r.title}” to position ${t.to + 1} of ${n.length}`));
    },
    Y = y.length,
    X = (e) => e.status ?? `pending`,
    Z = y.findIndex((e) => X(e) === `active`),
    Se = y.findIndex((e) => X(e) === `failed`),
    Ce = y.filter((e) => X(e) === `done` || X(e) === `skipped`).length,
    Q = `draft`,
    $ = ``;
  return (
    i === `done`
      ? ((Q = `done`), ($ = `Done in ${p(A ?? 0)}`))
      : i === `running` &&
        (Se >= 0 && Z < 0
          ? ((Q = `failed`), ($ = `Stopped · step ${m.format(Se + 1)} failed`))
          : ((Q = `running`),
            ($ = `Running · ${m.format(Z >= 0 ? Z + 1 : Math.min(Ce + 1, Y))} of ${m.format(Y)}`))),
    (0, r.jsxs)(`div`, {
      ref: ue,
      className: [`ui-pl`, ie].filter(Boolean).join(` `),
      "data-status": i,
      "data-dragging": O ? `` : void 0,
      children: [
        (0, r.jsx)(`style`, { href: `ui-agent-plan`, precedence: `default`, children: re }),
        (0, r.jsxs)(`div`, {
          className: `ui-pl__card`,
          children: [
            (0, r.jsxs)(`div`, {
              className: `ui-pl__head`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-pl__meta`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-pl__state`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-pl__state-icon`,
                          "aria-hidden": `true`,
                          children: (0, r.jsxs)(`svg`, {
                            viewBox: `0 0 16 16`,
                            children: [
                              (0, r.jsx)(`path`, { d: `M6.5 4.5h7M6.5 8h7M6.5 11.5h7` }),
                              (0, r.jsx)(`circle`, { cx: `3.25`, cy: `4.5`, r: `.6` }),
                              (0, r.jsx)(`circle`, { cx: `3.25`, cy: `8`, r: `.6` }),
                              (0, r.jsx)(`circle`, { cx: `3.25`, cy: `11.5`, r: `.6` }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-pl__state-label`,
                          children: [`Plan · `, m.format(Y), ` `, Y === 1 ? `step` : `steps`],
                        }),
                      ],
                    }),
                    b && v
                      ? (0, r.jsxs)(`span`, {
                          className: `ui-pl__estimate`,
                          title: v,
                          children: [
                            (0, r.jsxs)(`svg`, {
                              viewBox: `0 0 16 16`,
                              "aria-hidden": `true`,
                              children: [
                                (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }),
                                (0, r.jsx)(`path`, { d: `M8 5v3.2l2 1.3` }),
                              ],
                            }),
                            (0, r.jsxs)(`span`, {
                              children: [
                                (0, r.jsx)(`span`, { className: `ui-pl__sr`, children: `Estimated time ` }),
                                v,
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                g && (0, r.jsx)(`h3`, { className: `ui-pl__title`, dir: `auto`, children: g }),
              ],
            }),
            (0, r.jsx)(`p`, {
              id: U,
              className: `ui-pl__sr`,
              children: `Press Enter to rename, Alt plus arrow keys to move, Delete to remove.`,
            }),
            (0, r.jsx)(`ol`, {
              className: `ui-pl__list`,
              "aria-label": g ? `Plan: ${g}` : `Plan`,
              children: y.map((e, t) => {
                let n = X(e),
                  i = b && S?.id === e.id,
                  a = l(e.duration) ?? B.current.get(e.id),
                  o = z.current.get(e.id);
                return (0, r.jsxs)(
                  `li`,
                  {
                    ref: (t) => (
                      t && N.current.set(e.id, t),
                      () => {
                        N.current.delete(e.id);
                      }
                    ),
                    className: `ui-pl__step`,
                    "data-step": b ? void 0 : n,
                    "data-dragging": O === e.id ? `` : void 0,
                    "data-removing": D.includes(e.id) ? `` : void 0,
                    "data-enter": L.current.has(e.id) ? `` : void 0,
                    onAnimationEnd: (t) => {
                      t.target === t.currentTarget && L.current.delete(e.id);
                    },
                    tabIndex: b && !i ? 0 : void 0,
                    "aria-describedby": b ? U : void 0,
                    "aria-current": n === `active` && !b ? `step` : void 0,
                    onKeyDown: (t) => ve(t, e.id),
                    children: [
                      b &&
                        (0, r.jsx)(`span`, {
                          className: `ui-pl__grip`,
                          "aria-hidden": `true`,
                          title: `Drag to reorder`,
                          onPointerDown: (t) => ye(t, e.id),
                          onPointerMove: be,
                          onPointerUp: xe,
                          onPointerCancel: xe,
                          children: (0, r.jsxs)(`svg`, {
                            viewBox: `0 0 16 16`,
                            children: [
                              (0, r.jsx)(`circle`, { cx: `6`, cy: `4`, r: `1.1` }),
                              (0, r.jsx)(`circle`, { cx: `10`, cy: `4`, r: `1.1` }),
                              (0, r.jsx)(`circle`, { cx: `6`, cy: `8`, r: `1.1` }),
                              (0, r.jsx)(`circle`, { cx: `10`, cy: `8`, r: `1.1` }),
                              (0, r.jsx)(`circle`, { cx: `6`, cy: `12`, r: `1.1` }),
                              (0, r.jsx)(`circle`, { cx: `10`, cy: `12`, r: `1.1` }),
                            ],
                          }),
                        }),
                      (0, r.jsx)(`span`, {
                        className: `ui-pl__marker`,
                        "aria-hidden": `true`,
                        children:
                          b || n === `pending`
                            ? (0, r.jsx)(`span`, { className: `ui-pl__num`, children: t + 1 })
                            : n === `active`
                              ? (0, r.jsx)(ne, {})
                              : n === `done`
                                ? (0, r.jsx)(`svg`, {
                                    viewBox: `0 0 16 16`,
                                    className: `ui-pl__mark`,
                                    children: (0, r.jsx)(`path`, {
                                      d: `M4.2 8.4 6.8 11l5-5.6`,
                                      pathLength: 1,
                                      className: `ui-pl__draw`,
                                    }),
                                  })
                                : n === `failed`
                                  ? (0, r.jsx)(`svg`, {
                                      viewBox: `0 0 16 16`,
                                      className: `ui-pl__mark`,
                                      children: (0, r.jsx)(`path`, { d: `M8 4.2v4.4M8 11.6h.01` }),
                                    })
                                  : (0, r.jsx)(`svg`, {
                                      viewBox: `0 0 16 16`,
                                      className: `ui-pl__mark`,
                                      children: (0, r.jsx)(`path`, { d: `M5 8h6` }),
                                    }),
                      }),
                      (0, r.jsxs)(`div`, {
                        className: `ui-pl__main`,
                        children: [
                          i
                            ? (0, r.jsx)(`input`, {
                                className: `ui-pl__edit`,
                                dir: `auto`,
                                value: S.value,
                                "aria-label": `Rename step ${t + 1}`,
                                autoFocus: !0,
                                onFocus: (e) => e.currentTarget.select(),
                                onChange: (t) => C({ id: e.id, value: t.target.value }),
                                onBlur: () => J(!0),
                                onKeyDown: (e) => {
                                  e.key === `Enter`
                                    ? (e.preventDefault(), J(!0, !0))
                                    : e.key === `Escape` &&
                                      (e.preventDefault(), e.stopPropagation(), J(!1, !0));
                                },
                              })
                            : (0, r.jsx)(`span`, {
                                className: `ui-pl__name`,
                                dir: `auto`,
                                onDoubleClick: () => ge(e.id),
                                children: e.title,
                              }),
                          (e.detail || e.tool) &&
                            (0, r.jsxs)(`span`, {
                              className: `ui-pl__sub`,
                              children: [
                                e.detail &&
                                  (0, r.jsx)(`span`, {
                                    className: `ui-pl__detail`,
                                    dir: `auto`,
                                    children: e.detail,
                                  }),
                                e.tool &&
                                  (0, r.jsx)(`code`, {
                                    className: `ui-pl__tool`,
                                    title: e.tool,
                                    children: e.tool,
                                  }),
                              ],
                            }),
                          !b && (0, r.jsxs)(`span`, { className: `ui-pl__sr`, children: [`, `, te[n]] }),
                          !b &&
                            n === `failed` &&
                            (0, r.jsxs)(`span`, {
                              className: `ui-pl__fail`,
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-pl__error`,
                                  dir: `auto`,
                                  children: e.error ?? `This step failed`,
                                }),
                                h &&
                                  (0, r.jsxs)(`button`, {
                                    type: `button`,
                                    className: `ui-pl__retry`,
                                    onClick: () => h(e.id),
                                    children: [
                                      (0, r.jsxs)(`svg`, {
                                        viewBox: `0 0 16 16`,
                                        "aria-hidden": `true`,
                                        children: [
                                          (0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
                                          (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` }),
                                        ],
                                      }),
                                      `Retry from here`,
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-pl__aside`,
                        children: b
                          ? (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-pl__remove`,
                              "aria-label": `Remove step ${t + 1}: ${e.title}`,
                              onClick: () => he(e.id),
                              children: (0, r.jsx)(`svg`, {
                                viewBox: `0 0 16 16`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }),
                              }),
                            })
                          : n === `active`
                            ? (0, r.jsx)(`span`, {
                                className: `ui-pl__time`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(_, { since: o }),
                              })
                            : n === `done` && a !== void 0
                              ? (0, r.jsxs)(`span`, {
                                  className: `ui-pl__time ui-pl__time--done`,
                                  children: [
                                    (0, r.jsx)(`span`, { className: `ui-pl__sr`, children: `took ` }),
                                    f(a),
                                  ],
                                })
                              : n === `skipped`
                                ? (0, r.jsx)(`span`, {
                                    className: `ui-pl__time`,
                                    "aria-hidden": `true`,
                                    children: `Skipped`,
                                  })
                                : null,
                      }),
                      t < Y - 1 && (0, r.jsx)(`span`, { className: `ui-pl__rail`, "aria-hidden": `true` }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
            (0, r.jsx)(`div`, {
              className: `ui-pl__tail`,
              inert: !b,
              children: (0, r.jsx)(`div`, {
                className: `ui-pl__tail-inner`,
                children: (0, r.jsxs)(`label`, {
                  className: `ui-pl__add`,
                  children: [
                    (0, r.jsx)(`span`, {
                      className: `ui-pl__add-icon`,
                      "aria-hidden": `true`,
                      children: (0, r.jsx)(`svg`, {
                        viewBox: `0 0 16 16`,
                        children: (0, r.jsx)(`path`, { d: `M8 4.5v7M4.5 8h7` }),
                      }),
                    }),
                    (0, r.jsx)(`input`, {
                      ref: M,
                      value: T,
                      placeholder: `Add step`,
                      "aria-label": `Add a step at the end`,
                      enterKeyHint: `done`,
                      onChange: (e) => E(e.target.value),
                      onKeyDown: (e) => {
                        if (e.key === `Enter`) (e.preventDefault(), _e());
                        else if (e.key === `Escape`) E(``);
                        else if (e.key === `ArrowUp` && !T) {
                          let t = x.current[x.current.length - 1];
                          t && (e.preventDefault(), q(t.id));
                        }
                      },
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        (0, r.jsx)(
          `div`,
          {
            className: `ui-pl__foot`,
            "data-phase": Q,
            children:
              Q === `draft`
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(`span`, {
                        className: `ui-pl__hint`,
                        "aria-hidden": `true`,
                        children: `Drag to reorder · double-click to rename`,
                      }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-pl__actions`,
                        children: [
                          d &&
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-pl__btn ui-pl__btn--quiet`,
                              onClick: d,
                              children: `Cancel`,
                            }),
                          (0, r.jsxs)(`button`, {
                            type: `button`,
                            className: `ui-pl__btn ui-pl__btn--primary ui-pl__run`,
                            disabled: !Y,
                            onClick: () => u?.(x.current),
                            children: [
                              `Run plan`,
                              (0, r.jsx)(`svg`, {
                                viewBox: `0 0 16 16`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(`path`, { d: `M5.5 3.8v8.4L12 8z` }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(`span`, {
                        className: `ui-pl__status`,
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-pl__status-icon`,
                            "aria-hidden": `true`,
                            children:
                              Q === `running`
                                ? (0, r.jsx)(ne, {})
                                : Q === `done`
                                  ? (0, r.jsxs)(`svg`, {
                                      viewBox: `0 0 16 16`,
                                      children: [
                                        (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5` }),
                                        (0, r.jsx)(`path`, {
                                          d: `M5.4 8.2 7.2 10l3.4-3.8`,
                                          pathLength: 1,
                                          className: `ui-pl__draw`,
                                        }),
                                      ],
                                    })
                                  : (0, r.jsxs)(`svg`, {
                                      viewBox: `0 0 16 16`,
                                      children: [
                                        (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5` }),
                                        (0, r.jsx)(`path`, { d: `M8 4.9v3.6M8 11h.01` }),
                                      ],
                                    }),
                          }),
                          (0, r.jsx)(`span`, { className: `ui-pl__status-label`, children: $ }),
                        ],
                      }),
                      Q === `running`
                        ? (0, r.jsx)(`span`, {
                            className: `ui-pl__elapsed`,
                            "aria-hidden": `true`,
                            children: (0, r.jsx)(_, { since: V.current ?? void 0, whole: !0 }),
                          })
                        : Q === `done` && u
                          ? (0, r.jsx)(`span`, {
                              className: `ui-pl__actions`,
                              children: (0, r.jsxs)(`button`, {
                                type: `button`,
                                className: `ui-pl__btn ui-pl__btn--quiet ui-pl__again`,
                                onClick: () => u(x.current),
                                children: [
                                  (0, r.jsxs)(`svg`, {
                                    viewBox: `0 0 16 16`,
                                    "aria-hidden": `true`,
                                    children: [
                                      (0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
                                      (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` }),
                                    ],
                                  }),
                                  `Run again`,
                                ],
                              }),
                            })
                          : null,
                    ],
                  }),
          },
          Q,
        ),
        (0, r.jsx)(`p`, { className: `ui-pl__sr`, role: `status`, "aria-live": `polite`, children: ce }),
      ],
    })
  );
}
function ne() {
  return (0, r.jsx)(`svg`, {
    className: `ui-pl__spinner`,
    viewBox: `0 0 16 16`,
    children: o.map((e) =>
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
  });
}
var re = `.ui-pl{--ui-pl-tray: #f0f0f0;--ui-pl-card: #ffffff;--ui-pl-ink: #171717;--ui-pl-text: #6b6b6b;--ui-pl-muted: #8a8a8a;--ui-pl-faint: #b8b8b8;--ui-pl-line: #ececec;--ui-pl-raise: #ffffff;--ui-pl-hover: #f6f6f6;--ui-pl-quiet-hover: #e4e4e5;--ui-pl-press: rgba(23, 23, 23, 0.05);--ui-pl-chip: #f3f3f3;--ui-pl-chip-text: #555555;--ui-pl-marker: #f0f0f0;--ui-pl-rail: #c4c4c8;--ui-pl-on-ink: #ffffff;--ui-pl-red: #c2331f;--ui-pl-red-bg: #fdf3f1;--ui-pl-red-ring: rgba(194, 51, 31, 0.32);--ui-pl-ring: rgba(23, 23, 23, 0.22);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.06), 0 12px 28px -10px rgba(0, 0, 0, 0.2);--ui-pl-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-pl-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;grid-template-columns: minmax(0, 1fr);width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-pl-tray);color: var(--ui-pl-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased}.ui-pl__card{position: relative;border-radius: 16px;background: var(--ui-pl-card);box-shadow: 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pl:not([data-status="draft"]){--ui-pl-inset: 14px}.ui-pl[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-pl *, .ui-pl *::before, .ui-pl *::after{box-sizing: border-box}.ui-pl svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-pl) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-pl__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-pl__head{display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;padding: 16px 18px 8px}.ui-pl__meta{display: flex;align-items: center;gap: 10px;min-height: 18px;font-size: 12.5px;line-height: 18px;color: var(--ui-pl-muted)}.ui-pl__state{display: inline-flex;align-items: center;gap: 7px;flex: none}.ui-pl__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__state-icon, .ui-pl__status-icon{flex: none;width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-pl__state-icon circle[r=".6"]{fill: currentColor}.ui-pl__estimate{display: inline-flex;align-items: center;min-width: 0;gap: 5px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__estimate > span{overflow: hidden;text-overflow: ellipsis}.ui-pl__estimate svg{flex: none;width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-pl__title{margin: 0;color: var(--ui-pl-ink);font-size: 15px;font-weight: 600;line-height: 22px;letter-spacing: -0.012em;text-wrap: balance;overflow-wrap: anywhere;text-align: start}.ui-pl__list{position: relative;margin: 0;padding: 2px 6px 6px;list-style: none}.ui-pl__step{position: relative;display: grid;grid-template-columns: 22px minmax(0, 1fr) auto;column-gap: 12px;align-items: start;padding: 10px 10px 10px var(--ui-pl-inset);border-radius: 10px;outline: none;transition: transform 420ms var(--ui-pl-ease), padding 420ms var(--ui-pl-ease), height 260ms var(--ui-pl-ease), opacity 180ms ease, background-color 160ms ease, box-shadow 200ms ease}.ui-pl[data-status="draft"] .ui-pl__step:hover{background: var(--ui-pl-hover)}.ui-pl__step:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 0}.ui-pl__step[data-dragging]{z-index: 2;background: var(--ui-pl-raise) !important;box-shadow: inset 0 0 0 1px var(--ui-pl-line), var(--ui-pl-lift);transition: background-color 160ms ease, box-shadow 200ms ease}.ui-pl__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-pl__step[data-enter]{animation: ui-pl-enter 380ms var(--ui-pl-ease) both}.ui-pl__grip{position: absolute;top: 10px;left: 6px;display: grid;place-items: center;width: 18px;height: 22px;margin-top: -1px;border-radius: 5px;color: var(--ui-pl-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__grip svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__grip, .ui-pl__step:focus-visible .ui-pl__grip, .ui-pl__step[data-dragging] .ui-pl__grip{opacity: 1}.ui-pl__grip:hover, .ui-pl__step[data-dragging] .ui-pl__grip{color: var(--ui-pl-text);background: var(--ui-pl-press)}.ui-pl__step[data-dragging] .ui-pl__grip{cursor: grabbing}.ui-pl__marker{position: relative;z-index: 1;display: grid;place-items: center;justify-self: center;width: 20px;height: 20px;border-radius: 999px;background: var(--ui-pl-card);box-shadow: inset 0 0 0 1px var(--ui-pl-line);color: var(--ui-pl-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-pl__marker > *{grid-area: 1 / 1;animation: ui-pl-pop 360ms var(--ui-pl-ease) both}.ui-pl__num{animation: none !important}.ui-pl__marker .ui-pl__spinner{width: 13px;height: 13px}.ui-pl__mark{width: 11px !important;height: 11px !important;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-pl__step[data-step="active"] .ui-pl__marker{box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="done"] .ui-pl__marker{background: var(--ui-pl-marker);box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="failed"] .ui-pl__marker{background: var(--ui-pl-red-bg);box-shadow: inset 0 0 0 1px var(--ui-pl-red-ring);color: var(--ui-pl-red)}.ui-pl__step[data-step="skipped"] .ui-pl__marker{box-shadow: none;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px}.ui-pl__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-pl-draw 420ms var(--ui-pl-ease) 80ms forwards}.ui-pl__spinner line{stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;opacity: 0.18;animation: ui-pl-ray 800ms linear infinite}.ui-pl__main{display: grid;gap: 2px;min-width: 0}.ui-pl__name{color: var(--ui-pl-ink);font-weight: 500;overflow-wrap: anywhere;text-align: start;transition: color 300ms ease}.ui-pl[data-status="draft"] .ui-pl__name{cursor: text}.ui-pl__step[data-step="pending"] .ui-pl__name{color: var(--ui-pl-text)}.ui-pl__step[data-step="skipped"] .ui-pl__name{color: var(--ui-pl-muted);text-decoration: line-through;text-decoration-color: var(--ui-pl-faint)}.ui-pl__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 3px 8px;min-width: 0;color: var(--ui-pl-muted);font-size: 12.5px;line-height: 18px}.ui-pl__detail{min-width: 0;overflow-wrap: anywhere;white-space: pre-line;text-align: start}.ui-pl__tool{padding: 1px 6px;border-radius: 6px;background: var(--ui-pl-chip);color: var(--ui-pl-chip-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap;max-width: 100%;overflow: hidden;text-overflow: ellipsis}.ui-pl__edit{width: calc(100% + 14px);height: 26px;margin: -3px -7px;padding: 0 6px;border: 0;border-radius: 7px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 0 0 3px var(--ui-pl-press);color: var(--ui-pl-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-pl__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-pl-fade 360ms var(--ui-pl-ease) both}.ui-pl__error{color: var(--ui-pl-red);font-size: 12.5px;line-height: 18px;overflow-wrap: anywhere;white-space: pre-line;text-align: start}.ui-pl__retry{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 9px;border-radius: 8px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-pl-ink);font-size: 12.5px;font-weight: 500;transition: background-color 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__retry svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__retry:hover{background: var(--ui-pl-hover)}.ui-pl__retry:active{transform: scale(0.97)}.ui-pl__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-pl-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-pl__time{animation: ui-pl-fade 300ms ease both}.ui-pl__step[data-step="active"] .ui-pl__time{color: var(--ui-pl-ink)}.ui-pl__remove{display: grid;place-items: center;width: 24px;height: 24px;margin: -2px -4px 0 0;border-radius: 7px;color: var(--ui-pl-faint);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__remove svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__remove, .ui-pl__step:focus-visible .ui-pl__remove, .ui-pl__remove:focus-visible{opacity: 1}.ui-pl__remove:hover{color: var(--ui-pl-ink);background: var(--ui-pl-press)}.ui-pl__remove:focus-visible, .ui-pl__retry:focus-visible, .ui-pl__btn:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 1px}.ui-pl__rail{position: absolute;top: 35px;bottom: -5px;left: calc(var(--ui-pl-inset) + 10.5px);width: 1px;overflow: hidden;background: var(--ui-pl-line);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__rail{opacity: 1;transition-delay: 240ms}.ui-pl__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-pl-rail);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-pl-ease)}.ui-pl__step[data-step="done"] .ui-pl__rail::after, .ui-pl__step[data-step="skipped"] .ui-pl__rail::after{transform: scaleY(1)}.ui-pl__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-pl-ease), opacity 260ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__tail{grid-template-rows: 0fr;opacity: 0}.ui-pl__tail-inner{min-height: 0;overflow: hidden}.ui-pl__add{display: grid;grid-template-columns: 22px minmax(0, 1fr);column-gap: 12px;align-items: center;margin: 0 6px 8px;padding: 7px 10px 7px var(--ui-pl-inset);border-radius: 10px;cursor: text;transition: background-color 160ms ease}.ui-pl__add:hover, .ui-pl__add:focus-within{background: var(--ui-pl-hover)}.ui-pl__add-icon{display: grid;place-items: center;width: 22px;height: 22px;border-radius: 999px;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px;color: var(--ui-pl-muted);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round}.ui-pl__add-icon svg{width: 12px;height: 12px}.ui-pl__add input{width: 100%;min-width: 0;height: 22px;padding: 0;border: 0;background: none;color: var(--ui-pl-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-pl__add input::placeholder{color: var(--ui-pl-muted);opacity: 1}.ui-pl__foot{display: flex;align-items: center;gap: 12px;min-height: 46px;padding: 0 6px 0 12px;font-size: 12.5px;color: var(--ui-pl-muted);animation: ui-pl-fade 320ms var(--ui-pl-ease) both}.ui-pl__hint{min-width: 0;overflow: hidden;color: var(--ui-pl-muted);font-size: 12px;text-overflow: ellipsis;white-space: nowrap}.ui-pl__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-pl__btn{display: inline-flex;align-items: center;gap: 6px;height: 32px;padding: 0 13px;border-radius: 9px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__btn:active{transform: scale(0.97)}.ui-pl__btn--primary{padding-right: 11px;background: var(--ui-pl-ink);color: var(--ui-pl-on-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-pl__btn--primary:hover{opacity: 0.88}.ui-pl__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-pl__btn--primary svg{width: 12px;height: 12px;fill: currentColor}.ui-pl__btn--quiet{padding: 0 11px;color: var(--ui-pl-text)}.ui-pl__btn--quiet:hover{background: var(--ui-pl-quiet-hover);color: var(--ui-pl-ink)}.ui-pl__btn--quiet svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-pl-ink)}.ui-pl__foot[data-phase="failed"] .ui-pl__status{color: var(--ui-pl-red)}.ui-pl__status-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__elapsed{margin-left: auto;padding-right: 6px;font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-pl__grip, .ui-pl__remove{opacity: 1}}@container (max-width: 400px){.ui-pl__hint{display: none}}@container (max-width: 340px){.ui-pl__head{padding: 14px 14px 8px}.ui-pl__list{padding-inline: 4px}.ui-pl__step, .ui-pl__add{column-gap: 10px;padding-right: 8px}.ui-pl__add{margin-inline: 4px}.ui-pl__foot{padding-left: 10px}.ui-pl__btn{padding: 0 11px}}@keyframes ui-pl-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-pl-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-pl-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-pl-draw{to{stroke-dashoffset: 0}}@keyframes ui-pl-ray{0%{opacity: 1}100%{opacity: 0.18}}@media (prefers-reduced-motion: reduce){.ui-pl *, .ui-pl *::before, .ui-pl *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-pl__spinner line{opacity: 0.6}.ui-pl__draw{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-pl{--ui-pl-tray: #111113;--ui-pl-card: #19191b;--ui-pl-ink: #ededed;--ui-pl-text: #a1a1a1;--ui-pl-muted: #8b8b92;--ui-pl-faint: #5c5c63;--ui-pl-line: #2a2a2e;--ui-pl-raise: #1f1f22;--ui-pl-hover: #1f1f22;--ui-pl-quiet-hover: #222225;--ui-pl-press: rgba(255, 255, 255, 0.07);--ui-pl-chip: #232326;--ui-pl-chip-text: #b4b4b4;--ui-pl-marker: #26262a;--ui-pl-rail: #4a4a50;--ui-pl-on-ink: #19191b;--ui-pl-red: #f2786b;--ui-pl-red-bg: rgba(242, 120, 107, 0.08);--ui-pl-red-ring: rgba(242, 120, 107, 0.4);--ui-pl-ring: rgba(237, 237, 237, 0.3);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.4), 0 14px 32px -10px rgba(0, 0, 0, 0.7)}`;
