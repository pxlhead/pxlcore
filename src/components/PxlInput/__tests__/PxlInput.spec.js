import { shallowMount } from '@vue/test-utils'
import PxlInput from './PxlInput.vue'

describe('PxlInput.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlInput)
    expect(wrapper.name()).toBe('PxlInput')
    expect(wrapper.classes('pxl-input')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
