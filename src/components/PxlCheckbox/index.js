import PxlCheckbox from './PxlCheckbox.vue'
import PxlCheckboxButton from './PxlCheckboxButton.vue'
import PxlCheckboxGroup from './PxlCheckboxGroup.vue'

PxlCheckbox.install = Vue => {
  Vue.component(PxlCheckbox.name, PxlCheckbox)
  Vue.component(PxlCheckboxButton.name, PxlCheckboxButton)
  Vue.component(PxlCheckboxGroup.name, PxlCheckboxGroup)
}

export { PxlCheckboxButton, PxlCheckboxGroup }
export default PxlCheckbox
