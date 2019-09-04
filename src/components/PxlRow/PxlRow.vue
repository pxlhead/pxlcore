<template>
  <div
    :class="[
      'pxl-row',
      `pxl-row--${align}`,
      `pxl-row--${justify}`,
      {
        [`pxl-row--margin-${margin}`]: margin || contentMargin,
      },
    ]"
    :style="
      gutter
        ? {
            flexBasis,
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
          }
        : { flexBasis }
    "
  >
    <slot />
  </div>
</template>

<script>
import { spacingProp } from '../../utils/props'

export default {
  name: 'PxlRow',

  provide: {
    gutter: this.gutter,
  },

  inject: ['contentMargin'],

  props: {
    gutter: Number,
    align: {
      type: String,
      default: 'top',
      validator: val => ['top' | 'middle' | 'bottom'].includes(val),
    },
    justify: {
      type: String,
      default: 'start',
      validator: val =>
        ['start' | 'end' | 'center' | 'space-around' | 'space-between'].includes(val),
    },
    flexBasis: String,
    margin: spacingProp,
  },
}
</script>

<style lang="scss"></style>
