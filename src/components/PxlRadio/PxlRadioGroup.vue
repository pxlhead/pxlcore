<template>
  <div
    :class="[
      'pxl-radio-group',
      `pxl-radio-group--${size}`,
      { 'pxl-radio-group--disabled': disabled },
    ]"
  >
    <slot name="label">
      <label
        v-if="label"
        :class="['pxl-radio-group__label', { 'pxl-radio-group__label--required': required }]"
      >
        {{ label }}
      </label>
    </slot>
    <div class="pxl-radi-group__container">
      <slot />
    </div>
  </div>
</template>

<script>
import { sizeProp } from '../../utils/props'

export default {
  name: 'PxlRadioGroup',

  inheritAttrs: false,

  provide: {
    groupValue: this.value,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: [String, Number],
    label: String,
    size: sizeProp,
    disabled: Boolean,
    required: Boolean,
  },
}
</script>

<style lang="scss"></style>
