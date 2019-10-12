<template>
  <div class="pxl-header">
    <slot />
  </div>
</template>

<script>
import { spacingProp } from '@/utils/props'

export default {
  name: 'PxlHeader',

  props: {
    padding: spacingProp,
  },
}
</script>

<style lang="scss"></style>
