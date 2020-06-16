// 向外暴露路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'

// 声明使用vue插件
Vue.use(VueRouter)
// ------------
export default new VueRouter({
    //路由模式   ---
    mode: 'history',   //路由中没有#
    // 项目中所有的路由
    routes
})