(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/detail/logistics"],{"0c75":function(e,t,s){"use strict";s.r(t);var n=s("bb33"),o=s("7f87");for(var r in o)"default"!==r&&function(e){s.d(t,e,function(){return o[e]})}(r);s("d17c");var i=s("2877"),a=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"85724726",null);t["default"]=a.exports},7106:function(e,t,s){},"7f87":function(e,t,s){"use strict";s.r(t);var n=s("8ce1"),o=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"8ce1":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={name:"logistics",props:["send_type","store","is_send","express","express_no","customer_name","cover_pic"],methods:{routeGo:function(){1!=this.send_type&&1==this.is_send&&this.express_no?e.navigateTo({url:"/pages/order/express-detail/express-detail?express=".concat(this.express,"&express_no=").concat(this.express_no,"&customer_name=").concat(this.customer_name,"&cover_pic=").concat(this.cover_pic)}):e.openLocation({latitude:parseFloat(this.store.latitude),longitude:parseFloat(this.store.longitude),address:this.store.address,name:this.store.name})}}};t.default=s}).call(this,s("543d")["default"])},bb33:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return o})},d17c:function(e,t,s){"use strict";var n=s("7106"),o=s.n(n);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/detail/logistics-create-component',
    {
        'plugins/gift/components/detail/logistics-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0c75"))
        })
    },
    [['plugins/gift/components/detail/logistics-create-component']]
]);                
