<template>
  <span :class="['pxl-icon', `pxl-icon--${size}`, `pxl-icon--${color}`]">
    <component :is="icon" />
  </span>
</template>

<script>
import { toPascalCase } from '../../utils'
import { sizeXProp, colorProp } from '../../utils/props'
import * as icons from './icons'

export default {
  name: 'PxlIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: val => Object.keys(icons).includes(toPascalCase(val)),
    },
    size: sizeXProp,
    color: colorProp,
  },
  computed: {
    icon() {
      return icons[toPascalCase(this.name)]
    },
  },
}
</script>

<style lang="scss">
.pxl-icon {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
