import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      children: [
        { name: '1', path: '/', component: () => import('./views/main1/index.vue') },
        { name: '2', path: '/2', component: () => import('./views/main2/index.vue') }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('./views/Forgot')
    },
    // 任务页面
    {
      path: '/tasks',
      // name: 'tasks',
      component: () => import('./views/tasks/layout.vue'),
      children: [
        { name: 'task', path: '/task', component: () => import('./views/tasks/view/task/Router-task') },
        { name: 'all', path: '/all', component: () => import('./views/tasks/view/task/Router-all') }
        // { name: 'today', path: '/today', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'unfinished', path: '/unfinished', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'finished', path: '/finished', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'await', path: '/await', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'performance', path: '/performance', component: () => import('./views/tasks/view/task/Router-task') }
      ]
    }
    // 下面可能是不要的

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
