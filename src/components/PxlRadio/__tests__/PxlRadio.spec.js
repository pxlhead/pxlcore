import { shallowMount } from '@vue/test-utils'
import PxlRadio from './PxlRadio.vue'

describe('PxlRadio.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlRadio)
    expect(wrapper.name()).toBe('PxlRadio')
    expect(wrapper.classes('pxl-radio')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
