<template>
  <div
    :class="[
      'pxl-input-number',
      `pxl-input-number--${size}`,
      {
        'pxl-input-number__disabled': disabled,
        'pxl-input-number__hide-controls': hideControls,
      },
    ]"
  >
    <pxl-input
      ref="input"
      v-bind="$attrs"
      :value="displayValue"
      :label="label"
      :max="max"
      :min="min"
      :size="size"
      :disabled="disabled"
      :clearable="hideControls"
      @keydown.up.native.prevent="increase(false)"
      @keydown.down.native.prevent="decrease(false)"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
    >
      <span
        v-if="!hideControls"
        slot="prefix"
        :class="[
          'pxl-input-number__controls--decrease',
          { 'pxl-input-number__controls--disabled': disabled || minDisabled },
        ]"
        @mousedown="descrease(false)"
        @mouseup="stopStepTimeout"
        @mouseleave="stopStepTimeout"
      >
        <pxl-icon name="minus" />
      </span>
      <span
        v-if="!hideControls"
        slot="suffix"
        :class="[
          'pxl-input-number__controls--increase',
          { 'pxl-input-number__controls--disabled': disabled || maxDisabled },
        ]"
        @mousedown="increase(false)"
        @mouseup="stopStepTimeout"
        @mouseleave="stopStepTimeout"
      >
        <pxl-icon name="plus" />
      </span>
    </pxl-input>
  </div>
</template>

<script>
import PxlInput from '../PxlInput'
import PxlIcon from '../PxlIcon'
import { sizeProp } from '../../utils/props'

export default {
  name: 'PxlInputNumber',

  components: {
    PxlInput,
    PxlIcon,
  },

  inheritAttrs: false,

  inject: {
    locale: { default: 'en' },
  },

  props: {
    value: Number,
    label: String,
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    precision: {
      type: Number,
      validator: val => val >= 0 && val === parseInt(val, 10),
    },
    formatter: Function,
    pattern: Object,
    size: sizeProp,
    disabled: Boolean,
    hideControls: Boolean,
    stepSpeed: {
      type: Number,
      default: 200,
    },
    stepDelay: {
      type: Number,
      default: 600,
    },
  },

  data() {
    return {
      localValue: this.min,
      stepTimeout: null,
    }
  },

  computed: {
    maxPrecision() {
      const stepPrecision = this.getPrecision(this.step)
      if (this.precision !== undefined) {
        return this.precision
      } else {
        return Math.max(this.getPrecision(this.value), stepPrecision)
      }
    },
    displayValue() {
      let value = this.localValue
      if (!isNaN(value)) {
        if (this.precision !== undefined) {
          value = value.toFixed(this.precision)
        }
      }
      if (this.formatter && typeof this.formatter === 'function') {
        value = this.formatter(value)
      }
      return value
    },
    maxDisabled() {
      const precisionFactor = Math.pow(10, this.maxPrecision)
      const value = this.toPrecision(
        (precisionFactor * this.localValue + precisionFactor * this.step) / precisionFactor
      )
      return value > this.max
    },
    minDisabled() {
      const precisionFactor = Math.pow(10, this.maxPrecision)
      const value = this.toPrecision(
        (precisionFactor * this.localValue - precisionFactor * this.step) / precisionFactor
      )
      return value < this.min
    },
  },

  watch: {
    value: {
      handler(value) {
        let newValue = value === undefined ? value : Number(value)
        if (newValue !== undefined) {
          if (isNaN(newValue)) {
            return
          }
          if (this.precision !== undefined) {
            newValue = this.toPrecision(newValue, this.precision)
          }
        }
        if (newValue >= this.max) {
          newValue = this.max
        }
        if (newValue <= this.min) {
          newValue = this.min
        }
        this.localValue = newValue
        this.$emit('input', newValue)
      },
      immediate: true,
    },
    max(value) {
      const nextValue = this.value !== undefined ? this.value : this.localValue
      if (!isNaN(nextValue) && nextValue > value) {
        //this.__emit('change', value)
      }
    },
    min(value) {
      const nextValue = this.value !== undefined ? this.value : this.localValue
      if (!isNaN(nextValue) && nextValue < value) {
        //this.__emit('change', value)
      }
    },
  },

  beforeDestroy() {
    this.stopStepTimeout()
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
    toPrecision(num, precision) {
      if (precision === undefined) {
        precision = this.maxPrecision
      }
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision))
    },
    getPrecision(value) {
      if (value === undefined) {
        return 0
      }
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    },
    increase(recursive) {
      if (this.disabled || this.maxDisabled) {
        return
      }
      this.stopStepTimeout()
      const precisionFactor = Math.pow(10, this.maxPrecision)
      const value = this.toPrecision(
        (precisionFactor * this.localValue + precisionFactor * this.step) / precisionFactor
      )
      this.setValue(value)

      this.stepTimeout = setTimeout(
        () => {
          this.increase(true)
        },
        recursive ? this.stepSpeed : this.stepDelay
      )
    },
    decrease(recursive) {
      if (this.disabled || this.minDisabled) {
        return
      }
      this.stopStepTimeout()
      const precisionFactor = Math.pow(10, this.maxPrecision)
      const value = this.toPrecision(
        (precisionFactor * this.localValue - precisionFactor * this.step) / precisionFactor
      )
      this.setValue(value)

      this.decrease = setTimeout(
        () => {
          this.increase(true)
        },
        recursive ? this.stepSpeed : this.stepDelay
      )
    },
    stopStepTimeout() {
      if (this.stepTimeout) {
        clearTimeout(this.stepTimeout)
      }
    },
    setValue(value) {
      const oldValue = this.localValue
      if (!isNaN(value) && this.precision !== undefined) {
        value = this.toPrecision(value, this.precision)
      }
      if (value >= this.max) {
        value = this.max
      }
      if (value <= this.min) {
        value = this.min
      }
      if (oldValue === value) {
        return
      }
      this.localValue = value
      this.$emit('input', value)
    },
    handleChange(value) {
      const newValue = value === '' ? undefined : Number(value)
      if (!isNaN(newValue) || value === '') {
        this.setValue(newValue)
      }
    },
    handleInput(value) {
      if (this.pattern && this.pattern instanceof RegExp) {
        if (value.toString().match(this.pattern)) {
          this.handleChange(value)
        }
      } else {
        this.handleChange(value)
      }
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
  },
}
</script>

<style lang="scss"></style>
