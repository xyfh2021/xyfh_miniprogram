(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/count/count"],{"2a84":function(t,a,e){"use strict";e.r(a);var n=e("df4c"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=r.a},"504e":function(t,a,e){"use strict";var n=e("7e58"),r=e.n(n);r.a},5381:function(t,a,e){"use strict";e.r(a);var n=e("f50d"),r=e("2a84");for(var i in r)"default"!==i&&function(t){e.d(a,t,function(){return r[t]})}(i);e("504e");var o=e("2877"),c=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"bb92b11a",null);a["default"]=c.exports},"7e58":function(t,a,e){},df4c:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=i(e("a9cc"));function i(t){return t&&t.__esModule?t:{default:t}}var o=null,c={name:"count",components:{},data:function(){return{contrast_prev_monthly:"",monthly_order_pay_price_average:"",monthly_order_pay_price_count:"",mch_id:0,options:[],year_str:"",month_str:"",year_list:null,scrollId:null,year_index:0,index:0,cWidth:"",cHeight:"",pixelRatio:1,serverData:""}},onLoad:function(a){this.mch_id=a.mch_id,this.getYear(),n=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},methods:{showColumn:function(t,a){o=new r.default({$this:n,canvasId:t,type:"line",background:"#FFFFFF",animation:!0,dataPointShape:!1,pixelRatio:n.pixelRatio,categories:a.categories,series:a.series,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,legend:!0,xAxis:{disabled:!0,axisLine:!1,disableGrid:!0},yAxis:{format:function(t){return t}},dataLabel:!1,extra:{line:{type:"curve",width:"4rpx"}}})},changeData:function(){o.updateData({series:n.serverData.ColumnB.series,categories:n.serverData.ColumnB.categories})},getYear:function(){var t=this,a=this;a.$showLoading(),a.$request({url:a.$api.mch.year_list}).then(function(e){if(a.$hideLoading(),0===e.code){var n,r,i,o=e.data.year_list;o.map(function(t,a){t.month_list.map(function(t,e){t.active&&(n=a.toString()+e.toString(),r=o[a].year,i=o[a].month_list[e].month)})});var c=[o,n,r,i];a.year_list=c[0],a.scrollId=c[1],a.year_str=c[2],a.month_str=c[3],t.loadData()}})},loadData:function(){var t=this;t.$request({url:t.$api.mch.statistic,data:{mch_id:t.mch_id,monthly:t.month_str,year:t.year_str}}).then(function(a){if(0===a.code){var e={categories:a.data.trend_arr,series:[{name:"日成交额",data:a.data.trend_arr,color:"#fa6855"}]};t.showColumn("canvasColumn",e);var n=[a.data.contrast_prev_monthly,a.data.monthly_order_pay_price_average,a.data.monthly_order_pay_price_count];t.contrast_prev_monthly=n[0],t.monthly_order_pay_price_average=n[1],t.monthly_order_pay_price_count=n[2]}})},switchTaps:function(t,a){var e=this,n=e.year_list;n.forEach(function(e,n){e.active=n==t,e.month_list.forEach(function(e,r){e.active=n==t&&r==a})});var r=e.scrollId;a>=2||0==t?r=t.toString()+(a-2).toString():(console.log(13),r=(t-1).toString()+(a+10).toString());var i=[t,n,a,r,n[t].year,n[t].month_list[a].month];e.index=i[0],e.year_list=i[1],e.year_index=i[2],e.scrollId=i[3],e.year_str=i[4],e.month_str=i[5],e.loadData()}}};a.default=c}).call(this,e("543d")["default"])},f50d:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})}},[["3111","common/runtime","common/vendor"]]]);