import * as components from './components'

const install = Vue => {
  Object.values(components).map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
