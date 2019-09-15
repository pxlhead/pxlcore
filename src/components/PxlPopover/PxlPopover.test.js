import { shallowMount } from '@vue/test-utils'
import PxlPopover from './PxlPopover.vue'

describe('PxlPopover.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlPopover)
    expect(wrapper.name()).toBe('PxlPopover')
    expect(wrapper.classes('pxl-popover')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
