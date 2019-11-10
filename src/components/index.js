import PxlBox from './PxlBox'
import PxlButton from './PxlButton'
import PxlCheckbox from './PxlCheckbox'
import PxlIcon from './PxlIcon'
import PxlInput from './PxlInput'
import PxlInputNumber from './PxlInputNumber'
import PxlPopover from './PxlPopover'
import PxlRadio from './PxlRadio'

const components = [
  PxlBox,
  PxlButton,
  PxlCheckbox,
  PxlIcon,
  PxlInput,
  PxlInputNumber,
  PxlPopover,
  PxlRadio,
]

const install = Vue => {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { PxlBox, PxlButton, PxlCheckbox, PxlIcon, PxlInput, PxlInputNumber, PxlPopover, PxlRadio }

export default install
