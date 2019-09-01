import PxlLayout from './PxlLayout.vue'
import PxlContent from './PxlContent.vue'
import PxlHeader from './PxlHeader.vue'
import PxlFooter from './PxlFooter.vue'

export default Vue => {
  Vue.component(PxlLayout.name, PxlLayout)
  Vue.component(PxlContent.name, PxlContent)
  Vue.component(PxlHeader.name, PxlHeader)
  Vue.component(PxlFooter.name, PxlFooter)
}
