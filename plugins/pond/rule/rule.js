(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pond/rule/rule"],{6252:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"70db":function(n,t,e){"use strict";e.r(t);var u=e("6252"),o=e("b351");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("ee48");var a=e("2877"),c=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,"4f207bcd",null);t["default"]=c.exports},b188:function(n,t,e){},b351:function(n,t,e){"use strict";e.r(t);var u=e("f55c"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=o.a},ee48:function(n,t,e){"use strict";var u=e("b188"),o=e.n(u);o.a},f55c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return Promise.all([e.e("common/vendor"),e.e("components/basic-component/app-layout/app-layout")]).then(e.bind(null,"0b17"))},o={name:"rule",components:{appLayout:u},data:function(){return{rules:""}},onLoad:function(){var n=this;n.$request({url:n.$api.pond.setting}).then(function(t){0===t.code&&(n.rules=t.data.setting.rule)})}};t.default=o}},[["6af7","common/runtime","common/vendor"]]]);