(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/foot/index/index"],{"0c07":function(t,e,o){"use strict";o.r(e);var i=o("f343"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"12d6":function(t,e,o){},3156:function(t,e,o){"use strict";var i=o("12d6"),s=o.n(i);s.a},5891:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.beDelete=!0})},s=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return s})},a217:function(t,e,o){"use strict";o.r(e);var i=o("5891"),s=o("0c07");for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);o("3156");var a=o("2877"),r=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,"5b73c496",null);e["default"]=r.exports},f343:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("2f62");function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,i)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(o,!0).forEach(function(e){a(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}for(var r=new Date,d=[],h=[],u=[],c=2015;c<=r.getFullYear();c++)d.push(c);for(var g=1;g<=12;g++)h.push(g);for(var l=1;l<=31;l++)u.push(l);var f={data:function(){var t;return t={showMenu:!1,otherday:!1,beDelete:!1,page:1,detail:{},chooseTime:!1,end_time:"",start_time:"",today:"",yesterday:"",showText:!1,weekday:"",monthday:""},a(t,"otherday",""),a(t,"list",[]),a(t,"start",[]),a(t,"end",[]),a(t,"chooseStart",[]),a(t,"chooseEnd",[]),a(t,"showTime",""),a(t,"years",d),a(t,"months",h),a(t,"days",u),a(t,"selectAttr",null),a(t,"loading",!1),a(t,"index",-1),a(t,"dateList",null),a(t,"buyText","立即购买"),a(t,"sign",""),a(t,"cartShow",1),a(t,"plugin",""),a(t,"buyBool",!1),a(t,"previewUrl",""),a(t,"submitUrl",""),a(t,"attrShow",0),t},computed:n({},(0,i.mapState)({theme:function(t){return t.mallConfig.theme},appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},userInfo:function(t){return t.user.info}}),{},(0,i.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{toList:function(){t.redirectTo({url:"/pages/foot/summary/summary"})},toMall:function(){t.redirectTo({url:"/pages/index/index"})},toDetail:function(e){e.goodsWarehouse.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.goods_id,"&sign=").concat(e.sign)}):e.mch_id>0?t.navigateTo({url:"/plugins/mch/goods/goods?id="+e.goods_id+"&mch_id="+e.mch_id}):"advance"==e.sign?t.navigateTo({url:"/plugins/advance/detail/detail?id="+e.goods_id}):"pintuan"==e.sign?t.navigateTo({url:"/plugins/pt/goods/goods?goods_id="+e.goods_id}):"miaosha"==e.sign?t.navigateTo({url:"/plugins/miaosha/goods/goods?id="+e.goods_id}):"gift"==e.sign?t.navigateTo({url:"/plugins/gift/goods/goods?id="+e.goods_id}):"advance"==e.sign?t.navigateTo({url:"/plugins/advance/detail/detail?id="+e.goods_id}):"booking"==e.sign?t.navigateTo({url:"/plugins/book/goods/goods?goods_id="+e.goods_id}):""==e.sign?t.navigateTo({url:"/pages/goods/goods?id="+e.goods_id}):t.navigateTo({url:"/plugins/"+e.sign+"/goods/goods?goods_id="+e.goods_id})},startChange:function(t){this.chooseStart=t.detail.value},endChange:function(t){this.chooseEnd=t.detail.value},toChoose:function(){var e=this.years[this.chooseStart[0]],o=this.months[this.chooseStart[1]],i=this.days[this.chooseStart[2]],s=this.years[this.chooseEnd[0]],n=this.months[this.chooseEnd[1]],a=this.days[this.chooseEnd[2]];+s<+e?t.showToast({title:"结束时间不应早于开始时间",icon:"none",duration:1e3}):+s==+e?+n<+o?t.showToast({title:"结束时间不应早于开始时间",icon:"none",duration:1e3}):n==+o&&+a<+i?t.showToast({title:"结束时间不应早于开始时间",icon:"none",duration:1e3}):(this.otherday=!0,o>=1&&o<=9&&(o="0"+o),i>=1&&i<=9&&(i="0"+i),this.start_time=e+"-"+o+"-"+i,n>=1&&n<=9&&(n="0"+n),a>=1&&a<=9&&(a="0"+a),this.end_time=s+"-"+n+"-"+a,this.chooseTime=!1,this.showTime=this.start_time.substr(5).replace("-",".")+"-"+this.end_time.substr(5).replace("-","."),t.showLoading({title:"加载中..."}),this.page=1,this.list=[],this.getList()):(this.otherday=!0,o>=1&&o<=9&&(o="0"+o),i>=1&&i<=9&&(i="0"+i),this.start_time=e+"-"+o+"-"+i,n>=1&&n<=9&&(n="0"+n),a>=1&&a<=9&&(a="0"+a),this.end_time=s+"-"+n+"-"+a,this.chooseTime=!1,this.showTime=this.start_time.substr(5).replace("-",".")+"-"+this.end_time.substr(5).replace("-","."),t.showLoading({title:"加载中..."}),this.page=1,this.list=[],this.getList())},choose:function(){var t,e,o=this;o.start=[],o.end=[],t=o.start_time?o.start_time:o.today,e=o.end_time?o.end_time:o.today,o.years.forEach(function(e,i){t.substring(0,4)==o.years[i]&&(o.start[0]=+i)}),o.months.forEach(function(e,i){t.substring(5,7)==o.months[i]&&(o.start[1]=+i)}),o.days.forEach(function(e,i){t.substring(8,10)==o.days[i]&&(o.start[2]=+i)}),o.years.forEach(function(t,i){e.substring(0,4)==o.years[i]&&(o.end[0]=+i)}),o.months.forEach(function(t,i){e.substring(5,7)==o.months[i]&&(o.end[1]=+i)}),o.days.forEach(function(t,i){e.substring(8,10)==o.days[i]&&(o.end[2]=+i)}),o.chooseStart=o.start,o.chooseEnd=o.end,o.chooseTime=!o.chooseTime},toDelete:function(){var e=this;e.$request({url:e.$api.foot.del,data:{id:e.detail.id}}).then(function(o){t.hideLoading(),e.$hideLoading(),0==o.code?(e.showText=o.msg,e.closeMenu(),e.dateList.goods.splice(e.index,1),setTimeout(function(t){e.showText=!1},1e3)):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(o){t.hideLoading(),e.$hideLoading()})},toShow:function(t,e,o){this.detail=t,this.dateList=e,this.index=o,this.showMenu=!0},closeMenu:function(){this.detail={},this.beDelete=!1,this.showMenu=!1},cancel:function(){this.chooseTime=!1,this.otherday=!1,this.chooseStart=[],this.chooseEnd=[]},getList:function(){var e=this;if(e.loading)return!1;e.loading=!0,e.$request({url:e.$api.foot.index,data:{start_time:e.start_time+" 00:00:00",end_time:e.end_time+" 23:59:59",page:e.page}}).then(function(o){e.loading=!1,t.hideLoading(),e.$hideLoading(),0==o.code?e.list.length>0?(e.list[e.list.length-1].date==o.list[0].date&&(e.list[e.list.length-1].goods=e.list[e.list.length-1].goods.concat(o.list.shift().goods)),e.list=e.list.concat(o.list)):e.list=e.list.concat(o.list):t.showToast({title:o.msg,icon:"none",duration:1e3})}).catch(function(o){e.loading=!1,t.hideLoading(),e.$hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then(function(){e.getList()})})},toFavorite:function(){var e=this;e.$request({url:e.$api.user.favorite_add,data:{goods_id:e.detail.goods_id}}).then(function(o){0==o.code||"已经收藏过啦！"==o.msg?(e.showText=o.msg,e.closeMenu(),setTimeout(function(t){e.showText=!1},1e3)):t.showToast({title:o.msg,icon:"none",duration:1e3})})},getDate:function(){var t=new Date,e=t.getFullYear(),o=t.getMonth()+1;o>=1&&o<=9&&(o="0"+o);var i=t.getDate();this.today=e+"-"+o+"-"+i;var s=Date.parse(new Date),n=1e3*(s/1e3-86400),a=new Date(n),r=a.getFullYear(),d=a.getMonth()+1;d>=1&&d<=9&&(d="0"+d);var h=a.getDate();this.yesterday=r+"-"+d+"-"+h;var u=1e3*(s/1e3-604800),c=new Date(u),g=c.getFullYear(),l=c.getMonth()+1;l>=1&&l<=9&&(l="0"+l);var f=c.getDate();this.weekday=g+"-"+l+"-"+f;var m=1e3*(s/1e3-2592e3),p=new Date(m),v=p.getFullYear(),_=p.getMonth()+1;_>=1&&_<=9&&(_="0"+_);var y=p.getDate();this.monthday=v+"-"+_+"-"+y},chooseDate:function(e,o){if(this.loading)return!1;t.showLoading({title:"加载中..."}),this.otherday=!1,this.list=[],this.page=1,this.start_time=e,this.end_time=o,this.getList()}},onLoad:function(){this.$showLoading({type:"global",text:"加载中..."}),this.getDate(),this.start_time=this.today,this.end_time=this.today,this.getList()},onReachBottom:function(){this.page++,this.getList()}};e.default=f}).call(this,o("543d")["default"])}},[["c74f","common/runtime","common/vendor"]]]);