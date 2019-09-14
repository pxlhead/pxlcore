import PxlRadio from './PxlRadio.vue'
import PxlRadioButton from './PxlRadioButton.vue'
import PxlRadioGroup from './PxlRadioGroup.vue'

PxlRadio.install = Vue => {
  Vue.component(PxlRadio.name, PxlRadio)
  Vue.component(PxlRadioButton.name, PxlRadioButton)
  Vue.component(PxlRadioGroup.name, PxlRadioGroup)
}

export { PxlRadioButton, PxlRadioGroup }
export default PxlRadio
