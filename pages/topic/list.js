(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic/list"],{"1c33":function(t,e,n){},"50e6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"76db":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},u=function(){return n.e("components/page-component/app-special-topic/app-special-topic-list").then(n.bind(null,"1bf2"))},s=1,p={},l=!1,f=!1,d={name:"list",components:{"app-layout":c,appSpecialTopicList:u},data:function(){return{list:[],typeList:[],tabCurrentIndex:0}},computed:r({},(0,i.mapState)({bar_title:function(t){return t.mallConfig.bar_title}}),{},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),onLoad:function(t){s=1,l=!1,f=!1,"undefined"!=typeof t.type&&(p.type=t.type),this.loadData(),this.loadType()},onReachBottom:function(){l||this.loadData()},onShareAppMessage:function(t){var e=this.$platDiff.route(),n="专题列表";for(var i in this.bar_title)if(this.bar_title[i].value==e){n=this.bar_title[i].new_name;break}return this.$shareAppMessage({title:n,path:"/pages/topic/list"})},methods:{loadData:function(){var t=this;f||(this.$showLoading(),f=!0,p.page=s,this.$request({url:this.$api.topic.list,data:p}).then(function(e){f=!1,t.$hideLoading(),0===e.code&&(1===s&&(t.list=[]),e.data.list.length>0?(t.list=t.list.concat(e.data.list),s++):l=!0)}).catch(function(e){t.$hideLoading(),f=!1}))},loadType:function(){var t=this;this.$request({url:this.$api.topic.type}).then(function(e){if(0===e.code&&e.data.list.length>0){var n=[{id:0,name:"全部"},{id:-1,name:"精选"}];for(var i in t.typeList=n.concat(e.data.list),t.typeList)if(t.typeList[i].id==p.type){t.tabCurrentIndex=i;break}}}).catch(function(t){f=!1})},tabClick:function(t){s=1,l=!1;var e=this.typeList[t].id;this.tabCurrentIndex=t,p={page:s,type:e},this.loadData()}}};e.default=d},a965:function(t,e,n){"use strict";n.r(e);var i=n("76db"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},b501:function(t,e,n){"use strict";n.r(e);var i=n("50e6"),a=n("a965");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("fdeb");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"03d549a0",null);e["default"]=c.exports},fdeb:function(t,e,n){"use strict";var i=n("1c33"),a=n.n(i);a.a}},[["ca78","common/runtime","common/vendor"]]]);