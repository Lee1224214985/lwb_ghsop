import Vue from 'vue'
import App from './App.vue'

import router from './router'

import 'lib-flexible/flexible'  //

//-----------------
new Vue({
    render: h => h(App),
    router,
    //在main.js中注册完后,所有组件都能看到$router和$route <router-link> 和 <router-router>

}).$mount('#app')  //挂在到app上