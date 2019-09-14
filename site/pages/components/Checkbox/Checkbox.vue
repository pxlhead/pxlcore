<template>
  <div class="checkbox">
    <pxl-checkbox-group v-model="checked">
      <pxl-checkbox label="Check 1" value="1" />
      <pxl-checkbox label="Check 2" value="2" />
      <pxl-checkbox label="Check 3" value="3" />
    </pxl-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',

  data() {
    return {
      checked: ['2'],
    }
  },
}
</script>
