<template>
  <div :class="['pxl-radio', `pxl-radio--${size}`, { 'pxl-radio--disabled': disabled }]">
    <slot name="label">
      <label v-if="label" class="pxl-radio__label">{{ label }}</label>
    </slot>
    <input
      class="pxl-radio__original"
      type="radio"
      :disabled="disabled"
      :checked="isChecked"
      v-bind="$attrs"
      @input="$emit('change', checked)"
    />
  </div>
</template>

<script>
import { sizeProp } from '../../utils/props'
import { getParentComponent } from '../../utils/vdom'

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
