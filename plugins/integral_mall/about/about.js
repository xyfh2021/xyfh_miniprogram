(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/integral_mall/about/about"],{"301c":function(e,t,n){"use strict";n.r(t);var o=n("fe36"),r=n("78be");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("3bd9");var i=n("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"e229f66e",null);t["default"]=u.exports},"3bd9":function(e,t,n){"use strict";var o=n("dad6"),r=n.n(o);r.a},"78be":function(e,t,n){"use strict";n.r(t);var o=n("9093"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},9093:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},l={name:"about",components:{"app-layout":u,"app-form-id":c},data:function(){return{desc:[]}},computed:a({},(0,o.mapState)({theme:function(e){return e.mallConfig.theme},mall:function(e){return e.mallConfig.mall}})),onLoad:function(){this.getList()},methods:{getList:function(){var t=this;t.$request({url:t.$api.integral_mall.index}).then(function(n){t.$hideLoading(),0==n.code?t.desc=n.data.setting.desc:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})}}};t.default=l}).call(this,n("543d")["default"])},dad6:function(e,t,n){},fe36:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})}},[["42a8","common/runtime","common/vendor"]]]);