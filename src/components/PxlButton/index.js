import PxlButton from './PxlButton.vue'
import PxlButtonGroup from './PxlButtonGroup.vue'

PxlButton.install = Vue => {
  Vue.component(PxlButton.name, PxlButton)
  Vue.component(PxlButtonGroup.name, PxlButtonGroup)
}

export { PxlButtonGroup }
export default PxlButton
