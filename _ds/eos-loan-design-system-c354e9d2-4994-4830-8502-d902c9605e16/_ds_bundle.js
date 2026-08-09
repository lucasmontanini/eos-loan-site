/* @ds-bundle: {"format":4,"namespace":"EosLoanDesignSystem_c354e9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"EosLogo","sourcePath":"components/brand/EosLogo.jsx"},{"name":"SolRasgado","sourcePath":"components/brand/SolRasgado.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"04d50c49329e","components/actions/IconButton.jsx":"2fb6143c2125","components/brand/EosLogo.jsx":"f44476422fd4","components/brand/SolRasgado.jsx":"cba2c9c640cb","components/display/Badge.jsx":"8dca3ec76597","components/display/Card.jsx":"b7a036b06ac6","components/display/Stat.jsx":"654449fe200a","components/feedback/Dialog.jsx":"a8bc80ee7f70","components/feedback/Toast.jsx":"f7a1aeaca731","components/feedback/Tooltip.jsx":"8d78afb48fee","components/forms/Checkbox.jsx":"7264f6d525b8","components/forms/Input.jsx":"79f2d0f575aa","components/forms/Radio.jsx":"0104993d5db6","components/forms/Select.jsx":"70293c3d665e","components/forms/Switch.jsx":"d40197eecb32","components/navigation/Tabs.jsx":"38e38ad2256e","ui_kits/app/Dashboard.jsx":"294ce6b38ccd","ui_kits/app/Login.jsx":"dee9241a09cd","ui_kits/website/Sections.jsx":"046a14e78e97","ui_kits/website/Site.jsx":"07e84ceccc7d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EosLoanDesignSystem_c354e9 = window.EosLoanDesignSystem_c354e9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid transparent;border-radius:var(--radius-control);font-family:var(--font-ui);font-weight:800;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background-color .15s ease,border-color .15s ease,color .15s ease;-webkit-font-smoothing:antialiased}
.eos-btn:hover{text-decoration:none}
.eos-btn:active:not(:disabled){transform:translateY(1px)}
.eos-btn:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.eos-btn:disabled{opacity:.45;cursor:default}
.eos-btn--md{height:var(--control-h);padding:0 22px;font-size:15px}
.eos-btn--sm{height:var(--control-h-sm);padding:0 16px;font-size:13.5px}
.eos-btn--lg{height:var(--control-h-lg);padding:0 30px;font-size:16px}
.eos-btn--primary{background:var(--accent);color:var(--on-accent)}
.eos-btn--primary:hover:not(:disabled){background:var(--accent-hover);color:var(--on-accent)}
.eos-btn--secondary{background:var(--eos-charcoal);color:var(--eos-bone)}
.eos-btn--secondary:hover:not(:disabled){background:var(--eos-charcoal-hover);color:var(--eos-bone)}
.eos-btn--ghost{background:transparent;color:var(--text-1);border-color:var(--line-strong)}
.eos-btn--ghost:hover:not(:disabled){background:rgba(23,18,14,.05);color:var(--text-1)}
.eos-btn--ghost.eos-on-dark{color:var(--eos-bone);border-color:var(--line-inverse)}
.eos-btn--ghost.eos-on-dark:hover:not(:disabled){background:rgba(247,242,234,.08);color:var(--eos-bone)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-button")) {
  const s = document.createElement("style");
  s.id = "eos-css-button";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Weight 800 always. Ember = primary action, Charcoal = secondary, ghost with border = tertiary. */
function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  href,
  children,
  ...rest
}) {
  const cls = "eos-btn eos-btn--" + variant + " eos-btn--" + size + (onDark ? " eos-on-dark" : "");
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-iconbtn{display:inline-grid;place-items:center;border:1px solid transparent;border-radius:var(--radius-control);background:transparent;cursor:pointer;color:var(--text-1);transition:background-color .15s ease,border-color .15s ease}
.eos-iconbtn:active:not(:disabled){transform:translateY(1px)}
.eos-iconbtn:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.eos-iconbtn:disabled{opacity:.45;cursor:default}
.eos-iconbtn--md{width:var(--control-h);height:var(--control-h)}
.eos-iconbtn--sm{width:var(--control-h-sm);height:var(--control-h-sm)}
.eos-iconbtn--ghost{border-color:var(--line-strong)}
.eos-iconbtn--ghost:hover:not(:disabled){background:rgba(23,18,14,.05)}
.eos-iconbtn--plain:hover:not(:disabled){background:rgba(23,18,14,.05)}
.eos-iconbtn--primary{background:var(--accent);color:var(--on-accent)}
.eos-iconbtn--primary:hover:not(:disabled){background:var(--accent-hover)}
.eos-iconbtn--secondary{background:var(--eos-charcoal);color:var(--eos-bone)}
.eos-iconbtn--secondary:hover:not(:disabled){background:var(--eos-charcoal-hover)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-iconbutton")) {
  const s = document.createElement("style");
  s.id = "eos-css-iconbutton";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Square control for a single glyph. Pass the glyph as children and always give a label. */
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: "eos-iconbtn eos-iconbtn--" + variant + " eos-iconbtn--" + size
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/SolRasgado.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NAMED = {
  charcoal: "var(--eos-charcoal)",
  ink: "var(--eos-charcoal)",
  bone: "var(--eos-bone)",
  ember: "var(--eos-ember)"
};
/* Official Sol Rasgado V3 Deslizado. Below 24px auto-switches to the micro cut (channel 14, no slide) per brand rule. Never rotate, mirror, gradient, or outline. */
function SolRasgado({
  size = 32,
  color = "charcoal",
  micro,
  title = "Eos",
  style,
  ...rest
}) {
  const useMicro = micro ?? size < 24;
  const fill = NAMED[color] || color;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    role: "img",
    "aria-label": title,
    style: style
  }, rest), useMicro ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fill: fill,
    d: "M11.9,68.9 A42 42 0 0 1 79.9,19.7 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    d: "M88.1,31.1 A42 42 0 0 1 20.1,80.3 Z"
  })) : /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(4,-2.9)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: fill,
    d: "M13.7,71.4 A42 42 0 0 1 81.7,22.2 Z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-4,2.9)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: fill,
    d: "M86.3,28.6 A42 42 0 0 1 18.3,77.8 Z"
  }))));
}
Object.assign(__ds_scope, { SolRasgado });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SolRasgado.jsx", error: String((e && e.message) || e) }); }

// components/brand/EosLogo.jsx
try { (() => {
/* Writing rule: always "Eos" — capital E, lowercase os. Sign "Eos." keeps the period in Ember; lockup "Eos Loan" has no period, "Loan" runs light. */
function EosLogo({
  variant = "sign",
  size = 32,
  onDark = false,
  style
}) {
  const ink = onDark ? "var(--eos-bone)" : "var(--eos-charcoal)";
  const wm = {
    fontFamily: "var(--font-brand)",
    fontWeight: "var(--wm-weight)",
    fontSize: size,
    letterSpacing: "var(--track-wordmark)",
    lineHeight: 1,
    color: ink,
    whiteSpace: "nowrap"
  };
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--eos-ember)"
    }
  }, ".");
  if (variant === "lockup") return /*#__PURE__*/React.createElement("span", {
    style: {
      ...wm,
      ...style
    }
  }, "Eos ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 300,
      letterSpacing: "-.01em"
    }
  }, "Loan"));
  if (variant === "icon") return /*#__PURE__*/React.createElement(__ds_scope.SolRasgado, {
    size: size,
    color: onDark ? "bone" : "charcoal",
    style: style
  });
  if (variant === "icon-sign") return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.3,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SolRasgado, {
    size: Math.round(size * 1.05),
    color: onDark ? "bone" : "ember"
  }), /*#__PURE__*/React.createElement("span", {
    style: wm
  }, "Eos", dot));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...wm,
      ...style
    }
  }, "Eos", dot);
}
Object.assign(__ds_scope, { EosLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EosLogo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-badge{display:inline-flex;align-items:center;gap:6px;border-radius:var(--radius-pill);padding:5px 12px;font-family:var(--font-ui);font-size:12px;font-weight:800;letter-spacing:.02em;white-space:nowrap}
.eos-badge--tint{background:var(--eos-ember-tint);color:var(--eos-charcoal)}
.eos-badge--outline{background:transparent;border:1px solid var(--line-strong);color:var(--text-1)}
.eos-badge--dark{background:var(--eos-charcoal);color:var(--eos-bone)}
.eos-badge--ember{background:var(--eos-ember);color:var(--on-accent)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-badge")) {
  const s = document.createElement("style");
  s.id = "eos-css-badge";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Pills and chips ride the Ember 12% tint by default. Ember fill only for achievement moments. */
function Badge({
  variant = "tint",
  children,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "eos-badge eos-badge--" + variant + (className ? " " + className : ""),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-card{background:var(--surface-card);border:1px solid var(--line);border-radius:var(--radius-card);box-sizing:border-box}
.eos-card--dark{background:var(--surface-dark);border-color:var(--surface-dark);color:var(--eos-bone)}
.eos-card--tint{background:var(--surface-tint);border-color:var(--surface-tint)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-card")) {
  const s = document.createElement("style");
  s.id = "eos-css-card";
  s.textContent = css;
  document.head.appendChild(s);
}
/* White over Bone, 1px border, radius 18, no shadow — elevation is border + contrast. Dark variant for impact moments. */
function Card({
  variant = "default",
  padding = 24,
  children,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "eos-card" + (variant !== "default" ? " eos-card--" + variant : "") + (className ? " " + className : ""),
    style: {
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
const css = `
.eos-stat{display:flex;flex-direction:column;gap:6px}
.eos-stat__value{font-family:var(--font-display);font-weight:700;line-height:1;letter-spacing:-.01em;color:var(--text-1)}
.eos-stat__label{font-family:var(--font-ui);font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--text-2)}
.eos-stat__detail{font-family:var(--font-mono);font-size:12px;color:var(--text-2)}
.eos-stat--dark .eos-stat__value{color:var(--eos-bone)}
.eos-stat--dark .eos-stat__label,.eos-stat--dark .eos-stat__detail{color:var(--text-2-inverse)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-stat")) {
  const s = document.createElement("style");
  s.id = "eos-css-stat";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Data as protagonist: big numbers set in Inter 700. */
function Stat({
  value,
  label,
  detail,
  size = "md",
  onDark = false,
  accent = false,
  style,
  className
}) {
  const fs = size === "lg" ? 56 : size === "sm" ? 28 : 40;
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-stat" + (onDark ? " eos-stat--dark" : "") + (className ? " " + className : ""),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "eos-stat__value",
    style: {
      fontSize: fs,
      color: accent ? "var(--eos-ember)" : undefined
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "eos-stat__label"
  }, label), detail && /*#__PURE__*/React.createElement("span", {
    className: "eos-stat__detail"
  }, detail));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const css = `
.eos-dialog-overlay{position:fixed;inset:0;background:rgba(23,18,14,.45);display:grid;place-items:center;z-index:1000;padding:24px}
.eos-dialog{background:var(--surface-card);border:1px solid var(--line);border-radius:var(--radius-card);box-shadow:var(--shadow-overlay);padding:28px;box-sizing:border-box;width:100%}
.eos-dialog__title{font-family:var(--font-display);font-weight:600;font-size:24px;letter-spacing:-.01em;line-height:1.15;margin:0}
.eos-dialog__body{margin-top:12px;font-size:15px;color:var(--text-2);line-height:1.6}
.eos-dialog__footer{margin-top:24px;display:flex;gap:10px;justify-content:flex-end}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-dialog")) {
  const s = document.createElement("style");
  s.id = "eos-css-dialog";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Overlay is the one place a shadow is allowed. Pass action Buttons via footer. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-dialog-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eos-dialog",
    role: "dialog",
    "aria-modal": "true",
    style: {
      maxWidth: width
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "eos-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "eos-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "eos-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const css = `
.eos-toast{display:inline-flex;align-items:center;gap:16px;background:var(--eos-charcoal);color:var(--eos-bone);border-radius:var(--radius-control);padding:13px 18px;font-family:var(--font-ui);font-size:14px;font-weight:600;box-shadow:var(--shadow-overlay)}
.eos-toast__action{background:none;border:0;cursor:pointer;color:var(--eos-ember);font-family:var(--font-ui);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:0}
.eos-toast__action:hover{color:var(--eos-ember-tint)}
.eos-toast-region{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1100;display:flex;flex-direction:column;gap:8px;align-items:center}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-toast")) {
  const s = document.createElement("style");
  s.id = "eos-css-toast";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Charcoal slab, bottom-center. Presentational — mount inside <ToastRegion> or place manually. */
function Toast({
  children,
  action,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-toast",
    role: "status",
    style: style
  }, /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "eos-toast__action",
    onClick: onAction
  }, action));
}
function ToastRegion({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-toast-region"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const css = `
.eos-tip{position:relative;display:inline-flex}
.eos-tip__bubble{position:absolute;left:50%;transform:translate(-50%,-4px);bottom:100%;margin-bottom:6px;background:var(--eos-charcoal);color:var(--eos-bone);font-family:var(--font-ui);font-size:12px;font-weight:700;padding:6px 12px;border-radius:var(--radius-pill);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease,transform .15s ease;z-index:900}
.eos-tip:hover .eos-tip__bubble,.eos-tip:focus-within .eos-tip__bubble{opacity:1;transform:translate(-50%,0)}
.eos-tip__bubble--bottom{bottom:auto;top:100%;margin-bottom:0;margin-top:6px;transform:translate(-50%,4px)}
.eos-tip:hover .eos-tip__bubble--bottom,.eos-tip:focus-within .eos-tip__bubble--bottom{transform:translate(-50%,0)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-tooltip")) {
  const s = document.createElement("style");
  s.id = "eos-css-tooltip";
  s.textContent = css;
  document.head.appendChild(s);
}
/* One-line pill tooltip on hover/focus. side: "top" | "bottom". */
function Tooltip({
  label,
  side = "top",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eos-tip",
    style: style
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "eos-tip__bubble" + (side === "bottom" ? " eos-tip__bubble--bottom" : ""),
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-check{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-ui);font-size:15px;font-weight:600;position:relative}
.eos-check input{position:absolute;opacity:0;width:1px;height:1px}
.eos-check .eos-check__box{width:22px;height:22px;border-radius:6px;border:1px solid var(--line-strong);background:var(--surface-card);display:grid;place-items:center;transition:background-color .15s ease,border-color .15s ease;flex:none}
.eos-check .eos-check__box svg{opacity:0;transition:opacity .1s ease}
.eos-check input:checked + .eos-check__box{background:var(--eos-charcoal);border-color:var(--eos-charcoal)}
.eos-check input:checked + .eos-check__box svg{opacity:1}
.eos-check input:focus-visible + .eos-check__box{outline:2px solid var(--focus-ring);outline-offset:2px}
.eos-check input:disabled ~ *{opacity:.45}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-checkbox")) {
  const s = document.createElement("style");
  s.id = "eos-css-checkbox";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Checked state fills with Charcoal (ink) — Ember stays reserved for actions. */
function Checkbox({
  label,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "eos-check" + (className ? " " + className : ""),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eos-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.2L4.4 8.6L11 1.5",
    stroke: "#F7F2EA",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-ui)}
.eos-field__label{font-size:13px;font-weight:700}
.eos-input{height:var(--control-h);border-radius:var(--radius-control);border:1px solid var(--line-strong);background:var(--surface-card);padding:0 14px;font-family:var(--font-ui);font-size:15px;color:var(--text-1);transition:border-color .15s ease;box-sizing:border-box;width:100%}
.eos-input::placeholder{color:var(--text-3)}
.eos-input:focus{outline:none;border-color:var(--eos-charcoal)}
.eos-input:disabled{opacity:.45}
.eos-field--error .eos-input{border-color:var(--eos-ember)}
.eos-field__hint{font-size:12.5px;color:var(--text-2)}
.eos-field__error{font-size:12.5px;color:var(--eos-ember);font-weight:700}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-input")) {
  const s = document.createElement("style");
  s.id = "eos-css-input";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Text field with label / hint / error. Error styling uses Ember (no separate semantic palette exists). */
function Input({
  label,
  hint,
  error,
  id,
  style,
  className,
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-field" + (error ? " eos-field--error" : "") + (className ? " " + className : ""),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "eos-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: "eos-input",
    id: inputId
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "eos-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "eos-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-radio{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-ui);font-size:15px;font-weight:600;position:relative}
.eos-radio input{position:absolute;opacity:0;width:1px;height:1px}
.eos-radio .eos-radio__dot{width:22px;height:22px;border-radius:999px;border:1px solid var(--line-strong);background:var(--surface-card);transition:border .15s ease;flex:none;box-sizing:border-box}
.eos-radio input:checked + .eos-radio__dot{border:7px solid var(--eos-charcoal)}
.eos-radio input:focus-visible + .eos-radio__dot{outline:2px solid var(--focus-ring);outline-offset:2px}
.eos-radio input:disabled ~ *{opacity:.45}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-radio")) {
  const s = document.createElement("style");
  s.id = "eos-css-radio";
  s.textContent = css;
  document.head.appendChild(s);
}
function Radio({
  label,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "eos-radio" + (className ? " " + className : ""),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eos-radio__dot"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-ui)}
.eos-field__label{font-size:13px;font-weight:700}
.eos-select-wrap{position:relative;display:flex;align-items:center}
.eos-select{appearance:none;-webkit-appearance:none;height:var(--control-h);border-radius:var(--radius-control);border:1px solid var(--line-strong);background:var(--surface-card);padding:0 40px 0 14px;font-family:var(--font-ui);font-size:15px;color:var(--text-1);transition:border-color .15s ease;box-sizing:border-box;width:100%;cursor:pointer}
.eos-select:focus{outline:none;border-color:var(--eos-charcoal)}
.eos-select:disabled{opacity:.45}
.eos-select-wrap svg{position:absolute;right:14px;pointer-events:none}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-select")) {
  const s = document.createElement("style");
  s.id = "eos-css-select";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Native select styled to the control system. Pass options as an array of strings or {value,label}, or as <option> children. */
function Select({
  label,
  options,
  id,
  style,
  className,
  children,
  ...rest
}) {
  const auto = React.useId();
  const selId = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: "eos-field" + (className ? " " + className : ""),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "eos-field__label",
    htmlFor: selId
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "eos-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "eos-select",
    id: selId
  }, rest), options ? options.map(o => {
    const v = typeof o === "object" ? o.value : o;
    const l = typeof o === "object" ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }) : children), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.eos-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-ui);font-size:15px;font-weight:600;position:relative}
.eos-switch input{position:absolute;opacity:0;width:1px;height:1px}
.eos-switch .eos-switch__track{width:46px;height:28px;border-radius:var(--radius-pill);background:rgba(23,18,14,.18);position:relative;transition:background-color .15s ease;flex:none}
.eos-switch .eos-switch__track::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:999px;background:#fff;transition:transform .15s ease;box-shadow:0 1px 2px rgba(23,18,14,.2)}
.eos-switch input:checked + .eos-switch__track{background:var(--eos-ember)}
.eos-switch input:checked + .eos-switch__track::after{transform:translateX(18px)}
.eos-switch input:focus-visible + .eos-switch__track{outline:2px solid var(--focus-ring);outline-offset:2px}
.eos-switch input:disabled ~ *{opacity:.45}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-switch")) {
  const s = document.createElement("style");
  s.id = "eos-css-switch";
  s.textContent = css;
  document.head.appendChild(s);
}
/* ON = Ember (a state achieved). Use for instant-effect settings like autopay. */
function Switch({
  label,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "eos-switch" + (className ? " " + className : ""),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eos-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const css = `
.eos-tabs{display:flex;gap:24px;border-bottom:1px solid var(--line)}
.eos-tab{background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:10px 2px;font-family:var(--font-ui);font-weight:700;font-size:14.5px;color:var(--text-2);cursor:pointer;transition:color .15s ease}
.eos-tab:hover{color:var(--text-1)}
.eos-tab:focus-visible{outline:2px solid var(--focus-ring);outline-offset:-2px}
.eos-tab.is-active{color:var(--text-1);border-bottom-color:var(--eos-charcoal)}
.eos-tabs--dark{border-bottom-color:var(--line-inverse)}
.eos-tabs--dark .eos-tab{color:var(--text-2-inverse)}
.eos-tabs--dark .eos-tab:hover,.eos-tabs--dark .eos-tab.is-active{color:var(--eos-bone)}
.eos-tabs--dark .eos-tab.is-active{border-bottom-color:var(--eos-bone)}
`;
if (typeof document !== "undefined" && !document.getElementById("eos-css-tabs")) {
  const s = document.createElement("style");
  s.id = "eos-css-tabs";
  s.textContent = css;
  document.head.appendChild(s);
}
/* Underline tabs; active marker is ink, not Ember (navigation is state, not action). Items: strings or {value,label}. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  onDark = false,
  style,
  className
}) {
  const norm = items.map(i => typeof i === "object" ? i : {
    value: i,
    label: i
  });
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const active = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: "eos-tabs" + (onDark ? " eos-tabs--dark" : "") + (className ? " " + className : ""),
    style: style
  }, norm.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    type: "button",
    role: "tab",
    "aria-selected": active === t.value,
    className: "eos-tab" + (active === t.value ? " is-active" : ""),
    onClick: () => pick(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
const {
  EosLogo,
  SolRasgado,
  Button,
  Card,
  Badge,
  Stat,
  Tabs,
  Switch,
  Input,
  Radio,
  Dialog,
  Toast,
  ToastRegion
} = window.EosLoanDesignSystem_c354e9;
const PAYMENTS = [["Aug 1, 2026", "$214.09", "Posted"], ["Jul 1, 2026", "$214.09", "Posted"], ["Jun 1, 2026", "$214.09", "Posted"], ["May 1, 2026", "$214.09", "Posted"]];
const DOCS = ["Loan agreement.pdf", "Truth in Lending disclosure.pdf", "2025 interest statement.pdf"];
function AppHeader({
  onSignOut
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--line)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "0 32px",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(EosLogo, {
    variant: "icon-sign",
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onSignOut
  }, "Sign out"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      background: "var(--eos-charcoal)",
      color: "var(--eos-bone)",
      display: "grid",
      placeItems: "center",
      fontSize: 13,
      fontWeight: 800
    }
  }, "MC"))));
}
function PayDialog({
  open,
  onClose,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: "Make a payment",
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onConfirm
    }, "Confirm payment"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Amount",
    defaultValue: "$214.09",
    inputMode: "decimal",
    hint: "From checking \u2022\u20224021"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "ptype",
    label: "Regular payment \u2014 due Sep 1",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "ptype",
    label: "Extra toward principal"
  }))));
}
function EosDashboard({
  onSignOut
}) {
  const [tab, setTab] = React.useState("Payments");
  const [payOpen, setPayOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const confirm = () => {
    setPayOpen(false);
    setToast(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    onSignOut: onSignOut
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "36px 32px 64px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30
    }
  }, "Good morning, Marina."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      marginTop: 26,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "lg",
    value: "$23,860.12",
    label: "Remaining balance",
    detail: "Solar loan \xB7 EOS-2071",
    onDark: true
  }), /*#__PURE__*/React.createElement(SolRasgado, {
    size: 40,
    color: "bone"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: "rgba(247,242,234,.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "34%",
      height: "100%",
      borderRadius: 999,
      background: "var(--eos-ember)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-2-inverse)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "34% paid"), /*#__PURE__*/React.createElement("span", null, "$36,200.00 original")))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Payments", "Documents"],
    value: tab,
    onChange: setTab
  }), tab === "Payments" ? /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("tbody", null, PAYMENTS.map(([d, a, s]) => /*#__PURE__*/React.createElement("tr", {
    key: d
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 0",
      borderBottom: "1px solid var(--line)",
      fontSize: 14,
      fontWeight: 600
    }
  }, d), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 0",
      borderBottom: "1px solid var(--line)",
      fontFamily: "var(--font-mono)",
      fontSize: 14
    }
  }, a), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 0",
      borderBottom: "1px solid var(--line)",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, s)))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, DOCS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, d), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Download")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$214.09",
    label: "Next payment",
    detail: "due Sep 1, 2026"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "100%",
      marginTop: 20
    },
    onClick: () => setPayOpen(true)
  }, "Make a payment"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 18,
      borderTop: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Autopay"),
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Badge, null, "On \xB7 1st of month"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-2)"
    }
  }, "Loan details"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-2)"
    }
  }, "Rate"), /*#__PURE__*/React.createElement("span", null, "6.99% fixed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-2)"
    }
  }, "Term"), /*#__PURE__*/React.createElement("span", null, "240 mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-2)"
    }
  }, "Funded"), /*#__PURE__*/React.createElement("span", null, "Mar 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-2)"
    }
  }, "Payoff quote"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13
    }
  }, "Request")))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      fontSize: 12,
      color: "var(--text-3)",
      fontFamily: "var(--font-mono)"
    }
  }, "Eos Loan \xB7 NMLS #2744537")), /*#__PURE__*/React.createElement(PayDialog, {
    open: payOpen,
    onClose: () => setPayOpen(false),
    onConfirm: confirm
  }), toast && /*#__PURE__*/React.createElement(ToastRegion, null, /*#__PURE__*/React.createElement(Toast, {
    action: "Dismiss",
    onAction: () => setToast(false)
  }, "Payment scheduled for Sep 1. Confirmation #P-88412.")));
}
Object.assign(window, {
  EosDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
const {
  EosLogo,
  Button,
  Input,
  Checkbox
} = window.EosLoanDesignSystem_c354e9;
function EosLogin({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(EosLogo, {
    variant: "icon-sign",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26
    }
  }, "Good morning."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 14.5,
      color: "var(--text-2)"
    }
  }, "Sign in to your Eos account."), /*#__PURE__*/React.createElement("form", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 22
    },
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5
      }
    }, "Keep me signed in")
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13.5
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    style: {
      width: "100%"
    }
  }, "Sign in"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 12,
      color: "var(--text-3)",
      fontFamily: "var(--font-mono)"
    }
  }, "Eos Loan \xB7 NMLS #2744537")));
}
Object.assign(window, {
  EosLogin
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  EosLogo,
  SolRasgado,
  Button,
  Card,
  Badge,
  Stat,
  Input,
  Select,
  Dialog
} = window.EosLoanDesignSystem_c354e9;
function Steps() {
  const steps = [["01", "Check your rate", "Two minutes, soft credit pull. See your real APR before anyone calls you."], ["02", "Pick your terms", "Choose the payment that fits. Total cost in dollars, not fine print."], ["03", "Go solar", "We pay your installer directly. You own the system from day one."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      padding: "72px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      maxWidth: "24ch"
    }
  }, "Three steps between you and the sun."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginTop: 36
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--eos-ember)",
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginTop: 12
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 15,
      color: "var(--text-2)"
    }
  }, d))))));
}
function Rates({
  onRate
}) {
  const rows = [["10 yr", "6.99%", "$116 /mo"], ["15 yr", "7.24%", "$91 /mo"], ["20 yr", "7.49%", "$80 /mo"], ["25 yr", "7.74%", "$75 /mo"]];
  const td = {
    padding: "14px 0",
    borderTop: "1px solid var(--line)",
    fontFamily: "var(--font-mono)",
    fontSize: 15
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "rates",
    style: {
      padding: "72px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)"
    }
  }, "Fixed rate. Fixed payment. No escalator."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16,
      color: "var(--text-2)"
    }
  }, "Every Eos loan is simple interest with no prepayment penalty. Pay it down early, pay less overall."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onRate
  }, "Check your rate"))), /*#__PURE__*/React.createElement(Card, {
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-2)"
    }
  }, "Per $10,000 financed"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Illustrative")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([t, a, m]) => /*#__PURE__*/React.createElement("tr", {
    key: t
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-ui)",
      fontWeight: 800,
      fontSize: 14.5
    }
  }, t), /*#__PURE__*/React.createElement("td", {
    style: td
  }, a, " APR"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "right"
    }
  }, m))))))));
}
function CtaBand({
  onRate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      padding: "88px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-display)",
      color: "var(--eos-bone)",
      maxWidth: "18ch"
    }
  }, "The day starts here."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      color: "var(--text-2-inverse)",
      maxWidth: "44ch"
    }
  }, "Get your rate in two minutes. If the numbers work, you could be producing power next month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onRate
  }, "Check your rate"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onDark: true
  }, "Talk to us"))), /*#__PURE__*/React.createElement(SolRasgado, {
    size: 180,
    color: "bone",
    style: {
      flex: "none"
    }
  })));
}
function SiteFooter() {
  const link = {
    color: "var(--text-2)",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    display: "block",
    marginTop: 10
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "56px 0 40px",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(EosLogo, {
    variant: "lockup",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      fontWeight: 800
    }
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: link
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#rates",
    style: link
  }, "Rates"), /*#__PURE__*/React.createElement("a", {
    href: "#installers",
    style: link
  }, "For installers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      fontWeight: 800
    }
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Careers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      fontWeight: 800
    }
  }, "Legal"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Licenses")))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      fontSize: 12.5,
      color: "var(--text-3)",
      maxWidth: "90ch",
      lineHeight: 1.7
    }
  }, "Eos Loan \xB7 NMLS #2744537. Eos Loan is a DBA of Eos Solar Inc., a licensed lender in Texas. Rates shown are illustrative, for approximate comparison only, and subject to credit approval. Checking your rate uses a soft credit inquiry and does not affect your credit score.")));
}
function RateDialog({
  open,
  onClose
}) {
  const [done, setDone] = React.useState(false);
  const close = () => {
    setDone(false);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: close,
    title: done ? "You're pre-qualified." : "Check your rate",
    width: 440,
    footer: done ? /*#__PURE__*/React.createElement(Button, {
      onClick: close
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: close
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDone(true)
    }, "See my rate"))
  }, done ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6.99%",
    label: "Your APR from",
    accent: true
  }), /*#__PURE__*/React.createElement(Badge, null, "Pre-qualified")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "Based on a soft pull \u2014 your score wasn't touched. A loan specialist will confirm final terms.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "State",
    options: ["Texas", "Florida"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Monthly electric bill",
    placeholder: "$180",
    inputMode: "numeric"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    hint: "Soft credit pull. No hit to your score."
  })));
}
Object.assign(window, {
  Steps,
  Rates,
  CtaBand,
  SiteFooter,
  RateDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const {
  EosLogo,
  Button,
  Stat,
  Badge
} = window.EosLoanDesignSystem_c354e9;
function SiteNav({
  onRate
}) {
  const link = {
    color: "var(--text-1)",
    fontWeight: 700,
    fontSize: 14.5,
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--line)",
      position: "sticky",
      top: 0,
      background: "var(--surface-page)",
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(EosLogo, {
    variant: "icon-sign",
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: link
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#rates",
    style: link
  }, "Rates"), /*#__PURE__*/React.createElement("a", {
    href: "#installers",
    style: link
  }, "For installers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onRate
  }, "Check your rate"))));
}
function Hero({
  onRate
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      padding: "88px 0 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-2)"
    }
  }, "Solar financing \xB7 Texas & Florida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-hero)",
      lineHeight: "var(--lh-tight)",
      marginTop: 18,
      maxWidth: "16ch"
    }
  }, "Solar, ", /*#__PURE__*/React.createElement("mark", {
    style: {
      background: "var(--eos-ember)",
      color: "var(--eos-bone)",
      padding: "0 .14em",
      borderRadius: 4
    }
  }, "owned"), ". Not leased."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 18,
      color: "var(--text-2)",
      maxWidth: "52ch"
    }
  }, "Fixed-rate solar loans for homeowners. Apply with SSN or ITIN, see your total cost in dollars, and own every panel on your roof from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onRate
  }, "Check your rate"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    href: "#how"
  }, "How it works")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 13.5,
      color: "var(--text-2)"
    }
  }, "Two minutes. Soft credit pull \u2014 no hit to your score."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 56,
      paddingTop: 40,
      borderTop: "1px solid var(--line)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6.99%",
    label: "APR from"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$0",
    label: "Down"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "25 yr",
    label: "Terms to"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: /*#__PURE__*/React.createElement("span", null, "SSN ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-2)"
      }
    }, "/"), " ITIN"),
    label: "Both accepted"
  }))));
}
Object.assign(window, {
  SiteNav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.EosLogo = __ds_scope.EosLogo;

__ds_ns.SolRasgado = __ds_scope.SolRasgado;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastRegion = __ds_scope.ToastRegion;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

