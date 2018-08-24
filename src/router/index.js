import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/Index'
import List from '@/views/list/List'
import login from '@/views/login/login'
import register from '@/views/register/register'
import productDetail from '@/views/productDetail/productDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: productDetail,
      meta: {
        title: '商品详情'
      }
    }
  ]
})
