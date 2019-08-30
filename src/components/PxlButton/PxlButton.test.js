import { shallowMount, mount } from '@vue/test-utils'
import PxlButton from './PxlButton.vue'

describe('PxlButton.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.name()).toBe('PxlButton')
    expect(wrapper.classes('pxl-button')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders tag <button> when type is "button" or not specified', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.is('button')).toBe(true)

    wrapper.setProps({ type: 'button' })
    expect(wrapper.is('button')).toBe(true)
  })

  test('renders tag <a> when type is "link" or "subtle', () => {
    const wrapper = shallowMount(PxlButton, {
      propsData: { type: 'link' },
    })
    expect(wrapper.is('a')).toBe(true)

    wrapper.setProps({ type: 'subtle' })
    expect(wrapper.is('a')).toBe(true)
  })

  test('sets button native type', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.attributes('type')).toBe('button')

    wrapper.setProps({ nativeType: 'submit' })
    expect(wrapper.attributes('type')).toBe('submit')

    wrapper.setProps({ nativeType: 'reset' })
    expect(wrapper.attributes('type')).toBe('reset')
  })

  test('adds size class', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.classes('pxl-button--m')).toBe(true)

    wrapper.setProps({ size: 'xs' })
    expect(wrapper.classes('pxl-button--xs')).toBe(true)
    wrapper.setProps({ size: 's' })
    expect(wrapper.classes('pxl-button--s')).toBe(true)
    wrapper.setProps({ size: 'm' })
    expect(wrapper.classes('pxl-button--m')).toBe(true)
    wrapper.setProps({ size: 'l' })
    expect(wrapper.classes('pxl-button--l')).toBe(true)
    wrapper.setProps({ size: 'xl' })
    expect(wrapper.classes('pxl-button--xl')).toBe(true)
  })

  test('adds color class', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.classes('pxl-button--primary')).toBe(true)

    wrapper.setProps({ color: 'primary' })
    expect(wrapper.classes('pxl-button--primary')).toBe(true)
    wrapper.setProps({ color: 'secondary' })
    expect(wrapper.classes('pxl-button--secondary')).toBe(true)
    wrapper.setProps({ color: 'success' })
    expect(wrapper.classes('pxl-button--success')).toBe(true)
    wrapper.setProps({ color: 'danger' })
    expect(wrapper.classes('pxl-button--danger')).toBe(true)
  })

  test('adds shape class', () => {
    const wrapper = shallowMount(PxlButton)
    expect(wrapper.classes('pxl-button--rounded')).toBe(true)

    wrapper.setProps({ color: 'rounded' })
    expect(wrapper.classes('pxl-button--rounded')).toBe(true)
    wrapper.setProps({ color: 'square' })
    expect(wrapper.classes('pxl-button--square')).toBe(true)
    wrapper.setProps({ color: 'circle' })
    expect(wrapper.classes('pxl-button--circle')).toBe(true)
  })

  test('renders label when "label" is passed', () => {
    const wrapper = shallowMount(PxlButton, {
      propsData: { label: 'Test it!' },
    })
    const label = wrapper.find('span.pxl-button__label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Test it!')
  })

  test('renders pxl-icon when "icon" is passed', () => {
    const wrapper = mount(PxlButton, {
      propsData: { icon: 'add' },
    })
    expect(wrapper.find('.pxl-icon').exists()).toBe(true)
  })

  test('adds icon position class when both "icon" and "label" are passed', () => {
    const wrapper = mount(PxlButton, {
      propsData: { label: 'No icon' },
    })
    expect(wrapper.classes('pxl-button__icon--left')).toBe(false)
    expect(wrapper.classes('pxl-button__icon--right')).toBe(false)

    wrapper.setProps({ label: undefined, icon: 'add' })
    expect(wrapper.classes('pxl-button__icon--left')).toBe(false)
    expect(wrapper.classes('pxl-button__icon--right')).toBe(false)

    wrapper.setProps({ label: 'Icon', icon: 'add' })
    expect(wrapper.classes('pxl-button__icon--left')).toBe(true)

    wrapper.setProps({ iconPosition: 'left' })
    expect(wrapper.classes('pxl-button__icon--left')).toBe(true)
    wrapper.setProps({ iconPosition: 'right' })
    expect(wrapper.classes('pxl-button__icon--right')).toBe(true)
  })

  test('sets "disabled" attribute true when "disabled" or "loading" are passed', () => {
    const wrapper = shallowMount(PxlButton, {
      propsData: { disabled: true },
    })
    expect(wrapper.attributes('disabled')).toBe(true)
    expect(wrapper.classes('pxl-button--disabled')).toBe(true)

    wrapper.setProps({ disabled: false, loading: true })
    expect(wrapper.attributes('disabled')).toBe(true)
    expect(wrapper.classes('pxl-button--disabled')).toBe(true)
  })

  test('adds loading class and loading pxl-icon when "loading" is passed', () => {
    const wrapper = mount(PxlButton, {
      propsData: { loading: true },
    })
    expect(wrapper.classes('pxl-button--loading')).toBe(true)
    expect(wrapper.find('.pxl-icon--loading').exists()).toBe(true)
  })

  test('adds skeleton class when "skeleton" is passed', () => {
    const wrapper = shallowMount(PxlButton, {
      propsData: { skeleton: true },
    })
    expect(wrapper.classes('pxl-button--skeleton')).toBe(true)
  })

  test('adds shadow class when "shadow" is passed', () => {
    const wrapper = shallowMount(PxlButton, {
      propsData: { shadow: true },
    })
    expect(wrapper.classes('pxl-button--shadow')).toBe(true)
  })
})
