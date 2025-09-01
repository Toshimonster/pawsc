!(function () {
	function e(e, t, n) {
		return (
			(t = (function (e) {
				var t = (function (e, t) {
					if ("object" != typeof e || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var o = n.call(e, t || "default");
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == typeof t ? t : String(t);
			})(t)) in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (e[t] = n),
			e
		);
	}
	System.register([], function (t, n) {
		"use strict";
		return {
			execute: function () {
				var o = document.createElement("style");
				function i(e) {
					return e &&
						e.__esModule &&
						Object.prototype.hasOwnProperty.call(e, "default")
						? e.default
						: e;
				}
				(o.textContent =
					'html.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font: "Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font: -apple-system-body;--ion-font-family: var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity: .18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity: 0;--box-shadow: none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base: var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint: var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base: var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base: var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-medium-shade, #808289) !important;--ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none!important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translateZ(0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal,.md .menu-content-push{box-shadow:4px 0 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width: 0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:.3s transform cubic-bezier(.25,.8,.5,1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none!important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width: 0px;--inner-border-width: 0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width: fit-content;--height: fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}label,input,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}a,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{padding:0;border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%}html:not(.hydrated) body{display:none}html.ion-ce body{display:block}html.plt-pwa{height:100vh}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;transform:translateZ(0);text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;text-size-adjust:none}html{font-family:var(--ion-font-family)}@supports (-webkit-touch-callout: none){html{font:var(--ion-dynamic-font, 16px var(--ion-font-family))}}a{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:1.625rem}h2{margin-top:18px;font-size:1.5rem}h3{font-size:1.375rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding:0}.ion-padding{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-top{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start{--padding-start: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}.ion-padding-end{--padding-end: var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-padding-bottom{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-no-margin{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin:0}.ion-margin{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-top{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start{--margin-start: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}.ion-margin-end{--margin-end: var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-margin-bottom{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-float-left{float:left!important}.ion-float-right{float:right!important}.ion-float-start{float:left!important}:host-context([dir=rtl]) .ion-float-start{float:right!important}[dir=rtl] .ion-float-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-start:dir(rtl){float:right!important}}.ion-float-end{float:right!important}:host-context([dir=rtl]) .ion-float-end{float:left!important}[dir=rtl] .ion-float-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-end:dir(rtl){float:left!important}}@media (min-width: 576px){.ion-float-sm-left{float:left!important}.ion-float-sm-right{float:right!important}.ion-float-sm-start{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start{float:right!important}[dir=rtl] .ion-float-sm-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-sm-start:dir(rtl){float:right!important}}.ion-float-sm-end{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end{float:left!important}[dir=rtl] .ion-float-sm-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-sm-end:dir(rtl){float:left!important}}}@media (min-width: 768px){.ion-float-md-left{float:left!important}.ion-float-md-right{float:right!important}.ion-float-md-start{float:left!important}:host-context([dir=rtl]) .ion-float-md-start{float:right!important}[dir=rtl] .ion-float-md-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-md-start:dir(rtl){float:right!important}}.ion-float-md-end{float:right!important}:host-context([dir=rtl]) .ion-float-md-end{float:left!important}[dir=rtl] .ion-float-md-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-md-end:dir(rtl){float:left!important}}}@media (min-width: 992px){.ion-float-lg-left{float:left!important}.ion-float-lg-right{float:right!important}.ion-float-lg-start{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start{float:right!important}[dir=rtl] .ion-float-lg-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-lg-start:dir(rtl){float:right!important}}.ion-float-lg-end{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end{float:left!important}[dir=rtl] .ion-float-lg-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-lg-end:dir(rtl){float:left!important}}}@media (min-width: 1200px){.ion-float-xl-left{float:left!important}.ion-float-xl-right{float:right!important}.ion-float-xl-start{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start{float:right!important}[dir=rtl] .ion-float-xl-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-xl-start:dir(rtl){float:right!important}}.ion-float-xl-end{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end{float:left!important}[dir=rtl] .ion-float-xl-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-xl-end:dir(rtl){float:left!important}}}.ion-text-center{text-align:center!important}.ion-text-justify{text-align:justify!important}.ion-text-start{text-align:start!important}.ion-text-end{text-align:end!important}.ion-text-left{text-align:left!important}.ion-text-right{text-align:right!important}.ion-text-nowrap{white-space:nowrap!important}.ion-text-wrap{white-space:normal!important}@media (min-width: 576px){.ion-text-sm-center{text-align:center!important}.ion-text-sm-justify{text-align:justify!important}.ion-text-sm-start{text-align:start!important}.ion-text-sm-end{text-align:end!important}.ion-text-sm-left{text-align:left!important}.ion-text-sm-right{text-align:right!important}.ion-text-sm-nowrap{white-space:nowrap!important}.ion-text-sm-wrap{white-space:normal!important}}@media (min-width: 768px){.ion-text-md-center{text-align:center!important}.ion-text-md-justify{text-align:justify!important}.ion-text-md-start{text-align:start!important}.ion-text-md-end{text-align:end!important}.ion-text-md-left{text-align:left!important}.ion-text-md-right{text-align:right!important}.ion-text-md-nowrap{white-space:nowrap!important}.ion-text-md-wrap{white-space:normal!important}}@media (min-width: 992px){.ion-text-lg-center{text-align:center!important}.ion-text-lg-justify{text-align:justify!important}.ion-text-lg-start{text-align:start!important}.ion-text-lg-end{text-align:end!important}.ion-text-lg-left{text-align:left!important}.ion-text-lg-right{text-align:right!important}.ion-text-lg-nowrap{white-space:nowrap!important}.ion-text-lg-wrap{white-space:normal!important}}@media (min-width: 1200px){.ion-text-xl-center{text-align:center!important}.ion-text-xl-justify{text-align:justify!important}.ion-text-xl-start{text-align:start!important}.ion-text-xl-end{text-align:end!important}.ion-text-xl-left{text-align:left!important}.ion-text-xl-right{text-align:right!important}.ion-text-xl-nowrap{white-space:nowrap!important}.ion-text-xl-wrap{white-space:normal!important}}.ion-text-uppercase{text-transform:uppercase!important}.ion-text-lowercase{text-transform:lowercase!important}.ion-text-capitalize{text-transform:capitalize!important}@media (min-width: 576px){.ion-text-sm-uppercase{text-transform:uppercase!important}.ion-text-sm-lowercase{text-transform:lowercase!important}.ion-text-sm-capitalize{text-transform:capitalize!important}}@media (min-width: 768px){.ion-text-md-uppercase{text-transform:uppercase!important}.ion-text-md-lowercase{text-transform:lowercase!important}.ion-text-md-capitalize{text-transform:capitalize!important}}@media (min-width: 992px){.ion-text-lg-uppercase{text-transform:uppercase!important}.ion-text-lg-lowercase{text-transform:lowercase!important}.ion-text-lg-capitalize{text-transform:capitalize!important}}@media (min-width: 1200px){.ion-text-xl-uppercase{text-transform:uppercase!important}.ion-text-xl-lowercase{text-transform:lowercase!important}.ion-text-xl-capitalize{text-transform:capitalize!important}}.ion-align-self-start{align-self:flex-start!important}.ion-align-self-end{align-self:flex-end!important}.ion-align-self-center{align-self:center!important}.ion-align-self-stretch{align-self:stretch!important}.ion-align-self-baseline{align-self:baseline!important}.ion-align-self-auto{align-self:auto!important}.ion-wrap{flex-wrap:wrap!important}.ion-nowrap{flex-wrap:nowrap!important}.ion-wrap-reverse{flex-wrap:wrap-reverse!important}.ion-justify-content-start{justify-content:flex-start!important}.ion-justify-content-center{justify-content:center!important}.ion-justify-content-end{justify-content:flex-end!important}.ion-justify-content-around{justify-content:space-around!important}.ion-justify-content-between{justify-content:space-between!important}.ion-justify-content-evenly{justify-content:space-evenly!important}.ion-align-items-start{align-items:flex-start!important}.ion-align-items-center{align-items:center!important}.ion-align-items-end{align-items:flex-end!important}.ion-align-items-stretch{align-items:stretch!important}.ion-align-items-baseline{align-items:baseline!important}.ion-hide,.ion-hide-up,.ion-hide-down{display:none!important}@media (min-width: 576px){.ion-hide-sm-up{display:none!important}}@media (max-width: 575.98px){.ion-hide-sm-down{display:none!important}}@media (min-width: 768px){.ion-hide-md-up{display:none!important}}@media (max-width: 767.98px){.ion-hide-md-down{display:none!important}}@media (min-width: 992px){.ion-hide-lg-up{display:none!important}}@media (max-width: 991.98px){.ion-hide-lg-down{display:none!important}}@media (min-width: 1200px){.ion-hide-xl-up{display:none!important}}@media (max-width: 1199.98px){.ion-hide-xl-down{display:none!important}}:root{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #428cff;--ion-color-primary-rgb: 66,140,255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255,255,255;--ion-color-primary-shade: #3a7be0;--ion-color-primary-tint: #5598ff;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80,200,255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255,255,255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106,100,255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47,223,117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255,213,52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255,73,97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255,255,255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244,245,248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0,0,0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152,154,162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0,0,0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34,36,40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255,255,255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0,0,0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18,18,18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}.pixelGridCanvas{padding-left:0;padding-right:0;display:block;margin:20px auto}.pixelGridDiv{padding-left:0;padding-right:0;margin-top:auto;margin-left:auto;margin-right:auto;display:block}.resetFab{margin:auto}.StateCard{margin:5px;width:150px;height:150px}.StateImage{background:black;margin:5px;width:140px;height:70px;image-rendering:pixelated;border-radius:5px}.Transition{transition:transform .3s ease-in-out,all .5s ease}.pawsContainer{width:100%;padding:1em}\n'),
					document.head.appendChild(o),
					t({
						m: function (e) {
							const t = {};
							if (!e) return;
							return (
								e.forEach((e, n) => {
									t[n.toString()] = e;
								}),
								t
							);
						},
						o: function (e) {
							if ("string" == typeof e) return e;
							if ("number" == typeof e)
								return `0000${e
									.toString(16)
									.padStart(4, "0")}-0000-1000-8000-00805f9b34fb`;
							throw new Error("Invalid UUID");
						},
						q: Qw,
					});
				var r = { exports: {} },
					a = {},
					s = { exports: {} },
					l = {},
					c = Symbol.for("react.element"),
					d = Symbol.for("react.portal"),
					u = Symbol.for("react.fragment"),
					h = Symbol.for("react.strict_mode"),
					f = Symbol.for("react.profiler"),
					p = Symbol.for("react.provider"),
					m = Symbol.for("react.context"),
					g = Symbol.for("react.forward_ref"),
					b = Symbol.for("react.suspense"),
					v = Symbol.for("react.memo"),
					y = Symbol.for("react.lazy"),
					w = Symbol.iterator;
				var x = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					k = Object.assign,
					E = {};
				function S(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = E),
						(this.updater = n || x);
				}
				function C() {}
				function $(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = E),
						(this.updater = n || x);
				}
				(S.prototype.isReactComponent = {}),
					(S.prototype.setState = function (e, t) {
						if ("object" != typeof e && "function" != typeof e && null != e)
							throw Error(
								"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(S.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(C.prototype = S.prototype);
				var z = ($.prototype = new C());
				(z.constructor = $), k(z, S.prototype), (z.isPureReactComponent = !0);
				var I = Array.isArray,
					T = Object.prototype.hasOwnProperty,
					P = { current: null },
					L = { key: !0, ref: !0, __self: !0, __source: !0 };
				function R(e, t, n) {
					var o,
						i = {},
						r = null,
						a = null;
					if (null != t)
						for (o in (void 0 !== t.ref && (a = t.ref),
						void 0 !== t.key && (r = "" + t.key),
						t))
							T.call(t, o) && !L.hasOwnProperty(o) && (i[o] = t[o]);
					var s = arguments.length - 2;
					if (1 === s) i.children = n;
					else if (1 < s) {
						for (var l = Array(s), d = 0; d < s; d++) l[d] = arguments[d + 2];
						i.children = l;
					}
					if (e && e.defaultProps)
						for (o in (s = e.defaultProps)) void 0 === i[o] && (i[o] = s[o]);
					return {
						$$typeof: c,
						type: e,
						key: r,
						ref: a,
						props: i,
						_owner: P.current,
					};
				}
				function O(e) {
					return "object" == typeof e && null !== e && e.$$typeof === c;
				}
				var N = /\/+/g;
				function _(e, t) {
					return "object" == typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function D(e, t, n, o, i) {
					var r = typeof e;
					("undefined" !== r && "boolean" !== r) || (e = null);
					var a = !1;
					if (null === e) a = !0;
					else
						switch (r) {
							case "string":
							case "number":
								a = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case c:
									case d:
										a = !0;
								}
						}
					if (a)
						return (
							(i = i((a = e))),
							(e = "" === o ? "." + _(a, 0) : o),
							I(i)
								? ((n = ""),
								  null != e && (n = e.replace(N, "$&/") + "/"),
								  D(i, t, n, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (O(i) &&
										(i = (function (e, t) {
											return {
												$$typeof: c,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											i,
											n +
												(!i.key || (a && a.key === i.key)
													? ""
													: ("" + i.key).replace(N, "$&/") + "/") +
												e
										)),
								  t.push(i)),
							1
						);
					if (((a = 0), (o = "" === o ? "." : o + ":"), I(e)))
						for (var s = 0; s < e.length; s++) {
							var l = o + _((r = e[s]), s);
							a += D(r, t, n, l, i);
						}
					else if (
						((l = (function (e) {
							return null === e || "object" != typeof e
								? null
								: "function" == typeof (e = (w && e[w]) || e["@@iterator"])
								? e
								: null;
						})(e)),
						"function" == typeof l)
					)
						for (e = l.call(e), s = 0; !(r = e.next()).done; )
							a += D((r = r.value), t, n, (l = o + _(r, s++)), i);
					else if ("object" === r)
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" + Object.keys(e).join(", ") + "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					return a;
				}
				function A(e, t, n) {
					if (null == e) return e;
					var o = [],
						i = 0;
					return (
						D(e, o, "", "", function (e) {
							return t.call(n, e, i++);
						}),
						o
					);
				}
				function M(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var B = { current: null },
					j = { transition: null },
					V = {
						ReactCurrentDispatcher: B,
						ReactCurrentBatchConfig: j,
						ReactCurrentOwner: P,
					};
				(l.Children = {
					map: A,
					forEach: function (e, t, n) {
						A(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							A(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							A(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!O(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(l.Component = S),
					(l.Fragment = u),
					(l.Profiler = f),
					(l.PureComponent = $),
					(l.StrictMode = h),
					(l.Suspense = b),
					(l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
					(l.cloneElement = function (e, t, n) {
						if (null == e)
							throw Error(
								"React.cloneElement(...): The argument must be a React element, but you passed " +
									e +
									"."
							);
						var o = k({}, e.props),
							i = e.key,
							r = e.ref,
							a = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((r = t.ref), (a = P.current)),
								void 0 !== t.key && (i = "" + t.key),
								e.type && e.type.defaultProps)
							)
								var s = e.type.defaultProps;
							for (l in t)
								T.call(t, l) &&
									!L.hasOwnProperty(l) &&
									(o[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
						}
						var l = arguments.length - 2;
						if (1 === l) o.children = n;
						else if (1 < l) {
							s = Array(l);
							for (var d = 0; d < l; d++) s[d] = arguments[d + 2];
							o.children = s;
						}
						return {
							$$typeof: c,
							type: e.type,
							key: i,
							ref: r,
							props: o,
							_owner: a,
						};
					}),
					(l.createContext = function (e) {
						return (
							((e = {
								$$typeof: m,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: p, _context: e }),
							(e.Consumer = e)
						);
					}),
					(l.createElement = R),
					(l.createFactory = function (e) {
						var t = R.bind(null, e);
						return (t.type = e), t;
					}),
					(l.createRef = function () {
						return { current: null };
					}),
					(l.forwardRef = function (e) {
						return { $$typeof: g, render: e };
					}),
					(l.isValidElement = O),
					(l.lazy = function (e) {
						return {
							$$typeof: y,
							_payload: { _status: -1, _result: e },
							_init: M,
						};
					}),
					(l.memo = function (e, t) {
						return { $$typeof: v, type: e, compare: void 0 === t ? null : t };
					}),
					(l.startTransition = function (e) {
						var t = j.transition;
						j.transition = {};
						try {
							e();
						} finally {
							j.transition = t;
						}
					}),
					(l.unstable_act = function () {
						throw Error(
							"act(...) is not supported in production builds of React."
						);
					}),
					(l.useCallback = function (e, t) {
						return B.current.useCallback(e, t);
					}),
					(l.useContext = function (e) {
						return B.current.useContext(e);
					}),
					(l.useDebugValue = function () {}),
					(l.useDeferredValue = function (e) {
						return B.current.useDeferredValue(e);
					}),
					(l.useEffect = function (e, t) {
						return B.current.useEffect(e, t);
					}),
					(l.useId = function () {
						return B.current.useId();
					}),
					(l.useImperativeHandle = function (e, t, n) {
						return B.current.useImperativeHandle(e, t, n);
					}),
					(l.useInsertionEffect = function (e, t) {
						return B.current.useInsertionEffect(e, t);
					}),
					(l.useLayoutEffect = function (e, t) {
						return B.current.useLayoutEffect(e, t);
					}),
					(l.useMemo = function (e, t) {
						return B.current.useMemo(e, t);
					}),
					(l.useReducer = function (e, t, n) {
						return B.current.useReducer(e, t, n);
					}),
					(l.useRef = function (e) {
						return B.current.useRef(e);
					}),
					(l.useState = function (e) {
						return B.current.useState(e);
					}),
					(l.useSyncExternalStore = function (e, t, n) {
						return B.current.useSyncExternalStore(e, t, n);
					}),
					(l.useTransition = function () {
						return B.current.useTransition();
					}),
					(l.version = "18.2.0"),
					(s.exports = l);
				var H = s.exports;
				const F = i(H);
				/**
				 * @license React
				 * react-jsx-runtime.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */ var W = H,
					U = Symbol.for("react.element"),
					X = Symbol.for("react.fragment"),
					q = Object.prototype.hasOwnProperty,
					Y =
						W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					G = { key: !0, ref: !0, __self: !0, __source: !0 };
				function Q(e, t, n) {
					var o,
						i = {},
						r = null,
						a = null;
					for (o in (void 0 !== n && (r = "" + n),
					void 0 !== t.key && (r = "" + t.key),
					void 0 !== t.ref && (a = t.ref),
					t))
						q.call(t, o) && !G.hasOwnProperty(o) && (i[o] = t[o]);
					if (e && e.defaultProps)
						for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
					return {
						$$typeof: U,
						type: e,
						key: r,
						ref: a,
						props: i,
						_owner: Y.current,
					};
				}
				(a.Fragment = X), (a.jsx = Q), (a.jsxs = Q), (r.exports = a);
				var K = r.exports;
				const Z = K.Fragment,
					J = K.jsx,
					ee = K.jsxs;
				var te = { exports: {} },
					ne = {},
					oe = { exports: {} },
					ie = {};
				/**
				 * @license React
				 * scheduler.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				!(function (e) {
					function t(e, t) {
						var n = e.length;
						e.push(t);
						e: for (; 0 < n; ) {
							var o = (n - 1) >>> 1,
								r = e[o];
							if (!(0 < i(r, t))) break e;
							(e[o] = t), (e[n] = r), (n = o);
						}
					}
					function n(e) {
						return 0 === e.length ? null : e[0];
					}
					function o(e) {
						if (0 === e.length) return null;
						var t = e[0],
							n = e.pop();
						if (n !== t) {
							e[0] = n;
							e: for (var o = 0, r = e.length, a = r >>> 1; o < a; ) {
								var s = 2 * (o + 1) - 1,
									l = e[s],
									c = s + 1,
									d = e[c];
								if (0 > i(l, n))
									c < r && 0 > i(d, l)
										? ((e[o] = d), (e[c] = n), (o = c))
										: ((e[o] = l), (e[s] = n), (o = s));
								else {
									if (!(c < r && 0 > i(d, n))) break e;
									(e[o] = d), (e[c] = n), (o = c);
								}
							}
						}
						return t;
					}
					function i(e, t) {
						var n = e.sortIndex - t.sortIndex;
						return 0 !== n ? n : e.id - t.id;
					}
					if (
						"object" == typeof performance &&
						"function" == typeof performance.now
					) {
						var r = performance;
						e.unstable_now = function () {
							return r.now();
						};
					} else {
						var a = Date,
							s = a.now();
						e.unstable_now = function () {
							return a.now() - s;
						};
					}
					var l = [],
						c = [],
						d = 1,
						u = null,
						h = 3,
						f = !1,
						p = !1,
						m = !1,
						g = "function" == typeof setTimeout ? setTimeout : null,
						b = "function" == typeof clearTimeout ? clearTimeout : null,
						v = "undefined" != typeof setImmediate ? setImmediate : null;
					function y(e) {
						for (var i = n(c); null !== i; ) {
							if (null === i.callback) o(c);
							else {
								if (!(i.startTime <= e)) break;
								o(c), (i.sortIndex = i.expirationTime), t(l, i);
							}
							i = n(c);
						}
					}
					function w(e) {
						if (((m = !1), y(e), !p))
							if (null !== n(l)) (p = !0), R(x);
							else {
								var t = n(c);
								null !== t && O(w, t.startTime - e);
							}
					}
					function x(t, i) {
						(p = !1), m && ((m = !1), b(C), (C = -1)), (f = !0);
						var r = h;
						try {
							for (
								y(i), u = n(l);
								null !== u && (!(u.expirationTime > i) || (t && !I()));

							) {
								var a = u.callback;
								if ("function" == typeof a) {
									(u.callback = null), (h = u.priorityLevel);
									var s = a(u.expirationTime <= i);
									(i = e.unstable_now()),
										"function" == typeof s
											? (u.callback = s)
											: u === n(l) && o(l),
										y(i);
								} else o(l);
								u = n(l);
							}
							if (null !== u) var d = !0;
							else {
								var g = n(c);
								null !== g && O(w, g.startTime - i), (d = !1);
							}
							return d;
						} finally {
							(u = null), (h = r), (f = !1);
						}
					}
					"undefined" != typeof navigator &&
						void 0 !== navigator.scheduling &&
						void 0 !== navigator.scheduling.isInputPending &&
						navigator.scheduling.isInputPending.bind(navigator.scheduling);
					var k,
						E = !1,
						S = null,
						C = -1,
						$ = 5,
						z = -1;
					function I() {
						return !(e.unstable_now() - z < $);
					}
					function T() {
						if (null !== S) {
							var t = e.unstable_now();
							z = t;
							var n = !0;
							try {
								n = S(!0, t);
							} finally {
								n ? k() : ((E = !1), (S = null));
							}
						} else E = !1;
					}
					if ("function" == typeof v)
						k = function () {
							v(T);
						};
					else if ("undefined" != typeof MessageChannel) {
						var P = new MessageChannel(),
							L = P.port2;
						(P.port1.onmessage = T),
							(k = function () {
								L.postMessage(null);
							});
					} else
						k = function () {
							g(T, 0);
						};
					function R(e) {
						(S = e), E || ((E = !0), k());
					}
					function O(t, n) {
						C = g(function () {
							t(e.unstable_now());
						}, n);
					}
					(e.unstable_IdlePriority = 5),
						(e.unstable_ImmediatePriority = 1),
						(e.unstable_LowPriority = 4),
						(e.unstable_NormalPriority = 3),
						(e.unstable_Profiling = null),
						(e.unstable_UserBlockingPriority = 2),
						(e.unstable_cancelCallback = function (e) {
							e.callback = null;
						}),
						(e.unstable_continueExecution = function () {
							p || f || ((p = !0), R(x));
						}),
						(e.unstable_forceFrameRate = function (e) {
							0 > e || 125 < e
								? console.error(
										"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
								  )
								: ($ = 0 < e ? Math.floor(1e3 / e) : 5);
						}),
						(e.unstable_getCurrentPriorityLevel = function () {
							return h;
						}),
						(e.unstable_getFirstCallbackNode = function () {
							return n(l);
						}),
						(e.unstable_next = function (e) {
							switch (h) {
								case 1:
								case 2:
								case 3:
									var t = 3;
									break;
								default:
									t = h;
							}
							var n = h;
							h = t;
							try {
								return e();
							} finally {
								h = n;
							}
						}),
						(e.unstable_pauseExecution = function () {}),
						(e.unstable_requestPaint = function () {}),
						(e.unstable_runWithPriority = function (e, t) {
							switch (e) {
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
									break;
								default:
									e = 3;
							}
							var n = h;
							h = e;
							try {
								return t();
							} finally {
								h = n;
							}
						}),
						(e.unstable_scheduleCallback = function (o, i, r) {
							var a = e.unstable_now();
							switch (
								("object" == typeof r && null !== r
									? (r = "number" == typeof (r = r.delay) && 0 < r ? a + r : a)
									: (r = a),
								o)
							) {
								case 1:
									var s = -1;
									break;
								case 2:
									s = 250;
									break;
								case 5:
									s = 1073741823;
									break;
								case 4:
									s = 1e4;
									break;
								default:
									s = 5e3;
							}
							return (
								(o = {
									id: d++,
									callback: i,
									priorityLevel: o,
									startTime: r,
									expirationTime: (s = r + s),
									sortIndex: -1,
								}),
								r > a
									? ((o.sortIndex = r),
									  t(c, o),
									  null === n(l) &&
											o === n(c) &&
											(m ? (b(C), (C = -1)) : (m = !0), O(w, r - a)))
									: ((o.sortIndex = s), t(l, o), p || f || ((p = !0), R(x))),
								o
							);
						}),
						(e.unstable_shouldYield = I),
						(e.unstable_wrapCallback = function (e) {
							var t = h;
							return function () {
								var n = h;
								h = t;
								try {
									return e.apply(this, arguments);
								} finally {
									h = n;
								}
							};
						});
				})(ie),
					(oe.exports = ie);
				var re = oe.exports,
					ae = H,
					se = re;
				/**
				 * @license React
				 * react-dom.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */ function le(e) {
					for (
						var t =
								"https://reactjs.org/docs/error-decoder.html?invariant=" + e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += "&args[]=" + encodeURIComponent(arguments[n]);
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				var ce = new Set(),
					de = {};
				function ue(e, t) {
					he(e, t), he(e + "Capture", t);
				}
				function he(e, t) {
					for (de[e] = t, e = 0; e < t.length; e++) ce.add(t[e]);
				}
				var fe = !(
						"undefined" == typeof window ||
						void 0 === window.document ||
						void 0 === window.document.createElement
					),
					pe = Object.prototype.hasOwnProperty,
					me =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					ge = {},
					be = {};
				function ve(e, t, n, o, i, r, a) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = o),
						(this.attributeNamespace = i),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = r),
						(this.removeEmptyString = a);
				}
				var ye = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
					.split(" ")
					.forEach(function (e) {
						ye[e] = new ve(e, 0, !1, e, null, !1, !1);
					}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						ye[t] = new ve(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(
						function (e) {
							ye[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
						}
					),
					[
						"autoReverse",
						"externalResourcesRequired",
						"focusable",
						"preserveAlpha",
					].forEach(function (e) {
						ye[e] = new ve(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
						.split(" ")
						.forEach(function (e) {
							ye[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						ye[e] = new ve(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						ye[e] = new ve(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						ye[e] = new ve(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						ye[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var we = /[\-:]([a-z])/g;
				function xe(e) {
					return e[1].toUpperCase();
				}
				function ke(e, t, n, o) {
					var i = ye.hasOwnProperty(t) ? ye[t] : null;
					(null !== i
						? 0 !== i.type
						: o ||
						  !(2 < t.length) ||
						  ("o" !== t[0] && "O" !== t[0]) ||
						  ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, o) {
							if (
								null == t ||
								(function (e, t, n, o) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return (
												!o &&
												(null !== n
													? !n.acceptsBooleans
													: "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
													  "aria-" !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, o)
							)
								return !0;
							if (o) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, i, o) && (n = null),
						o || null === i
							? (function (e) {
									return (
										!!pe.call(be, e) ||
										(!pe.call(ge, e) &&
											(me.test(e) ? (be[e] = !0) : ((ge[e] = !0), !1)))
									);
							  })(t) &&
							  (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: i.mustUseProperty
							? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
							: ((t = i.attributeName),
							  (o = i.attributeNamespace),
							  null === n
									? e.removeAttribute(t)
									: ((n =
											3 === (i = i.type) || (4 === i && !0 === n)
												? ""
												: "" + n),
									  o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(we, xe);
						ye[t] = new ve(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
						.split(" ")
						.forEach(function (e) {
							var t = e.replace(we, xe);
							ye[t] = new ve(
								t,
								1,
								!1,
								e,
								"http://www.w3.org/1999/xlink",
								!1,
								!1
							);
						}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(we, xe);
						ye[t] = new ve(
							t,
							1,
							!1,
							e,
							"http://www.w3.org/XML/1998/namespace",
							!1,
							!1
						);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(ye.xlinkHref = new ve(
						"xlinkHref",
						1,
						!1,
						"xlink:href",
						"http://www.w3.org/1999/xlink",
						!0,
						!1
					)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var Ee = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					Se = Symbol.for("react.element"),
					Ce = Symbol.for("react.portal"),
					$e = Symbol.for("react.fragment"),
					ze = Symbol.for("react.strict_mode"),
					Ie = Symbol.for("react.profiler"),
					Te = Symbol.for("react.provider"),
					Pe = Symbol.for("react.context"),
					Le = Symbol.for("react.forward_ref"),
					Re = Symbol.for("react.suspense"),
					Oe = Symbol.for("react.suspense_list"),
					Ne = Symbol.for("react.memo"),
					_e = Symbol.for("react.lazy"),
					De = Symbol.for("react.offscreen"),
					Ae = Symbol.iterator;
				function Me(e) {
					return null === e || "object" != typeof e
						? null
						: "function" == typeof (e = (Ae && e[Ae]) || e["@@iterator"])
						? e
						: null;
				}
				var Be,
					je = Object.assign;
				function Ve(e) {
					if (void 0 === Be)
						try {
							throw Error();
						} catch (Sh) {
							var t = Sh.stack.trim().match(/\n( *(at )?)/);
							Be = (t && t[1]) || "";
						}
					return "\n" + Be + e;
				}
				var He = !1;
				function Fe(e, t) {
					if (!e || He) return "";
					He = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" == typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (Lh) {
									var o = Lh;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (Lh) {
									o = Lh;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (Lh) {
								o = Lh;
							}
							e();
						}
					} catch (Lh) {
						if (Lh && o && "string" == typeof Lh.stack) {
							for (
								var i = Lh.stack.split("\n"),
									r = o.stack.split("\n"),
									a = i.length - 1,
									s = r.length - 1;
								1 <= a && 0 <= s && i[a] !== r[s];

							)
								s--;
							for (; 1 <= a && 0 <= s; a--, s--)
								if (i[a] !== r[s]) {
									if (1 !== a || 1 !== s)
										do {
											if ((a--, 0 > --s || i[a] !== r[s])) {
												var l = "\n" + i[a].replace(" at new ", " at ");
												return (
													e.displayName &&
														l.includes("<anonymous>") &&
														(l = l.replace("<anonymous>", e.displayName)),
													l
												);
											}
										} while (1 <= a && 0 <= s);
									break;
								}
						}
					} finally {
						(He = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? Ve(e) : "";
				}
				function We(e) {
					switch (e.tag) {
						case 5:
							return Ve(e.type);
						case 16:
							return Ve("Lazy");
						case 13:
							return Ve("Suspense");
						case 19:
							return Ve("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = Fe(e.type, !1));
						case 11:
							return (e = Fe(e.type.render, !1));
						case 1:
							return (e = Fe(e.type, !0));
						default:
							return "";
					}
				}
				function Ue(e) {
					if (null == e) return null;
					if ("function" == typeof e) return e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case $e:
							return "Fragment";
						case Ce:
							return "Portal";
						case Ie:
							return "Profiler";
						case ze:
							return "StrictMode";
						case Re:
							return "Suspense";
						case Oe:
							return "SuspenseList";
					}
					if ("object" == typeof e)
						switch (e.$$typeof) {
							case Pe:
								return (e.displayName || "Context") + ".Consumer";
							case Te:
								return (e._context.displayName || "Context") + ".Provider";
							case Le:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !== (e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case Ne:
								return null !== (t = e.displayName || null)
									? t
									: Ue(e.type) || "Memo";
							case _e:
								(t = e._payload), (e = e._init);
								try {
									return Ue(e(t));
								} catch (Sh) {}
						}
					return null;
				}
				function Xe(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ""),
								t.displayName ||
									("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
							);
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return Ue(t);
						case 8:
							return t === ze ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" == typeof t)
								return t.displayName || t.name || null;
							if ("string" == typeof t) return t;
					}
					return null;
				}
				function qe(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function Ye(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function Ge(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = Ye(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								o = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								void 0 !== n &&
								"function" == typeof n.get &&
								"function" == typeof n.set
							) {
								var i = n.get,
									r = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return i.call(this);
										},
										set: function (e) {
											(o = "" + e), r.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return o;
										},
										setValue: function (e) {
											o = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function Qe(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						o = "";
					return (
						e && (o = Ye(e) ? (e.checked ? "true" : "false") : e.value),
						(e = o) !== n && (t.setValue(e), !0)
					);
				}
				function Ke(e) {
					if (
						void 0 ===
						(e = e || ("undefined" != typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (Eh) {
						return e.body;
					}
				}
				function Ze(e, t) {
					var n = t.checked;
					return je({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function Je(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						o = null != t.checked ? t.checked : t.defaultChecked;
					(n = qe(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: o,
							initialValue: n,
							controlled:
								"checkbox" === t.type || "radio" === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function et(e, t) {
					null != (t = t.checked) && ke(e, "checked", t, !1);
				}
				function tt(e, t) {
					et(e, t);
					var n = qe(t.value),
						o = t.type;
					if (null != n)
						"number" === o
							? ((0 === n && "" === e.value) || e.value != n) &&
							  (e.value = "" + n)
							: e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === o || "reset" === o)
						return void e.removeAttribute("value");
					t.hasOwnProperty("value")
						? ot(e, t.type, n)
						: t.hasOwnProperty("defaultValue") &&
						  ot(e, t.type, qe(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function nt(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var o = t.type;
						if (
							!(
								("submit" !== o && "reset" !== o) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = "" + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						"" !== n && (e.name = n);
				}
				function ot(e, t, n) {
					("number" === t && Ke(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = "" + e._wrapperState.initialValue)
							: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var it = Array.isArray;
				function rt(e, t, n, o) {
					if (((e = e.options), t)) {
						t = {};
						for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
						for (n = 0; n < e.length; n++)
							(i = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== i && (e[n].selected = i),
								i && o && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + qe(n), t = null, i = 0; i < e.length; i++) {
							if (e[i].value === n)
								return (
									(e[i].selected = !0), void (o && (e[i].defaultSelected = !0))
								);
							null !== t || e[i].disabled || (t = e[i]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function at(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(le(91));
					return je({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue,
					});
				}
				function st(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(le(92));
							if (it(n)) {
								if (1 < n.length) throw Error(le(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = { initialValue: qe(n) };
				}
				function lt(e, t) {
					var n = qe(t.value),
						o = qe(t.defaultValue);
					null != n &&
						((n = "" + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != o && (e.defaultValue = "" + o);
				}
				function ct(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						"" !== t &&
						null !== t &&
						(e.value = t);
				}
				function dt(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function ut(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e
						? dt(t)
						: "http://www.w3.org/2000/svg" === e && "foreignObject" === t
						? "http://www.w3.org/1999/xhtml"
						: e;
				}
				var ht,
					ft,
					pt =
						((ft = function (e, t) {
							if (
								"http://www.w3.org/2000/svg" !== e.namespaceURI ||
								"innerHTML" in e
							)
								e.innerHTML = t;
							else {
								for (
									(ht = ht || document.createElement("div")).innerHTML =
										"<svg>" + t.valueOf().toString() + "</svg>",
										t = ht.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, o) {
									MSApp.execUnsafeLocalFunction(function () {
										return ft(e, t);
									});
							  }
							: ft);
				function mt(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var gt = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					bt = ["Webkit", "ms", "Moz", "O"];
				function vt(e, t, n) {
					return null == t || "boolean" == typeof t || "" === t
						? ""
						: n ||
						  "number" != typeof t ||
						  0 === t ||
						  (gt.hasOwnProperty(e) && gt[e])
						? ("" + t).trim()
						: t + "px";
				}
				function yt(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var o = 0 === n.indexOf("--"),
								i = vt(n, t[n], o);
							"float" === n && (n = "cssFloat"),
								o ? e.setProperty(n, i) : (e[n] = i);
						}
				}
				Object.keys(gt).forEach(function (e) {
					bt.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(gt[t] = gt[e]);
					});
				});
				var wt = je(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					}
				);
				function xt(e, t) {
					if (t) {
						if (
							wt[e] &&
							(null != t.children || null != t.dangerouslySetInnerHTML)
						)
							throw Error(le(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(le(60));
							if (
								"object" != typeof t.dangerouslySetInnerHTML ||
								!("__html" in t.dangerouslySetInnerHTML)
							)
								throw Error(le(61));
						}
						if (null != t.style && "object" != typeof t.style)
							throw Error(le(62));
					}
				}
				function kt(e, t) {
					if (-1 === e.indexOf("-")) return "string" == typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var Et = null;
				function St(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var Ct = null,
					$t = null,
					zt = null;
				function It(e) {
					if ((e = Er(e))) {
						if ("function" != typeof Ct) throw Error(le(280));
						var t = e.stateNode;
						t && ((t = Cr(t)), Ct(e.stateNode, e.type, t));
					}
				}
				function Tt(e) {
					$t ? (zt ? zt.push(e) : (zt = [e])) : ($t = e);
				}
				function Pt() {
					if ($t) {
						var e = $t,
							t = zt;
						if (((zt = $t = null), It(e), t))
							for (e = 0; e < t.length; e++) It(t[e]);
					}
				}
				function Lt(e, t) {
					return e(t);
				}
				function Rt() {}
				var Ot = !1;
				function Nt(e, t, n) {
					if (Ot) return e(t, n);
					Ot = !0;
					try {
						return Lt(e, t, n);
					} finally {
						(Ot = !1), (null !== $t || null !== zt) && (Rt(), Pt());
					}
				}
				function _t(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var o = Cr(n);
					if (null === o) return null;
					n = o[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(o = !o.disabled) ||
								(o = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !o);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" != typeof n) throw Error(le(231, t, typeof n));
					return n;
				}
				var Dt = !1;
				if (fe)
					try {
						var At = {};
						Object.defineProperty(At, "passive", {
							get: function () {
								Dt = !0;
							},
						}),
							window.addEventListener("test", At, At),
							window.removeEventListener("test", At, At);
					} catch (ft) {
						Dt = !1;
					}
				function Mt(e, t, n, o, i, r, a, s, l) {
					var c = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, c);
					} catch (Rh) {
						this.onError(Rh);
					}
				}
				var Bt = !1,
					jt = null,
					Vt = !1,
					Ht = null,
					Ft = {
						onError: function (e) {
							(Bt = !0), (jt = e);
						},
					};
				function Wt(e, t, n, o, i, r, a, s, l) {
					(Bt = !1), (jt = null), Mt.apply(Ft, arguments);
				}
				function Ut(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Xt(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function qt(e) {
					if (Ut(e) !== e) throw Error(le(188));
				}
				function Yt(e) {
					return (
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Ut(e))) throw Error(le(188));
								return t !== e ? null : e;
							}
							for (var n = e, o = t; ; ) {
								var i = n.return;
								if (null === i) break;
								var r = i.alternate;
								if (null === r) {
									if (null !== (o = i.return)) {
										n = o;
										continue;
									}
									break;
								}
								if (i.child === r.child) {
									for (r = i.child; r; ) {
										if (r === n) return qt(i), e;
										if (r === o) return qt(i), t;
										r = r.sibling;
									}
									throw Error(le(188));
								}
								if (n.return !== o.return) (n = i), (o = r);
								else {
									for (var a = !1, s = i.child; s; ) {
										if (s === n) {
											(a = !0), (n = i), (o = r);
											break;
										}
										if (s === o) {
											(a = !0), (o = i), (n = r);
											break;
										}
										s = s.sibling;
									}
									if (!a) {
										for (s = r.child; s; ) {
											if (s === n) {
												(a = !0), (n = r), (o = i);
												break;
											}
											if (s === o) {
												(a = !0), (o = r), (n = i);
												break;
											}
											s = s.sibling;
										}
										if (!a) throw Error(le(189));
									}
								}
								if (n.alternate !== o) throw Error(le(190));
							}
							if (3 !== n.tag) throw Error(le(188));
							return n.stateNode.current === n ? e : t;
						})(e)),
						null !== e ? Gt(e) : null
					);
				}
				function Gt(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = Gt(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Qt = se.unstable_scheduleCallback,
					Kt = se.unstable_cancelCallback,
					Zt = se.unstable_shouldYield,
					Jt = se.unstable_requestPaint,
					en = se.unstable_now,
					tn = se.unstable_getCurrentPriorityLevel,
					nn = se.unstable_ImmediatePriority,
					on = se.unstable_UserBlockingPriority,
					rn = se.unstable_NormalPriority,
					an = se.unstable_LowPriority,
					sn = se.unstable_IdlePriority,
					ln = null,
					cn = null;
				var dn = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((un(e) / hn) | 0)) | 0;
						  },
					un = Math.log,
					hn = Math.LN2;
				var fn = 64,
					pn = 4194304;
				function mn(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function gn(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var o = 0,
						i = e.suspendedLanes,
						r = e.pingedLanes,
						a = 268435455 & n;
					if (0 !== a) {
						var s = a & ~i;
						0 !== s ? (o = mn(s)) : 0 !== (r &= a) && (o = mn(r));
					} else 0 !== (a = n & ~i) ? (o = mn(a)) : 0 !== r && (o = mn(r));
					if (0 === o) return 0;
					if (
						0 !== t &&
						t !== o &&
						0 == (t & i) &&
						((i = o & -o) >= (r = t & -t) || (16 === i && 0 != (4194240 & r)))
					)
						return t;
					if ((0 != (4 & o) && (o |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= o; 0 < t; )
							(i = 1 << (n = 31 - dn(t))), (o |= e[n]), (t &= ~i);
					return o;
				}
				function bn(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function vn(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
						? 1073741824
						: 0;
				}
				function yn() {
					var e = fn;
					return 0 == (4194240 & (fn <<= 1)) && (fn = 64), e;
				}
				function wn(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function xn(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - dn(t))] = n);
				}
				function kn(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var o = 31 - dn(n),
							i = 1 << o;
						(i & t) | (e[o] & t) && (e[o] |= t), (n &= ~i);
					}
				}
				var En = 0;
				function Sn(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 != (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var Cn,
					$n,
					zn,
					In,
					Tn,
					Pn = !1,
					Ln = [],
					Rn = null,
					On = null,
					Nn = null,
					_n = new Map(),
					Dn = new Map(),
					An = [],
					Mn =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
							" "
						);
				function Bn(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Rn = null;
							break;
						case "dragenter":
						case "dragleave":
							On = null;
							break;
						case "mouseover":
						case "mouseout":
							Nn = null;
							break;
						case "pointerover":
						case "pointerout":
							_n.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Dn.delete(t.pointerId);
					}
				}
				function jn(e, t, n, o, i, r) {
					return null === e || e.nativeEvent !== r
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: o,
								nativeEvent: r,
								targetContainers: [i],
						  }),
						  null !== t && null !== (t = Er(t)) && $n(t),
						  e)
						: ((e.eventSystemFlags |= o),
						  (t = e.targetContainers),
						  null !== i && -1 === t.indexOf(i) && t.push(i),
						  e);
				}
				function Vn(e) {
					var t = kr(e.target);
					if (null !== t) {
						var n = Ut(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Xt(n)))
									return (
										(e.blockedOn = t),
										void Tn(e.priority, function () {
											zn(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Hn(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Jn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n)
							return null !== (t = Er(n)) && $n(t), (e.blockedOn = n), !1;
						var o = new (n = e.nativeEvent).constructor(n.type, n);
						(Et = o), n.target.dispatchEvent(o), (Et = null), t.shift();
					}
					return !0;
				}
				function Fn(e, t, n) {
					Hn(e) && n.delete(t);
				}
				function Wn() {
					(Pn = !1),
						null !== Rn && Hn(Rn) && (Rn = null),
						null !== On && Hn(On) && (On = null),
						null !== Nn && Hn(Nn) && (Nn = null),
						_n.forEach(Fn),
						Dn.forEach(Fn);
				}
				function Un(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Pn ||
							((Pn = !0),
							se.unstable_scheduleCallback(se.unstable_NormalPriority, Wn)));
				}
				function Xn(e) {
					function t(t) {
						return Un(t, e);
					}
					if (0 < Ln.length) {
						Un(Ln[0], e);
						for (var n = 1; n < Ln.length; n++) {
							var o = Ln[n];
							o.blockedOn === e && (o.blockedOn = null);
						}
					}
					for (
						null !== Rn && Un(Rn, e),
							null !== On && Un(On, e),
							null !== Nn && Un(Nn, e),
							_n.forEach(t),
							Dn.forEach(t),
							n = 0;
						n < An.length;
						n++
					)
						(o = An[n]).blockedOn === e && (o.blockedOn = null);
					for (; 0 < An.length && null === (n = An[0]).blockedOn; )
						Vn(n), null === n.blockedOn && An.shift();
				}
				var qn = Ee.ReactCurrentBatchConfig,
					Yn = !0;
				function Gn(e, t, n, o) {
					var i = En,
						r = qn.transition;
					qn.transition = null;
					try {
						(En = 1), Kn(e, t, n, o);
					} finally {
						(En = i), (qn.transition = r);
					}
				}
				function Qn(e, t, n, o) {
					var i = En,
						r = qn.transition;
					qn.transition = null;
					try {
						(En = 4), Kn(e, t, n, o);
					} finally {
						(En = i), (qn.transition = r);
					}
				}
				function Kn(e, t, n, o) {
					if (Yn) {
						var i = Jn(e, t, n, o);
						if (null === i) Yi(e, t, o, Zn, n), Bn(e, o);
						else if (
							(function (e, t, n, o, i) {
								switch (t) {
									case "focusin":
										return (Rn = jn(Rn, e, t, n, o, i)), !0;
									case "dragenter":
										return (On = jn(On, e, t, n, o, i)), !0;
									case "mouseover":
										return (Nn = jn(Nn, e, t, n, o, i)), !0;
									case "pointerover":
										var r = i.pointerId;
										return _n.set(r, jn(_n.get(r) || null, e, t, n, o, i)), !0;
									case "gotpointercapture":
										return (
											(r = i.pointerId),
											Dn.set(r, jn(Dn.get(r) || null, e, t, n, o, i)),
											!0
										);
								}
								return !1;
							})(i, e, t, n, o)
						)
							o.stopPropagation();
						else if ((Bn(e, o), 4 & t && -1 < Mn.indexOf(e))) {
							for (; null !== i; ) {
								var r = Er(i);
								if (
									(null !== r && Cn(r),
									null === (r = Jn(e, t, n, o)) && Yi(e, t, o, Zn, n),
									r === i)
								)
									break;
								i = r;
							}
							null !== i && o.stopPropagation();
						} else Yi(e, t, o, null, n);
					}
				}
				var Zn = null;
				function Jn(e, t, n, o) {
					if (((Zn = null), null !== (e = kr((e = St(o))))))
						if (null === (t = Ut(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Xt(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Zn = e), null;
				}
				function eo(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (tn()) {
								case nn:
									return 1;
								case on:
									return 4;
								case rn:
								case an:
									return 16;
								case sn:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var to = null,
					no = null,
					oo = null;
				function io() {
					if (oo) return oo;
					var e,
						t,
						n = no,
						o = n.length,
						i = "value" in to ? to.value : to.textContent,
						r = i.length;
					for (e = 0; e < o && n[e] === i[e]; e++);
					var a = o - e;
					for (t = 1; t <= a && n[o - t] === i[r - t]; t++);
					return (oo = i.slice(e, 1 < t ? 1 - t : void 0));
				}
				function ro(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function ao() {
					return !0;
				}
				function so() {
					return !1;
				}
				function lo(e) {
					function t(t, n, o, i, r) {
						for (var a in ((this._reactName = t),
						(this._targetInst = o),
						(this.type = n),
						(this.nativeEvent = i),
						(this.target = r),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
						return (
							(this.isDefaultPrevented = (
								null != i.defaultPrevented
									? i.defaultPrevented
									: !1 === i.returnValue
							)
								? ao
								: so),
							(this.isPropagationStopped = so),
							this
						);
					}
					return (
						je(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" != typeof e.returnValue && (e.returnValue = !1),
									(this.isDefaultPrevented = ao));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" != typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = ao));
							},
							persist: function () {},
							isPersistent: ao,
						}),
						t
					);
				}
				var co,
					uo,
					ho,
					fo = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					po = lo(fo),
					mo = je({}, fo, { view: 0, detail: 0 }),
					go = lo(mo),
					bo = je({}, mo, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: To,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== ho &&
										(ho && "mousemove" === e.type
											? ((co = e.screenX - ho.screenX),
											  (uo = e.screenY - ho.screenY))
											: (uo = co = 0),
										(ho = e)),
								  co);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : uo;
						},
					}),
					vo = lo(bo),
					yo = lo(je({}, bo, { dataTransfer: 0 })),
					wo = lo(je({}, mo, { relatedTarget: 0 })),
					xo = lo(
						je({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					ko = je({}, fo, {
						clipboardData: function (e) {
							return "clipboardData" in e
								? e.clipboardData
								: window.clipboardData;
						},
					}),
					Eo = lo(ko),
					So = lo(je({}, fo, { data: 0 })),
					Co = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					$o = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					zo = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function Io(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = zo[e]) && !!t[e];
				}
				function To() {
					return Io;
				}
				var Po = je({}, mo, {
						key: function (e) {
							if (e.key) {
								var t = Co[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type
								? 13 === (e = ro(e))
									? "Enter"
									: String.fromCharCode(e)
								: "keydown" === e.type || "keyup" === e.type
								? $o[e.keyCode] || "Unidentified"
								: "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: To,
						charCode: function (e) {
							return "keypress" === e.type ? ro(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type
								? ro(e)
								: "keydown" === e.type || "keyup" === e.type
								? e.keyCode
								: 0;
						},
					}),
					Lo = lo(Po),
					Ro = lo(
						je({}, bo, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					Oo = lo(
						je({}, mo, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: To,
						})
					),
					No = lo(
						je({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					_o = je({}, bo, {
						deltaX: function (e) {
							return "deltaX" in e
								? e.deltaX
								: "wheelDeltaX" in e
								? -e.wheelDeltaX
								: 0;
						},
						deltaY: function (e) {
							return "deltaY" in e
								? e.deltaY
								: "wheelDeltaY" in e
								? -e.wheelDeltaY
								: "wheelDelta" in e
								? -e.wheelDelta
								: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					Do = lo(_o),
					Ao = [9, 13, 27, 32],
					Mo = fe && "CompositionEvent" in window,
					Bo = null;
				fe && "documentMode" in document && (Bo = document.documentMode);
				var jo = fe && "TextEvent" in window && !Bo,
					Vo = fe && (!Mo || (Bo && 8 < Bo && 11 >= Bo)),
					Ho = String.fromCharCode(32),
					Fo = !1;
				function Wo(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Ao.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Uo(e) {
					return "object" == typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var Xo = !1;
				var qo = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function Yo(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!qo[e.type] : "textarea" === t;
				}
				function Go(e, t, n, o) {
					Tt(o),
						0 < (t = Qi(t, "onChange")).length &&
							((n = new po("onChange", "change", null, n, o)),
							e.push({ event: n, listeners: t }));
				}
				var Qo = null,
					Ko = null;
				function Zo(e) {
					Hi(e, 0);
				}
				function Jo(e) {
					if (Qe(Sr(e))) return e;
				}
				function ei(e, t) {
					if ("change" === e) return t;
				}
				var ti = !1;
				if (fe) {
					var ni;
					if (fe) {
						var oi = "oninput" in document;
						if (!oi) {
							var ii = document.createElement("div");
							ii.setAttribute("oninput", "return;"),
								(oi = "function" == typeof ii.oninput);
						}
						ni = oi;
					} else ni = !1;
					ti = ni && (!document.documentMode || 9 < document.documentMode);
				}
				function ri() {
					Qo && (Qo.detachEvent("onpropertychange", ai), (Ko = Qo = null));
				}
				function ai(e) {
					if ("value" === e.propertyName && Jo(Ko)) {
						var t = [];
						Go(t, Ko, e, St(e)), Nt(Zo, t);
					}
				}
				function si(e, t, n) {
					"focusin" === e
						? (ri(), (Ko = n), (Qo = t).attachEvent("onpropertychange", ai))
						: "focusout" === e && ri();
				}
				function li(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e)
						return Jo(Ko);
				}
				function ci(e, t) {
					if ("click" === e) return Jo(t);
				}
				function di(e, t) {
					if ("input" === e || "change" === e) return Jo(t);
				}
				var ui =
					"function" == typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
								);
						  };
				function hi(e, t) {
					if (ui(e, t)) return !0;
					if (
						"object" != typeof e ||
						null === e ||
						"object" != typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						o = Object.keys(t);
					if (n.length !== o.length) return !1;
					for (o = 0; o < n.length; o++) {
						var i = n[o];
						if (!pe.call(t, i) || !ui(e[i], t[i])) return !1;
					}
					return !0;
				}
				function fi(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function pi(e, t) {
					var n,
						o = fi(e);
					for (e = 0; o; ) {
						if (3 === o.nodeType) {
							if (((n = e + o.textContent.length), e <= t && n >= t))
								return { node: o, offset: t - e };
							e = n;
						}
						e: {
							for (; o; ) {
								if (o.nextSibling) {
									o = o.nextSibling;
									break e;
								}
								o = o.parentNode;
							}
							o = void 0;
						}
						o = fi(o);
					}
				}
				function mi(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? mi(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function gi() {
					for (var e = window, t = Ke(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" == typeof t.contentWindow.location.href;
						} catch (Ch) {
							n = !1;
						}
						if (!n) break;
						t = Ke((e = t.contentWindow).document);
					}
					return t;
				}
				function bi(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function vi(e) {
					var t = gi(),
						n = e.focusedElem,
						o = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						mi(n.ownerDocument.documentElement, n)
					) {
						if (null !== o && bi(n))
							if (
								((t = o.start),
								void 0 === (e = o.end) && (e = t),
								"selectionStart" in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(e, n.value.length));
							else if (
								(e =
									((t = n.ownerDocument || document) && t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var i = n.textContent.length,
									r = Math.min(o.start, i);
								(o = void 0 === o.end ? r : Math.min(o.end, i)),
									!e.extend && r > o && ((i = o), (o = r), (r = i)),
									(i = pi(n, r));
								var a = pi(n, o);
								i &&
									a &&
									(1 !== e.rangeCount ||
										e.anchorNode !== i.node ||
										e.anchorOffset !== i.offset ||
										e.focusNode !== a.node ||
										e.focusOffset !== a.offset) &&
									((t = t.createRange()).setStart(i.node, i.offset),
									e.removeAllRanges(),
									r > o
										? (e.addRange(t), e.extend(a.node, a.offset))
										: (t.setEnd(a.node, a.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for (
							"function" == typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var yi =
						fe && "documentMode" in document && 11 >= document.documentMode,
					wi = null,
					xi = null,
					ki = null,
					Ei = !1;
				function Si(e, t, n) {
					var o =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					Ei ||
						null == wi ||
						wi !== Ke(o) ||
						("selectionStart" in (o = wi) && bi(o)
							? (o = { start: o.selectionStart, end: o.selectionEnd })
							: (o = {
									anchorNode: (o = (
										(o.ownerDocument && o.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: o.anchorOffset,
									focusNode: o.focusNode,
									focusOffset: o.focusOffset,
							  }),
						(ki && hi(ki, o)) ||
							((ki = o),
							0 < (o = Qi(xi, "onSelect")).length &&
								((t = new po("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: o }),
								(t.target = wi))));
				}
				function Ci(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var $i = {
						animationend: Ci("Animation", "AnimationEnd"),
						animationiteration: Ci("Animation", "AnimationIteration"),
						animationstart: Ci("Animation", "AnimationStart"),
						transitionend: Ci("Transition", "TransitionEnd"),
					},
					zi = {},
					Ii = {};
				function Ti(e) {
					if (zi[e]) return zi[e];
					if (!$i[e]) return e;
					var t,
						n = $i[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Ii) return (zi[e] = n[t]);
					return e;
				}
				fe &&
					((Ii = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete $i.animationend.animation,
						delete $i.animationiteration.animation,
						delete $i.animationstart.animation),
					"TransitionEvent" in window || delete $i.transitionend.transition);
				var Pi = Ti("animationend"),
					Li = Ti("animationiteration"),
					Ri = Ti("animationstart"),
					Oi = Ti("transitionend"),
					Ni = new Map(),
					_i =
						"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" "
						);
				function Di(e, t) {
					Ni.set(e, t), ue(t, [e]);
				}
				for (var Ai = 0; Ai < _i.length; Ai++) {
					var Mi = _i[Ai];
					Di(Mi.toLowerCase(), "on" + (Mi[0].toUpperCase() + Mi.slice(1)));
				}
				Di(Pi, "onAnimationEnd"),
					Di(Li, "onAnimationIteration"),
					Di(Ri, "onAnimationStart"),
					Di("dblclick", "onDoubleClick"),
					Di("focusin", "onFocus"),
					Di("focusout", "onBlur"),
					Di(Oi, "onTransitionEnd"),
					he("onMouseEnter", ["mouseout", "mouseover"]),
					he("onMouseLeave", ["mouseout", "mouseover"]),
					he("onPointerEnter", ["pointerout", "pointerover"]),
					he("onPointerLeave", ["pointerout", "pointerover"]),
					ue(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					ue(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					ue("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					ue(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					ue(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					ue(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var Bi =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					ji = new Set(
						"cancel close invalid load scroll toggle".split(" ").concat(Bi)
					);
				function Vi(e, t, n) {
					var o = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, o, i, r, a, s, l) {
							if ((Wt.apply(this, arguments), Bt)) {
								if (!Bt) throw Error(le(198));
								var c = jt;
								(Bt = !1), (jt = null), Vt || ((Vt = !0), (Ht = c));
							}
						})(o, t, void 0, e),
						(e.currentTarget = null);
				}
				function Hi(e, t) {
					t = 0 != (4 & t);
					for (var n = 0; n < e.length; n++) {
						var o = e[n],
							i = o.event;
						o = o.listeners;
						e: {
							var r = void 0;
							if (t)
								for (var a = o.length - 1; 0 <= a; a--) {
									var s = o[a],
										l = s.instance,
										c = s.currentTarget;
									if (((s = s.listener), l !== r && i.isPropagationStopped()))
										break e;
									Vi(i, s, c), (r = l);
								}
							else
								for (a = 0; a < o.length; a++) {
									if (
										((l = (s = o[a]).instance),
										(c = s.currentTarget),
										(s = s.listener),
										l !== r && i.isPropagationStopped())
									)
										break e;
									Vi(i, s, c), (r = l);
								}
						}
					}
					if (Vt) throw ((e = Ht), (Vt = !1), (Ht = null), e);
				}
				function Fi(e, t) {
					var n = t[yr];
					void 0 === n && (n = t[yr] = new Set());
					var o = e + "__bubble";
					n.has(o) || (qi(t, e, 2, !1), n.add(o));
				}
				function Wi(e, t, n) {
					var o = 0;
					t && (o |= 4), qi(n, e, o, t);
				}
				var Ui = "_reactListening" + Math.random().toString(36).slice(2);
				function Xi(e) {
					if (!e[Ui]) {
						(e[Ui] = !0),
							ce.forEach(function (t) {
								"selectionchange" !== t &&
									(ji.has(t) || Wi(t, !1, e), Wi(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ui] || ((t[Ui] = !0), Wi("selectionchange", !1, t));
					}
				}
				function qi(e, t, n, o) {
					switch (eo(t)) {
						case 1:
							var i = Gn;
							break;
						case 4:
							i = Qn;
							break;
						default:
							i = Kn;
					}
					(n = i.bind(null, t, n, e)),
						(i = void 0),
						!Dt ||
							("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
							(i = !0),
						o
							? void 0 !== i
								? e.addEventListener(t, n, { capture: !0, passive: i })
								: e.addEventListener(t, n, !0)
							: void 0 !== i
							? e.addEventListener(t, n, { passive: i })
							: e.addEventListener(t, n, !1);
				}
				function Yi(e, t, n, o, i) {
					var r = o;
					if (0 == (1 & t) && 0 == (2 & t) && null !== o)
						e: for (;;) {
							if (null === o) return;
							var a = o.tag;
							if (3 === a || 4 === a) {
								var s = o.stateNode.containerInfo;
								if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
								if (4 === a)
									for (a = o.return; null !== a; ) {
										var l = a.tag;
										if (
											(3 === l || 4 === l) &&
											((l = a.stateNode.containerInfo) === i ||
												(8 === l.nodeType && l.parentNode === i))
										)
											return;
										a = a.return;
									}
								for (; null !== s; ) {
									if (null === (a = kr(s))) return;
									if (5 === (l = a.tag) || 6 === l) {
										o = r = a;
										continue e;
									}
									s = s.parentNode;
								}
							}
							o = o.return;
						}
					Nt(function () {
						var o = r,
							i = St(n),
							a = [];
						e: {
							var s = Ni.get(e);
							if (void 0 !== s) {
								var l = po,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === ro(n)) break e;
									case "keydown":
									case "keyup":
										l = Lo;
										break;
									case "focusin":
										(c = "focus"), (l = wo);
										break;
									case "focusout":
										(c = "blur"), (l = wo);
										break;
									case "beforeblur":
									case "afterblur":
										l = wo;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = vo;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = yo;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = Oo;
										break;
									case Pi:
									case Li:
									case Ri:
										l = xo;
										break;
									case Oi:
										l = No;
										break;
									case "scroll":
										l = go;
										break;
									case "wheel":
										l = Do;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = Eo;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = Ro;
								}
								var d = 0 != (4 & t),
									u = !d && "scroll" === e,
									h = d ? (null !== s ? s + "Capture" : null) : s;
								d = [];
								for (var f, p = o; null !== p; ) {
									var m = (f = p).stateNode;
									if (
										(5 === f.tag &&
											null !== m &&
											((f = m),
											null !== h &&
												null != (m = _t(p, h)) &&
												d.push(Gi(p, m, f))),
										u)
									)
										break;
									p = p.return;
								}
								0 < d.length &&
									((s = new l(s, c, null, n, i)),
									a.push({ event: s, listeners: d }));
							}
						}
						if (0 == (7 & t)) {
							if (
								((l = "mouseout" === e || "pointerout" === e),
								(!(s = "mouseover" === e || "pointerover" === e) ||
									n === Et ||
									!(c = n.relatedTarget || n.fromElement) ||
									(!kr(c) && !c[vr])) &&
									(l || s) &&
									((s =
										i.window === i
											? i
											: (s = i.ownerDocument)
											? s.defaultView || s.parentWindow
											: window),
									l
										? ((l = o),
										  null !==
												(c = (c = n.relatedTarget || n.toElement)
													? kr(c)
													: null) &&
												(c !== (u = Ut(c)) || (5 !== c.tag && 6 !== c.tag)) &&
												(c = null))
										: ((l = null), (c = o)),
									l !== c))
							) {
								if (
									((d = vo),
									(m = "onMouseLeave"),
									(h = "onMouseEnter"),
									(p = "mouse"),
									("pointerout" !== e && "pointerover" !== e) ||
										((d = Ro),
										(m = "onPointerLeave"),
										(h = "onPointerEnter"),
										(p = "pointer")),
									(u = null == l ? s : Sr(l)),
									(f = null == c ? s : Sr(c)),
									((s = new d(m, p + "leave", l, n, i)).target = u),
									(s.relatedTarget = f),
									(m = null),
									kr(i) === o &&
										(((d = new d(h, p + "enter", c, n, i)).target = f),
										(d.relatedTarget = u),
										(m = d)),
									(u = m),
									l && c)
								)
									e: {
										for (h = c, p = 0, f = d = l; f; f = Ki(f)) p++;
										for (f = 0, m = h; m; m = Ki(m)) f++;
										for (; 0 < p - f; ) (d = Ki(d)), p--;
										for (; 0 < f - p; ) (h = Ki(h)), f--;
										for (; p--; ) {
											if (d === h || (null !== h && d === h.alternate)) break e;
											(d = Ki(d)), (h = Ki(h));
										}
										d = null;
									}
								else d = null;
								null !== l && Zi(a, s, l, d, !1),
									null !== c && null !== u && Zi(a, u, c, d, !0);
							}
							if (
								"select" ===
									(l =
										(s = o ? Sr(o) : window).nodeName &&
										s.nodeName.toLowerCase()) ||
								("input" === l && "file" === s.type)
							)
								var g = ei;
							else if (Yo(s))
								if (ti) g = di;
								else {
									g = li;
									var b = si;
								}
							else
								(l = s.nodeName) &&
									"input" === l.toLowerCase() &&
									("checkbox" === s.type || "radio" === s.type) &&
									(g = ci);
							switch (
								(g && (g = g(e, o))
									? Go(a, g, n, i)
									: (b && b(e, s, o),
									  "focusout" === e &&
											(b = s._wrapperState) &&
											b.controlled &&
											"number" === s.type &&
											ot(s, "number", s.value)),
								(b = o ? Sr(o) : window),
								e)
							) {
								case "focusin":
									(Yo(b) || "true" === b.contentEditable) &&
										((wi = b), (xi = o), (ki = null));
									break;
								case "focusout":
									ki = xi = wi = null;
									break;
								case "mousedown":
									Ei = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(Ei = !1), Si(a, n, i);
									break;
								case "selectionchange":
									if (yi) break;
								case "keydown":
								case "keyup":
									Si(a, n, i);
							}
							var v;
							if (Mo)
								e: {
									switch (e) {
										case "compositionstart":
											var y = "onCompositionStart";
											break e;
										case "compositionend":
											y = "onCompositionEnd";
											break e;
										case "compositionupdate":
											y = "onCompositionUpdate";
											break e;
									}
									y = void 0;
								}
							else
								Xo
									? Wo(e, n) && (y = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (y = "onCompositionStart");
							y &&
								(Vo &&
									"ko" !== n.locale &&
									(Xo || "onCompositionStart" !== y
										? "onCompositionEnd" === y && Xo && (v = io())
										: ((no = "value" in (to = i) ? to.value : to.textContent),
										  (Xo = !0))),
								0 < (b = Qi(o, y)).length &&
									((y = new So(y, e, null, n, i)),
									a.push({ event: y, listeners: b }),
									v ? (y.data = v) : null !== (v = Uo(n)) && (y.data = v))),
								(v = jo
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Uo(t);
												case "keypress":
													return 32 !== t.which ? null : ((Fo = !0), Ho);
												case "textInput":
													return (e = t.data) === Ho && Fo ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Xo)
												return "compositionend" === e || (!Mo && Wo(e, t))
													? ((e = io()), (oo = no = to = null), (Xo = !1), e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return Vo && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (o = Qi(o, "onBeforeInput")).length &&
									((i = new So("onBeforeInput", "beforeinput", null, n, i)),
									a.push({ event: i, listeners: o }),
									(i.data = v));
						}
						Hi(a, t);
					});
				}
				function Gi(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Qi(e, t) {
					for (var n = t + "Capture", o = []; null !== e; ) {
						var i = e,
							r = i.stateNode;
						5 === i.tag &&
							null !== r &&
							((i = r),
							null != (r = _t(e, n)) && o.unshift(Gi(e, r, i)),
							null != (r = _t(e, t)) && o.push(Gi(e, r, i))),
							(e = e.return);
					}
					return o;
				}
				function Ki(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Zi(e, t, n, o, i) {
					for (var r = t._reactName, a = []; null !== n && n !== o; ) {
						var s = n,
							l = s.alternate,
							c = s.stateNode;
						if (null !== l && l === o) break;
						5 === s.tag &&
							null !== c &&
							((s = c),
							i
								? null != (l = _t(n, r)) && a.unshift(Gi(n, l, s))
								: i || (null != (l = _t(n, r)) && a.push(Gi(n, l, s)))),
							(n = n.return);
					}
					0 !== a.length && e.push({ event: t, listeners: a });
				}
				var Ji = /\r\n?/g,
					er = /\u0000|\uFFFD/g;
				function tr(e) {
					return ("string" == typeof e ? e : "" + e)
						.replace(Ji, "\n")
						.replace(er, "");
				}
				function nr(e, t, n) {
					if (((t = tr(t)), tr(e) !== t && n)) throw Error(le(425));
				}
				function or() {}
				var ir = null,
					rr = null;
				function ar(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" == typeof t.children ||
						"number" == typeof t.children ||
						("object" == typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var sr = "function" == typeof setTimeout ? setTimeout : void 0,
					lr = "function" == typeof clearTimeout ? clearTimeout : void 0,
					cr = "function" == typeof Promise ? Promise : void 0,
					dr =
						"function" == typeof queueMicrotask
							? queueMicrotask
							: void 0 !== cr
							? function (e) {
									return cr.resolve(null).then(e).catch(ur);
							  }
							: sr;
				function ur(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function hr(e, t) {
					var n = t,
						o = 0;
					do {
						var i = n.nextSibling;
						if ((e.removeChild(n), i && 8 === i.nodeType))
							if ("/$" === (n = i.data)) {
								if (0 === o) return e.removeChild(i), void Xn(t);
								o--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || o++;
						n = i;
					} while (n);
					Xn(t);
				}
				function fr(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function pr(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var mr = Math.random().toString(36).slice(2),
					gr = "__reactFiber$" + mr,
					br = "__reactProps$" + mr,
					vr = "__reactContainer$" + mr,
					yr = "__reactEvents$" + mr,
					wr = "__reactListeners$" + mr,
					xr = "__reactHandles$" + mr;
				function kr(e) {
					var t = e[gr];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[vr] || n[gr])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = pr(e); null !== e; ) {
									if ((n = e[gr])) return n;
									e = pr(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function Er(e) {
					return !(e = e[gr] || e[vr]) ||
						(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
						? null
						: e;
				}
				function Sr(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(le(33));
				}
				function Cr(e) {
					return e[br] || null;
				}
				var $r = [],
					zr = -1;
				function Ir(e) {
					return { current: e };
				}
				function Tr(e) {
					0 > zr || ((e.current = $r[zr]), ($r[zr] = null), zr--);
				}
				function Pr(e, t) {
					zr++, ($r[zr] = e.current), (e.current = t);
				}
				var Lr = {},
					Rr = Ir(Lr),
					Or = Ir(!1),
					Nr = Lr;
				function _r(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Lr;
					var o = e.stateNode;
					if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
						return o.__reactInternalMemoizedMaskedChildContext;
					var i,
						r = {};
					for (i in n) r[i] = t[i];
					return (
						o &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = r)),
						r
					);
				}
				function Dr(e) {
					return null != (e = e.childContextTypes);
				}
				function Ar() {
					Tr(Or), Tr(Rr);
				}
				function Mr(e, t, n) {
					if (Rr.current !== Lr) throw Error(le(168));
					Pr(Rr, t), Pr(Or, n);
				}
				function Br(e, t, n) {
					var o = e.stateNode;
					if (
						((t = t.childContextTypes), "function" != typeof o.getChildContext)
					)
						return n;
					for (var i in (o = o.getChildContext()))
						if (!(i in t)) throw Error(le(108, Xe(e) || "Unknown", i));
					return je({}, n, o);
				}
				function jr(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							Lr),
						(Nr = Rr.current),
						Pr(Rr, e),
						Pr(Or, Or.current),
						!0
					);
				}
				function Vr(e, t, n) {
					var o = e.stateNode;
					if (!o) throw Error(le(169));
					n
						? ((e = Br(e, t, Nr)),
						  (o.__reactInternalMemoizedMergedChildContext = e),
						  Tr(Or),
						  Tr(Rr),
						  Pr(Rr, e))
						: Tr(Or),
						Pr(Or, n);
				}
				var Hr = null,
					Fr = !1,
					Wr = !1;
				function Ur(e) {
					null === Hr ? (Hr = [e]) : Hr.push(e);
				}
				function Xr() {
					if (!Wr && null !== Hr) {
						Wr = !0;
						var e = 0,
							t = En;
						try {
							var n = Hr;
							for (En = 1; e < n.length; e++) {
								var o = n[e];
								do {
									o = o(!0);
								} while (null !== o);
							}
							(Hr = null), (Fr = !1);
						} catch ($h) {
							throw (null !== Hr && (Hr = Hr.slice(e + 1)), Qt(nn, Xr), $h);
						} finally {
							(En = t), (Wr = !1);
						}
					}
					return null;
				}
				var qr = [],
					Yr = 0,
					Gr = null,
					Qr = 0,
					Kr = [],
					Zr = 0,
					Jr = null,
					ea = 1,
					ta = "";
				function na(e, t) {
					(qr[Yr++] = Qr), (qr[Yr++] = Gr), (Gr = e), (Qr = t);
				}
				function oa(e, t, n) {
					(Kr[Zr++] = ea), (Kr[Zr++] = ta), (Kr[Zr++] = Jr), (Jr = e);
					var o = ea;
					e = ta;
					var i = 32 - dn(o) - 1;
					(o &= ~(1 << i)), (n += 1);
					var r = 32 - dn(t) + i;
					if (30 < r) {
						var a = i - (i % 5);
						(r = (o & ((1 << a) - 1)).toString(32)),
							(o >>= a),
							(i -= a),
							(ea = (1 << (32 - dn(t) + i)) | (n << i) | o),
							(ta = r + e);
					} else (ea = (1 << r) | (n << i) | o), (ta = e);
				}
				function ia(e) {
					null !== e.return && (na(e, 1), oa(e, 1, 0));
				}
				function ra(e) {
					for (; e === Gr; )
						(Gr = qr[--Yr]), (qr[Yr] = null), (Qr = qr[--Yr]), (qr[Yr] = null);
					for (; e === Jr; )
						(Jr = Kr[--Zr]),
							(Kr[Zr] = null),
							(ta = Kr[--Zr]),
							(Kr[Zr] = null),
							(ea = Kr[--Zr]),
							(Kr[Zr] = null);
				}
				var aa = null,
					sa = null,
					la = !1,
					ca = null;
				function da(e, t) {
					var n = _d(5, null, null, 0);
					(n.elementType = "DELETED"),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function ua(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !== t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t), (aa = e), (sa = fr(t.firstChild)), !0)
							);
						case 6:
							return (
								null !==
									(t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (aa = e), (sa = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Jr ? { id: ea, overflow: ta } : null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = _d(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(aa = e),
								(sa = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function ha(e) {
					return 0 != (1 & e.mode) && 0 == (128 & e.flags);
				}
				function fa(e) {
					if (la) {
						var t = sa;
						if (t) {
							var n = t;
							if (!ua(e, t)) {
								if (ha(e)) throw Error(le(418));
								t = fr(n.nextSibling);
								var o = aa;
								t && ua(e, t)
									? da(o, n)
									: ((e.flags = (-4097 & e.flags) | 2), (la = !1), (aa = e));
							}
						} else {
							if (ha(e)) throw Error(le(418));
							(e.flags = (-4097 & e.flags) | 2), (la = !1), (aa = e);
						}
					}
				}
				function pa(e) {
					for (
						e = e.return;
						null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

					)
						e = e.return;
					aa = e;
				}
				function ma(e) {
					if (e !== aa) return !1;
					if (!la) return pa(e), (la = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								"head" !== (t = e.type) &&
								"body" !== t &&
								!ar(e.type, e.memoizedProps)),
						t && (t = sa))
					) {
						if (ha(e)) throw (ga(), Error(le(418)));
						for (; t; ) da(e, t), (t = fr(t.nextSibling));
					}
					if ((pa(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(le(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											sa = fr(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							sa = null;
						}
					} else sa = aa ? fr(e.stateNode.nextSibling) : null;
					return !0;
				}
				function ga() {
					for (var e = sa; e; ) e = fr(e.nextSibling);
				}
				function ba() {
					(sa = aa = null), (la = !1);
				}
				function va(e) {
					null === ca ? (ca = [e]) : ca.push(e);
				}
				var ya = Ee.ReactCurrentBatchConfig;
				function wa(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = je({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var xa = Ir(null),
					ka = null,
					Ea = null,
					Sa = null;
				function Ca() {
					Sa = Ea = ka = null;
				}
				function $a(e) {
					var t = xa.current;
					Tr(xa), (e._currentValue = t);
				}
				function za(e, t, n) {
					for (; null !== e; ) {
						var o = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== o && (o.childLanes |= t))
								: null !== o && (o.childLanes & t) !== t && (o.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Ia(e, t) {
					(ka = e),
						(Sa = Ea = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 != (e.lanes & t) && (El = !0), (e.firstContext = null));
				}
				function Ta(e) {
					var t = e._currentValue;
					if (Sa !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }), null === Ea)
						) {
							if (null === ka) throw Error(le(308));
							(Ea = e), (ka.dependencies = { lanes: 0, firstContext: e });
						} else Ea = Ea.next = e;
					return t;
				}
				var Pa = null;
				function La(e) {
					null === Pa ? (Pa = [e]) : Pa.push(e);
				}
				function Ra(e, t, n, o) {
					var i = t.interleaved;
					return (
						null === i
							? ((n.next = n), La(t))
							: ((n.next = i.next), (i.next = n)),
						(t.interleaved = n),
						Oa(e, o)
					);
				}
				function Oa(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Na = !1;
				function _a(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Da(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function Aa(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Ma(e, t, n) {
					var o = e.updateQueue;
					if (null === o) return null;
					if (((o = o.shared), 0 != (2 & Rc))) {
						var i = o.pending;
						return (
							null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
							(o.pending = t),
							Oa(e, n)
						);
					}
					return (
						null === (i = o.interleaved)
							? ((t.next = t), La(o))
							: ((t.next = i.next), (i.next = t)),
						(o.interleaved = t),
						Oa(e, n)
					);
				}
				function Ba(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 != (4194240 & n))
					) {
						var o = t.lanes;
						(n |= o &= e.pendingLanes), (t.lanes = n), kn(e, n);
					}
				}
				function ja(e, t) {
					var n = e.updateQueue,
						o = e.alternate;
					if (null !== o && n === (o = o.updateQueue)) {
						var i = null,
							r = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var a = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === r ? (i = r = a) : (r = r.next = a), (n = n.next);
							} while (null !== n);
							null === r ? (i = r = t) : (r = r.next = t);
						} else i = r = t;
						return (
							(n = {
								baseState: o.baseState,
								firstBaseUpdate: i,
								lastBaseUpdate: r,
								shared: o.shared,
								effects: o.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Va(e, t, n, o) {
					var i = e.updateQueue;
					Na = !1;
					var r = i.firstBaseUpdate,
						a = i.lastBaseUpdate,
						s = i.shared.pending;
					if (null !== s) {
						i.shared.pending = null;
						var l = s,
							c = l.next;
						(l.next = null), null === a ? (r = c) : (a.next = c), (a = l);
						var d = e.alternate;
						null !== d &&
							(s = (d = d.updateQueue).lastBaseUpdate) !== a &&
							(null === s ? (d.firstBaseUpdate = c) : (s.next = c),
							(d.lastBaseUpdate = l));
					}
					if (null !== r) {
						var u = i.baseState;
						for (a = 0, d = c = l = null, s = r; ; ) {
							var h = s.lane,
								f = s.eventTime;
							if ((o & h) === h) {
								null !== d &&
									(d = d.next =
										{
											eventTime: f,
											lane: 0,
											tag: s.tag,
											payload: s.payload,
											callback: s.callback,
											next: null,
										});
								e: {
									var p = e,
										m = s;
									switch (((h = t), (f = n), m.tag)) {
										case 1:
											if ("function" == typeof (p = m.payload)) {
												u = p.call(f, u, h);
												break e;
											}
											u = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ==
												(h =
													"function" == typeof (p = m.payload)
														? p.call(f, u, h)
														: p)
											)
												break e;
											u = je({}, u, h);
											break e;
										case 2:
											Na = !0;
									}
								}
								null !== s.callback &&
									0 !== s.lane &&
									((e.flags |= 64),
									null === (h = i.effects) ? (i.effects = [s]) : h.push(s));
							} else
								(f = {
									eventTime: f,
									lane: h,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null,
								}),
									null === d ? ((c = d = f), (l = u)) : (d = d.next = f),
									(a |= h);
							if (null === (s = s.next)) {
								if (null === (s = i.shared.pending)) break;
								(s = (h = s).next),
									(h.next = null),
									(i.lastBaseUpdate = h),
									(i.shared.pending = null);
							}
						}
						if (
							(null === d && (l = u),
							(i.baseState = l),
							(i.firstBaseUpdate = c),
							(i.lastBaseUpdate = d),
							null !== (t = i.shared.interleaved))
						) {
							i = t;
							do {
								(a |= i.lane), (i = i.next);
							} while (i !== t);
						} else null === r && (i.shared.lanes = 0);
						(jc |= a), (e.lanes = a), (e.memoizedState = u);
					}
				}
				function Ha(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var o = e[t],
								i = o.callback;
							if (null !== i) {
								if (((o.callback = null), (o = n), "function" != typeof i))
									throw Error(le(191, i));
								i.call(o);
							}
						}
				}
				var Fa = new ae.Component().refs;
				function Wa(e, t, n, o) {
					(n = null == (n = n(o, (t = e.memoizedState))) ? t : je({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Ua = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && Ut(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var o = id(),
							i = rd(e),
							r = Aa(o, i);
						(r.payload = t),
							null != n && (r.callback = n),
							null !== (t = Ma(e, r, i)) && (ad(t, e, i, o), Ba(t, e, i));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var o = id(),
							i = rd(e),
							r = Aa(o, i);
						(r.tag = 1),
							(r.payload = t),
							null != n && (r.callback = n),
							null !== (t = Ma(e, r, i)) && (ad(t, e, i, o), Ba(t, e, i));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = id(),
							o = rd(e),
							i = Aa(n, o);
						(i.tag = 2),
							null != t && (i.callback = t),
							null !== (t = Ma(e, i, o)) && (ad(t, e, o, n), Ba(t, e, o));
					},
				};
				function Xa(e, t, n, o, i, r, a) {
					return "function" == typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(o, r, a)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!hi(n, o) ||
								!hi(i, r);
				}
				function qa(e, t, n) {
					var o = !1,
						i = Lr,
						r = t.contextType;
					return (
						"object" == typeof r && null !== r
							? (r = Ta(r))
							: ((i = Dr(t) ? Nr : Rr.current),
							  (r = (o = null != (o = t.contextTypes)) ? _r(e, i) : Lr)),
						(t = new t(n, r)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = Ua),
						(e.stateNode = t),
						(t._reactInternals = e),
						o &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								i),
							(e.__reactInternalMemoizedMaskedChildContext = r)),
						t
					);
				}
				function Ya(e, t, n, o) {
					(e = t.state),
						"function" == typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, o),
						"function" == typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, o),
						t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
				}
				function Ga(e, t, n, o) {
					var i = e.stateNode;
					(i.props = n), (i.state = e.memoizedState), (i.refs = Fa), _a(e);
					var r = t.contextType;
					"object" == typeof r && null !== r
						? (i.context = Ta(r))
						: ((r = Dr(t) ? Nr : Rr.current), (i.context = _r(e, r))),
						(i.state = e.memoizedState),
						"function" == typeof (r = t.getDerivedStateFromProps) &&
							(Wa(e, t, r, n), (i.state = e.memoizedState)),
						"function" == typeof t.getDerivedStateFromProps ||
							"function" == typeof i.getSnapshotBeforeUpdate ||
							("function" != typeof i.UNSAFE_componentWillMount &&
								"function" != typeof i.componentWillMount) ||
							((t = i.state),
							"function" == typeof i.componentWillMount &&
								i.componentWillMount(),
							"function" == typeof i.UNSAFE_componentWillMount &&
								i.UNSAFE_componentWillMount(),
							t !== i.state && Ua.enqueueReplaceState(i, i.state, null),
							Va(e, n, i, o),
							(i.state = e.memoizedState)),
						"function" == typeof i.componentDidMount && (e.flags |= 4194308);
				}
				function Qa(e, t, n) {
					if (
						null !== (e = n.ref) &&
						"function" != typeof e &&
						"object" != typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(le(309));
								var o = n.stateNode;
							}
							if (!o) throw Error(le(147, e));
							var i = o,
								r = "" + e;
							return null !== t &&
								null !== t.ref &&
								"function" == typeof t.ref &&
								t.ref._stringRef === r
								? t.ref
								: ((t = function (e) {
										var t = i.refs;
										t === Fa && (t = i.refs = {}),
											null === e ? delete t[r] : (t[r] = e);
								  }),
								  (t._stringRef = r),
								  t);
						}
						if ("string" != typeof e) throw Error(le(284));
						if (!n._owner) throw Error(le(290, e));
					}
					return e;
				}
				function Ka(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							le(
								31,
								"[object Object]" === e
									? "object with keys {" + Object.keys(t).join(", ") + "}"
									: e
							)
						))
					);
				}
				function Za(e) {
					return (0, e._init)(e._payload);
				}
				function Ja(e) {
					function t(t, n) {
						if (e) {
							var o = t.deletions;
							null === o ? ((t.deletions = [n]), (t.flags |= 16)) : o.push(n);
						}
					}
					function n(n, o) {
						if (!e) return null;
						for (; null !== o; ) t(n, o), (o = o.sibling);
						return null;
					}
					function o(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function i(e, t) {
						return ((e = Ad(e, t)).index = 0), (e.sibling = null), e;
					}
					function r(t, n, o) {
						return (
							(t.index = o),
							e
								? null !== (o = t.alternate)
									? (o = o.index) < n
										? ((t.flags |= 2), n)
										: o
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function a(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function s(e, t, n, o) {
						return null === t || 6 !== t.tag
							? (((t = Vd(n, e.mode, o)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function l(e, t, n, o) {
						var r = n.type;
						return r === $e
							? d(e, t, n.props.children, o, n.key)
							: null !== t &&
							  (t.elementType === r ||
									("object" == typeof r &&
										null !== r &&
										r.$$typeof === _e &&
										Za(r) === t.type))
							? (((o = i(t, n.props)).ref = Qa(e, t, n)), (o.return = e), o)
							: (((o = Md(n.type, n.key, n.props, null, e.mode, o)).ref = Qa(
									e,
									t,
									n
							  )),
							  (o.return = e),
							  o);
					}
					function c(e, t, n, o) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Hd(n, e.mode, o)).return = e), t)
							: (((t = i(t, n.children || [])).return = e), t);
					}
					function d(e, t, n, o, r) {
						return null === t || 7 !== t.tag
							? (((t = Bd(n, e.mode, o, r)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function u(e, t, n) {
						if (("string" == typeof t && "" !== t) || "number" == typeof t)
							return ((t = Vd("" + t, e.mode, n)).return = e), t;
						if ("object" == typeof t && null !== t) {
							switch (t.$$typeof) {
								case Se:
									return (
										((n = Md(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(
											e,
											null,
											t
										)),
										(n.return = e),
										n
									);
								case Ce:
									return ((t = Hd(t, e.mode, n)).return = e), t;
								case _e:
									return u(e, (0, t._init)(t._payload), n);
							}
							if (it(t) || Me(t))
								return ((t = Bd(t, e.mode, n, null)).return = e), t;
							Ka(e, t);
						}
						return null;
					}
					function h(e, t, n, o) {
						var i = null !== t ? t.key : null;
						if (("string" == typeof n && "" !== n) || "number" == typeof n)
							return null !== i ? null : s(e, t, "" + n, o);
						if ("object" == typeof n && null !== n) {
							switch (n.$$typeof) {
								case Se:
									return n.key === i ? l(e, t, n, o) : null;
								case Ce:
									return n.key === i ? c(e, t, n, o) : null;
								case _e:
									return h(e, t, (i = n._init)(n._payload), o);
							}
							if (it(n) || Me(n))
								return null !== i ? null : d(e, t, n, o, null);
							Ka(e, n);
						}
						return null;
					}
					function f(e, t, n, o, i) {
						if (("string" == typeof o && "" !== o) || "number" == typeof o)
							return s(t, (e = e.get(n) || null), "" + o, i);
						if ("object" == typeof o && null !== o) {
							switch (o.$$typeof) {
								case Se:
									return l(
										t,
										(e = e.get(null === o.key ? n : o.key) || null),
										o,
										i
									);
								case Ce:
									return c(
										t,
										(e = e.get(null === o.key ? n : o.key) || null),
										o,
										i
									);
								case _e:
									return f(e, t, n, (0, o._init)(o._payload), i);
							}
							if (it(o) || Me(o))
								return d(t, (e = e.get(n) || null), o, i, null);
							Ka(t, o);
						}
						return null;
					}
					function p(i, a, s, l) {
						for (
							var c = null, d = null, p = a, m = (a = 0), g = null;
							null !== p && m < s.length;
							m++
						) {
							p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
							var b = h(i, p, s[m], l);
							if (null === b) {
								null === p && (p = g);
								break;
							}
							e && p && null === b.alternate && t(i, p),
								(a = r(b, a, m)),
								null === d ? (c = b) : (d.sibling = b),
								(d = b),
								(p = g);
						}
						if (m === s.length) return n(i, p), la && na(i, m), c;
						if (null === p) {
							for (; m < s.length; m++)
								null !== (p = u(i, s[m], l)) &&
									((a = r(p, a, m)),
									null === d ? (c = p) : (d.sibling = p),
									(d = p));
							return la && na(i, m), c;
						}
						for (p = o(i, p); m < s.length; m++)
							null !== (g = f(p, i, m, s[m], l)) &&
								(e &&
									null !== g.alternate &&
									p.delete(null === g.key ? m : g.key),
								(a = r(g, a, m)),
								null === d ? (c = g) : (d.sibling = g),
								(d = g));
						return (
							e &&
								p.forEach(function (e) {
									return t(i, e);
								}),
							la && na(i, m),
							c
						);
					}
					function m(i, a, s, l) {
						var c = Me(s);
						if ("function" != typeof c) throw Error(le(150));
						if (null == (s = c.call(s))) throw Error(le(151));
						for (
							var d = (c = null), p = a, m = (a = 0), g = null, b = s.next();
							null !== p && !b.done;
							m++, b = s.next()
						) {
							p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
							var v = h(i, p, b.value, l);
							if (null === v) {
								null === p && (p = g);
								break;
							}
							e && p && null === v.alternate && t(i, p),
								(a = r(v, a, m)),
								null === d ? (c = v) : (d.sibling = v),
								(d = v),
								(p = g);
						}
						if (b.done) return n(i, p), la && na(i, m), c;
						if (null === p) {
							for (; !b.done; m++, b = s.next())
								null !== (b = u(i, b.value, l)) &&
									((a = r(b, a, m)),
									null === d ? (c = b) : (d.sibling = b),
									(d = b));
							return la && na(i, m), c;
						}
						for (p = o(i, p); !b.done; m++, b = s.next())
							null !== (b = f(p, i, m, b.value, l)) &&
								(e &&
									null !== b.alternate &&
									p.delete(null === b.key ? m : b.key),
								(a = r(b, a, m)),
								null === d ? (c = b) : (d.sibling = b),
								(d = b));
						return (
							e &&
								p.forEach(function (e) {
									return t(i, e);
								}),
							la && na(i, m),
							c
						);
					}
					return function e(o, r, s, l) {
						if (
							("object" == typeof s &&
								null !== s &&
								s.type === $e &&
								null === s.key &&
								(s = s.props.children),
							"object" == typeof s && null !== s)
						) {
							switch (s.$$typeof) {
								case Se:
									e: {
										for (var c = s.key, d = r; null !== d; ) {
											if (d.key === c) {
												if ((c = s.type) === $e) {
													if (7 === d.tag) {
														n(o, d.sibling),
															((r = i(d, s.props.children)).return = o),
															(o = r);
														break e;
													}
												} else if (
													d.elementType === c ||
													("object" == typeof c &&
														null !== c &&
														c.$$typeof === _e &&
														Za(c) === d.type)
												) {
													n(o, d.sibling),
														((r = i(d, s.props)).ref = Qa(o, d, s)),
														(r.return = o),
														(o = r);
													break e;
												}
												n(o, d);
												break;
											}
											t(o, d), (d = d.sibling);
										}
										s.type === $e
											? (((r = Bd(s.props.children, o.mode, l, s.key)).return =
													o),
											  (o = r))
											: (((l = Md(
													s.type,
													s.key,
													s.props,
													null,
													o.mode,
													l
											  )).ref = Qa(o, r, s)),
											  (l.return = o),
											  (o = l));
									}
									return a(o);
								case Ce:
									e: {
										for (d = s.key; null !== r; ) {
											if (r.key === d) {
												if (
													4 === r.tag &&
													r.stateNode.containerInfo === s.containerInfo &&
													r.stateNode.implementation === s.implementation
												) {
													n(o, r.sibling),
														((r = i(r, s.children || [])).return = o),
														(o = r);
													break e;
												}
												n(o, r);
												break;
											}
											t(o, r), (r = r.sibling);
										}
										((r = Hd(s, o.mode, l)).return = o), (o = r);
									}
									return a(o);
								case _e:
									return e(o, r, (d = s._init)(s._payload), l);
							}
							if (it(s)) return p(o, r, s, l);
							if (Me(s)) return m(o, r, s, l);
							Ka(o, s);
						}
						return ("string" == typeof s && "" !== s) || "number" == typeof s
							? ((s = "" + s),
							  null !== r && 6 === r.tag
									? (n(o, r.sibling), ((r = i(r, s)).return = o), (o = r))
									: (n(o, r), ((r = Vd(s, o.mode, l)).return = o), (o = r)),
							  a(o))
							: n(o, r);
					};
				}
				var es = Ja(!0),
					ts = Ja(!1),
					ns = {},
					os = Ir(ns),
					is = Ir(ns),
					rs = Ir(ns);
				function as(e) {
					if (e === ns) throw Error(le(174));
					return e;
				}
				function ss(e, t) {
					switch ((Pr(rs, t), Pr(is, e), Pr(os, ns), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : ut(null, "");
							break;
						default:
							t = ut(
								(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
								(e = e.tagName)
							);
					}
					Tr(os), Pr(os, t);
				}
				function ls() {
					Tr(os), Tr(is), Tr(rs);
				}
				function cs(e) {
					as(rs.current);
					var t = as(os.current),
						n = ut(t, e.type);
					t !== n && (Pr(is, e), Pr(os, n));
				}
				function ds(e) {
					is.current === e && (Tr(os), Tr(is));
				}
				var us = Ir(0);
				function hs(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 != (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var fs = [];
				function ps() {
					for (var e = 0; e < fs.length; e++)
						fs[e]._workInProgressVersionPrimary = null;
					fs.length = 0;
				}
				var ms = Ee.ReactCurrentDispatcher,
					gs = Ee.ReactCurrentBatchConfig,
					bs = 0,
					vs = null,
					ys = null,
					ws = null,
					xs = !1,
					ks = !1,
					Es = 0,
					Ss = 0;
				function Cs() {
					throw Error(le(321));
				}
				function $s(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!ui(e[n], t[n])) return !1;
					return !0;
				}
				function zs(e, t, n, o, i, r) {
					if (
						((bs = r),
						(vs = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(ms.current = null === e || null === e.memoizedState ? dl : ul),
						(e = n(o, i)),
						ks)
					) {
						r = 0;
						do {
							if (((ks = !1), (Es = 0), 25 <= r)) throw Error(le(301));
							(r += 1),
								(ws = ys = null),
								(t.updateQueue = null),
								(ms.current = hl),
								(e = n(o, i));
						} while (ks);
					}
					if (
						((ms.current = cl),
						(t = null !== ys && null !== ys.next),
						(bs = 0),
						(ws = ys = vs = null),
						(xs = !1),
						t)
					)
						throw Error(le(300));
					return e;
				}
				function Is() {
					var e = 0 !== Es;
					return (Es = 0), e;
				}
				function Ts() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === ws ? (vs.memoizedState = ws = e) : (ws = ws.next = e), ws
					);
				}
				function Ps() {
					if (null === ys) {
						var e = vs.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = ys.next;
					var t = null === ws ? vs.memoizedState : ws.next;
					if (null !== t) (ws = t), (ys = e);
					else {
						if (null === e) throw Error(le(310));
						(e = {
							memoizedState: (ys = e).memoizedState,
							baseState: ys.baseState,
							baseQueue: ys.baseQueue,
							queue: ys.queue,
							next: null,
						}),
							null === ws ? (vs.memoizedState = ws = e) : (ws = ws.next = e);
					}
					return ws;
				}
				function Ls(e, t) {
					return "function" == typeof t ? t(e) : t;
				}
				function Rs(e) {
					var t = Ps(),
						n = t.queue;
					if (null === n) throw Error(le(311));
					n.lastRenderedReducer = e;
					var o = ys,
						i = o.baseQueue,
						r = n.pending;
					if (null !== r) {
						if (null !== i) {
							var a = i.next;
							(i.next = r.next), (r.next = a);
						}
						(o.baseQueue = i = r), (n.pending = null);
					}
					if (null !== i) {
						(r = i.next), (o = o.baseState);
						var s = (a = null),
							l = null,
							c = r;
						do {
							var d = c.lane;
							if ((bs & d) === d)
								null !== l &&
									(l = l.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(o = c.hasEagerState ? c.eagerState : e(o, c.action));
							else {
								var u = {
									lane: d,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === l ? ((s = l = u), (a = o)) : (l = l.next = u),
									(vs.lanes |= d),
									(jc |= d);
							}
							c = c.next;
						} while (null !== c && c !== r);
						null === l ? (a = o) : (l.next = s),
							ui(o, t.memoizedState) || (El = !0),
							(t.memoizedState = o),
							(t.baseState = a),
							(t.baseQueue = l),
							(n.lastRenderedState = o);
					}
					if (null !== (e = n.interleaved)) {
						i = e;
						do {
							(r = i.lane), (vs.lanes |= r), (jc |= r), (i = i.next);
						} while (i !== e);
					} else null === i && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Os(e) {
					var t = Ps(),
						n = t.queue;
					if (null === n) throw Error(le(311));
					n.lastRenderedReducer = e;
					var o = n.dispatch,
						i = n.pending,
						r = t.memoizedState;
					if (null !== i) {
						n.pending = null;
						var a = (i = i.next);
						do {
							(r = e(r, a.action)), (a = a.next);
						} while (a !== i);
						ui(r, t.memoizedState) || (El = !0),
							(t.memoizedState = r),
							null === t.baseQueue && (t.baseState = r),
							(n.lastRenderedState = r);
					}
					return [r, o];
				}
				function Ns() {}
				function _s(e, t) {
					var n = vs,
						o = Ps(),
						i = t(),
						r = !ui(o.memoizedState, i);
					if (
						(r && ((o.memoizedState = i), (El = !0)),
						(o = o.queue),
						qs(Ms.bind(null, n, o, e), [e]),
						o.getSnapshot !== t ||
							r ||
							(null !== ws && 1 & ws.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							Hs(9, As.bind(null, n, o, i, t), void 0, null),
							null === Oc)
						)
							throw Error(le(349));
						0 != (30 & bs) || Ds(n, t, i);
					}
					return i;
				}
				function Ds(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = vs.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (vs.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function As(e, t, n, o) {
					(t.value = n), (t.getSnapshot = o), Bs(t) && js(e);
				}
				function Ms(e, t, n) {
					return n(function () {
						Bs(t) && js(e);
					});
				}
				function Bs(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !ui(e, n);
					} catch (Ch) {
						return !0;
					}
				}
				function js(e) {
					var t = Oa(e, 1);
					null !== t && ad(t, e, 1, -1);
				}
				function Vs(e) {
					var t = Ts();
					return (
						"function" == typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Ls,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = rl.bind(null, vs, e)),
						[t.memoizedState, e]
					);
				}
				function Hs(e, t, n, o) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: o, next: null }),
						null === (t = vs.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (vs.updateQueue = t),
							  (t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e)),
						e
					);
				}
				function Fs() {
					return Ps().memoizedState;
				}
				function Ws(e, t, n, o) {
					var i = Ts();
					(vs.flags |= e),
						(i.memoizedState = Hs(1 | t, n, void 0, void 0 === o ? null : o));
				}
				function Us(e, t, n, o) {
					var i = Ps();
					o = void 0 === o ? null : o;
					var r = void 0;
					if (null !== ys) {
						var a = ys.memoizedState;
						if (((r = a.destroy), null !== o && $s(o, a.deps)))
							return void (i.memoizedState = Hs(t, n, r, o));
					}
					(vs.flags |= e), (i.memoizedState = Hs(1 | t, n, r, o));
				}
				function Xs(e, t) {
					return Ws(8390656, 8, e, t);
				}
				function qs(e, t) {
					return Us(2048, 8, e, t);
				}
				function Ys(e, t) {
					return Us(4, 2, e, t);
				}
				function Gs(e, t) {
					return Us(4, 4, e, t);
				}
				function Qs(e, t) {
					return "function" == typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null != t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function Ks(e, t, n) {
					return (
						(n = null != n ? n.concat([e]) : null),
						Us(4, 4, Qs.bind(null, t, e), n)
					);
				}
				function Zs() {}
				function Js(e, t) {
					var n = Ps();
					t = void 0 === t ? null : t;
					var o = n.memoizedState;
					return null !== o && null !== t && $s(t, o[1])
						? o[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function el(e, t) {
					var n = Ps();
					t = void 0 === t ? null : t;
					var o = n.memoizedState;
					return null !== o && null !== t && $s(t, o[1])
						? o[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function tl(e, t, n) {
					return 0 == (21 & bs)
						? (e.baseState && ((e.baseState = !1), (El = !0)),
						  (e.memoizedState = n))
						: (ui(n, t) ||
								((n = yn()), (vs.lanes |= n), (jc |= n), (e.baseState = !0)),
						  t);
				}
				function nl(e, t) {
					var n = En;
					(En = 0 !== n && 4 > n ? n : 4), e(!0);
					var o = gs.transition;
					gs.transition = {};
					try {
						e(!1), t();
					} finally {
						(En = n), (gs.transition = o);
					}
				}
				function ol() {
					return Ps().memoizedState;
				}
				function il(e, t, n) {
					var o = rd(e);
					if (
						((n = {
							lane: o,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						al(e))
					)
						sl(t, n);
					else if (null !== (n = Ra(e, t, n, o))) {
						ad(n, e, o, id()), ll(n, t, o);
					}
				}
				function rl(e, t, n) {
					var o = rd(e),
						i = {
							lane: o,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if (al(e)) sl(t, i);
					else {
						var r = e.alternate;
						if (
							0 === e.lanes &&
							(null === r || 0 === r.lanes) &&
							null !== (r = t.lastRenderedReducer)
						)
							try {
								var a = t.lastRenderedState,
									s = r(a, n);
								if (((i.hasEagerState = !0), (i.eagerState = s), ui(s, a))) {
									var l = t.interleaved;
									return (
										null === l
											? ((i.next = i), La(t))
											: ((i.next = l.next), (l.next = i)),
										void (t.interleaved = i)
									);
								}
							} catch (Lh) {}
						null !== (n = Ra(e, t, i, o)) &&
							(ad(n, e, o, (i = id())), ll(n, t, o));
					}
				}
				function al(e) {
					var t = e.alternate;
					return e === vs || (null !== t && t === vs);
				}
				function sl(e, t) {
					ks = xs = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function ll(e, t, n) {
					if (0 != (4194240 & n)) {
						var o = t.lanes;
						(n |= o &= e.pendingLanes), (t.lanes = n), kn(e, n);
					}
				}
				var cl = {
						readContext: Ta,
						useCallback: Cs,
						useContext: Cs,
						useEffect: Cs,
						useImperativeHandle: Cs,
						useInsertionEffect: Cs,
						useLayoutEffect: Cs,
						useMemo: Cs,
						useReducer: Cs,
						useRef: Cs,
						useState: Cs,
						useDebugValue: Cs,
						useDeferredValue: Cs,
						useTransition: Cs,
						useMutableSource: Cs,
						useSyncExternalStore: Cs,
						useId: Cs,
						unstable_isNewReconciler: !1,
					},
					dl = {
						readContext: Ta,
						useCallback: function (e, t) {
							return (Ts().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Ta,
						useEffect: Xs,
						useImperativeHandle: function (e, t, n) {
							return (
								(n = null != n ? n.concat([e]) : null),
								Ws(4194308, 4, Qs.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Ws(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Ws(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Ts();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var o = Ts();
							return (
								(t = void 0 !== n ? n(t) : t),
								(o.memoizedState = o.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(o.queue = e),
								(e = e.dispatch = il.bind(null, vs, e)),
								[o.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (Ts().memoizedState = e);
						},
						useState: Vs,
						useDebugValue: Zs,
						useDeferredValue: function (e) {
							return (Ts().memoizedState = e);
						},
						useTransition: function () {
							var e = Vs(!1),
								t = e[0];
							return (
								(e = nl.bind(null, e[1])), (Ts().memoizedState = e), [t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var o = vs,
								i = Ts();
							if (la) {
								if (void 0 === n) throw Error(le(407));
								n = n();
							} else {
								if (((n = t()), null === Oc)) throw Error(le(349));
								0 != (30 & bs) || Ds(o, t, n);
							}
							i.memoizedState = n;
							var r = { value: n, getSnapshot: t };
							return (
								(i.queue = r),
								Xs(Ms.bind(null, o, r, e), [e]),
								(o.flags |= 2048),
								Hs(9, As.bind(null, o, r, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = Ts(),
								t = Oc.identifierPrefix;
							if (la) {
								var n = ta;
								(t =
									":" +
									t +
									"R" +
									(n = (ea & ~(1 << (32 - dn(ea) - 1))).toString(32) + n)),
									0 < (n = Es++) && (t += "H" + n.toString(32)),
									(t += ":");
							} else t = ":" + t + "r" + (n = Ss++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					ul = {
						readContext: Ta,
						useCallback: Js,
						useContext: Ta,
						useEffect: qs,
						useImperativeHandle: Ks,
						useInsertionEffect: Ys,
						useLayoutEffect: Gs,
						useMemo: el,
						useReducer: Rs,
						useRef: Fs,
						useState: function () {
							return Rs(Ls);
						},
						useDebugValue: Zs,
						useDeferredValue: function (e) {
							return tl(Ps(), ys.memoizedState, e);
						},
						useTransition: function () {
							return [Rs(Ls)[0], Ps().memoizedState];
						},
						useMutableSource: Ns,
						useSyncExternalStore: _s,
						useId: ol,
						unstable_isNewReconciler: !1,
					},
					hl = {
						readContext: Ta,
						useCallback: Js,
						useContext: Ta,
						useEffect: qs,
						useImperativeHandle: Ks,
						useInsertionEffect: Ys,
						useLayoutEffect: Gs,
						useMemo: el,
						useReducer: Os,
						useRef: Fs,
						useState: function () {
							return Os(Ls);
						},
						useDebugValue: Zs,
						useDeferredValue: function (e) {
							var t = Ps();
							return null === ys
								? (t.memoizedState = e)
								: tl(t, ys.memoizedState, e);
						},
						useTransition: function () {
							return [Os(Ls)[0], Ps().memoizedState];
						},
						useMutableSource: Ns,
						useSyncExternalStore: _s,
						useId: ol,
						unstable_isNewReconciler: !1,
					};
				function fl(e, t) {
					try {
						var n = "",
							o = t;
						do {
							(n += We(o)), (o = o.return);
						} while (o);
						var i = n;
					} catch (zh) {
						i = "\nError generating stack: " + zh.message + "\n" + zh.stack;
					}
					return { value: e, source: t, stack: i, digest: null };
				}
				function pl(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function ml(e, t) {
					try {
						console.error(t.value);
					} catch (Sh) {
						setTimeout(function () {
							throw Sh;
						});
					}
				}
				var gl = "function" == typeof WeakMap ? WeakMap : Map;
				function bl(e, t, n) {
					((n = Aa(-1, n)).tag = 3), (n.payload = { element: null });
					var o = t.value;
					return (
						(n.callback = function () {
							Yc || ((Yc = !0), (Gc = o)), ml(0, t);
						}),
						n
					);
				}
				function vl(e, t, n) {
					(n = Aa(-1, n)).tag = 3;
					var o = e.type.getDerivedStateFromError;
					if ("function" == typeof o) {
						var i = t.value;
						(n.payload = function () {
							return o(i);
						}),
							(n.callback = function () {
								ml(0, t);
							});
					}
					var r = e.stateNode;
					return (
						null !== r &&
							"function" == typeof r.componentDidCatch &&
							(n.callback = function () {
								ml(0, t),
									"function" != typeof o &&
										(null === Qc ? (Qc = new Set([this])) : Qc.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : "",
								});
							}),
						n
					);
				}
				function yl(e, t, n) {
					var o = e.pingCache;
					if (null === o) {
						o = e.pingCache = new gl();
						var i = new Set();
						o.set(t, i);
					} else void 0 === (i = o.get(t)) && ((i = new Set()), o.set(t, i));
					i.has(n) || (i.add(n), (e = Td.bind(null, e, t, n)), t.then(e, e));
				}
				function wl(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t = null === (t = e.memoizedState) || null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function xl(e, t, n, o, i) {
					return 0 == (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
								  (n.flags |= 131072),
								  (n.flags &= -52805),
								  1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = Aa(-1, 1)).tag = 2), Ma(n, t, 1))),
								  (n.lanes |= 1)),
						  e)
						: ((e.flags |= 65536), (e.lanes = i), e);
				}
				var kl = Ee.ReactCurrentOwner,
					El = !1;
				function Sl(e, t, n, o) {
					t.child = null === e ? ts(t, null, n, o) : es(t, e.child, n, o);
				}
				function Cl(e, t, n, o, i) {
					n = n.render;
					var r = t.ref;
					return (
						Ia(t, i),
						(o = zs(e, t, n, o, r, i)),
						(n = Is()),
						null === e || El
							? (la && n && ia(t), (t.flags |= 1), Sl(e, t, o, i), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~i),
							  Yl(e, t, i))
					);
				}
				function $l(e, t, n, o, i) {
					if (null === e) {
						var r = n.type;
						return "function" != typeof r ||
							Dd(r) ||
							void 0 !== r.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = Md(n.type, null, o, t, t.mode, i)).ref = t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = r), zl(e, t, r, o, i));
					}
					if (((r = e.child), 0 == (e.lanes & i))) {
						var a = r.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : hi)(a, o) &&
							e.ref === t.ref
						)
							return Yl(e, t, i);
					}
					return (
						(t.flags |= 1),
						((e = Ad(r, o)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function zl(e, t, n, o, i) {
					if (null !== e) {
						var r = e.memoizedProps;
						if (hi(r, o) && e.ref === t.ref) {
							if (((El = !1), (t.pendingProps = o = r), 0 == (e.lanes & i)))
								return (t.lanes = e.lanes), Yl(e, t, i);
							0 != (131072 & e.flags) && (El = !0);
						}
					}
					return Pl(e, t, n, o, i);
				}
				function Il(e, t, n) {
					var o = t.pendingProps,
						i = o.children,
						r = null !== e ? e.memoizedState : null;
					if ("hidden" === o.mode)
						if (0 == (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								Pr(Ac, Dc),
								(Dc |= n);
						else {
							if (0 == (1073741824 & n))
								return (
									(e = null !== r ? r.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									Pr(Ac, Dc),
									(Dc |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(o = null !== r ? r.baseLanes : n),
								Pr(Ac, Dc),
								(Dc |= o);
						}
					else
						null !== r
							? ((o = r.baseLanes | n), (t.memoizedState = null))
							: (o = n),
							Pr(Ac, Dc),
							(Dc |= o);
					return Sl(e, t, i, n), t.child;
				}
				function Tl(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function Pl(e, t, n, o, i) {
					var r = Dr(n) ? Nr : Rr.current;
					return (
						(r = _r(t, r)),
						Ia(t, i),
						(n = zs(e, t, n, o, r, i)),
						(o = Is()),
						null === e || El
							? (la && o && ia(t), (t.flags |= 1), Sl(e, t, n, i), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~i),
							  Yl(e, t, i))
					);
				}
				function Ll(e, t, n, o, i) {
					if (Dr(n)) {
						var r = !0;
						jr(t);
					} else r = !1;
					if ((Ia(t, i), null === t.stateNode))
						ql(e, t), qa(t, n, o), Ga(t, n, o, i), (o = !0);
					else if (null === e) {
						var a = t.stateNode,
							s = t.memoizedProps;
						a.props = s;
						var l = a.context,
							c = n.contextType;
						"object" == typeof c && null !== c
							? (c = Ta(c))
							: (c = _r(t, (c = Dr(n) ? Nr : Rr.current)));
						var d = n.getDerivedStateFromProps,
							u =
								"function" == typeof d ||
								"function" == typeof a.getSnapshotBeforeUpdate;
						u ||
							("function" != typeof a.UNSAFE_componentWillReceiveProps &&
								"function" != typeof a.componentWillReceiveProps) ||
							((s !== o || l !== c) && Ya(t, a, o, c)),
							(Na = !1);
						var h = t.memoizedState;
						(a.state = h),
							Va(t, o, a, i),
							(l = t.memoizedState),
							s !== o || h !== l || Or.current || Na
								? ("function" == typeof d &&
										(Wa(t, n, d, o), (l = t.memoizedState)),
								  (s = Na || Xa(t, n, s, o, h, l, c))
										? (u ||
												("function" != typeof a.UNSAFE_componentWillMount &&
													"function" != typeof a.componentWillMount) ||
												("function" == typeof a.componentWillMount &&
													a.componentWillMount(),
												"function" == typeof a.UNSAFE_componentWillMount &&
													a.UNSAFE_componentWillMount()),
										  "function" == typeof a.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" == typeof a.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = o),
										  (t.memoizedState = l)),
								  (a.props = o),
								  (a.state = l),
								  (a.context = c),
								  (o = s))
								: ("function" == typeof a.componentDidMount &&
										(t.flags |= 4194308),
								  (o = !1));
					} else {
						(a = t.stateNode),
							Da(e, t),
							(s = t.memoizedProps),
							(c = t.type === t.elementType ? s : wa(t.type, s)),
							(a.props = c),
							(u = t.pendingProps),
							(h = a.context),
							"object" == typeof (l = n.contextType) && null !== l
								? (l = Ta(l))
								: (l = _r(t, (l = Dr(n) ? Nr : Rr.current)));
						var f = n.getDerivedStateFromProps;
						(d =
							"function" == typeof f ||
							"function" == typeof a.getSnapshotBeforeUpdate) ||
							("function" != typeof a.UNSAFE_componentWillReceiveProps &&
								"function" != typeof a.componentWillReceiveProps) ||
							((s !== u || h !== l) && Ya(t, a, o, l)),
							(Na = !1),
							(h = t.memoizedState),
							(a.state = h),
							Va(t, o, a, i);
						var p = t.memoizedState;
						s !== u || h !== p || Or.current || Na
							? ("function" == typeof f &&
									(Wa(t, n, f, o), (p = t.memoizedState)),
							  (c = Na || Xa(t, n, c, o, h, p, l) || !1)
									? (d ||
											("function" != typeof a.UNSAFE_componentWillUpdate &&
												"function" != typeof a.componentWillUpdate) ||
											("function" == typeof a.componentWillUpdate &&
												a.componentWillUpdate(o, p, l),
											"function" == typeof a.UNSAFE_componentWillUpdate &&
												a.UNSAFE_componentWillUpdate(o, p, l)),
									  "function" == typeof a.componentDidUpdate && (t.flags |= 4),
									  "function" == typeof a.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" != typeof a.componentDidUpdate ||
											(s === e.memoizedProps && h === e.memoizedState) ||
											(t.flags |= 4),
									  "function" != typeof a.getSnapshotBeforeUpdate ||
											(s === e.memoizedProps && h === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = o),
									  (t.memoizedState = p)),
							  (a.props = o),
							  (a.state = p),
							  (a.context = l),
							  (o = c))
							: ("function" != typeof a.componentDidUpdate ||
									(s === e.memoizedProps && h === e.memoizedState) ||
									(t.flags |= 4),
							  "function" != typeof a.getSnapshotBeforeUpdate ||
									(s === e.memoizedProps && h === e.memoizedState) ||
									(t.flags |= 1024),
							  (o = !1));
					}
					return Rl(e, t, n, o, r, i);
				}
				function Rl(e, t, n, o, i, r) {
					Tl(e, t);
					var a = 0 != (128 & t.flags);
					if (!o && !a) return i && Vr(t, n, !1), Yl(e, t, r);
					(o = t.stateNode), (kl.current = t);
					var s =
						a && "function" != typeof n.getDerivedStateFromError
							? null
							: o.render();
					return (
						(t.flags |= 1),
						null !== e && a
							? ((t.child = es(t, e.child, null, r)),
							  (t.child = es(t, null, s, r)))
							: Sl(e, t, s, r),
						(t.memoizedState = o.state),
						i && Vr(t, n, !0),
						t.child
					);
				}
				function Ol(e) {
					var t = e.stateNode;
					t.pendingContext
						? Mr(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && Mr(0, t.context, !1),
						ss(e, t.containerInfo);
				}
				function Nl(e, t, n, o, i) {
					return ba(), va(i), (t.flags |= 256), Sl(e, t, n, o), t.child;
				}
				var _l,
					Dl,
					Al,
					Ml,
					Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
				function jl(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Vl(e, t, n) {
					var o,
						i = t.pendingProps,
						r = us.current,
						a = !1,
						s = 0 != (128 & t.flags);
					if (
						((o = s) ||
							(o = (null === e || null !== e.memoizedState) && 0 != (2 & r)),
						o
							? ((a = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) || (r |= 1),
						Pr(us, 1 & r),
						null === e)
					)
						return (
							fa(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 == (1 & t.mode)
										? (t.lanes = 1)
										: "$!" === e.data
										? (t.lanes = 8)
										: (t.lanes = 1073741824),
								  null)
								: ((s = i.children),
								  (e = i.fallback),
								  a
										? ((i = t.mode),
										  (a = t.child),
										  (s = { mode: "hidden", children: s }),
										  0 == (1 & i) && null !== a
												? ((a.childLanes = 0), (a.pendingProps = s))
												: (a = jd(s, i, 0, null)),
										  (e = Bd(e, i, n, null)),
										  (a.return = t),
										  (e.return = t),
										  (a.sibling = e),
										  (t.child = a),
										  (t.child.memoizedState = jl(n)),
										  (t.memoizedState = Bl),
										  e)
										: Hl(t, s))
						);
					if (null !== (r = e.memoizedState) && null !== (o = r.dehydrated))
						return (function (e, t, n, o, i, r, a) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), Fl(e, t, a, (o = pl(Error(le(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((r = o.fallback),
									  (i = t.mode),
									  (o = jd(
											{ mode: "visible", children: o.children },
											i,
											0,
											null
									  )),
									  ((r = Bd(r, i, a, null)).flags |= 2),
									  (o.return = t),
									  (r.return = t),
									  (o.sibling = r),
									  (t.child = o),
									  0 != (1 & t.mode) && es(t, e.child, null, a),
									  (t.child.memoizedState = jl(a)),
									  (t.memoizedState = Bl),
									  r);
							if (0 == (1 & t.mode)) return Fl(e, t, a, null);
							if ("$!" === i.data) {
								if ((o = i.nextSibling && i.nextSibling.dataset))
									var s = o.dgst;
								return (
									(o = s),
									Fl(e, t, a, (o = pl((r = Error(le(419))), o, void 0)))
								);
							}
							if (((s = 0 != (a & e.childLanes)), El || s)) {
								if (null !== (o = Oc)) {
									switch (a & -a) {
										case 4:
											i = 2;
											break;
										case 16:
											i = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											i = 32;
											break;
										case 536870912:
											i = 268435456;
											break;
										default:
											i = 0;
									}
									0 !== (i = 0 != (i & (o.suspendedLanes | a)) ? 0 : i) &&
										i !== r.retryLane &&
										((r.retryLane = i), Oa(e, i), ad(o, e, i, -1));
								}
								return yd(), Fl(e, t, a, (o = pl(Error(le(421)))));
							}
							return "$?" === i.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = Ld.bind(null, e)),
								  (i._reactRetry = t),
								  null)
								: ((e = r.treeContext),
								  (sa = fr(i.nextSibling)),
								  (aa = t),
								  (la = !0),
								  (ca = null),
								  null !== e &&
										((Kr[Zr++] = ea),
										(Kr[Zr++] = ta),
										(Kr[Zr++] = Jr),
										(ea = e.id),
										(ta = e.overflow),
										(Jr = t)),
								  (t = Hl(t, o.children)),
								  (t.flags |= 4096),
								  t);
						})(e, t, s, i, o, r, n);
					if (a) {
						(a = i.fallback), (s = t.mode), (o = (r = e.child).sibling);
						var l = { mode: "hidden", children: i.children };
						return (
							0 == (1 & s) && t.child !== r
								? (((i = t.child).childLanes = 0),
								  (i.pendingProps = l),
								  (t.deletions = null))
								: ((i = Ad(r, l)).subtreeFlags = 14680064 & r.subtreeFlags),
							null !== o
								? (a = Ad(o, a))
								: ((a = Bd(a, s, n, null)).flags |= 2),
							(a.return = t),
							(i.return = t),
							(i.sibling = a),
							(t.child = i),
							(i = a),
							(a = t.child),
							(s =
								null === (s = e.child.memoizedState)
									? jl(n)
									: {
											baseLanes: s.baseLanes | n,
											cachePool: null,
											transitions: s.transitions,
									  }),
							(a.memoizedState = s),
							(a.childLanes = e.childLanes & ~n),
							(t.memoizedState = Bl),
							i
						);
					}
					return (
						(e = (a = e.child).sibling),
						(i = Ad(a, { mode: "visible", children: i.children })),
						0 == (1 & t.mode) && (i.lanes = n),
						(i.return = t),
						(i.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = i),
						(t.memoizedState = null),
						i
					);
				}
				function Hl(e, t) {
					return (
						((t = jd(
							{ mode: "visible", children: t },
							e.mode,
							0,
							null
						)).return = e),
						(e.child = t)
					);
				}
				function Fl(e, t, n, o) {
					return (
						null !== o && va(o),
						es(t, e.child, null, n),
						((e = Hl(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Wl(e, t, n) {
					e.lanes |= t;
					var o = e.alternate;
					null !== o && (o.lanes |= t), za(e.return, t, n);
				}
				function Ul(e, t, n, o, i) {
					var r = e.memoizedState;
					null === r
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: o,
								tail: n,
								tailMode: i,
						  })
						: ((r.isBackwards = t),
						  (r.rendering = null),
						  (r.renderingStartTime = 0),
						  (r.last = o),
						  (r.tail = n),
						  (r.tailMode = i));
				}
				function Xl(e, t, n) {
					var o = t.pendingProps,
						i = o.revealOrder,
						r = o.tail;
					if ((Sl(e, t, o.children, n), 0 != (2 & (o = us.current))))
						(o = (1 & o) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 != (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Wl(e, n, t);
								else if (19 === e.tag) Wl(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						o &= 1;
					}
					if ((Pr(us, o), 0 == (1 & t.mode))) t.memoizedState = null;
					else
						switch (i) {
							case "forwards":
								for (n = t.child, i = null; null !== n; )
									null !== (e = n.alternate) && null === hs(e) && (i = n),
										(n = n.sibling);
								null === (n = i)
									? ((i = t.child), (t.child = null))
									: ((i = n.sibling), (n.sibling = null)),
									Ul(t, !1, i, n, r);
								break;
							case "backwards":
								for (n = null, i = t.child, t.child = null; null !== i; ) {
									if (null !== (e = i.alternate) && null === hs(e)) {
										t.child = i;
										break;
									}
									(e = i.sibling), (i.sibling = n), (n = i), (i = e);
								}
								Ul(t, !0, n, null, r);
								break;
							case "together":
								Ul(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function ql(e, t) {
					0 == (1 & t.mode) &&
						null !== e &&
						((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Yl(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(jc |= t.lanes),
						0 == (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(le(153));
					if (null !== t.child) {
						for (
							n = Ad((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Ad(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function Gl(e, t) {
					if (!la)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var o = null; null !== n; )
									null !== n.alternate && (o = n), (n = n.sibling);
								null === o
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (o.sibling = null);
						}
				}
				function Ql(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						o = 0;
					if (t)
						for (var i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(o |= 14680064 & i.subtreeFlags),
								(o |= 14680064 & i.flags),
								(i.return = e),
								(i = i.sibling);
					else
						for (i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(o |= i.subtreeFlags),
								(o |= i.flags),
								(i.return = e),
								(i = i.sibling);
					return (e.subtreeFlags |= o), (e.childLanes = n), t;
				}
				function Kl(e, t, n) {
					var o = t.pendingProps;
					switch ((ra(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Ql(t), null;
						case 1:
						case 17:
							return Dr(t.type) && Ar(), Ql(t), null;
						case 3:
							return (
								(o = t.stateNode),
								ls(),
								Tr(Or),
								Tr(Rr),
								ps(),
								o.pendingContext &&
									((o.context = o.pendingContext), (o.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(ma(t)
										? (t.flags |= 4)
										: null === e ||
										  (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== ca && (dd(ca), (ca = null)))),
								Dl(e, t),
								Ql(t),
								null
							);
						case 5:
							ds(t);
							var i = as(rs.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								Al(e, t, n, o, i),
									e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!o) {
									if (null === t.stateNode) throw Error(le(166));
									return Ql(t), null;
								}
								if (((e = as(os.current)), ma(t))) {
									(o = t.stateNode), (n = t.type);
									var r = t.memoizedProps;
									switch (
										((o[gr] = t), (o[br] = r), (e = 0 != (1 & t.mode)), n)
									) {
										case "dialog":
											Fi("cancel", o), Fi("close", o);
											break;
										case "iframe":
										case "object":
										case "embed":
											Fi("load", o);
											break;
										case "video":
										case "audio":
											for (i = 0; i < Bi.length; i++) Fi(Bi[i], o);
											break;
										case "source":
											Fi("error", o);
											break;
										case "img":
										case "image":
										case "link":
											Fi("error", o), Fi("load", o);
											break;
										case "details":
											Fi("toggle", o);
											break;
										case "input":
											Je(o, r), Fi("invalid", o);
											break;
										case "select":
											(o._wrapperState = { wasMultiple: !!r.multiple }),
												Fi("invalid", o);
											break;
										case "textarea":
											st(o, r), Fi("invalid", o);
									}
									for (var a in (xt(n, r), (i = null), r))
										if (r.hasOwnProperty(a)) {
											var s = r[a];
											"children" === a
												? "string" == typeof s
													? o.textContent !== s &&
													  (!0 !== r.suppressHydrationWarning &&
															nr(o.textContent, s, e),
													  (i = ["children", s]))
													: "number" == typeof s &&
													  o.textContent !== "" + s &&
													  (!0 !== r.suppressHydrationWarning &&
															nr(o.textContent, s, e),
													  (i = ["children", "" + s]))
												: de.hasOwnProperty(a) &&
												  null != s &&
												  "onScroll" === a &&
												  Fi("scroll", o);
										}
									switch (n) {
										case "input":
											Ge(o), nt(o, r, !0);
											break;
										case "textarea":
											Ge(o), ct(o);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof r.onClick && (o.onclick = or);
									}
									(o = i), (t.updateQueue = o), null !== o && (t.flags |= 4);
								} else {
									(a = 9 === i.nodeType ? i : i.ownerDocument),
										"http://www.w3.org/1999/xhtml" === e && (e = dt(n)),
										"http://www.w3.org/1999/xhtml" === e
											? "script" === n
												? (((e = a.createElement("div")).innerHTML =
														"<script></script>"),
												  (e = e.removeChild(e.firstChild)))
												: "string" == typeof o.is
												? (e = a.createElement(n, { is: o.is }))
												: ((e = a.createElement(n)),
												  "select" === n &&
														((a = e),
														o.multiple
															? (a.multiple = !0)
															: o.size && (a.size = o.size)))
											: (e = a.createElementNS(e, n)),
										(e[gr] = t),
										(e[br] = o),
										_l(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((a = kt(n, o)), n)) {
											case "dialog":
												Fi("cancel", e), Fi("close", e), (i = o);
												break;
											case "iframe":
											case "object":
											case "embed":
												Fi("load", e), (i = o);
												break;
											case "video":
											case "audio":
												for (i = 0; i < Bi.length; i++) Fi(Bi[i], e);
												i = o;
												break;
											case "source":
												Fi("error", e), (i = o);
												break;
											case "img":
											case "image":
											case "link":
												Fi("error", e), Fi("load", e), (i = o);
												break;
											case "details":
												Fi("toggle", e), (i = o);
												break;
											case "input":
												Je(e, o), (i = Ze(e, o)), Fi("invalid", e);
												break;
											case "option":
											default:
												i = o;
												break;
											case "select":
												(e._wrapperState = { wasMultiple: !!o.multiple }),
													(i = je({}, o, { value: void 0 })),
													Fi("invalid", e);
												break;
											case "textarea":
												st(e, o), (i = at(e, o)), Fi("invalid", e);
										}
										for (r in (xt(n, i), (s = i)))
											if (s.hasOwnProperty(r)) {
												var l = s[r];
												"style" === r
													? yt(e, l)
													: "dangerouslySetInnerHTML" === r
													? null != (l = l ? l.__html : void 0) && pt(e, l)
													: "children" === r
													? "string" == typeof l
														? ("textarea" !== n || "" !== l) && mt(e, l)
														: "number" == typeof l && mt(e, "" + l)
													: "suppressContentEditableWarning" !== r &&
													  "suppressHydrationWarning" !== r &&
													  "autoFocus" !== r &&
													  (de.hasOwnProperty(r)
															? null != l && "onScroll" === r && Fi("scroll", e)
															: null != l && ke(e, r, l, a));
											}
										switch (n) {
											case "input":
												Ge(e), nt(e, o, !1);
												break;
											case "textarea":
												Ge(e), ct(e);
												break;
											case "option":
												null != o.value &&
													e.setAttribute("value", "" + qe(o.value));
												break;
											case "select":
												(e.multiple = !!o.multiple),
													null != (r = o.value)
														? rt(e, !!o.multiple, r, !1)
														: null != o.defaultValue &&
														  rt(e, !!o.multiple, o.defaultValue, !0);
												break;
											default:
												"function" == typeof i.onClick && (e.onclick = or);
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												o = !!o.autoFocus;
												break e;
											case "img":
												o = !0;
												break e;
											default:
												o = !1;
										}
									}
									o && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Ql(t), null;
						case 6:
							if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, o);
							else {
								if ("string" != typeof o && null === t.stateNode)
									throw Error(le(166));
								if (((n = as(rs.current)), as(os.current), ma(t))) {
									if (
										((o = t.stateNode),
										(n = t.memoizedProps),
										(o[gr] = t),
										(r = o.nodeValue !== n) && null !== (e = aa))
									)
										switch (e.tag) {
											case 3:
												nr(o.nodeValue, n, 0 != (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning &&
													nr(o.nodeValue, n, 0 != (1 & e.mode));
										}
									r && (t.flags |= 4);
								} else
									((o = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
										o
									))[gr] = t),
										(t.stateNode = o);
							}
							return Ql(t), null;
						case 13:
							if (
								(Tr(us),
								(o = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									la &&
									null !== sa &&
									0 != (1 & t.mode) &&
									0 == (128 & t.flags)
								)
									ga(), ba(), (t.flags |= 98560), (r = !1);
								else if (((r = ma(t)), null !== o && null !== o.dehydrated)) {
									if (null === e) {
										if (!r) throw Error(le(318));
										if (
											!(r =
												null !== (r = t.memoizedState) ? r.dehydrated : null)
										)
											throw Error(le(317));
										r[gr] = t;
									} else
										ba(),
											0 == (128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									Ql(t), (r = !1);
								} else null !== ca && (dd(ca), (ca = null)), (r = !0);
								if (!r) return 65536 & t.flags ? t : null;
							}
							return 0 != (128 & t.flags)
								? ((t.lanes = n), t)
								: ((o = null !== o) !==
										(null !== e && null !== e.memoizedState) &&
										o &&
										((t.child.flags |= 8192),
										0 != (1 & t.mode) &&
											(null === e || 0 != (1 & us.current)
												? 0 === Mc && (Mc = 3)
												: yd())),
								  null !== t.updateQueue && (t.flags |= 4),
								  Ql(t),
								  null);
						case 4:
							return (
								ls(),
								Dl(e, t),
								null === e && Xi(t.stateNode.containerInfo),
								Ql(t),
								null
							);
						case 10:
							return $a(t.type._context), Ql(t), null;
						case 19:
							if ((Tr(us), null === (r = t.memoizedState))) return Ql(t), null;
							if (((o = 0 != (128 & t.flags)), null === (a = r.rendering)))
								if (o) Gl(r, !1);
								else {
									if (0 !== Mc || (null !== e && 0 != (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (a = hs(e))) {
												for (
													t.flags |= 128,
														Gl(r, !1),
														null !== (o = a.updateQueue) &&
															((t.updateQueue = o), (t.flags |= 4)),
														t.subtreeFlags = 0,
														o = n,
														n = t.child;
													null !== n;

												)
													(e = o),
														((r = n).flags &= 14680066),
														null === (a = r.alternate)
															? ((r.childLanes = 0),
															  (r.lanes = e),
															  (r.child = null),
															  (r.subtreeFlags = 0),
															  (r.memoizedProps = null),
															  (r.memoizedState = null),
															  (r.updateQueue = null),
															  (r.dependencies = null),
															  (r.stateNode = null))
															: ((r.childLanes = a.childLanes),
															  (r.lanes = a.lanes),
															  (r.child = a.child),
															  (r.subtreeFlags = 0),
															  (r.deletions = null),
															  (r.memoizedProps = a.memoizedProps),
															  (r.memoizedState = a.memoizedState),
															  (r.updateQueue = a.updateQueue),
															  (r.type = a.type),
															  (e = a.dependencies),
															  (r.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext: e.firstContext,
																		  })),
														(n = n.sibling);
												return Pr(us, (1 & us.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== r.tail &&
										en() > Xc &&
										((t.flags |= 128),
										(o = !0),
										Gl(r, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!o)
									if (null !== (e = hs(a))) {
										if (
											((t.flags |= 128),
											(o = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n), (t.flags |= 4)),
											Gl(r, !0),
											null === r.tail &&
												"hidden" === r.tailMode &&
												!a.alternate &&
												!la)
										)
											return Ql(t), null;
									} else
										2 * en() - r.renderingStartTime > Xc &&
											1073741824 !== n &&
											((t.flags |= 128),
											(o = !0),
											Gl(r, !1),
											(t.lanes = 4194304));
								r.isBackwards
									? ((a.sibling = t.child), (t.child = a))
									: (null !== (n = r.last) ? (n.sibling = a) : (t.child = a),
									  (r.last = a));
							}
							return null !== r.tail
								? ((t = r.tail),
								  (r.rendering = t),
								  (r.tail = t.sibling),
								  (r.renderingStartTime = en()),
								  (t.sibling = null),
								  (n = us.current),
								  Pr(us, o ? (1 & n) | 2 : 1 & n),
								  t)
								: (Ql(t), null);
						case 22:
						case 23:
							return (
								md(),
								(o = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== o &&
									(t.flags |= 8192),
								o && 0 != (1 & t.mode)
									? 0 != (1073741824 & Dc) &&
									  (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: Ql(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(le(156, t.tag));
				}
				function Zl(e, t) {
					switch ((ra(t), t.tag)) {
						case 1:
							return (
								Dr(t.type) && Ar(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								ls(),
								Tr(Or),
								Tr(Rr),
								ps(),
								0 != (65536 & (e = t.flags)) && 0 == (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return ds(t), null;
						case 13:
							if (
								(Tr(us),
								null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(le(340));
								ba();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return Tr(us), null;
						case 4:
							return ls(), null;
						case 10:
							return $a(t.type._context), null;
						case 22:
						case 23:
							return md(), null;
						default:
							return null;
					}
				}
				(_l = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Dl = function () {}),
					(Al = function (e, t, n, o) {
						var i = e.memoizedProps;
						if (i !== o) {
							(e = t.stateNode), as(os.current);
							var r,
								a = null;
							switch (n) {
								case "input":
									(i = Ze(e, i)), (o = Ze(e, o)), (a = []);
									break;
								case "select":
									(i = je({}, i, { value: void 0 })),
										(o = je({}, o, { value: void 0 })),
										(a = []);
									break;
								case "textarea":
									(i = at(e, i)), (o = at(e, o)), (a = []);
									break;
								default:
									"function" != typeof i.onClick &&
										"function" == typeof o.onClick &&
										(e.onclick = or);
							}
							for (c in (xt(n, o), (n = null), i))
								if (!o.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
									if ("style" === c) {
										var s = i[c];
										for (r in s)
											s.hasOwnProperty(r) && (n || (n = {}), (n[r] = ""));
									} else
										"dangerouslySetInnerHTML" !== c &&
											"children" !== c &&
											"suppressContentEditableWarning" !== c &&
											"suppressHydrationWarning" !== c &&
											"autoFocus" !== c &&
											(de.hasOwnProperty(c)
												? a || (a = [])
												: (a = a || []).push(c, null));
							for (c in o) {
								var l = o[c];
								if (
									((s = null != i ? i[c] : void 0),
									o.hasOwnProperty(c) && l !== s && (null != l || null != s))
								)
									if ("style" === c)
										if (s) {
											for (r in s)
												!s.hasOwnProperty(r) ||
													(l && l.hasOwnProperty(r)) ||
													(n || (n = {}), (n[r] = ""));
											for (r in l)
												l.hasOwnProperty(r) &&
													s[r] !== l[r] &&
													(n || (n = {}), (n[r] = l[r]));
										} else n || (a || (a = []), a.push(c, n)), (n = l);
									else
										"dangerouslySetInnerHTML" === c
											? ((l = l ? l.__html : void 0),
											  (s = s ? s.__html : void 0),
											  null != l && s !== l && (a = a || []).push(c, l))
											: "children" === c
											? ("string" != typeof l && "number" != typeof l) ||
											  (a = a || []).push(c, "" + l)
											: "suppressContentEditableWarning" !== c &&
											  "suppressHydrationWarning" !== c &&
											  (de.hasOwnProperty(c)
													? (null != l && "onScroll" === c && Fi("scroll", e),
													  a || s === l || (a = []))
													: (a = a || []).push(c, l));
							}
							n && (a = a || []).push("style", n);
							var c = a;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Ml = function (e, t, n, o) {
						n !== o && (t.flags |= 4);
					});
				var Jl = !1,
					ec = !1,
					tc = "function" == typeof WeakSet ? WeakSet : Set,
					nc = null;
				function oc(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" == typeof n)
							try {
								n(null);
							} catch (Ch) {
								Id(e, t, Ch);
							}
						else n.current = null;
				}
				function ic(e, t, n) {
					try {
						n();
					} catch (Ch) {
						Id(e, t, Ch);
					}
				}
				var rc = !1;
				function ac(e, t, n) {
					var o = t.updateQueue;
					if (null !== (o = null !== o ? o.lastEffect : null)) {
						var i = (o = o.next);
						do {
							if ((i.tag & e) === e) {
								var r = i.destroy;
								(i.destroy = void 0), void 0 !== r && ic(t, n, r);
							}
							i = i.next;
						} while (i !== o);
					}
				}
				function sc(e, t) {
					if (
						null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var o = n.create;
								n.destroy = o();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function lc(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
					}
				}
				function cc(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), cc(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[gr],
							delete t[br],
							delete t[yr],
							delete t[wr],
							delete t[xr]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function dc(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function uc(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || dc(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function hc(e, t, n) {
					var o = e.tag;
					if (5 === o || 6 === o)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  null != (n = n._reactRootContainer) ||
										null !== t.onclick ||
										(t.onclick = or));
					else if (4 !== o && null !== (e = e.child))
						for (hc(e, t, n), e = e.sibling; null !== e; )
							hc(e, t, n), (e = e.sibling);
				}
				function fc(e, t, n) {
					var o = e.tag;
					if (5 === o || 6 === o)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== o && null !== (e = e.child))
						for (fc(e, t, n), e = e.sibling; null !== e; )
							fc(e, t, n), (e = e.sibling);
				}
				var pc = null,
					mc = !1;
				function gc(e, t, n) {
					for (n = n.child; null !== n; ) bc(e, t, n), (n = n.sibling);
				}
				function bc(e, t, n) {
					if (cn && "function" == typeof cn.onCommitFiberUnmount)
						try {
							cn.onCommitFiberUnmount(ln, n);
						} catch (Wf) {}
					switch (n.tag) {
						case 5:
							ec || oc(n, t);
						case 6:
							var o = pc,
								i = mc;
							(pc = null),
								gc(e, t, n),
								(mc = i),
								null !== (pc = o) &&
									(mc
										? ((e = pc),
										  (n = n.stateNode),
										  8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: pc.removeChild(n.stateNode));
							break;
						case 18:
							null !== pc &&
								(mc
									? ((e = pc),
									  (n = n.stateNode),
									  8 === e.nodeType
											? hr(e.parentNode, n)
											: 1 === e.nodeType && hr(e, n),
									  Xn(e))
									: hr(pc, n.stateNode));
							break;
						case 4:
							(o = pc),
								(i = mc),
								(pc = n.stateNode.containerInfo),
								(mc = !0),
								gc(e, t, n),
								(pc = o),
								(mc = i);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!ec &&
								null !== (o = n.updateQueue) &&
								null !== (o = o.lastEffect)
							) {
								i = o = o.next;
								do {
									var r = i,
										a = r.destroy;
									(r = r.tag),
										void 0 !== a &&
											(0 != (2 & r) || 0 != (4 & r)) &&
											ic(n, t, a),
										(i = i.next);
								} while (i !== o);
							}
							gc(e, t, n);
							break;
						case 1:
							if (
								!ec &&
								(oc(n, t),
								"function" == typeof (o = n.stateNode).componentWillUnmount)
							)
								try {
									(o.props = n.memoizedProps),
										(o.state = n.memoizedState),
										o.componentWillUnmount();
								} catch (Wf) {
									Id(n, t, Wf);
								}
							gc(e, t, n);
							break;
						case 21:
							gc(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((ec = (o = ec) || null !== n.memoizedState),
								  gc(e, t, n),
								  (ec = o))
								: gc(e, t, n);
							break;
						default:
							gc(e, t, n);
					}
				}
				function vc(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new tc()),
							t.forEach(function (t) {
								var o = Rd.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(o, o));
							});
					}
				}
				function yc(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var o = 0; o < n.length; o++) {
							var i = n[o];
							try {
								var r = e,
									a = t,
									s = a;
								e: for (; null !== s; ) {
									switch (s.tag) {
										case 5:
											(pc = s.stateNode), (mc = !1);
											break e;
										case 3:
										case 4:
											(pc = s.stateNode.containerInfo), (mc = !0);
											break e;
									}
									s = s.return;
								}
								if (null === pc) throw Error(le(160));
								bc(r, a, i), (pc = null), (mc = !1);
								var l = i.alternate;
								null !== l && (l.return = null), (i.return = null);
							} catch (Lh) {
								Id(i, t, Lh);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; ) wc(t, e), (t = t.sibling);
				}
				function wc(e, t) {
					var n = e.alternate,
						o = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((yc(t, e), xc(e), 4 & o)) {
								try {
									ac(3, e, e.return), sc(3, e);
								} catch (Ah) {
									Id(e, e.return, Ah);
								}
								try {
									ac(5, e, e.return);
								} catch (Ah) {
									Id(e, e.return, Ah);
								}
							}
							break;
						case 1:
							yc(t, e), xc(e), 512 & o && null !== n && oc(n, n.return);
							break;
						case 5:
							if (
								(yc(t, e),
								xc(e),
								512 & o && null !== n && oc(n, n.return),
								32 & e.flags)
							) {
								var i = e.stateNode;
								try {
									mt(i, "");
								} catch (Ah) {
									Id(e, e.return, Ah);
								}
							}
							if (4 & o && null != (i = e.stateNode)) {
								var r = e.memoizedProps,
									a = null !== n ? n.memoizedProps : r,
									s = e.type,
									l = e.updateQueue;
								if (((e.updateQueue = null), null !== l))
									try {
										"input" === s &&
											"radio" === r.type &&
											null != r.name &&
											et(i, r),
											kt(s, a);
										var c = kt(s, r);
										for (a = 0; a < l.length; a += 2) {
											var d = l[a],
												u = l[a + 1];
											"style" === d
												? yt(i, u)
												: "dangerouslySetInnerHTML" === d
												? pt(i, u)
												: "children" === d
												? mt(i, u)
												: ke(i, d, u, c);
										}
										switch (s) {
											case "input":
												tt(i, r);
												break;
											case "textarea":
												lt(i, r);
												break;
											case "select":
												var h = i._wrapperState.wasMultiple;
												i._wrapperState.wasMultiple = !!r.multiple;
												var f = r.value;
												null != f
													? rt(i, !!r.multiple, f, !1)
													: h !== !!r.multiple &&
													  (null != r.defaultValue
															? rt(i, !!r.multiple, r.defaultValue, !0)
															: rt(i, !!r.multiple, r.multiple ? [] : "", !1));
										}
										i[br] = r;
									} catch (Ah) {
										Id(e, e.return, Ah);
									}
							}
							break;
						case 6:
							if ((yc(t, e), xc(e), 4 & o)) {
								if (null === e.stateNode) throw Error(le(162));
								(i = e.stateNode), (r = e.memoizedProps);
								try {
									i.nodeValue = r;
								} catch (Ah) {
									Id(e, e.return, Ah);
								}
							}
							break;
						case 3:
							if (
								(yc(t, e),
								xc(e),
								4 & o && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									Xn(t.containerInfo);
								} catch (Ah) {
									Id(e, e.return, Ah);
								}
							break;
						case 4:
						default:
							yc(t, e), xc(e);
							break;
						case 13:
							yc(t, e),
								xc(e),
								8192 & (i = e.child).flags &&
									((r = null !== i.memoizedState),
									(i.stateNode.isHidden = r),
									!r ||
										(null !== i.alternate &&
											null !== i.alternate.memoizedState) ||
										(Uc = en())),
								4 & o && vc(e);
							break;
						case 22:
							if (
								((d = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((ec = (c = ec) || d), yc(t, e), (ec = c))
									: yc(t, e),
								xc(e),
								8192 & o)
							) {
								if (
									((c = null !== e.memoizedState),
									(e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
								)
									for (nc = e, d = e.child; null !== d; ) {
										for (u = nc = d; null !== nc; ) {
											switch (((f = (h = nc).child), h.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													ac(4, h, h.return);
													break;
												case 1:
													oc(h, h.return);
													var p = h.stateNode;
													if ("function" == typeof p.componentWillUnmount) {
														(o = h), (n = h.return);
														try {
															(t = o),
																(p.props = t.memoizedProps),
																(p.state = t.memoizedState),
																p.componentWillUnmount();
														} catch (Ah) {
															Id(o, n, Ah);
														}
													}
													break;
												case 5:
													oc(h, h.return);
													break;
												case 22:
													if (null !== h.memoizedState) {
														Cc(u);
														continue;
													}
											}
											null !== f ? ((f.return = h), (nc = f)) : Cc(u);
										}
										d = d.sibling;
									}
								e: for (d = null, u = e; ; ) {
									if (5 === u.tag) {
										if (null === d) {
											d = u;
											try {
												(i = u.stateNode),
													c
														? "function" == typeof (r = i.style).setProperty
															? r.setProperty("display", "none", "important")
															: (r.display = "none")
														: ((s = u.stateNode),
														  (a =
																null != (l = u.memoizedProps.style) &&
																l.hasOwnProperty("display")
																	? l.display
																	: null),
														  (s.style.display = vt("display", a)));
											} catch (Ah) {
												Id(e, e.return, Ah);
											}
										}
									} else if (6 === u.tag) {
										if (null === d)
											try {
												u.stateNode.nodeValue = c ? "" : u.memoizedProps;
											} catch (Ah) {
												Id(e, e.return, Ah);
											}
									} else if (
										((22 !== u.tag && 23 !== u.tag) ||
											null === u.memoizedState ||
											u === e) &&
										null !== u.child
									) {
										(u.child.return = u), (u = u.child);
										continue;
									}
									if (u === e) break e;
									for (; null === u.sibling; ) {
										if (null === u.return || u.return === e) break e;
										d === u && (d = null), (u = u.return);
									}
									d === u && (d = null),
										(u.sibling.return = u.return),
										(u = u.sibling);
								}
							}
							break;
						case 19:
							yc(t, e), xc(e), 4 & o && vc(e);
						case 21:
					}
				}
				function xc(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (dc(n)) {
										var o = n;
										break e;
									}
									n = n.return;
								}
								throw Error(le(160));
							}
							switch (o.tag) {
								case 5:
									var i = o.stateNode;
									32 & o.flags && (mt(i, ""), (o.flags &= -33)),
										fc(e, uc(e), i);
									break;
								case 3:
								case 4:
									var r = o.stateNode.containerInfo;
									hc(e, uc(e), r);
									break;
								default:
									throw Error(le(161));
							}
						} catch (Ph) {
							Id(e, e.return, Ph);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function kc(e, t, n) {
					(nc = e), Ec(e);
				}
				function Ec(e, t, n) {
					for (var o = 0 != (1 & e.mode); null !== nc; ) {
						var i = nc,
							r = i.child;
						if (22 === i.tag && o) {
							var a = null !== i.memoizedState || Jl;
							if (!a) {
								var s = i.alternate,
									l = (null !== s && null !== s.memoizedState) || ec;
								s = Jl;
								var c = ec;
								if (((Jl = a), (ec = l) && !c))
									for (nc = i; null !== nc; )
										(l = (a = nc).child),
											22 === a.tag && null !== a.memoizedState
												? $c(i)
												: null !== l
												? ((l.return = a), (nc = l))
												: $c(i);
								for (; null !== r; ) (nc = r), Ec(r), (r = r.sibling);
								(nc = i), (Jl = s), (ec = c);
							}
							Sc(e);
						} else
							0 != (8772 & i.subtreeFlags) && null !== r
								? ((r.return = i), (nc = r))
								: Sc(e);
					}
				}
				function Sc(e) {
					for (; null !== nc; ) {
						var t = nc;
						if (0 != (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 != (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											ec || sc(5, t);
											break;
										case 1:
											var o = t.stateNode;
											if (4 & t.flags && !ec)
												if (null === n) o.componentDidMount();
												else {
													var i =
														t.elementType === t.type
															? n.memoizedProps
															: wa(t.type, n.memoizedProps);
													o.componentDidUpdate(
														i,
														n.memoizedState,
														o.__reactInternalSnapshotBeforeUpdate
													);
												}
											var r = t.updateQueue;
											null !== r && Ha(t, r, o);
											break;
										case 3:
											var a = t.updateQueue;
											if (null !== a) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Ha(t, a, n);
											}
											break;
										case 5:
											var s = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = s;
												var l = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														l.autoFocus && n.focus();
														break;
													case "img":
														l.src && (n.src = l.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var d = c.memoizedState;
													if (null !== d) {
														var u = d.dehydrated;
														null !== u && Xn(u);
													}
												}
											}
											break;
										default:
											throw Error(le(163));
									}
								ec || (512 & t.flags && lc(t));
							} catch (Dh) {
								Id(t, t.return, Dh);
							}
						}
						if (t === e) {
							nc = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (nc = n);
							break;
						}
						nc = t.return;
					}
				}
				function Cc(e) {
					for (; null !== nc; ) {
						var t = nc;
						if (t === e) {
							nc = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (nc = n);
							break;
						}
						nc = t.return;
					}
				}
				function $c(e) {
					for (; null !== nc; ) {
						var t = nc;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										sc(4, t);
									} catch (Ph) {
										Id(t, n, Ph);
									}
									break;
								case 1:
									var o = t.stateNode;
									if ("function" == typeof o.componentDidMount) {
										var i = t.return;
										try {
											o.componentDidMount();
										} catch (Ph) {
											Id(t, i, Ph);
										}
									}
									var r = t.return;
									try {
										lc(t);
									} catch (Ph) {
										Id(t, r, Ph);
									}
									break;
								case 5:
									var a = t.return;
									try {
										lc(t);
									} catch (Ph) {
										Id(t, a, Ph);
									}
							}
						} catch (Ph) {
							Id(t, t.return, Ph);
						}
						if (t === e) {
							nc = null;
							break;
						}
						var s = t.sibling;
						if (null !== s) {
							(s.return = t.return), (nc = s);
							break;
						}
						nc = t.return;
					}
				}
				var zc,
					Ic = Math.ceil,
					Tc = Ee.ReactCurrentDispatcher,
					Pc = Ee.ReactCurrentOwner,
					Lc = Ee.ReactCurrentBatchConfig,
					Rc = 0,
					Oc = null,
					Nc = null,
					_c = 0,
					Dc = 0,
					Ac = Ir(0),
					Mc = 0,
					Bc = null,
					jc = 0,
					Vc = 0,
					Hc = 0,
					Fc = null,
					Wc = null,
					Uc = 0,
					Xc = 1 / 0,
					qc = null,
					Yc = !1,
					Gc = null,
					Qc = null,
					Kc = !1,
					Zc = null,
					Jc = 0,
					ed = 0,
					td = null,
					nd = -1,
					od = 0;
				function id() {
					return 0 != (6 & Rc) ? en() : -1 !== nd ? nd : (nd = en());
				}
				function rd(e) {
					return 0 == (1 & e.mode)
						? 1
						: 0 != (2 & Rc) && 0 !== _c
						? _c & -_c
						: null !== ya.transition
						? (0 === od && (od = yn()), od)
						: 0 !== (e = En)
						? e
						: (e = void 0 === (e = window.event) ? 16 : eo(e.type));
				}
				function ad(e, t, n, o) {
					if (50 < ed) throw ((ed = 0), (td = null), Error(le(185)));
					xn(e, n, o),
						(0 != (2 & Rc) && e === Oc) ||
							(e === Oc && (0 == (2 & Rc) && (Vc |= n), 4 === Mc && ud(e, _c)),
							sd(e, o),
							1 === n &&
								0 === Rc &&
								0 == (1 & t.mode) &&
								((Xc = en() + 500), Fr && Xr()));
				}
				function sd(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								o = e.pingedLanes,
								i = e.expirationTimes,
								r = e.pendingLanes;
							0 < r;

						) {
							var a = 31 - dn(r),
								s = 1 << a,
								l = i[a];
							-1 === l
								? (0 != (s & n) && 0 == (s & o)) || (i[a] = bn(s, t))
								: l <= t && (e.expiredLanes |= s),
								(r &= ~s);
						}
					})(e, t);
					var o = gn(e, e === Oc ? _c : 0);
					if (0 === o)
						null !== n && Kt(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = o & -o), e.callbackPriority !== t)) {
						if ((null != n && Kt(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Fr = !0), Ur(e);
								  })(hd.bind(null, e))
								: Ur(hd.bind(null, e)),
								dr(function () {
									0 == (6 & Rc) && Xr();
								}),
								(n = null);
						else {
							switch (Sn(o)) {
								case 1:
									n = nn;
									break;
								case 4:
									n = on;
									break;
								case 16:
								default:
									n = rn;
									break;
								case 536870912:
									n = sn;
							}
							n = Od(n, ld.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function ld(e, t) {
					if (((nd = -1), (od = 0), 0 != (6 & Rc))) throw Error(le(327));
					var n = e.callbackNode;
					if ($d() && e.callbackNode !== n) return null;
					var o = gn(e, e === Oc ? _c : 0);
					if (0 === o) return null;
					if (0 != (30 & o) || 0 != (o & e.expiredLanes) || t) t = wd(e, o);
					else {
						t = o;
						var i = Rc;
						Rc |= 2;
						var r = vd();
						for (
							(Oc === e && _c === t) ||
							((qc = null), (Xc = en() + 500), gd(e, t));
							;

						)
							try {
								kd();
								break;
							} catch (Wf) {
								bd(e, Wf);
							}
						Ca(),
							(Tc.current = r),
							(Rc = i),
							null !== Nc ? (t = 0) : ((Oc = null), (_c = 0), (t = Mc));
					}
					if (0 !== t) {
						if (
							(2 === t && 0 !== (i = vn(e)) && ((o = i), (t = cd(e, i))),
							1 === t)
						)
							throw ((n = Bc), gd(e, 0), ud(e, o), sd(e, en()), n);
						if (6 === t) ud(e, o);
						else {
							if (
								((i = e.current.alternate),
								0 == (30 & o) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var o = 0; o < n.length; o++) {
														var i = n[o],
															r = i.getSnapshot;
														i = i.value;
														try {
															if (!ui(r(), i)) return !1;
														} catch (a) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(i) &&
									(2 === (t = wd(e, o)) &&
										0 !== (r = vn(e)) &&
										((o = r), (t = cd(e, r))),
									1 === t))
							)
								throw ((n = Bc), gd(e, 0), ud(e, o), sd(e, en()), n);
							switch (((e.finishedWork = i), (e.finishedLanes = o), t)) {
								case 0:
								case 1:
									throw Error(le(345));
								case 2:
								case 5:
									Cd(e, Wc, qc);
									break;
								case 3:
									if (
										(ud(e, o),
										(130023424 & o) === o && 10 < (t = Uc + 500 - en()))
									) {
										if (0 !== gn(e, 0)) break;
										if (((i = e.suspendedLanes) & o) !== o) {
											id(), (e.pingedLanes |= e.suspendedLanes & i);
											break;
										}
										e.timeoutHandle = sr(Cd.bind(null, e, Wc, qc), t);
										break;
									}
									Cd(e, Wc, qc);
									break;
								case 4:
									if ((ud(e, o), (4194240 & o) === o)) break;
									for (t = e.eventTimes, i = -1; 0 < o; ) {
										var a = 31 - dn(o);
										(r = 1 << a), (a = t[a]) > i && (i = a), (o &= ~r);
									}
									if (
										((o = i),
										10 <
											(o =
												(120 > (o = en() - o)
													? 120
													: 480 > o
													? 480
													: 1080 > o
													? 1080
													: 1920 > o
													? 1920
													: 3e3 > o
													? 3e3
													: 4320 > o
													? 4320
													: 1960 * Ic(o / 1960)) - o))
									) {
										e.timeoutHandle = sr(Cd.bind(null, e, Wc, qc), o);
										break;
									}
									Cd(e, Wc, qc);
									break;
								default:
									throw Error(le(329));
							}
						}
					}
					return sd(e, en()), e.callbackNode === n ? ld.bind(null, e) : null;
				}
				function cd(e, t) {
					var n = Fc;
					return (
						e.current.memoizedState.isDehydrated && (gd(e, t).flags |= 256),
						2 !== (e = wd(e, t)) && ((t = Wc), (Wc = n), null !== t && dd(t)),
						e
					);
				}
				function dd(e) {
					null === Wc ? (Wc = e) : Wc.push.apply(Wc, e);
				}
				function ud(e, t) {
					for (
						t &= ~Hc,
							t &= ~Vc,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - dn(t),
							o = 1 << n;
						(e[n] = -1), (t &= ~o);
					}
				}
				function hd(e) {
					if (0 != (6 & Rc)) throw Error(le(327));
					$d();
					var t = gn(e, 0);
					if (0 == (1 & t)) return sd(e, en()), null;
					var n = wd(e, t);
					if (0 !== e.tag && 2 === n) {
						var o = vn(e);
						0 !== o && ((t = o), (n = cd(e, o)));
					}
					if (1 === n) throw ((n = Bc), gd(e, 0), ud(e, t), sd(e, en()), n);
					if (6 === n) throw Error(le(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						Cd(e, Wc, qc),
						sd(e, en()),
						null
					);
				}
				function fd(e, t) {
					var n = Rc;
					Rc |= 1;
					try {
						return e(t);
					} finally {
						0 === (Rc = n) && ((Xc = en() + 500), Fr && Xr());
					}
				}
				function pd(e) {
					null !== Zc && 0 === Zc.tag && 0 == (6 & Rc) && $d();
					var t = Rc;
					Rc |= 1;
					var n = Lc.transition,
						o = En;
					try {
						if (((Lc.transition = null), (En = 1), e)) return e();
					} finally {
						(En = o), (Lc.transition = n), 0 == (6 & (Rc = t)) && Xr();
					}
				}
				function md() {
					(Dc = Ac.current), Tr(Ac);
				}
				function gd(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), lr(n)), null !== Nc))
						for (n = Nc.return; null !== n; ) {
							var o = n;
							switch ((ra(o), o.tag)) {
								case 1:
									null != (o = o.type.childContextTypes) && Ar();
									break;
								case 3:
									ls(), Tr(Or), Tr(Rr), ps();
									break;
								case 5:
									ds(o);
									break;
								case 4:
									ls();
									break;
								case 13:
								case 19:
									Tr(us);
									break;
								case 10:
									$a(o.type._context);
									break;
								case 22:
								case 23:
									md();
							}
							n = n.return;
						}
					if (
						((Oc = e),
						(Nc = e = Ad(e.current, null)),
						(_c = Dc = t),
						(Mc = 0),
						(Bc = null),
						(Hc = Vc = jc = 0),
						(Wc = Fc = null),
						null !== Pa)
					) {
						for (t = 0; t < Pa.length; t++)
							if (null !== (o = (n = Pa[t]).interleaved)) {
								n.interleaved = null;
								var i = o.next,
									r = n.pending;
								if (null !== r) {
									var a = r.next;
									(r.next = i), (o.next = a);
								}
								n.pending = o;
							}
						Pa = null;
					}
					return e;
				}
				function bd(e, t) {
					for (;;) {
						var n = Nc;
						try {
							if ((Ca(), (ms.current = cl), xs)) {
								for (var o = vs.memoizedState; null !== o; ) {
									var i = o.queue;
									null !== i && (i.pending = null), (o = o.next);
								}
								xs = !1;
							}
							if (
								((bs = 0),
								(ws = ys = vs = null),
								(ks = !1),
								(Es = 0),
								(Pc.current = null),
								null === n || null === n.return)
							) {
								(Mc = 1), (Bc = t), (Nc = null);
								break;
							}
							e: {
								var r = e,
									a = n.return,
									s = n,
									l = t;
								if (
									((t = _c),
									(s.flags |= 32768),
									null !== l &&
										"object" == typeof l &&
										"function" == typeof l.then)
								) {
									var c = l,
										d = s,
										u = d.tag;
									if (0 == (1 & d.mode) && (0 === u || 11 === u || 15 === u)) {
										var h = d.alternate;
										h
											? ((d.updateQueue = h.updateQueue),
											  (d.memoizedState = h.memoizedState),
											  (d.lanes = h.lanes))
											: ((d.updateQueue = null), (d.memoizedState = null));
									}
									var f = wl(a);
									if (null !== f) {
										(f.flags &= -257),
											xl(f, a, s, 0, t),
											1 & f.mode && yl(r, c, t),
											(l = c);
										var p = (t = f).updateQueue;
										if (null === p) {
											var m = new Set();
											m.add(l), (t.updateQueue = m);
										} else p.add(l);
										break e;
									}
									if (0 == (1 & t)) {
										yl(r, c, t), yd();
										break e;
									}
									l = Error(le(426));
								} else if (la && 1 & s.mode) {
									var g = wl(a);
									if (null !== g) {
										0 == (65536 & g.flags) && (g.flags |= 256),
											xl(g, a, s, 0, t),
											va(fl(l, s));
										break e;
									}
								}
								(r = l = fl(l, s)),
									4 !== Mc && (Mc = 2),
									null === Fc ? (Fc = [r]) : Fc.push(r),
									(r = a);
								do {
									switch (r.tag) {
										case 3:
											(r.flags |= 65536),
												(t &= -t),
												(r.lanes |= t),
												ja(r, bl(0, l, t));
											break e;
										case 1:
											s = l;
											var b = r.type,
												v = r.stateNode;
											if (
												0 == (128 & r.flags) &&
												("function" == typeof b.getDerivedStateFromError ||
													(null !== v &&
														"function" == typeof v.componentDidCatch &&
														(null === Qc || !Qc.has(v))))
											) {
												(r.flags |= 65536),
													(t &= -t),
													(r.lanes |= t),
													ja(r, vl(r, s, t));
												break e;
											}
									}
									r = r.return;
								} while (null !== r);
							}
							Sd(n);
						} catch (y) {
							(t = y), Nc === n && null !== n && (Nc = n = n.return);
							continue;
						}
						break;
					}
				}
				function vd() {
					var e = Tc.current;
					return (Tc.current = cl), null === e ? cl : e;
				}
				function yd() {
					(0 !== Mc && 3 !== Mc && 2 !== Mc) || (Mc = 4),
						null === Oc ||
							(0 == (268435455 & jc) && 0 == (268435455 & Vc)) ||
							ud(Oc, _c);
				}
				function wd(e, t) {
					var n = Rc;
					Rc |= 2;
					var o = vd();
					for ((Oc === e && _c === t) || ((qc = null), gd(e, t)); ; )
						try {
							xd();
							break;
						} catch ($h) {
							bd(e, $h);
						}
					if ((Ca(), (Rc = n), (Tc.current = o), null !== Nc))
						throw Error(le(261));
					return (Oc = null), (_c = 0), Mc;
				}
				function xd() {
					for (; null !== Nc; ) Ed(Nc);
				}
				function kd() {
					for (; null !== Nc && !Zt(); ) Ed(Nc);
				}
				function Ed(e) {
					var t = zc(e.alternate, e, Dc);
					(e.memoizedProps = e.pendingProps),
						null === t ? Sd(e) : (Nc = t),
						(Pc.current = null);
				}
				function Sd(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 == (32768 & t.flags))) {
							if (null !== (n = Kl(n, t, Dc))) return void (Nc = n);
						} else {
							if (null !== (n = Zl(n, t)))
								return (n.flags &= 32767), void (Nc = n);
							if (null === e) return (Mc = 6), void (Nc = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Nc = t);
						Nc = t = e;
					} while (null !== t);
					0 === Mc && (Mc = 5);
				}
				function Cd(e, t, n) {
					var o = En,
						i = Lc.transition;
					try {
						(Lc.transition = null),
							(En = 1),
							(function (e, t, n, o) {
								do {
									$d();
								} while (null !== Zc);
								if (0 != (6 & Rc)) throw Error(le(327));
								n = e.finishedWork;
								var i = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(le(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var r = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var o = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var i = 31 - dn(n),
												r = 1 << i;
											(t[i] = 0), (o[i] = -1), (e[i] = -1), (n &= ~r);
										}
									})(e, r),
									e === Oc && ((Nc = Oc = null), (_c = 0)),
									(0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
										Kc ||
										((Kc = !0),
										Od(rn, function () {
											return $d(), null;
										})),
									(r = 0 != (15990 & n.flags)),
									0 != (15990 & n.subtreeFlags) || r)
								) {
									(r = Lc.transition), (Lc.transition = null);
									var a = En;
									En = 1;
									var s = Rc;
									(Rc |= 4),
										(Pc.current = null),
										(function (e, t) {
											if (((ir = Yn), bi((e = gi())))) {
												if ("selectionStart" in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var o =
															(n =
																((n = e.ownerDocument) && n.defaultView) ||
																window).getSelection && n.getSelection();
														if (o && 0 !== o.rangeCount) {
															n = o.anchorNode;
															var i = o.anchorOffset,
																r = o.focusNode;
															o = o.focusOffset;
															try {
																n.nodeType, r.nodeType;
															} catch (C) {
																n = null;
																break e;
															}
															var a = 0,
																s = -1,
																l = -1,
																c = 0,
																d = 0,
																u = e,
																h = null;
															t: for (;;) {
																for (
																	var f;
																	u !== n ||
																		(0 !== i && 3 !== u.nodeType) ||
																		(s = a + i),
																		u !== r ||
																			(0 !== o && 3 !== u.nodeType) ||
																			(l = a + o),
																		3 === u.nodeType &&
																			(a += u.nodeValue.length),
																		null !== (f = u.firstChild);

																)
																	(h = u), (u = f);
																for (;;) {
																	if (u === e) break t;
																	if (
																		(h === n && ++c === i && (s = a),
																		h === r && ++d === o && (l = a),
																		null !== (f = u.nextSibling))
																	)
																		break;
																	h = (u = h).parentNode;
																}
																u = f;
															}
															n =
																-1 === s || -1 === l
																	? null
																	: { start: s, end: l };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												rr = { focusedElem: e, selectionRange: n },
													Yn = !1,
													nc = t;
												null !== nc;

											)
												if (
													((e = (t = nc).child),
													0 != (1028 & t.subtreeFlags) && null !== e)
												)
													(e.return = t), (nc = e);
												else
													for (; null !== nc; ) {
														t = nc;
														try {
															var p = t.alternate;
															if (0 != (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== p) {
																			var m = p.memoizedProps,
																				g = p.memoizedState,
																				b = t.stateNode,
																				v = b.getSnapshotBeforeUpdate(
																					t.elementType === t.type
																						? m
																						: wa(t.type, m),
																					g
																				);
																			b.__reactInternalSnapshotBeforeUpdate = v;
																		}
																		break;
																	case 3:
																		var y = t.stateNode.containerInfo;
																		1 === y.nodeType
																			? (y.textContent = "")
																			: 9 === y.nodeType &&
																			  y.documentElement &&
																			  y.removeChild(y.documentElement);
																		break;
																	default:
																		throw Error(le(163));
																}
														} catch (C) {
															Id(t, t.return, C);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (nc = e);
															break;
														}
														nc = t.return;
													}
											(p = rc), (rc = !1);
										})(e, n),
										wc(n, e),
										vi(rr),
										(Yn = !!ir),
										(rr = ir = null),
										(e.current = n),
										kc(n),
										Jt(),
										(Rc = s),
										(En = a),
										(Lc.transition = r);
								} else e.current = n;
								if (
									(Kc && ((Kc = !1), (Zc = e), (Jc = i)),
									(r = e.pendingLanes),
									0 === r && (Qc = null),
									(function (e) {
										if (cn && "function" == typeof cn.onCommitFiberRoot)
											try {
												cn.onCommitFiberRoot(
													ln,
													e,
													void 0,
													128 == (128 & e.current.flags)
												);
											} catch (t) {}
									})(n.stateNode),
									sd(e, en()),
									null !== t)
								)
									for (o = e.onRecoverableError, n = 0; n < t.length; n++)
										(i = t[n]),
											o(i.value, { componentStack: i.stack, digest: i.digest });
								if (Yc) throw ((Yc = !1), (e = Gc), (Gc = null), e);
								0 != (1 & Jc) && 0 !== e.tag && $d(),
									(r = e.pendingLanes),
									0 != (1 & r)
										? e === td
											? ed++
											: ((ed = 0), (td = e))
										: (ed = 0),
									Xr();
							})(e, t, n, o);
					} finally {
						(Lc.transition = i), (En = o);
					}
					return null;
				}
				function $d() {
					if (null !== Zc) {
						var e = Sn(Jc),
							t = Lc.transition,
							n = En;
						try {
							if (((Lc.transition = null), (En = 16 > e ? 16 : e), null === Zc))
								var o = !1;
							else {
								if (((e = Zc), (Zc = null), (Jc = 0), 0 != (6 & Rc)))
									throw Error(le(331));
								var i = Rc;
								for (Rc |= 4, nc = e.current; null !== nc; ) {
									var r = nc,
										a = r.child;
									if (0 != (16 & nc.flags)) {
										var s = r.deletions;
										if (null !== s) {
											for (var l = 0; l < s.length; l++) {
												var c = s[l];
												for (nc = c; null !== nc; ) {
													var d = nc;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															ac(8, d, r);
													}
													var u = d.child;
													if (null !== u) (u.return = d), (nc = u);
													else
														for (; null !== nc; ) {
															var h = (d = nc).sibling,
																f = d.return;
															if ((cc(d), d === c)) {
																nc = null;
																break;
															}
															if (null !== h) {
																(h.return = f), (nc = h);
																break;
															}
															nc = f;
														}
												}
											}
											var p = r.alternate;
											if (null !== p) {
												var m = p.child;
												if (null !== m) {
													p.child = null;
													do {
														var g = m.sibling;
														(m.sibling = null), (m = g);
													} while (null !== m);
												}
											}
											nc = r;
										}
									}
									if (0 != (2064 & r.subtreeFlags) && null !== a)
										(a.return = r), (nc = a);
									else
										e: for (; null !== nc; ) {
											if (0 != (2048 & (r = nc).flags))
												switch (r.tag) {
													case 0:
													case 11:
													case 15:
														ac(9, r, r.return);
												}
											var b = r.sibling;
											if (null !== b) {
												(b.return = r.return), (nc = b);
												break e;
											}
											nc = r.return;
										}
								}
								var v = e.current;
								for (nc = v; null !== nc; ) {
									var y = (a = nc).child;
									if (0 != (2064 & a.subtreeFlags) && null !== y)
										(y.return = a), (nc = y);
									else
										e: for (a = v; null !== nc; ) {
											if (0 != (2048 & (s = nc).flags))
												try {
													switch (s.tag) {
														case 0:
														case 11:
														case 15:
															sc(9, s);
													}
												} catch (x) {
													Id(s, s.return, x);
												}
											if (s === a) {
												nc = null;
												break e;
											}
											var w = s.sibling;
											if (null !== w) {
												(w.return = s.return), (nc = w);
												break e;
											}
											nc = s.return;
										}
								}
								if (
									((Rc = i),
									Xr(),
									cn && "function" == typeof cn.onPostCommitFiberRoot)
								)
									try {
										cn.onPostCommitFiberRoot(ln, e);
									} catch (x) {}
								o = !0;
							}
							return o;
						} finally {
							(En = n), (Lc.transition = t);
						}
					}
					return !1;
				}
				function zd(e, t, n) {
					(e = Ma(e, (t = bl(0, (t = fl(n, t)), 1)), 1)),
						(t = id()),
						null !== e && (xn(e, 1, t), sd(e, t));
				}
				function Id(e, t, n) {
					if (3 === e.tag) zd(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								zd(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var o = t.stateNode;
								if (
									"function" == typeof t.type.getDerivedStateFromError ||
									("function" == typeof o.componentDidCatch &&
										(null === Qc || !Qc.has(o)))
								) {
									(t = Ma(t, (e = vl(t, (e = fl(n, e)), 1)), 1)),
										(e = id()),
										null !== t && (xn(t, 1, e), sd(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Td(e, t, n) {
					var o = e.pingCache;
					null !== o && o.delete(t),
						(t = id()),
						(e.pingedLanes |= e.suspendedLanes & n),
						Oc === e &&
							(_c & n) === n &&
							(4 === Mc ||
							(3 === Mc && (130023424 & _c) === _c && 500 > en() - Uc)
								? gd(e, 0)
								: (Hc |= n)),
						sd(e, t);
				}
				function Pd(e, t) {
					0 === t &&
						(0 == (1 & e.mode)
							? (t = 1)
							: ((t = pn), 0 == (130023424 & (pn <<= 1)) && (pn = 4194304)));
					var n = id();
					null !== (e = Oa(e, t)) && (xn(e, t, n), sd(e, n));
				}
				function Ld(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Pd(e, n);
				}
				function Rd(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var o = e.stateNode,
								i = e.memoizedState;
							null !== i && (n = i.retryLane);
							break;
						case 19:
							o = e.stateNode;
							break;
						default:
							throw Error(le(314));
					}
					null !== o && o.delete(t), Pd(e, n);
				}
				function Od(e, t) {
					return Qt(e, t);
				}
				function Nd(e, t, n, o) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = o),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function _d(e, t, n, o) {
					return new Nd(e, t, n, o);
				}
				function Dd(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Ad(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = _d(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Md(e, t, n, o, i, r) {
					var a = 2;
					if (((o = e), "function" == typeof e)) Dd(e) && (a = 1);
					else if ("string" == typeof e) a = 5;
					else
						e: switch (e) {
							case $e:
								return Bd(n.children, i, r, t);
							case ze:
								(a = 8), (i |= 8);
								break;
							case Ie:
								return (
									((e = _d(12, n, t, 2 | i)).elementType = Ie), (e.lanes = r), e
								);
							case Re:
								return (
									((e = _d(13, n, t, i)).elementType = Re), (e.lanes = r), e
								);
							case Oe:
								return (
									((e = _d(19, n, t, i)).elementType = Oe), (e.lanes = r), e
								);
							case De:
								return jd(n, i, r, t);
							default:
								if ("object" == typeof e && null !== e)
									switch (e.$$typeof) {
										case Te:
											a = 10;
											break e;
										case Pe:
											a = 9;
											break e;
										case Le:
											a = 11;
											break e;
										case Ne:
											a = 14;
											break e;
										case _e:
											(a = 16), (o = null);
											break e;
									}
								throw Error(le(130, null == e ? e : typeof e, ""));
						}
					return (
						((t = _d(a, n, t, i)).elementType = e),
						(t.type = o),
						(t.lanes = r),
						t
					);
				}
				function Bd(e, t, n, o) {
					return ((e = _d(7, e, o, t)).lanes = n), e;
				}
				function jd(e, t, n, o) {
					return (
						((e = _d(22, e, o, t)).elementType = De),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Vd(e, t, n) {
					return ((e = _d(6, e, null, t)).lanes = n), e;
				}
				function Hd(e, t, n) {
					return (
						((t = _d(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Fd(e, t, n, o, i) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = wn(0)),
						(this.expirationTimes = wn(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = wn(0)),
						(this.identifierPrefix = o),
						(this.onRecoverableError = i),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Wd(e, t, n, o, i, r, a, s, l) {
					return (
						(e = new Fd(e, t, n, s, l)),
						1 === t ? ((t = 1), !0 === r && (t |= 8)) : (t = 0),
						(r = _d(3, null, null, t)),
						(e.current = r),
						(r.stateNode = e),
						(r.memoizedState = {
							element: o,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						_a(r),
						e
					);
				}
				function Ud(e) {
					if (!e) return Lr;
					e: {
						if (Ut((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(le(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Dr(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(le(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Dr(n)) return Br(e, n, t);
					}
					return t;
				}
				function Xd(e, t, n, o, i, r, a, s, l) {
					return (
						((e = Wd(n, o, !0, e, 0, r, 0, s, l)).context = Ud(null)),
						(n = e.current),
						((r = Aa((o = id()), (i = rd(n)))).callback = null != t ? t : null),
						Ma(n, r, i),
						(e.current.lanes = i),
						xn(e, i, o),
						sd(e, o),
						e
					);
				}
				function qd(e, t, n, o) {
					var i = t.current,
						r = id(),
						a = rd(i);
					return (
						(n = Ud(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = Aa(r, a)).payload = { element: e }),
						null !== (o = void 0 === o ? null : o) && (t.callback = o),
						null !== (e = Ma(i, t, a)) && (ad(e, i, a, r), Ba(e, i, a)),
						a
					);
				}
				function Yd(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function Gd(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Qd(e, t) {
					Gd(e, t), (e = e.alternate) && Gd(e, t);
				}
				zc = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Or.current) El = !0;
						else {
							if (0 == (e.lanes & n) && 0 == (128 & t.flags))
								return (
									(El = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Ol(t), ba();
												break;
											case 5:
												cs(t);
												break;
											case 1:
												Dr(t.type) && jr(t);
												break;
											case 4:
												ss(t, t.stateNode.containerInfo);
												break;
											case 10:
												var o = t.type._context,
													i = t.memoizedProps.value;
												Pr(xa, o._currentValue), (o._currentValue = i);
												break;
											case 13:
												if (null !== (o = t.memoizedState))
													return null !== o.dehydrated
														? (Pr(us, 1 & us.current), (t.flags |= 128), null)
														: 0 != (n & t.child.childLanes)
														? Vl(e, t, n)
														: (Pr(us, 1 & us.current),
														  null !== (e = Yl(e, t, n)) ? e.sibling : null);
												Pr(us, 1 & us.current);
												break;
											case 19:
												if (
													((o = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
												) {
													if (o) return Xl(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (i = t.memoizedState) &&
														((i.rendering = null),
														(i.tail = null),
														(i.lastEffect = null)),
													Pr(us, us.current),
													o)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Il(e, t, n);
										}
										return Yl(e, t, n);
									})(e, t, n)
								);
							El = 0 != (131072 & e.flags);
						}
					else (El = !1), la && 0 != (1048576 & t.flags) && oa(t, Qr, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var o = t.type;
							ql(e, t), (e = t.pendingProps);
							var i = _r(t, Rr.current);
							Ia(t, n), (i = zs(null, t, o, e, i, n));
							var r = Is();
							return (
								(t.flags |= 1),
								"object" == typeof i &&
								null !== i &&
								"function" == typeof i.render &&
								void 0 === i.$$typeof
									? ((t.tag = 1),
									  (t.memoizedState = null),
									  (t.updateQueue = null),
									  Dr(o) ? ((r = !0), jr(t)) : (r = !1),
									  (t.memoizedState =
											null !== i.state && void 0 !== i.state ? i.state : null),
									  _a(t),
									  (i.updater = Ua),
									  (t.stateNode = i),
									  (i._reactInternals = t),
									  Ga(t, o, e, n),
									  (t = Rl(null, t, o, !0, r, n)))
									: ((t.tag = 0),
									  la && r && ia(t),
									  Sl(null, t, i, n),
									  (t = t.child)),
								t
							);
						case 16:
							o = t.elementType;
							e: {
								switch (
									(ql(e, t),
									(e = t.pendingProps),
									(o = (i = o._init)(o._payload)),
									(t.type = o),
									(i = t.tag =
										(function (e) {
											if ("function" == typeof e) return Dd(e) ? 1 : 0;
											if (null != e) {
												if ((e = e.$$typeof) === Le) return 11;
												if (e === Ne) return 14;
											}
											return 2;
										})(o)),
									(e = wa(o, e)),
									i)
								) {
									case 0:
										t = Pl(null, t, o, e, n);
										break e;
									case 1:
										t = Ll(null, t, o, e, n);
										break e;
									case 11:
										t = Cl(null, t, o, e, n);
										break e;
									case 14:
										t = $l(null, t, o, wa(o.type, e), n);
										break e;
								}
								throw Error(le(306, o, ""));
							}
							return t;
						case 0:
							return (
								(o = t.type),
								(i = t.pendingProps),
								Pl(e, t, o, (i = t.elementType === o ? i : wa(o, i)), n)
							);
						case 1:
							return (
								(o = t.type),
								(i = t.pendingProps),
								Ll(e, t, o, (i = t.elementType === o ? i : wa(o, i)), n)
							);
						case 3:
							e: {
								if ((Ol(t), null === e)) throw Error(le(387));
								(o = t.pendingProps),
									(i = (r = t.memoizedState).element),
									Da(e, t),
									Va(t, o, null, n);
								var a = t.memoizedState;
								if (((o = a.element), r.isDehydrated)) {
									if (
										((r = {
											element: o,
											isDehydrated: !1,
											cache: a.cache,
											pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
											transitions: a.transitions,
										}),
										(t.updateQueue.baseState = r),
										(t.memoizedState = r),
										256 & t.flags)
									) {
										t = Nl(e, t, o, n, (i = fl(Error(le(423)), t)));
										break e;
									}
									if (o !== i) {
										t = Nl(e, t, o, n, (i = fl(Error(le(424)), t)));
										break e;
									}
									for (
										sa = fr(t.stateNode.containerInfo.firstChild),
											aa = t,
											la = !0,
											ca = null,
											n = ts(t, null, o, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((ba(), o === i)) {
										t = Yl(e, t, n);
										break e;
									}
									Sl(e, t, o, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								cs(t),
								null === e && fa(t),
								(o = t.type),
								(i = t.pendingProps),
								(r = null !== e ? e.memoizedProps : null),
								(a = i.children),
								ar(o, i)
									? (a = null)
									: null !== r && ar(o, r) && (t.flags |= 32),
								Tl(e, t),
								Sl(e, t, a, n),
								t.child
							);
						case 6:
							return null === e && fa(t), null;
						case 13:
							return Vl(e, t, n);
						case 4:
							return (
								ss(t, t.stateNode.containerInfo),
								(o = t.pendingProps),
								null === e ? (t.child = es(t, null, o, n)) : Sl(e, t, o, n),
								t.child
							);
						case 11:
							return (
								(o = t.type),
								(i = t.pendingProps),
								Cl(e, t, o, (i = t.elementType === o ? i : wa(o, i)), n)
							);
						case 7:
							return Sl(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return Sl(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((o = t.type._context),
									(i = t.pendingProps),
									(r = t.memoizedProps),
									(a = i.value),
									Pr(xa, o._currentValue),
									(o._currentValue = a),
									null !== r)
								)
									if (ui(r.value, a)) {
										if (r.children === i.children && !Or.current) {
											t = Yl(e, t, n);
											break e;
										}
									} else
										for (
											null !== (r = t.child) && (r.return = t);
											null !== r;

										) {
											var s = r.dependencies;
											if (null !== s) {
												a = r.child;
												for (var l = s.firstContext; null !== l; ) {
													if (l.context === o) {
														if (1 === r.tag) {
															(l = Aa(-1, n & -n)).tag = 2;
															var c = r.updateQueue;
															if (null !== c) {
																var d = (c = c.shared).pending;
																null === d
																	? (l.next = l)
																	: ((l.next = d.next), (d.next = l)),
																	(c.pending = l);
															}
														}
														(r.lanes |= n),
															null !== (l = r.alternate) && (l.lanes |= n),
															za(r.return, n, t),
															(s.lanes |= n);
														break;
													}
													l = l.next;
												}
											} else if (10 === r.tag)
												a = r.type === t.type ? null : r.child;
											else if (18 === r.tag) {
												if (null === (a = r.return)) throw Error(le(341));
												(a.lanes |= n),
													null !== (s = a.alternate) && (s.lanes |= n),
													za(a, n, t),
													(a = r.sibling);
											} else a = r.child;
											if (null !== a) a.return = r;
											else
												for (a = r; null !== a; ) {
													if (a === t) {
														a = null;
														break;
													}
													if (null !== (r = a.sibling)) {
														(r.return = a.return), (a = r);
														break;
													}
													a = a.return;
												}
											r = a;
										}
								Sl(e, t, i.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(i = t.type),
								(o = t.pendingProps.children),
								Ia(t, n),
								(o = o((i = Ta(i)))),
								(t.flags |= 1),
								Sl(e, t, o, n),
								t.child
							);
						case 14:
							return (
								(i = wa((o = t.type), t.pendingProps)),
								$l(e, t, o, (i = wa(o.type, i)), n)
							);
						case 15:
							return zl(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(o = t.type),
								(i = t.pendingProps),
								(i = t.elementType === o ? i : wa(o, i)),
								ql(e, t),
								(t.tag = 1),
								Dr(o) ? ((e = !0), jr(t)) : (e = !1),
								Ia(t, n),
								qa(t, o, i),
								Ga(t, o, i, n),
								Rl(null, t, o, !0, e, n)
							);
						case 19:
							return Xl(e, t, n);
						case 22:
							return Il(e, t, n);
					}
					throw Error(le(156, t.tag));
				};
				var Kd =
					"function" == typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Zd(e) {
					this._internalRoot = e;
				}
				function Jd(e) {
					this._internalRoot = e;
				}
				function eu(e) {
					return !(
						!e ||
						(1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
					);
				}
				function tu(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								" react-mount-point-unstable " !== e.nodeValue))
					);
				}
				function nu() {}
				function ou(e, t, n, o, i) {
					var r = n._reactRootContainer;
					if (r) {
						var a = r;
						if ("function" == typeof i) {
							var s = i;
							i = function () {
								var e = Yd(a);
								s.call(e);
							};
						}
						qd(t, a, e, i);
					} else
						a = (function (e, t, n, o, i) {
							if (i) {
								if ("function" == typeof o) {
									var r = o;
									o = function () {
										var e = Yd(a);
										r.call(e);
									};
								}
								var a = Xd(t, o, e, 0, null, !1, 0, "", nu);
								return (
									(e._reactRootContainer = a),
									(e[vr] = a.current),
									Xi(8 === e.nodeType ? e.parentNode : e),
									pd(),
									a
								);
							}
							for (; (i = e.lastChild); ) e.removeChild(i);
							if ("function" == typeof o) {
								var s = o;
								o = function () {
									var e = Yd(l);
									s.call(e);
								};
							}
							var l = Wd(e, 0, !1, null, 0, !1, 0, "", nu);
							return (
								(e._reactRootContainer = l),
								(e[vr] = l.current),
								Xi(8 === e.nodeType ? e.parentNode : e),
								pd(function () {
									qd(t, l, n, o);
								}),
								l
							);
						})(n, t, e, i, o);
					return Yd(a);
				}
				(Jd.prototype.render = Zd.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(le(409));
						qd(e, t, null, null);
					}),
					(Jd.prototype.unmount = Zd.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								pd(function () {
									qd(null, e, null, null);
								}),
									(t[vr] = null);
							}
						}),
					(Jd.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = In();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < An.length && 0 !== t && t < An[n].priority;
								n++
							);
							An.splice(n, 0, e), 0 === n && Vn(e);
						}
					}),
					(Cn = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = mn(t.pendingLanes);
									0 !== n &&
										(kn(t, 1 | n),
										sd(t, en()),
										0 == (6 & Rc) && ((Xc = en() + 500), Xr()));
								}
								break;
							case 13:
								pd(function () {
									var t = Oa(e, 1);
									if (null !== t) {
										var n = id();
										ad(t, e, 1, n);
									}
								}),
									Qd(e, 1);
						}
					}),
					($n = function (e) {
						if (13 === e.tag) {
							var t = Oa(e, 134217728);
							if (null !== t) ad(t, e, 134217728, id());
							Qd(e, 134217728);
						}
					}),
					(zn = function (e) {
						if (13 === e.tag) {
							var t = rd(e),
								n = Oa(e, t);
							if (null !== n) ad(n, e, t, id());
							Qd(e, t);
						}
					}),
					(In = function () {
						return En;
					}),
					(Tn = function (e, t) {
						var n = En;
						try {
							return (En = e), t();
						} finally {
							En = n;
						}
					}),
					(Ct = function (e, t, n) {
						switch (t) {
							case "input":
								if ((tt(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var o = n[t];
										if (o !== e && o.form === e.form) {
											var i = Cr(o);
											if (!i) throw Error(le(90));
											Qe(o), tt(o, i);
										}
									}
								}
								break;
							case "textarea":
								lt(e, n);
								break;
							case "select":
								null != (t = n.value) && rt(e, !!n.multiple, t, !1);
						}
					}),
					(Lt = fd),
					(Rt = pd);
				var iu = {
						usingClientEntryPoint: !1,
						Events: [Er, Sr, Cr, Tt, Pt, fd],
					},
					ru = {
						findFiberByHostInstance: kr,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom",
					},
					au = {
						bundleType: ru.bundleType,
						version: ru.version,
						rendererPackageName: ru.rendererPackageName,
						rendererConfig: ru.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: Ee.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = Yt(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							ru.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
					};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!su.isDisabled && su.supportsFiber)
						try {
							(ln = su.inject(au)), (cn = su);
						} catch (ft) {}
				}
				(ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iu),
					(ne.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!eu(t)) throw Error(le(200));
						return (function (e, t, n) {
							var o =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: Ce,
								key: null == o ? null : "" + o,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(ne.createRoot = function (e, t) {
						if (!eu(e)) throw Error(le(299));
						var n = !1,
							o = "",
							i = Kd;
						return (
							null != t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
							(t = Wd(e, 1, !1, null, 0, n, 0, o, i)),
							(e[vr] = t.current),
							Xi(8 === e.nodeType ? e.parentNode : e),
							new Zd(t)
						);
					}),
					(ne.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" == typeof e.render) throw Error(le(188));
							throw ((e = Object.keys(e).join(",")), Error(le(268, e)));
						}
						return (e = null === (e = Yt(t)) ? null : e.stateNode);
					}),
					(ne.flushSync = function (e) {
						return pd(e);
					}),
					(ne.hydrate = function (e, t, n) {
						if (!tu(t)) throw Error(le(200));
						return ou(null, e, t, !0, n);
					}),
					(ne.hydrateRoot = function (e, t, n) {
						if (!eu(e)) throw Error(le(405));
						var o = (null != n && n.hydratedSources) || null,
							i = !1,
							r = "",
							a = Kd;
						if (
							(null != n &&
								(!0 === n.unstable_strictMode && (i = !0),
								void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
							(t = Xd(t, null, e, 1, null != n ? n : null, i, 0, r, a)),
							(e[vr] = t.current),
							Xi(e),
							o)
						)
							for (e = 0; e < o.length; e++)
								(i = (i = (n = o[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, i])
										: t.mutableSourceEagerHydrationData.push(n, i);
						return new Jd(t);
					}),
					(ne.render = function (e, t, n) {
						if (!tu(t)) throw Error(le(200));
						return ou(null, e, t, !1, n);
					}),
					(ne.unmountComponentAtNode = function (e) {
						if (!tu(e)) throw Error(le(40));
						return (
							!!e._reactRootContainer &&
							(pd(function () {
								ou(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[vr] = null);
								});
							}),
							!0)
						);
					}),
					(ne.unstable_batchedUpdates = fd),
					(ne.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
						if (!tu(n)) throw Error(le(200));
						if (null == e || void 0 === e._reactInternals) throw Error(le(38));
						return ou(e, t, n, !1, o);
					}),
					(ne.version = "18.2.0-next-9e3b772b8-20220608"),
					(function e() {
						if (
							"undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
							"function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
						)
							try {
								__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
							} catch (t) {
								console.error(t);
							}
					})(),
					(te.exports = ne);
				var lu = te.exports;
				const cu = i(lu);
				var du,
					uu = lu;
				function hu(e, t) {
					return (
						(hu = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (e, t) {
									return (e.__proto__ = t), e;
							  }),
						hu(e, t)
					);
				}
				function fu(e, t) {
					(e.prototype = Object.create(t.prototype)),
						(e.prototype.constructor = e),
						hu(e, t);
				}
				(du = uu.createRoot), uu.hydrateRoot;
				var pu = { exports: {} };
				function mu() {}
				function gu() {}
				gu.resetWarningCache = mu;
				pu.exports = (function () {
					function e(e, t, n, o, i, r) {
						if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== r) {
							var a = new Error(
								"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
							);
							throw ((a.name = "Invariant Violation"), a);
						}
					}
					function t() {
						return e;
					}
					e.isRequired = e;
					var n = {
						array: e,
						bigint: e,
						bool: e,
						func: e,
						number: e,
						object: e,
						string: e,
						symbol: e,
						any: e,
						arrayOf: t,
						element: e,
						elementType: e,
						instanceOf: t,
						node: e,
						objectOf: t,
						oneOf: t,
						oneOfType: t,
						shape: t,
						exact: t,
						checkPropTypes: gu,
						resetWarningCache: mu,
					};
					return (n.PropTypes = n), n;
				})();
				const bu = i(pu.exports);
				function vu() {
					return (
						(vu = Object.assign
							? Object.assign.bind()
							: function (e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = arguments[t];
										for (var o in n)
											Object.prototype.hasOwnProperty.call(n, o) &&
												(e[o] = n[o]);
									}
									return e;
							  }),
						vu.apply(this, arguments)
					);
				}
				function yu(e) {
					return "/" === e.charAt(0);
				}
				function wu(e, t) {
					for (var n = t, o = n + 1, i = e.length; o < i; n += 1, o += 1)
						e[n] = e[o];
					e.pop();
				}
				function xu(e) {
					return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
				}
				function ku(e, t) {
					if (e === t) return !0;
					if (null == e || null == t) return !1;
					if (Array.isArray(e))
						return (
							Array.isArray(t) &&
							e.length === t.length &&
							e.every(function (e, n) {
								return ku(e, t[n]);
							})
						);
					if ("object" == typeof e || "object" == typeof t) {
						var n = xu(e),
							o = xu(t);
						return n !== e || o !== t
							? ku(n, o)
							: Object.keys(Object.assign({}, e, t)).every(function (n) {
									return ku(e[n], t[n]);
							  });
					}
					return !1;
				}
				var Eu = !0,
					Su = "Invariant failed";
				function Cu(e, t) {
					if (!e) {
						if (Eu) throw new Error(Su);
						var n = "function" == typeof t ? t() : t,
							o = n ? "".concat(Su, ": ").concat(n) : Su;
						throw new Error(o);
					}
				}
				function $u(e) {
					return "/" === e.charAt(0) ? e : "/" + e;
				}
				function zu(e, t) {
					return (function (e, t) {
						return (
							0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
							-1 !== "/?#".indexOf(e.charAt(t.length))
						);
					})(e, t)
						? e.substr(t.length)
						: e;
				}
				function Iu(e) {
					return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
				}
				function Tu(e) {
					var t = e.pathname,
						n = e.search,
						o = e.hash,
						i = t || "/";
					return (
						n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
						o && "#" !== o && (i += "#" === o.charAt(0) ? o : "#" + o),
						i
					);
				}
				function Pu(e, t, n, o) {
					var i;
					"string" == typeof e
						? ((i = (function (e) {
								var t = e || "/",
									n = "",
									o = "",
									i = t.indexOf("#");
								-1 !== i && ((o = t.substr(i)), (t = t.substr(0, i)));
								var r = t.indexOf("?");
								return (
									-1 !== r && ((n = t.substr(r)), (t = t.substr(0, r))),
									{
										pathname: t,
										search: "?" === n ? "" : n,
										hash: "#" === o ? "" : o,
									}
								);
						  })(e)),
						  (i.state = t))
						: (void 0 === (i = vu({}, e)).pathname && (i.pathname = ""),
						  i.search
								? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
								: (i.search = ""),
						  i.hash
								? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
								: (i.hash = ""),
						  void 0 !== t && void 0 === i.state && (i.state = t));
					try {
						i.pathname = decodeURI(i.pathname);
					} catch ($h) {
						throw $h instanceof URIError
							? new URIError(
									'Pathname "' +
										i.pathname +
										'" could not be decoded. This is likely caused by an invalid percent-encoding.'
							  )
							: $h;
					}
					return (
						n && (i.key = n),
						o
							? i.pathname
								? "/" !== i.pathname.charAt(0) &&
								  (i.pathname = (function (e, t) {
										void 0 === t && (t = "");
										var n,
											o = (e && e.split("/")) || [],
											i = (t && t.split("/")) || [],
											r = e && yu(e),
											a = t && yu(t),
											s = r || a;
										if (
											(e && yu(e)
												? (i = o)
												: o.length && (i.pop(), (i = i.concat(o))),
											!i.length)
										)
											return "/";
										if (i.length) {
											var l = i[i.length - 1];
											n = "." === l || ".." === l || "" === l;
										} else n = !1;
										for (var c = 0, d = i.length; d >= 0; d--) {
											var u = i[d];
											"." === u
												? wu(i, d)
												: ".." === u
												? (wu(i, d), c++)
												: c && (wu(i, d), c--);
										}
										if (!s) for (; c--; c) i.unshift("..");
										!s || "" === i[0] || (i[0] && yu(i[0])) || i.unshift("");
										var h = i.join("/");
										return n && "/" !== h.substr(-1) && (h += "/"), h;
								  })(i.pathname, o.pathname))
								: (i.pathname = o.pathname)
							: i.pathname || (i.pathname = "/"),
						i
					);
				}
				function Lu(e, t) {
					return (
						e.pathname === t.pathname &&
						e.search === t.search &&
						e.hash === t.hash &&
						e.key === t.key &&
						ku(e.state, t.state)
					);
				}
				function Ru() {
					var e = null;
					var t = [];
					return {
						setPrompt: function (t) {
							return (
								(e = t),
								function () {
									e === t && (e = null);
								}
							);
						},
						confirmTransitionTo: function (t, n, o, i) {
							if (null != e) {
								var r = "function" == typeof e ? e(t, n) : e;
								"string" == typeof r
									? "function" == typeof o
										? o(r, i)
										: i(!0)
									: i(!1 !== r);
							} else i(!0);
						},
						appendListener: function (e) {
							var n = !0;
							function o() {
								n && e.apply(void 0, arguments);
							}
							return (
								t.push(o),
								function () {
									(n = !1),
										(t = t.filter(function (e) {
											return e !== o;
										}));
								}
							);
						},
						notifyListeners: function () {
							for (
								var e = arguments.length, n = new Array(e), o = 0;
								o < e;
								o++
							)
								n[o] = arguments[o];
							t.forEach(function (e) {
								return e.apply(void 0, n);
							});
						},
					};
				}
				var Ou = !(
					"undefined" == typeof window ||
					!window.document ||
					!window.document.createElement
				);
				function Nu(e, t) {
					t(window.confirm(e));
				}
				var _u = "popstate",
					Du = "hashchange";
				function Au() {
					try {
						return window.history.state || {};
					} catch ($h) {
						return {};
					}
				}
				function Mu(e) {
					void 0 === e && (e = {}), Ou || Cu(!1);
					var t = window.history,
						n = (function () {
							var e = window.navigator.userAgent;
							return (
								((-1 === e.indexOf("Android 2.") &&
									-1 === e.indexOf("Android 4.0")) ||
									-1 === e.indexOf("Mobile Safari") ||
									-1 !== e.indexOf("Chrome") ||
									-1 !== e.indexOf("Windows Phone")) &&
								window.history &&
								"pushState" in window.history
							);
						})(),
						o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
						i = e,
						r = i.forceRefresh,
						a = void 0 !== r && r,
						s = i.getUserConfirmation,
						l = void 0 === s ? Nu : s,
						c = i.keyLength,
						d = void 0 === c ? 6 : c,
						u = e.basename ? Iu($u(e.basename)) : "";
					function h(e) {
						var t = e || {},
							n = t.key,
							o = t.state,
							i = window.location,
							r = i.pathname + i.search + i.hash;
						return u && (r = zu(r, u)), Pu(r, o, n);
					}
					function f() {
						return Math.random().toString(36).substr(2, d);
					}
					var p = Ru();
					function m(e) {
						vu(z, e),
							(z.length = t.length),
							p.notifyListeners(z.location, z.action);
					}
					function g(e) {
						(function (e) {
							return (
								void 0 === e.state &&
								-1 === navigator.userAgent.indexOf("CriOS")
							);
						})(e) || y(h(e.state));
					}
					function b() {
						y(h(Au()));
					}
					var v = !1;
					function y(e) {
						if (v) (v = !1), m();
						else {
							p.confirmTransitionTo(e, "POP", l, function (t) {
								t
									? m({ action: "POP", location: e })
									: (function (e) {
											var t = z.location,
												n = x.indexOf(t.key);
											-1 === n && (n = 0);
											var o = x.indexOf(e.key);
											-1 === o && (o = 0);
											var i = n - o;
											i && ((v = !0), E(i));
									  })(e);
							});
						}
					}
					var w = h(Au()),
						x = [w.key];
					function k(e) {
						return u + Tu(e);
					}
					function E(e) {
						t.go(e);
					}
					var S = 0;
					function C(e) {
						1 === (S += e) && 1 === e
							? (window.addEventListener(_u, g),
							  o && window.addEventListener(Du, b))
							: 0 === S &&
							  (window.removeEventListener(_u, g),
							  o && window.removeEventListener(Du, b));
					}
					var $ = !1;
					var z = {
						length: t.length,
						action: "POP",
						location: w,
						createHref: k,
						push: function (e, o) {
							var i = "PUSH",
								r = Pu(e, o, f(), z.location);
							p.confirmTransitionTo(r, i, l, function (e) {
								if (e) {
									var o = k(r),
										s = r.key,
										l = r.state;
									if (n)
										if ((t.pushState({ key: s, state: l }, null, o), a))
											window.location.href = o;
										else {
											var c = x.indexOf(z.location.key),
												d = x.slice(0, c + 1);
											d.push(r.key), (x = d), m({ action: i, location: r });
										}
									else window.location.href = o;
								}
							});
						},
						replace: function (e, o) {
							var i = "REPLACE",
								r = Pu(e, o, f(), z.location);
							p.confirmTransitionTo(r, i, l, function (e) {
								if (e) {
									var o = k(r),
										s = r.key,
										l = r.state;
									if (n)
										if ((t.replaceState({ key: s, state: l }, null, o), a))
											window.location.replace(o);
										else {
											var c = x.indexOf(z.location.key);
											-1 !== c && (x[c] = r.key), m({ action: i, location: r });
										}
									else window.location.replace(o);
								}
							});
						},
						go: E,
						goBack: function () {
							E(-1);
						},
						goForward: function () {
							E(1);
						},
						block: function (e) {
							void 0 === e && (e = !1);
							var t = p.setPrompt(e);
							return (
								$ || (C(1), ($ = !0)),
								function () {
									return $ && (($ = !1), C(-1)), t();
								}
							);
						},
						listen: function (e) {
							var t = p.appendListener(e);
							return (
								C(1),
								function () {
									C(-1), t();
								}
							);
						},
					};
					return z;
				}
				var Bu = { exports: {} },
					ju =
						Array.isArray ||
						function (e) {
							return "[object Array]" == Object.prototype.toString.call(e);
						};
				(Bu.exports = Qu),
					(Bu.exports.parse = Hu),
					(Bu.exports.compile = function (e, t) {
						return Wu(Hu(e, t), t);
					}),
					(Bu.exports.tokensToFunction = Wu),
					(Bu.exports.tokensToRegExp = Gu);
				var Vu = new RegExp(
					[
						"(\\\\.)",
						"([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
					].join("|"),
					"g"
				);
				function Hu(e, t) {
					for (
						var n, o = [], i = 0, r = 0, a = "", s = (t && t.delimiter) || "/";
						null != (n = Vu.exec(e));

					) {
						var l = n[0],
							c = n[1],
							d = n.index;
						if (((a += e.slice(r, d)), (r = d + l.length), c)) a += c[1];
						else {
							var u = e[r],
								h = n[2],
								f = n[3],
								p = n[4],
								m = n[5],
								g = n[6],
								b = n[7];
							a && (o.push(a), (a = ""));
							var v = null != h && null != u && u !== h,
								y = "+" === g || "*" === g,
								w = "?" === g || "*" === g,
								x = n[2] || s,
								k = p || m;
							o.push({
								name: f || i++,
								prefix: h || "",
								delimiter: x,
								optional: w,
								repeat: y,
								partial: v,
								asterisk: !!b,
								pattern: k ? Xu(k) : b ? ".*" : "[^" + Uu(x) + "]+?",
							});
						}
					}
					return r < e.length && (a += e.substr(r)), a && o.push(a), o;
				}
				function Fu(e) {
					return encodeURI(e).replace(/[\/?#]/g, function (e) {
						return "%" + e.charCodeAt(0).toString(16).toUpperCase();
					});
				}
				function Wu(e, t) {
					for (var n = new Array(e.length), o = 0; o < e.length; o++)
						"object" == typeof e[o] &&
							(n[o] = new RegExp("^(?:" + e[o].pattern + ")$", Yu(t)));
					return function (t, o) {
						for (
							var i = "",
								r = t || {},
								a = (o || {}).pretty ? Fu : encodeURIComponent,
								s = 0;
							s < e.length;
							s++
						) {
							var l = e[s];
							if ("string" != typeof l) {
								var c,
									d = r[l.name];
								if (null == d) {
									if (l.optional) {
										l.partial && (i += l.prefix);
										continue;
									}
									throw new TypeError(
										'Expected "' + l.name + '" to be defined'
									);
								}
								if (ju(d)) {
									if (!l.repeat)
										throw new TypeError(
											'Expected "' +
												l.name +
												'" to not repeat, but received `' +
												JSON.stringify(d) +
												"`"
										);
									if (0 === d.length) {
										if (l.optional) continue;
										throw new TypeError(
											'Expected "' + l.name + '" to not be empty'
										);
									}
									for (var u = 0; u < d.length; u++) {
										if (((c = a(d[u])), !n[s].test(c)))
											throw new TypeError(
												'Expected all "' +
													l.name +
													'" to match "' +
													l.pattern +
													'", but received `' +
													JSON.stringify(c) +
													"`"
											);
										i += (0 === u ? l.prefix : l.delimiter) + c;
									}
								} else {
									if (
										((c = l.asterisk
											? encodeURI(d).replace(/[?#]/g, function (e) {
													return (
														"%" + e.charCodeAt(0).toString(16).toUpperCase()
													);
											  })
											: a(d)),
										!n[s].test(c))
									)
										throw new TypeError(
											'Expected "' +
												l.name +
												'" to match "' +
												l.pattern +
												'", but received "' +
												c +
												'"'
										);
									i += l.prefix + c;
								}
							} else i += l;
						}
						return i;
					};
				}
				function Uu(e) {
					return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
				}
				function Xu(e) {
					return e.replace(/([=!:$\/()])/g, "\\$1");
				}
				function qu(e, t) {
					return (e.keys = t), e;
				}
				function Yu(e) {
					return e && e.sensitive ? "" : "i";
				}
				function Gu(e, t, n) {
					ju(t) || ((n = t || n), (t = []));
					for (
						var o = (n = n || {}).strict, i = !1 !== n.end, r = "", a = 0;
						a < e.length;
						a++
					) {
						var s = e[a];
						if ("string" == typeof s) r += Uu(s);
						else {
							var l = Uu(s.prefix),
								c = "(?:" + s.pattern + ")";
							t.push(s),
								s.repeat && (c += "(?:" + l + c + ")*"),
								(r += c =
									s.optional
										? s.partial
											? l + "(" + c + ")?"
											: "(?:" + l + "(" + c + "))?"
										: l + "(" + c + ")");
						}
					}
					var d = Uu(n.delimiter || "/"),
						u = r.slice(-d.length) === d;
					return (
						o || (r = (u ? r.slice(0, -d.length) : r) + "(?:" + d + "(?=$))?"),
						(r += i ? "$" : o && u ? "" : "(?=" + d + "|$)"),
						qu(new RegExp("^" + r, Yu(n)), t)
					);
				}
				function Qu(e, t, n) {
					return (
						ju(t) || ((n = t || n), (t = [])),
						(n = n || {}),
						e instanceof RegExp
							? (function (e, t) {
									var n = e.source.match(/\((?!\?)/g);
									if (n)
										for (var o = 0; o < n.length; o++)
											t.push({
												name: o,
												prefix: null,
												delimiter: null,
												optional: !1,
												repeat: !1,
												partial: !1,
												asterisk: !1,
												pattern: null,
											});
									return qu(e, t);
							  })(e, t)
							: ju(e)
							? (function (e, t, n) {
									for (var o = [], i = 0; i < e.length; i++)
										o.push(Qu(e[i], t, n).source);
									return qu(new RegExp("(?:" + o.join("|") + ")", Yu(n)), t);
							  })(e, t, n)
							: (function (e, t, n) {
									return Gu(Hu(e, n), t, n);
							  })(e, t, n)
					);
				}
				const Ku = i(Bu.exports);
				var Zu = {},
					Ju = "function" == typeof Symbol && Symbol.for,
					eh = Ju ? Symbol.for("react.element") : 60103,
					th = Ju ? Symbol.for("react.portal") : 60106,
					nh = Ju ? Symbol.for("react.fragment") : 60107,
					oh = Ju ? Symbol.for("react.strict_mode") : 60108,
					ih = Ju ? Symbol.for("react.profiler") : 60114,
					rh = Ju ? Symbol.for("react.provider") : 60109,
					ah = Ju ? Symbol.for("react.context") : 60110,
					sh = Ju ? Symbol.for("react.async_mode") : 60111,
					lh = Ju ? Symbol.for("react.concurrent_mode") : 60111,
					ch = Ju ? Symbol.for("react.forward_ref") : 60112,
					dh = Ju ? Symbol.for("react.suspense") : 60113,
					uh = Ju ? Symbol.for("react.suspense_list") : 60120,
					hh = Ju ? Symbol.for("react.memo") : 60115,
					fh = Ju ? Symbol.for("react.lazy") : 60116,
					ph = Ju ? Symbol.for("react.block") : 60121,
					mh = Ju ? Symbol.for("react.fundamental") : 60117,
					gh = Ju ? Symbol.for("react.responder") : 60118,
					bh = Ju ? Symbol.for("react.scope") : 60119;
				/** @license React v16.13.1
				 * react-is.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */ function vh(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case eh:
								switch ((e = e.type)) {
									case sh:
									case lh:
									case nh:
									case ih:
									case oh:
									case dh:
										return e;
									default:
										switch ((e = e && e.$$typeof)) {
											case ah:
											case ch:
											case fh:
											case hh:
											case rh:
												return e;
											default:
												return t;
										}
								}
							case th:
								return t;
						}
					}
				}
				function yh(e) {
					return vh(e) === lh;
				}
				function wh(e, t) {
					if (null == e) return {};
					var n,
						o,
						i = {},
						r = Object.keys(e);
					for (o = 0; o < r.length; o++)
						(n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]);
					return i;
				}
				(Zu.AsyncMode = sh),
					(Zu.ConcurrentMode = lh),
					(Zu.ContextConsumer = ah),
					(Zu.ContextProvider = rh),
					(Zu.Element = eh),
					(Zu.ForwardRef = ch),
					(Zu.Fragment = nh),
					(Zu.Lazy = fh),
					(Zu.Memo = hh),
					(Zu.Portal = th),
					(Zu.Profiler = ih),
					(Zu.StrictMode = oh),
					(Zu.Suspense = dh),
					(Zu.isAsyncMode = function (e) {
						return yh(e) || vh(e) === sh;
					}),
					(Zu.isConcurrentMode = yh),
					(Zu.isContextConsumer = function (e) {
						return vh(e) === ah;
					}),
					(Zu.isContextProvider = function (e) {
						return vh(e) === rh;
					}),
					(Zu.isElement = function (e) {
						return "object" == typeof e && null !== e && e.$$typeof === eh;
					}),
					(Zu.isForwardRef = function (e) {
						return vh(e) === ch;
					}),
					(Zu.isFragment = function (e) {
						return vh(e) === nh;
					}),
					(Zu.isLazy = function (e) {
						return vh(e) === fh;
					}),
					(Zu.isMemo = function (e) {
						return vh(e) === hh;
					}),
					(Zu.isPortal = function (e) {
						return vh(e) === th;
					}),
					(Zu.isProfiler = function (e) {
						return vh(e) === ih;
					}),
					(Zu.isStrictMode = function (e) {
						return vh(e) === oh;
					}),
					(Zu.isSuspense = function (e) {
						return vh(e) === dh;
					}),
					(Zu.isValidElementType = function (e) {
						return (
							"string" == typeof e ||
							"function" == typeof e ||
							e === nh ||
							e === lh ||
							e === ih ||
							e === oh ||
							e === dh ||
							e === uh ||
							("object" == typeof e &&
								null !== e &&
								(e.$$typeof === fh ||
									e.$$typeof === hh ||
									e.$$typeof === rh ||
									e.$$typeof === ah ||
									e.$$typeof === ch ||
									e.$$typeof === mh ||
									e.$$typeof === gh ||
									e.$$typeof === bh ||
									e.$$typeof === ph))
						);
					}),
					(Zu.typeOf = vh);
				var xh = { exports: {} },
					kh = {},
					Eh = "function" == typeof Symbol && Symbol.for,
					Sh = Eh ? Symbol.for("react.element") : 60103,
					Ch = Eh ? Symbol.for("react.portal") : 60106,
					$h = Eh ? Symbol.for("react.fragment") : 60107,
					zh = Eh ? Symbol.for("react.strict_mode") : 60108,
					Ih = Eh ? Symbol.for("react.profiler") : 60114,
					Th = Eh ? Symbol.for("react.provider") : 60109,
					Ph = Eh ? Symbol.for("react.context") : 60110,
					Lh = Eh ? Symbol.for("react.async_mode") : 60111,
					Rh = Eh ? Symbol.for("react.concurrent_mode") : 60111,
					Oh = Eh ? Symbol.for("react.forward_ref") : 60112,
					Nh = Eh ? Symbol.for("react.suspense") : 60113,
					_h = Eh ? Symbol.for("react.suspense_list") : 60120,
					Dh = Eh ? Symbol.for("react.memo") : 60115,
					Ah = Eh ? Symbol.for("react.lazy") : 60116,
					Mh = Eh ? Symbol.for("react.block") : 60121,
					Bh = Eh ? Symbol.for("react.fundamental") : 60117,
					jh = Eh ? Symbol.for("react.responder") : 60118,
					Vh = Eh ? Symbol.for("react.scope") : 60119;
				function Hh(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case Sh:
								switch ((e = e.type)) {
									case Lh:
									case Rh:
									case $h:
									case Ih:
									case zh:
									case Nh:
										return e;
									default:
										switch ((e = e && e.$$typeof)) {
											case Ph:
											case Oh:
											case Ah:
											case Dh:
											case Th:
												return e;
											default:
												return t;
										}
								}
							case Ch:
								return t;
						}
					}
				}
				function Fh(e) {
					return Hh(e) === Rh;
				}
				(kh.AsyncMode = Lh),
					(kh.ConcurrentMode = Rh),
					(kh.ContextConsumer = Ph),
					(kh.ContextProvider = Th),
					(kh.Element = Sh),
					(kh.ForwardRef = Oh),
					(kh.Fragment = $h),
					(kh.Lazy = Ah),
					(kh.Memo = Dh),
					(kh.Portal = Ch),
					(kh.Profiler = Ih),
					(kh.StrictMode = zh),
					(kh.Suspense = Nh),
					(kh.isAsyncMode = function (e) {
						return Fh(e) || Hh(e) === Lh;
					}),
					(kh.isConcurrentMode = Fh),
					(kh.isContextConsumer = function (e) {
						return Hh(e) === Ph;
					}),
					(kh.isContextProvider = function (e) {
						return Hh(e) === Th;
					}),
					(kh.isElement = function (e) {
						return "object" == typeof e && null !== e && e.$$typeof === Sh;
					}),
					(kh.isForwardRef = function (e) {
						return Hh(e) === Oh;
					}),
					(kh.isFragment = function (e) {
						return Hh(e) === $h;
					}),
					(kh.isLazy = function (e) {
						return Hh(e) === Ah;
					}),
					(kh.isMemo = function (e) {
						return Hh(e) === Dh;
					}),
					(kh.isPortal = function (e) {
						return Hh(e) === Ch;
					}),
					(kh.isProfiler = function (e) {
						return Hh(e) === Ih;
					}),
					(kh.isStrictMode = function (e) {
						return Hh(e) === zh;
					}),
					(kh.isSuspense = function (e) {
						return Hh(e) === Nh;
					}),
					(kh.isValidElementType = function (e) {
						return (
							"string" == typeof e ||
							"function" == typeof e ||
							e === $h ||
							e === Rh ||
							e === Ih ||
							e === zh ||
							e === Nh ||
							e === _h ||
							("object" == typeof e &&
								null !== e &&
								(e.$$typeof === Ah ||
									e.$$typeof === Dh ||
									e.$$typeof === Th ||
									e.$$typeof === Ph ||
									e.$$typeof === Oh ||
									e.$$typeof === Bh ||
									e.$$typeof === jh ||
									e.$$typeof === Vh ||
									e.$$typeof === Mh))
						);
					}),
					(kh.typeOf = Hh),
					(xh.exports = kh);
				var Wh = xh.exports,
					Uh = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0,
					},
					Xh = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0,
					},
					qh = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0,
					},
					Yh = {};
				function Gh(e) {
					return Wh.isMemo(e) ? qh : Yh[e.$$typeof] || Uh;
				}
				(Yh[Wh.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0,
				}),
					(Yh[Wh.Memo] = qh);
				var Qh = Object.defineProperty,
					Kh = Object.getOwnPropertyNames,
					Zh = Object.getOwnPropertySymbols,
					Jh = Object.getOwnPropertyDescriptor,
					ef = Object.getPrototypeOf,
					tf = Object.prototype;
				var nf = function e(t, n, o) {
					if ("string" != typeof n) {
						if (tf) {
							var i = ef(n);
							i && i !== tf && e(t, i, o);
						}
						var r = Kh(n);
						Zh && (r = r.concat(Zh(n)));
						for (var a = Gh(t), s = Gh(n), l = 0; l < r.length; ++l) {
							var c = r[l];
							if (!(Xh[c] || (o && o[c]) || (s && s[c]) || (a && a[c]))) {
								var d = Jh(n, c);
								try {
									Qh(t, c, d);
								} catch ($h) {}
							}
						}
					}
					return t;
				};
				const of = i(nf);
				var rf = 1073741823,
					af =
						"undefined" != typeof globalThis
							? globalThis
							: "undefined" != typeof window
							? window
							: "undefined" != typeof global
							? global
							: {};
				var sf =
						F.createContext ||
						function (e, t) {
							var n,
								o,
								i,
								r =
									"__create-react-context-" +
									((af[(i = "__global_unique_id__")] = (af[i] || 0) + 1) +
										"__"),
								a = (function (e) {
									function n() {
										for (
											var t,
												n,
												o,
												i = arguments.length,
												r = new Array(i),
												a = 0;
											a < i;
											a++
										)
											r[a] = arguments[a];
										return (
											((t = e.call.apply(e, [this].concat(r)) || this).emitter =
												((n = t.props.value),
												(o = []),
												{
													on: function (e) {
														o.push(e);
													},
													off: function (e) {
														o = o.filter(function (t) {
															return t !== e;
														});
													},
													get: function () {
														return n;
													},
													set: function (e, t) {
														(n = e),
															o.forEach(function (e) {
																return e(n, t);
															});
													},
												})),
											t
										);
									}
									fu(n, e);
									var o = n.prototype;
									return (
										(o.getChildContext = function () {
											var e;
											return ((e = {})[r] = this.emitter), e;
										}),
										(o.componentWillReceiveProps = function (e) {
											if (this.props.value !== e.value) {
												var n,
													o = this.props.value,
													i = e.value;
												!(function (e, t) {
													return e === t
														? 0 !== e || 1 / e == 1 / t
														: e != e && t != t;
												})(o, i)
													? ((n = "function" == typeof t ? t(o, i) : rf),
													  0 !== (n |= 0) && this.emitter.set(e.value, n))
													: (n = 0);
											}
										}),
										(o.render = function () {
											return this.props.children;
										}),
										n
									);
								})(F.Component);
							a.childContextTypes = (((n = {})[r] = bu.object.isRequired), n);
							var s = (function (t) {
								function n() {
									for (
										var e, n = arguments.length, o = new Array(n), i = 0;
										i < n;
										i++
									)
										o[i] = arguments[i];
									return (
										((e =
											t.call.apply(t, [this].concat(o)) || this).observedBits =
											void 0),
										(e.state = { value: e.getValue() }),
										(e.onUpdate = function (t, n) {
											0 != ((0 | e.observedBits) & n) &&
												e.setState({ value: e.getValue() });
										}),
										e
									);
								}
								fu(n, t);
								var o = n.prototype;
								return (
									(o.componentWillReceiveProps = function (e) {
										var t = e.observedBits;
										this.observedBits = null == t ? rf : t;
									}),
									(o.componentDidMount = function () {
										this.context[r] && this.context[r].on(this.onUpdate);
										var e = this.props.observedBits;
										this.observedBits = null == e ? rf : e;
									}),
									(o.componentWillUnmount = function () {
										this.context[r] && this.context[r].off(this.onUpdate);
									}),
									(o.getValue = function () {
										return this.context[r] ? this.context[r].get() : e;
									}),
									(o.render = function () {
										return ((e = this.props.children),
										Array.isArray(e) ? e[0] : e)(this.state.value);
										var e;
									}),
									n
								);
							})(F.Component);
							return (
								(s.contextTypes = (((o = {})[r] = bu.object), o)),
								{ Provider: a, Consumer: s }
							);
						},
					lf = function (e) {
						var t = sf();
						return (t.displayName = e), t;
					},
					cf = lf("Router-History"),
					df = lf("Router"),
					uf = (function (e) {
						function t(t) {
							var n;
							return (
								((n = e.call(this, t) || this).state = {
									location: t.history.location,
								}),
								(n._isMounted = !1),
								(n._pendingLocation = null),
								t.staticContext ||
									(n.unlisten = t.history.listen(function (e) {
										n._pendingLocation = e;
									})),
								n
							);
						}
						fu(t, e),
							(t.computeRootMatch = function (e) {
								return { path: "/", url: "/", params: {}, isExact: "/" === e };
							});
						var n = t.prototype;
						return (
							(n.componentDidMount = function () {
								var e = this;
								(this._isMounted = !0),
									this.unlisten && this.unlisten(),
									this.props.staticContext ||
										(this.unlisten = this.props.history.listen(function (t) {
											e._isMounted && e.setState({ location: t });
										})),
									this._pendingLocation &&
										this.setState({ location: this._pendingLocation });
							}),
							(n.componentWillUnmount = function () {
								this.unlisten &&
									(this.unlisten(),
									(this._isMounted = !1),
									(this._pendingLocation = null));
							}),
							(n.render = function () {
								return F.createElement(
									df.Provider,
									{
										value: {
											history: this.props.history,
											location: this.state.location,
											match: t.computeRootMatch(this.state.location.pathname),
											staticContext: this.props.staticContext,
										},
									},
									F.createElement(cf.Provider, {
										children: this.props.children || null,
										value: this.props.history,
									})
								);
							}),
							t
						);
					})(F.Component);
				F.Component;
				var hf = (function (e) {
						function t() {
							return e.apply(this, arguments) || this;
						}
						fu(t, e);
						var n = t.prototype;
						return (
							(n.componentDidMount = function () {
								this.props.onMount && this.props.onMount.call(this, this);
							}),
							(n.componentDidUpdate = function (e) {
								this.props.onUpdate && this.props.onUpdate.call(this, this, e);
							}),
							(n.componentWillUnmount = function () {
								this.props.onUnmount && this.props.onUnmount.call(this, this);
							}),
							(n.render = function () {
								return null;
							}),
							t
						);
					})(F.Component),
					ff = {},
					pf = 1e4,
					mf = 0;
				function gf(e, t) {
					return (
						void 0 === e && (e = "/"),
						void 0 === t && (t = {}),
						"/" === e
							? e
							: (function (e) {
									if (ff[e]) return ff[e];
									var t = Ku.compile(e);
									return mf < pf && ((ff[e] = t), mf++), t;
							  })(e)(t, { pretty: !0 })
					);
				}
				function bf(e) {
					var t = e.computedMatch,
						n = e.to,
						o = e.push,
						i = void 0 !== o && o;
					return F.createElement(df.Consumer, null, function (e) {
						e || Cu(!1);
						var o = e.history,
							r = e.staticContext,
							a = i ? o.push : o.replace,
							s = Pu(
								t
									? "string" == typeof n
										? gf(n, t.params)
										: vu({}, n, { pathname: gf(n.pathname, t.params) })
									: n
							);
						return r
							? (a(s), null)
							: F.createElement(hf, {
									onMount: function () {
										a(s);
									},
									onUpdate: function (e, t) {
										var n = Pu(t.to);
										Lu(n, vu({}, s, { key: n.key })) || a(s);
									},
									to: n,
							  });
					});
				}
				var vf = {},
					yf = 1e4,
					wf = 0;
				function xf(e, t) {
					void 0 === t && (t = {}),
						("string" == typeof t || Array.isArray(t)) && (t = { path: t });
					var n = t,
						o = n.path,
						i = n.exact,
						r = void 0 !== i && i,
						a = n.strict,
						s = void 0 !== a && a,
						l = n.sensitive,
						c = void 0 !== l && l;
					return [].concat(o).reduce(function (t, n) {
						if (!n && "" !== n) return null;
						if (t) return t;
						var o = (function (e, t) {
								var n = "" + t.end + t.strict + t.sensitive,
									o = vf[n] || (vf[n] = {});
								if (o[e]) return o[e];
								var i = [],
									r = { regexp: Ku(e, i, t), keys: i };
								return wf < yf && ((o[e] = r), wf++), r;
							})(n, { end: r, strict: s, sensitive: c }),
							i = o.regexp,
							a = o.keys,
							l = i.exec(e);
						if (!l) return null;
						var d = l[0],
							u = l.slice(1),
							h = e === d;
						return r && !h
							? null
							: {
									path: n,
									url: "/" === n && "" === d ? "/" : d,
									isExact: h,
									params: a.reduce(function (e, t, n) {
										return (e[t.name] = u[n]), e;
									}, {}),
							  };
					}, null);
				}
				var kf = (function (e) {
					function t() {
						return e.apply(this, arguments) || this;
					}
					return (
						fu(t, e),
						(t.prototype.render = function () {
							var e = this;
							return F.createElement(df.Consumer, null, function (t) {
								t || Cu(!1);
								var n = e.props.location || t.location,
									o = vu({}, t, {
										location: n,
										match: e.props.computedMatch
											? e.props.computedMatch
											: e.props.path
											? xf(n.pathname, e.props)
											: t.match,
									}),
									i = e.props,
									r = i.children,
									a = i.component,
									s = i.render;
								return (
									Array.isArray(r) &&
										(function (e) {
											return 0 === F.Children.count(e);
										})(r) &&
										(r = null),
									F.createElement(
										df.Provider,
										{ value: o },
										o.match
											? r
												? "function" == typeof r
													? r(o)
													: r
												: a
												? F.createElement(a, o)
												: s
												? s(o)
												: null
											: "function" == typeof r
											? r(o)
											: null
									)
								);
							});
						}),
						t
					);
				})(F.Component);
				F.Component, F.Component, F.useContext;
				const Ef = function (e, t, n) {
						return e();
					},
					Sf = !0,
					Cf = !0,
					$f = !0,
					zf = !1,
					If = !1,
					Tf = !1;
				let Pf,
					Lf,
					Rf,
					Of = !1,
					Nf = !1,
					_f = !1,
					Df = !1,
					Af = null,
					Mf = !1;
				const Bf = !0,
					jf = (e) => {
						const t = new URL(e, Gp.$resourcesUrl$);
						return t.origin !== Xp.location.origin ? t.href : t.pathname;
					},
					Vf = "http://www.w3.org/1999/xlink",
					Hf = {},
					Ff = (e) => "object" === (e = typeof e) || "function" === e;
				const Wf = (e, t, ...n) => {
						let o = null,
							i = null,
							r = null,
							a = !1,
							s = !1;
						const l = [],
							c = (t) => {
								for (let n = 0; n < t.length; n++)
									(o = t[n]),
										Array.isArray(o)
											? c(o)
											: null != o &&
											  "boolean" != typeof o &&
											  ((a = "function" != typeof e && !Ff(o)) &&
													(o = String(o)),
											  a && s
													? (l[l.length - 1].$text$ += o)
													: l.push(a ? Uf(null, o) : o),
											  (s = a));
							};
						if ((c(n), t)) {
							t.key && (i = t.key), t.name && (r = t.name);
							{
								const e = t.className || t.class;
								e &&
									(t.class =
										"object" != typeof e
											? e
											: Object.keys(e)
													.filter((t) => e[t])
													.join(" "));
							}
						}
						if ("function" == typeof e) return e(null === t ? {} : t, l, qf);
						const d = Uf(e, null);
						return (
							(d.$attrs$ = t),
							l.length > 0 && (d.$children$ = l),
							(d.$key$ = i),
							(d.$name$ = r),
							d
						);
					},
					Uf = (e, t) => {
						const n = {
							$flags$: 0,
							$tag$: e,
							$text$: t,
							$elm$: null,
							$children$: null,
							$attrs$: null,
							$key$: null,
							$name$: null,
						};
						return n;
					},
					Xf = {},
					qf = {
						forEach: (e, t) => e.map(Yf).forEach(t),
						map: (e, t) => e.map(Yf).map(t).map(Gf),
					},
					Yf = (e) => ({
						vattrs: e.$attrs$,
						vchildren: e.$children$,
						vkey: e.$key$,
						vname: e.$name$,
						vtag: e.$tag$,
						vtext: e.$text$,
					}),
					Gf = (e) => {
						if ("function" == typeof e.vtag) {
							const t = Object.assign({}, e.vattrs);
							return (
								e.vkey && (t.key = e.vkey),
								e.vname && (t.name = e.vname),
								Wf(e.vtag, t, ...(e.vchildren || []))
							);
						}
						const t = Uf(e.vtag, e.vtext);
						return (
							(t.$attrs$ = e.vattrs),
							(t.$children$ = e.vchildren),
							(t.$key$ = e.vkey),
							(t.$name$ = e.vname),
							t
						);
					},
					Qf = (e, t, n) => {
						const o = e;
						return {
							emit: (e) =>
								Kf(o, t, {
									bubbles: !!(4 & n),
									composed: !!(2 & n),
									cancelable: !!(1 & n),
									detail: e,
								}),
						};
					},
					Kf = (e, t, n) => {
						const o = Gp.ce(t, n);
						return e.dispatchEvent(o), o;
					},
					Zf = new WeakMap(),
					Jf = (e) => {
						const t = e.$cmpMeta$,
							n = e.$hostElement$,
							o = t.$flags$,
							i = (t.$tagName$, () => {}),
							r = ((e, t, n) => {
								var o;
								const i = ep(t, n),
									r = Wp.get(i);
								if (((e = 11 === e.nodeType ? e : qp), r))
									if ("string" == typeof r) {
										e = e.head || e;
										let t,
											n = Zf.get(e);
										if ((n || Zf.set(e, (n = new Set())), !n.has(i))) {
											{
												(t = qp.createElement("style")), (t.innerHTML = r);
												const n =
													null !== (o = Gp.$nonce$) && void 0 !== o
														? o
														: (function (e) {
																var t, n, o;
																return null !==
																	(o =
																		null ===
																			(n =
																				null === (t = e.head) || void 0 === t
																					? void 0
																					: t.querySelector(
																							'meta[name="csp-nonce"]'
																					  )) || void 0 === n
																			? void 0
																			: n.getAttribute("content")) &&
																	void 0 !== o
																	? o
																	: void 0;
														  })(qp);
												null != n && t.setAttribute("nonce", n),
													e.insertBefore(t, e.querySelector("link"));
											}
											n && n.add(i);
										}
									} else
										e.adoptedStyleSheets.includes(r) ||
											(e.adoptedStyleSheets = [...e.adoptedStyleSheets, r]);
								return i;
							})(
								n.shadowRoot ? n.shadowRoot : n.getRootNode(),
								t,
								e.$modeName$
							);
						10 & o &&
							((n["s-sc"] = r),
							n.classList.add(r + "-h"),
							2 & o && n.classList.add(r + "-s")),
							i();
					},
					ep = (e, t) =>
						"sc-" + (t && 32 & e.$flags$ ? e.$tagName$ + "-" + t : e.$tagName$),
					tp = (e, t, n, o, i, r) => {
						if (n !== o) {
							let a = Hp(e, t),
								s = t.toLowerCase();
							if ("class" === t) {
								const t = e.classList,
									i = op(n),
									r = op(o);
								t.remove(...i.filter((e) => e && !r.includes(e))),
									t.add(...r.filter((e) => e && !i.includes(e)));
							} else if ("style" === t) {
								for (const t in n)
									(o && null != o[t]) ||
										(t.includes("-")
											? e.style.removeProperty(t)
											: (e.style[t] = ""));
								for (const t in o)
									(n && o[t] === n[t]) ||
										(t.includes("-")
											? e.style.setProperty(t, o[t])
											: (e.style[t] = o[t]));
							} else if ("key" === t);
							else if ("ref" === t) o && o(e);
							else if (e.__lookupSetter__(t) || "o" !== t[0] || "n" !== t[1]) {
								const l = Ff(o);
								if ((a || (l && null !== o)) && !i)
									try {
										if (e.tagName.includes("-")) e[t] = o;
										else {
											const i = null == o ? "" : o;
											"list" === t
												? (a = !1)
												: (null != n && e[t] == i) || (e[t] = i);
										}
									} catch ($h) {}
								let c = !1;
								s !== (s = s.replace(/^xlink\:?/, "")) && ((t = s), (c = !0)),
									null == o || !1 === o
										? (!1 === o && "" !== e.getAttribute(t)) ||
										  (c ? e.removeAttributeNS(Vf, t) : e.removeAttribute(t))
										: (!a || 4 & r || i) &&
										  !l &&
										  ((o = !0 === o ? "" : o),
										  c ? e.setAttributeNS(Vf, t, o) : e.setAttribute(t, o));
							} else if (
								((t =
									"-" === t[2]
										? t.slice(3)
										: Hp(Xp, s)
										? s.slice(2)
										: s[2] + t.slice(3)),
								n || o)
							) {
								const i = t.endsWith(ip);
								(t = t.replace(rp, "")),
									n && Gp.rel(e, t, n, i),
									o && Gp.ael(e, t, o, i);
							}
						}
					},
					np = /\s/,
					op = (e) => (e ? e.split(np) : []),
					ip = "Capture",
					rp = new RegExp(ip + "$"),
					ap = (e, t, n, o) => {
						const i =
								11 === t.$elm$.nodeType && t.$elm$.host
									? t.$elm$.host
									: t.$elm$,
							r = (e && e.$attrs$) || Hf,
							a = t.$attrs$ || Hf;
						for (o in r) o in a || tp(i, o, r[o], void 0, n, t.$flags$);
						for (o in a) tp(i, o, r[o], a[o], n, t.$flags$);
					},
					sp = (e, t, n, o) => {
						var i;
						const r = t.$children$[n];
						let a,
							s,
							l,
							c = 0;
						if (
							(Of ||
								((_f = !0),
								"slot" === r.$tag$ &&
									(Pf && o.classList.add(Pf + "-s"),
									(r.$flags$ |= r.$children$ ? 2 : 1))),
							null !== r.$text$)
						)
							a = r.$elm$ = qp.createTextNode(r.$text$);
						else if (1 & r.$flags$) a = r.$elm$ = qp.createTextNode("");
						else {
							if (
								(Df || (Df = "svg" === r.$tag$),
								(a = r.$elm$ =
									qp.createElementNS(
										Df
											? "http://www.w3.org/2000/svg"
											: "http://www.w3.org/1999/xhtml",
										2 & r.$flags$ ? "slot-fb" : r.$tag$
									)),
								Df && "foreignObject" === r.$tag$ && (Df = !1),
								ap(null, r, Df),
								((e) => null != e)(Pf) &&
									a["s-si"] !== Pf &&
									a.classList.add((a["s-si"] = Pf)),
								r.$children$)
							)
								for (c = 0; c < r.$children$.length; ++c)
									(s = sp(e, r, c, a)), s && a.appendChild(s);
							"svg" === r.$tag$
								? (Df = !1)
								: "foreignObject" === a.tagName && (Df = !0);
						}
						return (
							(a["s-hn"] = Rf),
							3 & r.$flags$ &&
								((a["s-sr"] = !0),
								(a["s-fs"] =
									null === (i = r.$attrs$) || void 0 === i ? void 0 : i.slot),
								(a["s-cr"] = Lf),
								(a["s-sn"] = r.$name$ || ""),
								(l = e && e.$children$ && e.$children$[n]),
								l && l.$tag$ === r.$tag$ && e.$elm$ && lp(e.$elm$, !1)),
							a
						);
					},
					lp = (e, t) => {
						var n;
						Gp.$flags$ |= 1;
						const o = e.childNodes;
						for (let i = o.length - 1; i >= 0; i--) {
							const e = o[i];
							e["s-hn"] !== Rf &&
								e["s-ol"] &&
								(fp(e).insertBefore(e, hp(e)),
								e["s-ol"].remove(),
								(e["s-ol"] = void 0),
								(e["s-sh"] = void 0),
								1 === e.nodeType &&
									e.setAttribute(
										"slot",
										null !== (n = e["s-sn"]) && void 0 !== n ? n : ""
									),
								(_f = !0)),
								t && lp(e, t);
						}
						Gp.$flags$ &= -2;
					},
					cp = (e, t, n, o, i, r) => {
						let a,
							s = (e["s-cr"] && e["s-cr"].parentNode) || e;
						for (
							s.shadowRoot && s.tagName === Rf && (s = s.shadowRoot);
							i <= r;
							++i
						)
							o[i] &&
								((a = sp(null, n, i, e)),
								a && ((o[i].$elm$ = a), s.insertBefore(a, hp(t))));
					},
					dp = (e, t, n) => {
						for (let o = t; o <= n; ++o) {
							const t = e[o];
							if (t) {
								const e = t.$elm$;
								yp(t),
									e &&
										((Nf = !0),
										e["s-ol"] ? e["s-ol"].remove() : lp(e, !0),
										e.remove());
							}
						}
					},
					up = (e, t) =>
						e.$tag$ === t.$tag$ &&
						("slot" === e.$tag$ ? e.$name$ === t.$name$ : e.$key$ === t.$key$),
					hp = (e) => (e && e["s-ol"]) || e,
					fp = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode,
					pp = (e, t) => {
						const n = (t.$elm$ = e.$elm$),
							o = e.$children$,
							i = t.$children$,
							r = t.$tag$,
							a = t.$text$;
						let s;
						null === a
							? ((Df = "svg" === r || ("foreignObject" !== r && Df)),
							  "slot" === r || ap(e, t, Df),
							  null !== o && null !== i
									? ((e, t, n, o) => {
											let i,
												r,
												a = 0,
												s = 0,
												l = 0,
												c = 0,
												d = t.length - 1,
												u = t[0],
												h = t[d],
												f = o.length - 1,
												p = o[0],
												m = o[f];
											for (; a <= d && s <= f; )
												if (null == u) u = t[++a];
												else if (null == h) h = t[--d];
												else if (null == p) p = o[++s];
												else if (null == m) m = o[--f];
												else if (up(u, p)) pp(u, p), (u = t[++a]), (p = o[++s]);
												else if (up(h, m)) pp(h, m), (h = t[--d]), (m = o[--f]);
												else if (up(u, m))
													("slot" !== u.$tag$ && "slot" !== m.$tag$) ||
														lp(u.$elm$.parentNode, !1),
														pp(u, m),
														e.insertBefore(u.$elm$, h.$elm$.nextSibling),
														(u = t[++a]),
														(m = o[--f]);
												else if (up(h, p))
													("slot" !== u.$tag$ && "slot" !== m.$tag$) ||
														lp(h.$elm$.parentNode, !1),
														pp(h, p),
														e.insertBefore(h.$elm$, u.$elm$),
														(h = t[--d]),
														(p = o[++s]);
												else {
													for (l = -1, c = a; c <= d; ++c)
														if (
															t[c] &&
															null !== t[c].$key$ &&
															t[c].$key$ === p.$key$
														) {
															l = c;
															break;
														}
													l >= 0
														? ((r = t[l]),
														  r.$tag$ !== p.$tag$
																? (i = sp(t && t[s], n, l, e))
																: (pp(r, p), (t[l] = void 0), (i = r.$elm$)),
														  (p = o[++s]))
														: ((i = sp(t && t[s], n, s, e)), (p = o[++s])),
														i && fp(u.$elm$).insertBefore(i, hp(u.$elm$));
												}
											a > d
												? cp(
														e,
														null == o[f + 1] ? null : o[f + 1].$elm$,
														n,
														o,
														s,
														f
												  )
												: s > f && dp(t, a, d);
									  })(n, o, t, i)
									: null !== i
									? (null !== e.$text$ && (n.textContent = ""),
									  cp(n, null, t, i, 0, i.length - 1))
									: null !== o && dp(o, 0, o.length - 1),
							  Df && "svg" === r && (Df = !1))
							: (s = n["s-cr"])
							? (s.parentNode.textContent = a)
							: e.$text$ !== a && (n.data = a);
					},
					mp = (e) => {
						const t = e.childNodes;
						for (const n of t)
							if (1 === n.nodeType) {
								if (n["s-sr"]) {
									const e = n["s-sn"];
									n.hidden = !1;
									for (const o of t)
										if (o !== n)
											if (o["s-hn"] !== n["s-hn"] || "" !== e) {
												if (
													1 === o.nodeType &&
													(e === o.getAttribute("slot") || e === o["s-sn"])
												) {
													n.hidden = !0;
													break;
												}
											} else if (
												1 === o.nodeType ||
												(3 === o.nodeType && "" !== o.textContent.trim())
											) {
												n.hidden = !0;
												break;
											}
								}
								mp(n);
							}
					},
					gp = [],
					bp = (e) => {
						let t, n, o;
						for (const i of e.childNodes) {
							if (i["s-sr"] && (t = i["s-cr"]) && t.parentNode) {
								n = t.parentNode.childNodes;
								const e = i["s-sn"];
								for (o = n.length - 1; o >= 0; o--)
									if (
										((t = n[o]),
										!t["s-cn"] && !t["s-nr"] && t["s-hn"] !== i["s-hn"] && !Tf)
									)
										if (vp(t, e)) {
											let n = gp.find((e) => e.$nodeToRelocate$ === t);
											(Nf = !0),
												(t["s-sn"] = t["s-sn"] || e),
												n
													? ((n.$nodeToRelocate$["s-sh"] = i["s-hn"]),
													  (n.$slotRefNode$ = i))
													: ((t["s-sh"] = i["s-hn"]),
													  gp.push({ $slotRefNode$: i, $nodeToRelocate$: t })),
												t["s-sr"] &&
													gp.map((e) => {
														vp(e.$nodeToRelocate$, t["s-sn"]) &&
															((n = gp.find((e) => e.$nodeToRelocate$ === t)),
															n &&
																!e.$slotRefNode$ &&
																(e.$slotRefNode$ = n.$slotRefNode$));
													});
										} else
											gp.some((e) => e.$nodeToRelocate$ === t) ||
												gp.push({ $nodeToRelocate$: t });
							}
							1 === i.nodeType && bp(i);
						}
					},
					vp = (e, t) =>
						1 === e.nodeType
							? (null === e.getAttribute("slot") && "" === t) ||
							  e.getAttribute("slot") === t
							: e["s-sn"] === t || "" === t,
					yp = (e) => {
						e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null),
							e.$children$ && e.$children$.map(yp);
					},
					wp = (e, t, n = !1) => {
						var o, i;
						const r = e.$hostElement$,
							a = e.$cmpMeta$,
							s = e.$vnode$ || Uf(null, null),
							l = (c = t) && c.$tag$ === Xf ? t : Wf(null, null, t);
						var c;
						if (
							((Rf = r.tagName),
							a.$attrsToReflect$ &&
								((l.$attrs$ = l.$attrs$ || {}),
								a.$attrsToReflect$.map(([e, t]) => (l.$attrs$[t] = r[e]))),
							n && l.$attrs$)
						)
							for (const d of Object.keys(l.$attrs$))
								r.hasAttribute(d) &&
									!["key", "ref", "style", "class"].includes(d) &&
									(l.$attrs$[d] = r[d]);
						if (
							((l.$tag$ = null),
							(l.$flags$ |= 4),
							(e.$vnode$ = l),
							(l.$elm$ = s.$elm$ = r.shadowRoot || r),
							(Pf = r["s-sc"]),
							(Lf = r["s-cr"]),
							(Of = 0 != (1 & a.$flags$)),
							(Nf = !1),
							pp(s, l),
							(Gp.$flags$ |= 1),
							_f)
						) {
							bp(l.$elm$);
							for (const e of gp) {
								const t = e.$nodeToRelocate$;
								if (!t["s-ol"]) {
									const e = qp.createTextNode("");
									(e["s-nr"] = t),
										t.parentNode.insertBefore((t["s-ol"] = e), t);
								}
							}
							for (const e of gp) {
								const t = e.$nodeToRelocate$,
									n = e.$slotRefNode$;
								if (n) {
									const e = n.parentNode;
									let r = n.nextSibling;
									{
										let n =
											null === (o = t["s-ol"]) || void 0 === o
												? void 0
												: o.previousSibling;
										for (; n; ) {
											let o =
												null !== (i = n["s-nr"]) && void 0 !== i ? i : null;
											if (
												o &&
												o["s-sn"] === t["s-sn"] &&
												e === o.parentNode &&
												((o = o.nextSibling), !o || !o["s-nr"])
											) {
												r = o;
												break;
											}
											n = n.previousSibling;
										}
									}
									((!r && e !== t.parentNode) || t.nextSibling !== r) &&
										t !== r &&
										(!t["s-hn"] &&
											t["s-ol"] &&
											(t["s-hn"] = t["s-ol"].parentNode.nodeName),
										e.insertBefore(t, r));
								} else 1 === t.nodeType && (t.hidden = !0);
							}
						}
						Nf && mp(l.$elm$), (Gp.$flags$ &= -2), (gp.length = 0);
					},
					xp = (e, t) => {
						(e.$flags$ |= 16), e.$ancestorComponent$;
						return rm(() => kp(e, t));
					},
					kp = (e, t) => {
						const n = e.$hostElement$,
							o = (e.$cmpMeta$.$tagName$, () => {}),
							i = n;
						let r;
						return (
							(r = Tp(i, t ? "componentWillLoad" : "componentWillUpdate")),
							(r = Ep(r, () => Tp(i, "componentWillRender"))),
							o(),
							Ep(r, () => Cp(e, i, t))
						);
					},
					Ep = (e, t) => (Sp(e) ? e.then(t) : t()),
					Sp = (e) =>
						e instanceof Promise ||
						(e && e.then && "function" == typeof e.then),
					Cp = async (e, t, n) => {
						const o = e.$hostElement$,
							i = (e.$cmpMeta$.$tagName$, () => {});
						o["s-rc"], n && Jf(e);
						const r = (e.$cmpMeta$.$tagName$, () => {});
						$p(e, t, o, n), r(), i(), zp(e);
					},
					$p = (e, t, n, o) => {
						try {
							(Af = t),
								(t = t.render && t.render()),
								(e.$flags$ &= -17),
								(e.$flags$ |= 2),
								(Sf || Cf) && ($f || Cf) && (zf || wp(e, t, o));
						} catch ($h) {
							Fp($h, e.$hostElement$);
						}
						return (Af = null), null;
					},
					zp = (e) => {
						e.$cmpMeta$.$tagName$;
						const t = () => {},
							n = e.$hostElement$;
						e.$ancestorComponent$,
							Tp(n, "componentDidRender"),
							64 & e.$flags$
								? (Tp(n, "componentDidUpdate"), t())
								: ((e.$flags$ |= 64), Tp(n, "componentDidLoad"), t());
					},
					Ip = (e) => {
						{
							const t = jp(e),
								n = t.$hostElement$.isConnected;
							return n && 2 == (18 & t.$flags$) && xp(t, !1), n;
						}
					},
					Tp = (e, t, n) => {
						if (e && e[t])
							try {
								return e[t](n);
							} catch ($h) {
								Fp($h);
							}
					},
					Pp = (e, t, n, o) => {
						const i = jp(e),
							r = e,
							a = i.$instanceValues$.get(t),
							s = i.$flags$,
							l = r;
						var c, d;
						(c = n),
							(d = o.$members$[t][0]),
							(n =
								null == c || Ff(c)
									? c
									: 4 & d
									? "false" !== c && ("" === c || !!c)
									: 2 & d
									? parseFloat(c)
									: 1 & d
									? String(c)
									: c);
						const u = Number.isNaN(a) && Number.isNaN(n);
						if (n !== a && !u) {
							if ((i.$instanceValues$.set(t, n), o.$watchers$ && 128 & s)) {
								const e = o.$watchers$[t];
								e &&
									e.map((e) => {
										try {
											l[e](n, a, t);
										} catch ($h) {
											Fp($h, r);
										}
									});
							}
							if (2 == (18 & s)) {
								if (
									l.componentShouldUpdate &&
									!1 === l.componentShouldUpdate(n, a, t)
								)
									return;
								xp(i, !1);
							}
						}
					},
					Lp = (e, t, n) => {
						var o;
						if (t.$members$) {
							e.watchers && (t.$watchers$ = e.watchers);
							const n = Object.entries(t.$members$),
								i = e.prototype;
							n.map(([e, [n]]) => {
								(31 & n || 32 & n) &&
									Object.defineProperty(i, e, {
										get() {
											return (t = e), jp(this).$instanceValues$.get(t);
											var t;
										},
										set(n) {
											Pp(this, e, n, t);
										},
										configurable: !0,
										enumerable: !0,
									});
							});
							{
								const r = new Map();
								(i.attributeChangedCallback = function (e, n, o) {
									Gp.jmp(() => {
										const a = r.get(e);
										if (this.hasOwnProperty(a)) (o = this[a]), delete this[a];
										else {
											if (
												i.hasOwnProperty(a) &&
												"number" == typeof this[a] &&
												this[a] == o
											)
												return;
											if (null == a) {
												const i = jp(this),
													r = null == i ? void 0 : i.$flags$;
												if (!(8 & r) && 128 & r && o !== n) {
													const i = this,
														r = t.$watchers$[e];
													null == r ||
														r.forEach((t) => {
															null != i[t] && i[t].call(i, o, n, e);
														});
												}
												return;
											}
										}
										this[a] = (null !== o || "boolean" != typeof this[a]) && o;
									});
								}),
									(e.observedAttributes = Array.from(
										new Set([
											...Object.keys(
												null !== (o = t.$watchers$) && void 0 !== o ? o : {}
											),
											...n
												.filter(([e, t]) => 15 & t[0])
												.map(([e, n]) => {
													const o = n[1] || e;
													return (
														r.set(o, e),
														512 & n[0] && t.$attrsToReflect$.push([e, o]),
														o
													);
												}),
										])
									));
							}
						}
						return e;
					},
					Rp = async (e, t, n, o) => {
						let i;
						if (
							0 == (32 & t.$flags$) &&
							((t.$flags$ |= 32),
							(i = e.constructor),
							customElements
								.whenDefined(n.$tagName$)
								.then(() => (t.$flags$ |= 128)),
							i.style)
						) {
							let o = i.style;
							"string" != typeof o &&
								(o =
									o[
										(t.$modeName$ = ((e) =>
											Up.map((t) => t(e)).find((e) => !!e))(e))
									]);
							const r = ep(n, t.$modeName$);
							if (!Wp.has(r)) {
								const e = (n.$tagName$, () => {});
								((e, t, n) => {
									let o = Wp.get(e);
									Kp && n
										? ((o = o || new CSSStyleSheet()),
										  "string" == typeof o ? (o = t) : o.replaceSync(t))
										: (o = t),
										Wp.set(e, o);
								})(r, o, !!(1 & n.$flags$)),
									e();
							}
						}
						t.$ancestorComponent$;
						xp(t, !0);
					},
					Op = (e) => {
						const t = (e["s-cr"] = qp.createComment(""));
						(t["s-cn"] = !0), e.insertBefore(t, e.firstChild);
					},
					Np = (e, t) => {
						const n = { $flags$: t[0], $tagName$: t[1] };
						(n.$members$ = t[2]),
							(n.$listeners$ = t[3]),
							(n.$watchers$ = e.$watchers$),
							(n.$attrsToReflect$ = []);
						const o = e.prototype.connectedCallback,
							i = e.prototype.disconnectedCallback;
						return (
							Object.assign(e.prototype, {
								__registerHost() {
									Vp(this, n);
								},
								connectedCallback() {
									((e) => {
										if (0 == (1 & Gp.$flags$)) {
											const t = jp(e),
												n = t.$cmpMeta$,
												o = (n.$tagName$, () => {});
											1 & t.$flags$
												? (_p(e, t, n.$listeners$),
												  (null == t ? void 0 : t.$lazyInstance$)
														? t.$lazyInstance$
														: (null == t ? void 0 : t.$onReadyPromise$) &&
														  t.$onReadyPromise$.then(() => {
																t.$lazyInstance$;
														  }))
												: ((t.$flags$ |= 1),
												  12 & n.$flags$ && Op(e),
												  n.$members$ &&
														Object.entries(n.$members$).map(([t, [n]]) => {
															if (31 & n && e.hasOwnProperty(t)) {
																const n = e[t];
																delete e[t], (e[t] = n);
															}
														}),
												  Rp(e, t, n)),
												o();
										}
									})(this),
										o && o.call(this);
								},
								disconnectedCallback() {
									(async (e) => {
										if (0 == (1 & Gp.$flags$)) {
											const t = jp(e);
											t.$rmListeners$ &&
												(t.$rmListeners$.map((e) => e()),
												(t.$rmListeners$ = void 0));
										}
									})(this),
										i && i.call(this);
								},
								__attachShadow() {
									this.attachShadow({
										mode: "open",
										delegatesFocus: !!(16 & n.$flags$),
									});
								},
							}),
							(e.is = n.$tagName$),
							Lp(e, n)
						);
					},
					_p = (e, t, n, o) => {
						n &&
							n.map(([n, o, i]) => {
								const r = Ap(e, n),
									a = Dp(t, i),
									s = Mp(n);
								Gp.ael(r, o, a, s),
									(t.$rmListeners$ = t.$rmListeners$ || []).push(() =>
										Gp.rel(r, o, a, s)
									);
							});
					},
					Dp = (e, t) => (n) => {
						try {
							If || e.$hostElement$[t](n);
						} catch ($h) {
							Fp($h);
						}
					},
					Ap = (e, t) => (4 & t ? qp : 8 & t ? Xp : 16 & t ? qp.body : e),
					Mp = (e) =>
						Qp
							? { passive: 0 != (1 & e), capture: 0 != (2 & e) }
							: 0 != (2 & e),
					Bp = new WeakMap(),
					jp = (e) => Bp.get(e),
					Vp = (e, t) => {
						const n = {
							$flags$: 0,
							$hostElement$: e,
							$cmpMeta$: t,
							$instanceValues$: new Map(),
						};
						return _p(e, n, t.$listeners$), Bp.set(e, n);
					},
					Hp = (e, t) => t in e,
					Fp = (e, t) => (0, console.error)(e, t),
					Wp = new Map(),
					Up = [],
					Xp = "undefined" != typeof window ? window : {},
					qp = Xp.document || { head: {} },
					Yp = Xp.HTMLElement || class {},
					Gp = {
						$flags$: 0,
						$resourcesUrl$: "",
						jmp: (e) => e(),
						raf: (e) => requestAnimationFrame(e),
						ael: (e, t, n, o) => e.addEventListener(t, n, o),
						rel: (e, t, n, o) => e.removeEventListener(t, n, o),
						ce: (e, t) => new CustomEvent(e, t),
					},
					Qp = (() => {
						let e = !1;
						try {
							qp.addEventListener(
								"e",
								null,
								Object.defineProperty({}, "passive", {
									get() {
										e = !0;
									},
								})
							);
						} catch ($h) {}
						return e;
					})(),
					Kp = (() => {
						try {
							return (
								new CSSStyleSheet(),
								"function" == typeof new CSSStyleSheet().replaceSync
							);
						} catch ($h) {}
						return !1;
					})(),
					Zp = [],
					Jp = [],
					em = (e, t) => (n) => {
						e.push(n),
							Mf || ((Mf = !0), t && 4 & Gp.$flags$ ? om(nm) : Gp.raf(nm));
					},
					tm = (e) => {
						for (let t = 0; t < e.length; t++)
							try {
								e[t](performance.now());
							} catch ($h) {
								Fp($h);
							}
						e.length = 0;
					},
					nm = () => {
						tm(Zp), tm(Jp), (Mf = Zp.length > 0) && Gp.raf(nm);
					},
					om = (e) => ((e) => Promise.resolve(e))().then(e),
					im = t("r", em(Zp, !1)),
					rm = t("w", em(Jp, !0)),
					am = t("h", "undefined" != typeof window ? window : void 0),
					sm = t("d", "undefined" != typeof document ? document : void 0),
					lm = (e, t = 0) =>
						new Promise((n) => {
							cm(e, t, n);
						}),
					cm = (e, t = 0, n) => {
						let o, i;
						const r = { passive: !0 },
							a = () => {
								o && o();
							},
							s = (t) => {
								(void 0 !== t && e !== t.target) || (a(), n(t));
							};
						return (
							e &&
								(e.addEventListener("webkitTransitionEnd", s, r),
								e.addEventListener("transitionend", s, r),
								(i = setTimeout(s, t + 500)),
								(o = () => {
									i && (clearTimeout(i), (i = void 0)),
										e.removeEventListener("webkitTransitionEnd", s, r),
										e.removeEventListener("transitionend", s, r);
								})),
							a
						);
					},
					dm = t("a", (e, t) => {
						e.componentOnReady
							? e.componentOnReady().then((e) => t(e))
							: gm(() => t(e));
					}),
					um = (e) => void 0 !== e.componentOnReady,
					hm = (e, t = []) => {
						const n = {};
						return (
							t.forEach((t) => {
								if (e.hasAttribute(t)) {
									null !== e.getAttribute(t) && (n[t] = e.getAttribute(t)),
										e.removeAttribute(t);
								}
							}),
							n
						);
					},
					fm = [
						"role",
						"aria-activedescendant",
						"aria-atomic",
						"aria-autocomplete",
						"aria-braillelabel",
						"aria-brailleroledescription",
						"aria-busy",
						"aria-checked",
						"aria-colcount",
						"aria-colindex",
						"aria-colindextext",
						"aria-colspan",
						"aria-controls",
						"aria-current",
						"aria-describedby",
						"aria-description",
						"aria-details",
						"aria-disabled",
						"aria-errormessage",
						"aria-expanded",
						"aria-flowto",
						"aria-haspopup",
						"aria-hidden",
						"aria-invalid",
						"aria-keyshortcuts",
						"aria-label",
						"aria-labelledby",
						"aria-level",
						"aria-live",
						"aria-multiline",
						"aria-multiselectable",
						"aria-orientation",
						"aria-owns",
						"aria-placeholder",
						"aria-posinset",
						"aria-pressed",
						"aria-readonly",
						"aria-relevant",
						"aria-required",
						"aria-roledescription",
						"aria-rowcount",
						"aria-rowindex",
						"aria-rowindextext",
						"aria-rowspan",
						"aria-selected",
						"aria-setsize",
						"aria-sort",
						"aria-valuemax",
						"aria-valuemin",
						"aria-valuenow",
						"aria-valuetext",
					],
					pm = (e, t) => {
						let n = fm;
						return (
							t && t.length > 0 && (n = n.filter((e) => !t.includes(e))),
							hm(e, n)
						);
					},
					mm =
						(t("b", (e, t, n, o) => {
							var i;
							if ("undefined" != typeof window) {
								const r = window,
									a =
										null === (i = null == r ? void 0 : r.Ionic) || void 0 === i
											? void 0
											: i.config;
								if (a) {
									const i = a.get("_ael");
									if (i) return i(e, t, n, o);
									if (a._ael) return a._ael(e, t, n, o);
								}
							}
							return e.addEventListener(t, n, o);
						}),
						t("e", (e, t, n, o) => {
							var i;
							if ("undefined" != typeof window) {
								const r = window,
									a =
										null === (i = null == r ? void 0 : r.Ionic) || void 0 === i
											? void 0
											: i.config;
								if (a) {
									const i = a.get("_rel");
									if (i) return i(e, t, n, o);
									if (a._rel) return a._rel(e, t, n, o);
								}
							}
							return e.removeEventListener(t, n, o);
						}),
						(e, t = e) => e.shadowRoot || t),
					gm = t("j", (e) =>
						"function" == typeof __zone_symbol__requestAnimationFrame
							? __zone_symbol__requestAnimationFrame(e)
							: "function" == typeof requestAnimationFrame
							? requestAnimationFrame(e)
							: setTimeout(e)
					),
					bm = t("c", (e, t, n) => Math.max(e, Math.min(t, n))),
					vm = (e, t) => {
						if (!e) {
							const e = "ASSERT: " + t;
							throw (console.error(e), new Error(e));
						}
					},
					ym =
						(t("n", (e) => e.timeStamp || Date.now()),
						t("p", (e) => {
							if (e) {
								const t = e.changedTouches;
								if (t && t.length > 0) {
									const e = t[0];
									return { x: e.clientX, y: e.clientY };
								}
								if (void 0 !== e.pageX) return { x: e.pageX, y: e.pageY };
							}
							return { x: 0, y: 0 };
						}),
						(e, t) => {
							if ((null != e || (e = {}), null != t || (t = {}), e === t))
								return !0;
							const n = Object.keys(e);
							if (n.length !== Object.keys(t).length) return !1;
							for (const o of n) {
								if (!(o in t)) return !1;
								if (e[o] !== t[o]) return !1;
							}
							return !0;
						});
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				let wm;
				const xm = (e) =>
						e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
					km = (e) => {
						if (void 0 === wm) {
							const t = void 0 !== e.style.animationName,
								n = void 0 !== e.style.webkitAnimationName;
							wm = !t && n ? "-webkit-" : "";
						}
						return wm;
					},
					Em = (e, t, n) => {
						const o = t.startsWith("animation") ? km(e) : "";
						e.style.setProperty(o + t, n);
					},
					Sm = (e, t) => {
						const n = t.startsWith("animation") ? km(e) : "";
						e.style.removeProperty(n + t);
					},
					Cm = [],
					$m = (e = [], t) => {
						if (void 0 !== t) {
							const n = Array.isArray(t) ? t : [t];
							return [...e, ...n];
						}
						return e;
					},
					zm = t("t", (e) => {
						let t,
							n,
							o,
							i,
							r,
							a,
							s,
							l,
							c,
							d,
							u,
							h,
							f,
							p = [],
							m = [],
							g = [],
							b = !1,
							v = {},
							y = [],
							w = [],
							x = {},
							k = 0,
							E = !1,
							S = !1,
							C = !0,
							$ = !1,
							z = !0,
							I = !1;
						const T = e,
							P = [],
							L = [],
							R = [],
							O = [],
							N = [],
							_ = [],
							D = [],
							A = [],
							M = [],
							B = [],
							j = [],
							V =
								"function" == typeof AnimationEffect ||
								(void 0 !== am && "function" == typeof am.AnimationEffect),
							H =
								"function" == typeof Element &&
								"function" == typeof Element.prototype.animate &&
								V,
							F = () => j,
							W = (e) => {
								Y(), e && G();
							},
							U = (e, t) => {
								const n = t.findIndex((t) => t.c === e);
								n > -1 && t.splice(n, 1);
							},
							X = (e, t) => (
								((null == t ? void 0 : t.oneTimeCallback) ? L : P).push({
									c: e,
									o: t,
								}),
								f
							),
							q = () => ((P.length = 0), (L.length = 0), f),
							Y = () => {
								if (H)
									j.forEach((e) => {
										e.cancel();
									}),
										(j.length = 0);
								else {
									const e = O.slice();
									gm(() => {
										e.forEach((e) => {
											Sm(e, "animation-name"),
												Sm(e, "animation-duration"),
												Sm(e, "animation-timing-function"),
												Sm(e, "animation-iteration-count"),
												Sm(e, "animation-delay"),
												Sm(e, "animation-play-state"),
												Sm(e, "animation-fill-mode"),
												Sm(e, "animation-direction");
										});
									});
								}
							},
							G = () => {
								_.forEach((e) => {
									(null == e ? void 0 : e.parentNode) &&
										e.parentNode.removeChild(e);
								}),
									(_.length = 0);
							},
							Q = () => (void 0 !== r ? r : s ? s.getFill() : "both"),
							K = () =>
								void 0 !== c
									? c
									: void 0 !== a
									? a
									: s
									? s.getDirection()
									: "normal",
							Z = () =>
								E ? "linear" : void 0 !== o ? o : s ? s.getEasing() : "linear",
							J = () =>
								S
									? 0
									: void 0 !== d
									? d
									: void 0 !== n
									? n
									: s
									? s.getDuration()
									: 0,
							ee = () => (void 0 !== i ? i : s ? s.getIterations() : 1),
							te = () =>
								void 0 !== u ? u : void 0 !== t ? t : s ? s.getDelay() : 0,
							ne = (e) => {
								H
									? F().forEach((t) => {
											const n = t.effect;
											if (n.setKeyframes) n.setKeyframes(e);
											else {
												const o = new KeyframeEffect(
													n.target,
													e,
													n.getTiming()
												);
												t.effect = o;
											}
									  })
									: ie();
							},
							oe = () => {
								0 !== k &&
									(k--,
									0 === k &&
										((() => {
											he(), M.forEach((e) => e()), B.forEach((e) => e());
											const e = C ? 1 : 0,
												t = y,
												n = w,
												o = x;
											O.forEach((e) => {
												const i = e.classList;
												t.forEach((e) => i.add(e)),
													n.forEach((e) => i.remove(e));
												for (const t in o)
													o.hasOwnProperty(t) && Em(e, t, o[t]);
											}),
												P.forEach((t) => t.c(e, f)),
												L.forEach((t) => t.c(e, f)),
												(L.length = 0),
												(z = !0),
												C && ($ = !0),
												(C = !0);
										})(),
										s && s.animationFinish()));
							},
							ie = (t = !0) => {
								G();
								const n = ((e) => (
									e.forEach((e) => {
										for (const t in e)
											if (e.hasOwnProperty(t)) {
												const n = e[t];
												if ("easing" === t)
													(e["animation-timing-function"] = n), delete e[t];
												else {
													const o = xm(t);
													o !== t && ((e[o] = n), delete e[t]);
												}
											}
									}),
									e
								))(p);
								O.forEach((o) => {
									if (n.length > 0) {
										const i = ((e = []) =>
											e
												.map((e) => {
													const t = e.offset,
														n = [];
													for (const o in e)
														e.hasOwnProperty(o) &&
															"offset" !== o &&
															n.push(`${o}: ${e[o]};`);
													return `${100 * t}% { ${n.join(" ")} }`;
												})
												.join(" "))(n);
										h =
											void 0 !== e
												? e
												: ((e) => {
														let t = Cm.indexOf(e);
														return (
															t < 0 && (t = Cm.push(e) - 1),
															`ion-animation-${t}`
														);
												  })(i);
										const r = ((e, t, n) => {
											var o;
											const i = ((e) => {
													const t =
														void 0 !== e.getRootNode ? e.getRootNode() : e;
													return t.head || t;
												})(n),
												r = km(n),
												a = i.querySelector("#" + e);
											if (a) return a;
											const s = (
												null !== (o = n.ownerDocument) && void 0 !== o
													? o
													: document
											).createElement("style");
											return (
												(s.id = e),
												(s.textContent = `@${r}keyframes ${e} { ${t} } @${r}keyframes ${e}-alt { ${t} }`),
												i.appendChild(s),
												s
											);
										})(h, i, o);
										_.push(r),
											Em(o, "animation-duration", `${J()}ms`),
											Em(o, "animation-timing-function", Z()),
											Em(o, "animation-delay", `${te()}ms`),
											Em(o, "animation-fill-mode", Q()),
											Em(o, "animation-direction", K());
										const a = ee() === 1 / 0 ? "infinite" : ee().toString();
										Em(o, "animation-iteration-count", a),
											Em(o, "animation-play-state", "paused"),
											t && Em(o, "animation-name", `${r.id}-alt`),
											gm(() => {
												Em(o, "animation-name", r.id || null);
											});
									}
								});
							},
							re = (e = !0) => {
								(() => {
									D.forEach((e) => e()), A.forEach((e) => e());
									const e = m,
										t = g,
										n = v;
									O.forEach((o) => {
										const i = o.classList;
										e.forEach((e) => i.add(e)), t.forEach((e) => i.remove(e));
										for (const e in n) n.hasOwnProperty(e) && Em(o, e, n[e]);
									});
								})(),
									p.length > 0 &&
										(H
											? (O.forEach((e) => {
													const t = e.animate(p, {
														id: T,
														delay: te(),
														duration: J(),
														easing: Z(),
														iterations: ee(),
														fill: Q(),
														direction: K(),
													});
													t.pause(), j.push(t);
											  }),
											  j.length > 0 &&
													(j[0].onfinish = () => {
														oe();
													}))
											: ie(e)),
									(b = !0);
							},
							ae = (e) => {
								if (((e = Math.min(Math.max(e, 0), 0.9999)), H))
									j.forEach((t) => {
										(t.currentTime =
											t.effect.getComputedTiming().delay + J() * e),
											t.pause();
									});
								else {
									const t = `-${J() * e}ms`;
									O.forEach((e) => {
										p.length > 0 &&
											(Em(e, "animation-delay", t),
											Em(e, "animation-play-state", "paused"));
									});
								}
							},
							se = (e) => {
								j.forEach((e) => {
									e.effect.updateTiming({
										delay: te(),
										duration: J(),
										easing: Z(),
										iterations: ee(),
										fill: Q(),
										direction: K(),
									});
								}),
									void 0 !== e && ae(e);
							},
							le = (e = !0, t) => {
								gm(() => {
									O.forEach((n) => {
										Em(n, "animation-name", h || null),
											Em(n, "animation-duration", `${J()}ms`),
											Em(n, "animation-timing-function", Z()),
											Em(
												n,
												"animation-delay",
												void 0 !== t ? `-${t * J()}ms` : `${te()}ms`
											),
											Em(n, "animation-fill-mode", Q() || null),
											Em(n, "animation-direction", K() || null);
										const o = ee() === 1 / 0 ? "infinite" : ee().toString();
										Em(n, "animation-iteration-count", o),
											e && Em(n, "animation-name", `${h}-alt`),
											gm(() => {
												Em(n, "animation-name", h || null);
											});
									});
								});
							},
							ce = (e = !1, t = !0, n) => (
								e &&
									N.forEach((o) => {
										o.update(e, t, n);
									}),
								H ? se(n) : le(t, n),
								f
							),
							de = () => {
								b &&
									(H
										? j.forEach((e) => {
												e.pause();
										  })
										: O.forEach((e) => {
												Em(e, "animation-play-state", "paused");
										  }),
									(I = !0));
							},
							ue = () => {
								(l = void 0), oe();
							},
							he = () => {
								l && clearTimeout(l);
							},
							fe = () => {
								O.forEach((e) => {
									Sm(e, "animation-duration"),
										Sm(e, "animation-delay"),
										Sm(e, "animation-play-state");
								});
							},
							pe = (e) =>
								new Promise((t) => {
									(null == e ? void 0 : e.sync) &&
										((S = !0), X(() => (S = !1), { oneTimeCallback: !0 })),
										b || re(),
										$ && (H ? (ae(0), se()) : le(), ($ = !1)),
										z && ((k = N.length + 1), (z = !1));
									const n = () => {
											U(o, L), t();
										},
										o = () => {
											U(n, R), t();
										};
									X(o, { oneTimeCallback: !0 }),
										((e, t) => {
											R.push({ c: e, o: t });
										})(n, { oneTimeCallback: !0 }),
										N.forEach((e) => {
											e.play();
										}),
										H
											? (j.forEach((e) => {
													e.play();
											  }),
											  (0 !== p.length && 0 !== O.length) || oe())
											: (() => {
													if (
														(he(),
														gm(() => {
															O.forEach((e) => {
																p.length > 0 &&
																	Em(e, "animation-play-state", "running");
															});
														}),
														0 === p.length || 0 === O.length)
													)
														oe();
													else {
														const e = te() || 0,
															t = J() || 0,
															n = ee() || 1;
														isFinite(n) &&
															(l = setTimeout(ue, e + t * n + 100)),
															((e, t) => {
																let n;
																const o = { passive: !0 },
																	i = () => {
																		n && n();
																	},
																	r = (n) => {
																		e === n.target && (i(), t(n));
																	};
																e &&
																	(e.addEventListener(
																		"webkitAnimationEnd",
																		r,
																		o
																	),
																	e.addEventListener("animationend", r, o),
																	(n = () => {
																		e.removeEventListener(
																			"webkitAnimationEnd",
																			r,
																			o
																		),
																			e.removeEventListener(
																				"animationend",
																				r,
																				o
																			);
																	}));
															})(O[0], () => {
																he(),
																	gm(() => {
																		fe(), gm(oe);
																	});
															});
													}
											  })(),
										(I = !1);
								}),
							me = (e, t) => {
								const n = p[0];
								return (
									void 0 === n || (void 0 !== n.offset && 0 !== n.offset)
										? (p = [{ offset: 0, [e]: t }, ...p])
										: (n[e] = t),
									f
								);
							};
						return (f = {
							parentAnimation: s,
							elements: O,
							childAnimations: N,
							id: T,
							animationFinish: oe,
							from: me,
							to: (e, t) => {
								const n = p[p.length - 1];
								return (
									void 0 === n || (void 0 !== n.offset && 1 !== n.offset)
										? (p = [...p, { offset: 1, [e]: t }])
										: (n[e] = t),
									f
								);
							},
							fromTo: (e, t, n) => me(e, t).to(e, n),
							parent: (e) => ((s = e), f),
							play: pe,
							pause: () => (
								N.forEach((e) => {
									e.pause();
								}),
								de(),
								f
							),
							stop: () => {
								N.forEach((e) => {
									e.stop();
								}),
									b && (Y(), (b = !1)),
									(E = !1),
									(S = !1),
									(z = !0),
									(c = void 0),
									(d = void 0),
									(u = void 0),
									(k = 0),
									($ = !1),
									(C = !0),
									(I = !1),
									R.forEach((e) => e.c(0, f)),
									(R.length = 0);
							},
							destroy: (e) => (
								N.forEach((t) => {
									t.destroy(e);
								}),
								W(e),
								(O.length = 0),
								(N.length = 0),
								(p.length = 0),
								q(),
								(b = !1),
								(z = !0),
								f
							),
							keyframes: (e) => {
								const t = p !== e;
								return (p = e), t && ne(p), f;
							},
							addAnimation: (e) => {
								if (null != e)
									if (Array.isArray(e))
										for (const t of e) t.parent(f), N.push(t);
									else e.parent(f), N.push(e);
								return f;
							},
							addElement: (e) => {
								if (null != e)
									if (1 === e.nodeType) O.push(e);
									else if (e.length >= 0)
										for (let t = 0; t < e.length; t++) O.push(e[t]);
									else console.error("Invalid addElement value");
								return f;
							},
							update: ce,
							fill: (e) => ((r = e), ce(!0), f),
							direction: (e) => ((a = e), ce(!0), f),
							iterations: (e) => ((i = e), ce(!0), f),
							duration: (e) => (H || 0 !== e || (e = 1), (n = e), ce(!0), f),
							easing: (e) => ((o = e), ce(!0), f),
							delay: (e) => ((t = e), ce(!0), f),
							getWebAnimations: F,
							getKeyframes: () => p,
							getFill: Q,
							getDirection: K,
							getDelay: te,
							getIterations: ee,
							getEasing: Z,
							getDuration: J,
							afterAddRead: (e) => (M.push(e), f),
							afterAddWrite: (e) => (B.push(e), f),
							afterClearStyles: (e = []) => {
								for (const t of e) x[t] = "";
								return f;
							},
							afterStyles: (e = {}) => ((x = e), f),
							afterRemoveClass: (e) => ((w = $m(w, e)), f),
							afterAddClass: (e) => ((y = $m(y, e)), f),
							beforeAddRead: (e) => (D.push(e), f),
							beforeAddWrite: (e) => (A.push(e), f),
							beforeClearStyles: (e = []) => {
								for (const t of e) v[t] = "";
								return f;
							},
							beforeStyles: (e = {}) => ((v = e), f),
							beforeRemoveClass: (e) => ((g = $m(g, e)), f),
							beforeAddClass: (e) => ((m = $m(m, e)), f),
							onFinish: X,
							isRunning: () => 0 !== k && !I,
							progressStart: (e = !1, t) => (
								N.forEach((n) => {
									n.progressStart(e, t);
								}),
								de(),
								(E = e),
								b || re(),
								ce(!1, !0, t),
								f
							),
							progressStep: (e) => (
								N.forEach((t) => {
									t.progressStep(e);
								}),
								ae(e),
								f
							),
							progressEnd: (e, t, n) => (
								(E = !1),
								N.forEach((o) => {
									o.progressEnd(e, t, n);
								}),
								void 0 !== n && (d = n),
								($ = !1),
								(C = !0),
								0 === e
									? ((c = "reverse" === K() ? "normal" : "reverse"),
									  "reverse" === c && (C = !1),
									  H
											? (ce(), ae(1 - t))
											: ((u = (1 - t) * J() * -1), ce(!1, !1)))
									: 1 === e &&
									  (H ? (ce(), ae(t)) : ((u = t * J() * -1), ce(!1, !1))),
								void 0 !== e &&
									(X(
										() => {
											(d = void 0), (c = void 0), (u = void 0);
										},
										{ oneTimeCallback: !0 }
									),
									s || pe()),
								f
							),
						});
					}),
					Im = "ionViewWillLeave",
					Tm = "ionViewDidLeave",
					Pm = "ionViewWillUnload",
					Lm = (e) =>
						new Promise((t, n) => {
							rm(() => {
								Rm(e),
									Om(e).then(
										(n) => {
											n.animation && n.animation.destroy(), Nm(e), t(n);
										},
										(t) => {
											Nm(e), n(t);
										}
									);
							});
						}),
					Rm = (e) => {
						const t = e.enteringEl,
							n = e.leavingEl;
						Xm(t, n, e.direction),
							e.showGoBack
								? t.classList.add("can-go-back")
								: t.classList.remove("can-go-back"),
							Um(t, !1),
							t.style.setProperty("pointer-events", "none"),
							n && (Um(n, !1), n.style.setProperty("pointer-events", "none"));
					},
					Om = async (e) => {
						const t = await _m(e);
						return t && Bf ? Dm(t, e) : Am(e);
					},
					Nm = (e) => {
						const t = e.enteringEl,
							n = e.leavingEl;
						t.classList.remove("ion-page-invisible"),
							t.style.removeProperty("pointer-events"),
							void 0 !== n &&
								(n.classList.remove("ion-page-invisible"),
								n.style.removeProperty("pointer-events"));
					},
					_m = async (e) => {
						if (!e.leavingEl || !e.animated || 0 === e.duration) return;
						if (e.animationBuilder) return e.animationBuilder;
						return "ios" === e.mode
							? (
									await Ef(() =>
										n.import("./ios.transition-legacy-bd53af67.js")
									)
							  ).iosTransitionAnimation
							: (await Ef(() => n.import("./md.transition-legacy-0291700c.js")))
									.mdTransitionAnimation;
					},
					Dm = async (e, t) => {
						await Mm(t, !0);
						const n = e(t.baseEl, t);
						Vm(t.enteringEl, t.leavingEl);
						const o = await jm(n, t);
						return (
							t.progressCallback && t.progressCallback(void 0),
							o && Hm(t.enteringEl, t.leavingEl),
							{ hasCompleted: o, animation: n }
						);
					},
					Am = async (e) => {
						const t = e.enteringEl,
							n = e.leavingEl;
						return await Mm(e, !1), Vm(t, n), Hm(t, n), { hasCompleted: !0 };
					},
					Mm = async (e, t) => {
						(void 0 !== e.deepWait ? e.deepWait : t) &&
							(await Promise.all([Wm(e.enteringEl), Wm(e.leavingEl)])),
							await Bm(e.viewIsReady, e.enteringEl);
					},
					Bm = async (e, t) => {
						e && (await e(t));
					},
					jm = (e, t) => {
						const n = t.progressCallback,
							o = new Promise((t) => {
								e.onFinish((e) => t(1 === e));
							});
						return n ? (e.progressStart(!0), n(e)) : e.play(), o;
					},
					Vm = (e, t) => {
						Fm(t, Im), Fm(e, "ionViewWillEnter");
					},
					Hm = (e, t) => {
						Fm(e, "ionViewDidEnter"), Fm(t, Tm);
					},
					Fm = (e, t) => {
						if (e) {
							const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
							e.dispatchEvent(n);
						}
					},
					Wm = async (e) => {
						const t = e;
						if (t) {
							if (null != t.componentOnReady) {
								if (null != (await t.componentOnReady())) return;
							} else if (null != t.__registerHost) {
								const e = new Promise((e) => gm(e));
								return void (await e);
							}
							await Promise.all(Array.from(t.children).map(Wm));
						}
					},
					Um = (e, t) => {
						t
							? (e.setAttribute("aria-hidden", "true"),
							  e.classList.add("ion-page-hidden"))
							: ((e.hidden = !1),
							  e.removeAttribute("aria-hidden"),
							  e.classList.remove("ion-page-hidden"));
					},
					Xm = (e, t, n) => {
						void 0 !== e && (e.style.zIndex = "back" === n ? "99" : "101"),
							void 0 !== t && (t.style.zIndex = "100");
					},
					qm =
						(t("u", (e) => {
							if (e.classList.contains("ion-page")) return e;
							const t = e.querySelector(
								":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
							);
							return t || e;
						}),
						(e, t, n, o, i) =>
							Gm(e[1], t[1], n[1], o[1], i).map((i) =>
								Ym(e[0], t[0], n[0], o[0], i)
							)),
					Ym = (e, t, n, o, i) =>
						i *
							(3 * t * Math.pow(i - 1, 2) + i * (-3 * n * i + 3 * n + o * i)) -
						e * Math.pow(i - 1, 3),
					Gm = (e, t, n, o, i) =>
						Qm(
							(o -= i) - 3 * (n -= i) + 3 * (t -= i) - (e -= i),
							3 * n - 6 * t + 3 * e,
							3 * t - 3 * e,
							e
						).filter((e) => e >= 0 && e <= 1),
					Qm = (e, t, n, o) => {
						if (0 === e)
							return ((e, t, n) => {
								const o = t * t - 4 * e * n;
								return o < 0
									? []
									: [
											(-t + Math.sqrt(o)) / (2 * e),
											(-t - Math.sqrt(o)) / (2 * e),
									  ];
							})(t, n, o);
						const i = (3 * (n /= e) - (t /= e) * t) / 3,
							r = (2 * t * t * t - 9 * t * n + 27 * (o /= e)) / 27;
						if (0 === i) return [Math.pow(-r, 1 / 3)];
						if (0 === r) return [Math.sqrt(-i), -Math.sqrt(-i)];
						const a = Math.pow(r / 2, 2) + Math.pow(i / 3, 3);
						if (0 === a) return [Math.pow(r / 2, 0.5) - t / 3];
						if (a > 0)
							return [
								Math.pow(-r / 2 + Math.sqrt(a), 1 / 3) -
									Math.pow(r / 2 + Math.sqrt(a), 1 / 3) -
									t / 3,
							];
						const s = Math.sqrt(Math.pow(-i / 3, 3)),
							l = Math.acos(-r / (2 * Math.sqrt(Math.pow(-i / 3, 3)))),
							c = 2 * Math.pow(s, 1 / 3);
						return [
							c * Math.cos(l / 3) - t / 3,
							c * Math.cos((l + 2 * Math.PI) / 3) - t / 3,
							c * Math.cos((l + 4 * Math.PI) / 3) - t / 3,
						];
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				class Km {
					constructor() {
						this.m = new Map();
					}
					reset(e) {
						this.m = new Map(Object.entries(e));
					}
					get(e, t) {
						const n = this.m.get(e);
						return void 0 !== n ? n : t;
					}
					getBoolean(e, t = !1) {
						const n = this.m.get(e);
						return void 0 === n ? t : "string" == typeof n ? "true" === n : !!n;
					}
					getNumber(e, t) {
						const n = parseFloat(this.m.get(e));
						return isNaN(n) ? (void 0 !== t ? t : NaN) : n;
					}
					set(e, t) {
						this.m.set(e, t);
					}
				}
				const Zm = new Km(),
					Jm = (e, t) => e.substr(0, t.length) === t,
					eg = "ionic:",
					tg = "ionic-persist-config",
					ng = (e, t) => (
						"string" == typeof e && ((t = e), (e = void 0)),
						((e) => og(e))(e).includes(t)
					),
					og = (e = window) => {
						if (void 0 === e) return [];
						e.Ionic = e.Ionic || {};
						let t = e.Ionic.platforms;
						return (
							null == t &&
								((t = e.Ionic.platforms = ig(e)),
								t.forEach((t) =>
									e.document.documentElement.classList.add(`plt-${t}`)
								)),
							t
						);
					},
					ig = (e) => {
						const t = Zm.get("platform");
						return Object.keys(fg).filter((n) => {
							const o = null == t ? void 0 : t[n];
							return "function" == typeof o ? o(e) : fg[n](e);
						});
					},
					rg = (e) => !!ug(e, /iPad/i) || !(!ug(e, /Macintosh/i) || !sg(e)),
					ag = (e) => ug(e, /android|sink/i),
					sg = (e) => hg(e, "(any-pointer:coarse)"),
					lg = (e) => cg(e) || dg(e),
					cg = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
					dg = (e) => {
						const t = e.Capacitor;
						return !!(null == t ? void 0 : t.isNative);
					},
					ug = (e, t) => t.test(e.navigator.userAgent),
					hg = (e, t) => {
						var n;
						return null === (n = e.matchMedia) || void 0 === n
							? void 0
							: n.call(e, t).matches;
					},
					fg = {
						ipad: rg,
						iphone: (e) => ug(e, /iPhone/i),
						ios: (e) => ug(e, /iPhone|iPod/i) || rg(e),
						android: ag,
						phablet: (e) => {
							const t = e.innerWidth,
								n = e.innerHeight,
								o = Math.min(t, n),
								i = Math.max(t, n);
							return o > 390 && o < 520 && i > 620 && i < 800;
						},
						tablet: (e) => {
							const t = e.innerWidth,
								n = e.innerHeight,
								o = Math.min(t, n),
								i = Math.max(t, n);
							return (
								rg(e) ||
								((e) => ag(e) && !ug(e, /mobile/i))(e) ||
								(o > 460 && o < 820 && i > 780 && i < 1400)
							);
						},
						cordova: cg,
						capacitor: dg,
						electron: (e) => ug(e, /electron/i),
						pwa: (e) => {
							var t;
							return !(
								!(null === (t = e.matchMedia) || void 0 === t
									? void 0
									: t.call(e, "(display-mode: standalone)").matches) &&
								!e.navigator.standalone
							);
						},
						mobile: sg,
						mobileweb: (e) => sg(e) && !lg(e),
						desktop: (e) => !sg(e),
						hybrid: lg,
					};
				let pg;
				const mg = (e) => (e && ((e) => jp(e).$modeName$)(e)) || pg,
					gg = (e = {}) => {
						if ("undefined" == typeof window) return;
						const t = window.document,
							n = window,
							o = (n.Ionic = n.Ionic || {}),
							i = {};
						var r;
						e._ael && (i.ael = e._ael),
							e._rel && (i.rel = e._rel),
							e._ce && (i.ce = e._ce),
							(r = i),
							Object.assign(Gp, r);
						const a = Object.assign(
							Object.assign(
								Object.assign(
									Object.assign(
										Object.assign(
											{},
											((e) => {
												try {
													const t = e.sessionStorage.getItem(tg);
													return null !== t ? JSON.parse(t) : {};
												} catch ($h) {
													return {};
												}
											})(n)
										),
										{ persistConfig: !1 }
									),
									o.config
								),
								((e) => {
									const t = {};
									return (
										e.location.search
											.slice(1)
											.split("&")
											.map((e) => e.split("="))
											.map(([e, t]) => [
												decodeURIComponent(e),
												decodeURIComponent(t),
											])
											.filter(([e]) => Jm(e, eg))
											.map(([e, t]) => [e.slice(eg.length), t])
											.forEach(([e, n]) => {
												t[e] = n;
											}),
										t
									);
								})(n)
							),
							e
						);
						Zm.reset(a),
							Zm.getBoolean("persistConfig") &&
								((e, t) => {
									try {
										e.sessionStorage.setItem(tg, JSON.stringify(t));
									} catch ($h) {
										return;
									}
								})(n, a),
							og(n),
							(o.config = Zm),
							(o.mode = pg =
								Zm.get(
									"mode",
									t.documentElement.getAttribute("mode") ||
										(ng(n, "ios") ? "ios" : "md")
								)),
							Zm.set("mode", pg),
							t.documentElement.setAttribute("mode", pg),
							t.documentElement.classList.add(pg),
							Zm.getBoolean("_testing") && Zm.set("animated", !1);
						const s = (e) => {
								var t;
								return null === (t = e.tagName) || void 0 === t
									? void 0
									: t.startsWith("ION-");
							},
							l = (e) => ["ios", "md"].includes(e);
						var c;
						(c = (e) => {
							for (; e; ) {
								const t = e.mode || e.getAttribute("mode");
								if (t) {
									if (l(t)) return t;
									s(e) &&
										console.warn(
											'Invalid ionic mode: "' + t + '", expected: "ios" or "md"'
										);
								}
								e = e.parentElement;
							}
							return pg;
						}),
							Up.push(c);
					},
					bg = (e) => {
						try {
							if (e instanceof Eg) return e.value;
							if (!wg() || "string" != typeof e || "" === e) return e;
							if (e.includes("onload=")) return "";
							const t = document.createDocumentFragment(),
								n = document.createElement("div");
							t.appendChild(n),
								(n.innerHTML = e),
								kg.forEach((e) => {
									const n = t.querySelectorAll(e);
									for (let o = n.length - 1; o >= 0; o--) {
										const e = n[o];
										e.parentNode
											? e.parentNode.removeChild(e)
											: t.removeChild(e);
										const i = yg(e);
										for (let t = 0; t < i.length; t++) vg(i[t]);
									}
								});
							const o = yg(t);
							for (let e = 0; e < o.length; e++) vg(o[e]);
							const i = document.createElement("div");
							i.appendChild(t);
							const r = i.querySelector("div");
							return null !== r ? r.innerHTML : i.innerHTML;
						} catch (t) {
							return console.error(t), "";
						}
					},
					vg = (e) => {
						if (e.nodeType && 1 !== e.nodeType) return;
						if (
							"undefined" != typeof NamedNodeMap &&
							!(e.attributes instanceof NamedNodeMap)
						)
							return void e.remove();
						for (let n = e.attributes.length - 1; n >= 0; n--) {
							const t = e.attributes.item(n),
								o = t.name;
							if (!xg.includes(o.toLowerCase())) {
								e.removeAttribute(o);
								continue;
							}
							const i = t.value,
								r = e[o];
							((null != i && i.toLowerCase().includes("javascript:")) ||
								(null != r && r.toLowerCase().includes("javascript:"))) &&
								e.removeAttribute(o);
						}
						const t = yg(e);
						for (let n = 0; n < t.length; n++) vg(t[n]);
					},
					yg = (e) => (null != e.children ? e.children : e.childNodes),
					wg = () => {
						var e;
						const t = window,
							n =
								null === (e = null == t ? void 0 : t.Ionic) || void 0 === e
									? void 0
									: e.config;
						return (
							!n ||
							(n.get
								? n.get("sanitizerEnabled", !0)
								: !0 === n.sanitizerEnabled || void 0 === n.sanitizerEnabled)
						);
					},
					xg = ["class", "id", "href", "src", "name", "slot"],
					kg = ["script", "style", "iframe", "meta", "link", "object", "embed"];
				class Eg {
					constructor(e) {
						this.value = e;
					}
				}
				const Sg = (e, t) => null !== t.closest(e),
					Cg = (e, t) =>
						"string" == typeof e && e.length > 0
							? Object.assign({ "ion-color": !0, [`ion-color-${e}`]: !0 }, t)
							: t,
					$g = /^[a-z][a-z0-9+\-.]*:/,
					zg = async (e, t, n, o) => {
						if (null != e && "#" !== e[0] && !$g.test(e)) {
							const i = document.querySelector("ion-router");
							if (i) return null != t && t.preventDefault(), i.push(e, n, o);
						}
						return !1;
					},
					Ig = (e, ...t) => console.warn(`[Ionic Warning]: ${e}`, ...t),
					Tg = async (e, t, n, o, i, r) => {
						var a;
						if (e) return e.attachViewToDom(t, n, i, o);
						if (!(r || "string" == typeof n || n instanceof HTMLElement))
							throw new Error("framework delegate is missing");
						const s =
							"string" == typeof n
								? null === (a = t.ownerDocument) || void 0 === a
									? void 0
									: a.createElement(n)
								: n;
						return (
							o && o.forEach((e) => s.classList.add(e)),
							i && Object.assign(s, i),
							t.appendChild(s),
							await new Promise((e) => dm(s, e)),
							s
						);
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ function Pg(e, t) {
					var n = {};
					for (var o in e)
						Object.prototype.hasOwnProperty.call(e, o) &&
							t.indexOf(o) < 0 &&
							(n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
							t.indexOf(o[i]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(e, o[i]) &&
								(n[o[i]] = e[o[i]]);
					}
					return n;
				}
				"function" == typeof SuppressedError && SuppressedError;
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Lg =
					"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				let Rg;
				const Og = (e) => {
						const t = (() => {
							if ("undefined" == typeof window) return new Map();
							if (!Rg) {
								const e = window;
								(e.Ionicons = e.Ionicons || {}),
									(Rg = e.Ionicons.map = e.Ionicons.map || new Map());
							}
							return Rg;
						})().get(e);
						return t || jf(`svg/${e}.svg`);
					},
					Ng = (e, t, n, o, i) => {
						if (
							((n = "ios" === (n && Mg(n)) ? "ios" : "md"),
							o && "ios" === n
								? (e = Mg(o))
								: i && "md" === n
								? (e = Mg(i))
								: (e || !t || Dg(t) || (e = t), Ag(e) && (e = Mg(e))),
							!Ag(e) || "" === e.trim())
						)
							return null;
						return "" !== e.replace(/[a-z]|-|\d/gi, "") ? null : e;
					},
					_g = (e) => (Ag(e) && ((e = e.trim()), Dg(e)) ? e : null),
					Dg = (e) => e.length > 0 && /(\/|\.)/.test(e),
					Ag = (e) => "string" == typeof e,
					Mg = (e) => e.toLowerCase(),
					Bg = (e) => {
						if (1 === e.nodeType) {
							if ("script" === e.nodeName.toLowerCase()) return !1;
							for (let t = 0; t < e.attributes.length; t++) {
								const n = e.attributes[t].name;
								if (Ag(n) && 0 === n.toLowerCase().indexOf("on")) return !1;
							}
							for (let t = 0; t < e.childNodes.length; t++)
								if (!Bg(e.childNodes[t])) return !1;
						}
						return !0;
					},
					jg = new Map(),
					Vg = new Map();
				let Hg;
				const Fg = (e, t) => {
						let n = Vg.get(e);
						if (!n) {
							if ("undefined" == typeof fetch || "undefined" == typeof document)
								return jg.set(e, ""), Promise.resolve();
							if (
								((e) => e.startsWith("data:image/svg+xml"))(e) &&
								((e) => -1 !== e.indexOf(";utf8,"))(e)
							) {
								Hg || (Hg = new DOMParser());
								const t = Hg.parseFromString(e, "text/html").querySelector(
									"svg"
								);
								return t && jg.set(e, t.outerHTML), Promise.resolve();
							}
							(n = fetch(e).then((n) => {
								if (n.ok)
									return n.text().then((n) => {
										n &&
											!1 !== t &&
											(n = ((e) => {
												const t = document.createElement("div");
												t.innerHTML = e;
												for (let o = t.childNodes.length - 1; o >= 0; o--)
													"svg" !== t.childNodes[o].nodeName.toLowerCase() &&
														t.removeChild(t.childNodes[o]);
												const n = t.firstElementChild;
												if (n && "svg" === n.nodeName.toLowerCase()) {
													const e = n.getAttribute("class") || "";
													if (
														(n.setAttribute(
															"class",
															(e + " s-ion-icon").trim()
														),
														Bg(n))
													)
														return t.innerHTML;
												}
												return "";
											})(n)),
											jg.set(e, n || "");
									});
								jg.set(e, "");
							})),
								Vg.set(e, n);
						}
						return n;
					},
					Wg = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.iconName = null),
									(this.inheritedAttributes = {}),
									(this.didLoadIcon = !1),
									(this.svgContent = void 0),
									(this.isVisible = !1),
									(this.mode = Ug()),
									(this.color = void 0),
									(this.ios = void 0),
									(this.md = void 0),
									(this.flipRtl = void 0),
									(this.name = void 0),
									(this.src = void 0),
									(this.icon = void 0),
									(this.size = void 0),
									(this.lazy = !1),
									(this.sanitize = !0);
							}
							componentWillLoad() {
								this.inheritedAttributes = ((e, t = []) => {
									const n = {};
									return (
										t.forEach((t) => {
											e.hasAttribute(t) &&
												(null !== e.getAttribute(t) &&
													(n[t] = e.getAttribute(t)),
												e.removeAttribute(t));
										}),
										n
									);
								})(this.el, ["aria-label"]);
							}
							connectedCallback() {
								this.waitUntilVisible(this.el, "50px", () => {
									(this.isVisible = !0), this.loadIcon();
								});
							}
							componentDidLoad() {
								this.didLoadIcon || this.loadIcon();
							}
							disconnectedCallback() {
								this.io && (this.io.disconnect(), (this.io = void 0));
							}
							waitUntilVisible(e, t, n) {
								if (
									this.lazy &&
									"undefined" != typeof window &&
									window.IntersectionObserver
								) {
									const o = (this.io = new window.IntersectionObserver(
										(e) => {
											e[0].isIntersecting &&
												(o.disconnect(), (this.io = void 0), n());
										},
										{ rootMargin: t }
									));
									o.observe(e);
								} else n();
							}
							loadIcon() {
								if (this.isVisible) {
									const e = ((e) => {
										let t = _g(e.src);
										if (t) return t;
										if (((t = Ng(e.name, e.icon, e.mode, e.ios, e.md)), t))
											return Og(t);
										if (e.icon) {
											if (((t = _g(e.icon)), t)) return t;
											if (((t = _g(e.icon[e.mode])), t)) return t;
										}
										return null;
									})(this);
									e &&
										(jg.has(e)
											? (this.svgContent = jg.get(e))
											: Fg(e, this.sanitize).then(
													() => (this.svgContent = jg.get(e))
											  ),
										(this.didLoadIcon = !0));
								}
								this.iconName = Ng(
									this.name,
									this.icon,
									this.mode,
									this.ios,
									this.md
								);
							}
							render() {
								const {
										flipRtl: e,
										iconName: t,
										inheritedAttributes: n,
										el: o,
									} = this,
									i = this.mode || "md",
									r =
										!!t &&
										(t.includes("arrow") || t.includes("chevron")) &&
										!1 !== e,
									a = e || r;
								return Wf(
									Xf,
									Object.assign(
										{
											role: "img",
											class: Object.assign(
												Object.assign({ [i]: !0 }, Xg(this.color)),
												{
													[`icon-${this.size}`]: !!this.size,
													"flip-rtl": a,
													"icon-rtl":
														a &&
														((s = o),
														s && "" !== s.dir
															? "rtl" === s.dir.toLowerCase()
															: "rtl" ===
															  (null === document || void 0 === document
																	? void 0
																	: document.dir.toLowerCase())),
												}
											),
										},
										n
									),
									this.svgContent
										? Wf("div", {
												class: "icon-inner",
												innerHTML: this.svgContent,
										  })
										: Wf("div", { class: "icon-inner" })
								);
								var s;
							}
							static get assetsDirs() {
								return ["svg"];
							}
							get el() {
								return this;
							}
							static get watchers() {
								return {
									name: ["loadIcon"],
									src: ["loadIcon"],
									icon: ["loadIcon"],
									ios: ["loadIcon"],
									md: ["loadIcon"],
								};
							}
							static get style() {
								return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
							}
						},
						[
							1,
							"ion-icon",
							{
								mode: [1025],
								color: [1],
								ios: [1],
								md: [1],
								flipRtl: [4, "flip-rtl"],
								name: [513],
								src: [1],
								icon: [8],
								size: [1],
								lazy: [4],
								sanitize: [4],
								svgContent: [32],
								isVisible: [32],
							},
							void 0,
							{
								name: ["loadIcon"],
								src: ["loadIcon"],
								icon: ["loadIcon"],
								ios: ["loadIcon"],
								md: ["loadIcon"],
							},
						]
					),
					Ug = () =>
						("undefined" != typeof document &&
							document.documentElement.getAttribute("mode")) ||
						"md",
					Xg = (e) => (e ? { "ion-color": !0, [`ion-color-${e}`]: !0 } : null);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				const qg = Np(
					class extends Yp {
						constructor() {
							super(), this.__registerHost();
						}
						render() {
							const e = mg(this);
							return Wf(Xf, { class: { [e]: !0, [`card-content-${e}`]: !0 } });
						}
						static get style() {
							return {
								ios: "ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:1rem;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem}ion-card-header+.card-content-ios{padding-top:0}",
								md: "ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:0.875rem;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}",
							};
						}
					},
					[32, "ion-card-content"]
				);
				const Yg = function () {
						if ("undefined" == typeof customElements) return;
						["ion-card-content"].forEach((e) => {
							if ("ion-card-content" === e)
								customElements.get(e) || customElements.define(e, qg);
						});
					},
					Gg = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.color = void 0),
									(this.translucent = !1);
							}
							render() {
								const e = mg(this);
								return Wf(
									Xf,
									{
										class: Cg(this.color, {
											"card-header-translucent": this.translucent,
											"ion-inherit-color": !0,
											[e]: !0,
										}),
									},
									Wf("slot", null)
								);
							}
							static get style() {
								return {
									ios: ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}",
									md: ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}",
								};
							}
						},
						[33, "ion-card-header", { color: [513], translucent: [4] }]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Qg = function () {
						if ("undefined" == typeof customElements) return;
						["ion-card-header"].forEach((e) => {
							if ("ion-card-header" === e)
								customElements.get(e) || customElements.define(e, Gg);
						});
					},
					Kg = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.color = void 0);
							}
							render() {
								const e = mg(this);
								return Wf(
									Xf,
									{
										role: "heading",
										"aria-level": "3",
										class: Cg(this.color, { "ion-inherit-color": !0, [e]: !0 }),
									},
									Wf("slot", null)
								);
							}
							static get style() {
								return {
									ios: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}",
									md: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}",
								};
							}
						},
						[33, "ion-card-subtitle", { color: [513] }]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Zg = function () {
						if ("undefined" == typeof customElements) return;
						["ion-card-subtitle"].forEach((e) => {
							if ("ion-card-subtitle" === e)
								customElements.get(e) || customElements.define(e, Kg);
						});
					},
					Jg = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.color = void 0);
							}
							render() {
								const e = mg(this);
								return Wf(
									Xf,
									{
										role: "heading",
										"aria-level": "2",
										class: Cg(this.color, { "ion-inherit-color": !0, [e]: !0 }),
									},
									Wf("slot", null)
								);
							}
							static get style() {
								return {
									ios: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.75rem;font-weight:700;line-height:1.2}",
									md: ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;line-height:1.2}",
								};
							}
						},
						[33, "ion-card-title", { color: [513] }]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const eb = function () {
						if ("undefined" == typeof customElements) return;
						["ion-card-title"].forEach((e) => {
							if ("ion-card-title" === e)
								customElements.get(e) || customElements.define(e, Jg);
						});
					},
					tb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.type = "bounded");
							}
							async addRipple(e, t) {
								return new Promise((n) => {
									im(() => {
										const o = this.el.getBoundingClientRect(),
											i = o.width,
											r = o.height,
											a = Math.sqrt(i * i + r * r),
											s = Math.max(r, i),
											l = this.unbounded ? s : a + ob,
											c = Math.floor(s * ib),
											d = l / c;
										let u = e - o.left,
											h = t - o.top;
										this.unbounded && ((u = 0.5 * i), (h = 0.5 * r));
										const f = u - 0.5 * c,
											p = h - 0.5 * c,
											m = 0.5 * i - u,
											g = 0.5 * r - h;
										rm(() => {
											const e = document.createElement("div");
											e.classList.add("ripple-effect");
											const t = e.style;
											(t.top = p + "px"),
												(t.left = f + "px"),
												(t.width = t.height = c + "px"),
												t.setProperty("--final-scale", `${d}`),
												t.setProperty("--translate-end", `${m}px, ${g}px`);
											(this.el.shadowRoot || this.el).appendChild(e),
												setTimeout(() => {
													n(() => {
														nb(e);
													});
												}, 325);
										});
									});
								});
							}
							get unbounded() {
								return "unbounded" === this.type;
							}
							render() {
								const e = mg(this);
								return Wf(Xf, {
									role: "presentation",
									class: { [e]: !0, unbounded: this.unbounded },
								});
							}
							get el() {
								return this;
							}
							static get style() {
								return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
							}
						},
						[1, "ion-ripple-effect", { type: [1], addRipple: [64] }]
					),
					nb = (e) => {
						e.classList.add("fade-out"),
							setTimeout(() => {
								e.remove();
							}, 200);
					},
					ob = 10,
					ib = 0.5;
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				const rb = "undefined" != typeof window ? window : void 0;
				rb && rb.CSS && rb.CSS.supports && rb.CSS.supports("--a: 0");
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				const ab = t("i", (e) =>
						e && "" !== e.dir
							? "rtl" === e.dir.toLowerCase()
							: "rtl" ===
							  (null === document || void 0 === document
									? void 0
									: document.dir.toLowerCase())
					),
					sb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionScrollStart = Qf(this, "ionScrollStart", 7)),
									(this.ionScroll = Qf(this, "ionScroll", 7)),
									(this.ionScrollEnd = Qf(this, "ionScrollEnd", 7)),
									(this.watchDog = null),
									(this.isScrolling = !1),
									(this.lastScroll = 0),
									(this.queued = !1),
									(this.cTop = -1),
									(this.cBottom = -1),
									(this.isMainContent = !0),
									(this.resizeTimeout = null),
									(this.tabsElement = null),
									(this.detail = {
										scrollTop: 0,
										scrollLeft: 0,
										type: "scroll",
										event: void 0,
										startX: 0,
										startY: 0,
										startTime: 0,
										currentX: 0,
										currentY: 0,
										velocityX: 0,
										velocityY: 0,
										deltaX: 0,
										deltaY: 0,
										currentTime: 0,
										data: void 0,
										isScrolling: !0,
									}),
									(this.color = void 0),
									(this.fullscreen = !1),
									(this.forceOverscroll = void 0),
									(this.scrollX = !1),
									(this.scrollY = !0),
									(this.scrollEvents = !1);
							}
							connectedCallback() {
								if (
									((this.isMainContent =
										null ===
										this.el.closest("ion-menu, ion-popover, ion-modal")),
									um(this.el))
								) {
									const e = (this.tabsElement = this.el.closest("ion-tabs"));
									null !== e &&
										((this.tabsLoadCallback = () => this.resize()),
										e.addEventListener(
											"ionTabBarLoaded",
											this.tabsLoadCallback
										));
								}
							}
							disconnectedCallback() {
								if ((this.onScrollEnd(), um(this.el))) {
									const { tabsElement: e, tabsLoadCallback: t } = this;
									null !== e &&
										void 0 !== t &&
										e.removeEventListener("ionTabBarLoaded", t),
										(this.tabsElement = null),
										(this.tabsLoadCallback = void 0);
								}
							}
							onResize() {
								this.resizeTimeout &&
									(clearTimeout(this.resizeTimeout),
									(this.resizeTimeout = null)),
									(this.resizeTimeout = setTimeout(() => {
										null !== this.el.offsetParent && this.resize();
									}, 100));
							}
							shouldForceOverscroll() {
								const { forceOverscroll: e } = this,
									t = mg(this);
								return void 0 === e ? "ios" === t && ng("ios") : e;
							}
							resize() {
								this.fullscreen
									? im(() => this.readDimensions())
									: (0 === this.cTop && 0 === this.cBottom) ||
									  ((this.cTop = this.cBottom = 0), Ip(this));
							}
							readDimensions() {
								const e = lb(this.el),
									t = Math.max(this.el.offsetTop, 0),
									n = Math.max(e.offsetHeight - t - this.el.offsetHeight, 0);
								(t !== this.cTop || n !== this.cBottom) &&
									((this.cTop = t), (this.cBottom = n), Ip(this));
							}
							onScroll(e) {
								const t = Date.now(),
									n = !this.isScrolling;
								(this.lastScroll = t),
									n && this.onScrollStart(),
									!this.queued &&
										this.scrollEvents &&
										((this.queued = !0),
										im((t) => {
											(this.queued = !1),
												(this.detail.event = e),
												cb(this.detail, this.scrollEl, t, n),
												this.ionScroll.emit(this.detail);
										}));
							}
							async getScrollElement() {
								return (
									this.scrollEl || (await new Promise((e) => dm(this.el, e))),
									Promise.resolve(this.scrollEl)
								);
							}
							async getBackgroundElement() {
								return (
									this.backgroundContentEl ||
										(await new Promise((e) => dm(this.el, e))),
									Promise.resolve(this.backgroundContentEl)
								);
							}
							scrollToTop(e = 0) {
								return this.scrollToPoint(void 0, 0, e);
							}
							async scrollToBottom(e = 0) {
								const t = await this.getScrollElement(),
									n = t.scrollHeight - t.clientHeight;
								return this.scrollToPoint(void 0, n, e);
							}
							async scrollByPoint(e, t, n) {
								const o = await this.getScrollElement();
								return this.scrollToPoint(e + o.scrollLeft, t + o.scrollTop, n);
							}
							async scrollToPoint(e, t, n = 0) {
								const o = await this.getScrollElement();
								if (n < 32)
									return (
										null != t && (o.scrollTop = t),
										void (null != e && (o.scrollLeft = e))
									);
								let i,
									r = 0;
								const a = new Promise((e) => (i = e)),
									s = o.scrollTop,
									l = o.scrollLeft,
									c = null != t ? t - s : 0,
									d = null != e ? e - l : 0,
									u = (e) => {
										const t = Math.min(1, (e - r) / n) - 1,
											a = Math.pow(t, 3) + 1;
										0 !== c && (o.scrollTop = Math.floor(a * c + s)),
											0 !== d && (o.scrollLeft = Math.floor(a * d + l)),
											a < 1 ? requestAnimationFrame(u) : i();
									};
								return (
									requestAnimationFrame((e) => {
										(r = e), u(e);
									}),
									a
								);
							}
							onScrollStart() {
								(this.isScrolling = !0),
									this.ionScrollStart.emit({ isScrolling: !0 }),
									this.watchDog && clearInterval(this.watchDog),
									(this.watchDog = setInterval(() => {
										this.lastScroll < Date.now() - 120 && this.onScrollEnd();
									}, 100));
							}
							onScrollEnd() {
								this.watchDog && clearInterval(this.watchDog),
									(this.watchDog = null),
									this.isScrolling &&
										((this.isScrolling = !1),
										this.ionScrollEnd.emit({ isScrolling: !1 }));
							}
							render() {
								const {
										isMainContent: e,
										scrollX: t,
										scrollY: n,
										el: o,
									} = this,
									i = ab(o) ? "rtl" : "ltr",
									r = mg(this),
									a = this.shouldForceOverscroll(),
									s = "ios" === r,
									l = e ? "main" : "div";
								return (
									this.resize(),
									Wf(
										Xf,
										{
											class: Cg(this.color, {
												[r]: !0,
												"content-sizing": Sg("ion-popover", this.el),
												overscroll: a,
												[`content-${i}`]: !0,
											}),
											style: {
												"--offset-top": `${this.cTop}px`,
												"--offset-bottom": `${this.cBottom}px`,
											},
										},
										Wf("div", {
											ref: (e) => (this.backgroundContentEl = e),
											id: "background-content",
											part: "background",
										}),
										Wf(
											l,
											{
												class: {
													"inner-scroll": !0,
													"scroll-x": t,
													"scroll-y": n,
													overscroll: (t || n) && a,
												},
												ref: (e) => (this.scrollEl = e),
												onScroll: this.scrollEvents
													? (e) => this.onScroll(e)
													: void 0,
												part: "scroll",
											},
											Wf("slot", null)
										),
										s
											? Wf(
													"div",
													{ class: "transition-effect" },
													Wf("div", { class: "transition-cover" }),
													Wf("div", { class: "transition-shadow" })
											  )
											: null,
										Wf("slot", { name: "fixed" })
									)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
							}
						},
						[
							1,
							"ion-content",
							{
								color: [513],
								fullscreen: [4],
								forceOverscroll: [1028, "force-overscroll"],
								scrollX: [4, "scroll-x"],
								scrollY: [4, "scroll-y"],
								scrollEvents: [4, "scroll-events"],
								getScrollElement: [64],
								getBackgroundElement: [64],
								scrollToTop: [64],
								scrollToBottom: [64],
								scrollByPoint: [64],
								scrollToPoint: [64],
							},
							[[9, "resize", "onResize"]],
						]
					),
					lb = (e) => {
						const t = e.closest("ion-tabs");
						if (t) return t;
						const n = e.closest(
							"ion-app, ion-page, .ion-page, page-inner, .popover-content"
						);
						return (
							n ||
							((e) => {
								var t;
								return e.parentElement
									? e.parentElement
									: (
											null === (t = e.parentNode) || void 0 === t
												? void 0
												: t.host
									  )
									? e.parentNode.host
									: null;
							})(e)
						);
					},
					cb = (e, t, n, o) => {
						const i = e.currentX,
							r = e.currentY,
							a = e.currentTime,
							s = t.scrollLeft,
							l = t.scrollTop,
							c = n - a;
						if (
							(o &&
								((e.startTime = n),
								(e.startX = s),
								(e.startY = l),
								(e.velocityX = e.velocityY = 0)),
							(e.currentTime = n),
							(e.currentX = e.scrollLeft = s),
							(e.currentY = e.scrollTop = l),
							(e.deltaX = s - e.startX),
							(e.deltaY = l - e.startY),
							c > 0 && c < 100)
						) {
							const t = (s - i) / c,
								n = (l - r) / c;
							(e.velocityX = 0.7 * t + 0.3 * e.velocityX),
								(e.velocityY = 0.7 * n + 0.3 * e.velocityY);
						}
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const db = function () {
						if ("undefined" == typeof customElements) return;
						["ion-content"].forEach((e) => {
							if ("ion-content" === e)
								customElements.get(e) || customElements.define(e, sb);
						});
					},
					ub = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionFocus = Qf(this, "ionFocus", 7)),
									(this.ionBlur = Qf(this, "ionBlur", 7)),
									(this.inItem = !1),
									(this.inListHeader = !1),
									(this.inToolbar = !1),
									(this.formButtonEl = null),
									(this.formEl = null),
									(this.inheritedAttributes = {}),
									(this.handleClick = (e) => {
										const { el: t } = this;
										"button" === this.type
											? zg(
													this.href,
													e,
													this.routerDirection,
													this.routerAnimation
											  )
											: ((e) => !!e.shadowRoot && !!e.attachShadow)(t) &&
											  this.submitForm(e);
									}),
									(this.onFocus = () => {
										this.ionFocus.emit();
									}),
									(this.onBlur = () => {
										this.ionBlur.emit();
									}),
									(this.color = void 0),
									(this.buttonType = "button"),
									(this.disabled = !1),
									(this.expand = void 0),
									(this.fill = void 0),
									(this.routerDirection = "forward"),
									(this.routerAnimation = void 0),
									(this.download = void 0),
									(this.href = void 0),
									(this.rel = void 0),
									(this.shape = void 0),
									(this.size = void 0),
									(this.strong = !1),
									(this.target = void 0),
									(this.type = "button"),
									(this.form = void 0);
							}
							disabledChanged() {
								const { disabled: e } = this;
								this.formButtonEl && (this.formButtonEl.disabled = e);
							}
							renderHiddenButton() {
								const e = (this.formEl = this.findForm());
								if (e) {
									const { formButtonEl: t } = this;
									if (null !== t && e.contains(t)) return;
									const n = (this.formButtonEl =
										document.createElement("button"));
									(n.type = this.type),
										(n.style.display = "none"),
										(n.disabled = this.disabled),
										e.appendChild(n);
								}
							}
							componentWillLoad() {
								(this.inToolbar = !!this.el.closest("ion-buttons")),
									(this.inListHeader = !!this.el.closest("ion-list-header")),
									(this.inItem =
										!!this.el.closest("ion-item") ||
										!!this.el.closest("ion-item-divider")),
									(this.inheritedAttributes = pm(this.el));
							}
							get hasIconOnly() {
								return !!this.el.querySelector('[slot="icon-only"]');
							}
							get rippleType() {
								return (void 0 === this.fill || "clear" === this.fill) &&
									this.hasIconOnly &&
									this.inToolbar
									? "unbounded"
									: "bounded";
							}
							findForm() {
								const { form: e } = this;
								if (e instanceof HTMLFormElement) return e;
								if ("string" == typeof e) {
									const t = document.getElementById(e);
									return t
										? t instanceof HTMLFormElement
											? t
											: (Ig(
													`Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,
													this.el
											  ),
											  null)
										: (Ig(
												`Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,
												this.el
										  ),
										  null);
								}
								return void 0 !== e
									? (Ig(
											'The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',
											this.el
									  ),
									  null)
									: this.el.closest("form");
							}
							submitForm(e) {
								this.formEl &&
									this.formButtonEl &&
									(e.preventDefault(), this.formButtonEl.click());
							}
							render() {
								const e = mg(this),
									{
										buttonType: t,
										type: n,
										disabled: o,
										rel: i,
										target: r,
										size: a,
										href: s,
										color: l,
										expand: c,
										hasIconOnly: d,
										shape: u,
										strong: h,
										inheritedAttributes: f,
									} = this,
									p = void 0 === a && this.inItem ? "small" : a,
									m = void 0 === s ? "button" : "a",
									g =
										"button" === m
											? { type: n }
											: { download: this.download, href: s, rel: i, target: r };
								let b = this.fill;
								return (
									null == b &&
										(b =
											this.inToolbar || this.inListHeader ? "clear" : "solid"),
									"button" !== n && this.renderHiddenButton(),
									Wf(
										Xf,
										{
											onClick: this.handleClick,
											"aria-disabled": o ? "true" : null,
											class: Cg(l, {
												[e]: !0,
												[t]: !0,
												[`${t}-${c}`]: void 0 !== c,
												[`${t}-${p}`]: void 0 !== p,
												[`${t}-${u}`]: void 0 !== u,
												[`${t}-${b}`]: !0,
												[`${t}-strong`]: h,
												"in-toolbar": Sg("ion-toolbar", this.el),
												"in-toolbar-color": Sg("ion-toolbar[color]", this.el),
												"in-buttons": Sg("ion-buttons", this.el),
												"button-has-icon-only": d,
												"button-disabled": o,
												"ion-activatable": !0,
												"ion-focusable": !0,
											}),
										},
										Wf(
											m,
											Object.assign(
												{},
												g,
												{
													class: "button-native",
													part: "native",
													disabled: o,
													onFocus: this.onFocus,
													onBlur: this.onBlur,
												},
												f
											),
											Wf(
												"span",
												{ class: "button-inner" },
												Wf("slot", { name: "icon-only" }),
												Wf("slot", { name: "start" }),
												Wf("slot", null),
												Wf("slot", { name: "end" })
											),
											"md" === e &&
												Wf("ion-ripple-effect", { type: this.rippleType })
										)
									)
								);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { disabled: ["disabledChanged"] };
							}
							static get style() {
								return {
									ios: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}',
									md: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}',
								};
							}
						},
						[
							33,
							"ion-button",
							{
								color: [513],
								buttonType: [1025, "button-type"],
								disabled: [516],
								expand: [513],
								fill: [1537],
								routerDirection: [1, "router-direction"],
								routerAnimation: [16],
								download: [1],
								href: [1],
								rel: [1],
								shape: [513],
								size: [513],
								strong: [4],
								target: [1],
								type: [1],
								form: [1],
							},
							void 0,
							{ disabled: ["disabledChanged"] },
						]
					),
					hb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.labelColorStyles = {}),
									(this.itemStyles = new Map()),
									(this.inheritedAriaAttributes = {}),
									(this.multipleInputs = !1),
									(this.focusable = !0),
									(this.color = void 0),
									(this.button = !1),
									(this.detail = void 0),
									(this.detailIcon = Lg),
									(this.disabled = !1),
									(this.download = void 0),
									(this.fill = void 0),
									(this.shape = void 0),
									(this.href = void 0),
									(this.rel = void 0),
									(this.lines = void 0),
									(this.counter = !1),
									(this.routerAnimation = void 0),
									(this.routerDirection = "forward"),
									(this.target = void 0),
									(this.type = "button"),
									(this.counterFormatter = void 0),
									(this.counterString = void 0);
							}
							counterFormatterChanged() {
								this.updateCounterOutput(this.getFirstInput());
							}
							handleIonInput(e) {
								this.counter &&
									e.target === this.getFirstInput() &&
									this.updateCounterOutput(e.target);
							}
							labelColorChanged(e) {
								const { color: t } = this;
								void 0 === t && (this.labelColorStyles = e.detail);
							}
							itemStyle(e) {
								e.stopPropagation();
								const t = e.target.tagName,
									n = e.detail,
									o = {},
									i = this.itemStyles.get(t) || {};
								let r = !1;
								Object.keys(n).forEach((e) => {
									if (n[e]) {
										const t = `item-${e}`;
										i[t] || (r = !0), (o[t] = !0);
									}
								}),
									r ||
										Object.keys(o).length === Object.keys(i).length ||
										(r = !0),
									r && (this.itemStyles.set(t, o), Ip(this));
							}
							connectedCallback() {
								this.counter && this.updateCounterOutput(this.getFirstInput()),
									this.hasStartEl();
							}
							componentWillLoad() {
								this.inheritedAriaAttributes = hm(this.el, ["aria-label"]);
							}
							componentDidLoad() {
								const {
									el: e,
									counter: t,
									counterFormatter: n,
									fill: o,
									shape: i,
								} = this;
								null !== e.querySelector('[slot="helper"]') &&
									Ig(
										'The "helper" slot has been deprecated in favor of using the "helperText" property on ion-input or ion-textarea.',
										e
									);
								null !== e.querySelector('[slot="error"]') &&
									Ig(
										'The "error" slot has been deprecated in favor of using the "errorText" property on ion-input or ion-textarea.',
										e
									),
									!0 === t &&
										Ig(
											'The "counter" property has been deprecated in favor of using the "counter" property on ion-input or ion-textarea.',
											e
										),
									void 0 !== n &&
										Ig(
											'The "counterFormatter" property has been deprecated in favor of using the "counterFormatter" property on ion-input or ion-textarea.',
											e
										),
									void 0 !== o &&
										Ig(
											'The "fill" property has been deprecated in favor of using the "fill" property on ion-input or ion-textarea.',
											e
										),
									void 0 !== i &&
										Ig(
											'The "shape" property has been deprecated in favor of using the "shape" property on ion-input or ion-textarea.',
											e
										),
									gm(() => {
										this.setMultipleInputs(),
											(this.focusable = this.isFocusable());
									});
							}
							setMultipleInputs() {
								const e = this.el.querySelectorAll(
										"ion-checkbox, ion-datetime, ion-select, ion-radio"
									),
									t = this.el.querySelectorAll(
										"ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
									),
									n = this.el.querySelectorAll(
										"ion-anchor, ion-button, a, button"
									);
								this.multipleInputs =
									e.length + t.length > 1 ||
									e.length + n.length > 1 ||
									(e.length > 0 && this.isClickable());
							}
							hasCover() {
								return (
									1 ===
										this.el.querySelectorAll(
											"ion-checkbox, ion-datetime, ion-select, ion-radio"
										).length && !this.multipleInputs
								);
							}
							isClickable() {
								return void 0 !== this.href || this.button;
							}
							canActivate() {
								return this.isClickable() || this.hasCover();
							}
							isFocusable() {
								const e = this.el.querySelector(".ion-focusable");
								return this.canActivate() || null !== e;
							}
							getFirstInput() {
								return this.el.querySelectorAll("ion-input, ion-textarea")[0];
							}
							updateCounterOutput(e) {
								var t, n;
								const {
									counter: o,
									counterFormatter: i,
									defaultCounterFormatter: r,
								} = this;
								if (
									o &&
									!this.multipleInputs &&
									void 0 !== (null == e ? void 0 : e.maxlength)
								) {
									const o =
										null !==
											(n =
												null === (t = null == e ? void 0 : e.value) ||
												void 0 === t
													? void 0
													: t.toString().length) && void 0 !== n
											? n
											: 0;
									if (void 0 === i) this.counterString = r(o, e.maxlength);
									else
										try {
											this.counterString = i(o, e.maxlength);
										} catch ($h) {
											((e, ...t) => {
												console.error(`[Ionic Error]: ${e}`, ...t);
											})("Exception in provided `counterFormatter`.", $h),
												(this.counterString = r(o, e.maxlength));
										}
								}
							}
							defaultCounterFormatter(e, t) {
								return `${e} / ${t}`;
							}
							hasStartEl() {
								null !== this.el.querySelector('[slot="start"]') &&
									this.el.classList.add("item-has-start-slot");
							}
							getFirstInteractive() {
								return this.el.querySelectorAll(
									"ion-toggle:not([disabled]), ion-checkbox:not([disabled]), ion-radio:not([disabled]), ion-select:not([disabled])"
								)[0];
							}
							render() {
								const {
										counterString: e,
										detail: t,
										detailIcon: n,
										download: o,
										fill: i,
										labelColorStyles: r,
										lines: a,
										disabled: s,
										href: l,
										rel: c,
										shape: d,
										target: u,
										routerAnimation: h,
										routerDirection: f,
										inheritedAriaAttributes: p,
										multipleInputs: m,
									} = this,
									g = {},
									b = mg(this),
									v = this.isClickable(),
									y = this.canActivate(),
									w = v ? (void 0 === l ? "button" : "a") : "div",
									x =
										"button" === w
											? { type: this.type }
											: { download: o, href: l, rel: c, target: u };
								let k = {};
								const E = this.getFirstInteractive();
								(v || (void 0 !== E && !m)) &&
									(k = {
										onClick: (e) => {
											if ((v && zg(l, e, f, h), void 0 !== E && !m)) {
												const t = e.composedPath()[0];
												if (e.isTrusted) {
													this.el.shadowRoot.contains(t) && E.click();
												}
											}
										},
									});
								const S = void 0 !== t ? t : "ios" === b && v;
								this.itemStyles.forEach((e) => {
									Object.assign(g, e);
								});
								const C = s || g["item-interactive-disabled"] ? "true" : null,
									$ = i || "none",
									z =
										Sg("ion-list", this.el) && !Sg("ion-radio-group", this.el);
								return Wf(
									Xf,
									{
										"aria-disabled": C,
										class: Object.assign(
											Object.assign(Object.assign({}, g), r),
											Cg(this.color, {
												item: !0,
												[b]: !0,
												"item-lines-default": void 0 === a,
												[`item-lines-${a}`]: void 0 !== a,
												[`item-fill-${$}`]: !0,
												[`item-shape-${d}`]: void 0 !== d,
												"item-has-interactive-control": void 0 !== E,
												"item-disabled": s,
												"in-list": z,
												"item-multiple-inputs": this.multipleInputs,
												"ion-activatable": y,
												"ion-focusable": this.focusable,
												"item-rtl": "rtl" === document.dir,
											})
										),
										role: z ? "listitem" : null,
									},
									Wf(
										w,
										Object.assign(
											{},
											x,
											p,
											{ class: "item-native", part: "native", disabled: s },
											k
										),
										Wf("slot", { name: "start" }),
										Wf(
											"div",
											{ class: "item-inner" },
											Wf("div", { class: "input-wrapper" }, Wf("slot", null)),
											Wf("slot", { name: "end" }),
											S &&
												Wf("ion-icon", {
													icon: n,
													lazy: !1,
													class: "item-detail-icon",
													part: "detail-icon",
													"aria-hidden": "true",
													"flip-rtl": n === Lg,
												}),
											Wf("div", { class: "item-inner-highlight" })
										),
										y && "md" === b && Wf("ion-ripple-effect", null),
										Wf("div", { class: "item-highlight" })
									),
									Wf(
										"div",
										{ class: "item-bottom" },
										Wf("slot", { name: "error" }),
										Wf("slot", { name: "helper" }),
										e && Wf("ion-note", { class: "item-counter" }, e)
									)
								);
							}
							static get delegatesFocus() {
								return !0;
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { counterFormatter: ["counterFormatterChanged"] };
							}
							static get style() {
								return {
									ios: ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:1.25em;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-has-interactive-control){cursor:pointer}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:0.75rem;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:var(--ion-text-color, #000);--background-focused:var(--ion-text-color, #000);--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--bottom-padding-start:0px;font-size:1rem}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus) .item-highlight{border-top:none;border-right:none;border-left:none}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:2px;margin-bottom:2px}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:1px;--padding-bottom:1px;--padding-start:.5em;--padding-end:.5em;min-height:24px;font-size:0.8125rem}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){-webkit-margin-start:0px;margin-inline-start:0px}::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}',
									md: ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:1.25em;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-has-interactive-control){cursor:pointer}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:0.75rem;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:1px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:1rem;font-weight:normal;text-transform:none}:host(.item-fill-outline){--highlight-height:2px}:host(.item-fill-none.item-interactive.ion-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-none.item-interactive.ion-focus) .item-native,:host(.item-fill-none.item-interactive.item-has-focus) .item-native,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-highlight{border-width:var(--full-highlight-height);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-native{border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-native,:host(.item-fill-solid.item-interactive.item-has-focus) .item-native,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));top:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transition:none;transition:none}@supports (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{inset-inline-start:var(--position-offset)}}@supports not (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{left:var(--position-offset)}:host-context([dir=rtl]):host(.item-fill-outline) .item-highlight,:host-context([dir=rtl]).item-fill-outline .item-highlight{left:unset;right:unset;right:var(--position-offset)}@supports selector(:dir(rtl)){:host(.item-fill-outline:dir(rtl)) .item-highlight{left:unset;right:unset;right:var(--position-offset)}}}:host(.item-fill-outline.ion-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted([slot=end]){-webkit-margin-start:32px;margin-inline-start:32px}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:1.5em}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted(ion-icon[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:0.6875rem}::slotted(ion-note[slot]:not([slot=helper]):not([slot=error])){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){-webkit-padding-end:16px;padding-inline-end:16px}::slotted(ion-note[slot=end]){-webkit-padding-start:16px;padding-inline-start:16px}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){-webkit-margin-end:16px;margin-inline-end:16px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0}::slotted(.button-small){--padding-top:2px;--padding-bottom:2px;--padding-start:.6em;--padding-end:.6em;min-height:25px;font-size:0.75rem}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid.ion-color),:host(.item-fill-outline.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--background-hover:var(--ion-color-step-100, #e6e6e6);--background-focused:var(--ion-color-step-150, #d9d9d9);--border-width:0 0 1px 0;--inner-border-width:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid),:host-context([dir=rtl]).item-fill-solid{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid:dir(rtl)){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.item-fill-solid) .item-native{--border-color:var(--ion-color-step-500, gray)}:host(.item-fill-solid.ion-focused) .item-native,:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid.item-shape-round),:host-context([dir=rtl]).item-fill-solid.item-shape-round{border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid.item-shape-round:dir(rtl)){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}}@media (any-hover: hover){:host(.item-fill-solid:hover) .item-native{--background:var(--background-hover);--border-color:var(--ion-color-step-750, #404040)}}:host(.item-fill-outline){--ripple-color:transparent;--background-focused:transparent;--background-hover:transparent;--border-color:var(--ion-color-step-500, gray);--border-width:1px;border:none;overflow:visible}:host(.item-fill-outline) .item-native{--native-padding-left:16px;border-radius:4px}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:16px;border-radius:28px}:host(.item-fill-outline.item-shape-round) .item-bottom{-webkit-padding-start:32px;padding-inline-start:32px}:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-textarea:not(:first-child)){-webkit-transform:translateY(-14px);transform:translateY(-14px)}@media (any-hover: hover){:host(.item-fill-outline:hover) .item-native{--border-color:var(--ion-color-step-750, #404040)}}.item-counter{letter-spacing:0.0333333333em}',
								};
							}
						},
						[
							49,
							"ion-item",
							{
								color: [513],
								button: [4],
								detail: [4],
								detailIcon: [1, "detail-icon"],
								disabled: [4],
								download: [1],
								fill: [1],
								shape: [1],
								href: [1],
								rel: [1],
								lines: [1],
								counter: [4],
								routerAnimation: [16],
								routerDirection: [1, "router-direction"],
								target: [1],
								type: [1],
								counterFormatter: [16],
								multipleInputs: [32],
								focusable: [32],
								counterString: [32],
							},
							[
								[0, "ionInput", "handleIonInput"],
								[0, "ionColor", "labelColorChanged"],
								[0, "ionStyle", "itemStyle"],
							],
							{ counterFormatter: ["counterFormatterChanged"] },
						]
					),
					fb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									(this.ionColor = Qf(this, "ionColor", 7)),
									(this.ionStyle = Qf(this, "ionStyle", 7)),
									(this.inRange = !1),
									(this.color = void 0),
									(this.position = void 0),
									(this.noAnimate = !1);
							}
							componentWillLoad() {
								(this.inRange = !!this.el.closest("ion-range")),
									(this.noAnimate = "floating" === this.position),
									this.emitStyle(),
									this.emitColor();
							}
							componentDidLoad() {
								this.noAnimate &&
									setTimeout(() => {
										this.noAnimate = !1;
									}, 1e3);
							}
							colorChanged() {
								this.emitColor();
							}
							positionChanged() {
								this.emitStyle();
							}
							emitColor() {
								const { color: e } = this;
								this.ionColor.emit({
									"item-label-color": void 0 !== e,
									[`ion-color-${e}`]: void 0 !== e,
								});
							}
							emitStyle() {
								const { inRange: e, position: t } = this;
								e ||
									this.ionStyle.emit({
										label: !0,
										[`label-${t}`]: void 0 !== t,
									});
							}
							render() {
								const e = this.position,
									t = mg(this);
								return Wf(Xf, {
									class: Cg(this.color, {
										[t]: !0,
										"in-item-color": Sg("ion-item.ion-color", this.el),
										[`label-${e}`]: void 0 !== e,
										"label-no-animate": this.noAnimate,
										"label-rtl": "rtl" === document.dir,
									}),
								});
							}
							get el() {
								return this;
							}
							static get watchers() {
								return {
									color: ["colorChanged"],
									position: ["positionChanged"],
								};
							}
							static get style() {
								return {
									ios: ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:0.875rem;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:0.875rem}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:1.375rem;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.0625rem;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
									md: '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:1.25rem;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}',
								};
							}
						},
						[
							34,
							"ion-label",
							{ color: [513], position: [1], noAnimate: [32] },
							void 0,
							{ color: ["colorChanged"], position: ["positionChanged"] },
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				const pb = () => {
					if (void 0 !== am) return am.Capacitor;
				};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ var mb, gb;
				!(function (e) {
					(e.Heavy = "HEAVY"), (e.Medium = "MEDIUM"), (e.Light = "LIGHT");
				})(mb || (mb = {})),
					(function (e) {
						(e.Success = "SUCCESS"),
							(e.Warning = "WARNING"),
							(e.Error = "ERROR");
					})(gb || (gb = {}));
				const bb = {
						getEngine() {
							const e = window.TapticEngine;
							if (e) return e;
							const t = pb();
							return (null == t ? void 0 : t.isPluginAvailable("Haptics"))
								? t.Plugins.Haptics
								: void 0;
						},
						available() {
							if (!this.getEngine()) return !1;
							const e = pb();
							return (
								"web" !== (null == e ? void 0 : e.getPlatform()) ||
								("undefined" != typeof navigator &&
									void 0 !== navigator.vibrate)
							);
						},
						isCordova: () => void 0 !== window.TapticEngine,
						isCapacitor: () => void 0 !== pb(),
						impact(e) {
							const t = this.getEngine();
							if (!t) return;
							const n = this.isCapacitor() ? e.style : e.style.toLowerCase();
							t.impact({ style: n });
						},
						notification(e) {
							const t = this.getEngine();
							if (!t) return;
							const n = this.isCapacitor() ? e.type : e.type.toLowerCase();
							t.notification({ type: n });
						},
						selection() {
							const e = this.isCapacitor() ? mb.Light : "light";
							this.impact({ style: e });
						},
						selectionStart() {
							const e = this.getEngine();
							e &&
								(this.isCapacitor()
									? e.selectionStart()
									: e.gestureSelectionStart());
						},
						selectionChanged() {
							const e = this.getEngine();
							e &&
								(this.isCapacitor()
									? e.selectionChanged()
									: e.gestureSelectionChanged());
						},
						selectionEnd() {
							const e = this.getEngine();
							e &&
								(this.isCapacitor()
									? e.selectionEnd()
									: e.gestureSelectionEnd());
						},
					},
					vb = (e) => {
						bb.available() && bb.impact(e);
					},
					yb = "ion-content",
					wb = ".ion-content-scroll-host",
					xb = `${yb}, ${wb}`,
					kb = (e) => "ION-CONTENT" === e.tagName,
					Eb = t("k", async (e) =>
						kb(e)
							? (await new Promise((t) => dm(e, t)), e.getScrollElement())
							: e
					),
					Sb = (e) => {
						const t = e.querySelector(wb);
						return t || e.querySelector(xb);
					},
					Cb =
						(t("f", (e) => e.closest(xb)),
						t("s", (e, t) => {
							if (kb(e)) {
								return e.scrollToTop(t);
							}
							return Promise.resolve(
								e.scrollTo({
									top: 0,
									left: 0,
									behavior: t > 0 ? "smooth" : "auto",
								})
							);
						}),
						t("l", (e, t, n, o) => {
							if (kb(e)) {
								return e.scrollByPoint(t, n, o);
							}
							return Promise.resolve(
								e.scrollBy({
									top: n,
									left: t,
									behavior: o > 0 ? "smooth" : "auto",
								})
							);
						}),
						(e) =>
							((e, ...t) =>
								console.error(
									`<${e.tagName.toLowerCase()}> must be used inside ${t.join(
										" or "
									)}.`
								))(e, yb));
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				var $b, zb;
				!(function (e) {
					(e.Unimplemented = "UNIMPLEMENTED"), (e.Unavailable = "UNAVAILABLE");
				})($b || ($b = {})),
					t("g", zb),
					(function (e) {
						(e.Body = "body"),
							(e.Ionic = "ionic"),
							(e.Native = "native"),
							(e.None = "none");
					})(zb || t("g", (zb = {})));
				const Ib = t("K", {
						getEngine() {
							const e = pb();
							if (null == e ? void 0 : e.isPluginAvailable("Keyboard"))
								return e.Plugins.Keyboard;
						},
						getResizeMode() {
							const e = this.getEngine();
							return (null == e ? void 0 : e.getResizeMode)
								? e.getResizeMode().catch((e) => {
										if (e.code !== $b.Unimplemented) throw e;
								  })
								: Promise.resolve(void 0);
						},
					}),
					Tb = (e) => {
						if (void 0 === sm || e === zb.None || void 0 === e) return null;
						const t = sm.querySelector("ion-app");
						return null != t ? t : sm.body;
					},
					Pb = (e) => {
						const t = Tb(e);
						return null === t ? 0 : t.clientHeight;
					},
					Lb = (e) => {
						const t = document.querySelector(`${e}.ion-cloned-element`);
						if (null !== t) return t;
						const n = document.createElement(e);
						return (
							n.classList.add("ion-cloned-element"),
							n.style.setProperty("display", "none"),
							document.body.appendChild(n),
							n
						);
					},
					Rb = (e) => {
						if (!e) return;
						const t = e.querySelectorAll("ion-toolbar");
						return {
							el: e,
							toolbars: Array.from(t).map((e) => {
								const t = e.querySelector("ion-title");
								return {
									el: e,
									background: e.shadowRoot.querySelector(".toolbar-background"),
									ionTitleEl: t,
									innerTitleEl: t
										? t.shadowRoot.querySelector(".toolbar-title")
										: null,
									ionButtonsEl: Array.from(e.querySelectorAll("ion-buttons")),
								};
							}),
						};
					},
					Ob = (e, t) => {
						"fade" !== e.collapse &&
							(void 0 === t
								? e.style.removeProperty("--opacity-scale")
								: e.style.setProperty("--opacity-scale", t.toString()));
					},
					Nb = (e, t, n, o) => {
						rm(() => {
							const i = o.scrollTop;
							((e, t, n) => {
								if (!e[0].isIntersecting) return;
								const o =
									e[0].intersectionRatio > 0.9 || n <= 0
										? 0
										: (100 * (1 - e[0].intersectionRatio)) / 75;
								Ob(t.el, 1 === o ? void 0 : o);
							})(e, t, i);
							const r = e[0],
								a = r.intersectionRect,
								s = a.width * a.height,
								l = r.rootBounds.width * r.rootBounds.height,
								c = 0 === s && 0 === l,
								d = Math.abs(a.left - r.boundingClientRect.left),
								u = Math.abs(a.right - r.boundingClientRect.right);
							if (!c && !(s > 0 && (d >= 5 || u >= 5)))
								if (r.isIntersecting) _b(t, !1), _b(n);
								else {
									((0 === a.x && 0 === a.y) ||
										(0 !== a.width && 0 !== a.height)) &&
										i > 0 &&
										(_b(t), _b(n, !1), Ob(t.el));
								}
						});
					},
					_b = (e, t = !0) => {
						const n = e.el;
						t
							? (n.classList.remove("header-collapse-condense-inactive"),
							  n.removeAttribute("aria-hidden"))
							: (n.classList.add("header-collapse-condense-inactive"),
							  n.setAttribute("aria-hidden", "true"));
					},
					Db = (e = [], t = 1, n = !1) => {
						e.forEach((e) => {
							const o = e.ionTitleEl,
								i = e.innerTitleEl;
							o &&
								"large" === o.size &&
								((i.style.transition = n ? "all 0.2s ease-in-out" : ""),
								(i.style.transform = `scale3d(${t}, ${t}, 1)`));
						});
					},
					Ab = (e, t, n) => {
						im(() => {
							const o = e.scrollTop,
								i = t.clientHeight,
								r = n ? n.clientHeight : 0;
							if (null !== n && o < r)
								return (
									t.style.setProperty("--opacity-scale", "0"),
									void e.style.setProperty(
										"clip-path",
										`inset(${i}px 0px 0px 0px)`
									)
								);
							const a = bm(0, (o - r) / 10, 1);
							rm(() => {
								e.style.removeProperty("clip-path"),
									t.style.setProperty("--opacity-scale", a.toString());
							});
						});
					},
					Mb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									(this.inheritedAttributes = {}),
									(this.setupFadeHeader = async (e, t) => {
										const n = (this.scrollEl = await Eb(e));
										(this.contentScrollCallback = () => {
											Ab(this.scrollEl, this.el, t);
										}),
											n.addEventListener("scroll", this.contentScrollCallback),
											Ab(this.scrollEl, this.el, t);
									}),
									(this.collapse = void 0),
									(this.translucent = !1);
							}
							componentWillLoad() {
								this.inheritedAttributes = pm(this.el);
							}
							componentDidLoad() {
								this.checkCollapsibleHeader();
							}
							componentDidUpdate() {
								this.checkCollapsibleHeader();
							}
							disconnectedCallback() {
								this.destroyCollapsibleHeader();
							}
							async checkCollapsibleHeader() {
								if ("ios" !== mg(this)) return;
								const { collapse: e } = this,
									t = "condense" === e,
									n = "fade" === e;
								if ((this.destroyCollapsibleHeader(), t)) {
									const e = this.el.closest(
											"ion-app,ion-page,.ion-page,page-inner"
										),
										t = e ? Sb(e) : null;
									rm(() => {
										(Lb("ion-title").size = "large"), Lb("ion-back-button");
									}),
										await this.setupCondenseHeader(t, e);
								} else if (n) {
									const e = this.el.closest(
											"ion-app,ion-page,.ion-page,page-inner"
										),
										t = e ? Sb(e) : null;
									if (!t) return void Cb(this.el);
									const n = t.querySelector('ion-header[collapse="condense"]');
									await this.setupFadeHeader(t, n);
								}
							}
							destroyCollapsibleHeader() {
								this.intersectionObserver &&
									(this.intersectionObserver.disconnect(),
									(this.intersectionObserver = void 0)),
									this.scrollEl &&
										this.contentScrollCallback &&
										(this.scrollEl.removeEventListener(
											"scroll",
											this.contentScrollCallback
										),
										(this.contentScrollCallback = void 0)),
									this.collapsibleMainHeader &&
										(this.collapsibleMainHeader.classList.remove(
											"header-collapse-main"
										),
										(this.collapsibleMainHeader = void 0));
							}
							async setupCondenseHeader(e, t) {
								if (!e || !t) return void Cb(this.el);
								if ("undefined" == typeof IntersectionObserver) return;
								this.scrollEl = await Eb(e);
								const n = t.querySelectorAll("ion-header");
								if (
									((this.collapsibleMainHeader = Array.from(n).find(
										(e) => "condense" !== e.collapse
									)),
									!this.collapsibleMainHeader)
								)
									return;
								const o = Rb(this.collapsibleMainHeader),
									i = Rb(this.el);
								if (!o || !i) return;
								_b(o, !1), Ob(o.el, 0);
								(this.intersectionObserver = new IntersectionObserver(
									(e) => {
										Nb(e, o, i, this.scrollEl);
									},
									{
										root: e,
										threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
									}
								)),
									this.intersectionObserver.observe(
										i.toolbars[i.toolbars.length - 1].el
									),
									(this.contentScrollCallback = () => {
										((e, t, n) => {
											im(() => {
												const o = e.scrollTop,
													i = bm(1, 1 + -o / 500, 1.1);
												null ===
													n.querySelector("ion-refresher.refresher-native") &&
													rm(() => {
														Db(t.toolbars, i);
													});
											});
										})(this.scrollEl, i, e);
									}),
									this.scrollEl.addEventListener(
										"scroll",
										this.contentScrollCallback
									),
									rm(() => {
										void 0 !== this.collapsibleMainHeader &&
											this.collapsibleMainHeader.classList.add(
												"header-collapse-main"
											);
									});
							}
							render() {
								const { translucent: e, inheritedAttributes: t } = this,
									n = mg(this),
									o = this.collapse || "none",
									i = Sg("ion-menu", this.el) ? "none" : "banner";
								return Wf(
									Xf,
									Object.assign(
										{
											role: i,
											class: {
												[n]: !0,
												[`header-${n}`]: !0,
												"header-translucent": this.translucent,
												[`header-collapse-${o}`]: !0,
												[`header-translucent-${n}`]: this.translucent,
											},
										},
										t
									),
									"ios" === n && e && Wf("div", { class: "header-background" }),
									Wf("slot", null)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header:not(.header-collapse-main):has(~ion-content ion-header[collapse=condense]){opacity:0}",
									md: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
								};
							}
						},
						[36, "ion-header", { collapse: [1], translucent: [4] }]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Bb = function () {
						if ("undefined" == typeof customElements) return;
						["ion-header"].forEach((e) => {
							if ("ion-header" === e)
								customElements.get(e) || customElements.define(e, Mb);
						});
					},
					jb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionImgWillLoad = Qf(this, "ionImgWillLoad", 7)),
									(this.ionImgDidLoad = Qf(this, "ionImgDidLoad", 7)),
									(this.ionError = Qf(this, "ionError", 7)),
									(this.inheritedAttributes = {}),
									(this.onLoad = () => {
										this.ionImgDidLoad.emit();
									}),
									(this.onError = () => {
										this.ionError.emit();
									}),
									(this.loadSrc = void 0),
									(this.loadError = void 0),
									(this.alt = void 0),
									(this.src = void 0);
							}
							srcChanged() {
								this.addIO();
							}
							componentWillLoad() {
								this.inheritedAttributes = hm(this.el, ["draggable"]);
							}
							componentDidLoad() {
								this.addIO();
							}
							addIO() {
								void 0 !== this.src &&
									("undefined" != typeof window &&
									"IntersectionObserver" in window &&
									"IntersectionObserverEntry" in window &&
									"isIntersecting" in window.IntersectionObserverEntry.prototype
										? (this.removeIO(),
										  (this.io = new IntersectionObserver((e) => {
												e[e.length - 1].isIntersecting &&
													(this.load(), this.removeIO());
										  })),
										  this.io.observe(this.el))
										: setTimeout(() => this.load(), 200));
							}
							load() {
								(this.loadError = this.onError),
									(this.loadSrc = this.src),
									this.ionImgWillLoad.emit();
							}
							removeIO() {
								this.io && (this.io.disconnect(), (this.io = void 0));
							}
							render() {
								const {
										loadSrc: e,
										alt: t,
										onLoad: n,
										loadError: o,
										inheritedAttributes: i,
									} = this,
									{ draggable: r } = i;
								return Wf(
									Xf,
									{ class: mg(this) },
									Wf("img", {
										decoding: "async",
										src: e,
										alt: t,
										onLoad: n,
										onError: o,
										part: "image",
										draggable: Vb(r),
									})
								);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { src: ["srcChanged"] };
							}
							static get style() {
								return ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
							}
						},
						[
							1,
							"ion-img",
							{ alt: [1], src: [1], loadSrc: [32], loadError: [32] },
							void 0,
							{ src: ["srcChanged"] },
						]
					),
					Vb = (e) => {
						switch (e) {
							case "true":
								return !0;
							case "false":
								return !1;
							default:
								return;
						}
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Hb = function () {
						if ("undefined" == typeof customElements) return;
						["ion-img"].forEach((e) => {
							if ("ion-img" === e)
								customElements.get(e) || customElements.define(e, jb);
						});
					},
					Fb = {
						bubbles: {
							dur: 1e3,
							circles: 9,
							fn: (e, t, n) => {
								const o = (e * t) / n - e + "ms",
									i = (2 * Math.PI * t) / n;
								return {
									r: 5,
									style: {
										top: 32 * Math.sin(i) + "%",
										left: 32 * Math.cos(i) + "%",
										"animation-delay": o,
									},
								};
							},
						},
						circles: {
							dur: 1e3,
							circles: 8,
							fn: (e, t, n) => {
								const o = t / n,
									i = e * o - e + "ms",
									r = 2 * Math.PI * o;
								return {
									r: 5,
									style: {
										top: 32 * Math.sin(r) + "%",
										left: 32 * Math.cos(r) + "%",
										"animation-delay": i,
									},
								};
							},
						},
						circular: {
							dur: 1400,
							elmDuration: !0,
							circles: 1,
							fn: () => ({
								r: 20,
								cx: 48,
								cy: 48,
								fill: "none",
								viewBox: "24 24 48 48",
								transform: "translate(0,0)",
								style: {},
							}),
						},
						crescent: {
							dur: 750,
							circles: 1,
							fn: () => ({ r: 26, style: {} }),
						},
						dots: {
							dur: 750,
							circles: 3,
							fn: (e, t) => ({
								r: 6,
								style: {
									left: 32 - 32 * t + "%",
									"animation-delay": -110 * t + "ms",
								},
							}),
						},
						lines: {
							dur: 1e3,
							lines: 8,
							fn: (e, t, n) => ({
								y1: 14,
								y2: 26,
								style: {
									transform: `rotate(${
										(360 / n) * t + (t < n / 2 ? 180 : -180)
									}deg)`,
									"animation-delay": (e * t) / n - e + "ms",
								},
							}),
						},
						"lines-small": {
							dur: 1e3,
							lines: 8,
							fn: (e, t, n) => ({
								y1: 12,
								y2: 20,
								style: {
									transform: `rotate(${
										(360 / n) * t + (t < n / 2 ? 180 : -180)
									}deg)`,
									"animation-delay": (e * t) / n - e + "ms",
								},
							}),
						},
						"lines-sharp": {
							dur: 1e3,
							lines: 12,
							fn: (e, t, n) => ({
								y1: 17,
								y2: 29,
								style: {
									transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
									"animation-delay": (e * t) / n - e + "ms",
								},
							}),
						},
						"lines-sharp-small": {
							dur: 1e3,
							lines: 12,
							fn: (e, t, n) => ({
								y1: 12,
								y2: 20,
								style: {
									transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
									"animation-delay": (e * t) / n - e + "ms",
								},
							}),
						},
					},
					Wb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.color = void 0),
									(this.duration = void 0),
									(this.name = void 0),
									(this.paused = !1);
							}
							getName() {
								const e = this.name || Zm.get("spinner"),
									t = mg(this);
								return e || ("ios" === t ? "lines" : "circular");
							}
							render() {
								var e;
								const t = this,
									n = mg(t),
									o = t.getName(),
									i = null !== (e = Fb[o]) && void 0 !== e ? e : Fb.lines,
									r =
										"number" == typeof t.duration && t.duration > 10
											? t.duration
											: i.dur,
									a = [];
								if (void 0 !== i.circles)
									for (let s = 0; s < i.circles; s++)
										a.push(Ub(i, r, s, i.circles));
								else if (void 0 !== i.lines)
									for (let s = 0; s < i.lines; s++)
										a.push(Xb(i, r, s, i.lines));
								return Wf(
									Xf,
									{
										class: Cg(t.color, {
											[n]: !0,
											[`spinner-${o}`]: !0,
											"spinner-paused": t.paused || Zm.getBoolean("_testing"),
										}),
										role: "progressbar",
										style: i.elmDuration ? { animationDuration: r + "ms" } : {},
									},
									a
								);
							}
							static get style() {
								return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";
							}
						},
						[
							1,
							"ion-spinner",
							{ color: [513], duration: [2], name: [1], paused: [4] },
						]
					),
					Ub = (e, t, n, o) => {
						const i = e.fn(t, n, o);
						return (
							(i.style["animation-duration"] = t + "ms"),
							Wf(
								"svg",
								{ viewBox: i.viewBox || "0 0 64 64", style: i.style },
								Wf("circle", {
									transform: i.transform || "translate(32,32)",
									cx: i.cx,
									cy: i.cy,
									r: i.r,
									style: e.elmDuration ? { animationDuration: t + "ms" } : {},
								})
							)
						);
					},
					Xb = (e, t, n, o) => {
						const i = e.fn(t, n, o);
						return (
							(i.style["animation-duration"] = t + "ms"),
							Wf(
								"svg",
								{ viewBox: i.viewBox || "0 0 64 64", style: i.style },
								Wf("line", {
									transform: "translate(32,32)",
									y1: i.y1,
									y2: i.y2,
								})
							)
						);
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ function qb() {
					if ("undefined" == typeof customElements) return;
					["ion-spinner"].forEach((e) => {
						if ("ion-spinner" === e)
							customElements.get(e) || customElements.define(e, Wb);
					});
				}
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Yb = function () {
						if ("undefined" == typeof customElements) return;
						["ion-label"].forEach((e) => {
							if ("ion-label" === e)
								customElements.get(e) || customElements.define(e, fb);
						});
					},
					Gb = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									(this.lines = void 0),
									(this.inset = !1);
							}
							async closeSlidingItems() {
								const e = this.el.querySelector("ion-item-sliding");
								return (
									!!(null == e ? void 0 : e.closeOpened) && e.closeOpened()
								);
							}
							render() {
								const e = mg(this),
									{ lines: t, inset: n } = this;
								return Wf(Xf, {
									role: "list",
									class: {
										[e]: !0,
										[`list-${e}`]: !0,
										"list-inset": n,
										[`list-lines-${t}`]: void 0 !== t,
										[`list-${e}-lines-${t}`]: void 0 !== t,
									},
								});
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-ios.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:10px}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-ios-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 0.55px 0}.list-ios-lines-inset .item-lines-default{--inner-border-width:0 0 0.55px 0;--border-width:0px}ion-card .list-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
									md: "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background, var(--ion-background-color, #fff))}@supports (inset-inline-start: 0){.list-md>.input:last-child::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.list-md>.input:last-child::after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child::after{left:unset;right:unset;right:0}[dir=rtl] .list-md>.input:last-child::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.list-md>.input:last-child::after:dir(rtl){left:unset;right:unset;right:0}}}.list-md.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px, 2px;--border-width:0;--inner-border-width:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-md-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 1px 0}.list-md-lines-inset .item-lines-default{--inner-border-width:0 0 1px 0;--border-width:0px}ion-card .list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
								};
							}
						},
						[
							32,
							"ion-list",
							{ lines: [1], inset: [4], closeSlidingItems: [64] },
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				const Qb = function () {
					if ("undefined" == typeof customElements) return;
					["ion-list"].forEach((e) => {
						if ("ion-list" === e)
							customElements.get(e) || customElements.define(e, Gb);
					});
				};
				class Kb {
					constructor(e, t) {
						(this.component = e), (this.params = t), (this.state = 1);
					}
					async init(e) {
						if (((this.state = 2), !this.element)) {
							const t = this.component;
							this.element = await Tg(
								this.delegate,
								e,
								t,
								["ion-page", "ion-page-invisible"],
								this.params
							);
						}
					}
					_destroy() {
						vm(3 !== this.state, "view state must be ATTACHED");
						const e = this.element;
						e &&
							(this.delegate
								? this.delegate.removeViewFromDom(e.parentElement, e)
								: e.remove()),
							(this.nav = void 0),
							(this.state = 3);
					}
				}
				const Zb = (e, t, n) => !!e && e.component === t && ym(e.params, n),
					Jb = (e, t) => (e ? (e instanceof Kb ? e : new Kb(e, t)) : null),
					ev = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionNavWillLoad = Qf(this, "ionNavWillLoad", 7)),
									(this.ionNavWillChange = Qf(this, "ionNavWillChange", 3)),
									(this.ionNavDidChange = Qf(this, "ionNavDidChange", 3)),
									(this.transInstr = []),
									(this.gestureOrAnimationInProgress = !1),
									(this.useRouter = !1),
									(this.isTransitioning = !1),
									(this.destroyed = !1),
									(this.views = []),
									(this.didLoad = !1),
									(this.delegate = void 0),
									(this.swipeGesture = void 0),
									(this.animated = !0),
									(this.animation = void 0),
									(this.rootParams = void 0),
									(this.root = void 0);
							}
							swipeGestureChanged() {
								this.gesture && this.gesture.enable(!0 === this.swipeGesture);
							}
							rootChanged() {
								void 0 !== this.root &&
									!1 !== this.didLoad &&
									(this.useRouter ||
										(void 0 !== this.root &&
											this.setRoot(this.root, this.rootParams)));
							}
							componentWillLoad() {
								if (
									((this.useRouter =
										null !== document.querySelector("ion-router") &&
										null === this.el.closest("[no-router]")),
									void 0 === this.swipeGesture)
								) {
									const e = mg(this);
									this.swipeGesture = Zm.getBoolean(
										"swipeBackEnabled",
										"ios" === e
									);
								}
								this.ionNavWillLoad.emit();
							}
							async componentDidLoad() {
								(this.didLoad = !0),
									this.rootChanged(),
									(this.gesture = (
										await Ef(() => n.import("./swipe-back-legacy-d346eeb5.js"))
									).createSwipeBackGesture(
										this.el,
										this.canStart.bind(this),
										this.onStart.bind(this),
										this.onMove.bind(this),
										this.onEnd.bind(this)
									)),
									this.swipeGestureChanged();
							}
							connectedCallback() {
								this.destroyed = !1;
							}
							disconnectedCallback() {
								for (const e of this.views) Fm(e.element, Pm), e._destroy();
								this.gesture &&
									(this.gesture.destroy(), (this.gesture = void 0)),
									(this.transInstr.length = 0),
									(this.views.length = 0),
									(this.destroyed = !0);
							}
							push(e, t, n, o) {
								return this.insert(-1, e, t, n, o);
							}
							insert(e, t, n, o, i) {
								return this.insertPages(
									e,
									[{ component: t, componentProps: n }],
									o,
									i
								);
							}
							insertPages(e, t, n, o) {
								return this.queueTrns(
									{ insertStart: e, insertViews: t, opts: n },
									o
								);
							}
							pop(e, t) {
								return this.removeIndex(-1, 1, e, t);
							}
							popTo(e, t, n) {
								const o = { removeStart: -1, removeCount: -1, opts: t };
								return (
									"object" == typeof e && e.component
										? ((o.removeView = e), (o.removeStart = 1))
										: "number" == typeof e && (o.removeStart = e + 1),
									this.queueTrns(o, n)
								);
							}
							popToRoot(e, t) {
								return this.removeIndex(1, -1, e, t);
							}
							removeIndex(e, t = 1, n, o) {
								return this.queueTrns(
									{ removeStart: e, removeCount: t, opts: n },
									o
								);
							}
							setRoot(e, t, n, o) {
								return this.setPages(
									[{ component: e, componentProps: t }],
									n,
									o
								);
							}
							setPages(e, t, n) {
								return (
									null != t || (t = {}),
									!0 !== t.animated && (t.animated = !1),
									this.queueTrns(
										{
											insertStart: 0,
											insertViews: e,
											removeStart: 0,
											removeCount: -1,
											opts: t,
										},
										n
									)
								);
							}
							setRouteId(e, t, n, o) {
								const i = this.getActiveSync();
								if (Zb(i, e, t))
									return Promise.resolve({ changed: !1, element: i.element });
								let r;
								const a = new Promise((e) => (r = e));
								let s;
								const l = {
									updateURL: !1,
									viewIsReady: (e) => {
										let t;
										const n = new Promise((e) => (t = e));
										return (
											r({
												changed: !0,
												element: e,
												markVisible: async () => {
													t(), await s;
												},
											}),
											n
										);
									},
								};
								if ("root" === n) s = this.setRoot(e, t, l);
								else {
									const i = this.views.find((n) => Zb(n, e, t));
									i
										? (s = this.popTo(
												i,
												Object.assign(Object.assign({}, l), {
													direction: "back",
													animationBuilder: o,
												})
										  ))
										: "forward" === n
										? (s = this.push(
												e,
												t,
												Object.assign(Object.assign({}, l), {
													animationBuilder: o,
												})
										  ))
										: "back" === n &&
										  (s = this.setRoot(
												e,
												t,
												Object.assign(Object.assign({}, l), {
													direction: "back",
													animated: !0,
													animationBuilder: o,
												})
										  ));
								}
								return a;
							}
							async getRouteId() {
								const e = this.getActiveSync();
								if (e)
									return {
										id: e.element.tagName,
										params: e.params,
										element: e.element,
									};
							}
							async getActive() {
								return this.getActiveSync();
							}
							async getByIndex(e) {
								return this.views[e];
							}
							async canGoBack(e) {
								return this.canGoBackSync(e);
							}
							async getPrevious(e) {
								return this.getPreviousSync(e);
							}
							getLength() {
								return this.views.length;
							}
							getActiveSync() {
								return this.views[this.views.length - 1];
							}
							canGoBackSync(e = this.getActiveSync()) {
								return !(!e || !this.getPreviousSync(e));
							}
							getPreviousSync(e = this.getActiveSync()) {
								if (!e) return;
								const t = this.views,
									n = t.indexOf(e);
								return n > 0 ? t[n - 1] : void 0;
							}
							async queueTrns(e, t) {
								var n, o;
								if (
									this.isTransitioning &&
									(null === (n = e.opts) || void 0 === n
										? void 0
										: n.skipIfBusy)
								)
									return !1;
								const i = new Promise((t, n) => {
									(e.resolve = t), (e.reject = n);
								});
								if (
									((e.done = t),
									e.opts && !1 !== e.opts.updateURL && this.useRouter)
								) {
									const t = document.querySelector("ion-router");
									if (t) {
										const n = await t.canTransition();
										if (!1 === n) return !1;
										if ("string" == typeof n)
											return t.push(n, e.opts.direction || "back"), !1;
									}
								}
								return (
									0 ===
										(null === (o = e.insertViews) || void 0 === o
											? void 0
											: o.length) && (e.insertViews = void 0),
									this.transInstr.push(e),
									this.nextTrns(),
									i
								);
							}
							success(e, t) {
								if (this.destroyed)
									this.fireError("nav controller was destroyed", t);
								else if (
									(t.done &&
										t.done(
											e.hasCompleted,
											e.requiresTransition,
											e.enteringView,
											e.leavingView,
											e.direction
										),
									t.resolve(e.hasCompleted),
									!1 !== t.opts.updateURL && this.useRouter)
								) {
									const t = document.querySelector("ion-router");
									if (t) {
										const n = "back" === e.direction ? "back" : "forward";
										t.navChanged(n);
									}
								}
							}
							failed(e, t) {
								this.destroyed
									? this.fireError("nav controller was destroyed", t)
									: ((this.transInstr.length = 0), this.fireError(e, t));
							}
							fireError(e, t) {
								t.done && t.done(!1, !1, e),
									t.reject && !this.destroyed ? t.reject(e) : t.resolve(!1);
							}
							nextTrns() {
								if (this.isTransitioning) return !1;
								const e = this.transInstr.shift();
								return !!e && (this.runTransition(e), !0);
							}
							async runTransition(e) {
								try {
									this.ionNavWillChange.emit(),
										(this.isTransitioning = !0),
										this.prepareTI(e);
									const t = this.getActiveSync(),
										n = this.getEnteringView(e, t);
									if (!t && !n)
										throw new Error("no views in the stack to be removed");
									n && 1 === n.state && (await n.init(this.el)),
										this.postViewInit(n, t, e);
									const o =
										(e.enteringRequiresTransition ||
											e.leavingRequiresTransition) &&
										n !== t;
									if (o && e.opts && t) {
										"back" === e.opts.direction &&
											(e.opts.animationBuilder =
												e.opts.animationBuilder ||
												(null == n ? void 0 : n.animationBuilder)),
											(t.animationBuilder = e.opts.animationBuilder);
									}
									let i;
									(i = o
										? await this.transition(n, t, e)
										: { hasCompleted: !0, requiresTransition: !1 }),
										this.success(i, e),
										this.ionNavDidChange.emit();
								} catch (t) {
									this.failed(t, e);
								}
								(this.isTransitioning = !1), this.nextTrns();
							}
							prepareTI(e) {
								var t, n, o;
								const i = this.views.length;
								if (
									((null !== (t = e.opts) && void 0 !== t) || (e.opts = {}),
									(null !== (n = (o = e.opts).delegate) && void 0 !== n) ||
										(o.delegate = this.delegate),
									void 0 !== e.removeView)
								) {
									vm(void 0 !== e.removeStart, "removeView needs removeStart"),
										vm(
											void 0 !== e.removeCount,
											"removeView needs removeCount"
										);
									const t = this.views.indexOf(e.removeView);
									if (t < 0) throw new Error("removeView was not found");
									e.removeStart += t;
								}
								void 0 !== e.removeStart &&
									(e.removeStart < 0 && (e.removeStart = i - 1),
									e.removeCount < 0 && (e.removeCount = i - e.removeStart),
									(e.leavingRequiresTransition =
										e.removeCount > 0 && e.removeStart + e.removeCount === i)),
									e.insertViews &&
										((e.insertStart < 0 || e.insertStart > i) &&
											(e.insertStart = i),
										(e.enteringRequiresTransition = e.insertStart === i));
								const r = e.insertViews;
								if (!r) return;
								vm(r.length > 0, "length can not be zero");
								const a = r
									.map((e) =>
										e instanceof Kb
											? e
											: "component" in e
											? Jb(
													e.component,
													null === e.componentProps ? void 0 : e.componentProps
											  )
											: Jb(e, void 0)
									)
									.filter((e) => null !== e);
								if (0 === a.length) throw new Error("invalid views to insert");
								for (const s of a) {
									s.delegate = e.opts.delegate;
									const t = s.nav;
									if (t && t !== this)
										throw new Error("inserted view was already inserted");
									if (3 === s.state)
										throw new Error("inserted view was already destroyed");
								}
								e.insertViews = a;
							}
							getEnteringView(e, t) {
								const n = e.insertViews;
								if (void 0 !== n) return n[n.length - 1];
								const o = e.removeStart;
								if (void 0 !== o) {
									const n = this.views,
										i = o + e.removeCount;
									for (let e = n.length - 1; e >= 0; e--) {
										const r = n[e];
										if ((e < o || e >= i) && r !== t) return r;
									}
								}
							}
							postViewInit(e, t, n) {
								var o, i, r;
								vm(t || e, "Both leavingView and enteringView are null"),
									vm(n.resolve, "resolve must be valid"),
									vm(n.reject, "reject must be valid");
								const a = n.opts,
									{ insertViews: s, removeStart: l, removeCount: c } = n;
								let d;
								if (void 0 !== l && void 0 !== c) {
									vm(l >= 0, "removeStart can not be negative"),
										vm(c >= 0, "removeCount can not be negative"),
										(d = []);
									for (let n = l; n < l + c; n++) {
										const o = this.views[n];
										void 0 !== o && o !== e && o !== t && d.push(o);
									}
									(null !== (o = a.direction) && void 0 !== o) ||
										(a.direction = "back");
								}
								const u =
									this.views.length +
									(null !== (i = null == s ? void 0 : s.length) && void 0 !== i
										? i
										: 0) -
									(null != c ? c : 0);
								if ((vm(u >= 0, "final balance can not be negative"), 0 === u))
									throw (
										(console.warn(
											"You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
											this,
											this.el
										),
										new Error("navigation stack needs at least one root page"))
									);
								if (s) {
									let e = n.insertStart;
									for (const t of s) this.insertViewAt(t, e), e++;
									n.enteringRequiresTransition &&
										((null !== (r = a.direction) && void 0 !== r) ||
											(a.direction = "forward"));
								}
								if (d && d.length > 0) {
									for (const e of d)
										Fm(e.element, Im), Fm(e.element, Tm), Fm(e.element, Pm);
									for (const e of d) this.destroyView(e);
								}
							}
							async transition(e, t, n) {
								const o = n.opts,
									i = o.progressAnimation
										? (e) => {
												void 0 === e || this.gestureOrAnimationInProgress
													? (this.sbAni = e)
													: ((this.gestureOrAnimationInProgress = !0),
													  e.onFinish(
															() => {
																this.gestureOrAnimationInProgress = !1;
															},
															{ oneTimeCallback: !0 }
													  ),
													  e.progressEnd(0, 0, 0));
										  }
										: void 0,
									r = mg(this),
									a = e.element,
									s = t && t.element,
									l = Object.assign(
										Object.assign(
											{
												mode: r,
												showGoBack: this.canGoBackSync(e),
												baseEl: this.el,
												progressCallback: i,
												animated:
													this.animated && Zm.getBoolean("animated", !0),
												enteringEl: a,
												leavingEl: s,
											},
											o
										),
										{
											animationBuilder:
												o.animationBuilder ||
												this.animation ||
												Zm.get("navAnimation"),
										}
									),
									{ hasCompleted: c } = await Lm(l);
								return this.transitionFinish(c, e, t, o);
							}
							transitionFinish(e, t, n, o) {
								const i = e ? t : n;
								return (
									i && this.unmountInactiveViews(i),
									{
										hasCompleted: e,
										requiresTransition: !0,
										enteringView: t,
										leavingView: n,
										direction: o.direction,
									}
								);
							}
							insertViewAt(e, t) {
								const n = this.views,
									o = n.indexOf(e);
								o > -1
									? (vm(e.nav === this, "view is not part of the nav"),
									  n.splice(o, 1),
									  n.splice(t, 0, e))
									: (vm(!e.nav, "nav is used"),
									  (e.nav = this),
									  n.splice(t, 0, e));
							}
							removeView(e) {
								vm(
									2 === e.state || 3 === e.state,
									"view state should be loaded or destroyed"
								);
								const t = this.views,
									n = t.indexOf(e);
								vm(n > -1, "view must be part of the stack"),
									n >= 0 && t.splice(n, 1);
							}
							destroyView(e) {
								e._destroy(), this.removeView(e);
							}
							unmountInactiveViews(e) {
								if (this.destroyed) return;
								const t = this.views,
									n = t.indexOf(e);
								for (let o = t.length - 1; o >= 0; o--) {
									const e = t[o],
										i = e.element;
									i &&
										(o > n
											? (Fm(i, Pm), this.destroyView(e))
											: o < n && Um(i, !0));
								}
							}
							canStart() {
								return (
									!this.gestureOrAnimationInProgress &&
									!!this.swipeGesture &&
									!this.isTransitioning &&
									0 === this.transInstr.length &&
									this.canGoBackSync()
								);
							}
							onStart() {
								(this.gestureOrAnimationInProgress = !0),
									this.pop({ direction: "back", progressAnimation: !0 });
							}
							onMove(e) {
								this.sbAni && this.sbAni.progressStep(e);
							}
							onEnd(e, t, n) {
								if (this.sbAni) {
									this.sbAni.onFinish(
										() => {
											this.gestureOrAnimationInProgress = !1;
										},
										{ oneTimeCallback: !0 }
									);
									let o = e ? -0.001 : 0.001;
									e
										? (o += qm([0, 0], [0.32, 0.72], [0, 1], [1, 1], t)[0])
										: (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
										  (o += qm([0, 0], [1, 0], [0.68, 0.28], [1, 1], t)[0])),
										this.sbAni.progressEnd(e ? 1 : 0, o, n);
								} else this.gestureOrAnimationInProgress = !1;
							}
							render() {
								return Wf("slot", null);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return {
									swipeGesture: ["swipeGestureChanged"],
									root: ["rootChanged"],
								};
							}
							static get style() {
								return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
							}
						},
						[
							1,
							"ion-nav",
							{
								delegate: [16],
								swipeGesture: [1028, "swipe-gesture"],
								animated: [4],
								animation: [16],
								rootParams: [16],
								root: [1],
								push: [64],
								insert: [64],
								insertPages: [64],
								pop: [64],
								popTo: [64],
								popToRoot: [64],
								removeIndex: [64],
								setRoot: [64],
								setPages: [64],
								setRouteId: [64],
								getRouteId: [64],
								getActive: [64],
								getByIndex: [64],
								canGoBack: [64],
								getPrevious: [64],
							},
							void 0,
							{ swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] },
						]
					);
				const tv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-nav"].forEach((e) => {
							if ("ion-nav" === e)
								customElements.get(e) || customElements.define(e, ev);
						});
					},
					nv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.type = "determinate"),
									(this.reversed = !1),
									(this.value = 0),
									(this.buffer = 1),
									(this.color = void 0);
							}
							render() {
								const {
										color: e,
										type: t,
										reversed: n,
										value: o,
										buffer: i,
									} = this,
									r = Zm.getBoolean("_testing"),
									a = mg(this);
								return Wf(
									Xf,
									{
										role: "progressbar",
										"aria-valuenow": "determinate" === t ? o : null,
										"aria-valuemin": "0",
										"aria-valuemax": "1",
										class: Cg(e, {
											[a]: !0,
											[`progress-bar-${t}`]: !0,
											"progress-paused": r,
											"progress-bar-reversed": "rtl" === document.dir ? !n : n,
										}),
									},
									"indeterminate" === t ? ov() : iv(o, i)
								);
							}
							static get style() {
								return {
									ios: ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}",
									md: ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--buffer-background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:4px}",
								};
							}
						},
						[
							33,
							"ion-progress-bar",
							{
								type: [1],
								reversed: [4],
								value: [2],
								buffer: [2],
								color: [513],
							},
						]
					),
					ov = () =>
						Wf(
							"div",
							{ part: "track", class: "progress-buffer-bar" },
							Wf(
								"div",
								{ class: "indeterminate-bar-primary" },
								Wf("span", {
									part: "progress",
									class: "progress-indeterminate",
								})
							),
							Wf(
								"div",
								{ class: "indeterminate-bar-secondary" },
								Wf("span", {
									part: "progress",
									class: "progress-indeterminate",
								})
							)
						),
					iv = (e, t) => {
						const n = bm(0, e, 1),
							o = bm(0, t, 1);
						return [
							Wf("div", {
								part: "progress",
								class: "progress",
								style: { transform: `scaleX(${n})` },
							}),
							Wf(
								"div",
								{
									class: {
										"buffer-circles-container": !0,
										"ion-hide": 1 === o,
									},
									style: { transform: `translateX(${100 * o}%)` },
								},
								Wf(
									"div",
									{
										class: "buffer-circles-container",
										style: { transform: `translateX(-${100 * o}%)` },
									},
									Wf("div", { part: "stream", class: "buffer-circles" })
								)
							),
							Wf("div", {
								part: "track",
								class: "progress-buffer-bar",
								style: { transform: `scaleX(${o})` },
							}),
						];
					};
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const rv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-progress-bar"].forEach((e) => {
							if ("ion-progress-bar" === e)
								customElements.get(e) || customElements.define(e, nv);
						});
					},
					av = (e) => {
						const t = e.querySelector("ion-spinner"),
							n = t.shadowRoot.querySelector("circle"),
							o = e.querySelector(".spinner-arrow-container"),
							i = e.querySelector(".arrow-container"),
							r = i ? i.querySelector("ion-icon") : null,
							a = zm().duration(1e3).easing("ease-out"),
							s = zm()
								.addElement(o)
								.keyframes([
									{ offset: 0, opacity: "0.3" },
									{ offset: 0.45, opacity: "0.3" },
									{ offset: 0.55, opacity: "1" },
									{ offset: 1, opacity: "1" },
								]),
							l = zm()
								.addElement(n)
								.keyframes([
									{ offset: 0, strokeDasharray: "1px, 200px" },
									{ offset: 0.2, strokeDasharray: "1px, 200px" },
									{ offset: 0.55, strokeDasharray: "100px, 200px" },
									{ offset: 1, strokeDasharray: "100px, 200px" },
								]),
							c = zm()
								.addElement(t)
								.keyframes([
									{ offset: 0, transform: "rotate(-90deg)" },
									{ offset: 1, transform: "rotate(210deg)" },
								]);
						if (i && r) {
							const e = zm()
									.addElement(i)
									.keyframes([
										{ offset: 0, transform: "rotate(0deg)" },
										{ offset: 0.3, transform: "rotate(0deg)" },
										{ offset: 0.55, transform: "rotate(280deg)" },
										{ offset: 1, transform: "rotate(400deg)" },
									]),
								t = zm()
									.addElement(r)
									.keyframes([
										{ offset: 0, transform: "translateX(2px) scale(0)" },
										{ offset: 0.3, transform: "translateX(2px) scale(0)" },
										{ offset: 0.55, transform: "translateX(-1.5px) scale(1)" },
										{ offset: 1, transform: "translateX(-1.5px) scale(1)" },
									]);
							a.addAnimation([e, t]);
						}
						return a.addAnimation([s, l, c]);
					},
					sv = (e, t) => {
						const n = t.clientHeight,
							o = zm()
								.addElement(e)
								.keyframes([
									{ offset: 0, transform: `scale(0) translateY(-${n}px)` },
									{ offset: 1, transform: "scale(1) translateY(100px)" },
								]);
						return av(e).addAnimation([o]);
					},
					lv = (e, t) => {
						const n = t.clientHeight,
							o = zm()
								.addElement(e)
								.keyframes([
									{ offset: 0, transform: `translateY(-${n}px)` },
									{ offset: 1, transform: "translateY(100px)" },
								]);
						return av(e).addAnimation([o]);
					},
					cv = (e, t, n = 200) => {
						if (!e) return Promise.resolve();
						const o = lm(e, n);
						return (
							rm(() => {
								e.style.setProperty("transition", `${n}ms all ease-out`),
									void 0 === t
										? e.style.removeProperty("transform")
										: e.style.setProperty(
												"transform",
												`translate3d(0px, ${t}, 0px)`
										  );
							}),
							o
						);
					},
					dv = async (e, t) => {
						const n = e.querySelector("ion-refresher-content");
						if (!n) return Promise.resolve(!1);
						await new Promise((e) => dm(n, e));
						const o = e.querySelector(
								"ion-refresher-content .refresher-pulling ion-spinner"
							),
							i = e.querySelector(
								"ion-refresher-content .refresher-refreshing ion-spinner"
							);
						return (
							null !== o &&
							null !== i &&
							(("ios" === t &&
								ng("mobile") &&
								void 0 !== e.style.webkitOverflowScrolling) ||
								"md" === t)
						);
					},
					uv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									(this.ionRefresh = Qf(this, "ionRefresh", 7)),
									(this.ionPull = Qf(this, "ionPull", 7)),
									(this.ionStart = Qf(this, "ionStart", 7)),
									(this.appliedStyles = !1),
									(this.didStart = !1),
									(this.progress = 0),
									(this.pointerDown = !1),
									(this.needsCompletion = !1),
									(this.didRefresh = !1),
									(this.lastVelocityY = 0),
									(this.animations = []),
									(this.nativeRefresher = !1),
									(this.state = 1),
									(this.pullMin = 60),
									(this.pullMax = this.pullMin + 60),
									(this.closeDuration = "280ms"),
									(this.snapbackDuration = "280ms"),
									(this.pullFactor = 1),
									(this.disabled = !1);
							}
							disabledChanged() {
								this.gesture && this.gesture.enable(!this.disabled);
							}
							async checkNativeRefresher() {
								const e = await dv(this.el, mg(this));
								if (e && !this.nativeRefresher) {
									const e = this.el.closest("ion-content");
									this.setupNativeRefresher(e);
								} else e || this.destroyNativeRefresher();
							}
							destroyNativeRefresher() {
								this.scrollEl &&
									this.scrollListenerCallback &&
									(this.scrollEl.removeEventListener(
										"scroll",
										this.scrollListenerCallback
									),
									(this.scrollListenerCallback = void 0)),
									(this.nativeRefresher = !1);
							}
							async resetNativeRefresher(e, t) {
								(this.state = t),
									"ios" === mg(this)
										? await cv(e, void 0, 300)
										: await lm(
												this.el.querySelector(".refresher-refreshing-icon"),
												200
										  ),
									(this.didRefresh = !1),
									(this.needsCompletion = !1),
									(this.pointerDown = !1),
									this.animations.forEach((e) => e.destroy()),
									(this.animations = []),
									(this.progress = 0),
									(this.state = 1);
							}
							async setupiOSNativeRefresher(e, t) {
								this.elementToTransform = this.scrollEl;
								const o = e.shadowRoot.querySelectorAll("svg");
								let i = 0.16 * this.scrollEl.clientHeight;
								const r = o.length;
								rm(() =>
									o.forEach((e) => e.style.setProperty("animation", "none"))
								),
									(this.scrollListenerCallback = () => {
										(this.pointerDown || 1 !== this.state) &&
											im(() => {
												const e = this.scrollEl.scrollTop,
													n = this.el.clientHeight;
												if (e > 0) {
													if (8 === this.state) {
														const o = bm(0, e / (0.5 * n), 1);
														return void rm(() => {
															return (
																(e = 1 - o),
																void t.style.setProperty(
																	"opacity",
																	e.toString()
																)
															);
															var e;
														});
													}
													return;
												}
												this.pointerDown &&
													(this.didStart ||
														((this.didStart = !0), this.ionStart.emit()),
													this.pointerDown && this.ionPull.emit());
												const a = this.didStart ? 30 : 0,
													s = (this.progress = bm(0, (Math.abs(e) - a) / i, 1));
												var l, c;
												8 === this.state || 1 === s
													? (this.pointerDown &&
															((l = t),
															(c = this.lastVelocityY),
															rm(() => {
																l.style.setProperty(
																	"--refreshing-rotation-duration",
																	c >= 1 ? "0.5s" : "2s"
																),
																	l.style.setProperty("opacity", "1");
															})),
													  this.didRefresh ||
															(this.beginRefresh(),
															(this.didRefresh = !0),
															vb({ style: mb.Light }),
															this.pointerDown ||
																cv(this.elementToTransform, `${n}px`)))
													: ((this.state = 2),
													  ((e, t, n) => {
															rm(() => {
																e.forEach((e, o) => {
																	const i = o * (1 / t),
																		r = bm(0, (n - i) / (1 - i), 1);
																	e.style.setProperty("opacity", r.toString());
																});
															});
													  })(o, r, s));
											});
									}),
									this.scrollEl.addEventListener(
										"scroll",
										this.scrollListenerCallback
									),
									(this.gesture = (
										await Ef(() => n.import("./index3-legacy-3b1f112b.js"))
									).createGesture({
										el: this.scrollEl,
										gestureName: "refresher",
										gesturePriority: 31,
										direction: "y",
										threshold: 5,
										onStart: () => {
											(this.pointerDown = !0),
												this.didRefresh || cv(this.elementToTransform, "0px"),
												0 === i && (i = 0.16 * this.scrollEl.clientHeight);
										},
										onMove: (e) => {
											this.lastVelocityY = e.velocityY;
										},
										onEnd: () => {
											(this.pointerDown = !1),
												(this.didStart = !1),
												this.needsCompletion
													? (this.resetNativeRefresher(
															this.elementToTransform,
															32
													  ),
													  (this.needsCompletion = !1))
													: this.didRefresh &&
													  im(() =>
															cv(
																this.elementToTransform,
																`${this.el.clientHeight}px`
															)
													  );
										},
									})),
									this.disabledChanged();
							}
							async setupMDNativeRefresher(e, t, o) {
								const i = mm(t).querySelector("circle"),
									r = this.el.querySelector(
										"ion-refresher-content .refresher-pulling-icon"
									),
									a = mm(o).querySelector("circle");
								null !== i &&
									null !== a &&
									rm(() => {
										i.style.setProperty("animation", "none"),
											o.style.setProperty("animation-delay", "-655ms"),
											a.style.setProperty("animation-delay", "-655ms");
									}),
									(this.gesture = (
										await Ef(() => n.import("./index3-legacy-3b1f112b.js"))
									).createGesture({
										el: this.scrollEl,
										gestureName: "refresher",
										gesturePriority: 31,
										direction: "y",
										threshold: 5,
										canStart: () =>
											8 !== this.state &&
											32 !== this.state &&
											0 === this.scrollEl.scrollTop,
										onStart: (e) => {
											(this.progress = 0),
												(e.data = {
													animation: void 0,
													didStart: !1,
													cancelled: !1,
												});
										},
										onMove: (t) => {
											if (
												(t.velocityY < 0 &&
													0 === this.progress &&
													!t.data.didStart) ||
												t.data.cancelled
											)
												t.data.cancelled = !0;
											else {
												if (!t.data.didStart) {
													(t.data.didStart = !0), (this.state = 2);
													const { scrollEl: n } = this,
														o = n.matches(wb) ? "overflow" : "--overflow";
													rm(() => n.style.setProperty(o, "hidden"));
													const i = ((e) => {
															const t = e.previousElementSibling;
															return null !== t && "ION-HEADER" === t.tagName
																? "translate"
																: "scale";
														})(e),
														a = ((e, t, n) =>
															"scale" === e ? sv(t, n) : lv(t, n))(
															i,
															r,
															this.el
														);
													return (
														(t.data.animation = a),
														a.progressStart(!1, 0),
														this.ionStart.emit(),
														void this.animations.push(a)
													);
												}
												(this.progress = bm(0, (t.deltaY / 180) * 0.5, 1)),
													t.data.animation.progressStep(this.progress),
													this.ionPull.emit();
											}
										},
										onEnd: (e) => {
											if (!e.data.didStart) return;
											this.gesture.enable(!1);
											const { scrollEl: t } = this,
												n = t.matches(wb) ? "overflow" : "--overflow";
											if (
												(rm(() => t.style.removeProperty(n)),
												this.progress <= 0.4)
											)
												return void e.data.animation
													.progressEnd(0, this.progress, 500)
													.onFinish(() => {
														this.animations.forEach((e) => e.destroy()),
															(this.animations = []),
															this.gesture.enable(!0),
															(this.state = 1);
													});
											const o = qm(
													[0, 0],
													[0, 0],
													[1, 1],
													[1, 1],
													this.progress
												)[0],
												i = ((e) =>
													zm()
														.duration(125)
														.addElement(e)
														.fromTo(
															"transform",
															"translateY(var(--ion-pulling-refresher-translate, 100px))",
															"translateY(0px)"
														))(r);
											this.animations.push(i),
												rm(async () => {
													r.style.setProperty(
														"--ion-pulling-refresher-translate",
														100 * o + "px"
													),
														e.data.animation.progressEnd(),
														await i.play(),
														this.beginRefresh(),
														e.data.animation.destroy(),
														this.gesture.enable(!0);
												});
										},
									})),
									this.disabledChanged();
							}
							async setupNativeRefresher(e) {
								if (
									this.scrollListenerCallback ||
									!e ||
									this.nativeRefresher ||
									!this.scrollEl
								)
									return;
								this.setCss(0, "", !1, ""), (this.nativeRefresher = !0);
								const t = this.el.querySelector(
										"ion-refresher-content .refresher-pulling ion-spinner"
									),
									n = this.el.querySelector(
										"ion-refresher-content .refresher-refreshing ion-spinner"
									);
								"ios" === mg(this)
									? this.setupiOSNativeRefresher(t, n)
									: this.setupMDNativeRefresher(e, t, n);
							}
							componentDidUpdate() {
								this.checkNativeRefresher();
							}
							async connectedCallback() {
								if ("fixed" !== this.el.getAttribute("slot"))
									return void console.error(
										'Make sure you use: <ion-refresher slot="fixed">'
									);
								const e = this.el.closest(yb);
								e
									? dm(e, async () => {
											const t = e.querySelector(wb);
											(this.scrollEl = await Eb(null != t ? t : e)),
												(this.backgroundContentEl =
													await e.getBackgroundElement()),
												(await dv(this.el, mg(this)))
													? this.setupNativeRefresher(e)
													: ((this.gesture = (
															await Ef(() =>
																n.import("./index3-legacy-3b1f112b.js")
															)
													  ).createGesture({
															el: e,
															gestureName: "refresher",
															gesturePriority: 31,
															direction: "y",
															threshold: 20,
															passive: !1,
															canStart: () => this.canStart(),
															onStart: () => this.onStart(),
															onMove: (e) => this.onMove(e),
															onEnd: () => this.onEnd(),
													  })),
													  this.disabledChanged());
									  })
									: Cb(this.el);
							}
							disconnectedCallback() {
								this.destroyNativeRefresher(),
									(this.scrollEl = void 0),
									this.gesture &&
										(this.gesture.destroy(), (this.gesture = void 0));
							}
							async complete() {
								this.nativeRefresher
									? ((this.needsCompletion = !0),
									  this.pointerDown ||
											gm(() =>
												gm(() =>
													this.resetNativeRefresher(this.elementToTransform, 32)
												)
											))
									: this.close(32, "120ms");
							}
							async cancel() {
								this.nativeRefresher
									? this.pointerDown ||
									  gm(() =>
											gm(() =>
												this.resetNativeRefresher(this.elementToTransform, 16)
											)
									  )
									: this.close(16, "");
							}
							getProgress() {
								return Promise.resolve(this.progress);
							}
							canStart() {
								return (
									!!this.scrollEl &&
									1 === this.state &&
									!(this.scrollEl.scrollTop > 0)
								);
							}
							onStart() {
								(this.progress = 0),
									(this.state = 1),
									this.memoizeOverflowStyle();
							}
							onMove(e) {
								if (!this.scrollEl) return;
								const t = e.event;
								if (void 0 !== t.touches && t.touches.length > 1) return;
								if (0 != (56 & this.state)) return;
								const n =
										Number.isNaN(this.pullFactor) || this.pullFactor < 0
											? 1
											: this.pullFactor,
									o = e.deltaY * n;
								if (o <= 0)
									return (
										(this.progress = 0),
										(this.state = 1),
										this.appliedStyles
											? void this.setCss(0, "", !1, "")
											: void 0
									);
								if (1 === this.state) {
									if (this.scrollEl.scrollTop > 0)
										return void (this.progress = 0);
									this.state = 2;
								}
								if (
									(t.cancelable && t.preventDefault(),
									this.setCss(o, "0ms", !0, ""),
									0 === o)
								)
									return void (this.progress = 0);
								const i = this.pullMin;
								(this.progress = o / i),
									this.didStart || ((this.didStart = !0), this.ionStart.emit()),
									this.ionPull.emit(),
									o < i
										? (this.state = 2)
										: o > this.pullMax
										? this.beginRefresh()
										: (this.state = 4);
							}
							onEnd() {
								4 === this.state
									? this.beginRefresh()
									: 2 === this.state
									? this.cancel()
									: 1 === this.state && this.restoreOverflowStyle();
							}
							beginRefresh() {
								(this.state = 8),
									this.setCss(this.pullMin, this.snapbackDuration, !0, ""),
									this.ionRefresh.emit({ complete: this.complete.bind(this) });
							}
							close(e, t) {
								setTimeout(() => {
									(this.state = 1),
										(this.progress = 0),
										(this.didStart = !1),
										this.setCss(0, "0ms", !1, "", !0);
								}, 600),
									(this.state = e),
									this.setCss(0, this.closeDuration, !0, t);
							}
							setCss(e, t, n, o, i = !1) {
								this.nativeRefresher ||
									((this.appliedStyles = e > 0),
									rm(() => {
										if (this.scrollEl && this.backgroundContentEl) {
											const i = this.scrollEl.style,
												r = this.backgroundContentEl.style;
											(i.transform = r.transform =
												e > 0 ? `translateY(${e}px) translateZ(0px)` : ""),
												(i.transitionDuration = r.transitionDuration = t),
												(i.transitionDelay = r.transitionDelay = o),
												(i.overflow = n ? "hidden" : "");
										}
										i && this.restoreOverflowStyle();
									}));
							}
							memoizeOverflowStyle() {
								if (this.scrollEl) {
									const {
										overflow: e,
										overflowX: t,
										overflowY: n,
									} = this.scrollEl.style;
									this.overflowStyles = {
										overflow: null != e ? e : "",
										overflowX: null != t ? t : "",
										overflowY: null != n ? n : "",
									};
								}
							}
							restoreOverflowStyle() {
								if (
									void 0 !== this.overflowStyles &&
									void 0 !== this.scrollEl
								) {
									const {
										overflow: e,
										overflowX: t,
										overflowY: n,
									} = this.overflowStyles;
									(this.scrollEl.style.overflow = e),
										(this.scrollEl.style.overflowX = t),
										(this.scrollEl.style.overflowY = n),
										(this.overflowStyles = void 0);
								}
							}
							render() {
								const e = mg(this);
								return Wf(Xf, {
									slot: "fixed",
									class: {
										[e]: !0,
										[`refresher-${e}`]: !0,
										"refresher-native": this.nativeRefresher,
										"refresher-active": 1 !== this.state,
										"refresher-pulling": 2 === this.state,
										"refresher-ready": 4 === this.state,
										"refresher-refreshing": 8 === this.state,
										"refresher-cancelling": 16 === this.state,
										"refresher-completing": 32 === this.state,
									},
								});
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { disabled: ["disabledChanged"] };
							}
							static get style() {
								return {
									ios: "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",
									md: "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}",
								};
							}
						},
						[
							32,
							"ion-refresher",
							{
								pullMin: [2, "pull-min"],
								pullMax: [2, "pull-max"],
								closeDuration: [1, "close-duration"],
								snapbackDuration: [1, "snapback-duration"],
								pullFactor: [2, "pull-factor"],
								disabled: [4],
								nativeRefresher: [32],
								state: [32],
								complete: [64],
								cancel: [64],
								getProgress: [64],
							},
							void 0,
							{ disabled: ["disabledChanged"] },
						]
					);
				const hv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-refresher"].forEach((e) => {
							if ("ion-refresher" === e)
								customElements.get(e) || customElements.define(e, uv);
						});
					},
					fv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									(this.customHTMLEnabled = Zm.get(
										"innerHTMLTemplatesEnabled",
										false
									)),
									(this.pullingIcon = void 0),
									(this.pullingText = void 0),
									(this.refreshingSpinner = void 0),
									(this.refreshingText = void 0);
							}
							componentWillLoad() {
								if (void 0 === this.pullingIcon) {
									const e = mg(this),
										t =
											void 0 !== this.el.style.webkitOverflowScrolling
												? "lines"
												: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
									this.pullingIcon = Zm.get(
										"refreshingIcon",
										"ios" === e && ng("mobile")
											? Zm.get("spinner", t)
											: "circular"
									);
								}
								if (void 0 === this.refreshingSpinner) {
									const e = mg(this);
									this.refreshingSpinner = Zm.get(
										"refreshingSpinner",
										Zm.get("spinner", "ios" === e ? "lines" : "circular")
									);
								}
							}
							renderPullingText() {
								const { customHTMLEnabled: e, pullingText: t } = this;
								return e
									? Wf("div", {
											class: "refresher-pulling-text",
											innerHTML: bg(t),
									  })
									: Wf("div", { class: "refresher-pulling-text" }, t);
							}
							renderRefreshingText() {
								const { customHTMLEnabled: e, refreshingText: t } = this;
								return e
									? Wf("div", {
											class: "refresher-refreshing-text",
											innerHTML: bg(t),
									  })
									: Wf("div", { class: "refresher-refreshing-text" }, t);
							}
							render() {
								const e = this.pullingIcon,
									t = null != e && void 0 !== Fb[e],
									n = mg(this);
								return Wf(
									Xf,
									{ class: n },
									Wf(
										"div",
										{ class: "refresher-pulling" },
										this.pullingIcon &&
											t &&
											Wf(
												"div",
												{ class: "refresher-pulling-icon" },
												Wf(
													"div",
													{ class: "spinner-arrow-container" },
													Wf("ion-spinner", {
														name: this.pullingIcon,
														paused: !0,
													}),
													"md" === n &&
														"circular" === this.pullingIcon &&
														Wf(
															"div",
															{ class: "arrow-container" },
															Wf("ion-icon", {
																icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",
																"aria-hidden": "true",
															})
														)
												)
											),
										this.pullingIcon &&
											!t &&
											Wf(
												"div",
												{ class: "refresher-pulling-icon" },
												Wf("ion-icon", {
													icon: this.pullingIcon,
													lazy: !1,
													"aria-hidden": "true",
												})
											),
										void 0 !== this.pullingText && this.renderPullingText()
									),
									Wf(
										"div",
										{ class: "refresher-refreshing" },
										this.refreshingSpinner &&
											Wf(
												"div",
												{ class: "refresher-refreshing-icon" },
												Wf("ion-spinner", { name: this.refreshingSpinner })
											),
										void 0 !== this.refreshingText &&
											this.renderRefreshingText()
									)
								);
							}
							get el() {
								return this;
							}
						},
						[
							0,
							"ion-refresher-content",
							{
								pullingIcon: [1025, "pulling-icon"],
								pullingText: [1, "pulling-text"],
								refreshingSpinner: [1025, "refreshing-spinner"],
								refreshingText: [1, "refreshing-text"],
							},
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const pv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-refresher-content", "ion-icon", "ion-spinner"].forEach(
							(e) => {
								switch (e) {
									case "ion-refresher-content":
										customElements.get(e) || customElements.define(e, fv);
										break;
									case "ion-icon":
										customElements.get(e) ||
											(function () {
												if ("undefined" == typeof customElements) return;
												["ion-icon"].forEach((e) => {
													"ion-icon" === e &&
														(customElements.get(e) ||
															customElements.define(e, Wg));
												});
											})();
										break;
									case "ion-spinner":
										customElements.get(e) || qb();
								}
							}
						);
					},
					mv = qb,
					gv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.color = void 0);
							}
							render() {
								const e = mg(this);
								return Wf(
									Xf,
									{ class: Cg(this.color, { [e]: !0 }) },
									Wf("slot", null)
								);
							}
							static get style() {
								return ":host(.ion-color){color:var(--ion-color-base)}";
							}
						},
						[1, "ion-text", { color: [513] }]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const bv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-text"].forEach((e) => {
							if ("ion-text" === e)
								customElements.get(e) || customElements.define(e, gv);
						});
					},
					vv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionStyle = Qf(this, "ionStyle", 7)),
									(this.color = void 0),
									(this.size = void 0);
							}
							sizeChanged() {
								this.emitStyle();
							}
							connectedCallback() {
								this.emitStyle();
							}
							emitStyle() {
								const e = this.getSize();
								this.ionStyle.emit({ [`title-${e}`]: !0 });
							}
							getSize() {
								return void 0 !== this.size ? this.size : "default";
							}
							render() {
								const e = mg(this),
									t = this.getSize();
								return Wf(
									Xf,
									{
										class: Cg(this.color, {
											[e]: !0,
											[`title-${t}`]: !0,
											"title-rtl": "rtl" === document.dir,
										}),
									},
									Wf("div", { class: "toolbar-title" }, Wf("slot", null))
								);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { size: ["sizeChanged"] };
							}
							static get style() {
								return {
									ios: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
									md: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}",
								};
							}
						},
						[
							33,
							"ion-title",
							{ color: [513], size: [1] },
							void 0,
							{ size: ["sizeChanged"] },
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const yv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-title"].forEach((e) => {
							if ("ion-title" === e)
								customElements.get(e) || customElements.define(e, vv);
						});
					},
					wv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.childrenStyles = new Map()),
									(this.color = void 0);
							}
							componentWillLoad() {
								const e = Array.from(this.el.querySelectorAll("ion-buttons")),
									t = e.find((e) => "start" === e.slot);
								t && t.classList.add("buttons-first-slot");
								const n = e.reverse(),
									o =
										n.find((e) => "end" === e.slot) ||
										n.find((e) => "primary" === e.slot) ||
										n.find((e) => "secondary" === e.slot);
								o && o.classList.add("buttons-last-slot");
							}
							childrenStyle(e) {
								e.stopPropagation();
								const t = e.target.tagName,
									n = e.detail,
									o = {},
									i = this.childrenStyles.get(t) || {};
								let r = !1;
								Object.keys(n).forEach((e) => {
									const t = `toolbar-${e}`,
										a = n[e];
									a !== i[t] && (r = !0), a && (o[t] = !0);
								}),
									r && (this.childrenStyles.set(t, o), Ip(this));
							}
							render() {
								const e = mg(this),
									t = {};
								return (
									this.childrenStyles.forEach((e) => {
										Object.assign(t, e);
									}),
									Wf(
										Xf,
										{
											class: Object.assign(
												Object.assign({}, t),
												Cg(this.color, {
													[e]: !0,
													"in-toolbar": Sg("ion-toolbar", this.el),
												})
											),
										},
										Wf("div", { class: "toolbar-background" }),
										Wf(
											"div",
											{ class: "toolbar-container" },
											Wf("slot", { name: "start" }),
											Wf("slot", { name: "secondary" }),
											Wf("div", { class: "toolbar-content" }, Wf("slot", null)),
											Wf("slot", { name: "primary" }),
											Wf("slot", { name: "end" })
										)
									)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
									md: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
								};
							}
						},
						[
							33,
							"ion-toolbar",
							{ color: [513] },
							[[0, "ionStyle", "childrenStyle"]],
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const xv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-toolbar"].forEach((e) => {
							if ("ion-toolbar" === e)
								customElements.get(e) || customElements.define(e, wv);
						});
					},
					kv = ub,
					Ev = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.inheritedAriaAttributes = {}),
									(this.color = void 0),
									(this.button = !1),
									(this.type = "button"),
									(this.disabled = !1),
									(this.download = void 0),
									(this.href = void 0),
									(this.rel = void 0),
									(this.routerDirection = "forward"),
									(this.routerAnimation = void 0),
									(this.target = void 0);
							}
							componentWillLoad() {
								this.inheritedAriaAttributes = hm(this.el, ["aria-label"]);
							}
							isClickable() {
								return void 0 !== this.href || this.button;
							}
							renderCard(e) {
								const t = this.isClickable();
								if (!t) return [Wf("slot", null)];
								const {
										href: n,
										routerAnimation: o,
										routerDirection: i,
										inheritedAriaAttributes: r,
									} = this,
									a = t ? (void 0 === n ? "button" : "a") : "div",
									s =
										"button" === a
											? { type: this.type }
											: {
													download: this.download,
													href: this.href,
													rel: this.rel,
													target: this.target,
											  };
								return Wf(
									a,
									Object.assign({}, s, r, {
										class: "card-native",
										part: "native",
										disabled: this.disabled,
										onClick: (e) => zg(n, e, i, o),
									}),
									Wf("slot", null),
									t && "md" === e && Wf("ion-ripple-effect", null)
								);
							}
							render() {
								const e = mg(this);
								return Wf(
									Xf,
									{
										class: Cg(this.color, {
											[e]: !0,
											"card-disabled": this.disabled,
											"ion-activatable": this.isClickable(),
										}),
									},
									this.renderCard(e)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}",
									md: ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}",
								};
							}
						},
						[
							33,
							"ion-card",
							{
								color: [513],
								button: [4],
								type: [1],
								disabled: [4],
								download: [1],
								href: [1],
								rel: [1],
								routerDirection: [1, "router-direction"],
								routerAnimation: [16],
								target: [1],
							},
						]
					),
					Sv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionFocus = Qf(this, "ionFocus", 7)),
									(this.ionBlur = Qf(this, "ionBlur", 7)),
									(this.fab = null),
									(this.inheritedAttributes = {}),
									(this.onFocus = () => {
										this.ionFocus.emit();
									}),
									(this.onBlur = () => {
										this.ionBlur.emit();
									}),
									(this.onClick = () => {
										const { fab: e } = this;
										e && e.toggle();
									}),
									(this.color = void 0),
									(this.activated = !1),
									(this.disabled = !1),
									(this.download = void 0),
									(this.href = void 0),
									(this.rel = void 0),
									(this.routerDirection = "forward"),
									(this.routerAnimation = void 0),
									(this.target = void 0),
									(this.show = !1),
									(this.translucent = !1),
									(this.type = "button"),
									(this.size = void 0),
									(this.closeIcon =
										"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>");
							}
							connectedCallback() {
								this.fab = this.el.closest("ion-fab");
							}
							componentWillLoad() {
								this.inheritedAttributes = pm(this.el);
							}
							render() {
								const {
										el: e,
										disabled: t,
										color: n,
										href: o,
										activated: i,
										show: r,
										translucent: a,
										size: s,
										inheritedAttributes: l,
									} = this,
									c = Sg("ion-fab-list", e),
									d = mg(this),
									u = void 0 === o ? "button" : "a",
									h =
										"button" === u
											? { type: this.type }
											: {
													download: this.download,
													href: o,
													rel: this.rel,
													target: this.target,
											  };
								return Wf(
									Xf,
									{
										onClick: this.onClick,
										"aria-disabled": t ? "true" : null,
										class: Cg(n, {
											[d]: !0,
											"fab-button-in-list": c,
											"fab-button-translucent-in-list": c && a,
											"fab-button-close-active": i,
											"fab-button-show": r,
											"fab-button-disabled": t,
											"fab-button-translucent": a,
											"ion-activatable": !0,
											"ion-focusable": !0,
											[`fab-button-${s}`]: void 0 !== s,
										}),
									},
									Wf(
										u,
										Object.assign(
											{},
											h,
											{
												class: "button-native",
												part: "native",
												disabled: t,
												onFocus: this.onFocus,
												onBlur: this.onBlur,
												onClick: (e) =>
													zg(o, e, this.routerDirection, this.routerAnimation),
											},
											l
										),
										Wf("ion-icon", {
											"aria-hidden": "true",
											icon: this.closeIcon,
											part: "close-icon",
											class: "close-icon",
											lazy: !1,
										}),
										Wf("span", { class: "button-inner" }, Wf("slot", null)),
										"md" === d && Wf("ion-ripple-effect", null)
									)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: ':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--close-icon-font-size:28px}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}',
									md: ':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;--close-icon-font-size:24px}:host(.ion-activated){--box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light, #f4f5f8);--background-activated:transparent;--background-focused:var(--ion-color-light-shade, #d7d8da);--background-hover:var(--ion-color-light-tint, #f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native::after{background:transparent}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}}',
								};
							}
						},
						[
							33,
							"ion-fab-button",
							{
								color: [513],
								activated: [4],
								disabled: [4],
								download: [1],
								href: [1],
								rel: [1],
								routerDirection: [1, "router-direction"],
								routerAnimation: [16],
								target: [1],
								show: [4],
								translucent: [4],
								type: [1],
								size: [1],
								closeIcon: [1, "close-icon"],
							},
						]
					),
					Cv = Sv,
					$v = hb;
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */
				var zv;
				!(function (e) {
					(e.Dark = "DARK"), (e.Light = "LIGHT"), (e.Default = "DEFAULT");
				})(zv || (zv = {}));
				const Iv = Np(
						class extends Yp {
							constructor() {
								super(), this.__registerHost();
							}
							componentDidLoad() {
								Pv(async () => {
									const e = ng(window, "hybrid");
									if (
										(Zm.getBoolean("_testing") ||
											Ef(() => n.import("./index9-legacy-5c8a0bb1.js")).then(
												(e) => e.startTapClick(Zm)
											),
										Zm.getBoolean("statusTap", e) &&
											Ef(() =>
												n.import("./status-tap-legacy-d5b708ad.js")
											).then((e) => e.startStatusTap()),
										Zm.getBoolean("inputShims", Tv()))
									) {
										const e = ng(window, "ios") ? "ios" : "android";
										Ef(() => n.import("./input-shims-legacy-9cbc76d0.js")).then(
											(t) => t.startInputShims(Zm, e)
										);
									}
									const t = await Ef(() =>
										n.import("./hardware-back-button-legacy-7391e573.js")
									);
									Zm.getBoolean("hardwareBackButton", e)
										? t.startHardwareBackButton()
										: t.blockHardwareBackButton(),
										"undefined" != typeof window &&
											Ef(() => n.import("./keyboard2-legacy-e5ba9334.js")).then(
												(e) => e.startKeyboardAssist(window)
											),
										Ef(() =>
											n.import("./focus-visible-legacy-b3e947fe.js")
										).then((e) => (this.focusVisible = e.startFocusVisible()));
								});
							}
							async setFocus(e) {
								this.focusVisible && this.focusVisible.setFocus(e);
							}
							render() {
								const e = mg(this);
								return Wf(Xf, {
									class: {
										[e]: !0,
										"ion-page": !0,
										"force-statusbar-padding": Zm.getBoolean(
											"_forceStatusbarPadding"
										),
									},
								});
							}
							get el() {
								return this;
							}
							static get style() {
								return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
							}
						},
						[0, "ion-app", { setFocus: [64] }]
					),
					Tv = () => {
						if (ng(window, "ios") && ng(window, "mobile")) return !0;
						return !(!ng(window, "android") || !ng(window, "mobileweb"));
					},
					Pv = (e) => {
						"requestIdleCallback" in window
							? window.requestIdleCallback(e)
							: setTimeout(e, 32);
					};
				const Lv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-app"].forEach((e) => {
							if ("ion-app" === e)
								customElements.get(e) || customElements.define(e, Iv);
						});
					},
					Rv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionNavWillLoad = Qf(this, "ionNavWillLoad", 7)),
									(this.ionNavWillChange = Qf(this, "ionNavWillChange", 3)),
									(this.ionNavDidChange = Qf(this, "ionNavDidChange", 3)),
									(this.lockController = (() => {
										let e;
										return {
											lock: async () => {
												const t = e;
												let n;
												return (
													(e = new Promise((e) => (n = e))),
													void 0 !== t && (await t),
													n
												);
											},
										};
									})()),
									(this.gestureOrAnimationInProgress = !1),
									(this.mode = mg(this)),
									(this.delegate = void 0),
									(this.animated = !0),
									(this.animation = void 0),
									(this.swipeHandler = void 0);
							}
							swipeHandlerChanged() {
								this.gesture &&
									this.gesture.enable(void 0 !== this.swipeHandler);
							}
							async connectedCallback() {
								const e = () => {
									(this.gestureOrAnimationInProgress = !0),
										this.swipeHandler && this.swipeHandler.onStart();
								};
								(this.gesture = (
									await Ef(() => n.import("./swipe-back-legacy-d346eeb5.js"))
								).createSwipeBackGesture(
									this.el,
									() =>
										!this.gestureOrAnimationInProgress &&
										!!this.swipeHandler &&
										this.swipeHandler.canStart(),
									() => e(),
									(e) => {
										var t;
										return null === (t = this.ani) || void 0 === t
											? void 0
											: t.progressStep(e);
									},
									(e, t, n) => {
										if (this.ani) {
											this.ani.onFinish(
												() => {
													(this.gestureOrAnimationInProgress = !1),
														this.swipeHandler && this.swipeHandler.onEnd(e);
												},
												{ oneTimeCallback: !0 }
											);
											let o = e ? -0.001 : 0.001;
											e
												? (o += qm([0, 0], [0.32, 0.72], [0, 1], [1, 1], t)[0])
												: (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
												  (o += qm(
														[0, 0],
														[1, 0],
														[0.68, 0.28],
														[1, 1],
														t
												  )[0])),
												this.ani.progressEnd(e ? 1 : 0, o, n);
										} else this.gestureOrAnimationInProgress = !1;
									}
								)),
									this.swipeHandlerChanged();
							}
							componentWillLoad() {
								this.ionNavWillLoad.emit();
							}
							disconnectedCallback() {
								this.gesture &&
									(this.gesture.destroy(), (this.gesture = void 0));
							}
							async commit(e, t, n) {
								const o = await this.lockController.lock();
								let i = !1;
								try {
									i = await this.transition(e, t, n);
								} catch ($h) {
									console.error($h);
								}
								return o(), i;
							}
							async setRouteId(e, t, n, o) {
								return {
									changed: await this.setRoot(e, t, {
										duration: "root" === n ? 0 : void 0,
										direction: "back" === n ? "back" : "forward",
										animationBuilder: o,
									}),
									element: this.activeEl,
								};
							}
							async getRouteId() {
								const e = this.activeEl;
								return e
									? { id: e.tagName, element: e, params: this.activeParams }
									: void 0;
							}
							async setRoot(e, t, n) {
								if (this.activeComponent === e && ym(t, this.activeParams))
									return !1;
								const o = this.activeEl,
									i = await Tg(
										this.delegate,
										this.el,
										e,
										["ion-page", "ion-page-invisible"],
										t
									);
								return (
									(this.activeComponent = e),
									(this.activeEl = i),
									(this.activeParams = t),
									await this.commit(i, o, n),
									await ((e, t) => {
										if (t) {
											if (e) {
												const n = t.parentElement;
												return e.removeViewFromDom(n, t);
											}
											t.remove();
										}
										return Promise.resolve();
									})(this.delegate, o),
									!0
								);
							}
							async transition(e, t, n = {}) {
								if (t === e) return !1;
								this.ionNavWillChange.emit();
								const { el: o, mode: i } = this,
									r = this.animated && Zm.getBoolean("animated", !0),
									a =
										n.animationBuilder ||
										this.animation ||
										Zm.get("navAnimation");
								return (
									await Lm(
										Object.assign(
											Object.assign(
												{
													mode: i,
													animated: r,
													enteringEl: e,
													leavingEl: t,
													baseEl: o,
													deepWait: um(o),
													progressCallback: n.progressAnimation
														? (e) => {
																void 0 === e ||
																this.gestureOrAnimationInProgress
																	? (this.ani = e)
																	: ((this.gestureOrAnimationInProgress = !0),
																	  e.onFinish(
																			() => {
																				(this.gestureOrAnimationInProgress =
																					!1),
																					this.swipeHandler &&
																						this.swipeHandler.onEnd(!1);
																			},
																			{ oneTimeCallback: !0 }
																	  ),
																	  e.progressEnd(0, 0, 0));
														  }
														: void 0,
												},
												n
											),
											{ animationBuilder: a }
										)
									),
									this.ionNavDidChange.emit(),
									!0
								);
							}
							render() {
								return Wf("slot", null);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { swipeHandler: ["swipeHandlerChanged"] };
							}
							static get style() {
								return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
							}
						},
						[
							1,
							"ion-router-outlet",
							{
								mode: [1025],
								delegate: [16],
								animated: [4],
								animation: [16],
								swipeHandler: [16],
								commit: [64],
								setRouteId: [64],
								getRouteId: [64],
							},
							void 0,
							{ swipeHandler: ["swipeHandlerChanged"] },
						]
					);
				const Ov = function () {
						if ("undefined" == typeof customElements) return;
						["ion-router-outlet"].forEach((e) => {
							if ("ion-router-outlet" === e)
								customElements.get(e) || customElements.define(e, Rv);
						});
					},
					Nv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionTabBarChanged = Qf(this, "ionTabBarChanged", 7)),
									(this.ionTabBarLoaded = Qf(this, "ionTabBarLoaded", 7)),
									(this.keyboardCtrl = null),
									(this.keyboardVisible = !1),
									(this.color = void 0),
									(this.selectedTab = void 0),
									(this.translucent = !1);
							}
							selectedTabChanged() {
								void 0 !== this.selectedTab &&
									this.ionTabBarChanged.emit({ tab: this.selectedTab });
							}
							componentWillLoad() {
								this.selectedTabChanged();
							}
							async connectedCallback() {
								this.keyboardCtrl = await (async (e) => {
									let t, n, o, i;
									const r = async () => {
											const e = await Ib.getResizeMode(),
												r = void 0 === e ? void 0 : e.mode;
											(t = () => {
												void 0 === i && (i = Pb(r)), (o = !0), a(o, r);
											}),
												(n = () => {
													(o = !1), a(o, r);
												}),
												null == am ||
													am.addEventListener("keyboardWillShow", t),
												null == am ||
													am.addEventListener("keyboardWillHide", n);
										},
										a = (t, n) => {
											e && e(t, s(n));
										},
										s = (e) => {
											if (0 === i || i === Pb(e)) return;
											const t = Tb(e);
											return null !== t
												? new Promise((e) => {
														const n = new ResizeObserver(() => {
															t.clientHeight === i && (n.disconnect(), e());
														});
														n.observe(t);
												  })
												: void 0;
										};
									return (
										await r(),
										{
											init: r,
											destroy: () => {
												null == am ||
													am.removeEventListener("keyboardWillShow", t),
													null == am ||
														am.removeEventListener("keyboardWillHide", n),
													(t = n = void 0);
											},
											isKeyboardVisible: () => o,
										}
									);
								})(async (e, t) => {
									!1 === e && void 0 !== t && (await t),
										(this.keyboardVisible = e);
								});
							}
							disconnectedCallback() {
								this.keyboardCtrl && this.keyboardCtrl.destroy();
							}
							componentDidLoad() {
								this.ionTabBarLoaded.emit();
							}
							render() {
								const { color: e, translucent: t, keyboardVisible: n } = this,
									o = mg(this),
									i = n && "top" !== this.el.getAttribute("slot");
								return Wf(
									Xf,
									{
										role: "tablist",
										"aria-hidden": i ? "true" : null,
										class: Cg(e, {
											[o]: !0,
											"tab-bar-translucent": t,
											"tab-bar-hidden": i,
										}),
									},
									Wf("slot", null)
								);
							}
							get el() {
								return this;
							}
							static get watchers() {
								return { selectedTab: ["selectedTabChanged"] };
							}
							static get style() {
								return {
									ios: ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",
									md: ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}",
								};
							}
						},
						[
							33,
							"ion-tab-bar",
							{
								color: [513],
								selectedTab: [1, "selected-tab"],
								translucent: [4],
								keyboardVisible: [32],
							},
							void 0,
							{ selectedTab: ["selectedTabChanged"] },
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const _v = function () {
						if ("undefined" == typeof customElements) return;
						["ion-tab-bar"].forEach((e) => {
							if ("ion-tab-bar" === e)
								customElements.get(e) || customElements.define(e, Nv);
						});
					},
					Dv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.ionTabButtonClick = Qf(this, "ionTabButtonClick", 7)),
									(this.inheritedAttributes = {}),
									(this.onKeyUp = (e) => {
										("Enter" !== e.key && " " !== e.key) || this.selectTab(e);
									}),
									(this.onClick = (e) => {
										this.selectTab(e);
									}),
									(this.disabled = !1),
									(this.download = void 0),
									(this.href = void 0),
									(this.rel = void 0),
									(this.layout = void 0),
									(this.selected = !1),
									(this.tab = void 0),
									(this.target = void 0);
							}
							onTabBarChanged(e) {
								const t = e.target,
									n = this.el.parentElement;
								(e.composedPath().includes(n) ||
									(null == t ? void 0 : t.contains(this.el))) &&
									(this.selected = this.tab === e.detail.tab);
							}
							componentWillLoad() {
								(this.inheritedAttributes = Object.assign(
									{},
									hm(this.el, ["aria-label"])
								)),
									void 0 === this.layout &&
										(this.layout = Zm.get("tabButtonLayout", "icon-top"));
							}
							selectTab(e) {
								void 0 !== this.tab &&
									(this.disabled ||
										this.ionTabButtonClick.emit({
											tab: this.tab,
											href: this.href,
											selected: this.selected,
										}),
									e.preventDefault());
							}
							get hasLabel() {
								return !!this.el.querySelector("ion-label");
							}
							get hasIcon() {
								return !!this.el.querySelector("ion-icon");
							}
							render() {
								const {
										disabled: e,
										hasIcon: t,
										hasLabel: n,
										href: o,
										rel: i,
										target: r,
										layout: a,
										selected: s,
										tab: l,
										inheritedAttributes: c,
									} = this,
									d = mg(this),
									u = { download: this.download, href: o, rel: i, target: r };
								return Wf(
									Xf,
									{
										onClick: this.onClick,
										onKeyup: this.onKeyUp,
										id: void 0 !== l ? `tab-button-${l}` : null,
										class: {
											[d]: !0,
											"tab-selected": s,
											"tab-disabled": e,
											"tab-has-label": n,
											"tab-has-icon": t,
											"tab-has-label-only": n && !t,
											"tab-has-icon-only": t && !n,
											[`tab-layout-${a}`]: !0,
											"ion-activatable": !0,
											"ion-selectable": !0,
											"ion-focusable": !0,
										},
									},
									Wf(
										"a",
										Object.assign(
											{},
											u,
											{
												class: "button-native",
												part: "native",
												role: "tab",
												"aria-selected": s ? "true" : null,
												"aria-disabled": e ? "true" : null,
												tabindex: e ? "-1" : void 0,
											},
											c
										),
										Wf("span", { class: "button-inner" }, Wf("slot", null)),
										"md" === d && Wf("ion-ripple-effect", { type: "unbounded" })
									)
								);
							}
							get el() {
								return this;
							}
							static get style() {
								return {
									ios: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
									md: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
								};
							}
						},
						[
							33,
							"ion-tab-button",
							{
								disabled: [4],
								download: [1],
								href: [1],
								rel: [1],
								layout: [1025],
								selected: [1028],
								tab: [1],
								target: [1],
							},
							[[8, "ionTabBarChanged", "onTabBarChanged"]],
						]
					);
				/*!
				 * (C) Ionic http://ionicframework.com - MIT License
				 */ const Av = function () {
					if ("undefined" == typeof customElements) return;
					["ion-tab-button", "ion-ripple-effect"].forEach((e) => {
						switch (e) {
							case "ion-tab-button":
								customElements.get(e) || customElements.define(e, Dv);
								break;
							case "ion-ripple-effect":
								customElements.get(e) ||
									(function () {
										if ("undefined" == typeof customElements) return;
										["ion-ripple-effect"].forEach((e) => {
											"ion-ripple-effect" === e &&
												(customElements.get(e) || customElements.define(e, tb));
										});
									})();
						}
					});
				};
				let Mv;
				const Bv = (e) => {
						const t = (() => {
							if ("undefined" == typeof window) return new Map();
							if (!Mv) {
								const e = window;
								(e.Ionicons = e.Ionicons || {}),
									(Mv = e.Ionicons.map = e.Ionicons.map || new Map());
							}
							return Mv;
						})().get(e);
						return t || jf(`svg/${e}.svg`);
					},
					jv = (e, t, n, o, i) => {
						if (
							((n = "ios" === (n && Wv(n)) ? "ios" : "md"),
							o && "ios" === n
								? (e = Wv(o))
								: i && "md" === n
								? (e = Wv(i))
								: (e || !t || Hv(t) || (e = t), Fv(e) && (e = Wv(e))),
							!Fv(e) || "" === e.trim())
						)
							return null;
						return "" !== e.replace(/[a-z]|-|\d/gi, "") ? null : e;
					},
					Vv = (e) => (Fv(e) && ((e = e.trim()), Hv(e)) ? e : null),
					Hv = (e) => e.length > 0 && /(\/|\.)/.test(e),
					Fv = (e) => "string" == typeof e,
					Wv = (e) => e.toLowerCase(),
					Uv = (e) => {
						if (1 === e.nodeType) {
							if ("script" === e.nodeName.toLowerCase()) return !1;
							for (let t = 0; t < e.attributes.length; t++) {
								const n = e.attributes[t].name;
								if (Fv(n) && 0 === n.toLowerCase().indexOf("on")) return !1;
							}
							for (let t = 0; t < e.childNodes.length; t++)
								if (!Uv(e.childNodes[t])) return !1;
						}
						return !0;
					},
					Xv = new Map(),
					qv = new Map();
				let Yv;
				const Gv = (e, t) => {
						let n = qv.get(e);
						if (!n) {
							if ("undefined" == typeof fetch || "undefined" == typeof document)
								return Xv.set(e, ""), Promise.resolve();
							if (
								((e) => e.startsWith("data:image/svg+xml"))(e) &&
								((e) => -1 !== e.indexOf(";utf8,"))(e)
							) {
								Yv || (Yv = new DOMParser());
								const t = Yv.parseFromString(e, "text/html").querySelector(
									"svg"
								);
								return t && Xv.set(e, t.outerHTML), Promise.resolve();
							}
							(n = fetch(e).then((n) => {
								if (n.ok)
									return n.text().then((n) => {
										n &&
											!1 !== t &&
											(n = ((e) => {
												const t = document.createElement("div");
												t.innerHTML = e;
												for (let o = t.childNodes.length - 1; o >= 0; o--)
													"svg" !== t.childNodes[o].nodeName.toLowerCase() &&
														t.removeChild(t.childNodes[o]);
												const n = t.firstElementChild;
												if (n && "svg" === n.nodeName.toLowerCase()) {
													const e = n.getAttribute("class") || "";
													if (
														(n.setAttribute(
															"class",
															(e + " s-ion-icon").trim()
														),
														Uv(n))
													)
														return t.innerHTML;
												}
												return "";
											})(n)),
											Xv.set(e, n || "");
									});
								Xv.set(e, "");
							})),
								qv.set(e, n);
						}
						return n;
					},
					Qv = Np(
						class extends Yp {
							constructor() {
								super(),
									this.__registerHost(),
									this.__attachShadow(),
									(this.iconName = null),
									(this.inheritedAttributes = {}),
									(this.didLoadIcon = !1),
									(this.svgContent = void 0),
									(this.isVisible = !1),
									(this.mode = Kv()),
									(this.color = void 0),
									(this.ios = void 0),
									(this.md = void 0),
									(this.flipRtl = void 0),
									(this.name = void 0),
									(this.src = void 0),
									(this.icon = void 0),
									(this.size = void 0),
									(this.lazy = !1),
									(this.sanitize = !0);
							}
							componentWillLoad() {
								this.inheritedAttributes = ((e, t = []) => {
									const n = {};
									return (
										t.forEach((t) => {
											e.hasAttribute(t) &&
												(null !== e.getAttribute(t) &&
													(n[t] = e.getAttribute(t)),
												e.removeAttribute(t));
										}),
										n
									);
								})(this.el, ["aria-label"]);
							}
							connectedCallback() {
								this.waitUntilVisible(this.el, "50px", () => {
									(this.isVisible = !0), this.loadIcon();
								});
							}
							componentDidLoad() {
								this.didLoadIcon || this.loadIcon();
							}
							disconnectedCallback() {
								this.io && (this.io.disconnect(), (this.io = void 0));
							}
							waitUntilVisible(e, t, n) {
								if (
									this.lazy &&
									"undefined" != typeof window &&
									window.IntersectionObserver
								) {
									const o = (this.io = new window.IntersectionObserver(
										(e) => {
											e[0].isIntersecting &&
												(o.disconnect(), (this.io = void 0), n());
										},
										{ rootMargin: t }
									));
									o.observe(e);
								} else n();
							}
							loadIcon() {
								if (this.isVisible) {
									const e = ((e) => {
										let t = Vv(e.src);
										if (t) return t;
										if (((t = jv(e.name, e.icon, e.mode, e.ios, e.md)), t))
											return Bv(t);
										if (e.icon) {
											if (((t = Vv(e.icon)), t)) return t;
											if (((t = Vv(e.icon[e.mode])), t)) return t;
										}
										return null;
									})(this);
									e &&
										(Xv.has(e)
											? (this.svgContent = Xv.get(e))
											: Gv(e, this.sanitize).then(
													() => (this.svgContent = Xv.get(e))
											  ),
										(this.didLoadIcon = !0));
								}
								this.iconName = jv(
									this.name,
									this.icon,
									this.mode,
									this.ios,
									this.md
								);
							}
							render() {
								const {
										flipRtl: e,
										iconName: t,
										inheritedAttributes: n,
										el: o,
									} = this,
									i = this.mode || "md",
									r =
										!!t &&
										(t.includes("arrow") || t.includes("chevron")) &&
										!1 !== e,
									a = e || r;
								return Wf(
									Xf,
									Object.assign(
										{
											role: "img",
											class: Object.assign(
												Object.assign({ [i]: !0 }, Zv(this.color)),
												{
													[`icon-${this.size}`]: !!this.size,
													"flip-rtl": a,
													"icon-rtl":
														a &&
														((s = o),
														s && "" !== s.dir
															? "rtl" === s.dir.toLowerCase()
															: "rtl" ===
															  (null === document || void 0 === document
																	? void 0
																	: document.dir.toLowerCase())),
												}
											),
										},
										n
									),
									this.svgContent
										? Wf("div", {
												class: "icon-inner",
												innerHTML: this.svgContent,
										  })
										: Wf("div", { class: "icon-inner" })
								);
								var s;
							}
							static get assetsDirs() {
								return ["svg"];
							}
							get el() {
								return this;
							}
							static get watchers() {
								return {
									name: ["loadIcon"],
									src: ["loadIcon"],
									icon: ["loadIcon"],
									ios: ["loadIcon"],
									md: ["loadIcon"],
								};
							}
							static get style() {
								return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
							}
						},
						[
							1,
							"ion-icon",
							{
								mode: [1025],
								color: [1],
								ios: [1],
								md: [1],
								flipRtl: [4, "flip-rtl"],
								name: [513],
								src: [1],
								icon: [8],
								size: [1],
								lazy: [4],
								sanitize: [4],
								svgContent: [32],
								isVisible: [32],
							},
						]
					),
					Kv = () =>
						("undefined" != typeof document &&
							document.documentElement.getAttribute("mode")) ||
						"md",
					Zv = (e) => (e ? { "ion-color": !0, [`ion-color-${e}`]: !0 } : null);
				const Jv = function () {
						if ("undefined" == typeof customElements) return;
						["ion-icon"].forEach((e) => {
							if ("ion-icon" === e)
								customElements.get(e) || customElements.define(e, Qv);
						});
					},
					ey = F.createContext({
						onIonViewWillEnter: () => {},
						ionViewWillEnter: () => {},
						onIonViewDidEnter: () => {},
						ionViewDidEnter: () => {},
						onIonViewWillLeave: () => {},
						ionViewWillLeave: () => {},
						onIonViewDidLeave: () => {},
						ionViewDidLeave: () => {},
						cleanupIonViewWillEnter: () => {},
						cleanupIonViewDidEnter: () => {},
						cleanupIonViewWillLeave: () => {},
						cleanupIonViewDidLeave: () => {},
					}),
					ty = class {
						constructor() {
							(this.ionViewWillEnterCallbacks = []),
								(this.ionViewDidEnterCallbacks = []),
								(this.ionViewWillLeaveCallbacks = []),
								(this.ionViewDidLeaveCallbacks = []),
								(this.ionViewWillEnterDestructorCallbacks = []),
								(this.ionViewDidEnterDestructorCallbacks = []),
								(this.ionViewWillLeaveDestructorCallbacks = []),
								(this.ionViewDidLeaveDestructorCallbacks = []);
						}
						onIonViewWillEnter(e) {
							if (e.id) {
								const t = this.ionViewWillEnterCallbacks.findIndex(
									(t) => t.id === e.id
								);
								t > -1
									? (this.ionViewWillEnterCallbacks[t] = e)
									: this.ionViewWillEnterCallbacks.push(e);
							} else this.ionViewWillEnterCallbacks.push(e);
						}
						teardownCallback(e, t) {
							const n = t.filter((t) => t.id === e.id);
							0 !== n.length &&
								(n.forEach((e) => {
									e && "function" == typeof e.destructor && e.destructor();
								}),
								(t = t.filter((t) => t.id !== e.id)));
						}
						cleanupIonViewWillEnter(e) {
							this.teardownCallback(
								e,
								this.ionViewWillEnterDestructorCallbacks
							);
						}
						cleanupIonViewDidEnter(e) {
							this.teardownCallback(e, this.ionViewDidEnterDestructorCallbacks);
						}
						cleanupIonViewWillLeave(e) {
							this.teardownCallback(
								e,
								this.ionViewWillLeaveDestructorCallbacks
							);
						}
						cleanupIonViewDidLeave(e) {
							this.teardownCallback(e, this.ionViewDidLeaveDestructorCallbacks);
						}
						ionViewWillEnter() {
							this.ionViewWillEnterCallbacks.forEach((e) => {
								const t = e();
								e.id &&
									this.ionViewWillEnterDestructorCallbacks.push({
										id: e.id,
										destructor: t,
									});
							});
						}
						onIonViewDidEnter(e) {
							if (e.id) {
								const t = this.ionViewDidEnterCallbacks.findIndex(
									(t) => t.id === e.id
								);
								t > -1
									? (this.ionViewDidEnterCallbacks[t] = e)
									: this.ionViewDidEnterCallbacks.push(e);
							} else this.ionViewDidEnterCallbacks.push(e);
						}
						ionViewDidEnter() {
							this.ionViewDidEnterCallbacks.forEach((e) => {
								const t = e();
								e.id &&
									this.ionViewDidEnterDestructorCallbacks.push({
										id: e.id,
										destructor: t,
									});
							});
						}
						onIonViewWillLeave(e) {
							if (e.id) {
								const t = this.ionViewWillLeaveCallbacks.findIndex(
									(t) => t.id === e.id
								);
								t > -1
									? (this.ionViewWillLeaveCallbacks[t] = e)
									: this.ionViewWillLeaveCallbacks.push(e);
							} else this.ionViewWillLeaveCallbacks.push(e);
						}
						ionViewWillLeave() {
							this.ionViewWillLeaveCallbacks.forEach((e) => {
								const t = e();
								e.id &&
									this.ionViewWillLeaveDestructorCallbacks.push({
										id: e.id,
										destructor: t,
									});
							});
						}
						onIonViewDidLeave(e) {
							if (e.id) {
								const t = this.ionViewDidLeaveCallbacks.findIndex(
									(t) => t.id === e.id
								);
								t > -1
									? (this.ionViewDidLeaveCallbacks[t] = e)
									: this.ionViewDidLeaveCallbacks.push(e);
							} else this.ionViewDidLeaveCallbacks.push(e);
						}
						ionViewDidLeave() {
							this.ionViewDidLeaveCallbacks.forEach((e) => {
								const t = e();
								e.id &&
									this.ionViewDidLeaveDestructorCallbacks.push({
										id: e.id,
										destructor: t,
									});
							}),
								this.componentCanBeDestroyed();
						}
						onComponentCanBeDestroyed(e) {
							this.componentCanBeDestroyedCallback = e;
						}
						componentCanBeDestroyed() {
							this.componentCanBeDestroyedCallback &&
								this.componentCanBeDestroyedCallback();
						}
					},
					ny = F.createContext({
						getIonRedirect: () => {},
						getIonRoute: () => {},
						getPageManager: () => {},
						getStackManager: () => {},
						goBack: (e) => {
							"undefined" != typeof window &&
								("string" == typeof e
									? (window.location.pathname = e)
									: window.history.back());
						},
						navigate: (e) => {
							"undefined" != typeof window && (window.location.pathname = e);
						},
						hasIonicRouter: () => !1,
						routeInfo: void 0,
						setCurrentTab: () => {},
						changeTab: (e, t) => {
							"undefined" != typeof window && (window.location.pathname = t);
						},
						resetTab: (e, t) => {
							"undefined" != typeof window && (window.location.pathname = t);
						},
					}),
					oy = (e) =>
						e
							.toLowerCase()
							.split("-")
							.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
							.join(""),
					iy = (e) => e.replace(/([A-Z])/g, (e) => `-${e[0].toLowerCase()}`),
					ry = (e, t, n = {}) => {
						if (e instanceof Element) {
							const o = ay(e.classList, t, n);
							"" !== o && (e.className = o),
								Object.keys(t).forEach((n) => {
									if (
										"children" !== n &&
										"style" !== n &&
										"ref" !== n &&
										"class" !== n &&
										"className" !== n &&
										"forwardedRef" !== n
									)
										if (0 === n.indexOf("on") && n[2] === n[2].toUpperCase()) {
											const o = n.substring(2),
												i = o[0].toLowerCase() + o.substring(1);
											sy(i) || ly(e, i, t[n]);
										} else {
											e[n] = t[n];
											"string" === typeof t[n] && e.setAttribute(iy(n), t[n]);
										}
								});
						}
					},
					ay = (e, t, n) => {
						const o = t.className || t.class,
							i = n.className || n.class,
							r = cy(e),
							a = cy(o ? o.split(" ") : []),
							s = cy(i ? i.split(" ") : []),
							l = [];
						return (
							r.forEach((e) => {
								a.has(e) ? (l.push(e), a.delete(e)) : s.has(e) || l.push(e);
							}),
							a.forEach((e) => l.push(e)),
							l.join(" ")
						);
					},
					sy = (e) => {
						if ("undefined" == typeof document) return !0;
						{
							const t =
								"on" + ((e) => ("doubleclick" === e ? "dblclick" : e))(e);
							let n = t in document;
							if (!n) {
								const e = document.createElement("div");
								e.setAttribute(t, "return;"), (n = "function" == typeof e[t]);
							}
							return n;
						}
					},
					ly = (e, t, n) => {
						const o = e.__events || (e.__events = {}),
							i = o[t];
						i && e.removeEventListener(t, i),
							e.addEventListener(
								t,
								(o[t] = function (e) {
									n && n.call(this, e);
								})
							);
					},
					cy = (e) => {
						const t = new Map();
						return e.forEach((e) => t.set(e, e)), t;
					},
					dy =
						(...e) =>
						(t) => {
							e.forEach((e) => {
								((e, t) => {
									"function" == typeof e ? e(t) : null != e && (e.current = t);
								})(e, t);
							});
						},
					uy = (e, t, n, o) => {
						void 0 !== o && o();
						const i = oy(e),
							r = class extends F.Component {
								constructor(e) {
									super(e),
										(this.setComponentElRef = (e) => {
											this.componentEl = e;
										});
								}
								componentDidMount() {
									this.componentDidUpdate(this.props);
								}
								componentDidUpdate(e) {
									ry(this.componentEl, this.props, e);
								}
								render() {
									const t = this.props,
										{
											children: o,
											forwardedRef: i,
											style: r,
											className: a,
											ref: s,
										} = t,
										l = Pg(t, [
											"children",
											"forwardedRef",
											"style",
											"className",
											"ref",
										]);
									let c = Object.keys(l).reduce((e, t) => {
										const n = l[t];
										if (0 === t.indexOf("on") && t[2] === t[2].toUpperCase()) {
											const o = t.substring(2).toLowerCase();
											"undefined" != typeof document && sy(o) && (e[t] = n);
										} else {
											const o = typeof n;
											("string" !== o && "boolean" !== o && "number" !== o) ||
												(e[iy(t)] = n);
										}
										return e;
									}, {});
									n && (c = n(this.props, c));
									const d = Object.assign(Object.assign({}, c), {
										ref: dy(i, this.setComponentElRef),
										style: r,
									});
									return H.createElement(e, d, o);
								}
								static get displayName() {
									return i;
								}
							};
						return (
							t && (r.contextType = t),
							((e, t) => {
								const n = (t, n) =>
									F.createElement(e, Object.assign({}, t, { forwardedRef: n }));
								return (n.displayName = t), F.forwardRef(n);
							})(r, i)
						);
					},
					hy = uy("ion-card-content", void 0, void 0, Yg),
					fy = uy("ion-card-header", void 0, void 0, Qg),
					py = uy("ion-card-subtitle", void 0, void 0, Zg),
					my = uy("ion-card-title", void 0, void 0, eb),
					gy = uy("ion-content", void 0, void 0, db),
					by = uy("ion-header", void 0, void 0, Bb),
					vy = uy("ion-img", void 0, void 0, Hb),
					yy = uy("ion-label", void 0, void 0, Yb),
					wy = uy("ion-list", void 0, void 0, Qb),
					xy = uy("ion-progress-bar", void 0, void 0, rv),
					ky = uy("ion-refresher", void 0, void 0, hv),
					Ey = uy("ion-refresher-content", void 0, void 0, pv),
					Sy = uy("ion-spinner", void 0, void 0, mv),
					Cy = uy("ion-text", void 0, void 0, bv),
					$y = uy("ion-title", void 0, void 0, yv),
					zy = uy("ion-toolbar", void 0, void 0, xv),
					Iy = (e, t) => {
						const n = (t, n) =>
							F.createElement(e, Object.assign({}, t, { forwardedRef: n }));
						return (n.displayName = t), F.forwardRef(n);
					},
					Ty = () => {
						if ("undefined" != typeof window) {
							const e = window.Ionic;
							if (e && e.config) return e.config;
						}
						return null;
					},
					Py = (e, t) => {
						((e, t) => {
							void 0 === t ||
								"undefined" == typeof customElements ||
								customElements.get(e) ||
								customElements.define(e, t);
						})(e, t);
						const n = oy(e),
							o = class extends F.Component {
								constructor(e) {
									super(e),
										(this.handleClick = (e) => {
											const {
												routerLink: t,
												routerDirection: n,
												routerOptions: o,
												routerAnimation: i,
											} = this.props;
											void 0 !== t &&
												(e.preventDefault(),
												this.context.navigate(t, n, void 0, i, o));
										}),
										(this.ref = F.createRef()),
										(this.stableMergedRefs = dy(
											this.ref,
											this.props.forwardedRef
										));
								}
								componentDidMount() {
									this.componentDidUpdate(this.props);
								}
								componentDidUpdate(e) {
									const t = this.ref.current;
									ry(t, this.props, e);
								}
								render() {
									const t = this.props,
										{
											children: n,
											forwardedRef: o,
											style: i,
											className: r,
											ref: a,
										} = t,
										s = Pg(t, [
											"children",
											"forwardedRef",
											"style",
											"className",
											"ref",
										]),
										l = Object.keys(s).reduce((e, t) => {
											if (
												0 === t.indexOf("on") &&
												t[2] === t[2].toUpperCase()
											) {
												const n = t.substring(2).toLowerCase();
												sy(n) && (e[t] = s[t]);
											} else
												["string", "boolean", "number"].includes(typeof s[t]) &&
													(e[iy(t)] = s[t]);
											return e;
										}, {}),
										c = Object.assign(Object.assign({}, l), {
											ref: this.stableMergedRefs,
											style: i,
										});
									if (
										(this.props.routerLink &&
											!this.props.href &&
											(c.href = this.props.routerLink),
										c.onClick)
									) {
										const e = c.onClick;
										c.onClick = (t) => {
											e(t), t.defaultPrevented || this.handleClick(t);
										};
									} else c.onClick = this.handleClick;
									return H.createElement(e, c, n);
								}
								static get displayName() {
									return n;
								}
								static get contextType() {
									return ny;
								}
							};
						return Iy(o, n);
					},
					Ly = Py("ion-button", kv),
					Ry = Py("ion-card", Ev),
					Oy = Py("ion-fab-button", Cv),
					Ny = Py("ion-item", $v),
					_y = F.createContext({
						addOverlay: () => {},
						removeOverlay: () => {},
					}),
					Dy = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
						const [n, o] = H.useState({}),
							i = H.useRef({});
						H.useEffect(() => {
							e(r), t(a);
						}, []);
						const r = (e, t, n) => {
								const r = Object.assign({}, i.current);
								(r[e] = { component: t, containerElement: n }),
									(i.current = r),
									o(r);
							},
							a = (e) => {
								const t = Object.assign({}, i.current);
								delete t[e], (i.current = t), o(t);
							},
							s = Object.keys(n);
						return F.createElement(
							F.Fragment,
							null,
							s.map((e) => {
								const t = n[e];
								return cu.createPortal(
									t.component,
									t.containerElement,
									`overlay-${e}`
								);
							})
						);
					},
					Ay = uy("ion-tab-button", void 0, void 0, Av),
					My = uy("ion-tab-bar", void 0, void 0, _v),
					By = uy("ion-router-outlet", void 0, void 0, Ov),
					jy = uy("ion-app", void 0, void 0, Lv),
					Vy = uy("ion-icon", void 0, void 0, Jv),
					Hy = (() =>
						class extends F.Component {
							constructor(e) {
								super(e),
									(this.ionContext = {
										addOverlay: (e, t, n) => {
											this.addOverlayCallback &&
												this.addOverlayCallback(e, t, n);
										},
										removeOverlay: (e) => {
											this.removeOverlayCallback &&
												this.removeOverlayCallback(e);
										},
									});
							}
							render() {
								return F.createElement(
									_y.Provider,
									{ value: this.ionContext },
									F.createElement(
										jy,
										Object.assign({}, this.props),
										this.props.children
									),
									F.createElement(Dy, {
										onAddOverlay: (e) => {
											this.addOverlayCallback = e;
										},
										onRemoveOverlay: (e) => {
											this.removeOverlayCallback = e;
										},
									})
								);
							}
							static get displayName() {
								return "IonApp";
							}
						})(),
					Fy = F.createContext({
						registerIonPage: () => {},
						isInOutlet: () => !1,
					});
				class Wy extends F.PureComponent {
					constructor(e) {
						super(e),
							(this.ionPageElementRef = F.createRef()),
							(this.stableMergedRefs = dy(
								this.ionPageElementRef,
								this.props.forwardedRef
							)),
							(this.ionViewWillEnterHandler =
								this.ionViewWillEnterHandler.bind(this)),
							(this.ionViewDidEnterHandler =
								this.ionViewDidEnterHandler.bind(this)),
							(this.ionViewWillLeaveHandler =
								this.ionViewWillLeaveHandler.bind(this)),
							(this.ionViewDidLeaveHandler =
								this.ionViewDidLeaveHandler.bind(this));
					}
					componentDidMount() {
						this.ionPageElementRef.current &&
							(this.context.isInOutlet() &&
								this.ionPageElementRef.current.classList.add(
									"ion-page-invisible"
								),
							this.context.registerIonPage(
								this.ionPageElementRef.current,
								this.props.routeInfo
							),
							this.ionPageElementRef.current.addEventListener(
								"ionViewWillEnter",
								this.ionViewWillEnterHandler
							),
							this.ionPageElementRef.current.addEventListener(
								"ionViewDidEnter",
								this.ionViewDidEnterHandler
							),
							this.ionPageElementRef.current.addEventListener(
								"ionViewWillLeave",
								this.ionViewWillLeaveHandler
							),
							this.ionPageElementRef.current.addEventListener(
								"ionViewDidLeave",
								this.ionViewDidLeaveHandler
							));
					}
					componentWillUnmount() {
						this.ionPageElementRef.current &&
							(this.ionPageElementRef.current.removeEventListener(
								"ionViewWillEnter",
								this.ionViewWillEnterHandler
							),
							this.ionPageElementRef.current.removeEventListener(
								"ionViewDidEnter",
								this.ionViewDidEnterHandler
							),
							this.ionPageElementRef.current.removeEventListener(
								"ionViewWillLeave",
								this.ionViewWillLeaveHandler
							),
							this.ionPageElementRef.current.removeEventListener(
								"ionViewDidLeave",
								this.ionViewDidLeaveHandler
							));
					}
					ionViewWillEnterHandler() {
						this.ionLifeCycleContext.ionViewWillEnter();
					}
					ionViewDidEnterHandler() {
						this.ionLifeCycleContext.ionViewDidEnter();
					}
					ionViewWillLeaveHandler() {
						this.ionLifeCycleContext.ionViewWillLeave();
					}
					ionViewDidLeaveHandler() {
						this.ionLifeCycleContext.ionViewDidLeave();
					}
					render() {
						const e = this.props,
							{ className: t, children: n, routeInfo: o, forwardedRef: i } = e,
							r = Pg(e, ["className", "children", "routeInfo", "forwardedRef"]);
						return F.createElement(
							ey.Consumer,
							null,
							(e) => (
								(this.ionLifeCycleContext = e),
								F.createElement(
									"div",
									Object.assign(
										{
											className: t ? `${t} ion-page` : "ion-page",
											ref: this.stableMergedRefs,
										},
										r
									),
									n
								)
							)
						);
					}
					static get contextType() {
						return Fy;
					}
				}
				class Uy extends F.Component {
					constructor(e) {
						super(e);
					}
					render() {
						const e = this.props,
							{ className: t, children: n, forwardedRef: o } = e,
							i = Pg(e, ["className", "children", "forwardedRef"]);
						return this.context.hasIonicRouter()
							? F.createElement(
									Wy,
									Object.assign(
										{
											className: t ? `${t}` : "",
											routeInfo: this.context.routeInfo,
											forwardedRef: o,
										},
										i
									),
									n
							  )
							: F.createElement(
									"div",
									Object.assign(
										{ className: t ? `ion-page ${t}` : "ion-page", ref: o },
										i
									),
									n
							  );
					}
					static get displayName() {
						return "IonPage";
					}
					static get contextType() {
						return ny;
					}
				}
				const Xy = Iy(Uy, "IonPage"),
					qy = { main: 0 },
					Yy = (e = "main") => {
						var t;
						const n = (null !== (t = qy[e]) && void 0 !== t ? t : 0) + 1;
						return (qy[e] = n), n.toString();
					},
					Gy = uy("ion-nav", void 0, void 0, tv);
				Iy((e) => {
					var { children: t, forwardedRef: n } = e,
						o = Pg(e, ["children", "forwardedRef"]);
					const [i, r] = H.useState([]),
						a = (e) => r((t) => [...t, e]),
						s = (e) => r((t) => t.filter((t) => t !== e)),
						l = H.useMemo(
							() =>
								((e, t) => {
									const n = new WeakMap(),
										o = `react-delegate-${Yy()}`;
									let i = 0;
									return {
										attachViewToDom: async (t, r, a, s) => {
											const l = document.createElement("div");
											s && l.classList.add(...s), t.appendChild(l);
											const c = r(a),
												d = `${o}-${i++}`,
												u = lu.createPortal(c, l, d);
											return n.set(l, u), e(u), Promise.resolve(l);
										},
										removeViewFromDom: (e, o) => {
											const i = n.get(o);
											return i && t(i), o.remove(), Promise.resolve();
										},
									};
								})(a, s),
							[]
						);
					return F.createElement(
						Gy,
						Object.assign({ delegate: l, ref: n }, o),
						i
					);
				}, "IonNav");
				const Qy = F.createContext({ activeTab: void 0, selectTab: () => !1 }),
					Ky = "undefined" != typeof HTMLElement ? HTMLElement : class {};
				class Zy extends F.Component {
					constructor(e) {
						super(e),
							(this.outletIsReady = !1),
							(this.ionViewWillEnterHandler =
								this.ionViewWillEnterHandler.bind(this)),
							(this.ionViewDidEnterHandler =
								this.ionViewDidEnterHandler.bind(this)),
							(this.ionViewWillLeaveHandler =
								this.ionViewWillLeaveHandler.bind(this)),
							(this.ionViewDidLeaveHandler =
								this.ionViewDidLeaveHandler.bind(this));
					}
					componentDidMount() {
						this.ionRouterOutlet &&
							(this.outletIsReady ||
								dm(this.ionRouterOutlet, () => {
									(this.outletIsReady = !0),
										this.context.registerIonPage(
											this.ionRouterOutlet,
											this.props.routeInfo
										);
								}),
							this.ionRouterOutlet.addEventListener(
								"ionViewWillEnter",
								this.ionViewWillEnterHandler
							),
							this.ionRouterOutlet.addEventListener(
								"ionViewDidEnter",
								this.ionViewDidEnterHandler
							),
							this.ionRouterOutlet.addEventListener(
								"ionViewWillLeave",
								this.ionViewWillLeaveHandler
							),
							this.ionRouterOutlet.addEventListener(
								"ionViewDidLeave",
								this.ionViewDidLeaveHandler
							));
					}
					componentWillUnmount() {
						this.ionRouterOutlet &&
							(this.ionRouterOutlet.removeEventListener(
								"ionViewWillEnter",
								this.ionViewWillEnterHandler
							),
							this.ionRouterOutlet.removeEventListener(
								"ionViewDidEnter",
								this.ionViewDidEnterHandler
							),
							this.ionRouterOutlet.removeEventListener(
								"ionViewWillLeave",
								this.ionViewWillLeaveHandler
							),
							this.ionRouterOutlet.removeEventListener(
								"ionViewDidLeave",
								this.ionViewDidLeaveHandler
							));
					}
					ionViewWillEnterHandler() {
						this.ionLifeCycleContext.ionViewWillEnter();
					}
					ionViewDidEnterHandler() {
						this.ionLifeCycleContext.ionViewDidEnter();
					}
					ionViewWillLeaveHandler() {
						this.ionLifeCycleContext.ionViewWillLeave();
					}
					ionViewDidLeaveHandler() {
						this.ionLifeCycleContext.ionViewDidLeave();
					}
					render() {
						const e = this.props,
							{ StackManager: t, children: n, routeInfo: o } = e,
							i = Pg(e, ["StackManager", "children", "routeInfo"]);
						return F.createElement(
							ey.Consumer,
							null,
							(e) => (
								(this.ionLifeCycleContext = e),
								F.createElement(
									t,
									{ routeInfo: o },
									F.createElement(
										By,
										Object.assign(
											{ setRef: (e) => (this.ionRouterOutlet = e) },
											i
										),
										n
									)
								)
							)
						);
					}
					static get contextType() {
						return Fy;
					}
				}
				class Jy extends F.Component {
					constructor(e) {
						super(e);
					}
					render() {
						const e = this.context.getStackManager(),
							t = this.props,
							{ children: n, forwardedRef: o } = t,
							i = Pg(t, ["children", "forwardedRef"]);
						return this.context.hasIonicRouter()
							? i.ionPage
								? F.createElement(
										Zy,
										Object.assign(
											{ StackManager: e, routeInfo: this.context.routeInfo },
											i
										),
										n
								  )
								: F.createElement(
										e,
										{ routeInfo: this.context.routeInfo },
										F.createElement(
											By,
											Object.assign({}, i, { forwardedRef: o }),
											n
										)
								  )
							: F.createElement(
									By,
									Object.assign({ ref: o }, this.props),
									this.props.children
							  );
					}
					static get contextType() {
						return ny;
					}
				}
				const ew = Iy(Jy, "IonRouterOutlet"),
					tw = (() =>
						class extends F.Component {
							constructor(e) {
								super(e),
									(this.handleIonTabButtonClick =
										this.handleIonTabButtonClick.bind(this));
							}
							handleIonTabButtonClick() {
								this.props.onClick &&
									this.props.onClick(
										new CustomEvent("ionTabButtonClick", {
											detail: {
												tab: this.props.tab,
												href: this.props.href,
												routeOptions: this.props.routerOptions,
											},
										})
									);
							}
							render() {
								const e = Pg(this.props, ["onClick"]);
								return F.createElement(
									Ay,
									Object.assign(
										{ onIonTabButtonClick: this.handleIonTabButtonClick },
										e
									)
								);
							}
							static get displayName() {
								return "IonTabButton";
							}
						})();
				class nw extends F.PureComponent {
					constructor(e) {
						super(e), (this.setActiveTabOnContext = (e) => {});
						const t = {};
						F.Children.forEach(e.children, (n) => {
							var o, i, r, a;
							null != n &&
								"object" == typeof n &&
								n.props &&
								(n.type === tw || n.type.isTabButton) &&
								(t[n.props.tab] = {
									originalHref: n.props.href,
									currentHref: n.props.href,
									originalRouteOptions:
										n.props.href ===
										(null === (o = e.routeInfo) || void 0 === o
											? void 0
											: o.pathname)
											? null === (i = e.routeInfo) || void 0 === i
												? void 0
												: i.routeOptions
											: void 0,
									currentRouteOptions:
										n.props.href ===
										(null === (r = e.routeInfo) || void 0 === r
											? void 0
											: r.pathname)
											? null === (a = e.routeInfo) || void 0 === a
												? void 0
												: a.routeOptions
											: void 0,
								});
						}),
							(this.state = { tabs: t }),
							(this.onTabButtonClick = this.onTabButtonClick.bind(this)),
							(this.renderTabButton = this.renderTabButton.bind(this)),
							(this.setActiveTabOnContext =
								this.setActiveTabOnContext.bind(this)),
							(this.selectTab = this.selectTab.bind(this));
					}
					componentDidMount() {
						const e = this.state.tabs,
							t = Object.keys(e).find((t) => {
								const n = e[t].originalHref;
								return this.props.routeInfo.pathname.startsWith(n);
							});
						t && this.setState({ activeTab: t });
					}
					componentDidUpdate() {
						this.state.activeTab &&
							this.setActiveTabOnContext(this.state.activeTab);
					}
					selectTab(e) {
						const t = this.state.tabs[e];
						return (
							!!t &&
							(this.onTabButtonClick(
								new CustomEvent("ionTabButtonClick", {
									detail: {
										href: t.currentHref,
										tab: e,
										selected: e === this.state.activeTab,
										routeOptions: void 0,
									},
								})
							),
							!0)
						);
					}
					static getDerivedStateFromProps(e, t) {
						var n, o, i;
						const r = Object.assign({}, t.tabs),
							a = Object.keys(t.tabs).find((n) => {
								const o = t.tabs[n].originalHref;
								return e.routeInfo.pathname.startsWith(o);
							});
						F.Children.forEach(e.children, (e) => {
							if (
								null != e &&
								"object" == typeof e &&
								e.props &&
								(e.type === tw || e.type.isTabButton)
							) {
								const t = r[e.props.tab];
								(t && t.originalHref === e.props.href) ||
									(r[e.props.tab] = {
										originalHref: e.props.href,
										currentHref: e.props.href,
										originalRouteOptions: e.props.routeOptions,
										currentRouteOptions: e.props.routeOptions,
									});
							}
						});
						const { activeTab: s } = t;
						if (a && s) {
							const l = t.tabs[s].currentHref,
								c = t.tabs[s].currentRouteOptions;
							(a === s &&
								l ===
									(null === (n = e.routeInfo) || void 0 === n
										? void 0
										: n.pathname) &&
								c ===
									(null === (o = e.routeInfo) || void 0 === o
										? void 0
										: o.routeOptions)) ||
								((r[a] = {
									originalHref: r[a].originalHref,
									currentHref:
										e.routeInfo.pathname + (e.routeInfo.search || ""),
									originalRouteOptions: r[a].originalRouteOptions,
									currentRouteOptions:
										null === (i = e.routeInfo) || void 0 === i
											? void 0
											: i.routeOptions,
								}),
								"pop" === e.routeInfo.routeAction &&
									a !== s &&
									(r[s] = {
										originalHref: r[s].originalHref,
										currentHref: r[s].originalHref,
										originalRouteOptions: r[s].originalRouteOptions,
										currentRouteOptions: r[s].currentRouteOptions,
									}));
						}
						return (
							a && e.onSetCurrentTab(a, e.routeInfo), { activeTab: a, tabs: r }
						);
					}
					onTabButtonClick(e, t) {
						const n = this.state.tabs[e.detail.tab],
							o = n.originalHref,
							i = e.detail.href,
							{ activeTab: r } = this.state;
						t && t(e),
							r === e.detail.tab
								? o !== i &&
								  this.context.resetTab(e.detail.tab, o, n.originalRouteOptions)
								: (this.props.onIonTabsWillChange &&
										this.props.onIonTabsWillChange(
											new CustomEvent("ionTabWillChange", {
												detail: { tab: e.detail.tab },
											})
										),
								  this.props.onIonTabsDidChange &&
										this.props.onIonTabsDidChange(
											new CustomEvent("ionTabDidChange", {
												detail: { tab: e.detail.tab },
											})
										),
								  this.setActiveTabOnContext(e.detail.tab),
								  this.context.changeTab(
										e.detail.tab,
										i,
										e.detail.routeOptions
								  ));
					}
					renderTabButton(e) {
						return (t) => {
							var n, o;
							if (
								null != t &&
								t.props &&
								(t.type === tw || t.type.isTabButton)
							) {
								const i =
										t.props.tab === e
											? null === (n = this.props.routeInfo) || void 0 === n
												? void 0
												: n.pathname
											: this.state.tabs[t.props.tab].currentHref,
									r =
										t.props.tab === e
											? null === (o = this.props.routeInfo) || void 0 === o
												? void 0
												: o.routeOptions
											: this.state.tabs[t.props.tab].currentRouteOptions;
								return F.cloneElement(t, {
									href: i,
									routeOptions: r,
									onClick: (e) => this.onTabButtonClick(e, t.props.onClick),
								});
							}
							return null;
						};
					}
					render() {
						const { activeTab: e } = this.state;
						return F.createElement(
							My,
							Object.assign({}, this.props, { selectedTab: e }),
							F.Children.map(this.props.children, this.renderTabButton(e))
						);
					}
					static get contextType() {
						return ny;
					}
				}
				const ow = F.memo((e) => {
						var { forwardedRef: t } = e,
							n = Pg(e, ["forwardedRef"]);
						const o = H.useContext(ny);
						return F.createElement(
							nw,
							Object.assign({ ref: t }, n, {
								routeInfo: n.routeInfo ||
									o.routeInfo || { pathname: window.location.pathname },
								onSetCurrentTab: o.setCurrentTab,
							}),
							n.children
						);
					}),
					iw = Iy(ow, "IonTabBar");
				class rw extends Ky {
					constructor() {
						super();
					}
				}
				if ("undefined" != typeof window && window.customElements) {
					window.customElements.get("ion-tabs") ||
						window.customElements.define("ion-tabs", rw);
				}
				const aw = {
						display: "flex",
						position: "absolute",
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						contain: "layout size style",
					},
					sw = { position: "relative", flex: 1, contain: "layout size style" },
					lw = (() =>
						class extends F.Component {
							constructor(e) {
								super(e),
									(this.routerOutletRef = F.createRef()),
									(this.tabBarRef = F.createRef()),
									(this.ionTabContextState = {
										activeTab: void 0,
										selectTab: () => !1,
									});
							}
							componentDidMount() {
								this.tabBarRef.current &&
									((this.ionTabContextState.activeTab =
										this.tabBarRef.current.state.activeTab),
									(this.tabBarRef.current.setActiveTabOnContext = (e) => {
										this.ionTabContextState.activeTab = e;
									}),
									(this.ionTabContextState.selectTab =
										this.tabBarRef.current.selectTab));
							}
							render() {
								let e, t;
								const n = this.props,
									{
										className: o,
										onIonTabsDidChange: i,
										onIonTabsWillChange: r,
									} = n,
									a = Pg(n, [
										"className",
										"onIonTabsDidChange",
										"onIonTabsWillChange",
									]),
									s =
										"function" == typeof this.props.children
											? this.props.children(this.ionTabContextState)
											: this.props.children;
								if (
									(F.Children.forEach(s, (n) => {
										if (
											null == n ||
											"object" != typeof n ||
											!n.hasOwnProperty("type")
										)
											return;
										n.type === ew || n.type.isRouterOutlet
											? (e = F.cloneElement(n))
											: n.type === H.Fragment &&
											  n.props.children[0].type === ew &&
											  (e = n.props.children[0]);
										let o = { ref: this.tabBarRef };
										void 0 !== i &&
											(o = Object.assign(Object.assign({}, o), {
												onIonTabsDidChange: i,
											})),
											void 0 !== r &&
												(o = Object.assign(Object.assign({}, o), {
													onIonTabsWillChange: r,
												})),
											n.type === iw || n.type.isTabBar
												? (t = F.cloneElement(n, o))
												: n.type !== H.Fragment ||
												  (n.props.children[1].type !== iw &&
														!n.props.children[1].type.isTabBar) ||
												  (t = F.cloneElement(n.props.children[1], o));
									}),
									!e)
								)
									throw new Error("IonTabs must contain an IonRouterOutlet");
								if (!t) throw new Error("IonTabs needs a IonTabBar");
								return F.createElement(
									Qy.Provider,
									{ value: this.ionTabContextState },
									this.context.hasIonicRouter()
										? F.createElement(
												Wy,
												Object.assign(
													{
														className: o ? `${o}` : "",
														routeInfo: this.context.routeInfo,
													},
													a
												),
												F.createElement(
													"ion-tabs",
													{ className: "ion-tabs", style: aw },
													"top" === t.props.slot ? t : null,
													F.createElement(
														"div",
														{ style: sw, className: "tabs-inner" },
														e
													),
													"bottom" === t.props.slot ? t : null
												)
										  )
										: F.createElement(
												"div",
												Object.assign(
													{ className: o ? `${o}` : "ion-tabs" },
													a,
													{ style: aw }
												),
												"top" === t.props.slot ? t : null,
												F.createElement(
													"div",
													{ style: sw, className: "tabs-inner" },
													e
												),
												"bottom" === t.props.slot ? t : null
										  )
								);
							}
							static get contextType() {
								return ny;
							}
						})();
				class cw extends F.PureComponent {
					constructor(e) {
						super(e),
							this.props.name &&
								console.warn(
									'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
								);
					}
					render() {
						var e, t;
						const n = this.props,
							{ icon: o, ios: i, md: r, mode: a } = n,
							s = Pg(n, ["icon", "ios", "md", "mode"]);
						let l;
						const c = Ty(),
							d = a || (null == c ? void 0 : c.get("mode"));
						return (
							(l =
								i || r
									? "ios" === d
										? null !== (e = null != i ? i : r) && void 0 !== e
											? e
											: o
										: null !== (t = null != r ? r : i) && void 0 !== t
										? t
										: o
									: o),
							F.createElement(
								Vy,
								Object.assign({ ref: this.props.forwardedRef, icon: l }, s),
								this.props.children
							)
						);
					}
					static get contextType() {
						return ny;
					}
				}
				const dw = Iy(cw, "IonIcon");
				class uw extends F.PureComponent {
					render() {
						const e = this.context.getIonRoute();
						return this.context.hasIonicRouter() && uw
							? F.createElement(e, Object.assign({}, this.props))
							: (console.error(
									"You either do not have an Ionic Router package, or your router does not support using <IonRoute>"
							  ),
							  null);
					}
					static get contextType() {
						return ny;
					}
				}
				F.PureComponent;
				const hw = F.createContext({
					routeInfo: void 0,
					push: () => {
						throw new Error("An Ionic Router is required for IonRouterContext");
					},
					back: () => {
						throw new Error("An Ionic Router is required for IonRouterContext");
					},
					canGoBack: () => {
						throw new Error("An Ionic Router is required for IonRouterContext");
					},
					nativeBack: () => {
						throw new Error("An Ionic Router is required for IonRouterContext");
					},
				});
				F.PureComponent;
				const fw = F.createContext({
					addViewItem: () => {},
					canGoBack: () => {},
					clearOutlet: () => {},
					createViewItem: () => {},
					findViewItemByPathname: () => {},
					findLeavingViewItemByRouteInfo: () => {},
					findViewItemByRouteInfo: () => {},
					getChildrenToRender: () => {},
					goBack: () => {},
					unMountViewItem: () => {},
				});
				class pw extends F.Component {
					constructor(e) {
						super(e),
							(this.ionLifeCycleContext = new ty()),
							(this._isMounted = !1),
							this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
								this.props.mount ||
									(this._isMounted &&
										this.setState({ show: !1 }, () => this.props.removeView()));
							}),
							(this.state = { show: !0 });
					}
					componentDidMount() {
						this._isMounted = !0;
					}
					componentWillUnmount() {
						this._isMounted = !1;
					}
					render() {
						const { show: e } = this.state;
						return F.createElement(
							ey.Provider,
							{ value: this.ionLifeCycleContext },
							e && this.props.children
						);
					}
				}
				class mw {
					constructor() {
						(this.locationHistory = []), (this.tabHistory = {});
					}
					add(e) {
						"push" === e.routeAction || null == e.routeAction
							? this._add(e)
							: "pop" === e.routeAction
							? this._pop(e)
							: "replace" === e.routeAction && this._replace(e),
							"root" === e.routeDirection && (this._clear(), this._add(e));
					}
					clearTabStack(e) {
						const t = this._getRouteInfosByKey(e);
						t &&
							(t.forEach((e) => {
								this.locationHistory = this.locationHistory.filter(
									(t) => t.id !== e.id
								);
							}),
							(this.tabHistory[e] = []));
					}
					update(e) {
						const t = this.locationHistory.findIndex((t) => t.id === e.id);
						t > -1 && this.locationHistory.splice(t, 1, e);
						const n = this.tabHistory[e.tab || ""];
						if (n) {
							const t = n.findIndex((t) => t.id === e.id);
							t > -1 ? n.splice(t, 1, e) : n.push(e);
						} else e.tab && (this.tabHistory[e.tab] = [e]);
					}
					_add(e) {
						const t = this._getRouteInfosByKey(e.tab);
						t &&
							(this._areRoutesEqual(t[t.length - 1], e) && t.pop(), t.push(e)),
							this.locationHistory.push(e);
					}
					_areRoutesEqual(e, t) {
						return (
							!(!e || !t) && e.pathname === t.pathname && e.search === t.search
						);
					}
					_pop(e) {
						const t = this._getRouteInfosByKey(e.tab);
						t && (t.pop(), t.pop(), t.push(e)),
							this.locationHistory.pop(),
							this.locationHistory.pop(),
							this.locationHistory.push(e);
					}
					_replace(e) {
						const t = this._getRouteInfosByKey(e.tab);
						t && t.pop(), this.locationHistory.pop(), this._add(e);
					}
					_clear() {
						Object.keys(this.tabHistory).forEach(
							(e) => (this.tabHistory[e] = [])
						),
							(this.locationHistory = []);
					}
					_getRouteInfosByKey(e) {
						let t;
						return (
							e &&
								((t = this.tabHistory[e]), t || (t = this.tabHistory[e] = [])),
							t
						);
					}
					getFirstRouteInfoForTab(e) {
						const t = this._getRouteInfosByKey(e);
						if (t) return t[0];
					}
					getCurrentRouteInfoForTab(e) {
						const t = this._getRouteInfosByKey(e);
						if (t) return t[t.length - 1];
					}
					findLastLocation(e) {
						const t = this._getRouteInfosByKey(e.tab);
						if (t)
							for (let n = t.length - 2; n >= 0; n--) {
								const o = t[n];
								if (o && o.pathname === e.pushedByRoute) return o;
							}
						for (let n = this.locationHistory.length - 2; n >= 0; n--) {
							const t = this.locationHistory[n];
							if (t && t.pathname === e.pushedByRoute) return t;
						}
					}
					previous() {
						return (
							this.locationHistory[this.locationHistory.length - 2] ||
							this.locationHistory[this.locationHistory.length - 1]
						);
					}
					current() {
						return this.locationHistory[this.locationHistory.length - 1];
					}
					canGoBack() {
						return this.locationHistory.length > 1;
					}
				}
				class gw extends F.PureComponent {
					constructor(e) {
						super(e),
							(this.ionRouterContextValue = {
								push: (e, t, n, o, i) => {
									this.navigate(e, t, n, i, o);
								},
								back: (e) => {
									this.goBack(void 0, e);
								},
								canGoBack: () => this.props.locationHistory.canGoBack(),
								nativeBack: () => this.props.onNativeBack(),
								routeInfo: this.props.routeInfo,
							}),
							(this.state = {
								goBack: this.goBack.bind(this),
								hasIonicRouter: () => !0,
								navigate: this.navigate.bind(this),
								getIonRedirect: this.getIonRedirect.bind(this),
								getIonRoute: this.getIonRoute.bind(this),
								getStackManager: this.getStackManager.bind(this),
								getPageManager: this.getPageManager.bind(this),
								routeInfo: this.props.routeInfo,
								setCurrentTab: this.props.onSetCurrentTab,
								changeTab: this.props.onChangeTab,
								resetTab: this.props.onResetTab,
							});
					}
					componentDidMount() {
						"undefined" != typeof document &&
							((this.handleHardwareBackButton =
								this.handleHardwareBackButton.bind(this)),
							document.addEventListener(
								"ionBackButton",
								this.handleHardwareBackButton
							));
					}
					componentWillUnmount() {
						"undefined" != typeof document &&
							document.removeEventListener(
								"ionBackButton",
								this.handleHardwareBackButton
							);
					}
					handleHardwareBackButton(e) {
						e.detail.register(0, (e) => {
							this.nativeGoBack(), e();
						});
					}
					goBack(e, t) {
						this.props.onNavigateBack(e, t);
					}
					nativeGoBack() {
						this.props.onNativeBack();
					}
					navigate(e, t = "forward", n = "push", o, i, r) {
						this.props.onNavigate(e, n, t, o, i, r);
					}
					getPageManager() {
						return Wy;
					}
					getIonRedirect() {
						return this.props.ionRedirect;
					}
					getIonRoute() {
						return this.props.ionRoute;
					}
					getStackManager() {
						return this.props.stackManager;
					}
					render() {
						return F.createElement(
							ny.Provider,
							{
								value: Object.assign(Object.assign({}, this.state), {
									routeInfo: this.props.routeInfo,
								}),
							},
							F.createElement(
								hw.Provider,
								{
									value: Object.assign(
										Object.assign({}, this.ionRouterContextValue),
										{ routeInfo: this.props.routeInfo }
									),
								},
								this.props.children
							)
						);
					}
				}
				class bw {
					constructor() {
						(this.viewStacks = {}),
							(this.add = this.add.bind(this)),
							(this.clear = this.clear.bind(this)),
							(this.getViewItemsForOutlet =
								this.getViewItemsForOutlet.bind(this)),
							(this.remove = this.remove.bind(this));
					}
					add(e) {
						const { outletId: t } = e;
						this.viewStacks[t]
							? this.viewStacks[t].push(e)
							: (this.viewStacks[t] = [e]);
					}
					clear(e) {
						return setTimeout(() => {
							delete this.viewStacks[e];
						}, 500);
					}
					getViewItemsForOutlet(e) {
						return this.viewStacks[e] || [];
					}
					remove(e) {
						const { outletId: t } = e,
							n = this.viewStacks[t];
						if (n) {
							const o = n.find((t) => t.id === e.id);
							o &&
								((o.mount = !1),
								(this.viewStacks[t] = n.filter((e) => e.id !== o.id)));
						}
					}
					getStackIds() {
						return Object.keys(this.viewStacks);
					}
					getAllViewItems() {
						const e = this.getStackIds(),
							t = [];
						return (
							e.forEach((e) => {
								t.push(...this.viewStacks[e]);
							}),
							t
						);
					}
				}
				class vw extends F.PureComponent {
					render() {
						return F.createElement(
							kf,
							Object.assign(
								{
									path: this.props.path,
									exact: this.props.exact,
									render: this.props.render,
								},
								void 0 !== this.props.computedMatch
									? { computedMatch: this.props.computedMatch }
									: {}
							)
						);
					}
				}
				class yw extends bw {
					constructor() {
						super(),
							(this.createViewItem = this.createViewItem.bind(this)),
							(this.findViewItemByRouteInfo =
								this.findViewItemByRouteInfo.bind(this)),
							(this.findLeavingViewItemByRouteInfo =
								this.findLeavingViewItemByRouteInfo.bind(this)),
							(this.getChildrenToRender = this.getChildrenToRender.bind(this)),
							(this.findViewItemByPathname =
								this.findViewItemByPathname.bind(this));
					}
					createViewItem(e, t, n, o) {
						const i = {
								id: Yy("viewItem"),
								outletId: e,
								ionPageElement: o,
								reactElement: t,
								mount: !0,
								ionRoute: !1,
							},
							r = {
								exact: t.props.exact,
								path: t.props.path || t.props.from,
								component: t.props.component,
							},
							a = xf(n.pathname, r);
						return (
							t.type === uw &&
								((i.ionRoute = !0),
								(i.disableIonPageManagement =
									t.props.disableIonPageManagement)),
							(i.routeData = { match: a, childProps: t.props }),
							i
						);
					}
					getChildrenToRender(e, t, n) {
						const o = this.getViewItemsForOutlet(e);
						F.Children.forEach(t.props.children, (e) => {
							const t = o.find((t) =>
								ww(
									e,
									t.routeData.childProps.path || t.routeData.childProps.from
								)
							);
							t && (t.reactElement = e);
						});
						return o.map((e) => {
							let t;
							if (e.ionRoute && !e.disableIonPageManagement)
								t = F.createElement(
									pw,
									{
										key: `view-${e.id}`,
										mount: e.mount,
										removeView: () => this.remove(e),
									},
									F.cloneElement(e.reactElement, {
										computedMatch: e.routeData.match,
									})
								);
							else {
								const o = ww(e.reactElement, n.pathname);
								(t = F.createElement(
									pw,
									{
										key: `view-${e.id}`,
										mount: e.mount,
										removeView: () => this.remove(e),
									},
									F.cloneElement(e.reactElement, {
										computedMatch: e.routeData.match,
									})
								)),
									!o &&
										e.routeData.match &&
										((e.routeData.match = void 0), (e.mount = !1));
							}
							return t;
						});
					}
					findViewItemByRouteInfo(e, t, n) {
						const { viewItem: o, match: i } = this.findViewItemByPath(
							e.pathname,
							t
						);
						return (
							(void 0 === n || !0 === n) && o && i && (o.routeData.match = i), o
						);
					}
					findLeavingViewItemByRouteInfo(e, t, n = !0) {
						const { viewItem: o } = this.findViewItemByPath(
							e.lastPathname,
							t,
							!1,
							n
						);
						return o;
					}
					findViewItemByPathname(e, t) {
						const { viewItem: n } = this.findViewItemByPath(e, t);
						return n;
					}
					findViewItemByPath(e, t, n, o) {
						let i, r, a;
						if (t)
							(a = this.getViewItemsForOutlet(t)), a.some(s), i || a.some(l);
						else {
							const e = this.getAllViewItems();
							e.some(s), i || e.some(l);
						}
						return { viewItem: i, match: r };
						function s(t) {
							if (o && !t.ionRoute) return !1;
							const a = {
									exact: !!n || t.routeData.childProps.exact,
									path:
										t.routeData.childProps.path || t.routeData.childProps.from,
									component: t.routeData.childProps.component,
								},
								s = xf(e, a);
							return !!s && ((i = t), (r = s), !0);
						}
						function l(t) {
							return (
								!t.routeData.childProps.path &&
								!t.routeData.childProps.from &&
								((r = { path: e, url: e, isExact: !0, params: {} }),
								(i = t),
								!0)
							);
						}
					}
				}
				function ww(e, t, n) {
					return xf(t, {
						exact: !!n || e.props.exact,
						path: e.props.path || e.props.from,
						component: e.props.component,
					});
				}
				const xw = (e) =>
					!e.classList.contains("ion-page-invisible") &&
					!e.classList.contains("ion-page-hidden");
				class kw extends F.PureComponent {
					constructor(e) {
						super(e),
							(this.stackContextValue = {
								registerIonPage: this.registerIonPage.bind(this),
								isInOutlet: () => !0,
							}),
							(this.pendingPageTransition = !1),
							(this.registerIonPage = this.registerIonPage.bind(this)),
							(this.transitionPage = this.transitionPage.bind(this)),
							(this.handlePageTransition =
								this.handlePageTransition.bind(this)),
							(this.id = Yy("routerOutlet")),
							(this.prevProps = void 0),
							(this.skipTransition = !1);
					}
					componentDidMount() {
						this.clearOutletTimeout && clearTimeout(this.clearOutletTimeout),
							this.routerOutletElement &&
								(this.setupRouterOutlet(this.routerOutletElement),
								this.handlePageTransition(this.props.routeInfo));
					}
					componentDidUpdate(e) {
						const { pathname: t } = this.props.routeInfo,
							{ pathname: n } = e.routeInfo;
						t !== n
							? ((this.prevProps = e),
							  this.handlePageTransition(this.props.routeInfo))
							: this.pendingPageTransition &&
							  (this.handlePageTransition(this.props.routeInfo),
							  (this.pendingPageTransition = !1));
					}
					componentWillUnmount() {
						this.clearOutletTimeout = this.context.clearOutlet(this.id);
					}
					async handlePageTransition(e) {
						var t, n;
						if (this.routerOutletElement && this.routerOutletElement.commit) {
							let o = this.context.findViewItemByRouteInfo(e, this.id),
								i = this.context.findLeavingViewItemByRouteInfo(e, this.id);
							!i &&
								e.prevRouteLastPathname &&
								(i = this.context.findViewItemByPathname(
									e.prevRouteLastPathname,
									this.id
								)),
								i &&
									("replace" === e.routeAction
										? (i.mount = !1)
										: "push" !== e.routeAction || "forward" !== e.routeDirection
										? "none" !== e.routeDirection && o !== i && (i.mount = !1)
										: (null === (t = e.routeOptions) || void 0 === t
												? void 0
												: t.unmount) && (i.mount = !1));
							const r = (function (e, t) {
								let n;
								if (
									(F.Children.forEach(e, (e) => {
										const o = {
											exact: e.props.exact,
											path: e.props.path || e.props.from,
											component: e.props.component,
										};
										xf(t.pathname, o) && (n = e);
									}),
									n)
								)
									return n;
								return (
									F.Children.forEach(e, (e) => {
										e.props.path || e.props.from || (n = e);
									}),
									n
								);
							})(
								null === (n = this.ionRouterOutlet) || void 0 === n
									? void 0
									: n.props.children,
								e
							);
							if (
								(o
									? (o.reactElement = r)
									: r &&
									  ((o = this.context.createViewItem(this.id, r, e)),
									  this.context.addViewItem(o)),
								o && o.ionPageElement)
							) {
								if (o === i && o.routeData.match.url !== e.pathname) return;
								if (
									(!i &&
										this.props.routeInfo.prevRouteLastPathname &&
										(i = this.context.findViewItemByPathname(
											this.props.routeInfo.prevRouteLastPathname,
											this.id
										)),
									xw(o.ionPageElement) && void 0 !== i && !xw(i.ionPageElement))
								)
									return;
								this.transitionPage(e, o, i);
							} else
								!i ||
									r ||
									o ||
									(i.ionPageElement &&
										(i.ionPageElement.classList.add("ion-page-hidden"),
										i.ionPageElement.setAttribute("aria-hidden", "true")));
							this.forceUpdate();
						} else this.pendingPageTransition = !0;
					}
					registerIonPage(e, t) {
						const n = this.context.findViewItemByRouteInfo(t, this.id);
						if (n) {
							const t = n.ionPageElement;
							if (((n.ionPageElement = e), (n.ionRoute = !0), t === e)) return;
						}
						this.handlePageTransition(t);
					}
					async setupRouterOutlet(e) {
						e.swipeHandler = {
							canStart: () => {
								const t = Ty();
								if (!(t && t.get("swipeBackEnabled", "ios" === e.mode)))
									return !1;
								const { routeInfo: n } = this.props,
									o =
										this.prevProps &&
										this.prevProps.routeInfo.pathname === n.pushedByRoute
											? this.prevProps.routeInfo
											: { pathname: n.pushedByRoute || "" },
									i = this.context.findViewItemByRouteInfo(o, this.id, !1);
								return !!i && i.mount && i.routeData.match.path !== n.pathname;
							},
							onStart: async () => {
								const { routeInfo: e } = this.props,
									t =
										this.prevProps &&
										this.prevProps.routeInfo.pathname === e.pushedByRoute
											? this.prevProps.routeInfo
											: { pathname: e.pushedByRoute || "" },
									n = this.context.findViewItemByRouteInfo(t, this.id, !1),
									o = this.context.findViewItemByRouteInfo(e, this.id, !1);
								return (
									n && o && (await this.transitionPage(e, n, o, "back", !0)),
									Promise.resolve()
								);
							},
							onEnd: (e) => {
								if (e) (this.skipTransition = !0), this.context.goBack();
								else {
									const { routeInfo: e } = this.props,
										t =
											this.prevProps &&
											this.prevProps.routeInfo.pathname === e.pushedByRoute
												? this.prevProps.routeInfo
												: { pathname: e.pushedByRoute || "" },
										n = this.context.findViewItemByRouteInfo(t, this.id, !1);
									if (
										n !==
											this.context.findViewItemByRouteInfo(e, this.id, !1) &&
										void 0 !== (null == n ? void 0 : n.ionPageElement)
									) {
										const { ionPageElement: e } = n;
										e.setAttribute("aria-hidden", "true"),
											e.classList.add("ion-page-hidden");
									}
								}
							},
						};
					}
					async transitionPage(e, t, n, o, i = !1) {
						const r = async (t, n) => {
								const o = this.skipTransition;
								o
									? (this.skipTransition = !1)
									: (t.classList.add("ion-page"),
									  t.classList.add("ion-page-invisible")),
									await a.commit(t, n, {
										duration: o || void 0 === l ? 0 : void 0,
										direction: l,
										showGoBack: !!e.pushedByRoute,
										progressAnimation: i,
										animationBuilder: e.routeAnimation,
									});
							},
							a = this.routerOutletElement,
							s =
								"none" === e.routeDirection || "root" === e.routeDirection
									? void 0
									: e.routeDirection,
							l = null != o ? o : s;
						if (t && t.ionPageElement && this.routerOutletElement)
							if (n && n.ionPageElement && t === n) {
								if (
									(function (e, t, n) {
										const o = {
												exact: !!n || e.props.exact,
												path: e.props.path || e.props.from,
												component: e.props.component,
											},
											i = xf(t, o);
										return i;
									})(n.reactElement, e.pathname, !0)
								) {
									const e = (function (e) {
										let t;
										if (
											((t = "string" == typeof e ? e : e.outerHTML), document)
										) {
											const e = document.createElement("div");
											(e.innerHTML = t), (e.style.zIndex = "");
											const n = e.getElementsByTagName("ion-back-button");
											return n[0] && n[0].remove(), e.firstChild;
										}
									})(n.ionPageElement.outerHTML);
									e &&
										(this.routerOutletElement.appendChild(e),
										await r(t.ionPageElement, e),
										this.routerOutletElement.removeChild(e));
								} else await r(t.ionPageElement, void 0);
							} else
								await r(
									t.ionPageElement,
									null == n ? void 0 : n.ionPageElement
								),
									n &&
										n.ionPageElement &&
										!i &&
										(n.ionPageElement.classList.add("ion-page-hidden"),
										n.ionPageElement.setAttribute("aria-hidden", "true"));
					}
					render() {
						const { children: e } = this.props,
							t = F.Children.only(e);
						this.ionRouterOutlet = t;
						const n = this.context.getChildrenToRender(
							this.id,
							this.ionRouterOutlet,
							this.props.routeInfo,
							() => {
								this.forceUpdate();
							}
						);
						return F.createElement(
							Fy.Provider,
							{ value: this.stackContextValue },
							F.cloneElement(
								t,
								{
									ref: (e) => {
										t.props.setRef && t.props.setRef(e),
											t.props.forwardedRef &&
												(t.props.forwardedRef.current = e),
											(this.routerOutletElement = e);
										const { ref: n } = t;
										"function" == typeof n && n(e);
									},
								},
								n
							)
						);
					}
					static get contextType() {
						return fw;
					}
				}
				class Ew extends F.PureComponent {
					constructor(e) {
						super(e),
							(this.exitViewFromOtherOutletHandlers = []),
							(this.locationHistory = new mw()),
							(this.viewStack = new yw()),
							(this.routeMangerContextState = {
								canGoBack: () => this.locationHistory.canGoBack(),
								clearOutlet: this.viewStack.clear,
								findViewItemByPathname: this.viewStack.findViewItemByPathname,
								getChildrenToRender: this.viewStack.getChildrenToRender,
								goBack: () => this.handleNavigateBack(),
								createViewItem: this.viewStack.createViewItem,
								findViewItemByRouteInfo: this.viewStack.findViewItemByRouteInfo,
								findLeavingViewItemByRouteInfo:
									this.viewStack.findLeavingViewItemByRouteInfo,
								addViewItem: this.viewStack.add,
								unMountViewItem: this.viewStack.remove,
							});
						const t = {
							id: Yy("routeInfo"),
							pathname: this.props.location.pathname,
							search: this.props.location.search,
						};
						this.locationHistory.add(t),
							(this.handleChangeTab = this.handleChangeTab.bind(this)),
							(this.handleResetTab = this.handleResetTab.bind(this)),
							(this.handleNativeBack = this.handleNativeBack.bind(this)),
							(this.handleNavigate = this.handleNavigate.bind(this)),
							(this.handleNavigateBack = this.handleNavigateBack.bind(this)),
							this.props.registerHistoryListener(
								this.handleHistoryChange.bind(this)
							),
							(this.handleSetCurrentTab = this.handleSetCurrentTab.bind(this)),
							(this.state = { routeInfo: t });
					}
					handleChangeTab(e, t, n) {
						if (!t) return;
						const o = this.locationHistory.getCurrentRouteInfoForTab(e),
							[i, r] = t.split("?");
						o
							? ((this.incomingRouteParams = Object.assign(
									Object.assign({}, o),
									{ routeAction: "push", routeDirection: "none" }
							  )),
							  o.pathname === i
									? ((this.incomingRouteParams.routeOptions = n),
									  this.props.history.push(o.pathname + (o.search || "")))
									: ((this.incomingRouteParams.pathname = i),
									  (this.incomingRouteParams.search = r ? "?" + r : void 0),
									  (this.incomingRouteParams.routeOptions = n),
									  this.props.history.push(i + (r ? "?" + r : ""))))
							: this.handleNavigate(i, "push", "none", void 0, n, e);
					}
					handleHistoryChange(e, t) {
						var n, o, i;
						let r;
						r =
							this.incomingRouteParams &&
							"replace" === this.incomingRouteParams.routeAction
								? this.locationHistory.previous()
								: this.locationHistory.current();
						if (r.pathname + r.search !== e.pathname) {
							if (!this.incomingRouteParams) {
								if (
									("REPLACE" === t &&
										(this.incomingRouteParams = {
											routeAction: "replace",
											routeDirection: "none",
											tab: this.currentTab,
										}),
									"POP" === t)
								) {
									const e = this.locationHistory.current();
									if (e && e.pushedByRoute) {
										const t = this.locationHistory.findLastLocation(e);
										this.incomingRouteParams = Object.assign(
											Object.assign({}, t),
											{ routeAction: "pop", routeDirection: "back" }
										);
									} else
										this.incomingRouteParams = {
											routeAction: "pop",
											routeDirection: "none",
											tab: this.currentTab,
										};
								}
								this.incomingRouteParams ||
									(this.incomingRouteParams = {
										routeAction: "push",
										routeDirection:
											(null === (n = e.state) || void 0 === n
												? void 0
												: n.direction) || "forward",
										routeOptions:
											null === (o = e.state) || void 0 === o
												? void 0
												: o.routerOptions,
										tab: this.currentTab,
									});
							}
							let a;
							if (
								null === (i = this.incomingRouteParams) || void 0 === i
									? void 0
									: i.id
							)
								(a = Object.assign(
									Object.assign({}, this.incomingRouteParams),
									{ lastPathname: r.pathname }
								)),
									this.locationHistory.add(a);
							else {
								const t =
									"push" === this.incomingRouteParams.routeAction &&
									"forward" === this.incomingRouteParams.routeDirection;
								if (
									((a = Object.assign(
										Object.assign(
											{ id: Yy("routeInfo") },
											this.incomingRouteParams
										),
										{
											lastPathname: r.pathname,
											pathname: e.pathname,
											search: e.search,
											params: this.props.match.params,
											prevRouteLastPathname: r.lastPathname,
										}
									)),
									t)
								)
									(a.tab = r.tab), (a.pushedByRoute = r.pathname);
								else if ("pop" === a.routeAction) {
									const e = this.locationHistory.findLastLocation(a);
									a.pushedByRoute = null == e ? void 0 : e.pushedByRoute;
								} else if ("push" === a.routeAction && a.tab !== r.tab) {
									const e = this.locationHistory.getCurrentRouteInfoForTab(
										a.tab
									);
									a.pushedByRoute = null == e ? void 0 : e.pushedByRoute;
								} else if ("replace" === a.routeAction) {
									const e = this.locationHistory.current(),
										t = null == e ? void 0 : e.pushedByRoute,
										n = void 0 !== t && t !== a.pathname ? t : a.pushedByRoute;
									(a.lastPathname =
										(null == e ? void 0 : e.pathname) || a.lastPathname),
										(a.prevRouteLastPathname =
											null == e ? void 0 : e.lastPathname),
										(a.pushedByRoute = n),
										(a.routeDirection =
											(null == e ? void 0 : e.routeDirection) ||
											a.routeDirection),
										(a.routeAnimation =
											(null == e ? void 0 : e.routeAnimation) ||
											a.routeAnimation);
								}
								this.locationHistory.add(a);
							}
							this.setState({ routeInfo: a });
						}
						this.incomingRouteParams = void 0;
					}
					handleNativeBack() {
						const e = this.props.history;
						(e.goBack || e.back)();
					}
					handleNavigate(e, t, n, o, i, r) {
						(this.incomingRouteParams = Object.assign(
							this.incomingRouteParams || {},
							{
								routeAction: t,
								routeDirection: n,
								routeOptions: i,
								routeAnimation: o,
								tab: r,
							}
						)),
							"push" === t
								? this.props.history.push(e)
								: this.props.history.replace(e);
					}
					handleNavigateBack(e = "/", t) {
						const n = Ty();
						e = e || (n && n.get("backButtonDefaultHref"));
						const o = this.locationHistory.current();
						if (o && o.pushedByRoute) {
							const n = this.locationHistory.findLastLocation(o);
							if (n)
								if (
									((this.incomingRouteParams = Object.assign(
										Object.assign({}, n),
										{
											routeAction: "pop",
											routeDirection: "back",
											routeAnimation: t || o.routeAnimation,
										}
									)),
									o.lastPathname === o.pushedByRoute ||
										(n.pathname === o.pushedByRoute &&
											"" === o.tab &&
											"" === n.tab))
								) {
									const e = this.props.history;
									(e.goBack || e.back)();
								} else
									this.handleNavigate(
										n.pathname + (n.search || ""),
										"pop",
										"back",
										t
									);
							else this.handleNavigate(e, "pop", "back", t);
						} else this.handleNavigate(e, "pop", "back", t);
					}
					handleResetTab(e, t, n) {
						const o = this.locationHistory.getFirstRouteInfoForTab(e);
						if (o) {
							const e = Object.assign({}, o);
							(e.pathname = t),
								(e.routeOptions = n),
								(this.incomingRouteParams = Object.assign(
									Object.assign({}, e),
									{ routeAction: "pop", routeDirection: "back" }
								)),
								this.props.history.push(e.pathname + (e.search || ""));
						}
					}
					handleSetCurrentTab(e) {
						this.currentTab = e;
						const t = Object.assign({}, this.locationHistory.current());
						t.tab !== e && ((t.tab = e), this.locationHistory.update(t));
					}
					render() {
						return F.createElement(
							fw.Provider,
							{ value: this.routeMangerContextState },
							F.createElement(
								gw,
								{
									ionRoute: vw,
									ionRedirect: {},
									stackManager: kw,
									routeInfo: this.state.routeInfo,
									onNativeBack: this.handleNativeBack,
									onNavigateBack: this.handleNavigateBack,
									onNavigate: this.handleNavigate,
									onSetCurrentTab: this.handleSetCurrentTab,
									onChangeTab: this.handleChangeTab,
									onResetTab: this.handleResetTab,
									locationHistory: this.locationHistory,
								},
								this.props.children
							)
						);
					}
				}
				const Sw = (function (e) {
					var t = "withRouter(" + (e.displayName || e.name) + ")",
						n = function (t) {
							var n = t.wrappedComponentRef,
								o = wh(t, ["wrappedComponentRef"]);
							return F.createElement(df.Consumer, null, function (t) {
								return (
									t || Cu(!1), F.createElement(e, vu({}, o, t, { ref: n }))
								);
							});
						};
					return (n.displayName = t), (n.WrappedComponent = e), of(n, e);
				})(Ew);
				Sw.displayName = "IonRouter";
				class Cw extends F.Component {
					constructor(e) {
						super(e);
						const { history: t } = e,
							n = Pg(e, ["history"]);
						(this.history = t || Mu(n)),
							this.history.listen(this.handleHistoryChange.bind(this)),
							(this.registerHistoryListener =
								this.registerHistoryListener.bind(this));
					}
					handleHistoryChange(e, t) {
						const n = e.location || e,
							o = e.action || t;
						this.historyListenHandler && this.historyListenHandler(n, o);
					}
					registerHistoryListener(e) {
						this.historyListenHandler = e;
					}
					render() {
						const e = this.props,
							{ children: t } = e,
							n = Pg(e, ["children"]);
						return F.createElement(
							uf,
							Object.assign({ history: this.history }, n),
							F.createElement(
								Sw,
								{ registerHistoryListener: this.registerHistoryListener },
								t
							)
						);
					}
				}
				F.Component;
				F.Component;
				function $w(e) {
					return ee(Xy, {
						children: [
							J(by, {
								children: J(zy, { children: J($y, { children: e.name }) }),
							}),
							ee(gy, {
								fullscreen: !0,
								children: [
									J(by, {
										collapse: "condense",
										children: J(zy, {
											children: J($y, { size: "large", children: e.name }),
										}),
									}),
									e.children,
								],
							}),
						],
					});
				}
				const zw = ({ setScrollState: e, drawColor: t }) => {
					const n = 64,
						o = 32,
						i = "#000000",
						r = H.useRef(null),
						[a, s] = H.useState(!1),
						[l, c] = H.useState(
							[...Array(n)].map(() => Array(o).fill("#000000"))
						),
						[d, u] = H.useState((0.8 * window.innerWidth) / n),
						h = H.useCallback(() => {
							r.current &&
								((r.current.width = 0.8 * window.innerWidth),
								(r.current.height = (r.current.width * o) / n),
								u(r.current.width / n));
						}, [o, n]),
						f = H.useCallback(() => {
							const e = r.current;
							if (!e) return;
							const t = e.getContext("2d");
							if (!t) return;
							const a = (n, o) => {
								for (let i = 0; i < 1; i++)
									o
										? (t.moveTo(0, n + i), t.lineTo(e.width - 1, n + i))
										: (t.moveTo(n + i, 0), t.lineTo(n + i, e.height - 1));
							};
							(t.strokeStyle = i),
								t.beginPath(),
								t.moveTo(0, 0),
								t.lineTo(0, e.height);
							for (let o = 0; o < n; o++)
								a(Math.floor(((o + 1) * e.width) / n), !1);
							t.moveTo(0, 0), t.lineTo(e.width, 0);
							for (let n = 0; n < o; n++)
								a(Math.floor(((n + 1) * e.height) / o), !0);
							t.stroke();
						}, [o, n]),
						p = H.useCallback(() => {
							if (!r.current) return;
							const e = r.current,
								t = e.getContext("2d");
							if (!t) return;
							t.clearRect(0, 0, e.width, e.height), f();
							const i = [...l];
							for (let r = 0; r < n; r++)
								for (let e = 0; e < o; e++)
									(t.fillStyle = i[r][e]),
										t.fillRect(r * d + 1, e * d + 1, d - 2, d - 2);
						}, [f, o, n, l, d]),
						m = H.useCallback(() => {
							h(), p();
						}, [p, h]),
						g = H.useCallback(() => {
							s(!1), e(!0);
						}, [e]),
						b = (e, n) => {
							const o = r.current;
							if (!o) return;
							const i = o.getContext("2d");
							if (!i) return;
							const a = o.getBoundingClientRect(),
								s = Math.floor((e - a.left) / d),
								u = Math.floor((n - a.top) / d);
							if (
								s < 0 ||
								u < 0 ||
								s >= l.length ||
								u >= l[0].length ||
								l[s][u] === t
							)
								return;
							const h = [...l];
							(i.fillStyle = t),
								(h[s][u] = t),
								i.fillRect(s * d + 1, u * d + 1, d - 2, d - 2),
								c(h);
						};
					return (
						H.useEffect(
							() => (
								window.addEventListener("resize", m),
								window.addEventListener("mouseup", g),
								() => {
									window.removeEventListener("resize", m),
										window.removeEventListener("mouseup", g);
								}
							),
							[g, m, h]
						),
						H.useEffect(() => {
							p();
						}, [l, d, p]),
						ee("div", {
							className: "pixelGridDiv",
							children: [
								J(Oy, {
									size: "small",
									color: "medium",
									type: "reset",
									onClick: () => {
										if (!r.current) return;
										const e = r.current.getContext("2d");
										e &&
											(c([...Array(n)].map(() => Array(o).fill("#000000"))),
											e.clearRect(0, 0, r.current.width, r.current.height),
											f());
									},
									className: "resetFab",
									children: J(dw, {
										icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M320 146s24.36-12-64-12a160 160 0 10160 160' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 58l80 80-80 80' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
									}),
								}),
								J("canvas", {
									className: "pixelGridCanvas",
									ref: r,
									width: n * d,
									height: o * d,
									style: { border: `1px solid ${i}` },
									onMouseDown: (t) => {
										s(!0), e(!1), b(t.clientX, t.clientY);
									},
									onMouseMove: (e) => {
										a && e.buttons && b(e.clientX, e.clientY);
									},
									onMouseUp: () => {
										s(!1), e(!0);
									},
									onTouchStart: (t) => {
										s(!0), e(!1), b(t.touches[0].clientX, t.touches[0].clientY);
									},
									onTouchMove: (e) => {
										a && b(e.touches[0].clientX, e.touches[0].clientY);
									},
									onTouchEnd: () => {
										s(!1), e(!0);
									},
								}),
							],
						})
					);
				};
				function Iw() {
					const [e, t] = H.useState(!0),
						[n, o] = H.useState("#FFFFFF");
					return J($w, {
						name: "PixelDraw",
						children: ee(gy, {
							scrollY: e,
							children: [
								J("input", {
									type: "color",
									defaultValue: "#FFFFFF",
									onChange: (e) => {
										o(e.target.value);
									},
									style: {
										margin: "auto",
										display: "block",
										marginBottom: "15px",
										marginTop: "15px",
									},
								}),
								J(zw, { setScrollState: t, drawColor: n }),
							],
						}),
					});
				}
				function Tw(e) {
					const [t, n] = H.useState(!1);
					return ee("div", {
						children: [
							J(vy, {
								src: e.src,
								className: "StateImage",
								onLoad: () => {
									n(!0);
								},
								hidden: !t,
							}),
							t && J(Sy, { name: "dots", className: "StateImage" }),
						],
					});
				}
				var Pw, Lw;
				!(function (e) {
					(e[(e.SCAN_MODE_LOW_POWER = 0)] = "SCAN_MODE_LOW_POWER"),
						(e[(e.SCAN_MODE_BALANCED = 1)] = "SCAN_MODE_BALANCED"),
						(e[(e.SCAN_MODE_LOW_LATENCY = 2)] = "SCAN_MODE_LOW_LATENCY");
				})(Pw || (Pw = {})),
					(function (e) {
						(e[(e.CONNECTION_PRIORITY_BALANCED = 0)] =
							"CONNECTION_PRIORITY_BALANCED"),
							(e[(e.CONNECTION_PRIORITY_HIGH = 1)] =
								"CONNECTION_PRIORITY_HIGH"),
							(e[(e.CONNECTION_PRIORITY_LOW_POWER = 2)] =
								"CONNECTION_PRIORITY_LOW_POWER");
					})(Lw || (Lw = {}));
				/*! Capacitor: https://capacitorjs.com/ - MIT License */ const Rw = (
						e
					) =>
						(e.CapacitorPlatforms = ((e) => {
							const t = new Map();
							t.set("web", { name: "web" });
							const n = e.CapacitorPlatforms || {
								currentPlatform: { name: "web" },
								platforms: t,
							};
							return (
								(n.addPlatform = (e, t) => {
									n.platforms.set(e, t);
								}),
								(n.setPlatform = (e) => {
									n.platforms.has(e) &&
										(n.currentPlatform = n.platforms.get(e));
								}),
								n
							);
						})(e)),
					Ow = Rw(
						"undefined" != typeof globalThis
							? globalThis
							: "undefined" != typeof self
							? self
							: "undefined" != typeof window
							? window
							: "undefined" != typeof global
							? global
							: {}
					);
				var Nw;
				Ow.addPlatform,
					Ow.setPlatform,
					(function (e) {
						(e.Unimplemented = "UNIMPLEMENTED"),
							(e.Unavailable = "UNAVAILABLE");
					})(Nw || (Nw = {}));
				class _w extends Error {
					constructor(e, t, n) {
						super(e), (this.message = e), (this.code = t), (this.data = n);
					}
				}
				const Dw = (e) => {
						var t, n, o, i, r;
						const a = e.CapacitorCustomPlatform || null,
							s = e.Capacitor || {},
							l = (s.Plugins = s.Plugins || {}),
							c = e.CapacitorPlatforms,
							d =
								(null === (t = null == c ? void 0 : c.currentPlatform) ||
								void 0 === t
									? void 0
									: t.getPlatform) ||
								(() =>
									null !== a
										? a.name
										: ((e) => {
												var t, n;
												return (null == e ? void 0 : e.androidBridge)
													? "android"
													: (
															null ===
																(n =
																	null ===
																		(t = null == e ? void 0 : e.webkit) ||
																	void 0 === t
																		? void 0
																		: t.messageHandlers) || void 0 === n
																? void 0
																: n.bridge
													  )
													? "ios"
													: "web";
										  })(e)),
							u =
								(null === (n = null == c ? void 0 : c.currentPlatform) ||
								void 0 === n
									? void 0
									: n.isNativePlatform) || (() => "web" !== d()),
							h =
								(null === (o = null == c ? void 0 : c.currentPlatform) ||
								void 0 === o
									? void 0
									: o.isPluginAvailable) ||
								((e) => {
									const t = p.get(e);
									return (
										!!(null == t ? void 0 : t.platforms.has(d())) || !!f(e)
									);
								}),
							f =
								(null === (i = null == c ? void 0 : c.currentPlatform) ||
								void 0 === i
									? void 0
									: i.getPluginHeader) ||
								((e) => {
									var t;
									return null === (t = s.PluginHeaders) || void 0 === t
										? void 0
										: t.find((t) => t.name === e);
								}),
							p = new Map(),
							m =
								(null === (r = null == c ? void 0 : c.currentPlatform) ||
								void 0 === r
									? void 0
									: r.registerPlugin) ||
								((e, t = {}) => {
									const n = p.get(e);
									if (n)
										return (
											console.warn(
												`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`
											),
											n.proxy
										);
									const o = d(),
										i = f(e);
									let r;
									const c = (n) => {
											let l;
											const c = (...c) => {
												const d = (async () => (
													!r && o in t
														? (r = r =
																"function" == typeof t[o] ? await t[o]() : t[o])
														: null !== a &&
														  !r &&
														  "web" in t &&
														  (r = r =
																"function" == typeof t.web
																	? await t.web()
																	: t.web),
													r
												))().then((t) => {
													const r = ((t, n) => {
														var r, a;
														if (!i) {
															if (t)
																return null === (a = t[n]) || void 0 === a
																	? void 0
																	: a.bind(t);
															throw new _w(
																`"${e}" plugin is not implemented on ${o}`,
																Nw.Unimplemented
															);
														}
														{
															const o =
																null == i
																	? void 0
																	: i.methods.find((e) => n === e.name);
															if (o)
																return "promise" === o.rtype
																	? (t) => s.nativePromise(e, n.toString(), t)
																	: (t, o) =>
																			s.nativeCallback(e, n.toString(), t, o);
															if (t)
																return null === (r = t[n]) || void 0 === r
																	? void 0
																	: r.bind(t);
														}
													})(t, n);
													if (r) {
														const e = r(...c);
														return (l = null == e ? void 0 : e.remove), e;
													}
													throw new _w(
														`"${e}.${n}()" is not implemented on ${o}`,
														Nw.Unimplemented
													);
												});
												return (
													"addListener" === n && (d.remove = async () => l()), d
												);
											};
											return (
												(c.toString = () =>
													`${n.toString()}() { [capacitor code] }`),
												Object.defineProperty(c, "name", {
													value: n,
													writable: !1,
													configurable: !1,
												}),
												c
											);
										},
										u = c("addListener"),
										h = c("removeListener"),
										m = (e, t) => {
											const n = u({ eventName: e }, t),
												o = async () => {
													const o = await n;
													h({ eventName: e, callbackId: o }, t);
												},
												i = new Promise((e) => n.then(() => e({ remove: o })));
											return (
												(i.remove = async () => {
													console.warn(
														"Using addListener() without 'await' is deprecated."
													),
														await o();
												}),
												i
											);
										},
										g = new Proxy(
											{},
											{
												get(e, t) {
													switch (t) {
														case "$$typeof":
															return;
														case "toJSON":
															return () => ({});
														case "addListener":
															return i ? m : u;
														case "removeListener":
															return h;
														default:
															return c(t);
													}
												},
											}
										);
									return (
										(l[e] = g),
										p.set(e, {
											name: e,
											proxy: g,
											platforms: new Set([
												...Object.keys(t),
												...(i ? [o] : []),
											]),
										}),
										g
									);
								});
						return (
							s.convertFileSrc || (s.convertFileSrc = (e) => e),
							(s.getPlatform = d),
							(s.handleError = (t) => e.console.error(t)),
							(s.isNativePlatform = u),
							(s.isPluginAvailable = h),
							(s.pluginMethodNoop = (e, t, n) =>
								Promise.reject(
									`${n} does not have an implementation of "${t}".`
								)),
							(s.registerPlugin = m),
							(s.Exception = _w),
							(s.DEBUG = !!s.DEBUG),
							(s.isLoggingEnabled = !!s.isLoggingEnabled),
							(s.platform = s.getPlatform()),
							(s.isNative = s.isNativePlatform()),
							s
						);
					},
					Aw = (e) => (e.Capacitor = Dw(e)),
					Mw = Aw(
						"undefined" != typeof globalThis
							? globalThis
							: "undefined" != typeof self
							? self
							: "undefined" != typeof window
							? window
							: "undefined" != typeof global
							? global
							: {}
					),
					Bw = Mw.registerPlugin;
				Mw.Plugins;
				class jw {
					constructor(e) {
						(this.listeners = {}),
							(this.windowListeners = {}),
							e &&
								(console.warn(
									`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`
								),
								(this.config = e));
					}
					addListener(e, t) {
						this.listeners[e] || (this.listeners[e] = []),
							this.listeners[e].push(t);
						const n = this.windowListeners[e];
						n && !n.registered && this.addWindowListener(n);
						const o = async () => this.removeListener(e, t),
							i = Promise.resolve({ remove: o });
						return (
							Object.defineProperty(i, "remove", {
								value: async () => {
									console.warn(
										"Using addListener() without 'await' is deprecated."
									),
										await o();
								},
							}),
							i
						);
					}
					async removeAllListeners() {
						this.listeners = {};
						for (const e in this.windowListeners)
							this.removeWindowListener(this.windowListeners[e]);
						this.windowListeners = {};
					}
					notifyListeners(e, t) {
						const n = this.listeners[e];
						n && n.forEach((e) => e(t));
					}
					hasListeners(e) {
						return !!this.listeners[e].length;
					}
					registerWindowListener(e, t) {
						this.windowListeners[t] = {
							registered: !1,
							windowEventName: e,
							pluginEventName: t,
							handler: (e) => {
								this.notifyListeners(t, e);
							},
						};
					}
					unimplemented(e = "not implemented") {
						return new Mw.Exception(e, Nw.Unimplemented);
					}
					unavailable(e = "not available") {
						return new Mw.Exception(e, Nw.Unavailable);
					}
					async removeListener(e, t) {
						const n = this.listeners[e];
						if (!n) return;
						const o = n.indexOf(t);
						this.listeners[e].splice(o, 1),
							this.listeners[e].length ||
								this.removeWindowListener(this.windowListeners[e]);
					}
					addWindowListener(e) {
						window.addEventListener(e.windowEventName, e.handler),
							(e.registered = !0);
					}
					removeWindowListener(e) {
						e &&
							(window.removeEventListener(e.windowEventName, e.handler),
							(e.registered = !1));
					}
				}
				t("W", jw);
				const Vw = (e) =>
						encodeURIComponent(e)
							.replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
							.replace(/[()]/g, escape),
					Hw = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
				class Fw extends jw {
					async getCookies() {
						const e = document.cookie,
							t = {};
						return (
							e.split(";").forEach((e) => {
								if (e.length <= 0) return;
								let [n, o] = e.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
								(n = Hw(n).trim()), (o = Hw(o).trim()), (t[n] = o);
							}),
							t
						);
					}
					async setCookie(e) {
						try {
							const t = Vw(e.key),
								n = Vw(e.value),
								o = `; expires=${(e.expires || "").replace("expires=", "")}`,
								i = (e.path || "/").replace("path=", ""),
								r = null != e.url && e.url.length > 0 ? `domain=${e.url}` : "";
							document.cookie = `${t}=${n || ""}${o}; path=${i}; ${r};`;
						} catch (t) {
							return Promise.reject(t);
						}
					}
					async deleteCookie(e) {
						try {
							document.cookie = `${e.key}=; Max-Age=0`;
						} catch (t) {
							return Promise.reject(t);
						}
					}
					async clearCookies() {
						try {
							const e = document.cookie.split(";") || [];
							for (const t of e)
								document.cookie = t
									.replace(/^ +/, "")
									.replace(
										/=.*/,
										`=;expires=${new Date().toUTCString()};path=/`
									);
						} catch (e) {
							return Promise.reject(e);
						}
					}
					async clearAllCookies() {
						try {
							await this.clearCookies();
						} catch (e) {
							return Promise.reject(e);
						}
					}
				}
				Bw("CapacitorCookies", { web: () => new Fw() });
				const Ww = (e, t = {}) => {
					const n = Object.assign(
							{ method: e.method || "GET", headers: e.headers },
							t
						),
						o = ((e = {}) => {
							const t = Object.keys(e),
								n = Object.keys(e).map((e) => e.toLocaleLowerCase());
							return n.reduce((n, o, i) => ((n[o] = e[t[i]]), n), {});
						})(e.headers),
						i = o["content-type"] || "";
					if ("string" == typeof e.data) n.body = e.data;
					else if (i.includes("application/x-www-form-urlencoded")) {
						const t = new URLSearchParams();
						for (const [n, o] of Object.entries(e.data || {})) t.set(n, o);
						n.body = t.toString();
					} else if (i.includes("multipart/form-data")) {
						const t = new FormData();
						if (e.data instanceof FormData)
							e.data.forEach((e, n) => {
								t.append(n, e);
							});
						else for (const n of Object.keys(e.data)) t.append(n, e.data[n]);
						n.body = t;
						const o = new Headers(n.headers);
						o.delete("content-type"), (n.headers = o);
					} else
						(i.includes("application/json") || "object" == typeof e.data) &&
							(n.body = JSON.stringify(e.data));
					return n;
				};
				class Uw extends jw {
					async request(e) {
						const t = Ww(e, e.webFetchExtra),
							n = ((e, t = !0) =>
								e
									? Object.entries(e)
											.reduce((e, n) => {
												const [o, i] = n;
												let r, a;
												return (
													Array.isArray(i)
														? ((a = ""),
														  i.forEach((e) => {
																(r = t ? encodeURIComponent(e) : e),
																	(a += `${o}=${r}&`);
														  }),
														  a.slice(0, -1))
														: ((r = t ? encodeURIComponent(i) : i),
														  (a = `${o}=${r}`)),
													`${e}&${a}`
												);
											}, "")
											.substr(1)
									: null)(e.params, e.shouldEncodeUrlParams),
							o = n ? `${e.url}?${n}` : e.url,
							i = await fetch(o, t),
							r = i.headers.get("content-type") || "";
						let a,
							s,
							{ responseType: l = "text" } = i.ok ? e : {};
						switch ((r.includes("application/json") && (l = "json"), l)) {
							case "arraybuffer":
							case "blob":
								(s = await i.blob()),
									(a = await (async (e) =>
										new Promise((t, n) => {
											const o = new FileReader();
											(o.onload = () => {
												const e = o.result;
												t(e.indexOf(",") >= 0 ? e.split(",")[1] : e);
											}),
												(o.onerror = (e) => n(e)),
												o.readAsDataURL(e);
										}))(s));
								break;
							case "json":
								a = await i.json();
								break;
							default:
								a = await i.text();
						}
						const c = {};
						return (
							i.headers.forEach((e, t) => {
								c[t] = e;
							}),
							{ data: a, headers: c, status: i.status, url: i.url }
						);
					}
					async get(e) {
						return this.request(
							Object.assign(Object.assign({}, e), { method: "GET" })
						);
					}
					async post(e) {
						return this.request(
							Object.assign(Object.assign({}, e), { method: "POST" })
						);
					}
					async put(e) {
						return this.request(
							Object.assign(Object.assign({}, e), { method: "PUT" })
						);
					}
					async patch(e) {
						return this.request(
							Object.assign(Object.assign({}, e), { method: "PATCH" })
						);
					}
					async delete(e) {
						return this.request(
							Object.assign(Object.assign({}, e), { method: "DELETE" })
						);
					}
				}
				function Xw(e) {
					return new DataView(Uint8Array.from(e).buffer);
				}
				function qw(e) {
					return Array.from(new Uint8Array(e.buffer));
				}
				function Yw(e) {
					return Xw(e.split("").map((e) => e.charCodeAt(0)));
				}
				function Gw(e) {
					return String.fromCharCode(...qw(e));
				}
				function Qw(e) {
					const t = e
						.trim()
						.split(" ")
						.filter((e) => "" !== e)
						.map((e) => parseInt(e, 16));
					return Xw(t);
				}
				function Kw(e) {
					return qw(e)
						.map((e) => {
							let t = e.toString(16);
							return 1 == t.length && (t = "0" + t), t;
						})
						.join(" ");
				}
				Bw("CapacitorHttp", { web: () => new Uw() });
				const Zw = Bw("BluetoothLe", {
					web: () =>
						Ef(() => n.import("./web-legacy-3564b841.js")).then(
							(e) => new e.BluetoothLeWeb()
						),
				});
				function Jw(e) {
					return e
						? (() => {
								let e = Promise.resolve();
								return (t) =>
									new Promise((n, o) => {
										e = e
											.then(() => t())
											.then(n)
											.catch(o);
									});
						  })()
						: (e) => e();
				}
				function ex(e) {
					if ("string" != typeof e)
						throw new Error(`Invalid UUID type ${typeof e}. Expected string.`);
					if (
						!(
							(e = e.toLowerCase()).search(
								/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/
							) >= 0
						)
					)
						throw new Error(
							`Invalid UUID format ${e}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`
						);
					return e;
				}
				const tx = new (class {
						constructor() {
							(this.scanListener = null),
								(this.eventListeners = new Map()),
								(this.queue = Jw(!0));
						}
						enableQueue() {
							this.queue = Jw(!0);
						}
						disableQueue() {
							this.queue = Jw(!1);
						}
						async initialize(e) {
							await this.queue(async () => {
								await Zw.initialize(e);
							});
						}
						async isEnabled() {
							return await this.queue(async () => (await Zw.isEnabled()).value);
						}
						async enable() {
							await this.queue(async () => {
								await Zw.enable();
							});
						}
						async disable() {
							await this.queue(async () => {
								await Zw.disable();
							});
						}
						async startEnabledNotifications(e) {
							await this.queue(async () => {
								var t;
								const n = "onEnabledChanged";
								await (null === (t = this.eventListeners.get(n)) || void 0 === t
									? void 0
									: t.remove());
								const o = await Zw.addListener(n, (t) => {
									e(t.value);
								});
								this.eventListeners.set(n, o),
									await Zw.startEnabledNotifications();
							});
						}
						async stopEnabledNotifications() {
							await this.queue(async () => {
								var e;
								const t = "onEnabledChanged";
								await (null === (e = this.eventListeners.get(t)) || void 0 === e
									? void 0
									: e.remove()),
									this.eventListeners.delete(t),
									await Zw.stopEnabledNotifications();
							});
						}
						async isLocationEnabled() {
							return await this.queue(
								async () => (await Zw.isLocationEnabled()).value
							);
						}
						async openLocationSettings() {
							await this.queue(async () => {
								await Zw.openLocationSettings();
							});
						}
						async openBluetoothSettings() {
							await this.queue(async () => {
								await Zw.openBluetoothSettings();
							});
						}
						async openAppSettings() {
							await this.queue(async () => {
								await Zw.openAppSettings();
							});
						}
						async setDisplayStrings(e) {
							await this.queue(async () => {
								await Zw.setDisplayStrings(e);
							});
						}
						async requestDevice(e) {
							e = e ? this.validateRequestBleDeviceOptions(e) : void 0;
							return await this.queue(async () => await Zw.requestDevice(e));
						}
						async requestLEScan(e, t) {
							(e = this.validateRequestBleDeviceOptions(e)),
								await this.queue(async () => {
									var n;
									await (null === (n = this.scanListener) || void 0 === n
										? void 0
										: n.remove()),
										(this.scanListener = await Zw.addListener(
											"onScanResult",
											(e) => {
												const n = Object.assign(Object.assign({}, e), {
													manufacturerData: this.convertObject(
														e.manufacturerData
													),
													serviceData: this.convertObject(e.serviceData),
													rawAdvertisement: e.rawAdvertisement
														? this.convertValue(e.rawAdvertisement)
														: void 0,
												});
												t(n);
											}
										)),
										await Zw.requestLEScan(e);
								});
						}
						async stopLEScan() {
							await this.queue(async () => {
								var e;
								await (null === (e = this.scanListener) || void 0 === e
									? void 0
									: e.remove()),
									(this.scanListener = null),
									await Zw.stopLEScan();
							});
						}
						async getDevices(e) {
							if (!Array.isArray(e))
								throw new Error("deviceIds must be an array");
							return this.queue(
								async () => (await Zw.getDevices({ deviceIds: e })).devices
							);
						}
						async getConnectedDevices(e) {
							if (!Array.isArray(e))
								throw new Error("services must be an array");
							return (
								(e = e.map(ex)),
								this.queue(
									async () =>
										(await Zw.getConnectedDevices({ services: e })).devices
								)
							);
						}
						async connect(e, t, n) {
							await this.queue(async () => {
								var o;
								if (t) {
									const n = `disconnected|${e}`;
									await (null === (o = this.eventListeners.get(n)) ||
									void 0 === o
										? void 0
										: o.remove());
									const i = await Zw.addListener(n, () => {
										t(e);
									});
									this.eventListeners.set(n, i);
								}
								await Zw.connect(Object.assign({ deviceId: e }, n));
							});
						}
						async createBond(e, t) {
							await this.queue(async () => {
								await Zw.createBond(Object.assign({ deviceId: e }, t));
							});
						}
						async isBonded(e) {
							return await this.queue(
								async () => (await Zw.isBonded({ deviceId: e })).value
							);
						}
						async disconnect(e) {
							await this.queue(async () => {
								await Zw.disconnect({ deviceId: e });
							});
						}
						async getServices(e) {
							return await this.queue(
								async () => (await Zw.getServices({ deviceId: e })).services
							);
						}
						async discoverServices(e) {
							await this.queue(async () => {
								await Zw.discoverServices({ deviceId: e });
							});
						}
						async getMtu(e) {
							return await this.queue(
								async () => (await Zw.getMtu({ deviceId: e })).value
							);
						}
						async requestConnectionPriority(e, t) {
							await this.queue(async () => {
								await Zw.requestConnectionPriority({
									deviceId: e,
									connectionPriority: t,
								});
							});
						}
						async readRssi(e) {
							return await this.queue(async () => {
								const t = await Zw.readRssi({ deviceId: e });
								return parseFloat(t.value);
							});
						}
						async read(e, t, n, o) {
							(t = ex(t)), (n = ex(n));
							return await this.queue(async () => {
								const i = await Zw.read(
									Object.assign(
										{ deviceId: e, service: t, characteristic: n },
										o
									)
								);
								return this.convertValue(i.value);
							});
						}
						async write(e, t, n, o, i) {
							return (
								(t = ex(t)),
								(n = ex(n)),
								this.queue(async () => {
									if (!(null == o ? void 0 : o.buffer))
										throw new Error("Invalid data.");
									let r = o;
									"web" !== Mw.getPlatform() && (r = Kw(o)),
										await Zw.write(
											Object.assign(
												{
													deviceId: e,
													service: t,
													characteristic: n,
													value: r,
												},
												i
											)
										);
								})
							);
						}
						async writeWithoutResponse(e, t, n, o, i) {
							(t = ex(t)),
								(n = ex(n)),
								await this.queue(async () => {
									if (!(null == o ? void 0 : o.buffer))
										throw new Error("Invalid data.");
									let r = o;
									"web" !== Mw.getPlatform() && (r = Kw(o)),
										await Zw.writeWithoutResponse(
											Object.assign(
												{
													deviceId: e,
													service: t,
													characteristic: n,
													value: r,
												},
												i
											)
										);
								});
						}
						async readDescriptor(e, t, n, o, i) {
							(t = ex(t)), (n = ex(n)), (o = ex(o));
							return await this.queue(async () => {
								const r = await Zw.readDescriptor(
									Object.assign(
										{
											deviceId: e,
											service: t,
											characteristic: n,
											descriptor: o,
										},
										i
									)
								);
								return this.convertValue(r.value);
							});
						}
						async writeDescriptor(e, t, n, o, i, r) {
							return (
								(t = ex(t)),
								(n = ex(n)),
								(o = ex(o)),
								this.queue(async () => {
									if (!(null == i ? void 0 : i.buffer))
										throw new Error("Invalid data.");
									let a = i;
									"web" !== Mw.getPlatform() && (a = Kw(i)),
										await Zw.writeDescriptor(
											Object.assign(
												{
													deviceId: e,
													service: t,
													characteristic: n,
													descriptor: o,
													value: a,
												},
												r
											)
										);
								})
							);
						}
						async startNotifications(e, t, n, o) {
							(t = ex(t)),
								(n = ex(n)),
								await this.queue(async () => {
									var i;
									const r = `notification|${e}|${t}|${n}`;
									await (null === (i = this.eventListeners.get(r)) ||
									void 0 === i
										? void 0
										: i.remove());
									const a = await Zw.addListener(r, (e) => {
										o(this.convertValue(null == e ? void 0 : e.value));
									});
									this.eventListeners.set(r, a),
										await Zw.startNotifications({
											deviceId: e,
											service: t,
											characteristic: n,
										});
								});
						}
						async stopNotifications(e, t, n) {
							(t = ex(t)),
								(n = ex(n)),
								await this.queue(async () => {
									var o;
									const i = `notification|${e}|${t}|${n}`;
									await (null === (o = this.eventListeners.get(i)) ||
									void 0 === o
										? void 0
										: o.remove()),
										this.eventListeners.delete(i),
										await Zw.stopNotifications({
											deviceId: e,
											service: t,
											characteristic: n,
										});
								});
						}
						validateRequestBleDeviceOptions(e) {
							return (
								e.services && (e.services = e.services.map(ex)),
								e.optionalServices &&
									(e.optionalServices = e.optionalServices.map(ex)),
								e
							);
						}
						convertValue(e) {
							return "string" == typeof e
								? Qw(e)
								: void 0 === e
								? new DataView(new ArrayBuffer(0))
								: e;
						}
						convertObject(e) {
							if (void 0 === e) return;
							const t = {};
							for (const n of Object.keys(e)) t[n] = this.convertValue(e[n]);
							return t;
						}
					})(),
					nx = "PAWS",
					ox = 3,
					ix = "04f9d599-ce17-4397-a65d-cf769397551a",
					rx = "fa7abfe6-af90-42bf-a154-c2bdb7eb336a",
					ax = "97dcaa87-eaa8-4546-bb33-ad001fc3daf4",
					sx = "0694bc1c-0064-4bd7-9840-41fa65d7355e",
					lx = "81a6a500-b85e-4951-b6ac-b63c8f97f678",
					cx = "31b0159a-d4bd-4396-9e77-7ebb24db6df3",
					dx = "26414bca-7991-46e5-a559-376c7d515a1f";
				class ux {
					constructor() {
						e(this, "eventListeners", new Map());
					}
					subscribe(e, t) {
						this.eventListeners.has(e) || this.eventListeners.set(e, []);
						return this.eventListeners.get(e).push(t), t;
					}
					unsubscribe(e, t) {
						if (!this.eventListeners.has(e))
							throw new Error(`Unknown event ${e}`);
						const n = this.eventListeners.get(e),
							o = n.indexOf(t);
						-1 !== o && n.splice(o, 1);
					}
					emit(e, ...t) {
						if (!this.eventListeners.has(e)) return;
						this.eventListeners.get(e).forEach((e) => e(...t));
					}
				}
				function hx(e) {
					const t = new Float32Array(1);
					return (t[0] = e), new DataView(t.buffer);
				}
				function fx() {
					const e = H.useRef("Idle"),
						t = () => {
							return (
								(e = 10 * (100 * Math.random() + 0.05)),
								new Promise((t) => setTimeout(t, e))
							);
							var e;
						};
					(tx.isEnabled = async () => (await t(), await t(), !0)),
						(tx.initialize = async () => {
							await t();
						}),
						(tx.read = async (n, o, i) => {
							if (!n || !o) throw new Error("Invalid read");
							console.log(`READ: ${n}|${o}|${i}`), await t();
							const r = new TextEncoder();
							switch (i) {
								case rx:
									return hx(69.4);
								case ax:
									return Yw(`Uptime is: ${new Date().toLocaleString()}`);
								case lx:
									return Yw(e.current);
								case sx:
									return Yw("Idle, Happy, Sad, Furcation, Woot, Angry, Spiin");
								case cx:
									return hx(52.3);
								case dx:
									return hx(0.2);
							}
							return new DataView(r.encode("UNKNOWN").buffer);
						}),
						(tx.write = async (n, o, i, r, a) => {
							if (!n || !o) throw new Error("Invalid read");
							if (
								(console.log(`WRITE: ${n}|${o}|${i}|${Gw(r)}`),
								await t(),
								i === lx)
							)
								e.current = Gw(r);
						}),
						(tx.requestDevice = async (e) => {
							await t();
							return { deviceId: "test", name: "test", uuids: ["test"] };
						}),
						(tx.connect = async (e, n, o) => {
							await t();
						});
				}
				const px = (e) => e.getFloat32(0);
				var mx = ((e) => (
					(e[(e.FAILED = 0)] = "FAILED"),
					(e[(e.NO_BLUETOOTH = 1)] = "NO_BLUETOOTH"),
					(e[(e.UNDEFINED = 2)] = "UNDEFINED"),
					(e[(e.CHECKING_REQUIREMENTS = 3)] = "CHECKING_REQUIREMENTS"),
					(e[(e.FINDING_DEVICE = 4)] = "FINDING_DEVICE"),
					(e[(e.CONNECTING = 5)] = "CONNECTING"),
					(e[(e.INITIALISING = 6)] = "INITIALISING"),
					(e[(e.READY = 7)] = "READY"),
					e
				))(mx || {});
				class gx extends ux {
					get state() {
						return this._state;
					}
					set state(e) {
						(this._state = e), this.emit("onStateChange", e);
					}
					get detailString() {
						return this._detailString;
					}
					set detailString(e) {
						(this._detailString = e), this.emit("onDetailStringChange", e);
					}
					constructor(t = !1) {
						super(),
							e(this, "device", void 0),
							e(this, "properties", {}),
							e(this, "debug", void 0),
							e(this, "_detailString", "Not initialized"),
							e(this, "_state", 2),
							(this.debug = t),
							t && fx();
						const n = this;
						class o {
							get value() {
								return this._value;
							}
							constructor(t, n, o, i) {
								e(this, "convert", void 0),
									e(this, "service", void 0),
									e(this, "characteristic", void 0),
									e(this, "name", void 0),
									e(this, "_value", void 0),
									(this.name = t),
									(this.service = n),
									(this.characteristic = o),
									(this.convert = i);
							}
							async sync() {
								var e, t;
								null !== (e = n.device) &&
									void 0 !== e &&
									e.deviceId &&
									((this._value = await this.convert(
										await tx.read(
											null === (t = n.device) || void 0 === t
												? void 0
												: t.deviceId,
											this.service,
											this.characteristic
										)
									)),
									n.emit("onPropertyChange", this));
							}
						}
						const i = [
							new o("timestamp", ix, rx, px),
							new o("uptime", ix, ax, Gw),
							new o("states", ix, sx, Gw),
							new o("cpuTemp", ix, cx, px),
							new o("cpuLoad", ix, dx, px),
							new (class extends o {
								constructor(t, n, o, i, r) {
									super(t, n, o, i),
										e(this, "invConvert", void 0),
										(this.invConvert = r);
								}
								async write(e, t = !0) {
									var o, i;
									null !== (o = n.device) &&
										void 0 !== o &&
										o.deviceId &&
										(await tx.write(
											null === (i = n.device) || void 0 === i
												? void 0
												: i.deviceId,
											this.service,
											this.characteristic,
											this.invConvert(e)
										),
										t && (await this.sync()));
								}
							})("state", ix, lx, Gw, Yw),
						];
						for (const e of i) this.properties[e.name] = e;
					}
					async main() {
						this.detailString = "Trying to initialise";
						try {
							await tx.initialize({ androidNeverForLocation: !0 });
						} catch ($h) {
							return (
								(this.detailString =
									"Cannot initialize bluetooth client - Does your device support it?"),
								(this.state = 1),
								this.state
							);
						}
						if (
							((this.detailString = "Initialised"),
							(this.state = 3),
							await tx.isEnabled())
						) {
							this.detailString = "Bluetooth enabled";
							try {
								await this.scan(),
									await this.connect(),
									await this.initialiseAllValues(),
									(this.detailString = "PAWS device ready!"),
									(this.state = 7);
							} catch ($h) {
								let t = "Unknown Failure";
								throw (
									(console.log($h),
									$h instanceof Error && (t = $h.message),
									"string" == typeof $h && (t = $h),
									(this.detailString = t),
									(this.state = 0),
									$h)
								);
							}
						} else
							(this.detailString =
								"Bluetooth is not enabled on the client - Please enable it!"),
								(this.state = 1);
						return this.state;
					}
					async scan() {
						(this.detailString = "Initializing Bluetooth client"),
							await tx.initialize(),
							(this.detailString = "Requesting PAWS device"),
							(this.state = 4),
							(this.device = await tx.requestDevice({
								services: [ix],
								namePrefix: nx,
							}));
					}
					async connect(e = 1) {
						if (!this.device) throw new Error("Device not initialised");
						(this.detailString = `Attempting to connect to device: ${this.device.name} - iteration ${e}`),
							(this.state = 5);
						try {
							await tx.connect(this.device.deviceId, this.onDisconnect);
						} catch ($h) {
							if (e >= ox) throw $h;
							await this.connect(e + 1);
						}
					}
					async onDisconnect() {
						console.error("Disconnect"), (this.state = 2);
					}
					async initialiseAllValues() {
						(this.detailString = "Syncing all values"),
							(this.state = 6),
							await this.fullSync(!0);
					}
					async fullSync(e = !1) {
						if (!this.device) throw new Error("Device not initialised");
						const t = Object.values(this.properties).length;
						let n = 0;
						for (const o in this.properties)
							n++,
								e && (this.detailString = `[${n}/${t}] Syncing ${o}...`),
								await this.properties[o].sync();
					}
				}
				const bx = H.createContext(void 0);
				function vx(e, t) {
					const n = { ...e };
					return "UPDATE_PROPERTY" === t.type
						? ((n[t.prop_name] = t.prop_value), n)
						: n;
				}
				function yx({ children: e, debug: t = !1 }) {
					const [n] = H.useState(new gx(t)),
						[o, i] = H.useState(n.state),
						[r, a] = H.useState(n.detailString),
						[s, l] = H.useReducer(
							vx,
							(function (e) {
								const t = {};
								for (const n in e) t[n] = e[n].value;
								return t;
							})(n.properties)
						);
					H.useEffect(() => {
						const e = n.subscribe("onStateChange", (e) => {
								i(e);
							}),
							t = n.subscribe("onDetailStringChange", (e) => {
								a(e);
							}),
							o = n.subscribe("onPropertyChange", (e) => {
								l({
									type: "UPDATE_PROPERTY",
									prop_name: e.name,
									prop_value: e.value,
								});
							});
						return () => {
							n.unsubscribe("onStateChange", e),
								n.unsubscribe("onDetailStringChange", t),
								n.unsubscribe("onPropertyChange", o);
						};
					}, [n]);
					const c = { device: n, state: o, detailString: r, properties: s };
					return J(bx.Provider, { value: c, children: e });
				}
				function wx({
					selectedState: e,
					state: t,
					toggleState: n,
					disabled: o,
				}) {
					const i = H.useContext(bx);
					return ee(Ry, {
						className: "StateCard Transition",
						style: {
							background:
								i.properties.state === t.name
									? "var(--ion-color-primary)"
									: (null == e ? void 0 : e.name) === t.name
									? "var(--ion-color-danger)"
									: "black",
							transform:
								(null == e ? void 0 : e.name) === t.name
									? "scale(1.1)"
									: "scale(1)",
						},
						disabled: o,
						onClick: () => n(t),
						children: [
							J(Tw, { src: t.image }),
							J(hy, {
								children: J(Ly, {
									onClick: () => n(t),
									expand: "full",
									color:
										i.properties.state === t.name
											? "success"
											: (null == e ? void 0 : e.name) === t.name
											? "warning"
											: "tertiary",
									children: t.name,
								}),
							}),
						],
					});
				}
				function xx(e) {
					return J("div", {
						style: {
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
						},
						children: e.allStates.map((t, n) =>
							J(
								wx,
								{
									disabled: e.disabled,
									state: t,
									toggleState: e.toggleState,
									selectedState: e.selectedState,
								},
								n
							)
						),
					});
				}
				const kx = new Map();
				function Ex() {
					const e = H.useContext(bx),
						t = ((e.properties.states || "").split(", ") || []).map((e) => {
							let t = kx.get(e);
							return (
								t ||
									(t =
										"https://media.discordapp.net/attachments/698284725663563918/910905415020208138/Happyface_mirror.gif"),
								{ name: e, image: t }
							);
						}),
						[n, o] = H.useState(),
						[i, r] = H.useState(!1),
						a = H.useCallback(
							async (t) => {
								i ||
									(o(t),
									r(!0),
									await e.device.properties.state.write(t.name),
									r(!1));
							},
							[e.device.properties.state.write, i]
						);
					return ee(Xy, {
						children: [
							J(by, {
								children: J(zy, {
									children: J($y, { children: "State List" }),
								}),
							}),
							ee(gy, {
								fullscreen: !0,
								children: [
									J("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											justifyContent: "center",
											marginTop: "10px",
										},
										children: ee(Ry, {
											style: { minWidth: "20em" },
											children: [
												J(fy, {
													children: ee(
														Z,
														i
															? {
																	children: [
																		ee(py, {
																			children: [
																				"Changing State to ",
																				J("i", {
																					children: null == n ? void 0 : n.name,
																				}),
																			],
																		}),
																		J(my, {
																			children: J(Cy, {
																				children: e.properties.state,
																			}),
																		}),
																	],
															  }
															: {
																	children: [
																		J(py, { children: "Current State" }),
																		J(my, { children: e.properties.state }),
																	],
															  }
													),
												}),
												J(hy, {
													children: J(xy, {
														type: i ? "indeterminate" : "determinate",
														value: 1,
														color: i ? "primary" : "success",
													}),
												}),
											],
										}),
									}),
									J(xx, {
										disabled: !1,
										allStates: t,
										toggleState: a,
										selectedState: n,
									}),
								],
							}),
						],
					});
				}
				kx.set("Idle", "https://i.imgur.com/I0ntbMh.gif"),
					kx.set(
						"Happy",
						"https://media.discordapp.net/attachments/698284725663563918/910905415020208138/Happyface_mirror.gif"
					),
					kx.set(
						"Angry",
						"https://media.discordapp.net/attachments/698284725663563918/905941664256901151/Angryface_single.gif"
					),
					kx.set("Cry", "https://i.imgur.com/Lv0Tdce.gif"),
					kx.set("Bluescreen", "https://i.imgur.com/GtJq0hN.gif"),
					kx.set("Boop", "https://i.imgur.com/5lOE7oS.gif"),
					kx.set("Confused", "https://i.imgur.com/4tMMong.gif"),
					kx.set("Hello", "https://i.imgur.com/bNNthtT.gif"),
					kx.set("NoToast", "https://i.imgur.com/IXvvkU6.gif"),
					kx.set("Overheat", "https://i.imgur.com/b4yDtBa.gif");
				const Sx = () => {
						const e = H.useContext(bx),
							t = H.useCallback(
								async (t) => {
									e.state >= mx.READY
										? (await e.device.fullSync(), t.target.complete())
										: t.target.complete();
								},
								[e.device, e.state]
							);
						return ee(Xy, {
							children: [
								J(by, {
									children: J(zy, {
										children: J($y, { children: "Machine Status" }),
									}),
								}),
								ee(gy, {
									children: [
										J(ky, {
											slot: "fixed",
											onIonRefresh: t,
											children: J(Ey, {}),
										}),
										J(Ry, {
											children: J(hy, {
												children: ee(yy, {
													children: [
														ee("h2", {
															children: ["Timestamp: ", e.properties.timestamp],
														}),
														ee("h3", {
															children: ["Uptime: ", e.properties.uptime],
														}),
														ee("h3", {
															children: ["Active State: ", e.properties.state],
														}),
														ee("h3", {
															children: [
																"CPU Temperature: ",
																e.properties.cpuTemp,
																"°C",
															],
														}),
														ee("h3", {
															children: [
																"CPU Load: ",
																e.properties.cpuLoad,
																"%",
															],
														}),
														ee("h3", {
															children: ["States: ", e.properties.states],
														}),
													],
												}),
											}),
										}),
									],
								}),
							],
						});
					},
					Cx = 64,
					$x = 32,
					zx = new Uint8Array(Cx * $x * 4);
				function Ix() {
					const e = H.useRef(null),
						t = H.useRef(null),
						[n, o] = H.useState(!1);
					H.useEffect(() => {
						let o;
						const i = async () => {
							if (n && e.current && t.current) {
								const n = e.current,
									r = t.current.getContext("2d");
								if (!r) throw Error("Canvas Context not initialised");
								(r.imageSmoothingEnabled = !1), r.drawImage(n, 0, 0, Cx, $x);
								const a = r.getImageData(0, 0, Cx, $x);
								zx.set(a.data);
								try {
									await tx.write(
										"test",
										"test",
										"test",
										new DataView(zx.buffer)
									);
								} catch ($h) {
									console.error($h);
								}
								o = setTimeout(i, 0);
							}
						};
						return (
							n && i(),
							() => {
								clearTimeout(o);
							}
						);
					}, [n]);
					return J($w, {
						name: "Video Share",
						children: ee(gy, {
							children: [
								J("div", {
									style: { display: "flex", justifyContent: "center" },
									children: J(Ly, {
										onClick: async () => {
											try {
												if (n) {
													if (e.current) {
														const t = e.current.srcObject;
														if (t) {
															t.getTracks().forEach((e) => e.stop());
														}
														e.current.srcObject = null;
													}
												} else {
													const t =
														await navigator.mediaDevices.getDisplayMedia({
															video: !0,
														});
													e.current && (e.current.srcObject = t);
												}
												o(!n);
											} catch (t) {
												console.error("Error capturing screen:", t);
											}
										},
										color: n ? "success" : "primary",
										children: n
											? "Stop Screen Sharing"
											: "Start Screen Sharing",
									}),
								}),
								ee("div", {
									style: { display: "flex", justifyContent: "center" },
									children: [
										J("video", {
											ref: e,
											autoPlay: !0,
											playsInline: !0,
											className: "video-element",
											hidden: !0,
										}),
										J("canvas", {
											ref: t,
											width: Cx,
											height: $x,
											className: "canvas-element",
											style: { width: "80%", imageRendering: "pixelated" },
										}),
									],
								}),
							],
						}),
					});
				}
				function Tx() {
					const e = H.useContext(bx);
					function t({ state: t, bufferProgress: n }) {
						if (e.state < t) return J(xy, { color: "light", value: 100 });
						if (e.state === t) {
							if (n && "[" == e.detailString[0])
								try {
									const [t, n] = e.detailString
											.slice(1)
											.split("]")[0]
											.split("/"),
										[o, i] = [parseInt(t), parseInt(n)];
									return (
										console.log(o / i, (o - 1) / i),
										J(xy, { buffer: o / i, value: (o - 1) / i })
									);
								} catch {}
							return J(xy, { type: "indeterminate" });
						}
						return J(xy, { color: "success", value: 100 });
					}
					function n({ state: e, title: n, bufferProgress: o = !1 }) {
						return J(Ny, {
							children: ee("div", {
								className: "pawsContainer",
								children: [
									J(yy, { children: n }),
									J(t, { state: e, bufferProgress: o }),
								],
							}),
						});
					}
					return ee(Ry, {
						style: { width: "80%" },
						children: [
							ee(fy, {
								children: [
									J(my, { children: "P.A.W.S Device" }),
									J(py, { children: e.detailString }),
								],
							}),
							ee(hy, {
								children: [
									ee(wy, {
										children: [
											J(n, {
												title: "Device Is Capable",
												state: mx.CHECKING_REQUIREMENTS,
											}),
											J(n, {
												title: "Proot Located",
												state: mx.FINDING_DEVICE,
											}),
											J(n, {
												title: "Slotting in the USB",
												state: mx.CONNECTING,
											}),
											J(n, {
												title: "Havin' a Nice Chat",
												state: mx.INITIALISING,
												bufferProgress: !0,
											}),
										],
									}),
									J(xy, {
										style: { marginTop: "1em", height: "1em" },
										value:
											(e.state - mx.CHECKING_REQUIREMENTS) /
											(mx.READY - mx.CHECKING_REQUIREMENTS),
										color:
											(e.state - mx.CHECKING_REQUIREMENTS) /
												(mx.READY - mx.CHECKING_REQUIREMENTS) <
											0
												? "light"
												: e.state === mx.READY
												? "success"
												: "",
									}),
								],
							}),
						],
					});
				}
				function Px({ setReady: e }) {
					const t = H.useContext(bx),
						n = H.useCallback(async () => {
							(await t.device.main()) >= mx.READY && e(!0);
						}, [t.device, e]);
					switch (t.state) {
						case mx.FAILED:
							return J(Ly, { color: "danger", onClick: n, children: "Failed" });
						case mx.NO_BLUETOOTH:
							return J(Ly, {
								color: "light",
								onClick: n,
								children: "Bluetooth Not Enabled",
							});
						case mx.UNDEFINED:
							return J(Ly, { onClick: n, children: "Connect" });
						case mx.READY:
							return J(Ly, {
								disabled: !0,
								color: "success",
								children: "Connected!",
							});
						default:
							return J(Ly, { disabled: !0, children: "Connecting..." });
					}
				}
				function Lx({ setReady: e }) {
					return (
						H.useEffect(() => () => {}, []),
						ee(Xy, {
							children: [
								J(by, {
									children: J(zy, {
										children: J($y, { children: "Bluetooth Page" }),
									}),
								}),
								ee(gy, {
									children: [
										J("div", {
											style: {
												display: "flex",
												justifyContent: "center",
												paddingTop: "1em",
											},
											children: J(Px, { setReady: e }),
										}),
										J("div", {
											style: { display: "flex", justifyContent: "center" },
											children: J(Tx, {}),
										}),
									],
								}),
							],
						})
					);
				}
				((e = {}) => {
					"undefined" != typeof document &&
						document.documentElement.classList.add("ion-ce"),
						gg(Object.assign({}, e));
				})();
				const Rx = () => J(yx, { children: J(Hy, { children: J(Ox, {}) }) });
				function Ox() {
					const [e, t] = H.useState(!1),
						n = (t) => (e ? t.children : J(bf, { to: "/bluetooth" })); //!Paws || Paws.state >= PawsState.READY;
					return J(Cw, {
						children: ee(lw, {
							children: [
								ee(ew, {
									children: [
										J(kf, {
											exact: !0,
											path: "/bluetooth",
											children: J(Lx, { setReady: t }),
										}),
										J(kf, {
											exact: !0,
											path: "/pixeldraw",
											children: J(n, { children: J(Iw, {}) }),
										}),
										J(kf, {
											exact: !0,
											path: "/states",
											children: J(n, { children: J(Ex, {}) }),
										}),
										J(kf, {
											exact: !0,
											path: "/status",
											children: J(n, { children: J(Sx, {}) }),
										}),
										J(kf, {
											exact: !0,
											path: "/video",
											children: J(n, { children: J(Ix, {}) }),
										}),
										J(kf, { children: J(bf, { to: "/bluetooth" }) }),
									],
								}),
								ee(iw, {
									slot: "bottom",
									children: [
										ee(tw, {
											tab: "bluetooth",
											href: "/bluetooth",
											children: [
												J(dw, {
													"aria-hidden": "true",
													icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M388 160.77a20 20 0 00-5.85-14.91l-112-112A20 20 0 00236 48v164.52l-79-67.71a20 20 0 00-26 30.38L225.27 256 131 336.81a20 20 0 1026 30.38l79-67.71V464a20 20 0 0034.14 14.14l112-112a20 20 0 00-1.14-29.33L286.73 256 381 175.19a20 20 0 007-14.42zm-49.42 192.36L276 415.72V299.49zM276 212.52V96.28l62.59 62.59z'/></svg>",
												}),
												J(yy, { children: "Bluetooth" }),
											],
										}),
										ee(tw, {
											tab: "pixeldraw",
											href: "/pixeldraw",
											disabled: !e,
											children: [
												J(dw, {
													"aria-hidden": "true",
													icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M233.15 360.11a15.7 15.7 0 01-4.92-.77 16 16 0 01-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 01-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0179.89 0 56.51 56.51 0 01.11 79.78l-219 227a16 16 0 01-11.53 4.9zM119.89 480.11c-32.14 0-65.45-16.89-84.85-43a16 16 0 0112.85-25.54c5.34 0 20-4.87 20-20.57 0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11z'/></svg>",
												}),
												J(yy, { children: "Pixel Draw" }),
											],
										}),
										ee(tw, {
											tab: "states",
											href: "/states",
											disabled: !e,
											children: [
												J(dw, {
													"aria-hidden": "true",
													icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z'/></svg>",
												}),
												J(yy, { children: "States" }),
											],
										}),
										ee(tw, {
											tab: "status",
											href: "/status",
											disabled: !e,
											children: [
												J(dw, {
													"aria-hidden": "true",
													icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.51 5.51 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.64a10.42 10.42 0 00.39-13.76l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.09-5.89a10.3 10.3 0 00-13.45 2.83L325 96.28a4.6 4.6 0 01-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.46 5.46 0 01-5.36 3.65h-9.75a5.5 5.5 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.47 2a10.46 10.46 0 00-8.56 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.4 10.4 0 00-13.61 2L93 126.63a10.31 10.31 0 00.37 13.75L110.45 160a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.38 10.38 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 01-4.46 4.64l-25.69 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.49 5.49 0 015.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.63a10.41 10.41 0 00-.5 13.77l7.41 8.91a10.23 10.23 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 011.73 6.21l-9.27 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84 3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.43 10.43 0 0011.75-7.17l8.5-24.77a5.45 5.45 0 015.36-3.65h9.75a5.49 5.49 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.37 10.37 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 014.46-4.64l25.69-4.14a10.43 10.43 0 009.18-10.28v-11.71zm-282.45 94a15.8 15.8 0 01-25.47 2.66 135.06 135.06 0 01.42-181.65 15.81 15.81 0 0125.5 2.77l45.65 80.35a15.85 15.85 0 010 15.74zM256 391.11a134.75 134.75 0 01-28.31-3 15.81 15.81 0 01-10.23-23.36l46-80a15.79 15.79 0 0113.7-7.93h92.14a15.8 15.8 0 0115.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76zm7.51-163.9L218 147.07a15.81 15.81 0 0110.31-23.3 134 134 0 0127.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 01-15.1 20.53h-92a15.78 15.78 0 01-13.76-8z'/></svg>",
												}),
												J(yy, { children: "Status" }),
											],
										}),
										ee(tw, {
											tab: "video",
											href: "/video",
											disabled: !e,
											children: [
												J(dw, {
													"aria-hidden": "true",
													icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z'/></svg>",
												}),
												J(yy, { children: "Video Share" }),
											],
										}),
									],
								}),
							],
						}),
					});
				}
				du(document.getElementById("root")).render(
					J(F.StrictMode, { children: J(Rx, {}) })
				);
			},
		};
	});
})();
