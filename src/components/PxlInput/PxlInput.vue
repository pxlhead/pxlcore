<template>
  <div
    :class="['pxl-input', `pxl-input--${size}`, { 'pxl-input__disabled': disabled || readonly }]"
  >
    <slot name="label">
      <label
        v-if="label"
        :for="computedId"
        :class="['pxl-input__label', { 'pxl-input__label--required': required }]"
        >{{ label }}</label
      >
    </slot>
    <span class="pxl-input__container">
      <span v-if="$slots.prefix || showPrefixIcon" class="pxl-input__prefix">
        <slot name="prefix"></slot>
        <pxl-icon v-if="showPrefixIcon" :name="icon" />
      </span>
      <span v-if="$slots.suffix || showCloseIcon || showSuffixIcon" class="pxl-input__suffix">
        <slot name="suffix"></slot>
        <pxl-icon v-if="showCloseIcon" name="close" />
        <pxl-icon v-if="showSuffixIcon" :name="icon" />
      </span>
      <input
        :id="computedId"
        ref="input"
        :value="value"
        class="pxl-input__original"
        :type="type"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        @keydown="handleKeyDown"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </span>
  </div>
</template>

<script>
import PxlIcon from '../PxlIcon'
import { sizeProp } from '../../utils/props'

export default {
  name: 'PxlInput',

  components: {
    PxlIcon,
  },

  inheritAttrs: false,

  props: {
    value: [String, Number],
    label: String,
    id: String,
    size: sizeProp,
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator: val => ['left', 'right'].includes(val),
    },
    type: {
      type: String,
      default: 'text',
    },
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
  },

  computed: {
    computedId() {
      return this.id || `pxl-input-${this._uid}`
    },
    showCloseIcon() {
      return this.clearable && this.value !== '' && !this.disabled && this.readonly
    },
    showPrefixIcon() {
      return this.icon && this.iconPosition === 'left'
    },
    showSuffixIcon() {
      return this.icon && this.iconPosition === 'right'
    },
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    },
    select() {
      this.$refs.input.select()
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.$emit('enter', event)
      }

      if (event.key === 'Escape') {
        this.$emit('escape', event)
        this.blur()
      }

      this.$emit('keydown', event)
    },
    handleClear() {
      this.$emit('input', '')
      this.$emit('clear')
      this.focus()
    },
  },
}
</script>

<style lang="scss"></style>
