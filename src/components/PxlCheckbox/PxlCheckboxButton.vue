<template>
  <div
    :class="[
      'pxl-checkbox-button',
      `pxl-checkbox-button--${size}`,
      {
        'pxl-checkbox-button--disabled': disabled,
        'pxl-checkbox-button--icon': icon && !label,
      },
    ]"
  >
    <slot name="label">
      <label v-if="label" class="pxl-checkbox-button__label">{{ label }}</label>
    </slot>
    <pxl-icon v-if="icon" class="pxl-checkbox-button__icon" :size="size" :name="icon" />
    <input
      class="pxl-checkbox-button__original"
      type="checkbox"
      :disabled="disabled"
      :checked="isChecked"
      v-bind="$attrs"
      @input="$emit('change', checked)"
    />
  </div>
</template>

<script>
import PxlIcon from '@/components/PxlIcon'
import { sizeProp } from '@/utils/props'
import { getParentComponent } from '@/utils/vdom'

export default {
  name: 'PxlCheckboxButton',

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
