import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@v/login/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign',
    name: 'Sign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@v/login/Sign.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
