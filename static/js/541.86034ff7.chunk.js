/*! For license information please see 541.86034ff7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(t,r,e){e.r(r);var n=e(861),o=e(439),a=e(262),i=e(791),c=e(689),u=e(184);function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:j(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function w(){}function m(){}var x={};h(x,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==e&&n.call(L,i)&&(x=L);var E=m.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function j(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return w.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:w,configurable:!0}),w.displayName=h(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},_(k.prototype),h(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),h(E,u,"Generator"),h(E,i,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}r.default=function(){var t=(0,c.UO)().movie_id,r=(0,i.useState)([]),e=(0,o.Z)(r,2),h=e[0],f=e[1];return(0,i.useEffect)((function(){function r(){return(r=(0,n.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,a.uV)(t);case 3:e=r.sent,f(e.cast),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:return r.prev=10,r.finish(10);case 12:case"end":return r.stop()}}),r,null,[[0,7,10,12]])})))).apply(this,arguments)}t&&function(){r.apply(this,arguments)}()}),[t]),(0,u.jsx)("ul",{children:h.length>0?h.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w185/".concat(t.profile_path):"https://png.pngtree.com/png-vector/20191002/ourmid/pngtree-comedy-and-tragedy-theatrical-masks-icon-png-image_1783971.jpg",alt:t.name,width:185,height:278}),(0,u.jsx)("p",{children:t.name}),(0,u.jsxs)("p",{children:["Character: ",t.character]})]},t.id)})):(0,u.jsx)("p",{children:"No cast available for this movie."})})}},262:function(t,r,e){e.d(r,{Hx:function(){return v},Ny:function(){return h},Yx:function(){return i},pg:function(){return u},uV:function(){return l}});var n=e(861);function o(){o=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:j(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function w(){}function m(){}var x={};h(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=m.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function j(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return w.prototype=m,a(E,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:w,configurable:!0}),w.displayName=h(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},_(k.prototype),h(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),h(E,s,"Generator"),h(E,c,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var a=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31e4aa16d394f964079920d6173ce10a",language:"en-US"}});function i(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get("/trending/movie/day");case 3:if(200===(r=t.sent).status){t.next=6;break}throw new Error(r.status);case 6:return t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(o().mark((function t(r){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get("/search/movie",{params:r});case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function t(r){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get("/movie/".concat(r));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(o().mark((function t(r){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get("/movie/".concat(r,"/credits"));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function t(r){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get("/movie/".concat(r,"/reviews"));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=541.86034ff7.chunk.js.map