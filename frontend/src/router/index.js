import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
