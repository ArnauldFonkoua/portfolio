import { createRouter, createWebHistory } from 'vue-router'
import ehome from '../components/ehome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ehome,
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/shop.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/about.vue'),
        },
        {
            path:'/account',
            name:'account',
            component: () => import('../views/account.vue'),
        },
        {
            path:'/signup',
            name:'signup',
            component: () => import('../views/signup.vue'),
        },
        {
            path:'/signin',
            name:'signin',
            component: () => import('../views/signin.vue'),
        },
        {
          path:'/cart',
          name:'cart',
          component: () => import('../views/cart.vue'),
        },
        {
          path:'/contactus',
          name:'contactus',
          component: () => import('../views/contactus.vue'),

        }

    ],

})

export default router
