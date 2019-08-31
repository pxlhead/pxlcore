<template>
  <div
    :class="[
      'pxl-row',
      `pxl-row--align-${align}`,
      `pxl-row--justify-${justify}`,
      `pxl-row--margin-${margin}`,
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
export default {
  name: 'PxlRow',

  provide: {
    gutter: this.gutter,
  },

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
    margin: {
      type: String,
      default: 'none',
      validator: val => ['none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'].includes(val),
    },
  },
}
</script>

<style lang="scss"></style>
