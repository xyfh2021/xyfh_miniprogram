(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bonus/cash-detail/cash-detail"],{"1deb":function(t,n,e){"use strict";e.r(n);var i=e("c9ec"),o=e("26a8");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("eb57");var r=e("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"09c78085",null);n["default"]=c.exports},"26a8":function(t,n,e){"use strict";e.r(n);var i=e("6cc0"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"6cc0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("2f62");function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(e,!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/basic-component/app-layout/app-layout")]).then(e.bind(null,"0b17"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("components/basic-component/app-form-id/app-form-id")]).then(e.bind(null,"8ee9"))},u=function(){return e.e("components/basic-component/app-tab-nav/app-tab-nav").then(e.bind(null,"7fd0"))},l={data:function(){return{tabList:[{id:-1,name:"全部"},{id:0,name:"待审核"},{id:1,name:"待打款"},{id:2,name:"已打款"},{id:3,name:"无效"}],loading:null,list:[],activeTab:-1,noBorder:!1,id:null,page:2}},components:{"app-layout":c,"app-form-id":s,"app-tab-nav":u},computed:a({},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(n){t.showLoading({title:"加载中..."}),this.list=[],this.page=2,this.activeTab=n.currentTarget.dataset.id,this.getList()},getList:function(){var n=this;n.$request({url:n.$api.bonus.detail,data:{status:n.activeTab}}).then(function(e){n.$hideLoading(),t.hideLoading(),0==e.code?n.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading(),t.hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.getSetting()})})},getMore:function(){var n=this;t.showLoading({title:"加载中..."}),n.$request({url:n.$api.bonus.detail,data:{status:n.activeTab,page:n.page}}).then(function(e){if(t.hideLoading(),0==e.code){n.loading=null;var i=e.data.list;i.length>0&&(n.list[n.list.length-1].date==i[0].date?(n.list[n.list.length-1].list=n.list[n.list.length-1].list.concat(i[0].list),i.shift(),n.list=n.list.concat(i)):n.list=n.list.concat(i),n.page++)}else t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(n){t.hideLoading()})},toGoods:function(n){t.navigateTo({url:"/pages/goods/goods?id="+n})}},onLoad:function(t){var n=this;n.$showLoading({type:"global",text:"加载中..."}),n.getList()},onReachBottom:function(){this.getMore()}};n.default=l}).call(this,e("543d")["default"])},7482:function(t,n,e){},c9ec:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},eb57:function(t,n,e){"use strict";var i=e("7482"),o=e.n(i);o.a}},[["552b","common/runtime","common/vendor"]]]);