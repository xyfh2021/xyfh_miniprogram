(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/goods/detail-parameter"],{"28a5":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(){return r.e("components/page-component/app-sup-vip/app-sup-vip").then(r.bind(null,"348c"))},p={name:"detail-parameter",props:["theme","price_min","price_max","price_member_max","price_member_min","sales","unit","original_price","level_show","vip_card_appoint"],computed:c({price:function(){return this.price_min===this.price_max?this.price_min:"".concat(this.price_min,"-").concat(this.price_max)},member_price:function(){return this.price_member_min===this.price_member_max?this.price_member_max:"".concat(this.price_member_max,"-").concat(this.price_member_max)}},(0,n.mapState)({mall:function(e){return e.mallConfig.mall}})),components:{"app-sup-vip":o}};t.default=p},5477:function(e,t,r){"use strict";r.r(t);var n=r("28a5"),i=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,function(){return n[e]})}(c);t["default"]=i.a},"6c8b":function(e,t,r){"use strict";r.r(t);var n=r("abd9"),i=r("5477");for(var c in i)"default"!==c&&function(e){r.d(t,e,function(){return i[e]})}(c);r("dbd5");var a=r("2877"),o=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"22e32cf4",null);t["default"]=o.exports},abd9:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i})},dbd5:function(e,t,r){"use strict";var n=r("dfc3"),i=r.n(n);i.a},dfc3:function(e,t,r){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/goods/detail-parameter-create-component',
    {
        'plugins/gift/components/goods/detail-parameter-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6c8b"))
        })
    },
    [['plugins/gift/components/goods/detail-parameter-create-component']]
]);                
