(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-model/app-model"],{"046d":function(t,n,e){"use strict";e.r(n);var u=e("d69a"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"1c76":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"5e8c":function(t,n,e){},cf2f:function(t,n,e){"use strict";e.r(n);var u=e("1c76"),a=e("046d");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("f750");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"4bed3a89",null);n["default"]=c.exports},d69a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"app-model",props:{type:{type:String,default:function(){return"1"}},background:{type:String,default:function(){return"white"}},height:{type:Number,default:function(){return 500}},value:{type:Boolean,default:function(){return!1}}},data:function(){return{display:this.value}},methods:{bubble:function(){return!1},close:function(){this.display=!1,this.$emit("input",this.display)}},computed:{setHeight:function(){return!0===this.display?"0":"-".concat(this.height+108,"rpx")}},watch:{value:function(){this.display=this.value}}};n.default=u},f750:function(t,n,e){"use strict";var u=e("5e8c"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-model/app-model-create-component',
    {
        'components/basic-component/app-model/app-model-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cf2f"))
        })
    },
    [['components/basic-component/app-model/app-model-create-component']]
]);                
