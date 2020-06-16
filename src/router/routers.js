// 
// 所有路由配置的数组

import MSite from '@/pages/MSite/MSite.vue'
import Order from '@/pages/Order/Order.vue'
import Search from '@/pages/Search/Search.vue'
import Profile from '@/pages/Profile/Profile.vue'

export default [
    {
        path: '/MSite',
        component: MSite
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/order',
        component: Order
    },
    {   
        path: '/profile',
        component: Profile
    },
    {
        path: '/',    //重定向
        redirect:'/msite'
    }
]
