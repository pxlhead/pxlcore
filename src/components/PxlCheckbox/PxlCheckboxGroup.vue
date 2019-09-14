<template>
  <div
    :class="[
      'pxl-checkbox-group',
      `pxl-checkbox-group--${size}`,
      { 'pxl-checkbox-group--disabled': disabled },
    ]"
  >
    <slot name="label">
      <label
        v-if="label"
        :class="['pxl-checkbox-group__label', { 'pxl-checkbox-group__label--required': required }]"
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
  name: 'PxlCheckboxGroup',

  inheritAttrs: false,

  provide() {
    return { groupValue: this.value }
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: Array,
    label: String,
    size: sizeProp,
    disabled: Boolean,
    required: Boolean,
  },

  methods: {
    toggleValue(value) {
      const newValue = [...this.value]
      const index = this.value.indexOf(value)
      if (index !== -1) {
        newValue.splice(index, 1)
      } else {
        newValue.push(value)
      }
      this.$emit('change', newValue)
    },
  },
}
</script>

<style lang="scss"></style>
