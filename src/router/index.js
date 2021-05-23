import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllPosts from '@/components/posts/AllPosts'
import AddPost from '@/components/posts/AddPost'
import EditPost from '@/components/posts/EditPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    name: 'posts',
    path: '/posts',
    component: AllPosts
  },
  {
    name: 'add',
    path: '/add',
    component: AddPost
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
