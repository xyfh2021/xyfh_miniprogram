(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-index-pick/app-index-pick"],{2996:function(e,t,n){},8039:function(e,t,n){"use strict";n.r(t);var a=n("a671"),i=n("c0c9");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("fea4");var o=n("2877"),p=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"237ca852",null);t["default"]=p.exports},a671:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},c0c9:function(e,t,n){"use strict";n.r(t);var a=n("d351"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},d351:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},u=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},c={name:"app-index-pick",props:{activity:{type:Object,default:function(){return{}}},theme:String,index:Number,is_required:Boolean,page_id:Number},data:function(){return{newData:[]}},computed:r({},(0,a.mapState)({appImg:function(e){return e.mallConfig.__wxapp_img.mall},appSetting:function(e){return e.mallConfig.mall.setting},mall:function(e){return e.mallConfig.mall}}),{},(0,a.mapGetters)("mallConfig",{vip:"getVip"}),{},(0,a.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{jump:function(e){this.$jump({url:e,open_type:"navigate"})},jump_router:function(t){t.goodsWarehouse.video_url&&1==this.getVideo?e.navigateTo({url:"/pages/goods/video?goods_id=".concat(t.id,"&sign=pick")}):e.navigateTo({url:"/plugins/pick/detail/detail?goods_id=".concat(t.id)})},loadData:function(){var e=this;this.$request({url:this.$api.index.extra,data:{type:0===this.page_id?"mall":"diy",key:"pick",page_id:this.page_id,index:this.index}}).then(function(t){if(e.newData=t.data,0===t.code&&t.data&&0===e.page_id){var n=e.$storage.getStorageSync("INDEX_MALL");n.home_pages[e.index].data=e.newData,e.$storage.setStorageSync("INDEX_MALL",n)}})}},components:{"app-member-price":p,"app-sup-vip":u},mounted:function(){if(this.is_required)this.loadData();else{var e=this.$storage.getStorageSync("INDEX_MALL");this.newData=e.home_pages[this.index].data}}};t.default=c}).call(this,n("543d")["default"])},fea4:function(e,t,n){"use strict";var a=n("2996"),i=n.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-index-pick/app-index-pick-create-component',
    {
        'components/page-component/app-index-pick/app-index-pick-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8039"))
        })
    },
    [['components/page-component/app-index-pick/app-index-pick-create-component']]
]);                
