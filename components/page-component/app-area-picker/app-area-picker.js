(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-area-picker/app-area-picker"],{3977:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},5286:function(t,i,e){"use strict";e.r(i);var n=e("60d7"),a=e.n(n);for(var l in n)"default"!==l&&function(t){e.d(i,t,function(){return n[t]})}(l);i["default"]=a.a},"60d7":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"app-area-picker",props:{ids:{type:Array,default:function(){return[]}}},data:function(){return{area_picker_show:"",list:null,multiIndex:[],multiArray:[],place:""}},created:function(){this.ids=this.ids.concat()},watch:{ids:function(t,i){var e=this;e.before(function(t){e.init(t)})}},methods:{before:function(i){var e=this,n=t.getStorageSync("_DISTRICT");n?i(n):this.$request({url:e.$api.default.district}).then(function(e){0===e.code&&(t.setStorageSync("_DISTRICT",e.data.list),i(e.data.list))})},init:function(t){var i=3===this.ids.length&&0!=this.ids[0],e=i?this.ids:[2,3,4],n=this.getIndex(t,e),a=[t,t[n[0]].list,t[n[0]].list[n[1]].list],l=a[0][n[0]].name+"，"+a[1][n[1]].name+"，"+a[2][n[2]].name,u=[a[0][n[0]],a[1][n[1]],a[2][n[2]]];this.setEvent(u,i);var s=[t,a,n,i?l:"请选择"];this.list=s[0],this.multiArray=s[1],this.multiIndex=s[2],this.place=s[3]},getIndex:function(t,i){var e=[];return t.map(function(t,n){i[0]==t.id&&e.push(n)}),t[e[0]].list.map(function(t,n){i[1]==t.id&&e.push(n)}),t[e[0]].list[e[1]].list.map(function(t,n){i[2]==t.id&&e.push(n)}),e},bindMultiPickerChange:function(t){var i=[this.multiArray[0][t.detail.value[0]],this.multiArray[1][t.detail.value[1]],this.multiArray[2][t.detail.value[2]]],e=i[0].name+"，"+i[1].name+"，"+i[2].name,n=[t.detail.value,e];this.multiIndex=n[0],this.place=n[1],this.setEvent(i)},setEvent:function(t){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e={province:{id:t[0].id,name:t[0].name},city:{id:t[1].id,name:t[1].name},district:{id:t[2].id,name:t[2].name}};this.$emit("customevent",i?e:null)},bindMultiPickerColumnChange:function(t){var i={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(i.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:i.multiIndex.splice(1,1,0),i.multiIndex.splice(2,1,0),i.multiArray.splice(1,1,this.list[i.multiIndex[0]].list),i.multiArray.splice(2,1,this.list[i.multiIndex[0]].list[i.multiIndex[1]].list);break;case 1:i.multiIndex.splice(2,1,0),i.multiArray.splice(2,1,this.list[i.multiIndex[0]].list[i.multiIndex[1]].list);break}var e=[i.multiArray,i.multiIndex];this.multiArray=e[0],this.multiIndex=e[1]}}};i.default=e}).call(this,e("543d")["default"])},"8e44":function(t,i,e){"use strict";e.r(i);var n=e("3977"),a=e("5286");for(var l in a)"default"!==l&&function(t){e.d(i,t,function(){return a[t]})}(l);e("adf0");var u=e("2877"),s=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,"3718f65a",null);i["default"]=s.exports},"96a1":function(t,i,e){},adf0:function(t,i,e){"use strict";var n=e("96a1"),a=e.n(n);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-area-picker/app-area-picker-create-component',
    {
        'components/page-component/app-area-picker/app-area-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8e44"))
        })
    },
    [['components/page-component/app-area-picker/app-area-picker-create-component']]
]);                
