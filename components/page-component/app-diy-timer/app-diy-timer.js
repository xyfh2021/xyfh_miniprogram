(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-diy-timer/app-diy-timer"],{"0643":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"0eac":function(e,t,n){"use strict";n.r(t);var i=n("348b"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"348b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return n.e("components/basic-component/app-image/app-image").then(n.bind(null,"f54c"))},a=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-jump-button/app-jump-button")]).then(n.bind(null,"b362"))},r={name:"app-timer",components:{"app-image":i,"app-jump-button":a},props:{picUrl:String,link:Object,startDateTime:{type:String,default:function(){return"2019-8-30 10:00:00"}},endDateTime:{type:String,default:function(){return"2019-8-30 10:00:00"}},pageHide:Boolean,bgPicUrl:String},data:function(){return{timeInterval:null,startTime:null,endTime:null,timerStr:null}},computed:{time:function(){return{startDateTime:this.startDateTime,endDateTime:this.endDateTime,pageHide:this.pageHide}}},beforeDestroy:function(){clearInterval(this.timeInterval)},watch:{time:{handler:function(e){var t=this;if(this.pageHide)clearInterval(this.timeInterval);else{var n=this.startDateTime,i=this.endDateTime;this.timeInterval=setInterval(function(){console.log("倒计时");var e=null,a=null,r=null;n&&(n=n.replace(/-/g,"/"),e=t.$utils.timeDifference((new Date).getTime(),new Date(n).getTime()),e&&(r=(e["d"]>0?e["d"]+"天":"")+e["h"]+"小时"+e["m"]+"分"+e["s"]+"秒")),i&&!r&&(i=i.replace(/-/g,"/"),a=t.$utils.timeDifference((new Date).getTime(),new Date(i).getTime()),a&&(r=(a["d"]>0?a["d"]+"天":"")+a["h"]+"小时"+a["m"]+"分"+a["s"]+"秒")),t.startTime=e,t.endTime=a,t.timerStr=r},1e3)}},immediate:!0}}};t.default=r},d5a2:function(e,t,n){},e2d1:function(e,t,n){"use strict";n.r(t);var i=n("0643"),a=n("0eac");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("e8c9");var u=n("2877"),l=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"14c4da43",null);t["default"]=l.exports},e8c9:function(e,t,n){"use strict";var i=n("d5a2"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-timer/app-diy-timer-create-component',
    {
        'components/page-component/app-diy-timer/app-diy-timer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e2d1"))
        })
    },
    [['components/page-component/app-diy-timer/app-diy-timer-create-component']]
]);                
