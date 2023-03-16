import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      component:()=>import('../components/Login'),
    },
    {
      path: '/login',
      name: 'Login',
      component:()=>import('../components/Login'),
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
  mode: 'history'
})