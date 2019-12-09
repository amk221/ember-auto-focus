"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,o.default.modulePrefix)
var i=r
e.default=i})),define("dummy/controllers/modifier",["exports"],(function(e){var t
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,n,o,r){var i={}
return Object.keys(o).forEach((function(e){i[e]=o[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=(a((t=function(e){function t(){var e,o,u,a,l,f,c;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t)
for(var p=arguments.length,s=new Array(p),d=0;d<p;d++)s[d]=arguments[d]
return u=this,o=!(a=(e=r(t)).call.apply(e,[this].concat(s)))||"object"!==n(a)&&"function"!=typeof a?i(u):a,l=i(o),c=!1,(f="shouldShowInput")in l?Object.defineProperty(l,f,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[f]=c,o}var a,l,f
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,Ember.Controller),a=t,(l=[{key:"showInput",value:function(){Ember.set(this,"shouldShowInput",!0)}},{key:"hideInput",value:function(){Ember.set(this,"shouldShowInput",!1)}}])&&o(a.prototype,l),f&&o(a,f),t}()).prototype,"showInput",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"showInput"),t.prototype),a(t.prototype,"hideInput",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"hideInput"),t.prototype),t)
e.default=l})),define("dummy/controllers/native",["exports"],(function(e){var t
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,n,o,r){var i={}
return Object.keys(o).forEach((function(e){i[e]=o[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=(a((t=function(e){function t(){var e,o,u,a,l,f,c;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t)
for(var p=arguments.length,s=new Array(p),d=0;d<p;d++)s[d]=arguments[d]
return u=this,o=!(a=(e=r(t)).call.apply(e,[this].concat(s)))||"object"!==n(a)&&"function"!=typeof a?i(u):a,l=i(o),c=!1,(f="shouldShowInput")in l?Object.defineProperty(l,f,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[f]=c,o}var a,l,f
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,Ember.Controller),a=t,(l=[{key:"showInput",value:function(){Ember.set(this,"shouldShowInput",!0)}},{key:"hideInput",value:function(){Ember.set(this,"shouldShowInput",!1)}}])&&o(a.prototype,l),f&&o(a,f),t}()).prototype,"showInput",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"showInput"),t.prototype),a(t.prototype,"hideInput",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"hideInput"),t.prototype),t)
e.default=l})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/modifiers/auto-focus",["exports","@zestia/ember-auto-focus/modifiers/auto-focus"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/resolver",["exports","ember-resolver"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map((function(){this.route("native"),this.route("modifier")}))
var o=n
e.default=o})),define("dummy/routes/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({redirect:function(){return this.transitionTo("modifier")}})
e.default=t})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"P3UuqpMV",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"\\n  @zestia/ember-auto-focus\\n"],[9],[0,"\\n\\n"],[7,"a",true],[10,"href","https://github.com/zestia/ember-auto-focus"],[8],[0,"\\n  "],[7,"img",true],[10,"style","position: absolute; top: 0; right: 0; border: 0;"],[10,"src","https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"],[10,"alt","Fork me on GitHub"],[10,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"],[8],[9],[0,"\\n"],[9],[0,"\\n\\n"],[7,"p",true],[8],[0,"\\n  "],[5,"link-to",[],[["@route"],["native"]],{"statements":[[0,"\\n    Native\\n  "]],"parameters":[]}],[0,"\\n  |\\n  "],[5,"link-to",[],[["@route"],["modifier"]],{"statements":[[0,"\\n    Modifier\\n  "]],"parameters":[]}],[0,"\\n"],[9],[0,"\\n\\n"],[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t})),define("dummy/templates/modifier",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"b3JDmPZP",block:'{"symbols":[],"statements":[[4,"if",[[23,0,["shouldShowInput"]]],null,{"statements":[[0,"  "],[7,"p",true],[8],[0,"\\n    "],[7,"input",false],[3,"auto-focus"],[8],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"code",true],[8],[0,"\\n  <input "],[0,"{{auto-focus}}>\\n"],[9],[0,"\\n\\n"],[7,"p",true],[8],[0,"\\n  Notice that on the second render, the input\\n  "],[7,"em",true],[8],[0,"\\n    is\\n  "],[9],[0,"\\n  focused.\\n"],[9],[0,"\\n\\n"],[7,"p",true],[8],[0,"\\n  "],[7,"button",false],[12,"type","button"],[3,"on",["click",[23,0,["showInput"]]]],[8],[0,"\\n    Show input\\n  "],[9],[0,"\\n  "],[7,"button",false],[12,"type","button"],[3,"on",["click",[23,0,["hideInput"]]]],[8],[0,"\\n    Hide input\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"dummy/templates/modifier.hbs"}})
e.default=t})),define("dummy/templates/native",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Ryfx35m4",block:'{"symbols":[],"statements":[[4,"if",[[23,0,["shouldShowInput"]]],null,{"statements":[[0,"  "],[7,"p",true],[8],[0,"\\n    "],[7,"input",true],[10,"autofocus",""],[8],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"code",true],[8],[0,"\\n  <input autofocus>\\n"],[9],[0,"\\n\\n"],[7,"p",true],[8],[0,"\\n  Notice that on the second render, the input\\n  "],[7,"em",true],[8],[0,"\\n    is not\\n  "],[9],[0,"\\n  focused.\\n"],[9],[0,"\\n\\n"],[7,"p",true],[8],[0,"\\n  "],[7,"button",false],[12,"type","button"],[3,"on",["click",[23,0,["showInput"]]]],[8],[0,"\\n    Show input\\n  "],[9],[0,"\\n  "],[7,"button",false],[12,"type","button"],[3,"on",["click",[23,0,["hideInput"]]]],[8],[0,"\\n    Hide input\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"dummy/templates/native.hbs"}})
e.default=t})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
