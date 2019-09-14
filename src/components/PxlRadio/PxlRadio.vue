<template>
  <div :class="['pxl-radio', `pxl-radio--${size}`, { 'pxl-radio--disabled': disabled }]">
    <slot name="label">
      <label v-if="label" class="pxl-radio__label">{{ label }}</label>
    </slot>
    <input
      class="pxl-radio__original"
      type="radio"
      :disabled="disabled"
      :checked="groupValue ? groupValue === value : checked"
      v-bind="$attrs"
      @input="$emit('change', checked)"
    />
  </div>
</template>

<script>
import { sizeProp } from '../../utils/props'

export default {
  name: 'PxlRadio',

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
  },
}
</script>

<style lang="scss"></style>
