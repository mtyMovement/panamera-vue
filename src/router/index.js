import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Test from '@/components/Test'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  mode:"history",
  /*scrollBehavior (to, from, saveTop){
    if (saveTop){
      return saveTop
    }else{
      return {x: 0,y: 0}
    }
  },*/
  routes: [
    {
      path: '/helloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage
    },
  ]
})