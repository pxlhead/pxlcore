<template>
  <div class="pxl-footer">
    <slot />
  </div>
</template>

<script>
import { spacingProp } from '@/utils/props'

export default {
  name: 'PxlFooter',

  props: {
    padding: spacingProp,
  },
}
</script>

<style lang="scss"></style>
