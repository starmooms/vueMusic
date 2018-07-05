import Vue from "vue";
import VueRouter from "vue-router"


Vue.use(VueRouter);


// require.ensure  webpack的懒加载方法 第三个参数是文件名
// const User = r => require.ensure([],()=> r(require('./components/User.vue')),'useVue');
// import 需安装babel-plugin-syntax-dynamic-import
// const User = () => import(/* webpackChunkName: "pageUser" */'./components/User');
const recommend = () => import('../components/recommend');
const recommendDetail = () => import('../components/childrenView/recomendDetails.vue');

const router = new VueRouter({
    // mode: 'history', //去掉#
    routes : [
        { 
            path:'/',
            redirect:"/recommend",
        },
        {
            path:'/recommend',
            component:recommend,
            children:[
                {
                    path:'/recommend/:id',
                    component:recommendDetail
                }
            ]
        },
    ]
})

export default router