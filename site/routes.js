import Home from './pages/home/Home.vue'
import Radio from './pages/components/Radio/Radio.vue'
import Input from './pages/components/Input/Input.vue'
import Layout from './pages/components/Layout/Layout.vue'
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
  {
    path: '/components/layout',
    component: Layout,
  },
  {
    path: '/components/input',
    component: Input,
  },
  {
    path: '/components/radio',
    component: Radio,
  },
]
