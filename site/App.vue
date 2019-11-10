<template>
  <div id="app">
    <div>
      <router-link v-for="component in components" :key="component" :to="{ name: component }">
        {{ component.slice(3) }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'App',

  data() {
    return {
      components: Object.keys(components),
    }
  },
}
</script>

<style lang="scss"></style>
