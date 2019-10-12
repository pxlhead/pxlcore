import Vue from 'vue'
import Router from 'vue-router'

import { toKebabCase } from '@/utils'

import components from '../components.js'
import Home from './views/Home.vue'

const componentViewNames = Object.keys(components).map(name => name.slice(3))
const componentRoutes = componentViewNames.map(name => ({
  path: `/components/${toKebabCase(name)}`,
  component: () => import(/* webpackChunkName: "components" */ `./views/components/${name}.vue`),
}))

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    ...componentRoutes,
  ],
})
