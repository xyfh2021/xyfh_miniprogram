(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/region/about/about"],{2461:function(t,e,n){"use strict";var r=n("c11b"),o=n.n(r);o.a},"71e5":function(t,e,n){"use strict";n.r(e);var r=n("bb78"),o=n("f50e");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("2461");var u=n("2877"),c=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"dec85dfa",null);e["default"]=c.exports},bb78:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},c11b:function(t,e,n){},dc35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{about:""}},computed:i({},(0,r.mapState)({theme:function(t){return t.mallConfig.theme}})),methods:{getList:function(){var e=this;e.$showLoading({type:"global",text:"加载中..."}),e.$request({url:e.$api.region.setting}).then(function(n){e.$hideLoading(),0==n.code?e.about=n.data.level_up_content:(e.$hideLoading(),t.showToast({title:n.msg,icon:"none",duration:1e3}))}).catch(function(t){e.$hideLoading()})}},onLoad:function(t){this.getList()}};e.default=c}).call(this,n("543d")["default"])},f50e:function(t,e,n){"use strict";n.r(e);var r=n("dc35"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a}},[["95c7","common/runtime","common/vendor"]]]);