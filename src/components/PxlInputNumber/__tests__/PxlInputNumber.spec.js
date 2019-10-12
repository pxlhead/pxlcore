import { shallowMount } from '@vue/test-utils'
import PxlInputNumber from './PxlInputNumber.vue'

describe('PxlInputNumber.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlInputNumber)
    expect(wrapper.name()).toBe('PxlInputNumber')
    expect(wrapper.classes('pxl-input-number')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
