(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-quick-share"],{"0c26":function(e,t,i){"use strict";i.r(t);var a=i("3a13"),o=i("9b33");for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);i("ac2f");var r=i("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"658477f6",null);t["default"]=s.exports},"3a13":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},"69eb":function(e,t,i){},"84da":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return i.e("components/page-component/goods/app-goods-preview-poster").then(i.bind(null,"7dc7"))},o={name:"app-goods-quick-share",components:{appGoodsPreviewPoster:a},props:{goods:Object,value:{type:Boolean,default:function(){return!1}}},data:function(){return{friendModel:!1,posterUrl:"",is_all_btn:!1,is_limit:!0,shareData:null,posterShow:!1}},watch:{value:function(t,i){if(t){var a=this,o=e.createSelectorQuery().in(a);o.select("#opacity-hide").boundingClientRect(function(t){var i=e.createSelectorQuery().in(a);i.select("#all_hide_text_0").boundingClientRect(function(e){a.is_all_btn=e.height+1>=t.height}).exec()}).exec()}}},methods:{showText:function(){this.is_limit=!this.is_limit},close:function(){this.$emit("input",!1),this.posterShow=!1},open:function(){var t=this.$api.quick_share.poster_config+"&goods_id="+this.goods.id,i=this.$api.quick_share.poster_generate+"&goods_id="+this.goods.id;e.navigateTo({url:"/pages/poster/goods?poster_config=".concat(escape(t),"&poster_generate=").concat(escape(i))})},batchCopy:function(){this.copyText(),this.saveImage(!0)},copyText:function(){e.setClipboardData({data:this.goods.extra_quick_share.share_text,success:function(){}})},saveImage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this;if(!i.goods.extra_quick_share.share_pic)return"";e.showLoading({title:"图片保存中"}),i.$request({url:i.$api.quick_share.poster_list,data:{goods_id:i.goods.id}}).then(function(a){if(0===a.code){var o=i.goods.extra_quick_share.share_pic.map(function(e){return e.pic_url});o.splice(-1,1,a.data.pic_url),i.$utils.batchSave(o,"image").then(function(a){var o=function(){e.showToast({title:"保存成功"})},n=function(){i.friendModel=!0,setTimeout(function(){i.friendModel=!1},1500)};t?n():o()})}}).catch(function(t){e.hideLoading()})},shareCard:function(){var e=this.goods,t=e.app_share_title?e.app_share_title:e.extra_quick_share.share_text,i="";e.extra_quick_share.share_pic[0].pic_url&&(i=e.extra_quick_share.share_pic[0].pic_url),e.app_share_pic&&(i=e.app_share_pic),this.$emit("quickShare",{title:t,imageUrl:i,path:0===e.id?"/pages/index/index":"/pages/goods/goods",params:0===e.id?{}:{id:e.id}})},previewImage:function(t){if(!this.goods.extra_quick_share.share_pic)return"";var i=this.goods.extra_quick_share.share_pic.map(function(e){return e.pic_url});e.previewImage({urls:i,current:t})}}};t.default=o}).call(this,i("543d")["default"])},"9b33":function(e,t,i){"use strict";i.r(t);var a=i("84da"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=o.a},ac2f:function(e,t,i){"use strict";var a=i("69eb"),o=i.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-quick-share-create-component',
    {
        'components/page-component/goods/app-goods-quick-share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0c26"))
        })
    },
    [['components/page-component/goods/app-goods-quick-share-create-component']]
]);                
