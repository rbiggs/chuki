!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("chuki",[],t):"object"==typeof exports?exports.chuki=t():e.chuki=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=r(i),l=n(2),c=r(l),f=n(5),s=r(f),d=n(6),v=r(d),y=function(){function e(){u(this,e),this.htmlFile=null,this.htmlString=null,this.components=[],this.events=[]}return o(e,[{key:"on",value:function(e,t,n,r){this.events.push({selector:e,type:t,callback:n,delegate:r})}},{key:"off",value:function(e,t,n){this.unbindEvents(e,t,n)}},{key:"loadComponent",value:function(e){this.components.push(e)}},{key:"injectInDOM",value:function(e){(0,a.default)(this,e)}},{key:"bindEvents",value:function(){(0,c.default)(this)}},{key:"unbindEvents",value:function(e,t,n){(0,s.default)(this,e,t,n)}},{key:"renderComponents",value:function(){var t=!0,n=!1,r=void 0;try{for(var u,o=function(){var t=u.value;if("function"==typeof t){var n=new e;n.render=function(){return t()},n.insert(t.name)}else t.insert()},i=this.components[Symbol.iterator]();!(t=(u=i.next()).done);t=!0)o()}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},{key:"insert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.constructor.name.toLowerCase();(0,v.default)(this,e)}}]),e}();t.default=y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.htmlString=e.render();var n=document.querySelector(t);n.insertAdjacentHTML("beforeend",e.htmlString)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),o=r(u),i=n(4),a=r(i);t.default=function(e){var t=!0,n=!1,r=void 0;try{for(var u,i=e.events[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var l=u.value,c=!0,f=!1,s=void 0;try{for(var d,v=document.querySelectorAll(l.selector)[Symbol.iterator]();!(c=(d=v.next()).done);c=!0){var y=d.value;if(!y.getAttribute("event_id")){var p=(0,o.default)();y.setAttribute("event_id",e.constructor.name.toLowerCase()+"_event_"+p),l.delegate?(0,a.default)(l.selector,l.type,l.delegate,l.callback):document.querySelector("[event_id="+e.constructor.name.toLowerCase()+"_event_"+p+"]").addEventListener(l.type,l.callback)}}}catch(e){f=!0,s=e}finally{try{!c&&v.return&&v.return()}finally{if(f)throw s}}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(36).substr(2,11)+Math.random().toString(36).substr(2,11)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var u=document.querySelector(e),o=function(e){var t=e.target,o=Array.prototype.slice.apply(u.querySelectorAll(n));do for(var i=o.length,a=0;i>a;a++)if(t===o[a]){r.call(o[a],e);break}while(t=t.parentNode)};u.addEventListener(t,o)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){if(e.events&&e.events.length){var u=e.events.findIndex(function(e){return e.selector===t}),o=document.querySelector(t);o.removeEventListener(n,e[r]),e.events.splice(u,1)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=r(u);t.default=function(e,t){if(e.injectInDOM(t),e.bindEvents(t),e.renderComponents(),e.style){var n=e.style(),r=(0,o.default)();r.css(t,n)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(n){return this instanceof e?(n||(n={}),n.prefix=!n.hasOwnProperty("prefix")||!!n.prefix,n.unit=n.hasOwnProperty("unit")?n.unit:"px",this._sheet=null,this._prefix=null,void(this.css=function(e,r,u){if(null==r)return"";null==this._sheet&&(this._sheet=t=t||(0,f.default)()),u=e;var o=(0,y.default)(u,r);(n.prefix||""!==n.unit)&&o.forEach(function(e){""!==n.unit&&(0,a.default)(e[1],n.unit)}),(0,d.default)(o,this._sheet)})):new e(n)}var t=null,n={};return n.css=e().css,n};var u=n(3),o=(r(u),n(8)),i=(r(o),n(9)),a=r(i),l=n(11),c=(r(l),n(12)),f=r(c),s=n(13),d=r(s),v=n(14),y=r(v)},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);e.length>t;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=Array.prototype.concat(e),r=0;t.length>r;r++)Array.isArray(t[r])&&t.splice.apply(t,[r,1].concat(n(t[r--])));return t}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(10),o=r(u);t.default=function(e,t){for(var n in e){var r=e[n]+"";isNaN(r)||o.default[n]||(r+=t),e[n]=r}return e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=/^[:\[]/,r=e.split(","),u=t.split(",");return r.map(function(e){return u.map(function(t){var r=n.test(t)?"":" ";return e+r+t}).join(",")}).join(",")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),o=r(u);t.default=function(){if(null==document.head)throw new Error("Can't add stylesheet before <head> is available. Make sure your document has a head element.");var e=document.createElement("style");return e.id="chui_styles_"+(0,o.default)(),document.head.appendChild(e),e.sheet}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}e.forEach(function(e){var r=[];for(var u in e[1])r.push(n(u)+":"+e[1][u]);r.length>0&&t.insertRule(e[0]+" { "+r.join(";")+" }",0)})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){Array.isArray(t)||(t=[t]);var n={},r=[];return t=(0,i.default)(t),t.forEach(function(t){for(var o in t){var i=t[o];(0,f.default)(i)||Array.isArray(i)?r=r.concat(u((0,l.default)(e,o),i)):("content"===o&&(i="'"+i+"'"),n[o]=i)}}),r.push([e,n]),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=n(8),i=r(o),a=n(11),l=r(a),c=n(15),f=r(c)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e===Object(e)&&Object.prototype.toString===e.toString}}])});