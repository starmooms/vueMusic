(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,'a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:”;content:none}:focus{outline:0}ins{text-decoration:none}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}body{font-size:14px;line-height:1;font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#303944;color:#fff}img{display:block;width:100%}a{color:inherit;text-decoration:none}body,html{height:100%}.wrap{padding:0 20px}#app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}#app .main{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}@font-face{font-family:iconfont;src:url("https://at.alicdn.com/t/font_730304_jqc8bz5wcn.eot");src:url("https://at.alicdn.com/t/font_730304_jqc8bz5wcn.eot?#iefix") format("embedded-opentype"),url("https://at.alicdn.com/t/font_730304_jqc8bz5wcn.woff") format("woff"),url("https://at.alicdn.com/t/font_730304_jqc8bz5wcn.ttf") format("truetype"),url("https://at.alicdn.com/t/font_730304_jqc8bz5wcn.svg#iconfont") format("svg")}.iconfont{font-family:iconfont!important;font-size:inherit;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ico-user:before{content:"\\E788"}.ico-back:before{content:"\\E61B"}',""])},114:function(t,e,i){var n=i(113);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(13)(n,s);n.locals&&(t.exports=n.locals)},19:function(t,e,i){var n=i(92);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(13)(n,s);n.locals&&(t.exports=n.locals)},20:function(t,e,i){var n=i(94);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(13)(n,s);n.locals&&(t.exports=n.locals)},21:function(t,e,i){var n=i(97);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(13)(n,s);n.locals&&(t.exports=n.locals)},36:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(e,n){return i("span",{key:n,staticClass:"dot",class:{active:n==t.currentPageIndex}})}))])};n._withStripped=!0;var s=i(34),o=i.n(s),a=i(44),r={data:function(){return{dots:[],currentPageIndex:0}},props:{sets:{type:Object,default:null},showDots:{type:Boolean,default:!0},data:{default:null}},mounted:function(){var t=this;this.upDate(),window.addEventListener("resize",function(){t.slider&&t.slider.enabled&&(clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.slider.isInTransition?t._onScrollEnd():t.autoPlay&&t._play(),t.refresh()},60))})},computed:{opts:function(){return o()({probeType:1,click:!0,loop:!0,autoPlay:!0,interval:4e3,scrollX:!0,scrollY:!1,momentum:!1,speed:400,threshold:.3},this.sets)}},methods:{upDate:function(){var t=this;this.slider&&this.slider.destroy(),setTimeout(function(){t.init()},20)},init:function(){clearTimeout(this.timer),this.currentPageIndex=0,this._setWidth(),this.showDots&&this._initDots(),this._initSlider(),this.opts.autoPlay&&this._play()},_setWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,n=0;n<this.children.length;n++){var s=this.children[n];s.style.width=i+"px",s.classList.add("slider-item"),e+=i}this.opts.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new a.a(this.$refs.slider,{probeType:this.opts.probeType,click:this.opts.click,scrollX:this.opts.scrollX,scrollY:this.opts.scrollY,momentum:this.opts.momentum,snap:{loop:this.opts.loop,threshold:this.opts.threshold,speed:this.opts.speed}}),this.slider.on("scrollEnd",this._onScrollEnd),this.slider.on("touchEnd",function(){t.opts.autoPlay&&t._play()}),this.slider.on("beforeScrollStart",function(){t.opts.autoPlay&&clearTimeout(t.timer)})},_onScrollEnd:function(){var t=this.slider.getCurrentPage().pageX;this.currentPageIndex=t,this.opts.autoPlay&&(clearInterval(this.timer),this._play())},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this;clearInterval(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.opts.interval)},refresh:function(){this._setWidth(!0),this.slider.refresh()}},watch:{opts:function(){this.slider&&this.upDate()},data:function(){this.slider&&this.upDate()}},activated:function(){if(this.slider){this.slider.enable();var t=this.slider.getCurrentPage().pageX;this.slider.goToPage(t,0,0),this.currentPageIndex=t,this.opts.autoPlay&&this._play()}},deactivated:function(){this.slider.disable(),clearTimeout(this.timer)},beforeDestroy:function(){this.slider.disable(),clearTimeout(this.timer)}},l=(i(98),i(5)),d=Object(l.a)(r,n,[],!1,null,"56abdae8",null);d.options.__file="src\\components\\base\\slider.vue";e.a=d.exports},56:function(t,e,i){"use strict";i.r(e);i(114),i(111);var n=i(4),s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("vHeader"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)};s._withStripped=!0;var o=i(36),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[t._m(0),t._v(" "),i("ul",{staticClass:"hd-nav"},[i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/recommend"}},[i("span",[t._v("推荐")])])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[i("span",[t._v("歌手")])])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[i("span",[t._v("排行")])])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[i("span",[t._v("搜索")])])],1)])])},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hd-top"},[e("div",{staticClass:"name-box"},[e("img",{staticClass:"user-img",attrs:{src:i(96),title:"user"}}),this._v(" "),e("p",[this._v("Vue Music")])]),this._v(" "),e("div",{staticClass:"user-btn"},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"iconfont ico-user"})])])])}];a._withStripped=!0;var l={},d=(i(95),i(5)),c=Object(d.a)(l,a,r,!1,null,"2580a163",null);c.options.__file="src\\components\\vHeader.vue";var h=c.exports,u={data:function(){return{name:"vue hellow !!!",a:"d"}},components:{slider:o.a,vHeader:h}},p=(i(93),Object(d.a)(u,s,[],!1,null,null,null));p.options.__file="src\\app.vue";var f=p.exports,m=i(33);n.a.use(m.a);var v=new m.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,175))},children:[{path:"/recommend/:id",component:function(){return Promise.all([i.e(0),i.e(1)]).then(i.bind(null,176))}}]}]}),b=i(55),g=i.n(b),x=i(22),w=i(25),y=i.n(w),_=i(54),k=i.n(_),C=i(53),z=i.n(C),q=(i(61),function(){function t(e){var i=e.id,n=e.mid,s=e.singer,o=e.name,a=e.album,r=e.duration,l=e.image,d=e.url;k()(this,t),this.id=i,this.mid=n,this.singer=s,this.name=o,this.album=a,this.duration=r,this.image=l,this.url=d}return z()(t,[{key:"getLyric",value:function(){return this.lyric?y.a.resolve(this.lyric):new y.a(function(t,e){t("no lyric")})}}]),t}()),P=function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(function(t){return new q({id:t.songid,mid:t.songmid,singer:function(t){var e=[];return t?(t.forEach(function(t){e.push(t.name)}),e.join("/")):""}(t.singer),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://dl.stream.qqmusic.qq.com/C400"+t.songmid+"/"+t.songid+".m4a?guid=263427534&fromtag=66"})}(t))}),e};n.a.use(x.a);var S=new x.a.Store({state:{disc:"",songList:""},getters:{},mutations:{setDisc:function(t,e){t.disc=e},setSongList:function(t,e){t.songList=e}},actions:{setSongList:function(t,e){(0,t.commit)("setSongList",P(e))}}});n.a.use(g.a),new n.a({el:"#App",components:{App:f},router:v,store:S,render:function(t){return t("App")}})},92:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,"",""])},93:function(t,e,i){"use strict";var n=i(19);i.n(n).a},94:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,".header .hd-top[data-v-2580a163],.header[data-v-2580a163]{position:relative}.header .hd-top .name-box[data-v-2580a163]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:44px}.header .hd-top .name-box .user-img[data-v-2580a163]{width:32px;height:32px;margin-right:10px;border-radius:50%}.header .hd-top .name-box p[data-v-2580a163]{font-size:18px}.header .hd-top .user-btn[data-v-2580a163]{position:absolute;top:0;right:0;line-height:44px;padding:0 10px;font-size:20px;color:#41d4c7}.header .hd-nav[data-v-2580a163]{height:44px;line-height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;text-align:center}.header .hd-nav .nav-item[data-v-2580a163]{-webkit-box-flex:1;-ms-flex:1;flex:1}.header .hd-nav .nav-item .nav-link[data-v-2580a163]{display:block}.header .hd-nav .nav-item .nav-link span[data-v-2580a163]{color:hsla(0,0%,100%,.5)}.header .hd-nav .nav-item .nav-link.router-link-active span[data-v-2580a163]{color:#41d4c7;padding-bottom:2px;border-bottom:2px solid #41d4c7}",""])},95:function(t,e,i){"use strict";var n=i(20);i.n(n).a},96:function(t,e,i){t.exports=i.p+"image/4fac88f83af2d473e326b1c0b8fb64d7.jpg"},97:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,".slider[data-v-56abdae8]{width:100%;position:relative;overflow:hidden}.slider .slider-group .slider-item[data-v-56abdae8]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.slider .slider-group .slider-item img[data-v-56abdae8]{width:100%;display:block}.slider .dots[data-v-56abdae8]{position:absolute;right:0;left:0;bottom:12px;-webkit-transform:translateZ(0);transform:translateZ(0);text-align:center;font-size:0}.slider .dots .dot[data-v-56abdae8]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background-color:#fff}.slider .dots .dot.active[data-v-56abdae8]{width:20px;border-radius:5px}",""])},98:function(t,e,i){"use strict";var n=i(21);i.n(n).a}},[[56,3,4]]]);