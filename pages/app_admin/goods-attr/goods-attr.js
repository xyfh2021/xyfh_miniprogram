(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/goods-attr/goods-attr"],{"19cb":function(t,i,e){"use strict";var n=e("ae16"),a=e.n(n);a.a},"2be7":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{list:[],attr:[],iphone_x:!1,noDetail:!0,first:!0,index:-1}},methods:{changeName:function(i){var e=this;if(this.attr.length>0){for(var n in this.attr)for(var a in this.attr[n].attr_list)i.attr_group_id==this.attr[n].attr_list[a].attr_group_id&&(this.attr[n].attr_list[a].attr_group_name=i.attr_group_name);t.setStorage({key:"temp_attr_info",data:e.attr,success:function(){t.hideLoading()},fail:function(i){t.hideLoading(),t.showToast({title:i.errMsg,icon:"none",duration:1e3})}})}},pop:function(i){this.index=i,this.list[this.index].attr_group_name||0!==this.list[this.index].attr_list.length||(this.list.splice(this.index,1),this.index=-1,this.attr=[],t.removeStorage({key:"temp_attr_info"}))},close:function(){this.index=-1},changeValue:function(i){t.setStorage({key:"temp_attr",data:this.list}),t.navigateTo({url:"/pages/app_admin/goods-attr-edit/goods-attr-edit?index=".concat(i)})},chooseDetail:function(){if(0===this.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;var i=1;for(var e in this.list)i*=+this.list[e].attr_list.length;if(i>1e3)return t.showToast({title:"规格组合超出1000，请删减规格值再继续操作",icon:"none",duration:1e3}),!1;for(var n in this.list)if(!this.list[n].attr_group_name||0==this.list[n].attr_list.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;t.setStorage({key:"temp_attr",data:this.list}),t.navigateTo({url:"/pages/app_admin/goods-attr-info/goods-attr-info"})},toDelete:function(){this.list.splice(this.index,1),this.index=-1,this.attr=[],t.removeStorage({key:"temp_attr_info"})},save:function(){var i=this;if(0===i.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;for(var e in i.list)if(!i.list[e].attr_group_name||0===i.list[e].attr_list.length||0===i.attr.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;t.setStorage({key:"goods_attr_groups",data:i.list}),t.showLoading({title:"保存中..."}),t.setStorage({key:"goods_attr",data:i.attr,success:function(){t.hideLoading(),setTimeout(function(){t.navigateBack()},500)},fail:function(i){t.hideLoading(),t.showToast({title:i.errMsg,icon:"none",duration:1e3})}})},add_attr:function(){this.list.push({attr_group_id:this.list.length+1,attr_group_name:"",attr_list:[]}),this.attr=[],t.removeStorage({key:"temp_attr_info"})}},onLoad:function(){var i=this;i.$showLoading({type:"global",text:"加载中..."});t.getStorage({key:"goods_attr_groups",success:function(e){i.list=e.data,t.setStorage({key:"temp_attr",data:i.list}),!0},fail:function(){t.getStorage({key:"temp_attr",success:function(t){i.list=t.data}}),!0}}),t.getStorage({key:"goods_attr",success:function(e){i.attr=e.data,t.setStorage({key:"temp_attr_info",data:e.data}),i.$hideLoading(),i.first=!1},fail:function(){t.getStorage({key:"temp_attr_info",success:function(t){i.attr=t.data,i.first=!1,i.$hideLoading()},fail:function(){i.first=!1,i.$hideLoading()}})}}),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}})},onShow:function(){var i=this;this.first||(t.getStorage({key:"temp_attr",success:function(t){i.list=t.data},fail:function(){i.list=[]}}),t.getStorage({key:"temp_attr_info",success:function(t){i.attr=t.data},fail:function(){i.attr=[]}}))}};i.default=e}).call(this,e("543d")["default"])},"40d0":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},ae16:function(t,i,e){},b6ac:function(t,i,e){"use strict";e.r(i);var n=e("40d0"),a=e("d19c");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("19cb");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"80aa8b2e",null);i["default"]=r.exports},d19c:function(t,i,e){"use strict";e.r(i);var n=e("2be7"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a}},[["9be2","common/runtime","common/vendor"]]]);