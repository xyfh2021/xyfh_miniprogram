(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/region-detail/region-detail"],{"1cfc":function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement;i._self._c},o=[];e.d(t,"a",function(){return s}),e.d(t,"b",function(){return o})},"1d2b":function(i,t,e){},7691:function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{id:0,nickname:"",province:[],city:[],district:[],choose_list:{},level_list:[{id:"1",name:"省代理"},{id:"2",name:"市代理"},{id:"3",name:"区/县代理"}],choose_province:{id:0,name:"请选择省"},choose_city:{id:0,name:"请选择市"},choose_district:[],detail:{},modelType:1,reasonRefusal:"",model:!1,change:!1,show_dialog:!1,show_list:!1,dialog_title:"",newIndex:0,index:0,iphone_x:!1}},onLoad:function(t){var e=this;i.getSystemInfo({success:function(i){(i.model.indexOf("iPhone X")>-1||i.model.indexOf("iPhone 11")>-1||i.model.indexOf("iPhone11")>-1||i.model.indexOf("iPhone12")>-1||i.model.indexOf("Unknown Device")>-1)&&(e.iphone_x=!0)}}),e.$showLoading({type:"global",text:"加载中..."}),e.id=t.id,e.nickname=t.name,e.getDetail()},methods:{changeSubmit:function(){if("选择代理级别"==this.dialog_title?(this.detail.level=this.choose_list[this.newIndex].id,this.newIndex!=this.index?3==this.detail.level?(this.choose_city={id:0,name:"请选择市"},this.choose_district=[]):2==this.detail.level&&(this.choose_city=[]):this.index=this.newIndex):"选择省"==this.dialog_title?(this.choose_province=this.choose_list[this.newIndex],this.city=this.choose_list[this.newIndex].list,this.newIndex!=this.index?3==this.detail.level?(this.choose_city={id:0,name:"请选择市"},this.choose_district=[]):2==this.detail.level&&(this.choose_city=[]):this.index=this.newIndex):"选择市"==this.dialog_title&&(this.choose_city=this.choose_list[this.newIndex],this.district=this.choose_list[this.newIndex].list,this.newIndex!=this.index?this.choose_district=[]:this.index=this.newIndex),this.show_list)for(var i in"选择市"==this.dialog_title?this.choose_city=[]:this.choose_district=[],this.choose_list)this.choose_list[i].show&&("选择市"==this.dialog_title?this.choose_city.push(this.choose_list[i]):this.choose_district.push(this.choose_list[i]));this.show_dialog=!1,this.show_list=!1,this.dialog_title=""},bindChange:function(i){this.newIndex=i.detail.value[0]},chooseDistrict:function(i,t){this.choose_list[t].show=!this.choose_list[t].show,this.$forceUpdate()},close:function(){this.show_list=!1,this.show_dialog=!1,this.dialog_title="",this.index=0,this.newIndex=0,this.choose_list=[]},choose:function(i){if(this.show_list=!1,this.show_dialog=!1,this.index=0,this.newIndex=0,1==i){for(var t in this.dialog_title="选择代理级别",this.choose_list=this.level_list,this.level_list)this.level_list[t].id==this.detail.level&&(this.index=t,this.newIndex=t);this.show_dialog=!0}else if(2==i){for(var e in this.dialog_title="选择省",this.choose_list=this.province,this.province)this.province[e].id==this.choose_province.id&&(this.index=e,this.newIndex=e);this.show_dialog=!0}else if(3==i)if(this.dialog_title="选择市",this.choose_list=this.city,2==this.detail.level){for(var s in this.choose_list)for(var o in this.choose_list[s].show=!1,this.choose_city)this.choose_list[s].id==this.choose_city[o].id&&(this.choose_list[s].show=!0);this.show_list=!0}else{for(var h in this.city)this.city[h].id==this.choose_city.id&&(this.index=h,this.newIndex=h);this.show_dialog=!0}else if(4==i){for(var n in this.dialog_title="选择区/县",this.choose_list=this.district,this.choose_list)for(var c in this.choose_list[n].district_id=this.choose_list[n].id,this.choose_list[n].show=!1,this.choose_district)this.choose_list[n].district_id==this.choose_district[c].id&&(this.choose_list[n].show=!0);this.show_list=!0}},toChange:function(){this.change&&i.showToast({title:"修改成功",icon:"none",duration:1e3}),this.change=!this.change},getDetail:function(){var t=this;this.$request({url:this.$api.app_admin.review,data:{type:5,keyword:this.nickname}}).then(function(e){if(t.$hideLoading(),i.hideLoading(),0===e.code){var s=e.data.list;for(var o in t.province=e.data.allow_province,s)s[o].id==t.id&&(t.detail=s[o]);for(var h in t.province)t.province[h].id==t.detail.province_id&&(t.choose_province=t.province[h],t.city=t.province[h].list);if(2==t.detail.level)for(var n in t.choose_city=[],t.detail.relation)for(var c in t.city)t.detail.relation[n].district_id==t.city[c].id&&t.choose_city.push(t.city[c]);if(3==t.detail.level){for(var d in t.city)t.city[d].id==t.detail.city_id&&(t.choose_city=t.city[d],t.district=t.city[d].list);for(var l in t.detail.relation)for(var a in t.district)t.detail.relation[l].district_id==t.district[a].id&&t.choose_district.push(t.district[a])}}}).catch(function(){t.$hideLoading(),i.hideLoading()})},refuse:function(){this.modelType=1,this.model=!0},by:function(){this.modelType=2,this.model=!0},confirm:function(){var t=this,e=[],s=[];if(3==this.detail.level)for(var o in e.push(this.choose_city.id),this.choose_district)s.push(this.choose_district[o].id);if(2==this.detail.level)for(var h in this.choose_city)e.push(this.choose_city[h].id);2===this.modelType?this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:5,province_id:this.choose_province.id,level:this.detail.level,city_id:JSON.stringify(e),district_id:JSON.stringify(s),status:1,user_id:this.detail.user.id}}).then(function(e){0===e.code&&(i.showToast({title:"通过申请",duration:1e3}),t.model=!1,setTimeout(function(){i.navigateBack()}))}):1===this.modelType&&this.$request({url:this.$api.app_admin.review_switch,method:"post",data:{type:5,status:2,province_id:this.detail.province_id,level:this.detail.level,city_id:JSON.stringify(e),district_id:JSON.stringify(s),reason:this.reasonRefusal,user_id:this.detail.user.id}}).then(function(e){0===e.code?(t.reasonRefusal="",t.model=!1,i.showToast({title:"拒绝申请",icon:"none",duration:1e3}),setTimeout(function(){i.navigateBack()})):i.showToast({title:e.msg,icon:"none",duration:1e3})})},cancel:function(){this.model=!1}}};t.default=e}).call(this,e("543d")["default"])},ab1c:function(i,t,e){"use strict";e.r(t);var s=e("7691"),o=e.n(s);for(var h in s)"default"!==h&&function(i){e.d(t,i,function(){return s[i]})}(h);t["default"]=o.a},af10:function(i,t,e){"use strict";e.r(t);var s=e("1cfc"),o=e("ab1c");for(var h in o)"default"!==h&&function(i){e.d(t,i,function(){return o[i]})}(h);e("c240");var n=e("2877"),c=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,"28ac549a",null);t["default"]=c.exports},c240:function(i,t,e){"use strict";var s=e("1d2b"),o=e.n(s);o.a}},[["137a","common/runtime","common/vendor"]]]);