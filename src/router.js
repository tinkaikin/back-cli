import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      children: [
        { name: '1', path: '/', component: () => import('./views/main1/index.vue') },
        { name: '概况', path: '/dashboard', component: () => import('./views/dashboard/index.vue') },
        { name: '2', path: '/2', component: () => import('./views/main2/index.vue') }
      ]
    },
    // 登录页
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    // 重置密码页
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('./views/Forgot')
    },
    // 任务页
    {
      path: '/tasks',
      component: () => import('./views/tasks/layout.vue'),
      children: [
        { name: 'task', path: '/tasks', component: () => import('./views/tasks/view/task/Router-task') },
        { name: 'all', path: '/tasks/all', component: () => import('./views/tasks/view/task/Router-all') }
        // 有更多的路由切换的时候使用
        // { name: 'today', path: '/today', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'unfinished', path: '/unfinished', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'finished', path: '/finished', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'await', path: '/await', component: () => import('./views/tasks/view/task/Router-task') },
        // { name: 'performance', path: '/performance', component: () => import('./views/tasks/view/task/Router-task') }
      ]
    }
  ]
})
// 路由过滤
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 这里做判断
  next()
})

export default router
