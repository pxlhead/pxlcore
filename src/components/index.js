import PxlIcon from './PxlIcon'
import PxlButton from './PxlButton'
import PxlRow from './PxlRow'
import PxlCol from './PxlCol'
import PxlLayout from './PxlLayout'
import PxlInput from './PxlInput'
import PxlRadio from './PxlRadio'

import PxlCheckbox from './PxlCheckbox'

const components = [
  PxlCheckbox,
PxlIcon, PxlButton, PxlRow, PxlCol, PxlLayout, PxlInput, PxlRadio]

const install = Vue => {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  PxlCheckbox,
 PxlIcon, PxlButton, PxlRow, PxlCol, PxlLayout, PxlInput, PxlRadio }

export default install
