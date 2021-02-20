(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"0169":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n("2f62");function i(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,e)}return n}function a(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(n,!0).forEach(function(o){s(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function s(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}var c=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},r=function(){return n.e("components/page-component/goods/app-goods-price").then(n.bind(null,"e525"))},p=function(){return n.e("components/page-component/goods/app-goods-service").then(n.bind(null,"311c"))},d=function(){return n.e("components/page-component/goods/app-goods-attr").then(n.bind(null,"9dc1"))},u=function(){return n.e("components/page-component/app-attr/app-attr").then(n.bind(null,"d3c4"))},l=function(){return n.e("components/page-component/goods/app-goods-marketing").then(n.bind(null,"1143"))},h=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-jump-button/app-jump-button")]).then(n.bind(null,"b362"))},g=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-goods-list/app-goods-list")]).then(n.bind(null,"3f73"))},m=function(){return n.e("components/page-component/goods/app-goods-detail").then(n.bind(null,"5abf"))},f=function(){return n.e("components/page-component/app-goods-recommend/app-goods-recommend").then(n.bind(null,"8e97"))},b=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},_=function(){return n.e("components/basic-component/app-iphone-x/app-iphone-x").then(n.bind(null,"7598"))},v=function(){return n.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(n.bind(null,"0c06"))},w=function(){return n.e("components/basic-component/app-composition/app-composition").then(n.bind(null,"9495"))},O=function(){return n.e("components/page-component/app-vip-card/app-vip-card").then(n.bind(null,"19f0"))},y=function(){return n.e("components/basic-component/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"b94d"))},$=function(){return n.e("components/page-component/goods/app-goods-flash-sale").then(n.bind(null,"c2b7"))},j={name:"goods",components:{appGoodsBanner:c,appGoodsPrice:r,appGoodsAttr:d,appAttr:u,appGoodsMarketing:l,appJumpButton:h,"app-goods-list":g,"app-goods-service":p,"app-goods-detail":m,"app-goods-recommend":f,"app-quick-navigation":b,"app-composition":w,appIphoneX:_,appEmptyBottom:v,uniSwiperDot:y,AppVipCard:O,appGoodsFlashSale:$},data:function(){return{goods:null,selectAttr:null,recommend_list:null,is_vip:!1,is_vip_card_user:0,current:0,discount:null,attrShow:0,shareData:null,contact_tel:"",contact:"",contact_web:"",poster_config:this.$api.goods.poster,poster_generate:this.$api.poster.goods_new,flash_sale:{}}},computed:a({},(0,e.mapState)({mall:function(t){return t.mallConfig.mall},gConfig:function(t){return t.gConfig}}),{},(0,e.mapGetters)("mallConfig",{getTheme:"getTheme"}),{good_negotiable:function(){var t=this.mall.setting.good_negotiable;this.contact_tel="",this.contact="",this.contact_web="";for(var o=[],n=0;n<t.length;n++)"contact_tel"===t[n]&&(this.contact_tel="contact_tel"),"contact"===t[n]&&(this.contact="contact"),"contact_web"===t[n]&&(this.contact_web="contact_web");return this.contact_tel&&o.push(this.contact_tel),this.contact&&o.push(this.contact),this.contact_web&&o.push(this.contact_web),o}}),onLoad:function(t){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.isLogin&&this.$store.dispatch("user/info"),this.loadData(t.id)},onShareAppMessage:function(t){return"button"===t.from&&this.shareData?this.$shareAppMessage(this.shareData):this.$shareAppMessage({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:"",path:"/pages/goods/goods",params:{id:this.goods.id}})},onShareTimeline:function(){return this.$shareTimeline({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,query:{id:this.goods.id}})},methods:{change:function(t){this.current=t.detail.current},quickShare:function(t){console.log(t),this.shareData=t},toComposition:function(o){console.log(o);var n=o.id>0?o.id:this.goods.plugin_extra.composition.list[0].id;t.navigateTo({url:this.goods.plugin_extra.composition.url+"?goods_id="+this.goods.id+"&composition_id="+n})},loadData:function(o){var n=this;n.$showLoading(),n.$request({url:n.$api.goods.detail,data:{id:o}}).then(function(o){n.$hideLoading(),0===o.code?(n.goods=o.data.goods,t.setNavigationBarTitle({title:n.goods.name}),n.goods.vip_card_appoint.discount>0&&(n.is_vip=!0,n.discount=n.goods.vip_card_appoint.discount),n.flash_sale=n.goods.plugin_extra.flash_sale,n.is_vip_card_user=n.goods.vip_card_appoint.is_vip_card_user,n.loadRecommend()):t.showModal({title:"提示",content:o.msg,showCancel:!1})}).catch(function(t){n.$hideLoading()})},onAttr:function(t){this.selectAttr=t},loadRecommend:function(){var t=this;this.$request({url:this.$api.goods.new_recommend,data:{goods_id:this.goods.id,type:"goods"}}).then(function(o){0===o.code&&(t.recommend_list=o.data.list)})},back:function(){t.reLaunch({url:"/pages/index/index"})},favorite:function(){var o=this.$api.user.favorite_add,n=!0;this.goods.favorite&&(o=this.$api.user.favorite_remove,n=!1),this.goods.favorite=n,this.$request({url:o,data:{goods_id:this.goods.id}}).then(function(o){0===o.code||t.showModal({title:"提示",content:o.msg,showCancel:!1})}).catch(function(t){})},clickAttr:function(){this.attrShow=Math.random()}}};o.default=j}).call(this,n("543d")["default"])},"76ad":function(t,o,n){"use strict";n.r(o);var e=n("0169"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a},"7de1":function(t,o,n){"use strict";var e=n("9eef"),i=n.n(e);i.a},8531:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=(t._self._c,Object.keys(t.flash_sale)),e=Number(110);t.$mp.data=Object.assign({},{$root:{g0:n,m0:e}})},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})},"9eef":function(t,o,n){},e4df:function(t,o,n){"use strict";n.r(o);var e=n("8531"),i=n("76ad");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("7de1");var s=n("2877"),c=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,"4b42a5d0",null);o["default"]=c.exports}},[["f9eb","common/runtime","common/vendor"]]]);