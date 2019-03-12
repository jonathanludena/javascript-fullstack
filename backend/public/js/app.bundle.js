!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";(function(e){var r=n(3);const o=new(n(4).a),i=e.env.PORT||3e3;t.a=class{async renderBooks(){const e=await o.getBooks(),t=document.getElementById("books-cards");t.innerHTML="",e.forEach(e=>{const n=document.createElement("div");n.className="",n.innerHTML=`\n        <div class="card m-2">\n          <div class="row">\n            <div class="col-md-4">\n              <img src="http://localhost:${i}${e.imagePath}" alt="" class="img-fluid" />\n            </div>\n            <div class="col-md-8">\n              <div class="card-block px-2">\n                <h4 class="card-title">${e.title}</h4>\n                <p class="card-text">${e.author}</p>\n                <a href="#" class="btn btn-danger delete" _id="${e._id}">X</a>\n              </div>\n            </div>\n          </div>\n          <div class="card-footer">${Object(r.format)(e.created_at)}</div>\n        </div>\n      `,t.appendChild(n)})}async addNewBook(e){await o.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMessage(e,t,n){const r=document.createElement("div");r.className=`alert alert-${t} message`,r.appendChild(document.createTextNode(e));const o=document.querySelector(".col-md-4"),i=document.querySelector("#book-form");o.insertBefore(r,i),setTimeout(()=>{document.querySelector(".message").remove()},n)}async deleteBook(e){await o.deleteBook(e),this.renderBooks()}}}).call(this,n(7))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var r="second_minute_hour_day_week_month_year".split("_"),o="秒_分钟_小时_天_周_个月_年".split("_"),i=function(e,t){if(0===t)return["just now","right now"];var n=r[parseInt(t/2)];return e>1&&(n+="s"),["".concat(e," ").concat(n," ago"),"in ".concat(e," ").concat(n)]},a={en_US:i,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var n=o[parseInt(t/2)];return["".concat(e," ").concat(n,"前"),"".concat(e," ").concat(n,"后")]}};t.register=function(e,t){a[e]=t};t.getLocale=function(e){return a[e]||i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var r=[60,60,24,7,365/7/12,12],o=function(e){return parseInt(e)};t.toInt=o;var i=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(o(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=i;t.formatDiff=function(e,t){for(var n=0,i=e<0?1:0,a=e=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n];return(e=o(e))>(0==(n*=2)?9:1)&&(n+=1),t(e,n,a)[i].replace("%s",e)};t.diffSec=function(e,t){return((t=t?i(t):new Date)-i(e))/1e3};t.nextInterval=function(e){for(var t=1,n=0,o=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n],t*=r[n];return o=(o%=t)?t-o:t,Math.ceil(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"format",{enumerable:!0,get:function(){return r.format}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return o.render}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return o.cancel}}),Object.defineProperty(t,"register",{enumerable:!0,get:function(){return i.register}}),t.version=void 0;var r=n(8),o=n(9),i=n(1);t.version="4.0.0-beta.2"},function(e,t,n){"use strict";t.a=class{constructor(){this.URI="http://localhost:3000/api/books"}async getBooks(){const e=await fetch(this.URI);return await e.json()}async postBook(e){const t=await fetch(this.URI,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteBook(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();console.log(n)}}},function(e,t,n){"use strict";n.r(t);n(6);var r=n(0);document.addEventListener("DOMContentLoaded",()=>{(new r.a).renderBooks()}),document.getElementById("book-form").addEventListener("submit",e=>{const t=document.getElementById("title").value,n=document.getElementById("author").value,o=document.getElementById("isbn").value,i=document.getElementById("image").files,a=new FormData;a.append("image",i[0]),a.append("title",t),a.append("author",n),a.append("isbn",o);const c=new r.a;c.addNewBook(a),c.renderMessage("New Book added","success",3e3),e.preventDefault()}),document.getElementById("books-cards").addEventListener("click",e=>{if(e.target.classList.contains("delete")){const t=new r.a;t.deleteBook(e.target.getAttribute("_id")),t.renderMessage("Book removed","danger",2e3)}e.preventDefault()})},function(e,t,n){},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],d=!1,l=-1;function f(){d&&u&&(d=!1,u.length?s=u.concat(s):l=-1,s.length&&m())}function m(){if(!d){var e=c(f);d=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new v(e,t)),1!==s.length||d||c(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;var r=n(2),o=n(1);t.format=function(e,t,n){var i=(0,r.diffSec)(e,n);return(0,r.formatDiff)(i,(0,o.getLocale)(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.cancel=void 0;var r=n(10),o=n(2),i=n(1),a={},c=function(e){clearTimeout(e),delete a[e]},u=function e(t,n,i,u){c((0,r.getTimerId)(t));var s=(0,o.diffSec)(n,u);t.innerHTML=(0,o.formatDiff)(s,i);var d=setTimeout(function(){e(t,n,i,u)},1e3*(0,o.nextInterval)(s),2147483647);a[d]=0,(0,r.saveTimerId)(t,d)};t.cancel=function(e){if(e)c((0,r.getTimerId)(e));else for(var t in a)c(t)};t.render=function(e,t,n){var o;void 0===e.length&&(e=[e]);for(var a=0;a<e.length;a++){o=e[a];var c=(0,r.getDateAttribute)(o),s=(0,i.getLocale)(t);u(o,c,s,n)}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimerId=t.saveTimerId=t.getDateAttribute=void 0;var r=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0};t.getDateAttribute=function(e){return r(e,"datetime")};t.saveTimerId=function(e,t){return e.setAttribute?e.setAttribute("timeago-tid",t):e.attr?e.attr("timeago-tid",t):void 0};t.getTimerId=function(e){return r(e,"timeago-tid")}}]);
//# sourceMappingURL=app.bundle.js.map