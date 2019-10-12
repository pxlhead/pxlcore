import { shallowMount } from '@vue/test-utils'
import PxlCheckbox from './PxlCheckbox.vue'

describe('PxlCheckbox.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlCheckbox)
    expect(wrapper.name()).toBe('PxlCheckbox')
    expect(wrapper.classes('pxl-checkbox')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
