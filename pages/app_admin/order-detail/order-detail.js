(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/order-detail/order-detail"],{"48ac":function(e,t,i){"use strict";i.r(t);var n=i("f9ed"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},aaef:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.order.order_form,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g0:n}})),n=e.__map(e.order.detail,function(t,i){var n=e.__map(t.form_data,function(t,i){var n=Array.isArray(t.value);return{$orig:e.__get_orig(t),g1:n}});return{$orig:e.__get_orig(t),l1:n}});e._isMounted||(e.e0=function(t){e.showRemark=!e.showRemark},e.e1=function(t){e.noAddress=!1}),e.$mp.data=Object.assign({},{$root:{l0:i,l2:n}})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},dfe1:function(e,t,i){"use strict";i.r(t);var n=i("aaef"),o=i("48ac");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("fee5");var s=i("2877"),d=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"ba0bdfbe",null);t["default"]=d.exports},ef76:function(e,t,i){},f9ed:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(i,!0).forEach(function(t){s(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d={data:function(){return{order:{total_pay_price:"",express_price:"",total_goods_price:""},showRemark:!1,noAddress:!1,cancelRefund:!1,addressId:"0",notRefund:!1,isRefund:!1,openAddress:!1,isReason:!1,confirmOrder:!1,cityRefund:!1,refundOnly:!1,cityList:[],deliveryId:"0",delivery:"",active:null,show:!1,candidate:[],address:[],today:"",yesterday:"",weekday:"",chooseTime:!1,noRefund:!1,cancelOrder:!1,detail:{},changePrice:!1,callPhone:!1,custom:!1,mobile:"",isSend:!1,sendType:0,price:0,express:0,total:0,about:"",reset_time:0,dd:0,hh:0,mm:0,status:1,refund_price:0,showForm:!1,first:!0,iphone_x:!1}},computed:a({},(0,n.mapState)({theme:function(e){return e.mallConfig.theme},userInfo:function(e){return e.user.info},adminImg:function(e){return e.mallConfig.__wxapp_img.app_admin}})),methods:{toggle:function(e){this.order.composition_list[e].show=!this.order.composition_list[e].show},openMap:function(){var t=this.order.location.split(",");e.openLocation({latitude:+t[1],longitude:+t[0]})},beConfirm:function(){var t=this;t.$request({url:t.$api.app_admin.shou_huo,data:{refund_order_id:t.detail.id},method:"post"}).then(function(i){t.$hideLoading(),0==i.code?(t.cancel(),t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(){t.$hideLoading()})},beOrderConfirm:function(){var t=this;t.$request({url:t.$api.app_admin.confirm,data:{order_id:t.detail.id},method:"post"}).then(function(i){t.$hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:1e3,type:"success",mask:!1}),t.cancel(),setTimeout(function(i){e.showLoading({title:"加载中..."}),t.getList()},1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},toConfirm:function(e){this.detail=e,this.confirmOrder=!this.confirmOrder},imageLoad:function(e){this.order.order_form[e].loadOver=!1},imageFormLoad:function(e,t){this.order.detail[e].form_data[t].loadOver=!1},toExpressMore:function(t){e.navigateTo({url:"/pages/order/express-list/express-list?order_id="+t.id})},toExpressInfo:function(t){e.navigateTo({url:"/pages/app_admin/express/express?id="+t.id+"&express="+t.detailExpress[0].express+"&express_no="+t.detailExpress[0].express_no+"&customer_name="+t.detailExpress[0].customer_name})},toRefundAdd:function(){this.noAddress=!1,e.navigateTo({url:"/pages/address/address?manual_btn_bg=#446dfd&is_hide_default_btn=1&is_refund_address=1"})},copy:function(){var t="".concat(this.order.name," ").concat(this.order.mobile," ").concat(this.order.address);e.setClipboardData({data:t,success:function(){e.hideToast(),e.getClipboardData({success:function(){e.showToast({title:"复制成功",duration:1e3,icon:"none"})}})}})},getAddress:function(){var t=this;t.$request({url:t.$api.app_admin.refund_address}).then(function(i){t.$hideLoading(),0==i.code?t.address=i.data.list:e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){t.$hideLoading(),e.showToast({title:i,icon:"none",duration:1e3})})},look:function(t){e.previewImage({current:t,urls:[t]})},toChangeAddress:function(t){e.navigateTo({url:"/pages/app_admin/change-add/change-add?order_no="+t.order_no})},agree:function(){var t=this;e.showLoading({title:"处理中..."}),t.detail.refund_price>0?t.$request({url:t.$api.app_admin.refund_handle,data:{order_refund_id:t.detail.id,type:t.detail.type,is_agree:1,refund_price:t.refund_price,merchant_remark:t.about},method:"post"}).then(function(i){t.$hideLoading(),0==i.code?e.showModal({title:"提示",content:i.msg,showCancel:!1,success:function(e){e.confirm&&(t.notRefund=!1,t.openAddress=!1,t.isRefund=!1,t.addressId=0,t.getList())}}):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):e.showToast({title:"退款金额需大于零",icon:"none",duration:1e3})},getTime:function(){var e=this.reset_time-1,t=0,i=parseInt(e/3600);e>86400&&(t=parseInt(e/86400),i=parseInt((e-86400*t)/3600));var n=e%3600,o=parseInt(n/60);i<10&&(i="0"+i.toString()),o<10&&(o="0"+o.toString()),this.reset_time=e,this.dd=t,this.hh=i,this.mm=o},toSendType:function(){var t,i=this;1!=i.sendType&&2!=i.order.send_type||(e.showLoading({title:"加载中..."}),t={is_express:0,words:"",order_id:i.detail.id},2==i.order.send_type&&(t.man=i.delivery),i.$request({url:i.$api.app_admin.send,data:t,method:"post"}).then(function(t){e.hideLoading(),0==t.code?(e.showToast({title:t.msg,type:"success",mask:!1,duration:2e3}),i.isSend=!1,i.sendType=0,i.getList()):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))},toExpress:function(t,i){var n=t.id,o=t.refund;n>0?e.navigateTo({url:"/pages/app_admin/send/send?id="+n+"&is_send="+i}):o&&e.navigateTo({url:"/pages/app_admin/send/send?order_refund_id="+o+"&is_send="+i})},getList:function(){var t=this;t.about="",t.$showLoading({type:"global",text:"加载中..."});var i={};1==t.status?i.order_id=t.id:i.refund_order_id=t.id,t.$request({url:1==t.status?t.$api.app_admin.detail:t.$api.app_admin.refund_detail,data:i,method:"post"}).then(function(i){if(e.hideLoading(),t.$hideLoading(),0==i.code){var n;1==t.status?n=i.data.order:(t.detail=i.data.detail,n=i.data.detail.order,n.detail=[],n.detail[0]=i.data.detail.detail),2==n.send_type&&t.getDelivery(),n.address=n.address.replace(/\s*/g,"");var o=0;if(n.auto_cancel>0?o=n.auto_cancel:n.auto_confirm>0?o=n.auto_confirm:n.auto_sales>0&&(o=n.auto_sales),t.first){if(null!=n.order_form&&n.order_form.length>0)for(var a=0;a<n.order_form.length;a++)"img_upload"==n.order_form[a].key&&(n.order_form[a].loadOver=!0);t.first=!1}for(var s in t.showForm=!1,n.detail)if(null!=n.detail[s].form_data&&n.detail[s].form_data.length>0){var d=!0,r=!1,c=void 0;try{for(var u,l=n.detail[s].form_data[Symbol.iterator]();!(d=(u=l.next()).done);d=!0){var h=u.value;null!=h.value&&(t.showForm=!0)}}catch(p){r=!0,c=p}finally{try{d||null==l.return||l.return()}finally{if(r)throw c}}}if("composition"==n.sign)for(var f in n.composition_list)n.composition_list[f].show=!1;t.order=n,o>0&&(t.reset_time=o,setInterval(function(){t.getTime()},1e3))}else e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){e.hideLoading(),t.$hideLoading()})},getDelivery:function(){var t=this,i=this;i.$request({url:i.$api.app_admin.delivery}).then(function(i){0==i.code?(t.cityList=i.data.list,t.deliveryId=i.data.list[0].id,t.delivery="("+i.data.list[0].id+")"+i.data.list[0].name):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading()})},toCall:function(e){this.mobile=e,this.callPhone=!this.callPhone},decline:function(t){var i=this,n={order_refund_id:i.detail.id,type:i.detail.type,is_agree:0!=t?1:0,refund_price:i.detail.refund_price,merchant_remark:i.about};if(1==t){if(i.addressId<1)return e.showToast({title:"请选择地址",icon:"none",duration:1e3}),!1;n.address_id=i.addressId}i.cancelRefund&&(t=2,n.is_agree=2),4==t&&(n.refund=1),e.showLoading({title:"处理中..."}),i.$request({url:i.$api.app_admin.refund_handle,data:n,method:"post"}).then(function(t){e.hideLoading(),0==t.code?e.showModal({title:"提示",content:t.msg,showCancel:!1,success:function(e){e.confirm&&(i.notRefund=!1,i.cancelOrder=!1,i.openAddress=!1,i.refundOnly=!1,i.cityRefund=!1,i.addressId=0,i.getList())}}):e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},call:function(){e.makePhoneCall({phoneNumber:this.mobile}),this.callPhone=!this.callPhone},toRefund:function(e){this.detail=e,this.refund_price=e.refund_price,this.isRefund=!this.isRefund},cancel:function(){this.about="",this.date_start="",this.date_end="",this.isRefund=!1,this.chooseTime=!1,this.noRefund=!1,this.changePrice=!1,this.cancelOrder=!1,this.callPhone=!1,this.refundOnly=!1,this.cityRefund=!1,this.isSend=!1,this.notRefund=!1,this.openAddress=!1,this.isReason=!1,this.confirmOrder=!1,this.addressId=0},noCancel:function(){var t=this;e.showLoading({title:"处理中..."}),t.$request({url:t.$api.apiUrl.app_admin.cancel,data:{status:2,remark:t.about,order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,type:"success",mask:!1,duration:2e3}),t.isReason=!1,t.noRefund=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},cancelSubmit:function(){var t=this;e.showLoading({title:"加载中..."}),t.$request({url:t.$api.app_admin.cancel,data:{status:1,remark:t.about,order_id:t.detail.id},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:"取消成功",duration:1e3,type:"success",mask:!1}),t.isReason=!1,t.noRefund=!1,t.cancelOrder=!1,setTimeout(function(){t.getList()},1e3)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})})},lookAbout:function(e){this.detail=e,this.isReason=!0},chooseAddress:function(e){this.addressId==e?this.addressId="":this.addressId=e},chooseDelivery:function(e){this.getDeliveryId==e.id?this.deliveryId="":(this.deliveryId=e.id,this.delivery="("+e.id+")"+e.name)},refundHandle:function(e,t,i){1==i&&(this.cancelRefund=!0),1==e?3==t.type?(this.refundOnly=!0,this.detail=t):0!=t.order.send_type?(this.cityRefund=!0,this.detail=t):0==this.address.length?this.noAddress=!0:(this.detail=t,this.openAddress=!0):2==e&&(this.detail=t,this.notRefund=!0)},beNotRefund:function(e){this.detail=e,this.isReason=!this.isReason,this.noRefund=!this.noRefund},toCancelorder:function(e){this.detail=e,this.cancelOrder=!this.cancelOrder},submitChange:function(){var t=this;e.showLoading({title:"提交中..."}),t.price>-.01&&t.express>-.01?t.$request({url:t.$api.app_admin.update_price,data:{order_id:t.detail.id,total_price:t.price?t.price:0,express_price:t.express?t.express:0},method:"post"}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:2e3,type:"success",mask:!1}),t.changePrice=!1,t.getList()):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}):t.price&&"number"==typeof t.price?t.express&&"number"==typeof t.express||e.showToast({title:"运费必须大于等于0",icon:"none",duration:1e3}):e.showToast({title:"商品总价必须大于等于0",icon:"none",duration:1e3})},toSend:function(t){this.detail=t,2!=this.detail.send_type?this.detail.status_cn?e.navigateTo({url:"/pages/app_admin/send/send?order_refund_id="+this.detail.id}):e.navigateTo({url:"/pages/app_admin/send/send?id="+this.detail.id}):this.isSend=!0},toChange:function(e){this.detail=e,this.changePrice=!this.changePrice,this.price=e.total_goods_price,this.express=e.express_price,this.total="￥"+e.total_pay_price},priceInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.express).toFixed(2):this.total="数据有误"},expressInput:function(e){e.detail.value>-.01?this.total="￥"+(+e.detail.value+ +this.price).toFixed(2):this.total="数据有误"},toAgreeCancel:function(e){this.detail=e,this.noRefund=!1,this.isReason=!this.isReason}},onShow:function(){this.getList()},onLoad:function(t){var i=this;e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.id=t.id,i.status=t.status,i.getAddress()}};t.default=d}).call(this,i("543d")["default"])},fee5:function(e,t,i){"use strict";var n=i("ef76"),o=i.n(n);o.a}},[["1621","common/runtime","common/vendor"]]]);