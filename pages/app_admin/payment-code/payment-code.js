(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/payment-code/payment-code"],{"0ecc":function(t,e,n){"use strict";var o=n("1eaf"),i=n.n(o);i.a},"1eaf":function(t,e,n){},"52d7":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"73ff":function(t,e,n){"use strict";n.r(e);var o=n("52d7"),i=n("cf8f");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("0ecc");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"e88000b0",null);e["default"]=s.exports},8129:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"payment-code",components:{},data:function(){return{edit:!1,pic_url:"",save_loading:!1,price:"",tmp_price:""}},onLoad:function(t){this.submit()},methods:{savePrice:function(){this.edit=!0},submit:function(){var e=this,n=this.tmp_price?parseFloat(parseFloat(this.tmp_price).toFixed(2)):"";this.$showLoading({text:"生成中"}),this.$request({url:this.$api.scan_code_pay.qr_code,method:"POST",data:{price:n}}).then(function(o){if(e.$hideLoading(),0===o.code){var i=[o.data.qr_code.file_path,n,n,!1];e.pic_url=i[0],e.price=i[1],e.tmp_price=i[2],e.edit=i[3]}else t.showToast({icon:"none",title:o.msg})}).catch(function(){e.$hideLoading()})},qrcodeClick:function(){t.previewImage({urls:[this.pic_url]})},saveQrcode:function(){var e=this;e.$showLoading({title:"正在保存图片"}),t.downloadFile({url:e.pic_url,success:function(n){t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.showToast({title:"保存成功"})},fail:function(e){e.errMsg&&t.showModal({title:"提示",content:"您好,请先授权保存到相册权限",showCancel:!1,success:function(e){e.confirm&&t.openSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.showToast({title:"保存成功"})}}):t.showModal({title:"提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}})},complete:function(){e.$hideLoading()}})},fail:function(e){t.showModal({title:"图片下载失败",content:e.errMsg,showCancel:!1})},complete:function(){e.$hideLoading()}})}}};e.default=n}).call(this,n("543d")["default"])},cf8f:function(t,e,n){"use strict";n.r(e);var o=n("8129"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a}},[["e020","common/runtime","common/vendor"]]]);