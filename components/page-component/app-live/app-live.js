(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-live/app-live"],{"207f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={name:"app-live",components:{},props:{value:{type:Object,default:function(){return{background:"#f7f7f7",live_list:[],is_show_goods:!0,number:5,style_type:1}}}},data:function(){return{}},computed:u({newValue:function(){var e=this,t=[{background:e.value.background,is_show_goods:e.value.is_show_goods,number:e.value.number,style_type:e.value.style_type,live_list:[]},{background:e.value.background,is_show_goods:e.value.is_show_goods,number:e.value.number,style_type:e.value.style_type,live_list:[]}],n=0,r=0;return e.value.live_list.forEach(function(e,o){var u=e.goods.length>0;0==n||n<=r?(n=u?n+2:n+1,t[0].live_list.push(e)):(r=u?r+2:r+1,t[1].live_list.push(e))}),t}},(0,r.mapState)({userInfo:function(e){return e.user.info}})),mounted:function(){console.log(this.newValue)},methods:{liveClick:function(t){console.log(t);var n=this.userInfo?this.userInfo.options.user_id:0,r={user_id:n};e.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t.roomid,"&custom_params=").concat(encodeURIComponent(JSON.stringify(r)))})}}};t.default=a}).call(this,n("543d")["default"])},3065:function(e,t,n){"use strict";var r=n("b574"),o=n.n(r);o.a},"97a9":function(e,t,n){"use strict";n.r(t);var r=n("207f"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=o.a},b574:function(e,t,n){},bb25:function(e,t,n){"use strict";n.r(t);var r=n("ff67"),o=n("97a9");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("3065");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"59fccf44",null);t["default"]=a.exports},ff67:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-live/app-live-create-component',
    {
        'components/page-component/app-live/app-live-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bb25"))
        })
    },
    [['components/page-component/app-live/app-live-create-component']]
]);                