"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{355:function(t,r,e){e.d(r,{Hx:function(){return w},Ny:function(){return h},Yx:function(){return u},pg:function(){return i},uV:function(){return l}});var n=e(861),a=e(757),s=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31e4aa16d394f964079920d6173ce10a",language:"en-US"}});function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/trending/movie/day");case 3:if(200===(r=t.sent).status){t.next=6;break}throw new Error(r.status);case 6:return t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function i(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/search/movie",{params:r});case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(r));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(r,"/credits"));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function w(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/movie/".concat(r,"/reviews"));case 3:if(200===(e=t.sent).status){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 9:throw t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},785:function(t,r,e){e.r(r);var n=e(861),a=e(439),s=e(757),c=e.n(s),u=e(355),o=e(791),i=e(689),p=e(184);r.default=function(){var t=(0,i.UO)().movie_id,r=(0,o.useState)([]),e=(0,a.Z)(r,2),s=e[0],h=e[1];return(0,o.useEffect)((function(){function r(){return(r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Hx)(t);case 3:e=r.sent,h(e.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:return r.prev=10,r.finish(10);case 12:case"end":return r.stop()}}),r,null,[[0,7,10,12]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[t]),s.length>0?(0,p.jsx)("ul",{children:s.map((function(t){var r=t.author,e=t.content,n=t.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",r]}),(0,p.jsx)("p",{children:e})]},n)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})}}}]);
//# sourceMappingURL=785.42e67e64.chunk.js.map