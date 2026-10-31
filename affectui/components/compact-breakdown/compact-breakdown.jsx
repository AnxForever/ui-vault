import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) => new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }).format(e),
  a = [`var(--ui-cb-c1)`, `var(--ui-cb-c2)`, `var(--ui-cb-c3)`, `var(--ui-cb-c4)`, `var(--ui-cb-c5)`],
  o = `cubic-bezier(0.22, 1, 0.36, 1)`,
  s = (e) => 1 - (1 - e) ** 4,
  c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  l = (e) => e.id ?? e.label,
  u = (e) => (Number.isFinite(e) ? Math.max(0, e) : 0),
  d = (e) => (e > 0 && e < 1 ? `<1%` : e > 99 && e < 100 ? `>99%` : `${Math.round(e)}%`);
function f(e, t, r) {
  let [i, a] = (0, n.useState)(() => Object.fromEntries(Object.keys(e).map((e) => [e, 0]))),
    o = (0, n.useRef)(i),
    l = (0, n.useRef)(!1),
    u = JSON.stringify(e);
  return (
    (0, n.useEffect)(() => {
      let e = JSON.parse(u),
        n = { ...o.current };
      if (c()) {
        ((o.current = e), a(e));
        return;
      }
      let i = l.current ? r : t;
      l.current = !0;
      let d = performance.now(),
        f = 0,
        p = (t) => {
          let r = Math.min(1, (t - d) / i),
            c = s(r),
            l = {};
          for (let t in e) l[t] = (n[t] ?? 0) + (e[t] - (n[t] ?? 0)) * c;
          ((o.current = l), a(l), r < 1 && (f = requestAnimationFrame(p)));
        };
      return ((f = requestAnimationFrame(p)), () => cancelAnimationFrame(f));
    }, [u]),
    i
  );
}
function p({
  title: e = `Breakdown`,
  items: t,
  periods: s,
  period: p,
  defaultPeriod: h,
  onPeriodChange: g,
  delta: _,
  format: v = i,
  totalLabel: y = `Total`,
  footer: b,
  className: x,
}) {
  let S = (0, n.useId)(),
    [C, w] = (0, n.useState)(h ?? s?.[0]?.id),
    T = p ?? C,
    [E, D] = (0, n.useState)(null),
    O = (0, n.useRef)([]),
    k = new Map(),
    A = t.map((e) => {
      let t = l(e),
        n = k.get(t) ?? 0;
      return (k.set(t, n + 1), { item: e, key: n ? `${t}#${n}` : t });
    });
  for (let { item: e, key: t } of A) {
    let n = O.current.find((e) => e.key === t);
    n
      ? ((n.label = e.label), e.color && (n.color = e.color))
      : O.current.push({
          key: t,
          label: e.label,
          color: e.color ?? a[O.current.length] ?? `var(--ui-cb-c5)`,
        });
  }
  let j = new Map(A.map(({ item: e, key: t }) => [t, u(e.value)])),
    M = [...j.values()].reduce((e, t) => e + t, 0),
    N = E !== null && j.has(E) ? E : null,
    P = { "#total": M, "#figure": N ? (j.get(N) ?? 0) : M };
  for (let e of O.current) P[e.key] = j.get(e.key) ?? 0;
  let F = f(P, 900, 620),
    I = Math.max(F[`#total`] ?? 0, 1e-4),
    L = O.current
      .map((e) => ({ ...e, value: j.get(e.key) ?? 0, leaving: !j.has(e.key) }))
      .filter((e) => !e.leaving || (F[e.key] ?? 0) > 0.5)
      .sort((e, t) => Number(e.leaving) - Number(t.leaving) || t.value - e.value),
    R = L.map((e) => e.key).join(`|`),
    z = L.find((e) => !e.leaving && e.value > 0),
    B = (0, n.useRef)(new Map()),
    V = (0, n.useRef)(new Map());
  (0, n.useLayoutEffect)(() => {
    let e = new Map();
    (B.current.forEach((t, n) => e.set(n, t.offsetTop)),
      c() ||
        e.forEach((e, t) => {
          let n = V.current.get(t),
            r = B.current.get(t);
          r &&
            n !== void 0 &&
            n !== e &&
            r.animate([{ transform: `translateY(${n - e}px)` }, { transform: `none` }], {
              duration: 560,
              easing: o,
            });
        }),
      (V.current = e));
  }, [R]);
  let H = (0, n.useRef)(null),
    U = (0, n.useRef)(null),
    W = (0, n.useRef)(!1);
  (0, n.useLayoutEffect)(() => {
    let e = H.current,
      t = U.current,
      n = e?.querySelector(`[aria-checked="true"]`);
    if (!e || !t || !n) return;
    let r = () => {
      (W.current || (t.style.transition = `none`),
        (t.style.width = `${n.offsetWidth}px`),
        (t.style.height = `${n.offsetHeight}px`),
        (t.style.transform = `translate(${n.offsetLeft}px, ${n.offsetTop}px)`),
        (t.style.opacity = `1`),
        (W.current ||= (t.offsetWidth, (t.style.transition = ``), !0)));
    };
    r();
    let i = new ResizeObserver(r);
    return (i.observe(e), () => i.disconnect());
  }, [T, s?.length]);
  let G = (e) => {
      (p === void 0 && w(e), g?.(e));
    },
    K = (e) => {
      if (!s?.length) return;
      let t = s.findIndex((e) => e.id === T),
        n =
          e.key === `ArrowRight` || e.key === `ArrowDown`
            ? t + 1
            : e.key === `ArrowLeft` || e.key === `ArrowUp`
              ? t - 1
              : e.key === `Home`
                ? 0
                : e.key === `End`
                  ? s.length - 1
                  : null;
      if (n === null) return;
      e.preventDefault();
      let r = s[(n + s.length) % s.length];
      (G(r.id), requestAnimationFrame(() => H.current?.querySelector(`[aria-checked="true"]`)?.focus()));
    },
    q = N ? L.find((e) => e.key === N) : void 0,
    J = (e) => ((F[e] ?? 0) / I) * 100,
    Y = _ !== void 0 && Number.isFinite(_),
    X = (_ ?? 0) >= 0;
  return (0, r.jsxs)(`div`, {
    className: [`ui-cb`, x].filter(Boolean).join(` `),
    role: `group`,
    "aria-labelledby": `${S}-title`,
    children: [
      (0, r.jsx)(`style`, { href: `ui-compact-breakdown`, precedence: `default`, children: m }),
      (0, r.jsxs)(`div`, {
        className: `ui-cb__card`,
        children: [
          (0, r.jsxs)(`header`, {
            className: `ui-cb__head`,
            children: [
              (0, r.jsx)(`h3`, {
                id: `${S}-title`,
                className: `ui-cb__title`,
                title: e,
                dir: `auto`,
                children: e,
              }),
              s &&
                s.length > 1 &&
                (0, r.jsxs)(`div`, {
                  ref: H,
                  className: `ui-cb__switch`,
                  role: `radiogroup`,
                  "aria-label": `Period`,
                  onKeyDown: K,
                  children: [
                    (0, r.jsx)(`span`, { ref: U, className: `ui-cb__pill`, "aria-hidden": `true` }),
                    s.map((e) =>
                      (0, r.jsx)(
                        `button`,
                        {
                          type: `button`,
                          role: `radio`,
                          "aria-checked": e.id === T,
                          tabIndex: e.id === T ? 0 : -1,
                          className: `ui-cb__option`,
                          title: e.label,
                          onClick: () => G(e.id),
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
            className: `ui-cb__figure`,
            children: [
              (0, r.jsx)(`p`, {
                className: `ui-cb__big`,
                "aria-hidden": `true`,
                children: v(F[`#figure`] ?? 0),
              }),
              Y &&
                !q &&
                (0, r.jsxs)(
                  `span`,
                  {
                    className: `ui-cb__delta`,
                    "data-up": X || void 0,
                    children: [
                      (0, r.jsx)(`svg`, {
                        viewBox: `0 0 12 12`,
                        "aria-hidden": `true`,
                        children: (0, r.jsx)(`path`, {
                          d: X ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2`,
                        }),
                      }),
                      Math.abs(_ ?? 0).toLocaleString(`en-US`, { maximumFractionDigits: 1 }),
                      `%`,
                    ],
                  },
                  `${T}-${_}`,
                ),
            ],
          }),
          (0, r.jsx)(`p`, {
            className: `ui-cb__caption`,
            "aria-hidden": `true`,
            children: (0, r.jsx)(
              `span`,
              {
                className: `ui-cb__caption-in`,
                children: q
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(`i`, { className: `ui-cb__swatch`, style: { background: q.color } }),
                        (0, r.jsx)(`span`, {
                          className: `ui-cb__caption-label`,
                          dir: `auto`,
                          children: q.label,
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-cb__caption-share`,
                          children: [`· `, d(J(q.key))],
                        }),
                      ],
                    })
                  : y,
              },
              q?.key ?? `#total`,
            ),
          }),
          (0, r.jsxs)(`p`, {
            className: `ui-cb__sr`,
            children: [
              y,
              `: `,
              v(M),
              Y
                ? `, ${X ? `up` : `down`} ${Math.abs(_ ?? 0).toLocaleString(`en-US`, { maximumFractionDigits: 1 })}% against the previous period`
                : ``,
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-cb__bar`,
            "data-active": N ? `` : void 0,
            "aria-hidden": `true`,
            onPointerLeave: () => D(null),
            children: O.current.map((e) => {
              let t = J(e.key);
              return t > 0.05
                ? (0, r.jsx)(
                    `span`,
                    {
                      className: `ui-cb__seg`,
                      "data-active": e.key === N || void 0,
                      style: { flexGrow: t, background: e.color },
                      onPointerEnter: () => j.has(e.key) && D(e.key),
                    },
                    e.key,
                  )
                : null;
            }),
          }),
          (0, r.jsx)(`ul`, {
            className: `ui-cb__list`,
            "data-active": N ? `` : void 0,
            onPointerLeave: () => D(null),
            children: L.map((e) =>
              (0, r.jsx)(
                `li`,
                {
                  ref: (t) => {
                    t ? B.current.set(e.key, t) : B.current.delete(e.key);
                  },
                  className: `ui-cb__row`,
                  "data-leaving": e.leaving || void 0,
                  children: (0, r.jsxs)(`div`, {
                    className: `ui-cb__item`,
                    tabIndex: e.leaving ? -1 : 0,
                    "data-active": e.key === N || void 0,
                    onPointerEnter: () => !e.leaving && D(e.key),
                    onFocus: () => !e.leaving && D(e.key),
                    onBlur: () => D(null),
                    children: [
                      (0, r.jsx)(`i`, { className: `ui-cb__swatch`, style: { background: e.color } }),
                      (0, r.jsx)(`span`, {
                        className: `ui-cb__label`,
                        title: e.label,
                        dir: `auto`,
                        children: e.label,
                      }),
                      (0, r.jsx)(`span`, { className: `ui-cb__value`, children: v(F[e.key] ?? 0) }),
                      (0, r.jsx)(`span`, { className: `ui-cb__share`, children: d(J(e.key)) }),
                    ],
                  }),
                },
                e.key,
              ),
            ),
          }),
        ],
      }),
      b !== null &&
        (0, r.jsx)(`div`, {
          className: `ui-cb__foot`,
          children:
            b ??
            (z &&
              (0, r.jsxs)(
                `span`,
                {
                  className: `ui-cb__foot-in`,
                  children: [
                    `Largest: `,
                    (0, r.jsx)(`b`, { title: z.label, dir: `auto`, children: z.label }),
                  ],
                },
                z.key,
              )),
        }),
    ],
  });
}
var m = `.ui-cb{--ui-cb-tray: #f0f0f0;--ui-cb-card: #ffffff;--ui-cb-line: #ececec;--ui-cb-ink: #171717;--ui-cb-text: #404040;--ui-cb-muted: #8f8f8f;--ui-cb-well: #f4f4f5;--ui-cb-hover: #f4f4f5;--ui-cb-up: #18794e;--ui-cb-up-bg: rgba(34, 160, 90, 0.1);--ui-cb-down: #b42318;--ui-cb-down-bg: rgba(220, 60, 60, 0.08);--ui-cb-c1: #2f6bff;--ui-cb-c2: #74a0ff;--ui-cb-c3: #b4cbff;--ui-cb-c4: #a8a8ae;--ui-cb-c5: #d4d4d8;--ui-cb-focus: rgba(23, 23, 23, 0.22);--ui-cb-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;grid-template-columns: minmax(0, 1fr);width: 100%;max-width: 360px;padding: 4px;border-radius: 20px;background: var(--ui-cb-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-cb-text);-webkit-font-smoothing: antialiased}.ui-cb *, .ui-cb *::before, .ui-cb *::after{box-sizing: border-box}:where(.ui-cb) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cb) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cb) ul{list-style: none}.ui-cb :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cb-focus);outline-offset: 2px}.ui-cb b{font-weight: 500;color: var(--ui-cb-ink)}.ui-cb__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cb__card{border-radius: 16px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.04);padding: 12px 14px 8px}.ui-cb__head{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 30px}.ui-cb__title{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 20px;color: var(--ui-cb-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cb__switch{position: relative;display: grid;grid-auto-columns: minmax(0, auto);grid-auto-flow: column;flex: 0 1 auto;min-width: 0;padding: 2px;border-radius: 10px;background: var(--ui-cb-well);box-shadow: inset 0 0 0 1px var(--ui-cb-line)}.ui-cb__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 420ms var(--ui-cb-ease), width 420ms var(--ui-cb-ease)}.ui-cb__option{position: relative;z-index: 1;height: 24px;padding: 0 8px;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-cb-muted);white-space: nowrap;transition: color 200ms ease;min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cb__option:hover, .ui-cb__option[aria-checked="true"]{color: var(--ui-cb-ink)}.ui-cb__figure{display: flex;align-items: center;gap: 8px;margin-top: 12px}.ui-cb__big{font-size: 26px;font-weight: 600;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cb-ink);font-variant-numeric: tabular-nums}.ui-cb__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 999px;background: var(--ui-cb-down-bg);color: var(--ui-cb-down);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums;animation: ui-cb-pop 380ms var(--ui-cb-ease) both}.ui-cb__delta[data-up]{background: var(--ui-cb-up-bg);color: var(--ui-cb-up)}.ui-cb__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-cb__caption{height: 18px;overflow: hidden;font-size: 12.5px;line-height: 18px;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__caption-label{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-cb__caption-share{flex: none}.ui-cb__caption-in{display: inline-flex;max-width: 100%;align-items: center;gap: 6px;animation: ui-cb-in 260ms var(--ui-cb-ease) both}.ui-cb__bar{display: flex;gap: 2px;height: 8px;margin-top: 12px;padding: 0;border-radius: 4px}.ui-cb__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 2.5px;transition: opacity 200ms ease, transform 260ms var(--ui-cb-ease)}.ui-cb__seg:first-child{border-radius: 4px 2.5px 2.5px 4px}.ui-cb__seg:last-child{border-radius: 2.5px 4px 4px 2.5px}.ui-cb__bar[data-active] .ui-cb__seg:not([data-active]){opacity: 0.25}.ui-cb__seg[data-active]{transform: scaleY(1.5)}.ui-cb__list{position: relative;display: grid;margin-top: 8px}.ui-cb__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cb-ease), opacity 200ms ease}.ui-cb__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cb__item{display: flex;align-items: center;gap: 9px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;cursor: default;transition: background-color 160ms ease, opacity 200ms ease}.ui-cb__item[data-active]{background: var(--ui-cb-hover)}.ui-cb__list[data-active] .ui-cb__item:not([data-active]){opacity: 0.45}.ui-cb__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-cb__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cb-text);white-space: nowrap;text-overflow: ellipsis}.ui-cb__value{flex: none;white-space: nowrap;color: var(--ui-cb-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cb__share{flex: none;width: 34px;white-space: nowrap;text-align: right;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__foot{display: flex;align-items: center;min-height: 34px;padding: 4px 10px 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cb-muted);white-space: nowrap}.ui-cb__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cb-in 320ms var(--ui-cb-ease) both}@keyframes ui-cb-in{from{opacity: 0;transform: translateY(5px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cb-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 250px){.ui-cb__share{display: none}.ui-cb__option{padding: 0 6px}}@media (hover: none) and (pointer: coarse){.ui-cb__option{height: 32px;padding: 0 10px}.ui-cb__item{height: 36px}}@media (prefers-reduced-motion: reduce){.ui-cb *, .ui-cb *::before, .ui-cb *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cb{--ui-cb-tray: #111113;--ui-cb-card: #19191b;--ui-cb-line: #2a2a2e;--ui-cb-ink: #ededed;--ui-cb-text: #c8c8cc;--ui-cb-muted: #8b8b92;--ui-cb-well: #222225;--ui-cb-hover: #222225;--ui-cb-up: #6ee7a8;--ui-cb-up-bg: rgba(110, 231, 168, 0.12);--ui-cb-down: #ff8a80;--ui-cb-down-bg: rgba(255, 138, 128, 0.12);--ui-cb-c1: #5b8cff;--ui-cb-c2: #3d63c9;--ui-cb-c3: #2c4388;--ui-cb-c4: #6b6b73;--ui-cb-c5: #3d3d42;--ui-cb-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-cb__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}`,
  h = [
    { id: `7d`, label: `7d` },
    { id: `30d`, label: `30d` },
    { id: `90d`, label: `90d` },
  ],
  g = {
    "7d": {
      delta: 12.4,
      items: [
        { label: `Direct`, value: 4820 },
        { label: `Organic search`, value: 3910 },
        { label: `Referrals`, value: 2240 },
        { label: `Social`, value: 1680 },
        { label: `Email`, value: 940 },
      ],
    },
    "30d": {
      delta: 8.1,
      items: [
        { label: `Organic search`, value: 18400 },
        { label: `Direct`, value: 16900 },
        { label: `Social`, value: 9800 },
        { label: `Referrals`, value: 7300 },
        { label: `Email`, value: 5200 },
      ],
    },
    "90d": {
      delta: -3.2,
      items: [
        { label: `Organic search`, value: 51200 },
        { label: `Social`, value: 38600 },
        { label: `Direct`, value: 36100 },
        { label: `Email`, value: 21400 },
        { label: `Referrals`, value: 16900 },
      ],
    },
  },
  _ = (e) => `$${Math.round(e).toLocaleString(`en-US`)}`;
function v() {
  let [e, t] = (0, n.useState)(`7d`),
    i = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    let e = window.setInterval(() => {
      i.current || t((e) => h[(h.findIndex((t) => t.id === e) + 1) % h.length].id);
    }, 2800);
    return () => window.clearInterval(e);
  }, []);
  let a = () => (i.current = !0);
  return (0, r.jsx)(`div`, {
    className: `cb-demo`,
    onPointerEnter: a,
    onPointerDownCapture: a,
    onKeyDownCapture: a,
    onFocusCapture: a,
    children: (0, r.jsx)(p, {
      title: `Revenue by channel`,
      periods: h,
      period: e,
      onPeriodChange: t,
      items: g[e].items,
      delta: g[e].delta,
      format: _,
      totalLabel: `Total revenue`,
    }),
  });
}
