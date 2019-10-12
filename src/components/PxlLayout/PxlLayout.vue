<template>
  <div :class="['pxl-layout', { 'pxl-layout--sider': hasSider }]">
    <slot />
  </div>
</template>

<script>
import { spacingProp } from '@/utils/props'

export default {
  name: 'PxlLayout',

  props: {
    padding: spacingProp,
  },

  computed: {
    hasSider() {
      return this.$root.$children.some(child => child.$options.name === 'PxlSider')
    },
  },
}
</script>

<style lang="scss"></style>
