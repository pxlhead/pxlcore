import { shallowMount } from '@vue/test-utils'
import PxlLayout from './PxlLayout.vue'

describe('PxlLayout.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlLayout)
    expect(wrapper.name()).toBe('PxlLayout')
    expect(wrapper.classes('pxl-layout')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
