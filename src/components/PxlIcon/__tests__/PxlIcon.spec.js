import { shallowMount, mount } from '@vue/test-utils'
import { toKebabCase } from '@/utils'
import PxlIcon from '../PxlIcon.vue'
import * as icons from '../icons'

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

  test('adds size class', () => {
    const wrapper = shallowMount(PxlIcon, {
      propsData: { name: 'add' },
    })
    expect(wrapper.classes('pxl-icon--m')).toBe(true)

    wrapper.setProps({ size: 'xs' })
    expect(wrapper.classes('pxl-icon--xs')).toBe(true)
    wrapper.setProps({ size: 's' })
    expect(wrapper.classes('pxl-icon--s')).toBe(true)
    wrapper.setProps({ size: 'm' })
    expect(wrapper.classes('pxl-icon--m')).toBe(true)
    wrapper.setProps({ size: 'l' })
    expect(wrapper.classes('pxl-icon--l')).toBe(true)
    wrapper.setProps({ size: 'xl' })
    expect(wrapper.classes('pxl-icon--xl')).toBe(true)
  })

  test('adds color class', () => {
    const wrapper = shallowMount(PxlIcon, {
      propsData: { name: 'add' },
    })
    expect(wrapper.classes('pxl-icon--primary')).toBe(true)

    wrapper.setProps({ color: 'primary' })
    expect(wrapper.classes('pxl-icon--primary')).toBe(true)
    wrapper.setProps({ color: 'success' })
    expect(wrapper.classes('pxl-icon--success')).toBe(true)
    wrapper.setProps({ color: 'danger' })
    expect(wrapper.classes('pxl-icon--danger')).toBe(true)
    wrapper.setProps({ color: 'warning' })
    expect(wrapper.classes('pxl-icon--warning')).toBe(true)
    wrapper.setProps({ color: 'dark' })
    expect(wrapper.classes('pxl-icon--dark')).toBe(true)
    wrapper.setProps({ color: 'light' })
    expect(wrapper.classes('pxl-icon--light')).toBe(true)
  })
})
