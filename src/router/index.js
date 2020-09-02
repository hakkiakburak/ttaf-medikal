import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'Anasayfa',
        component: () => import(/* webpackChunkName: "home-one" */ '../views/HomeOne.vue')
    },
    {
        path: '/hakkimizda',
        name: 'Hakkımızda',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/kisisel-koruyucular',
        name: 'Kişisel Koruyucular',
        component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
    },
    {
        path: '/ürün-detay',
        name: 'Ürün Detay',
        component: () => import(/* webpackChunkName: "project-details" */ '../views/ProjectDetails.vue')
    },
    {
        path: '/blog',
        name: 'TTAF Medikal Blog',
        component: () => import(/* webpackChunkName: "blog-left-sidebar" */ '../views/BlogLeftSidebar.vue')
    },

    {
        path: '/blog-detay',
        name: 'Blog Detay',
        component: () => import(/* webpackChunkName: "blog-details" */ '../views/BlogDetails.vue')
    },

    {
        path: '/iletisim',
        name: 'İletişim',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
