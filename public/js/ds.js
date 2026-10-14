/* @ds-bundle: {"format":3,"namespace":"ArivenDesignSystem_60e2d1","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/data-display/ServiceCard.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"9a0196321fbb","components/data-display/Card.jsx":"a0da1d3e9b70","components/data-display/ServiceCard.jsx":"aacf709a5c4c","components/data-display/Tag.jsx":"92a7ca5f1365","components/forms/Field.jsx":"b814c252b273","components/forms/Input.jsx":"d6c5049751a3","ui_kits/website/app.jsx":"b0ffbcc13929","ui_kits/website/components.jsx":"16d19401f07a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArivenDesignSystem_60e2d1 = window.ArivenDesignSystem_60e2d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject a component's stylesheet once. */
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-btn {
  --_bg: var(--brand);
  --_fg: var(--text-on-accent);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  font-size: var(--text-body-md);
  line-height: 1;
  letter-spacing: 0.01em;
  white-space: nowrap;
  text-decoration: none;
  border: var(--border-width) solid var(--_bd);
  border-radius: var(--radius-pill);
  background: var(--_bg);
  color: var(--_fg);
  padding: 0 var(--space-5);
  height: 48px;
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out);
}
.avn-btn:hover { background: var(--brand-hover); }
.avn-btn:active { transform: translateY(1px); background: var(--brand-active); }
.avn-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.avn-btn[disabled], .avn-btn[aria-disabled="true"] {
  opacity: 0.45; cursor: not-allowed; pointer-events: none;
}

.avn-btn--secondary {
  --_bg: transparent; --_fg: var(--brand); --_bd: var(--border-strong);
}
.avn-btn--secondary:hover { background: var(--surface-tint); border-color: var(--accent); }
.avn-btn--secondary:active { background: var(--accent-soft); }

.avn-btn--ghost { --_bg: transparent; --_fg: var(--text-strong); --_bd: transparent; }
.avn-btn--ghost:hover { background: var(--surface-sunken); }
.avn-btn--ghost:active { background: var(--cloud); }

.avn-btn--accent { --_bg: var(--accent); --_fg: var(--text-on-accent); }
.avn-btn--accent:hover { background: var(--steel-700); }

.avn-btn--link {
  --_bg: transparent; --_fg: var(--text-link); --_bd: transparent;
  height: auto; padding: 0; border-radius: var(--radius-xs);
}
.avn-btn--link:hover { background: transparent; text-decoration: underline; }

.avn-btn--sm { height: 38px; font-size: var(--text-body-sm); padding: 0 var(--space-4); }
.avn-btn--lg { height: 56px; font-size: var(--text-body-lg); padding: 0 var(--space-6); }
.avn-btn--block { display: flex; width: 100%; }
.avn-btn--icononly { padding: 0; width: 48px; }
.avn-btn--icononly.avn-btn--sm { width: 38px; }
.avn-btn--icononly.avn-btn--lg { width: 56px; }
.avn-btn__icon { display: inline-flex; flex: 0 0 auto; }
.avn-btn__icon svg { display: block; width: 1.15em; height: 1.15em; }
`;

/**
 * Ariven primary button. Renders a <button> or, when `href` is set, an <a>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  useStyles('avn-button-styles', CSS);
  const cls = ['avn-btn', variant !== 'primary' && `avn-btn--${variant}`, size !== 'md' && `avn-btn--${size}`, block && 'avn-btn--block', iconOnly && 'avn-btn--icononly', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "avn-btn__icon"
  }, iconLeft), !iconOnly && children, iconOnly && children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "avn-btn__icon"
  }, iconRight));
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-card {
  background: var(--surface-card);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: clip;
  transition: box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.avn-card--outline { box-shadow: none; }
.avn-card--sunken  { background: var(--surface-sunken); box-shadow: none; border-color: transparent; }
.avn-card--inverse {
  background: var(--surface-inverse); border-color: var(--border-on-dark);
  color: var(--text-inverse); box-shadow: var(--shadow-md);
}
.avn-card--inverse :where(h1,h2,h3,h4) { color: var(--text-inverse); }
.avn-card--interactive { cursor: pointer; }
.avn-card--interactive:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: var(--border-strong); }

.avn-card__pad--sm { padding: var(--space-4); }
.avn-card__pad--md { padding: var(--space-5); }
.avn-card__pad--lg { padding: var(--space-6); }
.avn-card__pad--none { padding: 0; }
`;

/**
 * Generic surface container.
 */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  useStyles('avn-card-styles', CSS);
  const cls = ['avn-card', variant !== 'elevated' && `avn-card--${variant}`, `avn-card__pad--${padding}`, interactive && 'avn-card--interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-tag {
  display: inline-flex; align-items: center; gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  font-size: var(--text-body-sm);
  line-height: 1;
  letter-spacing: 0.01em;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-pill);
  border: var(--border-width) solid transparent;
  white-space: nowrap;
}
.avn-tag__dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; opacity: 0.9; }
.avn-tag__icon { display: inline-flex; }
.avn-tag__icon svg { display: block; width: 1em; height: 1em; }

/* tones */
.avn-tag--solid   { background: var(--brand); color: var(--text-on-accent); }
.avn-tag--soft    { background: var(--surface-tint); color: var(--navy-600); }
.avn-tag--outline { background: transparent; color: var(--navy-600); border-color: var(--border-strong); }
.avn-tag--accent  { background: var(--accent-soft); color: var(--steel-700); }
.avn-tag--cool    { background: #e6f0f6; color: #2f6488; }
.avn-tag--success { background: var(--success-100); color: var(--success-500); }

.avn-tag--sm { font-size: var(--text-caption); padding: 0.3rem 0.6rem; }
`;

/**
 * Compact pill label — used for the privacy / coolness feature chips and
 * any short categorical marker.
 */
function Tag({
  children,
  tone = 'soft',
  size = 'md',
  dot = false,
  icon,
  className = '',
  ...rest
}) {
  useStyles('avn-tag-styles', CSS);
  const cls = ['avn-tag', `avn-tag--${tone}`, size === 'sm' && 'avn-tag--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "avn-tag__dot"
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "avn-tag__icon"
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-service {
  display: flex; flex-direction: column;
  background: var(--surface-card);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-lg);
  overflow: clip;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.avn-service:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); border-color: var(--border-strong); }
.avn-service__media { position: relative; aspect-ratio: 4 / 3; overflow: clip; background: var(--surface-sunken); }
.avn-service__media img { width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform var(--dur-slow) var(--ease-out); }
.avn-service:hover .avn-service__media img { transform: scale(1.04); }
.avn-service__tags { position: absolute; left: var(--space-3); top: var(--space-3);
  display: flex; gap: var(--space-2); flex-wrap: wrap; }
.avn-service__body { display: flex; flex-direction: column; gap: var(--space-3);
  padding: var(--space-5); flex: 1; }
.avn-service__title { font-family: var(--font-display); font-weight: var(--weight-semibold);
  font-size: var(--text-h3); line-height: var(--leading-snug); letter-spacing: var(--tracking-tight);
  color: var(--text-strong); margin: 0; }
.avn-service__desc { font-size: var(--text-body-md); line-height: var(--leading-relaxed);
  color: var(--text-body); margin: 0; }
.avn-service__link { margin-top: auto; display: inline-flex; align-items: center; gap: var(--space-2);
  font-weight: var(--weight-semibold); color: var(--text-link); padding-top: var(--space-2); }
.avn-service__link svg { width: 1.1em; height: 1.1em; transition: transform var(--dur-fast) var(--ease-out); }
.avn-service:hover .avn-service__link svg { transform: translateX(3px); }
`;

/**
 * Service tile used across the Ariven site: photo with overlaid feature
 * chips, a title, a short description and a "learn more" affordance.
 */
function ServiceCard({
  title,
  description,
  image,
  imageAlt = '',
  tags = [],
  href = '#',
  linkLabel = 'Sužinoti daugiau',
  arrow,
  className = '',
  ...rest
}) {
  useStyles('avn-service-styles', CSS);
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ['avn-service', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "avn-service__media"
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    loading: "lazy"
  }), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "avn-service__tags"
  }, tags.map((t, i) => typeof t === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: "solid",
    dot: true
  }, t) : /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: t.tone || 'solid',
    dot: t.dot ?? true,
    icon: t.icon
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "avn-service__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "avn-service__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "avn-service__desc"
  }, description), /*#__PURE__*/React.createElement("a", {
    className: "avn-service__link",
    href: href
  }, linkLabel, arrow)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-field { display: flex; flex-direction: column; gap: var(--space-2); }
.avn-field__label { font-family: var(--font-body); font-weight: var(--weight-semibold);
  font-size: var(--text-body-sm); color: var(--text-strong); }
.avn-field__req { color: var(--danger-500); margin-left: 2px; }
.avn-field__hint { font-size: var(--text-body-sm); color: var(--text-muted); margin: 0; }
.avn-field__error { font-size: var(--text-body-sm); color: var(--danger-500); margin: 0; font-weight: var(--weight-medium); }
`;

/** Labelled form field wrapper (label + control + hint/error). */
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className = '',
  ...rest
}) {
  useStyles('avn-field-styles', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['avn-field', className].filter(Boolean).join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "avn-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "avn-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("p", {
    className: "avn-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("p", {
    className: "avn-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.avn-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  color: var(--text-strong);
  background: var(--surface-card);
  border: var(--border-width) solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 0 var(--space-4);
  height: 48px;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  appearance: none;
}
.avn-input::placeholder { color: var(--text-muted); }
.avn-input:hover { border-color: var(--accent); }
.avn-input:focus-visible { outline: none; border-color: var(--accent); box-shadow: var(--shadow-focus); }
.avn-input[disabled] { background: var(--surface-sunken); opacity: 0.6; cursor: not-allowed; }
.avn-input[aria-invalid="true"] { border-color: var(--danger-500); }
.avn-input[aria-invalid="true"]:focus-visible { box-shadow: 0 0 0 3px var(--danger-100); }

.avn-input--textarea { height: auto; padding: var(--space-3) var(--space-4); min-height: 120px; resize: vertical; line-height: var(--leading-relaxed); }
`;

/** Single-line text input. */
function Input({
  invalid = false,
  className = '',
  ...rest
}) {
  useStyles('avn-input-styles', CSS);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['avn-input', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
}

/** Multi-line text input. */
function Textarea({
  invalid = false,
  rows = 4,
  className = '',
  ...rest
}) {
  useStyles('avn-input-styles', CSS);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['avn-input', 'avn-input--textarea', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined,
    rows: rows
  }, rest));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* global React, ReactDOM, Navbar, Hero, ValueStrip, Services, Process, Contact, Footer */
const {
  useState,
  useRef
} = React;
function App() {
  const [audience, setAudience] = useState('namams');
  const contactRef = useRef(null);
  const toContact = () => {
    const el = document.getElementById('kontaktai');
    if (el) window.scrollTo({
      top: el.offsetTop - 76,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Navbar, {
    audience: audience,
    setAudience: setAudience,
    onContact: toContact
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onContact: toContact
  }), /*#__PURE__*/React.createElement(ValueStrip, null), /*#__PURE__*/React.createElement(Services, {
    audience: audience,
    setAudience: setAudience
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    formRef: contactRef
  })), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ArivenDesignSystem_60e2d1 */
const {
  useState
} = React;
const DS = window.ArivenDesignSystem_60e2d1;
const {
  Button,
  Tag,
  ServiceCard,
  Field,
  Input,
  Textarea,
  Card
} = DS;
const ASSET = '../../assets/';

/* ----------------------------- icons (inline, Lucide-style) ----------------------------- */
const Icon = {
  arrow: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  phone: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  })),
  mail: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 7 10 6 10-6"
  })),
  pin: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  sun: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  eye: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  shield: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  })),
  sparkle: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 3v4M3 5h4M19 17v4M17 19h4"
  })),
  menu: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  check: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))
};

/* ----------------------------- data ----------------------------- */
const SERVICES = {
  namams: [{
    title: 'Matinės plėvelės klijavimas',
    tags: [{
      label: 'Privatumas'
    }],
    img: ASSET + 'photo-glass-square.jpg',
    desc: 'Matinė plėvelė suteikia daugiau privatumo tiek dieną, tiek naktį, kartu praleisdama natūralią šviesą.'
  }, {
    title: 'Veidrodinės plėvelės klijavimas',
    tags: [{
      label: 'Vėsa',
      tone: 'cool',
      icon: /*#__PURE__*/React.createElement(Icon.sun, null)
    }, {
      label: 'Privatumas'
    }],
    img: ASSET + 'photo-glass-wide.jpg',
    desc: 'Veidrodinė plėvelė sumažina karštį namuose, atspindi saulę ir suteikia privatumo dienos metu.'
  }, {
    title: 'Plėvelės su individualiu dizainu',
    tags: [{
      label: 'Dizainas',
      tone: 'accent',
      icon: /*#__PURE__*/React.createElement(Icon.sparkle, null)
    }],
    img: ASSET + 'photo-glass-facade.jpg',
    desc: 'Pagaminsime dekoratyvinę plėvelę pagal Jūsų norimą dizainą – raštą, formą ar idėją.'
  }, {
    title: 'Šerkšno plėvelės klijavimas',
    tags: [{
      label: 'Privatumas'
    }],
    img: ASSET + 'photo-glass-square.jpg',
    desc: 'Subtilus šerkšno efektas, kuris dengia stiklą tolygiai ir išlaiko šviesų, švarų vaizdą.'
  }],
  verslui: [{
    title: 'Biurų matinės plėvelės',
    tags: [{
      label: 'Privatumas'
    }],
    img: ASSET + 'photo-glass-wide.jpg',
    desc: 'Subtilios matinės plėvelės pasitarnauja pasitarimų kambariuose ir atviro plano biuruose.'
  }, {
    title: 'Saulės kontrolės plėvelės',
    tags: [{
      label: 'Vėsa',
      tone: 'cool',
      icon: /*#__PURE__*/React.createElement(Icon.sun, null)
    }],
    img: ASSET + 'photo-glass-facade.jpg',
    desc: 'Sumažina šilumą ir akinimą prie langų, padeda išlaikyti stabilią temperatūrą patalpose.'
  }, {
    title: 'Logotipai ir raštai ant stiklo',
    tags: [{
      label: 'Dizainas',
      tone: 'accent',
      icon: /*#__PURE__*/React.createElement(Icon.sparkle, null)
    }],
    img: ASSET + 'photo-glass-square.jpg',
    desc: 'Įmonės ženklas, raštas ar zonavimas ant stiklinių pertvarų – pagal Jūsų brandbook’ą.'
  }, {
    title: 'Apsauginės plėvelės',
    tags: [{
      label: 'Sauga',
      tone: 'soft',
      icon: /*#__PURE__*/React.createElement(Icon.shield, null)
    }],
    img: ASSET + 'photo-glass-wide.jpg',
    desc: 'Sustiprina stiklą, sulaiko šukes dūžio atveju ir prideda saugumo vitrinoms bei durims.'
  }]
};

/* ----------------------------- Navbar ----------------------------- */
function Navbar({
  audience,
  setAudience,
  onContact
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__brand",
    href: "#top",
    onClick: () => setAudience('namams')
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'logo-ariven-navy.png',
    alt: "Ariven \u2014 pl\u0117vel\u0117s klijavimas"
  })), /*#__PURE__*/React.createElement("nav", {
    className: 'nav__links' + (open ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: 'nav__link' + (audience === 'namams' ? ' is-active' : ''),
    onClick: () => {
      setAudience('namams');
      setOpen(false);
    }
  }, "Namams"), /*#__PURE__*/React.createElement("button", {
    className: 'nav__link' + (audience === 'verslui' ? ' is-active' : ''),
    onClick: () => {
      setAudience('verslui');
      setOpen(false);
    }
  }, "Verslui"), /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#paslaugos",
    onClick: () => setOpen(false)
  }, "Paslaugos"), /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#kontaktai",
    onClick: () => setOpen(false)
  }, "Kontaktai")), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon.phone, null),
    href: "tel:+37060000000"
  }, "+370 600 00000"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onContact
  }, "Gauti pasi\u016Blym\u0105")), /*#__PURE__*/React.createElement("button", {
    className: "nav__burger",
    "aria-label": "Meniu",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon.menu, null))));
}

/* ----------------------------- Hero ----------------------------- */
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Pl\u0117vel\u0117s klijavimas"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Skaidresn\u0117 ", /*#__PURE__*/React.createElement("em", {
    className: "hl"
  }, "\u0161viesa"), ".", /*#__PURE__*/React.createElement("br", null), "Daugiau privatumo."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Pl\u0117veli\u0173 sprendimai, kurie suteikia namams ir verslui daugiau privatumo, apsaugo nuo saul\u0117s kaitros ir padeda i\u0161laikyti maloni\u0105 \u0161vies\u0105."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onContact,
    iconRight: /*#__PURE__*/React.createElement(Icon.arrow, null)
  }, "U\u017Esakyti konsultacij\u0105"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#paslaugos"
  }, "M\u016Bs\u0173 paslaugos")), /*#__PURE__*/React.createElement("ul", {
    className: "hero__stats"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "10+"), /*#__PURE__*/React.createElement("span", null, "met\u0173 patirties")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "500+"), /*#__PURE__*/React.createElement("span", null, "\u012Fgyvendint\u0173 objekt\u0173")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "1 d."), /*#__PURE__*/React.createElement("span", null, "atsakymas \u012F u\u017Eklaus\u0105")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'photo-glass-facade.jpg',
    alt: "Stiklinio pastato fasadas su dangaus atspind\u017Eiais"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__chip"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "cool",
    icon: /*#__PURE__*/React.createElement(Icon.sun, null)
  }, "V\u0117sa vasar\u0105"), /*#__PURE__*/React.createElement(Tag, {
    tone: "solid",
    dot: true
  }, "Privatumas"))));
}

/* ----------------------------- Value strip ----------------------------- */
function ValueStrip() {
  const items = [{
    icon: /*#__PURE__*/React.createElement(Icon.eye, null),
    t: 'Privatumas',
    d: 'Apsauga nuo žvilgsnių dieną ir naktį.'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.sun, null),
    t: 'Vėsa',
    d: 'Mažiau kaitros ir akinimo prie langų.'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.sparkle, null),
    t: 'Natūrali šviesa',
    d: 'Šviesa lieka — keičiasi tik vaizdas.'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.shield, null),
    t: 'Kokybė',
    d: 'Tikslus klijavimas, tvarkingi kraštai.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "values"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "value",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "value__ico"
  }, it.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "value__t"
  }, it.t), /*#__PURE__*/React.createElement("div", {
    className: "value__d"
  }, it.d)))));
}

/* ----------------------------- Services ----------------------------- */
function Services({
  audience,
  setAudience
}) {
  const list = SERVICES[audience];
  return /*#__PURE__*/React.createElement("section", {
    className: "services",
    id: "paslaugos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--accent"
  }, "Paslaugos"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Skirtingos erdv\u0117s \u2013 skirtingi poreikiai")), /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist",
    "aria-label": "Auditorija"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": audience === 'namams',
    className: 'seg__btn' + (audience === 'namams' ? ' is-active' : ''),
    onClick: () => setAudience('namams')
  }, "Namams"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": audience === 'verslui',
    className: 'seg__btn' + (audience === 'verslui' ? ' is-active' : ''),
    onClick: () => setAudience('verslui')
  }, "Verslui"))), /*#__PURE__*/React.createElement("div", {
    className: "services__grid"
  }, list.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: audience + i,
    title: s.title,
    description: s.desc,
    image: s.img,
    tags: s.tags,
    arrow: /*#__PURE__*/React.createElement(Icon.arrow, null),
    linkLabel: "Su\u017Einoti daugiau",
    href: "#kontaktai"
  }))));
}

/* ----------------------------- Process ----------------------------- */
function Process() {
  const steps = [{
    n: '01',
    t: 'Konsultacija',
    d: 'Aptariame poreikius ir parenkame tinkamą plėvelę.'
  }, {
    n: '02',
    t: 'Apžiūra ir matavimai',
    d: 'Atvykstame, įvertiname stiklą ir tiksliai išmatuojame.'
  }, {
    n: '03',
    t: 'Klijavimas',
    d: 'Švariai ir tvarkingai suklijuojame be oro burbulų.'
  }, {
    n: '04',
    t: 'Rezultatas',
    d: 'Perduodame darbą ir suteikiame priežiūros rekomendacijas.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process__intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--light"
  }, "Kaip dirbame"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title section__title--inv"
  }, "Nuo u\u017Eklausos iki rezultato per keturis \u017Eingsnius")), /*#__PURE__*/React.createElement("ol", {
    className: "process__steps"
  }, steps.map(s => /*#__PURE__*/React.createElement("li", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "step__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "step__t"
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "step__d"
  }, s.d)))));
}

/* ----------------------------- Contact ----------------------------- */
function Contact({
  formRef
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });
  const upd = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "kontaktai",
    ref: formRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--accent"
  }, "Kontaktai"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Gaukite pasi\u016Blym\u0105 per vien\u0105 darbo dien\u0105"), /*#__PURE__*/React.createElement("p", {
    className: "contact__lead"
  }, "Para\u0161ykite, kokia erdv\u0117 ir koks rezultatas Jums svarbus \u2013 pasi\u016Blysime tinkamiausi\u0105 pl\u0117vel\u0119 ir kain\u0105."), /*#__PURE__*/React.createElement("ul", {
    className: "contact__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact__ico"
  }, /*#__PURE__*/React.createElement(Icon.phone, null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+37060000000"
  }, "+370 600 00000")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact__ico"
  }, /*#__PURE__*/React.createElement(Icon.mail, null)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@ariven.lt"
  }, "info@ariven.lt")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact__ico"
  }, /*#__PURE__*/React.createElement(Icon.pin, null)), "Vilnius ir aplinkinis regionas"))), /*#__PURE__*/React.createElement(Card, {
    className: "contact__card",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "sent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sent__badge"
  }, /*#__PURE__*/React.createElement(Icon.check, null)), /*#__PURE__*/React.createElement("h3", {
    className: "sent__t"
  }, "A\u010Di\u016B! U\u017Eklausa gauta."), /*#__PURE__*/React.createElement("p", {
    className: "sent__d"
  }, "Susisieksime su Jumis per vien\u0105 darbo dien\u0105 el. pa\u0161tu arba telefonu."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        msg: ''
      });
    }
  }, "Si\u0173sti dar vien\u0105")) : /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Vardas",
    htmlFor: "c-name"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    value: form.name,
    onChange: upd('name'),
    placeholder: "J\u016Bs\u0173 vardas",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefonas",
    htmlFor: "c-phone"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-phone",
    value: form.phone,
    onChange: upd('phone'),
    placeholder: "+370"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "El. pa\u0161tas",
    htmlFor: "c-email",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    type: "email",
    value: form.email,
    onChange: upd('email'),
    placeholder: "vardas@pavyzdys.lt",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u017Dinut\u0117",
    htmlFor: "c-msg",
    hint: "Trumpai apra\u0161ykite erdv\u0119, lang\u0173 kiek\u012F ir pageidaujam\u0105 rezultat\u0105."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    value: form.msg,
    onChange: upd('msg'),
    placeholder: "Pvz.: biuro langai \u012F pietus, reikia v\u0117sos ir privatumo..."
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(Icon.arrow, null)
  }, "Si\u0173sti u\u017Eklaus\u0105"))));
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'logo-ariven-white.png',
    alt: "Ariven"
  }), /*#__PURE__*/React.createElement("p", null, "Pl\u0117veli\u0173 klijavimas namams ir verslui. Privatumas, v\u0117sa ir nat\u016Brali \u0161viesa.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Paslaugos"), /*#__PURE__*/React.createElement("a", {
    href: "#paslaugos"
  }, "Namams"), /*#__PURE__*/React.createElement("a", {
    href: "#paslaugos"
  }, "Verslui"), /*#__PURE__*/React.createElement("a", {
    href: "#paslaugos"
  }, "Individualus dizainas")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u012Emon\u0117"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "Apie mus"), /*#__PURE__*/React.createElement("a", {
    href: "#paslaugos"
  }, "Darbai"), /*#__PURE__*/React.createElement("a", {
    href: "#kontaktai"
  }, "Kontaktai")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Kontaktai"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+37060000000"
  }, "+370 600 00000"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@ariven.lt"
  }, "info@ariven.lt"), /*#__PURE__*/React.createElement("span", null, "Vilnius")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ariven"), /*#__PURE__*/React.createElement("span", null, "Pl\u0117vel\u0117s klijavimas")));
}
Object.assign(window, {
  Navbar,
  Hero,
  ValueStrip,
  Services,
  Process,
  Contact,
  Footer,
  Icon,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
