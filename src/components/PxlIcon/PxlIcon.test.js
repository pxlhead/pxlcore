import { shallowMount, mount } from '@vue/test-utils'
import { toKebabCase } from '../../utils'
import PxlIcon from './PxlIcon.vue'
import * as icons from './icons'

describe('PxlIcon.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlIcon, {
      propsData: { name: 'add' },
    })
    expect(wrapper.name()).toBe('PxlIcon')
    expect(wrapper.classes('pxl-icon')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders svg icon', () => {
    const wrapper = mount(PxlIcon, {
      propsData: { name: 'add' },
    })

    Object.keys(icons).forEach(name => {
      wrapper.setProps({ name: toKebabCase(name) })
      expect(wrapper.find(`svg.pxl-icon--${toKebabCase(name)}`).exists()).toBe(true)
    })
  })

  test('adds size class when size is passed', () => {
    const wrapper = shallowMount(PxlIcon, {
      propsData: { name: 'add', size: 'xs' },
    })

    expect(wrapper.classes()).toContain('pxl-icon--xs')
    wrapper.setProps({ size: 's' })
    expect(wrapper.classes()).toContain('pxl-icon--s')
    wrapper.setProps({ size: 'm' })
    expect(wrapper.classes()).toContain('pxl-icon--m')
    wrapper.setProps({ size: 'l' })
    expect(wrapper.classes()).toContain('pxl-icon--l')
    wrapper.setProps({ size: 'xl' })
    expect(wrapper.classes()).toContain('pxl-icon--xl')
  })

  test('adds color class when color is passed', () => {
    const wrapper = shallowMount(PxlIcon, {
      propsData: { name: 'add', color: 'primary' },
    })

    expect(wrapper.classes()).toContain('pxl-icon--primary')
    wrapper.setProps({ color: 'success' })
    expect(wrapper.classes()).toContain('pxl-icon--success')
    wrapper.setProps({ color: 'error' })
    expect(wrapper.classes()).toContain('pxl-icon--error')
    wrapper.setProps({ color: 'warning' })
    expect(wrapper.classes()).toContain('pxl-icon--warning')
    wrapper.setProps({ color: 'dark' })
    expect(wrapper.classes()).toContain('pxl-icon--dark')
    wrapper.setProps({ color: 'light' })
    expect(wrapper.classes()).toContain('pxl-icon--light')
  })
})
