import Home from './pages/home/Home.vue'
import Button from './pages/components/Button/Button.vue'
import Icon from './pages/components/Icon/Icon.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/components/icon',
    component: Icon,
  },
  {
    path: '/components/button',
    component: Button,
  },
]
