(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pt/goods/goods"],{"1d92":function(t,e,n){"use strict";n.r(e);var i=n("7d43"),o=n("33a2");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("7e4d");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"b8abc136",null);e["default"]=s.exports},"33a2":function(t,e,n){"use strict";n.r(e);var i=n("ccc0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"583b":function(t,e,n){},"7d43":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(20));t.$mp.data=Object.assign({},{$root:{m0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"7e4d":function(t,e,n){"use strict";var i=n("583b"),o=n.n(i);o.a},ccc0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),o=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,o,r,a){try{var s=t[r](a),p=s.value}catch(u){return void n(u)}s.done?e(p):Promise.resolve(p).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var r=t.apply(e,n);function s(t){a(r,i,o,s,p,"next",t)}function p(t){a(r,i,o,s,p,"throw",t)}s(void 0)})}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},l=function(){return n.e("plugins/pt/components/app-pt-time").then(n.bind(null,"c357"))},h=function(){return n.e("plugins/pt/components/app-price-title-share").then(n.bind(null,"ab72"))},m=function(){return n.e("components/page-component/app-join-member/app-join-member").then(n.bind(null,"40f4"))},g=function(){return n.e("plugins/pt/components/app-merchant-guarantee").then(n.bind(null,"1bf1"))},_=function(){return n.e("components/page-component/goods/app-goods-attr").then(n.bind(null,"9dc1"))},f=function(){return n.e("components/page-component/app-attr/app-attr").then(n.bind(null,"d3c4"))},b=function(){return n.e("plugins/pt/components/app-buttom-button").then(n.bind(null,"e20b"))},v=function(){return n.e("plugins/pt/components/app-pt-attr").then(n.bind(null,"3556"))},w=function(){return n.e("plugins/pt/components/app-participant").then(n.bind(null,"d49f"))},A=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},y=function(){return n.e("components/page-component/goods/app-goods-detail").then(n.bind(null,"5abf"))},O=function(){return n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(n.bind(null,"4d92"))},j=function(){return n.e("components/page-component/app-iphonex-bottom/app-iphonex-bottom").then(n.bind(null,"bc3b"))},I=function(){return n.e("components/basic-component/app-iphone-x/app-iphone-x").then(n.bind(null,"7598"))},$=function(){return n.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(n.bind(null,"0c06"))},T=function(){return n.e("components/page-component/goods/app-goods-service").then(n.bind(null,"311c"))},D=function(){return n.e("components/page-component/app-vip-card/app-vip-card").then(n.bind(null,"19f0"))},k=function(){return n.e("components/page-component/goods/app-goods-marketing").then(n.bind(null,"1143"))},G={name:"goods",data:function(){return{goods_id:0,detail:{},loading:!1,share_url:"",day:"00",hour:"00",minute:"00",second:"00",down_time:0,discount:null,is_vip:!1,goods:{},item:{name:"",pintuan_groups:[]},isCart:!1,selectAttr:{},show:0,pt:!1,selectGroupAttrId:0,pintuan_list:[],list:[],appAttr:{},cartShow:!1,price:"",time:null,is_vip_card_user:0,url:this.$api.pt.detail,poster_config:this.$api.pt.poster_config,poster_generate:this.$api.pt.poster_generate,aloneAttr:null,start_time:!1,pintuan_list_time:"",pt_time:null}},computed:u({},(0,o.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}}),{},(0,o.mapState)({mall:function(t){return t.mallConfig.mall}}),{},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),onLoad:function(t){this.goods_id=t.goods_id,this.requestDetail(),this.newRecommend()},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/pt/goods/goods",title:this.detail.app_share_title?this.detail.app_share_title:this.detail.name,imageUrl:this.detail.app_share_pic?this.detail.app_share_pic:"",params:{goods_id:this.goods_id}})},methods:{goJoin:function(e){t.navigateTo({url:"/plugins/pt/detail/detail?id=".concat(e)})},requestDetail:function(){var t=s(i.default.mark(function t(){var e,n,o,r,a,s,p,u=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.pt.detail,method:"get",data:{id:this.goods_id}});case 2:e=t.sent,0===e.code&&(this.loading=!0,n=e.data.detail,this.detail=n,this.price=n.price,this.selectAttr={},this.aloneAttr=JSON.parse(JSON.stringify(n.attr)),o=n.groups,o.length>0&&(this.detail.attr=o[0].attr,this.selectGroupAttrId=o[0].groups.id),this.share_url="".concat(this.$api.pt.poster,"&goods_id=").concat(this.detail.id),this.poster_config="".concat(this.poster_config,"&goods_id=").concat(this.detail.id),this.poster_generate="".concat(this.poster_generate,"&goods_id=").concat(this.detail.id),this.pintuan_list=e.data.pintuan_list,this.pintuan_list.length>0&&(r=new Date(this.pintuan_list[0].surplus_date_time.replace(/-/g,"/")),console.log(this.pintuan_list[0].surplus_date_time),this.pt_time=setInterval(function(){var t=r.getTime()-(new Date).getTime();t<0&&clearInterval(u.pt_time);var e=parseInt(t/1e3/60/60/24%30),n=parseInt(t/1e3/60/60%24),i=parseInt(t/1e3/60%60),o=parseInt(t/1e3%60);u.pintuan_list_time=e>0?e+"天"+n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o):n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},1e3)),n.vip_card_appoint.discount>0&&(this.is_vip=!0,this.discount=n.vip_card_appoint.discount),this.goods={attr:n.attr,cover_pic:n.cover_pic,level_show:n.level_show,price:n.price,mch_id:n.mch_id},"0000-00-00 00:00:00"!==n.pintuanGoods.end_time&&this.countdown(n.pintuanGoods.end_time),n.pintuanGoods.start_time&&(a=new Date(n.pintuanGoods.start_time.replace(/-/g,"/")),s=new Date,p=a.getTime()-s.getTime(),p>0?(this.start_time=!1,this.countdown(n.pintuanGoods.start_time)):this.start_time=!0));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),countdown:function(t){var e=this,n=new Date(t.replace(/-/g,"/")),i=new Date,o=n.getTime()-i.getTime(),r=parseInt(o/36e5/24),a=parseInt(o/1e3/60/60%24),s=parseInt(o/1e3/60%60),p=parseInt(o/1e3%60);this.day=r<10?"0".concat(r):r,this.hour=a<10?"0".concat(a):a,this.minute=s<10?"0".concat(s):s,this.second=p<10?"0".concat(p):p,this.down_time=setTimeout(function(){e.countdown(t)},1e3)},newRecommend:function(){var t=s(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.goods.new_recommend});case 2:e=t.sent,0===e.code&&(this.list=e.data.list);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),attr:function(t){this.appAttr=t},attrTap:function(t){console.log(t),null!==t?(this.selectAttr=t,this.price=t.price):this.selectAttr={}},shop:function(e){if("none"===this.appAttr.display)!1===e?(this.pt=!1,this.detail.attr=this.aloneAttr,this.detail.id=this.goods_id):(this.pt=!0,this.detail.attr=this.detail.groups[0].attr,this.selectGroupAttrId=this.detail.groups[0].groups.id,this.detail.id=this.detail.groups[0].groups.goods_id),this.show=Math.random();else if(!1===e&&!0===this.pt)this.pt=!1,this.selectAttr={},this.detail.attr=this.aloneAttr,this.detail.id=this.goods_id;else if(!0===e&&!1===this.pt)this.pt=!0,this.selectAttr={},this.detail.attr=this.detail.groups[0].attr,this.detail.id=this.detail.groups[0].groups.goods_id;else if(!1===e&&!1===this.pt)this.buy();else if(!0===e&&!0===this.pt)if(0===this.appAttr.number&&(this.selectAttr={}),0===Object.keys(this.selectAttr).length)t.showToast({title:"请选择规格",icon:"none"});else{for(var n=this.detail.mch_id,i=[],o={id:this.detail.id,attr:[],num:this.appAttr.number,goods_attr_id:this.selectAttr.id,cart_id:0},r=0;r<this.selectAttr.attr_list.length;r++){var a={attr_id:this.selectAttr.attr_list[r].attr_id,attr_group_id:this.selectAttr.attr_list[r].attr_group_id};o.attr.push(a)}i.push({mch_id:n,pintuan_order_id:0,pintuan_group_id:this.selectGroupAttrId,goods_list:[o]}),this.show=Math.random(),this.$jump({open_type:"navigate",url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(i),"&preview_url=").concat(encodeURIComponent(this.$api.pt.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.pt.order_submit))})}},setGroupAttrID:function(t){this.selectGroupAttrId=t.groups.id,this.selectAttr={},this.detail.attr=t.attr,this.detail.id=t.groups.goods_id},defaultRequest:function(){this.pt=!0},buy:function(){if(!this.submit())return!1;if(0!==Object.keys(this.selectAttr).length){var e=this.detail,n=this.selectAttr,i=[];for(var o in n.attr_list)i.push({attr_id:n.attr_list[o].attr_id,attr_group_id:n.attr_list[o].attr_group_id});var r=[{mch_id:e.mch_id?e.mch_id:0,pintuan_order_id:0,pintuan_group_id:0,goods_list:[{id:e.id,attr:i,num:this.appAttr.number,cat_id:0,goods_attr_id:n.id}]}];this.show=Math.random(),this.$jump({open_type:"navigate",url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(r),"&preview_url=").concat(encodeURIComponent(this.$api.pt.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.pt.order_submit))})}else t.showToast({title:"请选择规格",icon:"none"})},submit:function(){var e=this.detail,n=this.appAttr.number,i=this.selectAttr;return i?n<=0?(t.showModal({title:"提示",content:"商品数量不能为0",showCancel:!1}),!1):!!e:(t.showModal({title:"提示",content:"请先选择规格",showCancel:!1}),!1)}},components:{"app-goods-banner":d,"app-pt-time":l,"app-price-title-share":h,"app-join-member":m,"app-merchant-guarantee":g,"app-goods-attr":_,"app-attr":f,"app-button-button":b,"app-pt-attr":v,"app-participant":w,"app-related-suggestion-product":A,"app-goods-detail":y,"app-quick-navigation":O,"app-iphone-bottom":j,"app-iphone-x":I,"app-empty-bottom":$,"app-goods-service":T,"app-vip-card":D,"app-goods-marketing":k},onShow:function(){},onHide:function(){clearTimeout(this.down_time)},onUnload:function(){clearTimeout(this.down_time)}};e.default=G}).call(this,n("543d")["default"])}},[["b954","common/runtime","common/vendor"]]]);