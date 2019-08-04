import App from './App.vue'
import routes from './routes'
import locales from './i18n'

import Pxlcore from '../src'

Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.use(Pxlcore)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: locales,
})

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
