import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = 1048576,
  a = (e) => (e.includes(`.`) ? e.split(`.`).pop().toLowerCase() : ``),
  o = 1024 * i,
  s = new Intl.NumberFormat(`en`),
  c = (e) => (Number.isFinite(e) && e > 0 ? e : 0),
  l = (e) => {
    let t = c(e);
    return t < 1024
      ? `${Math.round(t)}\u00a0B`
      : t < i
        ? `${s.format(Math.round(t / 1024))}\u00a0KB`
        : t < o
          ? `${(t / i).toFixed(+(t < 10 * i))}\u00a0MB`
          : `${s.format(Number((t / o).toFixed(1)))}\u00a0GB`;
  },
  u = (e, t) => {
    let n = c(t),
      r = Math.min(c(e), n);
    return n < 1024
      ? `${Math.round(r)} of ${l(n)}`
      : n < i
        ? `${s.format(Math.round(r / 1024))} of ${l(n)}`
        : n < o
          ? `${(r / i).toFixed(1)} of ${l(n)}`
          : `${(r / o).toFixed(1)} of ${l(n)}`;
  },
  d = (e) =>
    Number.isFinite(e)
      ? e < 1
        ? `almost done`
        : e < 60
          ? `${Math.ceil(e)}s left`
          : e < 3600
            ? `${Math.ceil(e / 60)} min left`
            : e < 86400
              ? `${Math.ceil(e / 3600)} h left`
              : `${Math.ceil(e / 86400)} d left`
      : `starting`,
  f = (e) => (Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0),
  p = (e) => (e.length > 24 && !/[\u0590-\u08ff]/.test(e) ? [e.slice(0, -14), e.slice(-14)] : null),
  m = [
    { exts: [`pdf`], color: `#e5484d` },
    { exts: [`xls`, `xlsx`, `csv`, `numbers`], color: `#2f9e5b` },
    { exts: [`doc`, `docx`, `txt`, `md`, `pages`, `rtf`], color: `#2f6bff` },
    { exts: [`png`, `jpg`, `jpeg`, `gif`, `webp`, `svg`, `heic`, `avif`], color: `#8b5cf6` },
    { exts: [`mp4`, `mov`, `webm`, `mp3`, `wav`], color: `#f08c00` },
    { exts: [`ppt`, `pptx`, `key`], color: `#e8590c` },
  ],
  h = (e) => m.find((t) => t.exts.includes(a(e)))?.color ?? `#8f8f8f`,
  g = (e) => Math.min(9e3, Math.max(2600, (e / (1.2 * i)) * 1e3)),
  _ = 0,
  v = () => `f${Date.now().toString(36)}${(_++).toString(36)}`,
  y = ({ d: e, className: t }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      className: [`ui-dz__glyph`, t].filter(Boolean).join(` `),
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  b = {
    upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
    close: `M7 7l10 10M17 7 7 17`,
    check: `M5.5 12.5l4 4L18.5 8`,
    retry: `M20 12a8 8 0 1 1-2.34-5.66L20 8.5M20 4v4.5h-4.5`,
    alert: `M12 8v5M12 16.5h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z`,
  };
function x({ name: e, end: t }) {
  let n = (a(e) || `file`).slice(0, 4).toUpperCase(),
    i = Math.max(18, n.length * 5.4 + 8),
    o = t ? 30 - i : 0;
  return (0, r.jsxs)(`svg`, {
    viewBox: `0 0 30 36`,
    className: `ui-dz__badge`,
    "aria-hidden": `true`,
    children: [
      (0, r.jsx)(`path`, {
        d: `M5 1h14l10 10v20a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z`,
        className: `ui-dz__badge-sheet`,
      }),
      (0, r.jsx)(`path`, { d: `M19 1v6a4 4 0 0 0 4 4h6`, className: `ui-dz__badge-fold` }),
      (0, r.jsx)(`rect`, { x: o, y: `19`, width: i, height: `11`, rx: `3`, fill: h(e), fillOpacity: `0.14` }),
      (0, r.jsx)(`text`, { x: o + 4, y: `27.2`, className: `ui-dz__badge-text`, fill: h(e), children: n }),
    ],
  });
}
function ee() {
  return (0, r.jsxs)(`span`, {
    className: `ui-dz__stack`,
    "aria-hidden": `true`,
    children: [
      (0, r.jsx)(`span`, {
        className: `ui-dz__sheet ui-dz__sheet-l`,
        children: (0, r.jsx)(x, { name: `file.pdf` }),
      }),
      (0, r.jsx)(`span`, {
        className: `ui-dz__sheet ui-dz__sheet-r`,
        children: (0, r.jsx)(x, { name: `file.png`, end: !0 }),
      }),
      (0, r.jsx)(`span`, {
        className: `ui-dz__sheet ui-dz__sheet-m`,
        children: (0, r.jsx)(y, { d: b.upload }),
      }),
    ],
  });
}
var S = [
  { name: `Q3-Board-Report.pdf`, size: 4.2 * i },
  { name: `Hero-Shot.png`, size: 2.6 * i },
  { name: `Budget-2027.xlsx`, size: 1.3 * i, failAt: 0.62 },
  { name: `Product-Demo.mp4`, size: 48 * i },
];
function C({
  accept: e,
  maxSize: t = 25 * i,
  onUpload: o,
  onChange: m,
  hint: h,
  autoplay: _ = !1,
  className: C,
}) {
  let [T, E] = (0, n.useState)([]),
    [D, O] = (0, n.useState)(0),
    [te, k] = (0, n.useState)(``),
    [, ne] = (0, n.useState)(0),
    A = (0, n.useRef)(null),
    j = (0, n.useRef)(null),
    M = (0, n.useRef)(null),
    N = (0, n.useRef)(0),
    P = (0, n.useRef)(T);
  P.current = T;
  let F = (0, n.useId)(),
    I = e?.map((e) => e.replace(/^\./, ``).toLowerCase()),
    L = I?.length
      ? I.length <= 3
        ? I.map((e) => e.toUpperCase()).join(`, `)
        : `${I.slice(0, 3)
            .map((e) => e.toUpperCase())
            .join(`, `)} and more`
      : `Any file`,
    R = Number.isFinite(t) && t > 0 ? t : 1 / 0,
    z = h ?? (R < 1 / 0 ? `${L} · up to ${l(R)} each` : L);
  ((0, n.useEffect)(() => {
    m?.(
      T.filter((e) => !e.removing).map(
        ({ id: e, name: t, size: n, status: r, progress: i, error: a, file: o }) => ({
          id: e,
          name: t,
          size: n,
          status: r,
          progress: i,
          error: a,
          file: o,
        }),
      ),
    );
  }, [T]),
    (0, n.useLayoutEffect)(() => {
      let e = j.current,
        t = M.current;
      if (!e || !t) return;
      let n = () => (e.style.height = `${t.offsetHeight}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, []));
  let B = (e, t) => E((n) => n.map((n) => (n.id === e ? { ...n, ...t } : n))),
    V = (e) => {
      let t = v(),
        n;
      I?.length && !I.includes(a(e.name))
        ? (n = a(e.name) ? `.${a(e.name)} files aren't supported` : `This file type isn't supported`)
        : e.size > R && (n = `Too large – max ${l(R)}`);
      let r = {
        id: t,
        name: e.name,
        size: c(e.size),
        file: e.file,
        status: n ? `error` : `uploading`,
        progress: 0,
        error: n,
        failAt: e.failAt,
        startedAt: performance.now(),
        duration: g(c(e.size)),
      };
      (E((e) => [...e, r]), n ? k(`${e.name}: ${n}`) : o && e.file && H(r));
    },
    H = (e) => {
      o(e.file, (t) =>
        E((n) =>
          n.map((n) =>
            n.id === e.id && n.status === `uploading` ? { ...n, progress: Math.max(n.progress, f(t)) } : n,
          ),
        ),
      )
        .then(() => {
          (B(e.id, { status: `done`, progress: 1 }), k(`${e.name} uploaded`));
        })
        .catch((t) => {
          let n = t instanceof Error && t.message ? t.message : `Upload failed`;
          (B(e.id, { status: `error`, error: n, retryable: !0 }), k(`${e.name}: ${n}`));
        });
    },
    U = (e) => Array.from(e).forEach((e) => V({ name: e.name, size: e.size, file: e })),
    W = T.some((e) => e.status === `uploading` && (!o || !e.file));
  ((0, n.useEffect)(() => {
    if (!W) return;
    let e = window.setInterval(() => {
      let e = performance.now();
      E((t) =>
        t.map((t) => {
          if (t.status !== `uploading` || (o && t.file)) return t;
          let n = Math.min(1, (e - t.startedAt) / t.duration),
            r = Math.max(t.progress, n < 1 ? n * (0.92 + Math.random() * 0.08) : 1);
          return t.failAt !== void 0 && r >= t.failAt
            ? (k(`${t.name}: upload failed`),
              { ...t, progress: t.failAt, status: `error`, error: `Connection lost`, retryable: !0 })
            : r >= 1
              ? (k(`${t.name} uploaded`), { ...t, progress: 1, status: `done` })
              : { ...t, progress: r };
        }),
      );
    }, 90);
    return () => clearInterval(e);
  }, [W, o]),
    (0, n.useEffect)(() => {
      if (!T.some((e) => e.status === `uploading`)) return;
      let e = window.setInterval(() => ne((e) => e + 1), 500);
      return () => clearInterval(e);
    }, [T]),
    (0, n.useEffect)(() => {
      if (!_) return;
      let e = [
        window.setTimeout(() => O(S.length), 700),
        window.setTimeout(() => {
          (O(0), S.forEach((e, t) => window.setTimeout(() => V(e), t * 140)));
        }, 1900),
      ];
      return () => e.forEach(clearTimeout);
    }, [_]));
  let G = (e) => {
      (B(e.id, {
        status: `uploading`,
        progress: 0,
        error: void 0,
        retryable: !1,
        failAt: void 0,
        startedAt: performance.now(),
      }),
        o && e.file && H({ ...e, progress: 0 }));
    },
    K = (e) => {
      (B(e, { removing: !0 }), window.setTimeout(() => E((t) => t.filter((t) => t.id !== e)), 480));
    },
    q = () => P.current.filter((e) => e.status !== `uploading`).forEach((e) => K(e.id)),
    J = (e) => Array.from(e.dataTransfer.types).includes(`Files`),
    re = (e) => {
      J(e) && (e.preventDefault(), (N.current += 1), O(Math.max(1, e.dataTransfer.items.length)));
    },
    ie = (e) => {
      J(e) && (e.preventDefault(), (e.dataTransfer.dropEffect = `copy`));
    },
    ae = () => {
      ((N.current = Math.max(0, N.current - 1)), N.current || O(0));
    },
    oe = (e) => {
      J(e) && (e.preventDefault(), (N.current = 0), O(0), U(e.dataTransfer.files));
    },
    Y = T.filter((e) => !e.removing),
    X = Y.filter((e) => e.status === `uploading`),
    Z = Y.filter((e) => e.status === `done`),
    Q = Y.filter((e) => e.status === `error`),
    se = performance.now(),
    $ = null;
  if (Y.length) {
    if (X.length) {
      let e = X.reduce((e, t) => e + t.size, 0),
        t = X.reduce((e, t) => e + t.size * t.progress, 0);
      $ = (0, r.jsxs)(`span`, {
        children: [`Uploading `, s.format(X.length), ` of `, s.format(Y.length), ` · `, u(t, e)],
      });
    } else
      $ = (0, r.jsxs)(`span`, {
        className: `ui-dz__summary-done`,
        children: [
          Q.length
            ? (0, r.jsx)(y, { d: b.alert, className: `ui-dz__warn` })
            : (0, r.jsx)(y, { d: b.check, className: `ui-dz__ok` }),
          Q.length
            ? `${s.format(Z.length)} of ${s.format(Y.length)} uploaded`
            : `${s.format(Z.length)} ${Z.length === 1 ? `file` : `files`} uploaded`,
        ],
      });
  }
  return (0, r.jsxs)(`div`, {
    className: [`ui-dz`, C].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-dropzone`, precedence: `default`, children: w }),
      (0, r.jsx)(`div`, {
        ref: j,
        className: `ui-dz__card`,
        children: (0, r.jsxs)(`div`, {
          ref: M,
          className: `ui-dz__inner`,
          children: [
            (0, r.jsx)(`input`, {
              ref: A,
              id: F,
              type: `file`,
              multiple: !0,
              accept: e?.join(`,`),
              className: `ui-dz__input`,
              tabIndex: -1,
              onChange: (e) => {
                (e.target.files && U(e.target.files), (e.target.value = ``));
              },
            }),
            (0, r.jsxs)(`button`, {
              type: `button`,
              className: `ui-dz__area`,
              "data-dragging": D > 0 || void 0,
              "aria-describedby": `${F}-hint`,
              onClick: () => A.current?.click(),
              onDragEnter: re,
              onDragOver: ie,
              onDragLeave: ae,
              onDrop: oe,
              children: [
                (0, r.jsx)(ee, {}),
                (0, r.jsx)(
                  `span`,
                  {
                    className: `ui-dz__title`,
                    children: D
                      ? `Release to upload ${D === 1 ? `1 file` : `${s.format(D)} files`}`
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)(`span`, {
                              className: `ui-dz__for-mouse`,
                              children: [
                                `Drop files here or `,
                                (0, r.jsx)(`span`, { className: `ui-dz__browse`, children: `browse` }),
                              ],
                            }),
                            (0, r.jsxs)(`span`, {
                              className: `ui-dz__for-touch`,
                              children: [
                                `Tap to `,
                                (0, r.jsx)(`span`, { className: `ui-dz__browse`, children: `choose files` }),
                              ],
                            }),
                          ],
                        }),
                  },
                  D ? `drop` : `idle`,
                ),
                (0, r.jsx)(`span`, { className: `ui-dz__hint`, id: `${F}-hint`, children: z }),
              ],
            }),
            (0, r.jsx)(`ul`, {
              className: `ui-dz__list`,
              "aria-label": `Uploads`,
              children: T.map((e) => {
                let t =
                  e.status === `uploading`
                    ? ((1 - e.progress) * (se - e.startedAt)) / Math.max(0.05, e.progress) / 1e3
                    : 0;
                return (0, r.jsx)(
                  `li`,
                  {
                    className: `ui-dz__row`,
                    "data-status": e.status,
                    "data-removing": e.removing || void 0,
                    children: (0, r.jsxs)(`div`, {
                      className: `ui-dz__row-inner`,
                      children: [
                        (0, r.jsx)(x, { name: e.name }),
                        (0, r.jsxs)(`div`, {
                          className: `ui-dz__info`,
                          children: [
                            (0, r.jsxs)(`div`, {
                              className: `ui-dz__line`,
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-dz__name`,
                                  title: e.name,
                                  dir: `auto`,
                                  children: p(e.name)
                                    ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)(`span`, {
                                            className: `ui-dz__name-head`,
                                            children: p(e.name)[0],
                                          }),
                                          (0, r.jsx)(`span`, {
                                            className: `ui-dz__name-tail`,
                                            children: p(e.name)[1],
                                          }),
                                        ],
                                      })
                                    : e.name,
                                }),
                                e.status === `done` &&
                                  (0, r.jsx)(`span`, {
                                    className: `ui-dz__done`,
                                    "aria-label": `Uploaded`,
                                    children: (0, r.jsx)(y, { d: b.check }),
                                  }),
                              ],
                            }),
                            (0, r.jsxs)(
                              `div`,
                              {
                                className: `ui-dz__meta`,
                                children: [
                                  e.status === `uploading` &&
                                    (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        u(e.size * e.progress, e.size),
                                        (0, r.jsx)(`span`, { className: `ui-dz__dot`, children: `·` }),
                                        e.progress < 0.04 ? `starting` : d(t),
                                      ],
                                    }),
                                  e.status === `done` && l(e.size),
                                  e.status === `error` &&
                                    (0, r.jsx)(`span`, {
                                      className: `ui-dz__error`,
                                      dir: `auto`,
                                      children: e.error,
                                    }),
                                ],
                              },
                              e.status,
                            ),
                            (e.status !== `error` || e.retryable) &&
                              (0, r.jsx)(`div`, {
                                className: `ui-dz__bar`,
                                "data-hidden": e.status === `done` || void 0,
                                role: `progressbar`,
                                "aria-label": `${e.name} upload`,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Math.round(e.progress * 100),
                                children: (0, r.jsx)(`span`, {
                                  style: { transform: `scaleX(${e.progress})` },
                                }),
                              }),
                          ],
                        }),
                        (0, r.jsxs)(`div`, {
                          className: `ui-dz__actions`,
                          children: [
                            e.status === `error` &&
                              e.retryable &&
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                className: `ui-dz__icon-btn`,
                                "aria-label": `Retry ${e.name}`,
                                onClick: () => G(e),
                                children: (0, r.jsx)(y, { d: b.retry }),
                              }),
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-dz__icon-btn`,
                              "aria-label": `Remove ${e.name}`,
                              onClick: () => K(e.id),
                              children: (0, r.jsx)(y, { d: b.close }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.id,
                );
              }),
            }),
          ],
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-dz__foot`,
        children: [
          $ ?? (0, r.jsx)(`span`, { className: `ui-dz__foot-idle`, children: `No files yet` }),
          (Z.length > 0 || Q.length > 0) &&
            !X.length &&
            (0, r.jsx)(`button`, {
              type: `button`,
              className: `ui-dz__clear`,
              onClick: q,
              children: `Clear`,
            }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-dz__live`, "aria-live": `polite`, children: te }),
    ],
  });
}
var w = `.ui-dz{--ui-dz-tray: #f0f0f0;--ui-dz-card: #ffffff;--ui-dz-line: #ececec;--ui-dz-ink: #171717;--ui-dz-text: #404040;--ui-dz-muted: #8f8f8f;--ui-dz-faint: #b5b5b5;--ui-dz-area: #fafafa;--ui-dz-dash: #d9d9dc;--ui-dz-hover: #e6e6e7;--ui-dz-track: #efeff1;--ui-dz-flash: #e9e9ec;--ui-dz-accent: #2f6bff;--ui-dz-accent-soft: rgba(47, 107, 255, 0.06);--ui-dz-danger: #e5484d;--ui-dz-sheet: #ffffff;--ui-dz-focus: rgba(23, 23, 23, 0.22);--ui-dz-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-dz-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-dz-text);-webkit-font-smoothing: antialiased}.ui-dz *, .ui-dz *::before, .ui-dz *::after{box-sizing: border-box}:where(.ui-dz) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dz) svg{display: block;flex: none}.ui-dz button:focus-visible{outline: 2px solid var(--ui-dz-focus);outline-offset: 2px}.ui-dz__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-dz__card{overflow: hidden;border-radius: 16px;transition: height 360ms var(--ui-dz-ease);background: var(--ui-dz-card);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-dz__inner{display: flow-root;padding: 6px}.ui-dz__input{position: absolute;width: 1px;height: 1px;opacity: 0;pointer-events: none}.ui-dz__area{position: relative;display: grid;justify-items: center;width: 100%;padding: 26px 20px 22px;border-radius: 12px;background: var(--ui-dz-area);text-align: center;transition: background-color 220ms ease, box-shadow 220ms ease}.ui-dz__area::before{content: "";position: absolute;inset: 0;border: 1.5px dashed var(--ui-dz-dash);border-radius: inherit;transition: border-color 220ms ease;pointer-events: none}.ui-dz__area:hover::before{border-color: var(--ui-dz-faint)}.ui-dz__area[data-dragging]{background: var(--ui-dz-accent-soft)}.ui-dz__area[data-dragging]::before{border-style: solid;border-color: var(--ui-dz-accent)}.ui-dz__area:focus-visible{outline-offset: 3px}.ui-dz__stack{position: relative;width: 64px;height: 50px;margin-bottom: 12px}.ui-dz__sheet{position: absolute;left: 50%;bottom: 0;width: 34px;height: 42px;margin-left: -17px;border-radius: 7px;background: var(--ui-dz-sheet);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 2px 6px rgba(0, 0, 0, 0.06);transition: transform 420ms var(--ui-dz-ease)}.ui-dz__sheet-l, .ui-dz__sheet-r{background: none;box-shadow: none;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))}.ui-dz__sheet .ui-dz__badge{width: 100%;height: 100%}.ui-dz__sheet-l{transform: translate(-9px, 2px) rotate(-10deg)}.ui-dz__sheet-r{transform: translate(9px, 2px) rotate(10deg)}.ui-dz__sheet-m{display: grid;place-items: center;transform: translateY(-2px)}.ui-dz__sheet-m .ui-dz__glyph{width: 18px;height: 18px;color: var(--ui-dz-ink);transition: transform 420ms var(--ui-dz-ease), color 220ms ease}.ui-dz__area:hover .ui-dz__sheet-m{transform: translateY(-4px)}.ui-dz__area[data-dragging] .ui-dz__sheet-l{transform: translate(-30px, 0) rotate(-16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-r{transform: translate(30px, 0) rotate(16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-m{transform: translateY(-9px) scale(1.06)}.ui-dz__area[data-dragging] .ui-dz__sheet-m .ui-dz__glyph{color: var(--ui-dz-accent);animation: ui-dz-bob 900ms ease-in-out infinite}.ui-dz__title{font-size: 14.5px;font-weight: 500;color: var(--ui-dz-ink);animation: ui-dz-in 260ms var(--ui-dz-ease) both}.ui-dz__browse{color: var(--ui-dz-accent)}.ui-dz__hint{margin-top: 3px;font-size: 12.5px;color: var(--ui-dz-muted);overflow-wrap: anywhere}.ui-dz__list{display: grid;margin: 0;padding: 0;list-style: none}.ui-dz__list{max-height: 360px;overflow-y: auto;overscroll-behavior: contain}.ui-dz__row{display: grid;grid-template-rows: 1fr;animation: ui-dz-grow 420ms var(--ui-dz-ease) both;transition: grid-template-rows 260ms var(--ui-dz-ease), opacity 200ms ease}.ui-dz__row[data-removing]{grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-dz-ease) 200ms, opacity 220ms ease 180ms}.ui-dz__row-inner{position: relative;isolation: isolate;display: flex;align-items: center;gap: 12px;min-height: 0;overflow: hidden;padding: 10px 6px 10px 10px}.ui-dz__row-inner::before{content: "";position: absolute;inset: 3px 0;border-radius: 10px;background: var(--ui-dz-flash);opacity: 0;pointer-events: none;z-index: -1}.ui-dz__row[data-removing] .ui-dz__row-inner::before{animation: ui-dz-flash 280ms ease-out both}.ui-dz__row[data-removing]{pointer-events: none}.ui-dz__row[data-removing] .ui-dz__icon-btn{background: none}.ui-dz__row:first-child .ui-dz__row-inner{margin-top: 6px}.ui-dz__row + .ui-dz__row .ui-dz__row-inner{border-top: 1px solid var(--ui-dz-line)}.ui-dz__badge{width: 28px;height: 34px}.ui-dz__badge-sheet{fill: var(--ui-dz-sheet);stroke: var(--ui-dz-dash);stroke-width: 1.2}.ui-dz__badge-fold{fill: none;stroke: var(--ui-dz-dash);stroke-width: 1.2;stroke-linejoin: round}.ui-dz__badge-text{font-family: inherit;font-size: 7px;font-weight: 700;letter-spacing: 0.03em}.ui-dz__info{flex: 1;min-width: 0}.ui-dz__line{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-dz__name{overflow: hidden;color: var(--ui-dz-ink);font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-dz__name:has(> .ui-dz__name-head){display: flex;min-width: 0}.ui-dz__name-head{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-dz__name-tail{flex: none;white-space: pre}.ui-dz__done{display: grid;place-items: center;flex: none;color: var(--ui-dz-muted);animation: ui-dz-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-dz__done .ui-dz__glyph{width: 14px;height: 14px;stroke-width: 2.2}.ui-dz__meta{margin-top: 1px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted);animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__dot{margin: 0 5px;color: var(--ui-dz-faint)}.ui-dz__error{color: var(--ui-dz-danger);overflow-wrap: anywhere}.ui-dz__row[data-status="error"] .ui-dz__row-inner{animation: ui-dz-shake 380ms ease both}.ui-dz__bar{position: relative;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-dz-track);transition: height 320ms var(--ui-dz-ease) 250ms, margin-top 320ms var(--ui-dz-ease) 250ms, opacity 200ms ease 200ms}.ui-dz__bar[data-hidden]{height: 0;margin-top: 0;opacity: 0}.ui-dz__bar > span{position: absolute;inset: 0;border-radius: inherit;background: var(--ui-dz-ink);transform-origin: left;transition: transform 200ms linear, background-color 200ms ease}.ui-dz__row[data-status="error"] .ui-dz__bar > span{background: var(--ui-dz-danger)}.ui-dz__actions{display: flex;flex: none;gap: 2px}.ui-dz__icon-btn{display: grid;place-items: center;width: 30px;height: 30px;border-radius: 8px;color: var(--ui-dz-muted);transition: background-color 160ms ease, color 160ms ease}.ui-dz__icon-btn:hover{background: var(--ui-dz-track);color: var(--ui-dz-ink)}.ui-dz__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 40px;padding: 0 8px 0 12px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted)}.ui-dz__foot > span{animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__summary-done{display: inline-flex;align-items: center;gap: 6px;color: var(--ui-dz-ink)}.ui-dz__ok{width: 14px;height: 14px;stroke: var(--ui-dz-muted);stroke-width: 2.2}.ui-dz__warn{width: 14px;height: 14px;stroke: var(--ui-dz-muted)}.ui-dz__clear{height: 28px;padding: 0 10px;border-radius: 8px;font-size: 12.5px;color: var(--ui-dz-text);transition: background-color 160ms ease;animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__clear:hover{background: var(--ui-dz-hover)}.ui-dz__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-dz-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-dz-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-dz-pop{0%{transform: scale(0.4)}60%{transform: scale(1.15)}100%{transform: scale(1)}}@keyframes ui-dz-bob{50%{transform: translateY(-3px)}}@keyframes ui-dz-flash{0%{opacity: 0}35%{opacity: 1}100%{opacity: 0}}@keyframes ui-dz-shake{20%, 60%{transform: translateX(-3px)}40%, 80%{transform: translateX(3px)}}@container (max-width: 420px){.ui-dz__area{padding: 22px 16px 18px}.ui-dz__title{font-size: 14px}}.ui-dz__for-touch{display: none}@media (hover: none) and (pointer: coarse){.ui-dz__for-mouse{display: none}.ui-dz__for-touch{display: inline}.ui-dz__icon-btn{width: 40px;height: 40px;border-radius: 10px}.ui-dz__actions{margin-right: -4px}.ui-dz__clear{height: 36px;padding: 0 12px}}@media (prefers-reduced-motion: reduce){.ui-dz *, .ui-dz *::before, .ui-dz *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-dz{--ui-dz-tray: #111113;--ui-dz-card: #19191b;--ui-dz-line: #2a2a2e;--ui-dz-ink: #ededed;--ui-dz-text: #c8c8cc;--ui-dz-muted: #8b8b92;--ui-dz-faint: #5c5c63;--ui-dz-area: #1d1d20;--ui-dz-dash: #38383d;--ui-dz-hover: #222225;--ui-dz-track: #2a2a2e;--ui-dz-flash: #2e2e33;--ui-dz-accent: #6d8bff;--ui-dz-accent-soft: rgba(109, 139, 255, 0.08);--ui-dz-danger: #ff6369;--ui-dz-sheet: #26262a;--ui-dz-focus: rgba(255, 255, 255, 0.3)}`;
function T() {
  return (0, r.jsx)(`div`, {
    className: `dropzone-demo`,
    children: (0, r.jsx)(C, { accept: [`.pdf`, `.png`, `.jpg`, `.xlsx`, `.docx`, `.mp4`], autoplay: !0 }),
  });
}
