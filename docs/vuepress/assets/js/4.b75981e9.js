(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{120:function(t,n,r){"use strict";r.r(n);r(23);var e=r(24),a={data:function(){return{dialogX:null}},mounted:function(){window.dialogX=new window.VueDialogX(window.Vue),window.buy=Object(e.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dialogX.confirm({message:"点击确认后购买",wait:function(t){return setTimeout(function(){return t()},1500)}});case 2:dialogX.alert({message:"购买成功"});case 3:case"end":return t.stop()}},t)}))}},o=r(0),s=Object(o.a)(a,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"confirm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#confirm","aria-hidden":"true"}},[t._v("#")]),t._v(" Confirm")]),t._v(" "),r("p",[t._v("返回Promise")]),t._v(" "),r("h2",{attrs:{id:"配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("param")]),t._v(" "),r("th",[t._v("type")]),t._v(" "),r("th",[t._v("default")]),t._v(" "),r("th",[t._v("desc")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("title")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("'提示'")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("message")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("''")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("okText")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("'确定'")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cancelText")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("'取消'")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("html")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("''")]),t._v(" "),r("td",[t._v("可以传入html片段 如若传入，将替换掉message内容")])]),t._v(" "),r("tr",[r("td",[t._v("wait")]),t._v(" "),r("td",[t._v("function")]),t._v(" "),r("td",[t._v("null")]),t._v(" "),r("td",[t._v("支持异步式调用 传入next参数 并在函数体中调用next()即可实现异步式调用 效果与alert wait 类似 但是一旦进入加载状态 将隐藏取消按钮 点击确认才会调用wait")])])])]),t._v(" "),r("h2",{attrs:{id:"基础用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),r("p",[r("button",{attrs:{onclick:"dialogX.confirm({message: '请登陆后再试', okText: '去登陆'})"}},[t._v("confirm")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dialog"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请登陆后再试'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  okText"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'去登陆'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do someting...")]),t._v("\n\n")])])]),r("h2",{attrs:{id:"异步关闭用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步关闭用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步关闭用法")]),t._v(" "),r("p",[r("button",{attrs:{onclick:"buy()"}},[t._v("异步关闭")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dialogX"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'点击确认后购买'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wait")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dialogX"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("message"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'购买成功'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);n.default=s.exports},23:function(t,n){!function(n){"use strict";var r,e=Object.prototype,a=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,p=n.regeneratorRuntime;if(p)u&&(t.exports=p);else{(p=n.regeneratorRuntime=u?t.exports:{}).wrap=k;var v="suspendedStart",l="suspendedYield",_="executing",h="completed",f={},d={};d[s]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(G([])));y&&y!==e&&a.call(y,s)&&(d=y);var m=L.prototype=x.prototype=Object.create(d);b.prototype=m.constructor=L,L.constructor=b,L[c]=b.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},p.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[i]=function(){return this},p.AsyncIterator=j,p.async=function(t,n,r,e){var a=new j(k(t,n,r,e));return p.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(m),m[c]="Generator",m[s]=function(){return this},m.toString=function(){return"[object Generator]"},p.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},p.values=G,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,a){return i.type="throw",i.arg=t,n.next=e,a&&(n.method="next",n.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return e("end");if(s.tryLoc<=this.prev){var c=a.call(s,"catchLoc"),u=a.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return e(s.catchLoc,!0);if(this.prev<s.finallyLoc)return e(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return e(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return e(s.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&a.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(s)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var a=e.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:G(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),f}}}function k(t,n,r,e){var a=n&&n.prototype instanceof x?n:x,o=Object.create(a.prototype),s=new C(e||[]);return o._invoke=function(t,n,r){var e=v;return function(a,o){if(e===_)throw new Error("Generator is already running");if(e===h){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var i=O(s,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===v)throw e=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=_;var c=w(t,n,r);if("normal"===c.type){if(e=r.done?h:l,c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(e=h,r.method="throw",r.arg=c.arg)}}}(t,r,s),o}function w(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function b(){}function L(){}function E(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function j(t){var n;this._invoke=function(r,e){function o(){return new Promise(function(n,o){!function n(r,e,o,s){var i=w(t[r],t,e);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){n("next",t,o,s)},function(t){n("throw",t,o,s)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},s)}s(i.arg)}(r,e,n,o)})}return n=n?n.then(o,o):o()}}function O(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,O(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=w(e,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(t){if(t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(a.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},24:function(t,n,r){"use strict";function e(t,n,r,e,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void r(t)}i.done?n(c):Promise.resolve(c).then(e,a)}function a(t){return function(){var n=this,r=arguments;return new Promise(function(a,o){var s=t.apply(n,r);function i(t){e(s,a,o,i,c,"next",t)}function c(t){e(s,a,o,i,c,"throw",t)}i(void 0)})}}r.d(n,"a",function(){return a})}}]);