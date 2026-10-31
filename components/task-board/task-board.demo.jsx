import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { n } from "./component-oa1F6huF.js";
var r = e(),
  i = t(),
  a = [`No priority`, `Low`, `Medium`, `High`, `Urgent`],
  o = 3,
  s = 50,
  c = (e) => new Intl.NumberFormat(`en-US`).format(e),
  l = (e) => (e > 999 ? `999+` : c(e)),
  u = (e) => {
    let t = e.currentTarget;
    t.title =
      t.scrollWidth > t.clientWidth + 1 || t.scrollHeight > t.clientHeight + 1 ? (t.textContent ?? ``) : ``;
  },
  d = (e) => {
    let t = e.trim().split(/\s+/).filter(Boolean),
      n = t.find((e) => /^\p{L}/u.test(e)) ?? t[0];
    return n
      ? (
          (typeof Intl.Segmenter == `function`
            ? new Intl.Segmenter().segment(n)[Symbol.iterator]().next().value?.segment
            : Array.from(n)[0]) ?? `?`
        ).toUpperCase()
      : `?`;
  };
function f({
  tasks: e,
  statuses: t,
  labels: n,
  people: d,
  path: f = [`Northwind`, `Launch`, `Sprint 12`],
  onChange: b,
  className: x,
}) {
  let [S, C] = (0, r.useState)(e),
    [w, T] = (0, r.useState)(``),
    [E, D] = (0, r.useState)(new Set()),
    [O, k] = (0, r.useState)(!1),
    [A, j] = (0, r.useState)(null),
    [M, N] = (0, r.useState)(!1),
    [P, F] = (0, r.useState)(null),
    [I, L] = (0, r.useState)(null),
    [R, z] = (0, r.useState)(``),
    [B, V] = (0, r.useState)(null),
    H = (0, r.useRef)(e.length + 300),
    U = (0, r.useRef)(null),
    W = (e) => {
      (C(e), b?.(e));
    },
    G = (e, t) => W(S.map((n) => (n.id === e ? { ...n, ...t } : n)));
  ((0, r.useEffect)(() => {
    if (!A) return;
    let e = (e) => !U.current?.contains(e.target) && j(null);
    return (window.addEventListener(`pointerdown`, e), () => window.removeEventListener(`pointerdown`, e));
  }, [A]),
    (0, r.useEffect)(() => {
      if (!P) return;
      let e = (e) => e.key === `Escape` && F(null);
      return (window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e));
    }, [P]));
  let [K, q] = (0, r.useState)({}),
    J = w.trim().toLowerCase(),
    Y = (0, r.useMemo)(
      () =>
        S.filter(
          (e) =>
            (!J || `${e.key} ${e.title}`.toLowerCase().includes(J)) &&
            (E.size === 0 || e.labels.some((e) => E.has(e))),
        ),
      [S, J, E],
    ),
    X = (e) => d.find((t) => t.id === e),
    Z = (e) => n.find((t) => t.id === e),
    Q = S.find((e) => e.id === P) ?? null,
    ee = (e, t) => {
      if (!B) return;
      (e.preventDefault(), (e.dataTransfer.dropEffect = `move`));
      let n = [...e.currentTarget.querySelectorAll(`[data-card]`)].filter((e) => e.dataset.card !== B.id),
        r = n.length;
      for (let t = 0; t < n.length; t++) {
        let i = n[t].getBoundingClientRect();
        if (e.clientY < i.top + i.height / 2) {
          r = t;
          break;
        }
      }
      (B.over !== t || B.index !== r) && V({ ...B, over: t, index: r });
    },
    te = (e) => {
      if (!B) return;
      let t = S.find((e) => e.id === B.id);
      if (!t) return V(null);
      let n = S.filter((e) => e.id !== B.id),
        r = n.filter((t) => t.status === e && Y.some((e) => e.id === t.id)),
        i = r[B.index ?? r.length],
        a = { ...t, status: e },
        o = i ? n.indexOf(i) : n.length;
      (W([...n.slice(0, o), a, ...n.slice(o)]), V(null));
    },
    $ = (e) => {
      let t = R.trim();
      if ((L(null), z(``), !t)) return;
      H.current += 1;
      let n = {
        id: `t-${H.current}`,
        key: `NW-${H.current}`,
        title: t,
        status: e,
        priority: 0,
        labels: [],
        created: new Date().toLocaleDateString(`en-US`, { month: `short`, day: `numeric` }),
      };
      W([n, ...S]);
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(`style`, { href: `ui-task-board`, precedence: `default`, children: y }),
      (0, i.jsxs)(`section`, {
        className: [`ui-tb`, x].filter(Boolean).join(` `),
        "aria-label": f.join(` / `),
        "data-compact": O || void 0,
        children: [
          (0, i.jsx)(`header`, {
            className: `ui-tb__top`,
            children: (0, i.jsxs)(`nav`, {
              className: `ui-tb__crumbs`,
              "aria-label": `Breadcrumb`,
              children: [
                (0, i.jsxs)(`span`, {
                  className: `ui-tb__logo`,
                  "aria-hidden": `true`,
                  children: [(0, i.jsx)(`i`, {}), (0, i.jsx)(`i`, {}), (0, i.jsx)(`i`, {})],
                }),
                f.map((e, t) =>
                  (0, i.jsxs)(
                    `span`,
                    {
                      className: `ui-tb__crumb`,
                      "aria-current": t === f.length - 1 ? `page` : void 0,
                      children: [
                        t > 0 && (0, i.jsx)(g, {}),
                        (0, i.jsx)(`span`, { className: `ui-tb__clip`, onPointerEnter: u, children: e }),
                      ],
                    },
                    t,
                  ),
                ),
                (0, i.jsx)(`button`, {
                  type: `button`,
                  className: `ui-tb__icon`,
                  "aria-pressed": M,
                  "aria-label": M ? `Remove from favorites` : `Add to favorites`,
                  onClick: () => N((e) => !e),
                  children: (0, i.jsx)(_, { filled: M }),
                }),
              ],
            }),
          }),
          (0, i.jsxs)(`div`, {
            className: `ui-tb__bar`,
            children: [
              (0, i.jsxs)(`span`, {
                className: `ui-tb__count`,
                children: [
                  c(Y.length),
                  ` `,
                  Y.length === 1 ? `task` : `tasks`,
                  Y.length !== S.length && (0, i.jsxs)(`span`, { children: [` of `, c(S.length)] }),
                ],
              }),
              (0, i.jsxs)(`div`, {
                className: `ui-tb__tools`,
                children: [
                  (0, i.jsxs)(`label`, {
                    className: `ui-tb__search`,
                    children: [
                      (0, i.jsx)(v, {
                        d: `M7 12.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM11 11l3.5 3.5`,
                        size: 14,
                      }),
                      (0, i.jsx)(`input`, {
                        type: `search`,
                        value: w,
                        onChange: (e) => T(e.target.value),
                        placeholder: `Search`,
                        "aria-label": `Search tasks`,
                      }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    className: `ui-tb__menu-wrap`,
                    ref: U,
                    children: [
                      (0, i.jsxs)(`button`, {
                        type: `button`,
                        className: `ui-tb__icon`,
                        "aria-label": `Filter by label`,
                        "aria-haspopup": `menu`,
                        "aria-expanded": A === `filter`,
                        "data-active": E.size > 0 || void 0,
                        onClick: () => j(A ? null : `filter`),
                        children: [
                          (0, i.jsx)(v, { d: `M2.5 4.5h11M4.5 8h7M6.5 11.5h3` }),
                          E.size > 0 && (0, i.jsx)(`span`, { className: `ui-tb__dot` }),
                        ],
                      }),
                      A === `filter` &&
                        (0, i.jsxs)(`div`, {
                          className: `ui-tb__menu`,
                          role: `menu`,
                          children: [
                            (0, i.jsx)(`p`, { className: `ui-tb__menu-title`, children: `Labels` }),
                            n.length === 0 &&
                              (0, i.jsx)(`p`, { className: `ui-tb__menu-none`, children: `No labels yet` }),
                            n.map((e) =>
                              (0, i.jsxs)(
                                `button`,
                                {
                                  type: `button`,
                                  role: `menuitemcheckbox`,
                                  "aria-checked": E.has(e.id),
                                  className: `ui-tb__menu-item`,
                                  onClick: () =>
                                    D((t) => {
                                      let n = new Set(t);
                                      return (n.has(e.id) ? n.delete(e.id) : n.add(e.id), n);
                                    }),
                                  children: [
                                    (0, i.jsx)(`span`, {
                                      className: `ui-tb__swatch`,
                                      style: { background: e.color },
                                    }),
                                    (0, i.jsx)(`span`, {
                                      className: `ui-tb__clip`,
                                      onPointerEnter: u,
                                      children: e.label,
                                    }),
                                    E.has(e.id) && (0, i.jsx)(v, { d: `m3.5 8.5 3 3 6-7`, size: 14 }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                            E.size > 0 &&
                              (0, i.jsx)(`button`, {
                                type: `button`,
                                className: `ui-tb__menu-item ui-tb__menu-clear`,
                                onClick: () => D(new Set()),
                                children: `Clear filter`,
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, i.jsx)(`button`, {
                    type: `button`,
                    className: `ui-tb__icon`,
                    "aria-pressed": O,
                    "aria-label": `Compact cards`,
                    title: `Compact cards`,
                    onClick: () => k((e) => !e),
                    children: (0, i.jsx)(v, { d: `M2.5 3.5h11v3h-11zM2.5 9.5h11v3h-11z` }),
                  }),
                ],
              }),
            ],
          }),
          t.length === 0 && (0, i.jsx)(`p`, { className: `ui-tb__none`, children: `No columns yet` }),
          (0, i.jsx)(`div`, {
            className: `ui-tb__columns`,
            children: t.map((e) => {
              let t = Y.filter((t) => t.status === e.id),
                n = K[e.id] ?? s,
                r = t.length - n,
                d = B?.over === e.id;
              return (0, i.jsxs)(
                `div`,
                {
                  className: `ui-tb__column`,
                  "data-over": d || void 0,
                  onDragOver: (t) => ee(t, e.id),
                  onDragLeave: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && B && V({ id: B.id });
                  },
                  onDrop: (t) => {
                    (t.preventDefault(), te(e.id));
                  },
                  children: [
                    (0, i.jsxs)(`div`, {
                      className: `ui-tb__col-head`,
                      children: [
                        (0, i.jsx)(`span`, { className: `ui-tb__status`, children: e.icon }),
                        (0, i.jsx)(`span`, {
                          className: `ui-tb__col-title ui-tb__clip`,
                          onPointerEnter: u,
                          children: e.label,
                        }),
                        (0, i.jsx)(`span`, {
                          className: `ui-tb__col-count`,
                          title: t.length > 999 ? c(t.length) : void 0,
                          children: l(t.length),
                        }),
                        (0, i.jsx)(`button`, {
                          type: `button`,
                          className: `ui-tb__icon ui-tb__add`,
                          "aria-label": `Add task to ${e.label}`,
                          onClick: () => {
                            (L(e.id), z(``));
                          },
                          children: (0, i.jsx)(v, { d: `M8 3v10M3 8h10`, size: 14 }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(`div`, {
                      className: `ui-tb__cards`,
                      children: [
                        I === e.id &&
                          (0, i.jsx)(`form`, {
                            className: `ui-tb__new`,
                            onSubmit: (t) => {
                              (t.preventDefault(), $(e.id));
                            },
                            children: (0, i.jsx)(`input`, {
                              autoFocus: !0,
                              value: R,
                              onChange: (e) => z(e.target.value),
                              onBlur: () => $(e.id),
                              onKeyDown: (e) => e.key === `Escape` && (L(null), z(``)),
                              placeholder: `Task title, then Enter`,
                              "aria-label": `New task in ${e.label}`,
                            }),
                          }),
                        t.slice(0, n).map((t, n) => {
                          let r = X(t.assignee),
                            s =
                              typeof t.dueIn == `number` && Number.isFinite(t.dueIn)
                                ? Math.round(t.dueIn)
                                : void 0,
                            [l = 0, f = 0] = t.subtasks ?? [],
                            g = t.labels.map(Z).filter((e) => !!e),
                            _ = t.title.trim();
                          return (0, i.jsxs)(
                            `div`,
                            {
                              className: `ui-tb__slot`,
                              children: [
                                d && B?.index === n && (0, i.jsx)(`span`, { className: `ui-tb__drop` }),
                                (0, i.jsxs)(`article`, {
                                  className: `ui-tb__card`,
                                  "data-card": t.id,
                                  "data-dragging": B?.id === t.id || void 0,
                                  draggable: !0,
                                  tabIndex: 0,
                                  "aria-label": `${t.key} ${_ || `Untitled`}`,
                                  onDragStart: (e) => {
                                    (e.dataTransfer.setData(`text/plain`, t.id),
                                      (e.dataTransfer.effectAllowed = `move`),
                                      V({ id: t.id }));
                                  },
                                  onDragEnd: () => V(null),
                                  onClick: () => F(t.id),
                                  onKeyDown: (e) => {
                                    (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), F(t.id));
                                  },
                                  children: [
                                    (0, i.jsxs)(`div`, {
                                      className: `ui-tb__card-top`,
                                      children: [
                                        (0, i.jsx)(`span`, {
                                          className: `ui-tb__key ui-tb__clip`,
                                          onPointerEnter: u,
                                          children: t.key,
                                        }),
                                        r && (0, i.jsx)(p, { person: r, size: 18 }),
                                      ],
                                    }),
                                    (0, i.jsxs)(`p`, {
                                      className: `ui-tb__card-title`,
                                      children: [
                                        (0, i.jsx)(`span`, { className: `ui-tb__status`, children: e.icon }),
                                        (0, i.jsx)(`span`, {
                                          className: `ui-tb__title-text`,
                                          "data-untitled": !_ || void 0,
                                          onPointerEnter: u,
                                          children: _ || `Untitled`,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)(`div`, {
                                      className: `ui-tb__props`,
                                      children: [
                                        (0, i.jsx)(`span`, {
                                          className: `ui-tb__prop`,
                                          title: a[t.priority],
                                          children: (0, i.jsx)(m, { level: t.priority }),
                                        }),
                                        t.estimate &&
                                          (0, i.jsxs)(`span`, {
                                            className: `ui-tb__prop`,
                                            title: `Estimate`,
                                            children: [
                                              (0, i.jsx)(v, { d: `M8 2.5 13.5 12h-11Z`, size: 12 }),
                                              t.estimate,
                                            ],
                                          }),
                                        s !== void 0 &&
                                          (0, i.jsxs)(`span`, {
                                            className: `ui-tb__prop`,
                                            "data-tone": s < 0 ? `late` : s <= 2 ? `soon` : void 0,
                                            children: [
                                              (0, i.jsx)(v, {
                                                d: `M8 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 6v3l2 1.2M6.5 1.5h3`,
                                                size: 12,
                                              }),
                                              s < 0 ? `${c(-s)}d late` : s === 0 ? `Today` : `${c(s)}d`,
                                            ],
                                          }),
                                        f > 0 &&
                                          (0, i.jsxs)(`span`, {
                                            className: `ui-tb__prop`,
                                            children: [
                                              (0, i.jsx)(h, { done: l, total: f }),
                                              Math.min(l, f),
                                              `/`,
                                              f,
                                            ],
                                          }),
                                        !!t.pullRequest &&
                                          t.pullRequest > 0 &&
                                          (0, i.jsxs)(`span`, {
                                            className: `ui-tb__prop`,
                                            children: [
                                              (0, i.jsx)(v, {
                                                d: `M4.5 4v8M4.5 4a1.5 1.5 0 1 0 0-.01M11.5 12a1.5 1.5 0 1 0 0 .01M11.5 10.5V6.5a2 2 0 0 0-2-2H7.5M8.5 3.5l-1 1 1 1`,
                                                size: 12,
                                              }),
                                              `#`,
                                              t.pullRequest,
                                            ],
                                          }),
                                        g
                                          .slice(0, g.length > o ? 2 : o)
                                          .map((e) =>
                                            (0, i.jsxs)(
                                              `span`,
                                              {
                                                className: `ui-tb__prop`,
                                                children: [
                                                  (0, i.jsx)(`span`, {
                                                    className: `ui-tb__swatch ui-tb__swatch--dot`,
                                                    style: { background: e.color },
                                                  }),
                                                  (0, i.jsx)(`span`, {
                                                    className: `ui-tb__clip`,
                                                    onPointerEnter: u,
                                                    children: e.label,
                                                  }),
                                                ],
                                              },
                                              e.id,
                                            ),
                                          ),
                                        g.length > o &&
                                          (0, i.jsxs)(`span`, {
                                            className: `ui-tb__prop`,
                                            title: g
                                              .slice(2)
                                              .map((e) => e.label)
                                              .join(`, `),
                                            children: [`+`, g.length - o + 1],
                                          }),
                                      ],
                                    }),
                                    t.created &&
                                      (0, i.jsxs)(`p`, {
                                        className: `ui-tb__created`,
                                        children: [`Created `, t.created],
                                      }),
                                  ],
                                }),
                              ],
                            },
                            t.id,
                          );
                        }),
                        r > 0 &&
                          (0, i.jsxs)(`button`, {
                            type: `button`,
                            className: `ui-tb__more`,
                            onClick: () => q({ ...K, [e.id]: n + s }),
                            children: [
                              `Show `,
                              c(Math.min(s, r)),
                              ` more`,
                              (0, i.jsxs)(`span`, { children: [c(r), ` left`] }),
                            ],
                          }),
                        d && B?.index === t.length && (0, i.jsx)(`span`, { className: `ui-tb__drop` }),
                        t.length === 0 &&
                          I !== e.id &&
                          (0, i.jsx)(`p`, {
                            className: `ui-tb__empty`,
                            children: J || E.size > 0 ? `No matching tasks` : `Drop tasks here`,
                          }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
          (0, i.jsx)(`div`, {
            className: `ui-tb__scrim`,
            "data-open": Q ? !0 : void 0,
            onClick: () => F(null),
            "aria-hidden": `true`,
          }),
          (0, i.jsx)(`aside`, {
            className: `ui-tb__panel`,
            "data-open": Q ? !0 : void 0,
            "aria-label": `Task details`,
            inert: !Q,
            children:
              Q &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(`div`, {
                    className: `ui-tb__panel-head`,
                    children: [
                      (0, i.jsx)(`span`, { className: `ui-tb__key`, children: Q.key }),
                      (0, i.jsx)(`button`, {
                        type: `button`,
                        className: `ui-tb__icon`,
                        "aria-label": `Close details`,
                        onClick: () => F(null),
                        children: (0, i.jsx)(v, { d: `m4 4 8 8M12 4l-8 8` }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(`textarea`, {
                    className: `ui-tb__title-input`,
                    value: Q.title,
                    rows: 2,
                    onChange: (e) => G(Q.id, { title: e.target.value }),
                    "aria-label": `Title`,
                  }),
                  (0, i.jsxs)(`dl`, {
                    className: `ui-tb__fields`,
                    children: [
                      (0, i.jsx)(`dt`, { children: `Status` }),
                      (0, i.jsx)(`dd`, {
                        className: `ui-tb__choices`,
                        children: t.map((e) =>
                          (0, i.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              className: `ui-tb__choice`,
                              "aria-pressed": Q.status === e.id,
                              onClick: () => G(Q.id, { status: e.id }),
                              children: [
                                (0, i.jsx)(`span`, { className: `ui-tb__status`, children: e.icon }),
                                (0, i.jsx)(`span`, {
                                  className: `ui-tb__clip`,
                                  onPointerEnter: u,
                                  children: e.label,
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                      (0, i.jsx)(`dt`, { children: `Priority` }),
                      (0, i.jsx)(`dd`, {
                        className: `ui-tb__choices`,
                        children: [4, 3, 2, 1, 0].map((e) =>
                          (0, i.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              className: `ui-tb__choice`,
                              "aria-pressed": Q.priority === e,
                              onClick: () => G(Q.id, { priority: e }),
                              children: [(0, i.jsx)(m, { level: e }), a[e]],
                            },
                            e,
                          ),
                        ),
                      }),
                      n.length > 0 && (0, i.jsx)(`dt`, { children: `Labels` }),
                      n.length > 0 &&
                        (0, i.jsx)(`dd`, {
                          className: `ui-tb__choices`,
                          children: n.map((e) => {
                            let t = Q.labels.includes(e.id);
                            return (0, i.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                className: `ui-tb__choice`,
                                "aria-pressed": t,
                                onClick: () =>
                                  G(Q.id, {
                                    labels: t ? Q.labels.filter((t) => t !== e.id) : [...Q.labels, e.id],
                                  }),
                                children: [
                                  (0, i.jsx)(`span`, {
                                    className: `ui-tb__swatch ui-tb__swatch--dot`,
                                    style: { background: e.color },
                                  }),
                                  (0, i.jsx)(`span`, {
                                    className: `ui-tb__clip`,
                                    onPointerEnter: u,
                                    children: e.label,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                      d.length > 0 && (0, i.jsx)(`dt`, { children: `Assignee` }),
                      d.length > 0 &&
                        (0, i.jsx)(`dd`, {
                          className: `ui-tb__choices`,
                          children: d.map((e) =>
                            (0, i.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                className: `ui-tb__choice`,
                                "aria-pressed": Q.assignee === e.id,
                                onClick: () => G(Q.id, { assignee: Q.assignee === e.id ? void 0 : e.id }),
                                children: [
                                  (0, i.jsx)(p, { person: e, size: 16 }),
                                  (0, i.jsx)(`span`, {
                                    className: `ui-tb__clip`,
                                    onPointerEnter: u,
                                    children: e.name.trim().split(/\s+/)[0],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  (0, i.jsxs)(`div`, {
                    className: `ui-tb__panel-foot`,
                    children: [
                      (0, i.jsx)(`span`, { children: Q.created && `Created ${Q.created}` }),
                      (0, i.jsx)(`button`, {
                        type: `button`,
                        className: `ui-tb__delete`,
                        onClick: () => {
                          (W(S.filter((e) => e.id !== Q.id)), F(null));
                        },
                        children: `Delete task`,
                      }),
                    ],
                  }),
                ],
              }),
          }),
        ],
      }),
    ],
  });
}
function p({ person: e, size: t }) {
  let [n, a] = (0, r.useState)(null);
  return e.avatar && n !== e.avatar
    ? (0, i.jsx)(`img`, {
        className: `ui-tb__avatar`,
        src: e.avatar,
        alt: e.name,
        title: e.name,
        width: t,
        height: t,
        loading: `lazy`,
        onError: () => a(e.avatar ?? null),
      })
    : (0, i.jsx)(`span`, {
        className: `ui-tb__avatar ui-tb__avatar--initials`,
        style: { width: t, height: t },
        title: e.name,
        role: `img`,
        "aria-label": e.name,
        children: d(e.name),
      });
}
function m({ level: e }) {
  return e === 4
    ? (0, i.jsxs)(`svg`, {
        className: `ui-tb__prio`,
        viewBox: `0 0 14 14`,
        width: `14`,
        height: `14`,
        "aria-hidden": `true`,
        children: [
          (0, i.jsx)(`rect`, { x: `1`, y: `1`, width: `12`, height: `12`, rx: `3`, fill: `#ec4899` }),
          (0, i.jsx)(`path`, {
            d: `M7 3.8v4M7 9.9v.3`,
            stroke: `#fff`,
            strokeWidth: `1.6`,
            strokeLinecap: `round`,
          }),
        ],
      })
    : (0, i.jsx)(`svg`, {
        className: `ui-tb__prio`,
        viewBox: `0 0 14 14`,
        width: `14`,
        height: `14`,
        "aria-hidden": `true`,
        children: [0, 1, 2].map((t) =>
          (0, i.jsx)(
            `rect`,
            {
              x: 2 + t * 4,
              y: 9 - t * 3,
              width: `2.4`,
              height: 3 + t * 3,
              rx: `0.8`,
              className: e > t ? `ui-tb__prio-on` : `ui-tb__prio-off`,
            },
            t,
          ),
        ),
      });
}
function h({ done: e, total: t }) {
  let n = 2 * Math.PI * 5;
  return (0, i.jsxs)(`svg`, {
    viewBox: `0 0 14 14`,
    width: `12`,
    height: `12`,
    "aria-hidden": `true`,
    children: [
      (0, i.jsx)(`circle`, {
        className: `ui-tb__ring-track`,
        cx: `7`,
        cy: `7`,
        r: `5`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, i.jsx)(`circle`, {
        cx: `7`,
        cy: `7`,
        r: `5`,
        fill: `none`,
        stroke: `#2f6bff`,
        strokeWidth: `2`,
        strokeDasharray: `${(Math.min(Math.max(0, e), t) / Math.max(1, t)) * n} ${n}`,
        transform: `rotate(-90 7 7)`,
      }),
    ],
  });
}
var g = () => (0, i.jsx)(v, { d: `m6 4 4 4-4 4`, size: 12 }),
  _ = ({ filled: e }) =>
    (0, i.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `15`,
      height: `15`,
      "aria-hidden": `true`,
      children: (0, i.jsx)(`path`, {
        d: `m8 1.8 1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6Z`,
        fill: e ? `#f5b400` : `none`,
        stroke: e ? `#f5b400` : `currentColor`,
        strokeWidth: `1.3`,
        strokeLinejoin: `round`,
      }),
    }),
  v = ({ d: e, size: t = 16 }) =>
    (0, i.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: t,
      height: t,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.4`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: (0, i.jsx)(`path`, { d: e }),
    }),
  y = `.ui-tb{--ui-tb-tray: #f6f6f6;--ui-tb-card: #ffffff;--ui-tb-line: #ececec;--ui-tb-ink: #171717;--ui-tb-text: #404040;--ui-tb-muted: #8f8f8f;--ui-tb-accent: #2f6bff;--ui-tb-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;container-type: inline-size;background: #fff;border: 1px solid #e5e5e5;border-radius: 20px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-tb-ink);-webkit-font-smoothing: antialiased}.ui-tb *, .ui-tb *::before, .ui-tb *::after{box-sizing: border-box}.ui-tb button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-tb button:focus-visible, .ui-tb [tabindex]:focus-visible{outline: 2px solid var(--ui-tb-accent);outline-offset: 2px}.ui-tb__top{display: flex;align-items: center;min-height: 48px;padding: 0 14px 0 18px;border-bottom: 1px solid var(--ui-tb-line)}.ui-tb__crumbs{display: flex;align-items: center;gap: 6px;min-width: 0;font-size: 14px}.ui-tb__clip{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-tb__logo{display: inline-flex;align-items: flex-end;gap: 2px;height: 14px;margin-right: 4px}.ui-tb__logo i{width: 3px;border-radius: 1px;background: var(--ui-tb-accent)}.ui-tb__logo i:nth-child(1){height: 6px;opacity: 0.45}.ui-tb__logo i:nth-child(2){height: 10px;opacity: 0.7}.ui-tb__logo i:nth-child(3){height: 14px}.ui-tb__crumb{display: inline-flex;align-items: center;gap: 6px;min-width: 0;white-space: nowrap;color: var(--ui-tb-muted)}.ui-tb__crumb svg, .ui-tb__logo, .ui-tb__crumbs > .ui-tb__icon{flex: none}.ui-tb__crumb[aria-current]{flex-shrink: 0;max-width: 60%}@container (max-width: 420px){.ui-tb__crumb:not(:nth-last-of-type(-n + 2)){display: none}}.ui-tb__crumb svg{color: #c4c4c4}.ui-tb__crumb[aria-current]{color: var(--ui-tb-ink);font-weight: 500}.ui-tb__icon{position: relative;display: grid;place-items: center;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-tb-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-tb__icon:hover{background: #f3f3f3;color: var(--ui-tb-ink) !important}.ui-tb__icon[aria-pressed="true"], .ui-tb__icon[data-active]{background: #eef3ff;color: var(--ui-tb-accent) !important}.ui-tb__dot{position: absolute;top: 4px;right: 4px;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-tb-accent)}.ui-tb__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 46px;padding: 0 12px 0 18px}.ui-tb__count{font-size: 13px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--ui-tb-text)}.ui-tb__count span{color: var(--ui-tb-muted)}.ui-tb__tools{display: flex;align-items: center;gap: 4px}.ui-tb__search{display: flex;align-items: center;gap: 6px;width: clamp(110px, 30vw, 170px);height: 30px;margin-right: 4px;padding: 0 10px;border-radius: 9px;background: #f5f5f5;color: var(--ui-tb-muted);transition: box-shadow 160ms ease, background-color 160ms ease}.ui-tb__search:focus-within{background: #fff;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.12)}.ui-tb__search input{flex: 1;min-width: 0;border: 0;outline: none;background: transparent;font: inherit;font-size: 13px;color: var(--ui-tb-ink)}.ui-tb__search input::-webkit-search-cancel-button{display: none}.ui-tb__menu-wrap{position: relative}.ui-tb__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 8;display: grid;gap: 2px;min-width: 180px;max-width: 260px;padding: 6px 4px 4px;border-radius: 12px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 12px 30px -8px rgba(0, 0, 0, 0.2);animation: ui-tb-drop 180ms var(--ui-tb-ease)}.ui-tb__menu-title{margin: 0 0 2px;padding: 0 10px;font-size: 11.5px;color: var(--ui-tb-muted)}.ui-tb__menu-none{margin: 0;padding: 6px 10px 8px;font-size: 13px;color: var(--ui-tb-muted)}.ui-tb__none{margin: 0;padding: 32px 18px 40px;text-align: center;font-size: 13px;color: var(--ui-tb-muted)}.ui-tb__menu-item{display: flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-tb__menu-item svg{margin-left: auto;color: var(--ui-tb-accent)}.ui-tb__menu-item:hover{background: #f5f5f5}.ui-tb__menu-clear{color: var(--ui-tb-muted) !important}.ui-tb__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-tb__swatch--dot{border-radius: 50%}.ui-tb__prio-on{fill: #525252}.ui-tb__prio-off{fill: #d4d4d4}.ui-tb__ring-track{stroke: #e0e0e0}.ui-tb__columns{display: grid;grid-auto-columns: minmax(224px, 1fr);grid-auto-flow: column;gap: 10px;padding: 0 12px 12px;overflow-x: auto;scrollbar-width: thin}.ui-tb__column{display: flex;flex-direction: column;min-width: 0;min-height: 300px;padding: 4px 6px 6px;border-radius: 16px;background: var(--ui-tb-tray);transition: background-color 160ms ease, box-shadow 160ms ease}.ui-tb__column[data-over]{background: #eaeffc;box-shadow: inset 0 0 0 1px #cddbff}.ui-tb__col-head{display: flex;align-items: center;gap: 8px;height: 38px;padding: 0 4px 0 8px}.ui-tb__col-title{font-size: 13.5px;font-weight: 500}.ui-tb__col-count{flex: none;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-tb-muted)}.ui-tb__add{margin-left: auto}.ui-tb__status{display: grid;place-items: center;flex: none;width: 15px;height: 15px}.ui-tb__status svg{width: 15px;height: 15px}.ui-tb__more{display: flex;align-items: center;justify-content: center;gap: 6px;height: 32px;border: 0;border-radius: 8px;background: transparent;font: inherit;font-size: 12.5px;font-weight: 500;color: var(--ui-tb-muted);cursor: pointer}.ui-tb__more:hover{background: rgba(0, 0, 0, 0.04);color: inherit}.ui-tb__more span{font-weight: 400;opacity: 0.7}:where(.dark, [data-theme="dark"]) .ui-tb__more:hover{background: rgba(255, 255, 255, 0.06)}.ui-tb__cards{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;gap: 6px;flex: 1}.ui-tb__slot{display: grid;grid-template-columns: minmax(0, 1fr);gap: 6px}.ui-tb__card{padding: 10px 12px 11px;border-radius: 12px;background: var(--ui-tb-card);box-shadow: 0 0 0 1px #e8e8e8, 0 1px 2px rgba(0, 0, 0, 0.04);cursor: grab;animation: ui-tb-in 320ms var(--ui-tb-ease) both;transition: box-shadow 160ms ease, opacity 160ms ease, transform 200ms var(--ui-tb-ease)}.ui-tb__card:hover{box-shadow: 0 0 0 1px #dcdcdc, 0 6px 16px -8px rgba(0, 0, 0, 0.14)}.ui-tb__card:active{cursor: grabbing}.ui-tb__card[data-dragging]{opacity: 0.35;transform: scale(0.98)}.ui-tb__card-top{display: flex;align-items: center;justify-content: space-between;gap: 8px;min-height: 18px}.ui-tb__key{font-size: 12px;font-variant-numeric: tabular-nums;color: var(--ui-tb-muted)}.ui-tb__avatar{flex: none;border-radius: 50%;object-fit: cover;box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06)}.ui-tb__avatar--initials{display: grid;place-items: center;background: #eef3ff;font-size: 9px;font-weight: 600;color: var(--ui-tb-accent)}.ui-tb__card-title{display: flex;gap: 8px;margin: 4px 0 0;font-size: 13.5px;font-weight: 450;line-height: 19px}.ui-tb__card-title .ui-tb__status{margin-top: 2px}.ui-tb__title-text{min-width: 0;overflow: hidden;overflow-wrap: anywhere;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;line-clamp: 3}.ui-tb__title-text[data-untitled]{color: var(--ui-tb-muted)}.ui-tb__props{display: flex;flex-wrap: wrap;gap: 5px;margin-top: 9px}.ui-tb__prop{display: inline-flex;align-items: center;gap: 5px;max-width: 100%;height: 22px;padding: 0 7px;border-radius: 7px;box-shadow: inset 0 0 0 1px #ebebeb;font-size: 11.5px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--ui-tb-text)}.ui-tb__prop svg{flex: none;color: var(--ui-tb-muted)}.ui-tb__prop[data-tone="soon"]{color: #b45309}.ui-tb__prop[data-tone="soon"] svg{color: #f59e0b}.ui-tb__prop[data-tone="late"]{color: #db2777;background: #fff5f9;box-shadow: inset 0 0 0 1px #fde0ec}.ui-tb__prop[data-tone="late"] svg{color: #ec4899}.ui-tb__created{margin: 9px 0 0;font-size: 11.5px;color: var(--ui-tb-muted)}.ui-tb[data-compact] .ui-tb__props, .ui-tb[data-compact] .ui-tb__created{display: none}.ui-tb__drop{display: block;height: 3px;margin: -1px 4px;border-radius: 2px;background: var(--ui-tb-accent);animation: ui-tb-grow 160ms var(--ui-tb-ease)}.ui-tb__empty{display: grid;place-items: center;height: 80px;margin: 0;border: 1px dashed #d9d9d9;border-radius: 12px;font-size: 12.5px;color: var(--ui-tb-muted)}.ui-tb__new input{width: 100%;height: 40px;padding: 0 12px;border: 0;border-radius: 12px;outline: none;background: #fff;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.12);font: inherit;font-size: 13.5px}.ui-tb__scrim{position: absolute;inset: 0;z-index: 9;background: rgba(23, 23, 23, 0.08);opacity: 0;pointer-events: none;transition: opacity 240ms ease}.ui-tb__scrim[data-open]{opacity: 1;pointer-events: auto}.ui-tb__panel{position: absolute;top: 8px;right: 8px;bottom: 8px;z-index: 10;display: flex;flex-direction: column;width: min(360px, calc(100% - 16px));padding: 14px 16px 14px;overflow-y: auto;border-radius: 16px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 20px 50px -12px rgba(0, 0, 0, 0.25);transform: translateX(calc(100% + 24px));transition: transform 380ms var(--ui-tb-ease)}.ui-tb__panel[data-open]{transform: none}.ui-tb__panel-head{display: flex;align-items: center;justify-content: space-between}.ui-tb__title-input{margin: 8px -6px 0;padding: 4px 6px;border: 0;border-radius: 8px;outline: none;resize: none;field-sizing: content;min-height: 54px;font: inherit;font-size: 17px;font-weight: 600;line-height: 23px;color: var(--ui-tb-ink)}.ui-tb__title-input:focus{background: #f7f7f7}.ui-tb__fields{display: grid;gap: 6px;margin: 14px 0 0}.ui-tb__fields dt{margin-top: 8px;font-size: 12px;color: var(--ui-tb-muted)}.ui-tb__fields dd{margin: 0;min-width: 0}.ui-tb__choices{display: flex;flex-wrap: wrap;gap: 5px}.ui-tb__choice{display: inline-flex;align-items: center;gap: 6px;max-width: 100%;height: 28px;padding: 0 9px;border: 0;border-radius: 8px;background: #fff;box-shadow: inset 0 0 0 1px #e8e8e8;font-size: 12.5px !important;color: var(--ui-tb-text) !important;transition: background-color 140ms ease, box-shadow 140ms ease}.ui-tb__choice:hover{background: #f7f7f7}.ui-tb__choice[aria-pressed="true"]{background: #eef3ff;box-shadow: inset 0 0 0 1px #cddbff;color: var(--ui-tb-ink) !important}.ui-tb__panel-foot{display: flex;align-items: center;justify-content: space-between;margin-top: auto;padding-top: 16px;font-size: 12px;color: var(--ui-tb-muted)}.ui-tb__delete{height: 28px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;color: #e5484d !important}.ui-tb__delete:hover{background: #fff1f1}@keyframes ui-tb-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-tb-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-tb-grow{from{transform: scaleX(0.6);opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-tb__card, .ui-tb__menu, .ui-tb__drop{animation: none}.ui-tb__panel, .ui-tb__scrim, .ui-tb__card{transition: none}}.ui-tb input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-tb textarea:focus-visible, .ui-tb [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-tb{--ui-tb-tray: #161618;--ui-tb-card: #232326;--ui-tb-line: rgba(255, 255, 255, 0.08);--ui-tb-ink: #ededed;--ui-tb-text: #c4c4c4;--ui-tb-muted: #8f8f8f;background: #232326;border-color: rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__crumb svg{color: #6b6b70}:where(.dark, [data-theme="dark"]) .ui-tb__icon:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tb__icon[aria-pressed="true"], :where(.dark, [data-theme="dark"]) .ui-tb__icon[data-active]{background: rgba(47, 107, 255, 0.16);color: #6b95ff !important}:where(.dark, [data-theme="dark"]) .ui-tb__search{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-tb__search:focus-within{background: #2a2a2d;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-tb__menu{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-tb__menu-item:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tb__menu-item svg{color: #6b95ff}:where(.dark, [data-theme="dark"]) .ui-tb__column[data-over]{background: rgba(47, 107, 255, 0.12);box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__card{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__card:hover{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14), 0 6px 16px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-tb__avatar{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__avatar--initials{background: rgba(47, 107, 255, 0.16);color: #6b95ff}:where(.dark, [data-theme="dark"]) .ui-tb__prop{box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-tb__prop[data-tone="soon"]{color: #fbbf24}:where(.dark, [data-theme="dark"]) .ui-tb__prop[data-tone="late"]{color: #f472b6;background: rgba(236, 72, 153, 0.14);box-shadow: inset 0 0 0 1px rgba(236, 72, 153, 0.28)}:where(.dark, [data-theme="dark"]) .ui-tb__prio-on{fill: #c4c4c4}:where(.dark, [data-theme="dark"]) .ui-tb__prio-off{fill: #4a4a4f}:where(.dark, [data-theme="dark"]) .ui-tb__ring-track{stroke: rgba(255, 255, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-tb__empty{border-color: rgba(255, 255, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-tb__new input{background: #2a2a2d;color: var(--ui-tb-ink);box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-tb__scrim{background: rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__panel{background: #232326;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 50px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-tb__title-input{background: transparent}:where(.dark, [data-theme="dark"]) .ui-tb__title-input:focus{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-tb__choice{background: #2a2a2d;box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__choice:hover{background: #313135}:where(.dark, [data-theme="dark"]) .ui-tb__choice[aria-pressed="true"]{background: rgba(47, 107, 255, 0.16);box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.45)}:where(.dark, [data-theme="dark"]) .ui-tb__delete{color: #ff6b70 !important}:where(.dark, [data-theme="dark"]) .ui-tb__delete:hover{background: rgba(229, 72, 77, 0.14)}`,
  b = [
    { id: `todo`, label: `Todo`, icon: (0, i.jsx)(n, { kind: `todo`, color: `#8f8f8f` }) },
    { id: `review`, label: `In review`, icon: (0, i.jsx)(n, { kind: `review`, color: `#8b5cf6` }) },
    { id: `next`, label: `Up next`, icon: (0, i.jsx)(n, { kind: `backlog`, color: `#7aa2ff` }) },
    { id: `progress`, label: `In progress`, icon: (0, i.jsx)(n, { kind: `progress`, color: `#f59e0b` }) },
    { id: `done`, label: `Done`, icon: (0, i.jsx)(n, { kind: `done`, color: `#2f6bff` }) },
  ],
  x = [
    { id: `web`, label: `Website`, color: `#2f6bff` },
    { id: `billing`, label: `Billing`, color: `#8b5cf6` },
    { id: `mobile`, label: `Mobile`, color: `#14b8a6` },
    { id: `bug`, label: `Bug`, color: `#ec4899` },
    { id: `feature`, label: `Feature`, color: `#a9c1ff` },
  ],
  S = [
    { id: `mara`, name: `Mara Lindqvist`, avatar: `/avatars/mara.jpg` },
    { id: `jonas`, name: `Jonas Weber`, avatar: `/avatars/jonas.jpg` },
    { id: `lena`, name: `Lena Hart`, avatar: `/avatars/lena.jpg` },
    { id: `theo`, name: `Theo Brandt`, avatar: `/avatars/theo.jpg` },
    { id: `sofia`, name: `Sofia Marin`, avatar: `/avatars/sofia.jpg` },
  ],
  C = [
    {
      id: `1`,
      key: `NW-214`,
      title: `Add the launch banner to the marketing site`,
      status: `todo`,
      priority: 2,
      estimate: `M`,
      labels: [`web`, `feature`],
      assignee: `mara`,
      created: `Oct 2`,
    },
    {
      id: `2`,
      key: `NW-209`,
      title: `Currency rounding in annual invoices`,
      status: `todo`,
      priority: 3,
      labels: [`billing`, `bug`],
      assignee: `theo`,
      dueIn: 2,
      created: `Sep 28`,
    },
    {
      id: `3`,
      key: `NW-197`,
      title: `Follow up with the beta customers about pricing`,
      status: `todo`,
      priority: 1,
      labels: [],
      assignee: `sofia`,
      subtasks: [2, 4],
      created: `Sep 24`,
    },
    {
      id: `4`,
      key: `NW-221`,
      title: `Review the onboarding copy for the new plans`,
      status: `review`,
      priority: 2,
      labels: [`web`],
      assignee: `lena`,
      dueIn: 1,
      created: `Oct 2`,
    },
    {
      id: `5`,
      key: `NW-205`,
      title: `Add usage limits to the plan comparison table`,
      status: `review`,
      priority: 3,
      estimate: `L`,
      labels: [`web`, `feature`],
      assignee: `jonas`,
      created: `Sep 27`,
    },
    {
      id: `6`,
      key: `NW-188`,
      title: `Push notification opt-in on iOS`,
      status: `review`,
      priority: 2,
      labels: [`mobile`],
      assignee: `mara`,
      pullRequest: 412,
      created: `Sep 21`,
    },
    {
      id: `7`,
      key: `NW-226`,
      title: `Record the launch walkthrough video`,
      status: `next`,
      priority: 4,
      labels: [`feature`],
      assignee: `sofia`,
      dueIn: -1,
      created: `Oct 1`,
    },
    {
      id: `8`,
      key: `NW-217`,
      title: `Plan the press outreach for launch week`,
      status: `next`,
      priority: 2,
      estimate: `S`,
      labels: [],
      assignee: `lena`,
      created: `Sep 30`,
    },
    {
      id: `9`,
      key: `NW-199`,
      title: `Summarize the beta feedback into one doc`,
      status: `next`,
      priority: 1,
      labels: [],
      assignee: `theo`,
      subtasks: [1, 3],
      created: `Sep 25`,
    },
    {
      id: `10`,
      key: `NW-230`,
      title: `Export guide for the help center`,
      status: `progress`,
      priority: 2,
      labels: [`web`],
      assignee: `jonas`,
      created: `Sep 30`,
    },
    {
      id: `11`,
      key: `NW-201`,
      title: `Proration when teams add seats mid-month`,
      status: `progress`,
      priority: 3,
      labels: [`billing`],
      assignee: `theo`,
      dueIn: 4,
      created: `Sep 23`,
    },
    {
      id: `12`,
      key: `NW-176`,
      title: `Offline mode for the task list`,
      status: `progress`,
      priority: 2,
      estimate: `XL`,
      labels: [`mobile`, `feature`],
      assignee: `mara`,
      pullRequest: 398,
      created: `Sep 16`,
    },
    {
      id: `13`,
      key: `NW-160`,
      title: `Dark mode for the dashboard`,
      status: `done`,
      priority: 2,
      labels: [`web`, `feature`],
      assignee: `lena`,
      created: `Sep 12`,
    },
    {
      id: `14`,
      key: `NW-171`,
      title: `Fix crash when uploading large avatars`,
      status: `done`,
      priority: 3,
      labels: [`mobile`, `bug`],
      assignee: `jonas`,
      created: `Sep 15`,
    },
  ],
  w = 1240;
function T() {
  let e = (0, r.useRef)(null),
    [t, n] = (0, r.useState)(null);
  return (
    (0, r.useLayoutEffect)(() => {
      let t = e.current,
        r = t?.closest(`.card__preview`),
        i = r ?? t?.closest(`.stage`);
      if (!t || !i) return;
      let a = () => {
        let e = i.clientWidth;
        if (r) return n({ scale: (e - 48) / w, card: !0 });
        if (e < 760) return n(null);
        n({ scale: Math.min(0.8, (e - 120) / w), card: !1 });
      };
      a();
      let o = new ResizeObserver(a);
      return (o.observe(i), () => o.disconnect());
    }, []),
    (0, i.jsx)(`div`, {
      ref: e,
      className: `board-demo`,
      "data-fit": t ? (t.card ? `card` : `stage`) : void 0,
      children: (0, i.jsx)(`div`, {
        className: `board-demo__frame`,
        style: t
          ? t.card
            ? { width: w, transform: `scale(${t.scale})` }
            : { width: w, zoom: t.scale }
          : void 0,
        children: (0, i.jsx)(f, { tasks: C, statuses: b, labels: x, people: S }),
      }),
    })
  );
}
