import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('../views/ArticleShow')
  },
  {
    path: '/article/create',
    name: 'article-create',
    component: () => import('../views/ArticleCreate')
  },
  {
    path: '/article/:id/edit',
    name: 'article-edit',
    component: () => import('../views/ArticleEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
