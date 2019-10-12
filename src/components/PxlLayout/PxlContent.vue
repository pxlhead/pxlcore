<template>
  <div class="pxl-content">
    <slot />
  </div>
</template>

<script>
import { spacingProp } from '@/utils/props'

export default {
  name: 'PxlContent',

  provide() {
    return { contentMargin: this.rowMargin }
  },

  props: {
    padding: spacingProp,
    rowMargin: spacingProp,
  },
}
</script>

<style lang="scss"></style>
