export function getParentComponent(name) {
  let component = null
  let parent = this.$parent || this.$root
  while (parent && !component) {
    if (parent.$options.name === name) {
      component = parent
    }
    parent = parent.$parent
  }
  return component
}
