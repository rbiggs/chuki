!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("chuki",[],factory):"object"==typeof exports?exports.chuki=factory():root.chuki=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _App=__webpack_require__(1),_App2=_interopRequireDefault(_App);_App2.default.appendTo("#app")},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;props.length>i;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_templateObject=_taggedTemplateLiteral(["\n      <div>\n        <DumbComponent></DumbComponent>\n        <HelloWorld></HelloWorld>\n        <Counter></Counter>\n        <FruitsList></FruitsList>\n        <h2>5. Unbind Hello World Input</h2>\n        <p>This button accesses the HelloWorld off method through its imported instance inside the App component.</p>\n        <p>\n          <button id='stop'>Stop Hello World Updates!</button>\n        </p>\n      </div>\n    "],["\n      <div>\n        <DumbComponent></DumbComponent>\n        <HelloWorld></HelloWorld>\n        <Counter></Counter>\n        <FruitsList></FruitsList>\n        <h2>5. Unbind Hello World Input</h2>\n        <p>This button accesses the HelloWorld off method through its imported instance inside the App component.</p>\n        <p>\n          <button id='stop'>Stop Hello World Updates!</button>\n        </p>\n      </div>\n    "]),_chuki=__webpack_require__(2),_HelloWorld=__webpack_require__(4),_HelloWorld2=_interopRequireDefault(_HelloWorld),_DumbComponent=__webpack_require__(5),_DumbComponent2=_interopRequireDefault(_DumbComponent),_FruitsList=__webpack_require__(6),_FruitsList2=_interopRequireDefault(_FruitsList),_Counter=__webpack_require__(8),_Counter2=_interopRequireDefault(_Counter),App=function(_Chuki){function App(){_classCallCheck(this,App);var _this=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this));return _this.loadComponent(_DumbComponent2.default),_this.loadComponent(_HelloWorld2.default),_this.loadComponent(_Counter2.default),_this.loadComponent(_FruitsList2.default),_this}return _inherits(App,_Chuki),_createClass(App,[{key:"render",value:function(){return(0,_chuki.html)(_templateObject)}},{key:"bind",value:function(){return[{selector:"#stop",type:"click",callback:this.turnoffHelloWorld}]}},{key:"turnoffHelloWorld",value:function(){_HelloWorld2.default.off("#hello","input","logHello"),alert("No more input!")}},{key:"styles",value:function(){return{h1:{margin:0},input:{border:"solid 1px blue",boxShadow:"0 2px 4px rgba(0,0,0,0.5)"}}}}]),App}(_chuki.Chuki);exports.default=new App},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(module){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(e,t){"object"==_typeof(exports)&&"object"==_typeof(module)?module.exports=t():(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=t,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.html=t.Chuki=void 0;var o=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=r(i),l=n(4),c=r(l),f=n(7),s=r(f),d=n(8),v=r(d),p=n(18),y=r(p),h=function(){function e(){u(this,e),this.template=null,this.components=[],this.eventCache=[]}return o(e,[{key:"on",value:function(e,t,n,r){this.eventCache.push({selector:e,type:t,callback:n,delegate:r})}},{key:"off",value:function(e,t,n){this.unbindEvents(e,t,n)}},{key:"loadComponent",value:function(e){this.components.push(e)}},{key:"mount",value:function(e){(0,a.default)(this,e)}},{key:"bindEvents",value:function(){(0,c.default)(this)}},{key:"unbindEvents",value:function(e,t,n){(0,s.default)(this,e,t,n)}},{key:"renderComponents",value:function(){var t=!0,n=!1,r=void 0;try{for(var u,o=function(){var t=u.value;if("function"==typeof t){var n=new e;n.render=function(){return t()},n.appendTo(t.name)}else t.appendTo()},i=this.components[Symbol.iterator]();!(t=(u=i.next()).done);t=!0)o()}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},{key:"appendTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.constructor.name.toLowerCase(),t=this;if((0,v.default)(this,e),this.bind){var n=this.bind();n.forEach(function(e){return t.eventCache.push({selector:e.selector,type:e.type,callback:e.callback,delegate:e.delegate})})}this.bindEvents()}}]),e}();t.Chuki=h,t.html=y.default},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),o=r(u),i=n(3),a=r(i);t.default=function(e,t){e.template=e.render();var n=(0,a.default)(e.template);(0,o.default)(t,n)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.nodeType?e.appendChild(t):"string"==typeof e&&document.querySelector(e).appendChild(t)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("div");t.innerHTML=e;var n=document.createDocumentFragment(),r=Array.prototype.slice.apply(t.childNodes);return r.map(function(e){return n.appendChild(e)}),n}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u),i=n(6),a=r(i);t.default=function(e){var t=!0,n=!1,r=void 0;try{for(var u,i=e.eventCache[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var l=u.value,c=!0,f=!1,s=void 0;try{for(var d,v=document.querySelectorAll(l.selector)[Symbol.iterator]();!(c=(d=v.next()).done);c=!0){var p=d.value;if(!p.getAttribute("event_id")){var y=(0,o.default)();p.setAttribute("event_id",e.constructor.name.toLowerCase()+"_event_"+y),l.delegate?(0,a.default)(l.selector,l.type,l.delegate,l.callback):document.querySelector("[event_id="+e.constructor.name.toLowerCase()+"_event_"+y+"]").addEventListener(l.type,l.callback)}}}catch(e){f=!0,s=e}finally{try{!c&&v.return&&v.return()}finally{if(f)throw s}}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(36).substr(2,11)+Math.random().toString(36).substr(2,11)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var u=document.querySelector(e),o=function o(e){var t=e.target,o=Array.prototype.slice.apply(u.querySelectorAll(n));do for(var i=o.length,a=0;i>a;a++)if(t===o[a]){r.call(o[a],e);break}while(t=t.parentNode)};u.addEventListener(t,o)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){if(e.eventCache&&e.eventCache.length){var u=e.eventCache.findIndex(function(e){return e.selector===t}),o=document.querySelector(t);o.removeEventListener(n,e[r]),e.eventCache.splice(u,1)}}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),o=r(u);t.default=function(e,t){if(e.mount(t),e.renderComponents(),e.style){var n=e.style(),r=(0,o.default)();r.css(t,n)}}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(n){return this instanceof e?(n||(n={}),n.prefix=!n.hasOwnProperty("prefix")||!!n.prefix,n.unit=n.hasOwnProperty("unit")?n.unit:"px",this._sheet=null,this._prefix=null,void(this.css=function(e,r,u){if(null==r)return"";null==this._sheet&&(this._sheet=t=t||(0,f.default)()),u=e;var o=(0,p.default)(u,r);(n.prefix||""!==n.unit)&&o.forEach(function(e){""!==n.unit&&(0,a.default)(e[1],n.unit)}),(0,d.default)(o,this._sheet)})):new e(n)}var t=null,n={};return n.css=e().css,n};var u=n(5),o=(r(u),n(10)),i=(r(o),n(11)),a=r(i),l=n(13),c=(r(l),n(14)),f=r(c),s=n(15),d=r(s),v=n(16),p=r(v)},function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);e.length>t;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=Array.prototype.concat(e),r=0;t.length>r;r++)Array.isArray(t[r])&&t.splice.apply(t,[r,1].concat(n(t[r--])));return t}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(12),o=r(u);t.default=function(e,t){for(var n in e){var r=e[n]+"";isNaN(r)||o.default[n]||(r+=t),e[n]=r}return e}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0};t.default=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=/^[:\[]/,r=e.split(","),u=t.split(",");return r.map(function(e){return u.map(function(t){var r=n.test(t)?"":" ";return e+r+t}).join(",")}).join(",")}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u);t.default=function(){if(null==document.head)throw new Error("Can't add stylesheet before <head> is available. Make sure your document has a head element.");var e=document.createElement("style");return e.id="chui_styles_"+(0,o.default)(),document.head.appendChild(e),e.sheet}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}e.forEach(function(e){var r=[];for(var u in e[1])r.push(n(u)+":"+e[1][u]);r.length>0&&t.insertRule(e[0]+" { "+r.join(";")+" }",0)})}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){Array.isArray(t)||(t=[t]);var n={},r=[];return t=(0,i.default)(t),t.forEach(function(t){for(var o in t){var i=t[o];(0,f.default)(i)||Array.isArray(i)?r=r.concat(u((0,l.default)(e,o),i)):("content"===o&&(i="'"+i+"'"),n[o]=i)}}),r.push([e,n]),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=n(10),i=r(o),a=n(13),l=r(a),c=n(17),f=r(c)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e===Object(e)&&Object.prototype.toString===e.toString}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return e.reduce(function(e,t,r){var u=n[r-1];return Array.isArray(u)&&(u=u.join(""+e.match(/(\s+)$/)[1])),e+u+t})}}])})}).call(exports,__webpack_require__(3)(module))},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children=[],module.webpackPolyfill=1),module}},function(module,exports,__webpack_require__){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;props.length>i;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_templateObject=_taggedTemplateLiteral(['\n      <h2>2. Hello World Example</h2>\n      <h1 id="title">Hello</h1>\n      <div>\n        <input id="hello" type="text"/>\n        <button id="reset">Reset!</button>\n        <button id=\'turnOff\'>Turn Off!</button>\n      </div>\n    '],['\n      <h2>2. Hello World Example</h2>\n      <h1 id="title">Hello</h1>\n      <div>\n        <input id="hello" type="text"/>\n        <button id="reset">Reset!</button>\n        <button id=\'turnOff\'>Turn Off!</button>\n      </div>\n    ']),_chuki=__webpack_require__(2),HelloWorld=function(_Chuki){function HelloWorld(){return _classCallCheck(this,HelloWorld),_possibleConstructorReturn(this,(HelloWorld.__proto__||Object.getPrototypeOf(HelloWorld)).call(this))}return _inherits(HelloWorld,_Chuki),_createClass(HelloWorld,[{key:"render",value:function(){return(0,_chuki.html)(_templateObject)}},{key:"bind",value:function(){return[{selector:"#hello",type:"input",callback:this.logHello},{selector:"#reset",type:"click",callback:this.reset},{selector:"#turnOff",type:"click",callback:this.turnOff.bind(this)}]}},{key:"logHello",value:function(){title.innerHTML="Hello "+document.getElementById("hello").value+"!"}},{key:"reset",value:function(){title.innerHTML="Hello World",hello.value="World"}},{key:"turnOff",value:function(){this.off("#hello","input","logHello")}},{key:"style",value:function(){return{h1:{color:"#3a6da8","text-shadow":"0 2px 2px rgba(0,0,0,0.25)",margin:0}}}}]),HelloWorld}(_chuki.Chuki);exports.default=new HelloWorld},function(module,exports){"use strict";function DumbComponent(){return"\n    <h2>1. Dumb Component Example</h2>\n    <div class='dumb-component'>\n      <h4>This is a Dumb Component!</h4>\n      <p>Why dumb? It's a function that doesn't do anything but render some static HTML.</p>\n    </div>\n    "}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=DumbComponent},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;props.length>i;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_templateObject=_taggedTemplateLiteral(["\n      ",""],["\n      ",""]),_templateObject2=_taggedTemplateLiteral(["\n        <li data-id='","'>\n          <span>","</span> $"," lb.\n        </li>\n      "],["\n        <li data-id='","'>\n          <span>","</span> $"," lb.\n        </li>\n      "]),_templateObject3=_taggedTemplateLiteral(["\n      <h2>4. Interactive List Example</h2>\n      <h3>Choose a Fruit:</h3>\n      <ul>\n        ","\n      </ul>\n      <p id='result'></p>\n    "],["\n      <h2>4. Interactive List Example</h2>\n      <h3>Choose a Fruit:</h3>\n      <ul>\n        ","\n      </ul>\n      <p id='result'></p>\n    "]),_chuki=__webpack_require__(2),_fruits=__webpack_require__(7),_fruits2=_interopRequireDefault(_fruits),FruitsList=function(_Chuki){function FruitsList(){return _classCallCheck(this,FruitsList),_possibleConstructorReturn(this,(FruitsList.__proto__||Object.getPrototypeOf(FruitsList)).call(this))}return _inherits(FruitsList,_Chuki),_createClass(FruitsList,[{key:"render",value:function(){var li=function(){return(0,_chuki.html)(_templateObject,_fruits2.default.map(function(fruit){return(0,_chuki.html)(_templateObject2,fruit.id,fruit.name,fruit.price)}).join(""))};return(0,_chuki.html)(_templateObject3,li())}},{key:"bind",value:function(){return[{selector:"ul",type:"click",callback:this.announce,delegate:"li"}]}},{key:"announce",value:function(e){var id=this.dataset.id,choice=_fruits2.default.filter(function(fruit){return id===fruit.id})[0],siblings=Array.prototype.slice.apply(this.parentNode.children);siblings.forEach(function(el){el.classList.remove("selected")}),this.classList.add("selected");var setResults=function(bc,c){result.style.backgroundColor=bc,result.style.color=c,result.style.borderWidth="1px",result.style.display="block"};switch(choice.name){case"Apple":setResults("red","#fff");break;case"Orange":setResults("#ffc100","#000");break;case"Banana":setResults("yellow","#000");break;case"Watermelon":setResults("pink","#000");break;case"Mango":setResults("#ff9400","#fff")}result.innerHTML="You Selected: <strong>"+choice.name+"</strong>"}},{key:"style",value:function(){return{h3:{margin:"0"},ul:{padding:"0",margin:"0 0 10px 0",border:"solid 1px #ccc",width:200,backgroundColor:"#fff",li:{display:"flex","flex-direction":"row",listStyle:"none",margin:"0",padding:"5px 10px",borderBottom:"solid 1px #ccc",cursor:"pointer",transition:"all .25s ease-out",":last-of-type":{border:"none"},":hover":{backgroundColor:"#ccc"},span:{flex:1}},"li.selected":{backgroundColor:"#84b1e4",":hover":{backgroundColor:"#84b1e4"}}},"#result":{margin:0,padding:"4px 10px",display:"none",fontWeight:"bold",fontVariant:"small-caps",width:"202px","box-sizing":"border-box",border:"solid 0px #666",transition:"all .5s ease-out"}}}}]),FruitsList}(_chuki.Chuki);exports.default=new FruitsList},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=[{id:"a1",name:"Apple",price:"1.10"},{id:"a2",name:"Orange",price:"1.29"},{id:"a3",name:"Watermelon",price:"0.33"},{id:"a4",name:"Banana",price:"0.65"},{id:"a5",name:"Mango",price:"2.49"}]},function(module,exports,__webpack_require__){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function toggleBtnState(sub,add){btnSubtract.disabled=sub,btnAdd.disabled=add}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;props.length>i;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_templateObject=_taggedTemplateLiteral(["\n      <h2>3. Counter Example</h2>\n      <p>From 0 to 10:</p>\n      <div class='counter-sheath'>\n        <button "," id='btnSubtract'>-</button>\n        <span id='counterValue'>","</span>\n        <button id='btnAdd'>+</button>\n      </div>\n    "],["\n      <h2>3. Counter Example</h2>\n      <p>From 0 to 10:</p>\n      <div class='counter-sheath'>\n        <button "," id='btnSubtract'>-</button>\n        <span id='counterValue'>","</span>\n        <button id='btnAdd'>+</button>\n      </div>\n    "]),_chuki=__webpack_require__(2),Counter=function(_Chuki){function Counter(){_classCallCheck(this,Counter);var _this=_possibleConstructorReturn(this,(Counter.__proto__||Object.getPrototypeOf(Counter)).call(this));return _this.model=0,_this}return _inherits(Counter,_Chuki),_createClass(Counter,[{key:"render",value:function(){return(0,_chuki.html)(_templateObject,0==this.model?"disabled":"",this.model)}},{key:"bind",value:function(){return[{selector:"#btnSubtract",type:"click",callback:this.subtract.bind(this)},{selector:"#btnAdd",type:"click",callback:this.add.bind(this)}]}},{key:"subtract",value:function(){return this.model>0?void(1==this.model?(toggleBtnState(!0,!1),counterValue.textContent=--this.model):(toggleBtnState(!1,!1),counterValue.textContent=--this.model)):void toggleBtnState(!0,!1)}},{key:"add",value:function(){return 10>this.model?void(9==this.model?(toggleBtnState(!1,!0),counterValue.textContent=++this.model):(toggleBtnState(!1,!1),counterValue.textContent=++this.model)):void toggleBtnState(!1,!0)}},{key:"style",value:function(){return{".counter-sheath":{display:"flex",padding:"5px 10px",border:"solid 1px #ccc",width:110,boxSizing:"border-box",backgroundColor:"#fff"},"h2 + p":{margin:0},span:{display:"inline-block",width:40,margin:"0 2px",textAlign:"center",border:"solid 1px #666",backgroundColor:"#3a6da8",color:"#fff"},button:{height:20,cursor:"pointer",border:"solid 1px #ccc",borderRadius:"4px",backgroundColor:"#fff",":hover":{backgroundColor:"#3a6da8",color:"#fff"},":focus":{outline:"none"}},"button[disabled]":{cursor:"default",opacity:".5",backgroundColor:"#ccc",":hover":{color:"#3a6da8",backgroundColor:"#ccc"}}}}}]),Counter}(_chuki.Chuki);exports.default=new Counter}])});