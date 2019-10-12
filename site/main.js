import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import Pxlcore from '../src'
Vue.use(Pxlcore)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
