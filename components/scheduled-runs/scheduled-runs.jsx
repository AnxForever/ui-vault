import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = [`Mon`, `Tue`, `Wed`],
  a = [`07:00`, `12:00`, `17:00`],
  o = 2,
  s = 640,
  c = 264,
  l = 160,
  u = (e) => (Number.isFinite(e.usage) ? Math.max(1, e.usage) : 0);
function d(e, t, n, r, i, a, s = t) {
  let c = u(e);
  if (c <= 0) return null;
  let l = c <= r && a !== `drop`,
    d = [],
    f = n.used.length,
    p = Array.from({ length: f }, (e, t) => t).filter((e) => e >= t);
  if (a === `drop`) for (let e = s; e < t; e++) p.push(e);
  for (let e of p) {
    if (c <= 0) break;
    let s = r - n.used[e],
      u = 0;
    if (
      (a === `booked` && e === t
        ? (u = l ? c : Math.min(c, Math.max(s, i)))
        : n.count[e] < o && s > 0 && (u = l ? (s >= c ? c : 0) : s >= Math.min(i, c) ? Math.min(s, c) : 0),
      u === 0)
    ) {
      if (a === `drop` && e === t) return null;
      continue;
    }
    (d.push({ cell: e, usage: u }), (c -= u));
  }
  return c > 0 && a !== `booked` ? null : d;
}
var f = (e, t) => t.forEach((t) => ((e.used[t.cell] += t.usage), (e.count[t.cell] += 1)));
function p(e, t, n, r = { day: 0, session: 0 }, i = 100, a = 15) {
  let o = t * n,
    s = { used: Array(o).fill(0), count: Array(o).fill(0) },
    c = (e, t) =>
      t.map((r, i) => ({
        task: e,
        day: Math.floor(r.cell / n),
        session: r.cell % n,
        usage: r.usage,
        part: i + 1,
        parts: t.length,
      })),
    l = [],
    u = [],
    p = [];
  for (let t of e) {
    if (!t.at) continue;
    let e = t.at.day * n + t.at.session;
    if (e < 0 || e >= o) continue;
    let r = d(t, e, s, i, a, `booked`) ?? [];
    (f(s, r), l.push(...c(t, r)));
  }
  let m = Math.max(0, r.day * n + r.session);
  for (let t of e) {
    if (t.at) continue;
    let e = d(t, m, s, i, a);
    e ? (f(s, e), u.push(c(t, e))) : p.push(t);
  }
  return { booked: l, placed: u, unplaced: p, used: s.used };
}
var m = (e) => `${Math.round(e)}%`,
  ee = (e, t) => m((e / t) * 100);
function h({
  tasks: e,
  days: t = i,
  sessions: f = a,
  now: h = { day: 0, session: 0 },
  limit: g = 100,
  minPiece: v = 15,
  agents: ie,
  defaultMode: ae = `auto`,
  autoRun: y = !1,
  loop: b = !1,
  title: x = `This week`,
  note: S,
  onScheduled: oe,
  onPlace: se,
  onMove: ce,
  className: le,
}) {
  let C = f.length,
    w = t.length * C,
    T = h.day * C + h.session,
    E = (e) => ({
      task: e.task,
      day: Math.floor(e.cell / C),
      session: e.cell % C,
      usage: e.usage,
      part: e.part,
      parts: e.parts,
    }),
    ue = (0, n.useMemo)(
      () =>
        p(
          e.filter((e) => e.at),
          t.length,
          C,
          h,
          g,
          v,
        ).booked.map((e, t) => ({
          key: `booked-${t}`,
          task: e.task,
          cell: e.day * C + e.session,
          usage: e.usage,
          part: e.part,
          parts: e.parts,
          booked: !0,
        })),
      [e, t.length, C, g, v],
    ),
    D = (0, n.useMemo)(() => e.filter((e) => !e.at), [e]),
    [O, k] = (0, n.useState)(ue),
    [A, j] = (0, n.useState)([]),
    [M, N] = (0, n.useState)(null),
    [P, F] = (0, n.useState)(!1),
    [de, I] = (0, n.useState)([]),
    [L, fe] = (0, n.useState)(null),
    [R, pe] = (0, n.useState)(null),
    [z, B] = (0, n.useState)(!1),
    [V, me] = (0, n.useState)(ae),
    [he, ge] = (0, n.useState)(!1),
    [H, _e] = (0, n.useState)(null),
    [U, W] = (0, n.useState)(null),
    G = (0, n.useRef)(null),
    K = (0, n.useRef)(!1),
    q = (0, n.useRef)([]),
    ve = (e, t) => q.current.push(window.setTimeout(e, t));
  (0, n.useEffect)(() => () => q.current.forEach(clearTimeout), []);
  let J = new Set(O.map((e) => e.task.id)),
    Y = D.filter((e) => !J.has(e.id) && !A.includes(e.id)),
    ye = D.filter((e) => !J.has(e.id)).length,
    be = (e, t) => {
      let n = { used: Array(w).fill(0), count: Array(w).fill(0) };
      for (let r of e) r.key !== t && ((n.used[r.cell] += r.usage), (n.count[r.cell] += 1));
      return n;
    },
    xe = (e, t) =>
      t.map((n, r) => ({
        key: `${e.id}#${r + 1}`,
        task: e,
        cell: n.cell,
        usage: n.usage,
        part: r + 1,
        parts: t.length,
      })),
    X = (0, n.useCallback)(() => {
      (q.current.forEach(clearTimeout),
        (q.current = []),
        F(!1),
        N(null),
        k(ue),
        j([]),
        I([]),
        B(!1),
        (K.current = !1));
    }, [ue]);
  (0, n.useEffect)(() => X(), [X]);
  let Z = (0, n.useRef)(() => {});
  Z.current = () => {
    if (K.current) return F(!1);
    let e = O,
      t = [];
    for (let n of D) {
      if (J.has(n.id) || A.includes(n.id)) continue;
      let r = d(n, Math.max(0, T), be(e), g, v);
      if (!r) {
        t.push(n.id);
        continue;
      }
      let i = xe(n, r);
      (t.length && j((e) => [...e, ...t]),
        k((e) => [...e, i[0]]),
        N({ id: n.id, key: i[0].key, rest: i.slice(1) }));
      return;
    }
    (t.length && j((e) => [...e, ...t]), F(!1), oe?.(e.map(E)));
  };
  let Q = D.some((e) => J.has(e.id));
  ((0, n.useEffect)(() => {
    if (V !== `auto` || y === !1 || P || Q || z) return;
    let e = window.setTimeout(() => Z.current && (F(!0), Z.current()), y === !0 ? 800 : y);
    return () => window.clearTimeout(e);
  }, [V, y, P, Q, z]),
    (0, n.useEffect)(() => {
      if (!b || V !== `auto` || P || z || he || Y.length > 0 || !Q) return;
      let e = window.setTimeout(X, 3200);
      return () => window.clearTimeout(e);
    }, [b, V, P, z, he, Y.length, Q, X]));
  let Se = (e) => {
      if (e !== V) {
        if ((me(e), B(!0), e === `auto`)) {
          ((K.current = !1), !P && Y.length > 0 && (F(!0), Z.current()));
          return;
        }
        ((K.current = !0),
          q.current.forEach(clearTimeout),
          (q.current = []),
          F(!1),
          N(null),
          j([]),
          I([]),
          k((e) => {
            let t = new Set(e.filter((e) => e.manual).map((e) => e.task.id));
            return e.filter((e) => e.booked || t.has(e.task.id));
          }));
      }
    },
    Ce = (0, n.useMemo)(
      () => ie ?? [...new Set(e.map((e) => e.agent).filter((e) => !!e))].map((e) => ({ name: e })),
      [ie, e],
    ),
    we = (e) => {
      (B(!0), _e((t) => (t === e ? null : e)));
    },
    Te = (e) => H !== null && e.agent !== H,
    Ee = H ? e.filter((e) => e.agent === H).length : e.length;
  (0, n.useLayoutEffect)(() => {
    if (!M) return;
    let e = G.current,
      t = e?.querySelector(`[data-card="${CSS.escape(M.id)}"]`),
      n = e?.querySelector(`[data-chip="${CSS.escape(M.key)}"]`),
      r = () => {
        (k((e) => [...e, ...M.rest]), I(M.rest.map((e) => e.key)), N(null), ve(() => Z.current(), l));
      };
    if (!e || !t || !n || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      ve(r, 120);
      return;
    }
    let i = e.getBoundingClientRect(),
      a = t.getBoundingClientRect(),
      o = n.getBoundingClientRect(),
      c = document.createElement(`div`);
    ((c.className = `ui-srn__tile ui-srn__flier`), (c.innerHTML = t.innerHTML), e.append(c));
    let u = (e) => ({
        left: `${e.left - i.left}px`,
        top: `${e.top - i.top}px`,
        width: `${e.width}px`,
        height: `${e.height}px`,
      }),
      d = c.animate(
        [
          {
            ...u(a),
            borderRadius: `7px`,
            boxShadow: `0 12px 28px -10px rgba(16,16,24,0.28), 0 0 0 1px rgba(16,16,24,0.06)`,
          },
          {
            offset: 0.55,
            borderRadius: `7px`,
            boxShadow: `0 16px 32px -12px rgba(16,16,24,0.3), 0 0 0 1px rgba(16,16,24,0.06)`,
          },
          {
            ...u(o),
            borderRadius: `7px`,
            boxShadow: `0 0 0 0.5px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)`,
          },
        ],
        { duration: s, easing: `cubic-bezier(0.32, 0.72, 0.24, 1)`, fill: `forwards` },
      ),
      f = !1,
      p = () => {
        f || ((f = !0), r());
      };
    return (
      (d.onfinish = p),
      q.current.push(window.setTimeout(p, 1040)),
      () => {
        (d.cancel(), c.remove());
      }
    );
  }, [M]);
  let De = (0, n.useMemo)(() => {
      let e = Array.from({ length: w }, () => []);
      for (let t of O) e[t.cell]?.push(t);
      return e;
    }, [O, w]),
    Oe = (e) => Math.min(100, (De[e].reduce((e, t) => e + (t.key === M?.key ? 0 : t.usage), 0) / g) * 100),
    ke = (e, t) => {
      if (!t || e < T) return null;
      if (t.kind === `card`) {
        let n = O.find((e) => e.key === t.key);
        return !n || e === t.from ? null : d({ ...n.task, usage: n.usage }, e, be(O, t.key), g, v, `drop`, T);
      }
      let n = D.find((e) => e.id === t.id);
      return n ? d(n, e, be(O), g, v, `drop`, T) : null;
    },
    Ae = (e, t) => ke(e, t) !== null,
    je = (e, t) => {
      let n = e.filter((e) => e.task.id === t.id),
        r = new Map();
      for (let e of n) {
        let t = r.get(e.cell);
        r.set(e.cell, t ? { ...t, usage: t.usage + e.usage, booked: t.booked || e.booked } : e);
      }
      let i = [...r.values()].sort((e, t) => e.cell - t.cell),
        a = i.map((e, n) => ({ ...e, key: `${t.id}@${e.cell}`, part: n + 1, parts: i.length, manual: !0 }));
      return { list: [...e.filter((e) => e.task.id !== t.id), ...a], made: a };
    },
    $ = (0, n.useRef)({ fits: Ae, over: R, drop: (e, t) => {} });
  $.current = {
    fits: Ae,
    over: R,
    drop: (e, t) => {
      let n = ke(e, t);
      if (n) {
        if (t.kind === `card`) {
          let r = O.find((e) => e.key === t.key),
            i = n.map((e, t) => ({ ...r, key: `${r.key}~${t}`, cell: e.cell, usage: e.usage })),
            { list: a, made: o } = je([...O.filter((e) => e.key !== t.key), ...i], r.task);
          (k(a),
            I(o.filter((e) => n.some((t) => t.cell === e.cell)).map((e) => e.key)),
            ce?.(E(r), { day: Math.floor(e / C), session: e % C }));
        } else {
          let e = D.find((e) => e.id === t.id);
          if (!e || O.some((t) => t.task.id === e.id)) return;
          let { list: r, made: i } = je([...O, ...xe(e, n)], e);
          (k(r), I(i.map((e) => e.key)), se?.(e, i.map(E)));
        }
      }
    },
  };
  let Me = (e, t) =>
      e.kind === `card` && t.kind === `card`
        ? e.key === t.key
        : e.kind === `task` && t.kind === `task` && e.id === t.id,
    Ne = (e, t) => {
      let n = G.current;
      if (!n) return;
      if (U && Me(U.of, t)) return W(null);
      B(!0);
      let r = n.getBoundingClientRect(),
        i = e.getBoundingClientRect();
      W({ of: t, left: Math.max(0, Math.min(i.left - r.left, r.width - c)), top: i.bottom - r.top + 6 });
    };
  (0, n.useEffect)(() => {
    if (!U) return;
    let e = (e) => {
        e.target?.closest(`.ui-srn__tile`) || W(null);
      },
      t = (e) => e.key === `Escape` && W(null);
    return (
      document.addEventListener(`pointerdown`, e),
      document.addEventListener(`keydown`, t),
      () => {
        (document.removeEventListener(`pointerdown`, e), document.removeEventListener(`keydown`, t));
      }
    );
  }, [U]);
  let Pe = (0, n.useRef)(null),
    Fe = (0, n.useRef)(P);
  Fe.current = P;
  let Ie = (0, n.useRef)(() => {});
  Ie.current = () => {
    K.current && V === `auto` && ((K.current = !1), !P && Y.length > 0 && (F(!0), Z.current()));
  };
  let Le = (e, t, n) => {
    if (e.button !== 0) return;
    Pe.current?.(!1);
    let r = G.current,
      i = e.currentTarget;
    if (!r) return;
    e.preventDefault();
    let a = t.kind === `task` && Fe.current && !K.current;
    a && (K.current = !0);
    let o = i.getBoundingClientRect(),
      s = { x: e.clientX, y: e.clientY, ox: e.clientX - o.left, oy: e.clientY - o.top },
      c = null,
      l = (e) => {
        if (!c) {
          if (!n || Math.hypot(e.clientX - s.x, e.clientY - s.y) < 4) return;
          (W(null),
            (Fe.current || a) && ((K.current = !0), me(`manual`)),
            (c = i.cloneNode(!0)),
            c.removeAttribute(`data-chip`),
            c.removeAttribute(`data-card`),
            c.classList.add(`ui-srn__ghost`),
            (c.style.width = `${o.width}px`),
            r.append(c),
            fe(t),
            B(!0));
        }
        e.preventDefault();
        let l = r.getBoundingClientRect();
        c.style.transform = `translate(${e.clientX - l.left - s.ox}px, ${e.clientY - l.top - s.oy}px) rotate(-1.5deg)`;
        let u = document.elementFromPoint(e.clientX, e.clientY)?.closest(`[data-cell]`);
        pe(u && r.contains(u) ? Number(u.dataset.cell) : null);
      },
      u = (e) => {
        if (
          ((Pe.current = null),
          document.removeEventListener(`pointermove`, l),
          document.removeEventListener(`pointerup`, d),
          document.removeEventListener(`pointercancel`, f),
          document.removeEventListener(`keydown`, p),
          window.removeEventListener(`blur`, f),
          !c)
        ) {
          (a && Ie.current(), e && Ne(i, t));
          return;
        }
        let n = $.current.over;
        if (e && n !== null && $.current.fits(n, t)) (c.remove(), $.current.drop(n, t));
        else {
          let e = r.getBoundingClientRect(),
            t = i.getBoundingClientRect(),
            n = c;
          ((n.animate(
            [
              { transform: n.style.transform },
              { transform: `translate(${t.left - e.left}px, ${t.top - e.top}px)` },
            ],
            { duration: 260, easing: `cubic-bezier(0.32, 0.72, 0.24, 1)`, fill: `forwards` },
          ).onfinish = () => n.remove()),
            window.setTimeout(() => n.remove(), 400));
        }
        (fe(null), pe(null));
      },
      d = () => u(!0),
      f = () => u(!1),
      p = (e) => e.key === `Escape` && u(!1);
    (document.addEventListener(`pointermove`, l),
      document.addEventListener(`pointerup`, d),
      document.addEventListener(`pointercancel`, f),
      document.addEventListener(`keydown`, p),
      window.addEventListener(`blur`, f),
      (Pe.current = u));
  };
  return (0, r.jsxs)(`div`, {
    ref: G,
    className: [`ui-srn`, le].filter(Boolean).join(` `),
    "data-dragging": L ? `` : void 0,
    onPointerEnter: () => ge(!0),
    onPointerLeave: () => ge(!1),
    style: { "--ui-srn-days": t.length },
    children: [
      (0, r.jsx)(`style`, { href: `ui-scheduled-runs-clean`, precedence: `default`, children: re }),
      (0, r.jsxs)(`div`, {
        className: `ui-srn__bar`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-srn__heading`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-srn__title`, children: x }),
              S && (0, r.jsx)(`span`, { className: `ui-srn__note`, children: S }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-srn__tools`,
            children: [
              Ce.length > 0 &&
                (0, r.jsx)(`div`, {
                  className: `ui-srn__crew`,
                  "data-open": H !== null || void 0,
                  role: `group`,
                  "aria-label": `Show one agent's tasks`,
                  children: Ce.map((e, t) =>
                    (0, r.jsxs)(
                      `button`,
                      {
                        type: `button`,
                        className: `ui-srn__agent`,
                        "data-on": H === e.name || void 0,
                        "aria-pressed": H === e.name,
                        "aria-label": e.name,
                        title: H === e.name ? void 0 : e.name,
                        style: { zIndex: Ce.length - t },
                        onClick: () => we(e.name),
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-srn__agent-logo`,
                            "aria-hidden": `true`,
                            children: e.logo ?? Array.from(e.name.trim())[0]?.toUpperCase(),
                          }),
                          (0, r.jsx)(`span`, {
                            className: `ui-srn__agent-name`,
                            "aria-hidden": `true`,
                            children: e.name,
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
              (0, r.jsxs)(`span`, {
                className: `ui-srn__total`,
                children: [Ee, ` `, Ee === 1 ? `task` : `tasks`],
              }),
              (0, r.jsx)(`div`, {
                className: `ui-srn__modes`,
                role: `radiogroup`,
                "aria-label": `Scheduling`,
                children: [`auto`, `manual`].map((e) =>
                  (0, r.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      role: `radio`,
                      "aria-checked": V === e,
                      onClick: () => Se(e),
                      children: [e === `auto` && (0, r.jsx)(ne, {}), e === `auto` ? `Auto` : `Manual`],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-srn__body`,
        children: [
          (0, r.jsxs)(`section`, {
            className: `ui-srn__stack`,
            "aria-label": `To schedule`,
            children: [
              (0, r.jsxs)(`header`, {
                className: `ui-srn__stack-head`,
                children: [
                  (0, r.jsx)(`span`, { children: `To schedule` }),
                  (0, r.jsx)(`span`, { className: `ui-srn__count`, children: ye }),
                ],
              }),
              (0, r.jsx)(`ul`, {
                className: `ui-srn__cards`,
                children: D.map((e) => {
                  let t = J.has(e.id) || M?.id === e.id,
                    n = A.includes(e.id);
                  return (0, r.jsx)(
                    `li`,
                    {
                      className: `ui-srn__slot`,
                      "data-gone": t || void 0,
                      children: (0, r.jsxs)(`div`, {
                        className: `ui-srn__tile ui-srn__card`,
                        "data-card": e.id,
                        "data-dim": Te(e) || void 0,
                        "data-flying": M?.id === e.id || void 0,
                        "data-held": (L?.kind === `task` && L.id === e.id) || void 0,
                        "data-movable": !t || void 0,
                        "data-open": (U?.of.kind === `task` && U.of.id === e.id) || void 0,
                        onPointerDown: (n) => !t && Le(n, { kind: `task`, id: e.id }, !0),
                        children: [
                          (0, r.jsxs)(`span`, {
                            className: `ui-srn__tile-top`,
                            children: [
                              (0, r.jsx)(_, { logo: e.logo, title: e.title }),
                              (0, r.jsx)(`span`, {
                                className: `ui-srn__tile-title`,
                                title: e.title,
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, r.jsx)(`span`, {
                            className: `ui-srn__tile-meta`,
                            "data-nope": n || void 0,
                            children: n
                              ? `No room this week`
                              : [e.agent, e.detail].filter(Boolean).join(` · `),
                          }),
                          (0, r.jsx)(te, { task: e, share: ee(e.usage, g) }),
                        ],
                      }),
                    },
                    e.id,
                  );
                }),
              }),
              (0, r.jsx)(`p`, {
                className: `ui-srn__empty`,
                "data-show": ye === 0 || void 0,
                "aria-hidden": ye > 0,
                children: `Everything's scheduled`,
              }),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-srn__scroll`,
            children: (0, r.jsxs)(`div`, {
              className: `ui-srn__week`,
              role: `grid`,
              "aria-label": x,
              children: [
                (0, r.jsxs)(`div`, {
                  role: `row`,
                  className: `ui-srn__row ui-srn__row--head`,
                  children: [
                    (0, r.jsx)(`span`, { "aria-hidden": `true` }),
                    t.map((e, t) => {
                      let n = typeof e == `string` ? e : e.name,
                        i = typeof e == `string` ? void 0 : e.date;
                      return (0, r.jsxs)(
                        `span`,
                        {
                          role: `columnheader`,
                          className: `ui-srn__day`,
                          "data-today": t === h.day || void 0,
                          children: [n, i !== void 0 && (0, r.jsx)(`b`, { children: i })],
                        },
                        t,
                      );
                    }),
                  ],
                }),
                f.map((e, n) =>
                  (0, r.jsxs)(
                    `div`,
                    {
                      role: `row`,
                      className: `ui-srn__row`,
                      children: [
                        (0, r.jsx)(`span`, { role: `rowheader`, className: `ui-srn__time`, children: e }),
                        t.map((e, t) => {
                          let i = t * C + n,
                            a = De[i],
                            s = Oe(i),
                            c = a.length - o,
                            l = L !== null && (L.kind !== `card` || L.from !== i),
                            u = l && Ae(i, L),
                            d = Math.max(0, 100 - Oe(i)),
                            f =
                              !l || u
                                ? null
                                : i < T
                                  ? `Over`
                                  : a.length >= o || d < 1
                                    ? `Full`
                                    : `Only ${m(d)} left`;
                          return (0, r.jsxs)(
                            `div`,
                            {
                              role: `gridcell`,
                              className: `ui-srn__cell`,
                              "data-cell": i,
                              "data-past": i < T || void 0,
                              "data-blocked": (l && !u) || void 0,
                              "data-over": (u && R === i) || void 0,
                              title: `${m(s)} of the session limit booked`,
                              children: [
                                (0, r.jsxs)(`ul`, {
                                  className: `ui-srn__chips`,
                                  children: [
                                    a
                                      .slice(0, c > 0 ? 1 : o)
                                      .map((e) =>
                                        (0, r.jsxs)(
                                          `li`,
                                          {
                                            className: `ui-srn__tile ui-srn__chip`,
                                            "data-chip": e.key,
                                            "data-dim": Te(e.task) || void 0,
                                            "data-landing": e.key === M?.key || void 0,
                                            "data-fresh": de.includes(e.key) || void 0,
                                            "data-held": (L?.kind === `card` && L.key === e.key) || void 0,
                                            "data-movable": i >= T || void 0,
                                            "data-open":
                                              (U?.of.kind === `card` && U.of.key === e.key) || void 0,
                                            onPointerDown: (t) =>
                                              Le(
                                                t,
                                                { kind: `card`, key: e.key, from: i, usage: e.usage },
                                                i >= T,
                                              ),
                                            title: `${e.task.title}${e.parts > 1 ? ` – part ${e.part} of ${e.parts}` : ``} · ${m((e.usage / g) * 100)}`,
                                            children: [
                                              (0, r.jsxs)(`span`, {
                                                className: `ui-srn__tile-top`,
                                                children: [
                                                  (0, r.jsx)(_, { logo: e.task.logo, title: e.task.title }),
                                                  (0, r.jsx)(`span`, {
                                                    className: `ui-srn__tile-title`,
                                                    children: e.task.title,
                                                  }),
                                                  e.parts > 1 &&
                                                    (0, r.jsxs)(`span`, {
                                                      className: `ui-srn__tile-part`,
                                                      children: [e.part, `/`, e.parts],
                                                    }),
                                                ],
                                              }),
                                              (0, r.jsx)(`span`, {
                                                className: `ui-srn__tile-meta`,
                                                title: e.task.detail,
                                                children: [e.task.agent, e.task.detail]
                                                  .filter(Boolean)
                                                  .join(` · `),
                                              }),
                                              (0, r.jsx)(te, { task: e.task, share: m((e.usage / g) * 100) }),
                                            ],
                                          },
                                          e.key,
                                        ),
                                      ),
                                    c > 0 &&
                                      (0, r.jsxs)(`li`, {
                                        className: `ui-srn__more`,
                                        children: [`+`, c + 1, ` more`],
                                      }),
                                  ],
                                }),
                                f &&
                                  (0, r.jsx)(`span`, {
                                    className: `ui-srn__why`,
                                    "aria-hidden": `true`,
                                    children: f,
                                  }),
                                i === T &&
                                  (0, r.jsx)(`span`, { className: `ui-srn__now`, "aria-hidden": `true` }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-srn__use`,
                                  "aria-hidden": `true`,
                                  children: (0, r.jsx)(`i`, { style: { width: `${s}%` } }),
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              ],
            }),
          }),
        ],
      }),
      U &&
        (() => {
          if (!U) return null;
          let e = U.of,
            i = e.kind === `card` ? O.find((t) => t.key === e.key) : void 0,
            a = i?.task ?? (e.kind === `task` ? D.find((t) => t.id === e.id) : void 0);
          if (!a) return null;
          let o = (e) => {
              let n = t[e];
              return typeof n == `string` ? n : [n.name, n.date].filter((e) => e !== void 0).join(` `);
            },
            s = i ? i.cell < T : !1,
            l = i ? `${o(Math.floor(i.cell / C))} · ${f[i.cell % C]}` : `Not scheduled yet`,
            d =
              i && i.parts > 1
                ? `Part ${i.part} of ${i.parts} · ${m((i.usage / g) * 100)} of the session`
                : i
                  ? `${m((i.usage / g) * 100)} of the session`
                  : null,
            p = u(a) / g,
            ee = s
              ? `This session is over`
              : i
                ? `Drag it to another session to move it`
                : A.includes(a.id)
                  ? `No session has room for it this week`
                  : `Drag it into a session to book it`;
          return (0, r.jsxs)(`div`, {
            className: `ui-srn__info`,
            role: `dialog`,
            "aria-label": a.title,
            style: { left: U.left, top: U.top, width: c },
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-srn__info-head`,
                children: [
                  (0, r.jsx)(_, { logo: a.logo, title: a.title }),
                  (0, r.jsx)(`span`, { className: `ui-srn__info-title`, children: a.title }),
                ],
              }),
              a.detail && (0, r.jsx)(`p`, { className: `ui-srn__info-text`, children: a.detail }),
              (0, r.jsxs)(`dl`, {
                className: `ui-srn__info-rows`,
                children: [
                  a.agent &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(`dt`, { children: `Agent` }),
                        (0, r.jsx)(`dd`, { children: a.agent }),
                      ],
                    }),
                  (0, r.jsx)(`dt`, { children: `Session` }),
                  (0, r.jsx)(`dd`, { children: l }),
                  (a.stats ?? [])
                    .slice(0, 2)
                    .map((e, t) =>
                      (0, r.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            (0, r.jsx)(`dt`, {
                              children: e.label
                                ? e.label[0].toUpperCase() + e.label.slice(1)
                                : e.icon[0].toUpperCase() + e.icon.slice(1),
                            }),
                            (0, r.jsx)(`dd`, { children: e.value }),
                          ],
                        },
                        t,
                      ),
                    ),
                  (0, r.jsx)(`dt`, { children: `Needs` }),
                  (0, r.jsx)(`dd`, {
                    children:
                      d ??
                      (p > 1
                        ? `${m(p * 100)} · split over ${Math.ceil(p)} sessions`
                        : `${m(p * 100)} of a session`),
                  }),
                ],
              }),
              (0, r.jsx)(`p`, { className: `ui-srn__info-hint`, children: ee }),
            ],
          });
        })(),
    ],
  });
}
function te({ task: e, share: t }) {
  return (0, r.jsxs)(`span`, {
    className: `ui-srn__tile-stats`,
    children: [
      (e.stats ?? [])
        .slice(0, 2)
        .map((e, t) =>
          (0, r.jsxs)(
            `span`,
            {
              className: `ui-srn__stat`,
              "aria-label": `${e.value} ${e.label ?? e.icon}`,
              children: [(0, r.jsx)(g, { icon: e.icon }), e.value],
            },
            t,
          ),
        ),
      (0, r.jsx)(`span`, { className: `ui-srn__tag`, children: t }),
    ],
  });
}
function g({ icon: e }) {
  return (0, r.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    "aria-hidden": `true`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.4`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    children: {
      files: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(`path`, { d: `M4 2.5h5l3 3v8H4z` }), (0, r.jsx)(`path`, { d: `M9 2.5v3h3` })],
      }),
      pr: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `4.5`, cy: `3.75`, r: `1.5` }),
          (0, r.jsx)(`circle`, { cx: `4.5`, cy: `12.25`, r: `1.5` }),
          (0, r.jsx)(`circle`, { cx: `11.5`, cy: `12.25`, r: `1.5` }),
          (0, r.jsx)(`path`, { d: `M4.5 5.25v5.5M11.5 10.75V8a2 2 0 0 0-2-2H7.5` }),
        ],
      }),
      tests: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.5` }),
          (0, r.jsx)(`path`, { d: `m5.75 8.25 1.5 1.5 3-3.25` }),
        ],
      }),
      messages: (0, r.jsx)(`path`, { d: `M3 3.5h10v7.5H7.5L4.5 13.5V11H3z` }),
      issues: (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.5` }),
          (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `1`, fill: `currentColor` }),
        ],
      }),
      links: (0, r.jsx)(`path`, {
        d: `m6.5 9.5 3-3M5.75 7.25l-1 1a2.12 2.12 0 0 0 3 3l1-1M10.25 8.75l1-1a2.12 2.12 0 0 0-3-3l-1 1`,
      }),
    }[e],
  });
}
function _({ logo: e, title: t }) {
  return (0, r.jsx)(`span`, {
    className: `ui-srn__mark`,
    "aria-hidden": `true`,
    children: e ?? Array.from(t.trim())[0]?.toUpperCase(),
  });
}
function ne() {
  return (0, r.jsxs)(`svg`, {
    viewBox: `0 0 16 16`,
    "aria-hidden": `true`,
    children: [
      (0, r.jsx)(`path`, {
        d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25C9.35 6.3 8.3 7.35 8 10.25 7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z`,
        fill: `currentColor`,
      }),
      (0, r.jsx)(`path`, {
        d: `M12.25 9.5c.15 1.3.6 1.75 1.9 1.9-1.3.15-1.75.6-1.9 1.9-.15-1.3-.6-1.75-1.9-1.9 1.3-.15 1.75-.6 1.9-1.9Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var re = `.ui-srn{--ui-srn-card: #ffffff;--ui-srn-strong: #000000;--ui-srn-ink: rgba(0, 0, 0, 0.88);--ui-srn-text: rgba(0, 0, 0, 0.61);--ui-srn-muted: rgba(0, 0, 0, 0.45);--ui-srn-faint: rgba(0, 0, 0, 0.27);--ui-srn-line: rgba(0, 0, 0, 0.06);--ui-srn-lane: #f4f4f5;--ui-srn-well: rgba(0, 0, 0, 0.025);--ui-srn-edge: #e9e9ec;--ui-srn-accent: #0060e2;--ui-srn-accent-bg: rgba(0, 96, 226, 0.08);--ui-srn-drop: rgba(0, 96, 226, 0.4);--ui-srn-hatch: rgba(0, 0, 0, 0.05);--ui-srn-meter: #c8c8ce;--ui-srn-track: rgba(0, 0, 0, 0.045);--ui-srn-now: #e5484d;--ui-srn-track-2: rgba(0, 0, 0, 0.05);--ui-srn-amber: #b45309;--ui-srn-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-srn-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;container: ui-srn / inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-srn-text);-webkit-font-smoothing: antialiased}.ui-srn *, .ui-srn *::before, .ui-srn *::after{box-sizing: border-box}.ui-srn ul{margin: 0;padding: 0;list-style: none}:where(.ui-srn) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}.ui-srn button:focus-visible{outline: 2px solid var(--ui-srn-accent);outline-offset: 2px}.ui-srn__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-bottom: 12px}.ui-srn__heading{display: flex;align-items: baseline;gap: 8px;min-width: 0}.ui-srn__title{font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-srn-strong);white-space: nowrap}.ui-srn__note{overflow: hidden;font-size: 12px;color: var(--ui-srn-muted);white-space: nowrap;text-overflow: ellipsis}.ui-srn__bar{flex-wrap: wrap}.ui-srn__tools{display: flex;align-items: center;gap: 12px;margin-left: auto}.ui-srn__crew{display: flex;align-items: center;padding-left: 9px}.ui-srn__agent{position: relative;display: inline-flex;align-items: center;height: 26px;margin-left: -9px;padding: 0 5px;border-radius: 7px;background: var(--ui-srn-card) !important;box-shadow: var(--ui-srn-shadow);transition: margin-left 380ms var(--ui-srn-ease), transform 160ms ease, opacity 200ms ease}.ui-srn__crew[data-open] .ui-srn__agent{margin-left: 4px}.ui-srn__crew[data-open] .ui-srn__agent:not([data-on]){opacity: 0.6}.ui-srn__agent:hover{transform: translateY(-1px)}.ui-srn__agent-logo{display: grid;flex: none;place-items: center;width: 16px;height: 16px;font-size: 10px;font-weight: 500;color: var(--ui-srn-ink)}.ui-srn__agent-logo > svg{width: 14px;height: 14px}.ui-srn__agent-name{max-width: 0;overflow: hidden;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-srn-ink);white-space: nowrap;opacity: 0;transition: max-width 380ms var(--ui-srn-ease), margin 380ms var(--ui-srn-ease), opacity 240ms ease}.ui-srn__agent[data-on] .ui-srn__agent-name{max-width: 120px;margin: 0 3px 0 6px;opacity: 1}.ui-srn__total{font-size: 12px;color: var(--ui-srn-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-srn__modes{display: flex;padding: 2px;border-radius: 8px;background: var(--ui-srn-track-2)}.ui-srn__modes > button{display: inline-flex;align-items: center;gap: 5px;height: 24px;padding: 0 10px;border-radius: 6px;font-size: 12.5px !important;font-weight: 500;color: var(--ui-srn-text) !important;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-srn__modes > button > svg{width: 12px;height: 12px}.ui-srn__modes > button[aria-checked="true"]{background: var(--ui-srn-card) !important;color: var(--ui-srn-strong) !important;box-shadow: var(--ui-srn-shadow)}.ui-srn__body{display: grid;grid-template-columns: 220px minmax(0, 1fr);gap: 12px;align-items: stretch}.ui-srn__stack{position: relative;min-height: 240px;padding: 4px;overflow: hidden;border-radius: 14px;background: var(--ui-srn-lane)}.ui-srn__stack-head{display: flex;align-items: center;justify-content: space-between;height: 30px;padding: 0 6px 0 8px;font-size: 11.5px;font-weight: 500;color: var(--ui-srn-muted)}.ui-srn__count{display: grid;place-items: center;min-width: 20px;height: 18px;padding: 0 5px;border-radius: 6px;background: rgba(16, 16, 24, 0.06);font-size: 11px;color: var(--ui-srn-text);font-variant-numeric: tabular-nums}.ui-srn__cards{display: grid}.ui-srn__slot{height: 68px;transition: height 420ms var(--ui-srn-ease) 140ms}.ui-srn__slot[data-gone]{height: 0;pointer-events: none}.ui-srn__slot[data-gone] > .ui-srn__card{opacity: 0;visibility: hidden;pointer-events: none;transition: opacity 160ms ease, visibility 0s linear 160ms}.ui-srn__card[data-flying]{visibility: hidden}.ui-srn__card[data-movable]{cursor: grab;touch-action: none;user-select: none}.ui-srn__card[data-held]{opacity: 0.35}.ui-srn__tile{display: grid;align-content: center;gap: 3px;height: 64px;padding: 0 8px 0 6px;overflow: hidden;border-radius: 7px;background: var(--ui-srn-card);box-shadow: var(--ui-srn-shadow)}.ui-srn__tile-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-srn__tile-title{flex: 1;min-width: 0;overflow: hidden;font-size: 11.5px;font-weight: 500;line-height: 15px;color: var(--ui-srn-ink);white-space: nowrap;text-overflow: ellipsis}.ui-srn__tile-part{flex: none;font-size: 10px;line-height: 15px;color: var(--ui-srn-muted);font-variant-numeric: tabular-nums}.ui-srn__tile-meta{overflow: hidden;padding-left: 24px;font-size: 10.5px;line-height: 14px;color: var(--ui-srn-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-srn__tile-meta[data-nope]{color: var(--ui-srn-amber)}.ui-srn__card{height: 64px}.ui-srn__tile-stats{display: flex;align-items: center;gap: 10px;min-width: 0;height: 16px;padding-left: 24px;font-size: 10.5px;line-height: 16px;color: var(--ui-srn-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-srn__stat{display: inline-flex;align-items: center;gap: 3px}.ui-srn__stat > svg{flex: none;width: 12px;height: 12px}.ui-srn__tag{margin-left: auto;padding: 0 5px;border-radius: 4px;background: var(--ui-srn-track-2);font-size: 10px;line-height: 15px;color: var(--ui-srn-text)}.ui-srn__tile[data-open]{box-shadow: 0 0 0 1.5px var(--ui-srn-drop), var(--ui-srn-shadow)}.ui-srn__info{position: absolute;z-index: 7;display: grid;pointer-events: none;gap: 8px;padding: 12px;border-radius: 10px;background: var(--ui-srn-card);box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 14px 32px -10px rgba(16, 16, 24, 0.24), 0 2px 6px rgba(16, 16, 24, 0.05);transform-origin: top left;animation: ui-srn-pop 180ms var(--ui-srn-ease) both}.ui-srn__info-head{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-srn__info-title{min-width: 0;font-size: 13px;font-weight: 500;line-height: 18px;color: var(--ui-srn-strong);overflow-wrap: anywhere}.ui-srn__info-text{margin: 0;font-size: 12px;line-height: 17px;color: var(--ui-srn-text)}.ui-srn__info-rows{display: grid;grid-template-columns: auto minmax(0, 1fr);gap: 4px 12px;margin: 0;padding-top: 8px;border-top: 0.5px solid var(--ui-srn-line);font-size: 12px;line-height: 16px}.ui-srn__info-rows dt{color: var(--ui-srn-muted)}.ui-srn__info-rows dd{margin: 0;color: var(--ui-srn-ink);font-variant-numeric: tabular-nums}.ui-srn__info-hint{margin: 0;font-size: 11px;line-height: 15px;color: var(--ui-srn-faint)}@keyframes ui-srn-pop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}.ui-srn__tile{cursor: pointer;transition: opacity 240ms ease}.ui-srn__tile[data-dim]{opacity: 0.35}.ui-srn__tile .ui-srn__mark, .ui-srn__info .ui-srn__mark{width: 18px;height: 18px;border-radius: 5px}.ui-srn__tile .ui-srn__mark > svg, .ui-srn__info .ui-srn__mark > svg{width: 12px;height: 12px}.ui-srn__empty{position: absolute;inset: 34px 4px 4px;display: grid;place-items: center;margin: 0;font-size: 12px;color: var(--ui-srn-faint);opacity: 0;transition: opacity 300ms ease 300ms;pointer-events: none}.ui-srn__empty[data-show]{opacity: 1}.ui-srn__mark{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 4px;background: var(--ui-srn-card);box-shadow: var(--ui-srn-shadow);font-size: 9px;font-weight: 500;color: var(--ui-srn-ink)}.ui-srn__mark > svg{width: 10px;height: 10px}.ui-srn__flier{position: absolute;z-index: 5;pointer-events: none}.ui-srn__scroll{min-width: 0;overflow-x: auto;user-select: none}.ui-srn__week{display: grid;gap: 4px;min-width: calc(38px + var(--ui-srn-days) * 128px)}.ui-srn__row{display: grid;grid-template-columns: 34px repeat(var(--ui-srn-days), minmax(0, 1fr));gap: 4px}.ui-srn__row--head{height: 30px;align-items: center}.ui-srn__day{display: flex;align-items: baseline;gap: 4px;height: 26px;padding: 5px 8px 0;border-radius: 8px;background: var(--ui-srn-well);box-shadow: inset 0 0 0 0.5px var(--ui-srn-line);font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-srn-muted)}.ui-srn__day b{font-size: 12px;font-weight: 500;letter-spacing: 0;color: var(--ui-srn-text);font-variant-numeric: tabular-nums}.ui-srn__time{padding-top: 6px;font-size: 11px;line-height: 16px;color: var(--ui-srn-faint);font-variant-numeric: tabular-nums}.ui-srn__cell{position: relative;display: flex;flex-direction: column;min-width: 0;height: 156px;padding: 4px 4px 20px;border-radius: 10px;background: var(--ui-srn-well);box-shadow: inset 0 0 0 0.5px var(--ui-srn-line)}.ui-srn__cell[data-past]{background: transparent}.ui-srn__cell[data-past] .ui-srn__chips{opacity: 0.45}.ui-srn__cell{transition: background-color 160ms ease, box-shadow 160ms ease, opacity 160ms ease}.ui-srn__cell[data-blocked]{background: repeating-linear-gradient(135deg, var(--ui-srn-well) 0 6px, var(--ui-srn-hatch) 6px 7px)}.ui-srn__cell[data-blocked] > :not(.ui-srn__why){opacity: 0.45}.ui-srn__cell[data-over]{background: var(--ui-srn-accent-bg);box-shadow: inset 0 0 0 1px var(--ui-srn-drop)}.ui-srn__chips{position: relative;z-index: 1;display: grid;grid-template-columns: minmax(0, 1fr);gap: 3px}.ui-srn__chip[data-landing]{visibility: hidden}.ui-srn__chip[data-movable]{cursor: grab;touch-action: none;user-select: none}.ui-srn__chip[data-held]{opacity: 0.35}.ui-srn[data-dragging], .ui-srn[data-dragging] *{cursor: grabbing !important}.ui-srn__ghost{position: absolute;top: 0;left: 0;z-index: 6;margin: 0;box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(16, 16, 24, 0.28);pointer-events: none;animation: none}.ui-srn__chip[data-fresh]{animation: ui-srn-drop 460ms var(--ui-srn-ease) both}.ui-srn__more{height: 64px;padding-left: 6px;font-size: 11px;line-height: 64px;color: var(--ui-srn-muted)}.ui-srn__now{position: absolute;top: -2px;right: 0;left: 0;z-index: 2;height: 1.5px;margin-top: -0.75px;background: var(--ui-srn-now);pointer-events: none}.ui-srn__now::before{content: "";position: absolute;top: 50%;left: -4px;width: 8px;height: 8px;border-radius: 50%;background: var(--ui-srn-now);transform: translateY(-50%)}.ui-srn__use{position: absolute;right: 8px;bottom: 9px;left: 8px;height: 4px;overflow: hidden;border-radius: 2px;background: var(--ui-srn-track)}.ui-srn__use > i{display: block;height: 100%;border-radius: inherit;background: var(--ui-srn-meter);transition: width 520ms var(--ui-srn-ease)}.ui-srn__cell[data-past] .ui-srn__use > i{opacity: 0.5}.ui-srn__why{position: absolute;top: 50%;left: 50%;z-index: 3;padding: 2px 8px;border-radius: 6px;background: var(--ui-srn-card);box-shadow: var(--ui-srn-shadow);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-srn-text);white-space: nowrap;transform: translate(-50%, -50%);pointer-events: none;animation: ui-srn-pop 140ms ease both}@keyframes ui-srn-drop{from{opacity: 0;transform: translateY(-6px) scale(0.96)}}@container ui-srn (max-width: 640px){.ui-srn__body{grid-template-columns: minmax(0, 1fr)}.ui-srn__cards{grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));column-gap: 4px}}@media (prefers-reduced-motion: reduce){.ui-srn *, .ui-srn *::before, .ui-srn *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-srn{--ui-srn-card: #1c1c1f;--ui-srn-strong: #ffffff;--ui-srn-ink: rgba(255, 255, 255, 0.9);--ui-srn-text: rgba(255, 255, 255, 0.62);--ui-srn-muted: rgba(255, 255, 255, 0.45);--ui-srn-faint: rgba(255, 255, 255, 0.28);--ui-srn-line: rgba(255, 255, 255, 0.08);--ui-srn-lane: #161618;--ui-srn-well: rgba(255, 255, 255, 0.03);--ui-srn-edge: #2c2c31;--ui-srn-accent: #5b9aff;--ui-srn-accent-bg: rgba(91, 154, 255, 0.1);--ui-srn-drop: rgba(91, 154, 255, 0.5);--ui-srn-hatch: rgba(255, 255, 255, 0.06);--ui-srn-meter: #55555c;--ui-srn-track: rgba(255, 255, 255, 0.06);--ui-srn-now: #ff6369;--ui-srn-track-2: rgba(255, 255, 255, 0.07);--ui-srn-amber: #fbbf24;--ui-srn-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-srn__count{background: rgba(255, 255, 255, 0.08)}`,
  v = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  ie = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-srn-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  ae = () => {
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
      style: { color: `var(--ui-srn-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  b = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-srn-strong, #181717)` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  x = () =>
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
  S = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#5E6AD2`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`,
      }),
    }),
  oe = [
    {
      id: `react`,
      title: `Upgrade to React 19`,
      agent: `Claude Code`,
      detail: `Bump every package and fix the breaking changes across the app`,
      usage: 30,
      logo: (0, r.jsx)(b, {}),
      stats: [
        { icon: `files`, value: 48, label: `files changed` },
        { icon: `pr`, value: 1, label: `pull request` },
      ],
      at: { day: 0, session: 0 },
    },
    {
      id: `metrics`,
      title: `Q4 metrics report`,
      agent: `Claude Code`,
      detail: `Signups, activation and churn with a one-page summary for the board`,
      usage: 40,
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
      stats: [
        { icon: `files`, value: 6, label: `sheets` },
        { icon: `messages`, value: 3, label: `comments` },
      ],
      at: { day: 0, session: 1 },
    },
    {
      id: `triage`,
      title: `Triage 120 open issues`,
      agent: `Codex`,
      detail: `Label, size and route every issue older than 30 days`,
      usage: 25,
      logo: (0, r.jsx)(S, {}),
      stats: [{ icon: `issues`, value: 120, label: `issues` }],
      at: { day: 1, session: 0 },
    },
    {
      id: `search`,
      title: `Rebuild help center search`,
      agent: `Gemini CLI`,
      detail: `Index 340 articles and tune ranking on the top 50 queries`,
      usage: 20,
      logo: (0, r.jsx)(y, {}),
      stats: [
        { icon: `files`, value: 340, label: `articles` },
        { icon: `links`, value: 50, label: `queries` },
      ],
      at: { day: 1, session: 2 },
    },
    {
      id: `release`,
      title: `Ship the v3.0 release`,
      agent: `Claude Code`,
      detail: `Changelog, migration guide, tags and the npm publish`,
      usage: 60,
      logo: (0, r.jsx)(b, {}),
      stats: [
        { icon: `pr`, value: 14, label: `pull requests` },
        { icon: `files`, value: 22, label: `files changed` },
      ],
      at: { day: 2, session: 0 },
    },
    {
      id: `oauth`,
      title: `Migrate auth to OAuth 2.1`,
      agent: `Claude Code`,
      detail: `Move every login to PKCE and keep the old tokens working`,
      usage: 140,
      logo: (0, r.jsx)(b, {}),
      stats: [
        { icon: `files`, value: 63, label: `files changed` },
        { icon: `tests`, value: 210, label: `tests` },
      ],
    },
    {
      id: `api-docs`,
      title: `Public API reference`,
      agent: `Codex`,
      detail: `Every endpoint with a curl and an SDK example`,
      usage: 45,
      logo: (0, r.jsx)(y, {}),
      stats: [
        { icon: `files`, value: 38, label: `pages` },
        { icon: `links`, value: 52, label: `endpoints` },
      ],
    },
    {
      id: `flaky`,
      title: `Fix the flaky checkout suite`,
      agent: `Claude Code`,
      detail: `Find why 12 tests fail one run in twenty and fix them`,
      usage: 35,
      logo: (0, r.jsx)(b, {}),
      stats: [
        { icon: `tests`, value: 12, label: `flaky tests` },
        { icon: `pr`, value: 1, label: `pull request` },
      ],
    },
    {
      id: `support`,
      title: `Support themes for October`,
      agent: `Gemini CLI`,
      detail: `Cluster 480 tickets into themes, with quotes for each`,
      usage: 25,
      logo: (0, r.jsx)(x, {}),
      stats: [{ icon: `messages`, value: 480, label: `tickets` }],
    },
    {
      id: `billing`,
      title: `Split billing into a service`,
      agent: `Claude Code`,
      detail: `Move invoices, usage and webhooks out of the monolith`,
      usage: 90,
      logo: (0, r.jsx)(S, {}),
      stats: [
        { icon: `files`, value: 112, label: `files changed` },
        { icon: `pr`, value: 3, label: `pull requests` },
      ],
    },
    {
      id: `changelog`,
      title: `November changelog`,
      agent: `Gemini CLI`,
      detail: `Everything merged since November 1, grouped for skimmers`,
      usage: 20,
      logo: (0, r.jsx)(y, {}),
      stats: [{ icon: `pr`, value: 46, label: `pull requests` }],
    },
  ],
  se = [
    { name: `Claude Code`, logo: (0, r.jsx)(v, {}) },
    { name: `Codex`, logo: (0, r.jsx)(ie, {}) },
    { name: `Gemini CLI`, logo: (0, r.jsx)(ae, {}) },
  ],
  ce = [
    { name: `Tue`, date: 27 },
    { name: `Wed`, date: 28 },
    { name: `Thu`, date: 29 },
  ];
function le() {
  return (0, r.jsx)(`div`, {
    className: `srn-demo`,
    children: (0, r.jsx)(h, {
      tasks: oe,
      agents: se,
      days: ce,
      now: { day: 0, session: 1 },
      note: `5-hour sessions`,
      autoRun: 1200,
      loop: !0,
    }),
  });
}
