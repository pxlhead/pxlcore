<template>
  <component
    :is="isButton ? 'button' : 'a'"
    :class="[
      'pxl-button',
      `pxl-button--${type}`,
      `pxl-button--${size}`,
      `pxl-button--${color}`,
      `pxl-button--${shape}`,
      {
        [`pxl-button--${nativeType}`]: nativeType,
        'pxl-button__icon': icon,
        [`pxl-button__icon--${iconPosition}`]: icon && label,
        'pxl-button--disabled': isDisabled,
        'pxl-button--loading': loading,
        'pxl-button--skeleton': skeleton,
        'pxl-button--shadow': shadow,
      },
    ]"
    :type="isButton && nativeType"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
  >
    <pxl-icon v-if="loading || icon" :name="loading ? 'loading' : icon" />
    <span v-if="label" class="pxl-button__label">{{ label }}</span>
  </component>
</template>

<script>
import PxlIcon from '../PxlIcon'
import { sizeXProp } from '../../utils/props'

export default {
  name: 'PxlButton',

  components: {
    PxlIcon,
  },

  props: {
    type: {
      type: String,
      default: 'button',
      validator: val => ['button', 'link', 'subtle'].includes(val),
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'submit', 'reset'].includes(val),
    },
    size: sizeXProp,
    color: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'success', 'danger'].includes(val),
    },
    shape: {
      type: String,
      default: 'rounded',
      validator: val => ['rounded', 'square', 'circle'].includes(val),
    },
    label: String,
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator: val => ['left', 'right'].includes(val),
    },
    disabled: Boolean,
    loading: Boolean,
    successOnLoading: Boolean,
    errorOnLoading: Boolean,
    skeleton: Boolean,
    shadow: Boolean,
  },

  computed: {
    isButton() {
      return this.type === 'button'
    },
    isDisabled() {
      return this.disabled || this.loading
    },
  },
}
</script>

<style lang="scss"></style>
