(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,i,e){var s=e(161);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(14)(s,a);s.locals&&(t.exports=s.locals)},161:function(t,i,e){(t.exports=e(15)(!1)).push([t.i,".recommend-list .tit[data-v-510514fc]{text-align:center;font-weight:400;font-size:14px;line-height:60px;color:#41d4c7}.recommend-list .list[data-v-510514fc]{padding:0 20px 20px}.recommend-list .list .list-item[data-v-510514fc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:20px}.recommend-list .list .list-item[data-v-510514fc]:last-child{margin-bottom:0}.recommend-list .list .list-item .img-box[data-v-510514fc]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;margin-right:20px}.recommend-list .list .list-item .text-box .name[data-v-510514fc]{font-size:14px;color:#fff;margin-bottom:10px}.recommend-list .list .list-item .text-box .msg[data-v-510514fc]{color:hsla(0,0%,100%,.5)}",""])},162:function(t,i,e){"use strict";var s=e(146);e.n(s).a},163:function(t,i,e){t.exports=e.p+"image/38a8ec5a0b086b09ae81d3e355ab4c68.jpg"},164:function(t,i,e){t.exports=e.p+"image/4854175ecc2ec425bd58b07633d2323b.jpg"},165:function(t,i,e){t.exports=e.p+"image/5aa1b8dde441067b634ce0911578acf1.jpg"},175:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("main",{staticClass:"main"},[e("scroll",[e("slider",{directives:[{name:"show",rawName:"v-show",value:t.bannerList,expression:"bannerList"}],attrs:{data:t.bannerList}},t._l(t.bannerList,function(t,i){return e("div",{key:i},[e("img",{attrs:{src:t.picUrl}})])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dataList.length,expression:"dataList.length"}],staticClass:"recommend-list"},[e("h1",{staticClass:"tit"},[t._v("热门歌单推荐")]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.dataList,function(i){return e("li",{staticClass:"list-item",on:{click:function(e){t.showItem(i)}}},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:i.imgurl,alt:""}})]),t._v(" "),e("div",{staticClass:"text-box"},[e("h2",{staticClass:"name"},[t._v(t._s(i.creator.name))]),t._v(" "),e("p",{staticClass:"msg"},[t._v(t._s(i.dissname))])])])}))]),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:!t.dataList.length,expression:"!dataList.length"}]})],1),t._v(" "),e("router-view")],1)};s._withStripped=!0;var a=e(141),n=e.n(a),c=e(38),o=e(150),r=e(151),l=e(149),m=e(152),d=e(23),p={data:function(){return{dataList:[],bannerList:[{picUrl:e(165)},{picUrl:e(164)},{picUrl:e(163)}]}},created:function(){this._getBanner(),this._getDiscList()},methods:n()({showItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setDisc(t)},_getBanner:function(){var t=this;Object(l.a)().then(function(i){i.code===m.a&&(t.bannerList=i.data.slider)})},_getDiscList:function(){var t=this;Object(l.b)().then(function(i){i.code===m.a&&(t.dataList=i.data.list)},function(i){t.dataList=i})}},Object(d.c)(["setDisc"])),components:{slider:c.a,scroll:o.a,loading:r.a},metaInfo:{title:"推荐",titleTemplate:"%s - MusicDemo"}},f=(e(162),e(6)),v=Object(f.a)(p,s,[],!1,null,"510514fc",null);v.options.__file="src\\components\\recommend.vue";i.default=v.exports}}]);