import "./less/base.less"
import "es6-promise"


//const Vue = () => import(/* webpackChunkName: "vue" */'vue')  //异步调用单独加载出vue。。。
import Vue from "vue"
import App from "./app"
import router from "./router"
import VueMeta from "vue-meta"
import store from "./store"

Vue.use(VueMeta);
//改变meta          可以使用vue-meta
// router.beforeEach((to,from,next) => {
//     if(to.meta.content){
//         let head = document.getElementsByTagName('head')[0];
//         let meta = document.createElement('meta');
//         meta.content = to.meta.content;
//         head.appendChild(meta)
//     }
//     if(to.meta.title){
//         document.title = to.meta.title;
//     }
//     next()
// })

new Vue({
    el:"#App",
    components : {App},
    router,
    store,
    render (h) {
        return h('App')
    }
})