(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/index/pick-gift"],{1754:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"pick-gift",props:{theme:String,gift_list:Array},data:function(){return{index:-1}},methods:{changeNumber:function(t,n){var e=0;e=t?1:-1,this.$emit("giftNumber",n,e)},changeInput:function(t){console.log(1),this.$emit("giftInput",this.index,Number(t.detail.value))},changeIndex:function(t){this.index=t},routeGo:function(n){t.navigateTo({url:n})}},filters:{getGiftNumber:function(t){for(var n=0,e=0;e<t.length;e++)n+=Number(t[e].number);return n}}};n.default=e}).call(this,e("543d")["default"])},"287ff":function(t,n,e){"use strict";var i=e("d393"),u=e.n(i);u.a},"6e04":function(t,n,e){"use strict";e.r(n);var i=e("a775"),u=e("b036");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("287ff");var f=e("2877"),a=Object(f["a"])(u["default"],i["a"],i["b"],!1,null,"daf2f630",null);n["default"]=a.exports},a775:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t._f("getGiftNumber")(t.gift_list));t.$mp.data=Object.assign({},{$root:{f0:e}})},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},b036:function(t,n,e){"use strict";e.r(n);var i=e("1754"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=u.a},d393:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/index/pick-gift-create-component',
    {
        'plugins/gift/components/index/pick-gift-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6e04"))
        })
    },
    [['plugins/gift/components/index/pick-gift-create-component']]
]);                
