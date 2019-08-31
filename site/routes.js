import Home from './pages/home/Home.vue'
import Col from './pages/components/Col/Col.vue'
import Row from './pages/components/Row/Row.vue'
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
  {
    path: '/components/row',
    component: Row,
  },
  {
    path: '/components/col',
    component: Col,
  },
]
