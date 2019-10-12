import { shallowMount } from '@vue/test-utils'
import PxlRow from './PxlRow.vue'

describe('PxlRow.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlRow)
    expect(wrapper.name()).toBe('PxlRow')
    expect(wrapper.classes('pxl-row')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
