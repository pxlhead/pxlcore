import { shallowMount } from '@vue/test-utils'
import PxlCol from './PxlCol.vue'

describe('PxlCol.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlCol)
    expect(wrapper.name()).toBe('PxlCol')
    expect(wrapper.classes('pxl-col')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
