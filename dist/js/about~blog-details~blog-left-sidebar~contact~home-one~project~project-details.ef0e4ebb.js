(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~blog-details~blog-left-sidebar~contact~home-one~project~project-details"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-area"},[n("div",{staticClass:"header-area__desktop header-area__desktop--default"},[n("div",{staticClass:"header-info-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"header-info-wrapper align-items-center"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:"assets/img/logo/ttaf-medikal-logo.png",alt:"Brand Logo"}})])],1),n("div",{staticClass:"mobile-navigation-icon",attrs:{id:"mobile-menu-trigger"},on:{click:function(e){return t.mobiletoggleClass("addClass","active")}}},[n("i")])])])])])]),n("fixed-header",[n("div",{staticClass:"header-navigation-area default-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"header-navigation header-navigation--header-default position-relative"},[n("div",{staticClass:"header-navigation__nav position-static"},[n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Anasayfa")])],1),n("li",[n("router-link",{attrs:{to:"/*"}},[t._v("Çözümlerimiz")])],1),n("li",{staticClass:"has-children has-children--multilevel-submenu"},[n("router-link",{attrs:{to:"/kisisel-koruyucular"}},[t._v("Ürünlerimiz")]),n("ul",{staticClass:"submenu"},[n("li",[n("router-link",{attrs:{to:"/kisisel-koruyucular"}},[t._v("Kişisel Koruyucular")])],1),n("li",[n("router-link",{attrs:{to:"/ürün-detay"}},[t._v("Sterilizasyon")])],1)])],1),n("li",[n("router-link",{attrs:{to:"/hakkimizda"}},[t._v("Hakkımızda")])],1),n("li",[n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),n("li",[n("router-link",{attrs:{to:"/iletisim"}},[t._v("İletişim")])],1),n("li",{staticClass:"has-children has-children--multilevel-submenu"},[n("router-link",{attrs:{to:"/"}},[t._v("Dil")]),n("ul",{staticClass:"submenu"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("TR")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("ENG")])],1)])],1)])])])])])])])])])],1)])},a=[],i=n("1ea9"),o=n.n(i),l={components:{FixedHeader:o.a},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},s=l,c=(n("5452"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null);e["a"]=u.exports},"0693":function(t,e,n){},"1e05":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offcanvas-menu",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"offcanvas-menu__inner"},[n("div",{staticClass:"offcanvas-menu__header"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 col-8"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"assets/img/logo/ttaf-medikal-logo.png",alt:"logo"}})])],1)]),n("div",{staticClass:"col-md-6 col-4"},[n("div",{staticClass:"text-right"},[n("span",{staticClass:"mobile-navigation-close-icon",on:{click:function(e){return t.mobiletoggleClass("removeClass","active")}}})])])])])]),n("MobileNavMenu")],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{staticClass:"menu-item-has-children"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("ul",{staticClass:"sub-menu"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home One")])],1),n("li",[n("router-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),n("li",[n("router-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),n("li",[n("router-link",{attrs:{to:"/*"}},[t._v("Çözümlerimiz")])],1),n("li",{staticClass:"menu-item-has-children"},[n("router-link",{attrs:{to:"/kisisel-koruyucular"}},[t._v("Ürünlerimiz")]),n("ul",{staticClass:"sub-menu"},[n("li",[n("router-link",{attrs:{to:"/kisisel-koruyucular"}},[t._v("Kişisel Koruyucular")])],1),n("li",[n("router-link",{attrs:{to:"/ürün-detay"}},[t._v("Sterilizasyon")])],1)])],1),n("li",[n("router-link",{attrs:{to:"/hakkimizda"}},[t._v("Hakkımızda")])],1),n("li",[n("router-link",{attrs:{to:"/iletisim"}},[t._v("İletişim")])],1),n("li",[n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),n("li",{staticClass:"menu-item-has-children"},[n("router-link",{attrs:{to:"/project"}},[t._v("Dil")]),n("ul",{staticClass:"sub-menu"},[n("li",[n("router-link",{attrs:{to:"/project"}},[t._v("TR")])],1),n("li",[n("router-link",{attrs:{to:"/project-details"}},[t._v("ENG")])],1)])],1)])])])},o=[],l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),r=0;r<e.length;r++)e[r].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var a=t.querySelectorAll(".menu-expand"),i=a.length,o=0;o<i;o++)a[o].addEventListener("click",(function(t){s(t)}));for(var l=0;l<n.length;l++)n[l].addEventListener("click",(function(){c()}));var s=function(t){t.currentTarget.parentElement.classList.toggle("active")},c=function(){var t=document.querySelector("#offcanvas-mobile-menu");t.classList.remove("active")}}},s=l,c=(n("3815"),n("2877")),u=Object(c["a"])(s,i,o,!1,null,null,null),d=u.exports,f={components:{MobileNavMenu:d},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},v=f,m=(n("cf3a"),Object(c["a"])(v,r,a,!1,null,null,null));e["a"]=m.exports},"1ea9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=r.__importDefault(n("3317"));e.default=a.default},3317:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),a=r.__importDefault(n("2b0e"));e.default=a.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var e=t,n=e.threshold,r=e.hideScrollUp,a=t.getScrollTop(),i=a>n,o=a>=t.lastScrollTop,l=(o||!r)&&i;t.lastScrollTop=a,t.isFixed!==l&&(t.isFixed=l,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var e,n=this.$slots.default;if(!n||!r.__spreadArrays(n)[0])return t();var a=r.__spreadArrays(n)[0],i=t(a.tag,a.data,a.children||a.text);return i.data=i.data||{class:""},"string"===typeof i.data.class&&(i.data.class=i.data.class.split(" ")),Array.isArray(i.data.class)&&(i.data.class=r.__spreadArrays(i.data.class).reduce((function(t,e){var n;return r.__assign(r.__assign({},t),(n={},n[e]=!0,n))}),{})),i.data.class=r.__assign(r.__assign({},i.data.class),(e={},e[this.headerClass]=!0,e[this.fixedClass]=!!this.isFixed,e)),i.data.class=Object.entries(i.data.class).map((function(t){var e=t[0],n=t[1];return n?e:null})).filter((function(t){return t})).join(" "),i}})},3815:function(t,e,n){"use strict";var r=n("0693"),a=n.n(r);a.a},5452:function(t,e,n){"use strict";var r=n("af35"),a=n.n(r);a.a},"86af":function(t,e,n){},"9ab4":function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return a})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return o})),n.d(e,"__decorate",(function(){return l})),n.d(e,"__param",(function(){return s})),n.d(e,"__metadata",(function(){return c})),n.d(e,"__awaiter",(function(){return u})),n.d(e,"__generator",(function(){return d})),n.d(e,"__exportStar",(function(){return f})),n.d(e,"__values",(function(){return v})),n.d(e,"__read",(function(){return m})),n.d(e,"__spread",(function(){return p})),n.d(e,"__spreadArrays",(function(){return _})),n.d(e,"__await",(function(){return h})),n.d(e,"__asyncGenerator",(function(){return g})),n.d(e,"__asyncDelegator",(function(){return y})),n.d(e,"__asyncValues",(function(){return b})),n.d(e,"__makeTemplateObject",(function(){return k})),n.d(e,"__importStar",(function(){return C})),n.d(e,"__importDefault",(function(){return w}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)};function a(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)};function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}function l(t,e,n,r){var a,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function s(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function u(t,e,n,r){return new(n||(n=Promise))((function(a,i){function o(t){try{s(r.next(t))}catch(e){i(e)}}function l(t){try{s(r["throw"](t))}catch(e){i(e)}}function s(t){t.done?a(t.value):new n((function(e){e(t.value)})).then(o,l)}s((r=r.apply(t,e||[])).next())}))}function d(t,e){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(t){return function(e){return s([t,e])}}function s(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(a=2&i[0]?r["return"]:i[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(l){i=[6,l],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function f(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function v(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function m(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,a,i=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=i.next()).done)o.push(r.value)}catch(l){a={error:l}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(a)throw a.error}}return o}function p(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m(arguments[e]));return t}function _(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),a=0;for(e=0;e<n;e++)for(var i=arguments[e],o=0,l=i.length;o<l;o++,a++)r[a]=i[o];return r}function h(t){return this instanceof h?(this.v=t,this):new h(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(t,e||[]),i=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(t){a[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||l(t,e)}))})}function l(t,e){try{s(a[t](e))}catch(n){d(i[0][3],n)}}function s(t){t.value instanceof h?Promise.resolve(t.value.v).then(c,u):d(i[0][2],t)}function c(t){l("next",t)}function u(t){l("throw",t)}function d(t,e){t(e),i.shift(),i.length&&l(i[0][0],i[0][1])}}function y(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,a){e[r]=t[r]?function(e){return(n=!n)?{value:h(t[r](e)),done:"return"===r}:a?a(e):e}:a}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"===typeof v?v(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){e=t[n](e),a(r,i,e.done,e.value)}))}}function a(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}}function k(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function C(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function w(t){return t&&t.__esModule?t:{default:t}}},af35:function(t,e,n){},b58e:function(t){t.exports=JSON.parse('{"footerLogo":"assets/img/logo/ttaf-medikal-logo.png","footerDesc":"Lorem ipsum dolor sit amet consect adipisici elit, sed do eiusmod tempor incididuk ut labore et dolore magna aliqua Ut enim 126","footerLinkTitleOne":"Sitemap","navListOne":[{"navTitle":"TTAF Medikal","navUrl":"/"},{"navTitle":"Çözümlerimiz","navUrl":"*"},{"navTitle":"Ürünlerimiz","navUrl":"/"},{"navTitle":"Kişisel Koruyucular","navUrl":"/"},{"navTitle":"Sterilizasyon","navUrl":"/"}],"footerLinkTitleTwo":"Sitemap","navListTwo":[{"navTitle":"Hakkımızda","navUrl":"/"},{"navTitle":"İletişim","navUrl":"/"},{"navTitle":"TTAF Kurumsal","navUrl":"/"},{"navTitle":"TTAF Aydınlatma","navUrl":"/"},{"navTitle":"TTAF Shop","navUrl":"/"},{"navTitle":"KVKK GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ","navUrl":"/"}],"footerContactWidget":{"widgetTitle":"İletişim Adreslerimiz","widgetDesc":"Kavaklı Mah. İstanbul Cad. No:21 Beylikdüzü / İstanbul / TÜRKİYE","contactInfo":[{"title":"<span>T:</span>+90 212 855 82 20"},{"title":"<span>F:</span>+90 212 855 82 21"},{"title":"<span>E:</span>info@ttaf.com.tr"}]}}')},cf3a:function(t,e,n){"use strict";var r=n("86af"),a=n.n(r);a.a},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-area dark-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"footer-content-wrapper section-space--inner--100"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3 col-lg-3 col-md-12"},[n("FooterAbout",{attrs:{logo:t.data.footerLogo,desc:t.data.footerDesc}})],1),n("div",{staticClass:"col-xl-2 offset-xl-1 col-lg-3 col-md-4"},[n("FooterLink",{attrs:{title:t.data.footerLinkTitleOne,nav:t.data.navListOne}})],1),n("div",{staticClass:"col-xl-2 offset-xl-1 col-lg-3 col-md-4"},[n("FooterLink",{attrs:{title:t.data.footerLinkTitleTwo,nav:t.data.navListTwo}})],1),n("div",{staticClass:"col-xl-2 offset-xl-1 col-lg-3 col-md-4"},[n("ContactWidget",{attrs:{contactWidgetData:t.data.footerContactWidget}})],1)])])])])]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-copyright-wrapper"},[n("div",{staticClass:"footer-copyright text-center"},[t._v("Copyright © 2020.")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-intro-wrapper"},[n("div",{staticClass:"footer-logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.logo,alt:"logo"}})])],1),n("div",{staticClass:"footer-desc"},[t._v(" "+t._s(t.desc)+" ")])])},o=[],l={props:["logo","desc"]},s=l,c=n("2877"),u=Object(c["a"])(s,i,o,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget__title"},[t._v(t._s(t.title))]),n("ul",{staticClass:"footer-widget__navigation"},t._l(t.nav,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:e.navUrl}},[t._v(t._s(e.navTitle))])],1)})),0)])},v=[],m={props:["title","nav"]},p=m,_=Object(c["a"])(p,f,v,!1,null,null,null),h=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget mb-0"},[n("h4",{staticClass:"footer-widget__title"},[t._v(t._s(t.contactWidgetData.widgetTitle))]),n("div",{staticClass:"footer-widget__content"},[n("p",{staticClass:"address"},[t._v(t._s(t.contactWidgetData.widgetDesc))]),n("ul",{staticClass:"contact-details"},t._l(t.contactWidgetData.contactInfo,(function(e){return n("li",{key:e.id,domProps:{innerHTML:t._s(e.title)}},[t._v(" "+t._s(e.title)+" ")])})),0)])])},y=[],b={props:["contactWidgetData"]},k=b,C=Object(c["a"])(k,g,y,!1,null,null,null),w=C.exports,T=n("b58e"),x={components:{FooterAbout:d,FooterLink:h,ContactWidget:w},data:function(){return{data:T}}},S=x,O=Object(c["a"])(S,r,a,!1,null,null,null);e["a"]=O.exports}}]);
//# sourceMappingURL=about~blog-details~blog-left-sidebar~contact~home-one~project~project-details.ef0e4ebb.js.map