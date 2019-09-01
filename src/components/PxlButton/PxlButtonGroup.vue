<template>
  <div :class="{ 'pxl-button-group': true, 'pxl-button-group--join': join }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PxlButtonGroup',

  props: {
    join: Boolean,
  },
}
</script>

<style lang="scss"></style>
