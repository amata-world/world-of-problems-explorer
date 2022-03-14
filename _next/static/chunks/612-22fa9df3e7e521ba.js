"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{9612:function(e,t,n){n.d(t,{NB:function(){return te}});var r=n(7294),i=n(3935),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var f="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};var l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},s="object"==typeof f&&f&&f.Object===Object&&f,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),h=p,v=function(){return h.Date.now()},y=/\s/;var g=function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t},b=/^\s+/;var O=function(e){return e?e.slice(0,g(e)+1).replace(b,""):e},w=p.Symbol,m=w,R=Object.prototype,E=R.hasOwnProperty,j=R.toString,T=m?m.toStringTag:void 0;var z=function(e){var t=E.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(o){}var i=j.call(e);return r&&(t?e[T]=n:delete e[T]),i},H=Object.prototype.toString;var S=z,M=function(e){return H.call(e)},_=w?w.toStringTag:void 0;var P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?S(e):M(e)},x=function(e){return null!=e&&"object"==typeof e};var k=O,N=l,A=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==P(e)},D=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,C=/^0o[0-7]+$/i,F=parseInt;var U=l,$=v,q=function(e){if("number"==typeof e)return e;if(A(e))return NaN;if(N(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=N(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=k(e);var n=W.test(e);return n||C.test(e)?F(e.slice(2),n?2:8):D.test(e)?NaN:+e},I=Math.max,L=Math.min;var B=function(e,t,n){var r,i,o,c,u,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,f=t,c=e.apply(o,n)}function h(e){return f=e,u=setTimeout(y,t),l?p(e):c}function v(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-f>=o}function y(){var e=$();if(v(e))return g(e);u=setTimeout(y,function(e){var n=t-(e-a);return s?L(n,o-(e-f)):n}(e))}function g(e){return u=void 0,d&&r?p(e):(r=i=void 0,c)}function b(){var e=$(),n=v(e);if(r=arguments,i=this,a=e,n){if(void 0===u)return h(a);if(s)return clearTimeout(u),u=setTimeout(y,t),p(a)}return void 0===u&&(u=setTimeout(y,t)),c}return t=q(t)||0,U(n)&&(l=!!n.leading,o=(s="maxWait"in n)?I(q(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=a=i=u=void 0},b.flush=function(){return void 0===u?c:g($())},b},V=B,G=l;var J=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return G(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),V(e,t,{leading:r,maxWait:t,trailing:i})},K=function(e,t,n,r){switch(t){case"debounce":return B(e,n,r);case"throttle":return J(e,n,r);default:return e}},Q=function(e){return"function"===typeof e},X=function(){return"undefined"===typeof window},Y=function(e){return e instanceof Element||e instanceof HTMLDocument},Z=function(e,t,n,r){return function(i){var o=i.width,c=i.height;t((function(t){return t.width===o&&t.height===c||t.width===o&&!r||t.height===c&&!n?t:(e&&Q(e)&&e(o,c),{width:o,height:c})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!X()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(X())return null;if(t)return document.querySelector(t);if(r&&Y(r))return r;if(n.targetRef&&Y(n.targetRef.current))return n.targetRef.current;var o=(0,i.findDOMNode)(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,c=void 0===o||o,u=t.onResize;if(i||c){var a=Z(u,n.setState.bind(n),i,c);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!X()&&a({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,i=e.children;return Q(t)?"renderProp":Q(i)?"childFunction":(0,r.isValidElement)(i)?"child":Array.isArray(i)?"childArray":"parent"};var o=t.skipOnMount,c=t.refreshMode,u=t.refreshRate,a=void 0===u?1e3:u,f=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=o,n.targetRef=(0,r.createRef)(),n.observableElement=null,X()||(n.resizeHandler=K(n.createResizeHandler,c,a,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}c(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){X()||(this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,c=void 0===o?"div":o,u=this.state,f={width:u.width,height:u.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(e=i)(f);case"child":if((e=i).type&&"string"===typeof e.type){var l=a(f,["targetRef"]);return(0,r.cloneElement)(e,l)}return(0,r.cloneElement)(e,f);case"childArray":return(e=i).map((function(e){return!!e&&(0,r.cloneElement)(e,f)}));default:return r.createElement(c,null)}}}(r.PureComponent);var ee=X()?r.useEffect:r.useLayoutEffect;function te(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,i=e.refreshMode,o=e.refreshRate,c=void 0===o?1e3:o,a=e.refreshOptions,f=e.handleWidth,l=void 0===f||f,s=e.handleHeight,d=void 0===s||s,p=e.targetRef,h=e.observerOptions,v=e.onResize,y=(0,r.useRef)(n),g=(0,r.useRef)(null),b=null!==p&&void 0!==p?p:g,O=(0,r.useRef)(),w=(0,r.useState)({width:void 0,height:void 0}),m=w[0],R=w[1];return ee((function(){if(!X()){var e=Z(v,R,l,d);O.current=K((function(t){(l||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!y.current&&!X()&&e({width:r,height:i}),y.current=!1}))}),i,c,a);var t=new window.ResizeObserver(O.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=O.current;e&&e.cancel&&e.cancel()}}}),[i,c,a,l,d,v,h,b.current]),u({ref:b},m)}}}]);