(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-layout/app-coupon-modal/app-coupon-modal"],{"00a3":function(t,e,n){},4818:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.coupon.list,function(e,n){var o=[1,2,3].includes(e.share_type);return{$orig:t.__get_orig(e),g0:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},9355:function(t,e,n){"use strict";n.r(e);var o=n("be6f"),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=r.a},a3b2:function(t,e,n){"use strict";n.r(e);var o=n("4818"),r=n("9355");for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);n("aa2c");var a=n("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"f110b934",null);e["default"]=u.exports},aa2c:function(t,e,n){"use strict";var o=n("00a3"),r=n.n(o);r.a},be6f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){return n.e("components/page-component/goods/app-price").then(n.bind(null,"6c9f"))},i={name:"app-coupon-modal",components:{"app-price":u},data:function(){return{}},computed:c({},(0,o.mapState)({mallConfig:function(t){return t.mallConfig},coupon:function(t){return t.page.coupon},theme:function(t){return t.mallConfig.theme}}),{labelText:function(){if(this.coupon&&this.coupon.list&&this.coupon.list.length){var t=this.coupon.list[0];switch(t.share_type){case 4:return"优惠券已发放到账户，请到我的优惠券查看";case 2:return"积分已发放到账户，请到我的积分查看";case 1:return"余额红包已发放到账户，请到我的余额查看";case 3:return"卡劵已发放到账户，请到我的卡劵查看";default:return""}}},img:function(){var t="";return"register"==this.coupon.type?t=this.mallConfig.__wxapp_img.coupon.get_coupon_title:"share"==this.coupon.type?t=this.mallConfig.__wxapp_img.coupon.get_coupon_share:"receive"==this.coupon.type?t=this.mallConfig.__wxapp_img.coupon.get_coupon_receive:"award"===this.coupon.type&&(t=this.mallConfig.__wxapp_img.coupon.get_coupon_award),t}}),methods:{closeCouponBox:function(){var t={list:[],type:""};this.$store.dispatch("page/actionSetCoupon",t)},toGoods:function(e){t.navigateTo({url:e}),this.closeCouponBox()}}};e.default=i}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-layout/app-coupon-modal/app-coupon-modal-create-component',
    {
        'components/basic-component/app-layout/app-coupon-modal/app-coupon-modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a3b2"))
        })
    },
    [['components/basic-component/app-layout/app-coupon-modal/app-coupon-modal-create-component']]
]);                
