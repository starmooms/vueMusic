(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(t,e,o){var n=o(156);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(14)(n,s);n.locals&&(t.exports=n.locals)},142:function(t,e,o){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(o(37));e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}},143:function(t,e,o){"use strict";var n=o(24),s=o.n(n),r=o(37),i=o.n(r),a=o(63),c=o.n(a),l=o(154),u=o.n(l),f=function(t){var e="";for(var o in t){var n=t[o]?t[o]:"";e+="&"+o+"="+encodeURIComponent(n)}return e?e.substring(1):""};o.d(e,"a",function(){return m}),o.d(e,"b",function(){return h}),o.d(e,"c",function(){return g});var d={},p={param:"jsonpCallback"},m=function(){return function(t,e,o){return t+=(t.indexOf("?")<0?"?":"&")+f(e),console.log(t),new s.a(function(e,n){u()(t,o,function(t,o){t?n(t):e(o)})})}("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",i()({},d,{}),p)},h=function(){var t={g_tk:5381,notice:0,inCharset:"utf8",outCharset:"utf-8",platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,categoryId:1e7,needNewCode:0,rnd:Math.random(),format:"json"};return c.a.get("/api/getDiscList",{params:t}).then(function(t){return s.a.resolve(t.data)}).catch(function(t){console.log("error 获取推荐列表失败 获取静态json数据");return o.e(5).then(o.bind(null,177)).then(function(t){var e=t.recommendData.data;return s.a.reject(e)})})},g=function(t){console.log(t);var e=i()({},d,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return c.a.get("/api/getSoist",{params:e}).then(function(t){return s.a.resolve(t.data)}).catch(function(t){console.log("err 获取歌曲列表失败");return o.e(4).then(o.bind(null,176)).then(function(t){return s.a.resolve(t.default)})})}},144:function(t,e,o){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"scroll-box"},[e("div",{staticClass:"scroll-content"},[this._t("default")],2)])};n._withStripped=!0;var s=o(37),r=o.n(s),i=o(38),a={props:{sets:{type:Object,default:null},data:null},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},computed:{opts:function(){return r()({probeType:3,click:!0,scrollX:!1,scrollY:!0},this.sets)}},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,this.opts),this.opts.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.opts.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.opts.pulldown&&this.scroll.on("touchend",function(e){e.y>50&&t.$emit("pulldown")}),this.opts.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}))},refresh:function(){this.scroll&&this.scroll.refresh()},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;this.$nextTick(function(){t.refresh()})}}},c=(o(157),o(6)),l=Object(c.a)(a,n,[],!1,null,"d2a2ab10",null);l.options.__file="src\\components\\base\\scroll.vue";e.a=l.exports},145:function(t,e,o){var n=o(158);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(14)(n,s);n.locals&&(t.exports=n.locals)},146:function(t,e,o){var n=o(160);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(14)(n,s);n.locals&&(t.exports=n.locals)},147:function(t,e,o){var n=o(162);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(14)(n,s);n.locals&&(t.exports=n.locals)},148:function(t,e,o){var n=o(164);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(14)(n,s);n.locals&&(t.exports=n.locals)},150:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=0},151:function(t,e){var o=1e3,n=60*o,s=60*n,r=24*s,i=365.25*r;function a(t,e,o){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+o:Math.ceil(t/e)+" "+o+"s"}t.exports=function(t,e){e=e||{};var c=typeof t;if("string"===c&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var a=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*r;case"hours":case"hour":case"hrs":case"hr":case"h":return a*s;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(t);if("number"===c&&!1===isNaN(t))return e.long?function(t){return a(t,r,"day")||a(t,s,"hour")||a(t,n,"minute")||a(t,o,"second")||t+" ms"}(t):function(t){if(t>=r)return Math.round(t/r)+"d";if(t>=s)return Math.round(t/s)+"h";if(t>=n)return Math.round(t/n)+"m";if(t>=o)return Math.round(t/o)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},152:function(t,e,o){var n;function s(t){function o(){if(o.enabled){var t=o,s=+new Date,r=s-(n||s);t.diff=r,t.prev=n,t.curr=s,n=s;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(o,n){if("%%"===o)return o;c++;var s=e.formatters[n];if("function"==typeof s){var r=i[c];o=s.call(t,r),i.splice(c,1),c--}return o}),e.formatArgs.call(t,i),(o.log||e.log||console.log.bind(console)).apply(t,i)}}return o.namespace=t,o.enabled=e.enabled(t),o.useColors=e.useColors(),o.color=function(t){var o,n=0;for(o in t)n=(n<<5)-n+t.charCodeAt(o),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),"function"==typeof e.init&&e.init(o),o}(e=t.exports=s.debug=s.default=s).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var o=("string"==typeof t?t:"").split(/[\s,]+/),n=o.length,s=0;s<n;s++)o[s]&&("-"===(t=o[s].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var o,n;for(o=0,n=e.skips.length;o<n;o++)if(e.skips[o].test(t))return!1;for(o=0,n=e.names.length;o<n;o++)if(e.names[o].test(t))return!0;return!1},e.humanize=o(151),e.names=[],e.skips=[],e.formatters={}},153:function(t,e,o){(function(n){function s(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==n&&"env"in n&&(t=n.env.DEBUG),t}(e=t.exports=o(152)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var o=this.useColors;if(t[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+t[0]+(o?"%c ":" ")+"+"+e.humanize(this.diff),!o)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var s=0,r=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&"%c"===t&&(r=++s)}),t.splice(r,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=s,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(s())}).call(this,o(25))},154:function(t,e,o){var n=o(153)("jsonp");t.exports=function(t,e,o){"function"==typeof e&&(o=e,e={});e||(e={});var i,a,c=e.prefix||"__jp",l=e.name||c+s++,u=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(a=setTimeout(function(){m(),o&&o(new Error("Timeout"))},f));function m(){i.parentNode&&i.parentNode.removeChild(i),window[l]=r,a&&clearTimeout(a)}return window[l]=function(t){n("jsonp got",t),m(),o&&o(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',t),(i=document.createElement("script")).src=t,p.parentNode.insertBefore(i,p),function(){window[l]&&m()}};var s=0;function r(){}},156:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".scroll-box[data-v-d2a2ab10]{height:100%;overflow:hidden}.scroll-box>.scroll-content[data-v-d2a2ab10]{min-height:101%}",""])},157:function(t,e,o){"use strict";var n=o(141);o.n(n).a},158:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".slide-enter-active[data-v-c9616aa6],.slide-leave-active[data-v-c9616aa6]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.slide-enter[data-v-c9616aa6],.slide-leave-to[data-v-c9616aa6]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},159:function(t,e,o){"use strict";var n=o(145);o.n(n).a},160:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".scroll-content{background-color:#303944!important}",""])},161:function(t,e,o){"use strict";var n=o(146);o.n(n).a},162:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".details-box[data-v-0c455ce5]{position:fixed;top:0;left:0;bottom:0;right:0;background-color:#303944}.details-box .top-bg[data-v-0c455ce5]{position:relative}.details-box .top-bg .bg-image[data-v-0c455ce5]{background-size:cover;height:0;padding-top:70%;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top}.details-box .top-bg .back[data-v-0c455ce5]{position:absolute;top:0;left:10px;z-index:21}.details-box .top-bg .back a[data-v-0c455ce5]{display:block;padding:0 10px}.details-box .top-bg .back a .ico-back[data-v-0c455ce5]{font-size:30px;color:#41d4c7;line-height:40px;position:absolute}.details-box .top-bg .tit[data-v-0c455ce5]{position:absolute;top:0;left:0;width:100%;z-index:20}.details-box .top-bg .tit h1[data-v-0c455ce5]{width:68%;margin:0 auto;line-height:40px;white-space:nowrap;overflow:hidden;font-weight:400;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:18px;text-align:center}.details-box .bottom-box[data-v-0c455ce5]{position:absolute;top:40px;left:0;bottom:0;right:0;overflow:hidden}.details-box .bottom-box .det-scroll-box[data-v-0c455ce5]{position:absolute;top:40px;bottom:0;left:0;right:0;margin-top:-40px}.details-box .bottom-box .det-scroll-box>.scroll-box[data-v-0c455ce5]{overflow:visible}",""])},163:function(t,e,o){"use strict";var n=o(147);o.n(n).a},164:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".song-list[data-v-07c6ff3e]{padding:20px 30px}.song-list .song-item[data-v-07c6ff3e]{display:-webkit-box;display:-ms-flexbox;display:flex;height:60px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.song-list .song-item .name[data-v-07c6ff3e]{color:#fff}.song-list .song-item .name[data-v-07c6ff3e],.song-list .song-item .singer[data-v-07c6ff3e]{font-size:14px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding-right:2%}.song-list .song-item .singer[data-v-07c6ff3e]{color:hsla(0,0%,100%,.5);margin-top:8px}",""])},165:function(t,e,o){"use strict";var n=o(148);o.n(n).a},175:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("detailsList")],1)};n._withStripped=!0;var s=o(142),r=o.n(s),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"details-box"},[o("div",{staticClass:"top-bg"},[o("div",{staticClass:"back"},[o("a",{attrs:{href:"javascript:;"},on:{click:t.back}},[o("i",{staticClass:"iconfont ico-back"})])]),t._v(" "),o("div",{staticClass:"tit"},[o("h1",[t._v(t._s(t.disc.dissname))])]),t._v(" "),o("div",{ref:"bgImage",staticClass:"bg-image",style:t.topBgScale})]),t._v(" "),o("div",{staticClass:"bottom-box"},[o("div",{staticClass:"det-scroll-box",style:{top:t.setListTop}},[o("scroll",{attrs:{data:t.songList,sets:t.scrollSets},on:{scroll:t.scrollAct}},[o("songList")],1)],1)])])};i._withStripped=!0;var a=o(144),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"song-list"},t._l(t.songList,function(e){return o("li",{staticClass:"song-item"},[o("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"singer"},[t._v(t._s(e.singer))])])}))};c._withStripped=!0;var l=o(23),u={computed:r()({},Object(l.d)(["songList"]))},f=(o(165),o(6)),d=Object(f.a)(u,c,[],!1,null,"07c6ff3e",null);d.options.__file="src\\components\\base\\songList.vue";var p=d.exports,m={components:{scroll:a.a,songList:p},data:function(){return{scrollSets:{listenScroll:!0,probeType:3},scrollY:0,setListTop:0}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.bgImage&&(t.imageHeight=t.$refs.bgImage.clientHeight,t.minTranslateY=40-t.imageHeight,t.setListTop=t.imageHeight+"px")})},computed:r()({},Object(l.d)(["disc","songList"]),{topBgScale:function(){return{transform:this.scrollY>0?"scale("+(1+this.scrollY/this.imageHeight)+")":"1",zIndex:this.scrollY>0?"10":"0",backgroundImage:"url("+this.disc.imgurl+")"}}}),methods:{back:function(){this.$router.back()},scrollAct:function(t){this.scrollY=t.y}},watch:{}},h=(o(163),o(161),Object(f.a)(m,i,[],!1,null,"0c455ce5",null));h.options.__file="src\\components\\base\\detailsList.vue";var g=h.exports,v=o(143),b=o(150),x={components:{detailsList:g},created:function(){if(!this.disc)return this._goBack(),!1;this._getSongList()},computed:r()({},Object(l.d)(["disc"])),methods:r()({_goBack:function(){this.$router.push("/recommend")},_getSongList:function(){var t=this;Object(v.c)(this.disc.dissid).then(function(e){e.code===b.a&&t.setSongList(e.cdlist[0].songlist)})}},Object(l.b)(["setSongList"]))},w=(o(159),Object(f.a)(x,n,[],!1,null,"c9616aa6",null));w.options.__file="src\\components\\childrenView\\recomendDetails.vue";e.default=w.exports}}]);