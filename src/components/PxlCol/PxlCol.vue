<template>
  <div
    :class="[
      'pxl-col',
      `pxl-col--span-${span}`,
      `pxl-col--order-${order}`,
      `pxl-col--offset-${offset}`,
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
  name: 'PxlCol',

  inject: ['gutter'],

  props: {
    span: Number,
    order: Number,
    offset: Number,
    flexBasis: String,
  },
}
</script>

<style lang="scss"></style>
