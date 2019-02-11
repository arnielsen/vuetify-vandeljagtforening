import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/activities',
      name: 'Aktiviteter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Activities.vue')
    },
    {
      path: '/members',
      name: 'Medlemmer',
      component: () => import(/* webpackChunkName: "about" */ './views/Members.vue')
    },
    {
      path: '/albums',
      name: 'Albums',
      component: () => import(/* webpackChunkName: "about" */ './views/Albums.vue')
    },
    {
      path: '/history',
      name: 'Historie',
      component: () => import(/* webpackChunkName: "about" */ './views/History.vue')
    },
    {
      path: '/links',
      name: 'Links',
      component: () => import(/* webpackChunkName: "about" */ './views/Links.vue')
    },
    {
      path: '/privacy',
      name: 'Persondata',
      component: () => import(/* webpackChunkName: "about" */ './views/Privacy.vue')
    }

  ]
})
