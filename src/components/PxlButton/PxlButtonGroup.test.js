import { shallowMount } from '@vue/test-utils'
import PxlButtonGroup from './PxlButtonGroup.vue'

describe('PxlButtonGroup.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlButtonGroup)
    expect(wrapper.name()).toBe('PxlButtonGroup')
    expect(wrapper.classes('pxl-button-group')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('adds join class when "join" is true', () => {
    const wrapper = shallowMount(PxlButtonGroup, {
      propsData: { join: true },
    })
    expect(wrapper.classes('pxl-button-group--join')).toBe(true)
  })
})
