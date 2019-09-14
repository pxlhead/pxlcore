<template>
  <div
    :class="[
      'pxl-radio-button',
      `pxl-radio-button--${size}`,
      {
        'pxl-radio-button--disabled': disabled,
        'pxl-radio-button--icon': icon && !label,
      },
    ]"
  >
    <slot name="label">
      <label v-if="label" class="pxl-radio-button__label">{{ label }}</label>
    </slot>
    <pxl-icon v-if="icon" class="pxl-radio-button__icon" :size="size" :name="icon" />
    <input
      class="pxl-radio-button__original"
      type="radio"
      :disabled="disabled"
      :checked="isChecked"
      v-bind="$attrs"
      @input="$emit('change', checked)"
    />
  </div>
</template>

<script>
import PxlIcon from '../PxlIcon'
import { sizeProp } from '../../utils/props'
import { getParentComponent } from '../../utils/vdom'

export default {
  name: 'PxlRadioButton',

  components: {
    PxlIcon,
  },

  inheritAttrs: false,

  inject: ['groupValue'],

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    value: [String, Number],
    checked: Boolean,
    label: String,
    size: sizeProp,
    disabled: Boolean,
    icon: String,
  },

  computed: {
    isChecked() {
      return this.groupValue ? this.groupValue === this.value : this.checked
    },
  },

  methods: {
    getParentComponent,
    handleChange() {
      if (this.groupValue) {
        this.getParentComponent('PxlCheckboxGroup').setValue(this.value)
      }
      this.$emit('change', this.isChecked)
    },
  },
}
</script>

<style lang="scss"></style>
