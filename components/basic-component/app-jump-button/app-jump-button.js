(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-jump-button/app-jump-button"],{"8bf9":function(t,e,a){"use strict";a.r(e);var n=a("93b9"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"93b9":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("8de3"),r=a("ac6b"),i={name:"app-jump-button",props:{item:Object,arrangement:{type:String,default:function(){return"row"}},backgroundColor:String,form:{type:Boolean,default:function(){return!0}},height:{type:String,default:function(){return"100"}},width:{type:String,default:function(){return"100"}},open_type:{type:String,default:function(){return"navigate"}},url:{type:String,default:function(){return""}},params:{type:Array,default:function(){return[]}},number:{type:String,default:function(){return""}},appId:{type:String,default:function(){return""}},path:{type:String,default:function(){return""}},latitude:{type:String,default:function(){return"0"}},longitude:{type:String,default:function(){return"0"}},address:{type:String,default:function(){return""}}},methods:{jumpLogic:function(e){var a=this;switch(this.form&&(0,n.push)(e.detail.formId),this.open_type){case"reLaunch":t.reLaunch({url:this.url});break;case"redirect":t.redirectTo({url:this.url});break;case"navigate":if(this.url){var i=this.url;if(this.params.length>0){for(var s="?",u=0;u<this.params.length;u++)s+="".concat(this.params[u].key,"=").concat(this.params[u].value,"&");i=i.split("?")[0],i+=s.slice(0,s.length-1)}t.navigateTo({url:i})}break;case"app_admin":1==this.$store.state.user.info.identity.is_admin&&t.navigateTo({url:this.url});break;case"back":t.navigateBack({});break;case"tel":1===this.params.length?t.makePhoneCall({phoneNumber:this.params[0].value}):this.number?t.makePhoneCall({phoneNumber:this.number}):t.makePhoneCall({phoneNumber:this.url.split("?")[1].split("=")[1]});break;case"web":this.params.length>0?t.navigateTo({url:"".concat(this.url,"?url=").concat(encodeURIComponent(this.params[0].value))}):t.navigateTo({url:this.url});break;case"app":if(this.url){var o="";if("app"!==this.url)o=this.url.split("app?")[1];else for(var c=0;c<this.params.length;c++)o+="".concat(this.params[c].key,"=").concat(this.params[c].value,"&");if("string"!==typeof o)return;var l=o.split("&"),p={};for(var f in l)if("string"===typeof l[f]&&l[f].length){var h=l[f].split("=");if(2!==h.length){for(var d="",g=1;g<h.length;g++)g+1!==h.length&&(d+="".concat(h[g],"=").concat(h[g+1]));p[h[0]]=d}else p[h[0]]=h[1]}var m=p;console.log(m);var b="",v="";b=m.app_id||"",v=m.path||"",console.log(v),t.navigateToMiniProgram({appId:b,path:v,success:function(t){console.log("打开小程序成功",t)},fail:function(t){console.log("打开小程序失败",t)}})}else this.appId&&t.navigateToMiniProgram({appId:this.appId,path:this.path?this.path:"",success:function(t){},fail:function(t){}});break;case"clear_cache":t.showModal({title:"清理缓存",content:"确定要清理缓存？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&((0,r.clearStorage)(),a.$user&&a.$store&&a.$store.state.user.accessToken&&a.$user.loginByToken(a.$store.state.user.accessToken),a.$store.dispatch("mallConfig/actionResetConfig"),t.showToast({title:"清理完成",duration:1e3,icon:"none"}))}});break;case"map":t.openLocation({latitude:Number(this.latitude),longitude:Number(this.longitude),name:this.address,address:this.address,success:function(){},fail:function(t){}});break;case"share":}}}};e.default=i}).call(this,a("543d")["default"])},b2e1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},b362:function(t,e,a){"use strict";a.r(e);var n=a("b2e1"),r=a("8bf9");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("e66a");var s=a("2877"),u=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"22a928fb",null);e["default"]=u.exports},c904:function(t,e,a){},e66a:function(t,e,a){"use strict";var n=a("c904"),r=a.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-jump-button/app-jump-button-create-component',
    {
        'components/basic-component/app-jump-button/app-jump-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b362"))
        })
    },
    [['components/basic-component/app-jump-button/app-jump-button-create-component']]
]);                
