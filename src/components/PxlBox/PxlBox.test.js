import { shallowMount } from '@vue/test-utils'
import PxlBox from './PxlBox.vue'

describe('PxlBox.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlBox)
    expect(wrapper.name()).toBe('PxlBox')
    expect(wrapper.classes('pxl-box')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
