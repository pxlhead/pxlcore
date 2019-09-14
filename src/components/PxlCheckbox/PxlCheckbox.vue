<template>
  <div
    :class="[
      'pxl-checkbox',
      `pxl-checkbox--${size}`,
      {
        'pxl-checkbox--disabled': disabled,
        'pxl-checkbox--indeterminate': indeterminate,
      },
    ]"
  >
    <slot name="label">
      <label v-if="label" class="pxl-checkbox__label">{{ label }}</label>
    </slot>
    <input
      class="pxl-checkbox__original"
      type="checkbox"
      :disabled="disabled"
      :checked="isChecked"
      v-bind="$attrs"
      @input="handleChange"
    />
  </div>
</template>

<script>
import { sizeProp } from '../../utils/props'
import { getParentComponent } from '../../utils/vdom'

export default {
  name: 'PxlCheckbox',

  inheritAttrs: false,

  inject: ['groupValue'],

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    value: [String, Number],
    checked: Boolean,
    indeterminate: Boolean,
    label: String,
    size: sizeProp,
    disabled: Boolean,
  },

  computed: {
    isChecked() {
      return this.groupValue ? this.groupValue.includes(this.value) : this.checked
    },
  },

  methods: {
    getParentComponent,
    handleChange() {
      if (this.groupValue) {
        this.getParentComponent('PxlCheckboxGroup').toggleValue(this.value)
      }
      this.$emit('change', this.isChecked)
    },
  },
}
</script>

<style lang="scss"></style>
