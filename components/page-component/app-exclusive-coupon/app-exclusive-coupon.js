(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-exclusive-coupon/app-exclusive-coupon"],{1397:function(e,t,n){},3223:function(e,t,n){"use strict";var i=n("1397"),o=n.n(i);o.a},"3b4e":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"8cc9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"app-exclusive-coupon",props:{receiveBg:{type:String,default:function(){return""}},list:{type:Array,default:function(){return[]}},textColor:{type:String,default:function(){return"#ffffff"}},unclaimedBg:{type:String,default:function(){return""}},index:{type:Number},sign:{type:String},showTop:{type:Boolean,default:function(){return!0}},noneColor:{type:Boolean,default:function(){return!1}},background:String,page_id:Number,is_required:Boolean,coupon_req:Boolean},data:function(){return{coupon_list:[]}},computed:{receiveTip:function(){var e="立即领取";return"integral-mall"===this.sign&&(e="立即兑换"),e}},methods:{receive:function(t){var n=this,i=this.coupon_list;if("integral-mall"!=this.sign){if(1==i[t].is_receive)return e.showToast({mask:!0,title:"已领取",icon:"none"}),!0;e.showLoading({mask:!0,title:"领取中"}),this.$request({url:this.$api.coupon.receive,data:{coupon_id:i[t].id}}).then(function(o){if(e.hideLoading(),0===o.code){if(n.coupon_list[t].is_receive="1",!n.is_required){var a=n.$storage.getStorageSync("INDEX_MALL");a.home_pages[n.index].list=n.coupon_list,n.$storage.setStorageSync("INDEX_MALL",a)}n.$store.dispatch("page/actionSetCoupon",{list:[i[t]],type:"receive"})}}).catch(function(){e.hideLoading()})}else this.$jump({url:i[t].page_url,open_type:"navigate"})},loadData:function(){var e=this;this.$request({url:this.$api.index.extra,data:{type:"mall",key:"coupon",page_id:this.page_id,index:this.index}}).then(function(t){if(e.coupon_list=t.data,0===e.page_id){var n=e.$storage.getStorageSync("INDEX_MALL");n.home_pages[e.index].list=e.coupon_list,e.$storage.setStorageSync("INDEX_MALL",n)}})}},mounted:function(){if(this.coupon_req)this.coupon_list=this.list;else if(this.is_required)this.loadData();else{var e=this.$storage.getStorageSync("INDEX_MALL");this.coupon_list=e.home_pages[this.index].list}}};t.default=n}).call(this,n("543d")["default"])},aa4c7:function(e,t,n){"use strict";n.r(t);var i=n("8cc9"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},bdfc:function(e,t,n){"use strict";n.r(t);var i=n("3b4e"),o=n("aa4c7");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("3223");var r=n("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"2a77bfcf",null);t["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component',
    {
        'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bdfc"))
        })
    },
    [['components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component']]
]);                