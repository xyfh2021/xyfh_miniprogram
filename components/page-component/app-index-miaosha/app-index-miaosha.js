(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-index-miaosha/app-index-miaosha"],{"27b1":function(e,t,n){"use strict";n.r(t);var a=n("d991"),r=n("fac9");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("8d58");var o=n("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"6361cd5b",null);t["default"]=u.exports},"5a40":function(e,t,n){},"8d58":function(e,t,n){"use strict";var a=n("5a40"),r=n.n(a);r.a},d991:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},ef6e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),r=i(n("7ab7"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},c=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},s={name:"app-index-miaosha",components:{"app-member-price":l,"app-sup-vip":c},props:{value:{type:Object,default:function(){return{open_date:null,list:[]}}},pageHide:Boolean,theme:String,index:Number,page_id:Number,is_required:Boolean},data:function(){return{newData:{str:""},timer:null,time:null,is_vip:!0}},computed:u({},(0,a.mapState)({mall:function(e){return e.mallConfig.mall},appSetting:function(e){return e.mallConfig.mall.setting},appImg:function(e){return e.mallConfig.__wxapp_img.mall}}),{},(0,a.mapGetters)("mallConfig",{getVideo:"getVideo"})),beforeDestroy:function(){clearInterval(this.time)},watch:{pageHide:{handler:function(e){console.log(e),e&&clearInterval(this.time)},immediate:!0}},methods:{jump:function(e){(0,r.default)({open_type:"navigate",page_url:e,params:[]})},router_jump:function(t){t.video_url&&1==this.getVideo?e.navigateTo({url:"/pages/goods/video?goods_id=".concat(t.id,"&sign=miaosha")}):e.navigateTo({url:t.page_url})},loadData:function(){var e=this;this.$request({url:this.$api.index.extra,data:{type:0===this.page_id?"mall":"diy",key:"miaosha",page_id:this.page_id,index:this.index}}).then(function(t){if(0===t.code&&t.data){e.newData=t.data,e.newData.str="00:00:00 点场";var n=new Date;if(new Date(e.newData.open_date).getDate()!=n.getDate())e.newData.str="预告 "+e.newData.open_date+" "+e.newData.open_time+"点场";else if(e.newData.open_time!=n.getHours())e.newData.str="预告 "+e.newData.open_time+"点场";else{var a=1e3*e.newData.date_time-n.getTime();e.time=setInterval(function(){if(a-=1e3,e.newData.str=e.newData.open_time+"点场",a<=0)clearInterval(e.time);else{var t=parseInt(a/1e3/60/60),n=parseInt(a/1e3/60%60),r=parseInt(a/1e3%60);e.timer={hour:t<10?"0"+t:t,min:n<10?"0"+n:n,sec:r<10?"0"+r:r}}},1e3)}}})}},mounted:function(){this.loadData()}};t.default=s}).call(this,n("543d")["default"])},fac9:function(e,t,n){"use strict";n.r(t);var a=n("ef6e"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-index-miaosha/app-index-miaosha-create-component',
    {
        'components/page-component/app-index-miaosha/app-index-miaosha-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("27b1"))
        })
    },
    [['components/page-component/app-index-miaosha/app-index-miaosha-create-component']]
]);                