(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-related-suggestion-product/app-related-suggestion-product"],{"1ce4":function(t,e,n){"use strict";n.r(e);var o=n("7f38"),r=n("5647");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("6c8f");var u=n("2877"),a=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,"4891b4a9",null);e["default"]=a.exports},5647:function(t,e,n){"use strict";n.r(e);var o=n("9dae"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"6c8f":function(t,e,n){"use strict";var o=n("70c2"),r=n.n(o);r.a},"70c2":function(t,e,n){},"7f38":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"9dae":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return n.e("components/basic-component/app-load-text/app-load-text").then(n.bind(null,"cae6"))},s=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},l=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},c={name:"app-related-suggestion-product",components:{"app-load-text":a,"app-sup-vip":s,"app-member-price":l},data:function(){return{request:this.value,goods_list:[]}},props:{isRecommend:{type:Boolean,default:function(){return!0}},showIcon:{type:Boolean,default:function(){return!0}},value:{type:Boolean,default:function(){return!0}},list:{type:Array,default:function(){return[]}},text:{type:String,default:function(){return"相关推荐"}},sign:String,theme:String},computed:i({},(0,o.mapState)({height:function(t){return t.gConfig.systemInfo.windowHeight},appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},mall:function(t){return t.mallConfig.mall},isShowGoodsName:function(t){return t.mallConfig.mall.setting.is_show_goods_name},isShowSalesNum:function(t){return t.mallConfig.mall.setting.is_show_sales_num}}),{newList:function(){this.goods_list=[];for(var t=0;t<this.list.length;t+=2)t+1!==this.list.length?this.goods_list.push([this.list[t],this.list[t+1]]):this.goods_list.push([this.list[t]])}},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{route_jump:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=").concat(this.sign)}):t.navigateTo({url:e.page_url})}}};e.default=c}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-related-suggestion-product/app-related-suggestion-product-create-component',
    {
        'components/page-component/app-related-suggestion-product/app-related-suggestion-product-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1ce4"))
        })
    },
    [['components/page-component/app-related-suggestion-product/app-related-suggestion-product-create-component']]
]);                
