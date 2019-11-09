const shelljs = require('shelljs')
const path = require('path')

const components = require('../components.js')
const componentNames = Object.keys(components)

const toKebabCase = str =>
  str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()

const getComponentsListFile = name =>
  `module.exports = {
  ${componentNames
    .map(componentName => `${componentName}: 'src/components/${componentName}/index.js'`)
    .join(',\n  ')},
  ${name}: 'src/components/${name}/index.js',
}\n`

const getComponentVueFile = name =>
  `<template>
  <div class="${toKebabCase(name)}">
    <slot />
  </div>
</template>

<script>
export default {
  name: '${name}',

  props: {},
}
</script>

<style lang="scss"></style>\n`

const getComponentSpecFile = name => {
  const kebabName = toKebabCase(name)

  return `import { shallowMount } from '@vue/test-utils'
import ${name} from './${name}.vue'

describe('${name}.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(${name})
    expect(wrapper.name()).toBe('${name}')
    expect(wrapper.classes('${kebabName}')).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})\n`
}

const getComponentIndexFile = name =>
  `import ${name} from './${name}.vue'

${name}.install = Vue => {
  Vue.component(${name}.name, ${name})
}

export default ${name}\n`

const getComponentSiteFile = name =>
  `<template>
  <div class="${toKebabCase(name)}">
    <pxl-${toKebabCase(name)} />
  </div>
</template>

<script>
export default {
  name: '${name}',
}
</script>\n`

const getIndexFile = () =>
  `${componentNames.map(name => `import ${name} from './${name}'`).join('\n')}

const components = [
  ${componentNames.join(',\n  ')},
]

const install = Vue => {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  ${componentNames.join(',\n  ')},
}

export default install\n`

const writeToFile = (contents, file) => {
  new shelljs.ShellString(contents).to(file)
}

let [singleName] = process.argv.slice(2)

if (!singleName) {
  shelljs.echo('🙈  See no component name. Please provide it.')
  shelljs.exit(1)
}

singleName = `${singleName.charAt(0).toUpperCase()}${singleName.slice(1)}`

if (singleName.slice(0, 3).toLowerCase() === 'pxl') {
  singleName = singleName.slice(3)
}

const name = `Pxl${singleName}`
const rootDir = path.join(__dirname, '..')
const componentsListPath = 'components.js'
const componentPath = `src/components/${name}`
const componentSitePath = `site/views/components/${singleName}.vue`
const indexPath = 'src/components/index.js'

if (
  !componentNames.includes(name) &&
  !shelljs.test('-e', componentPath) &&
  !shelljs.test('-e', componentSitePath)
) {
  shelljs.mkdir('-p', componentPath)
  shelljs.cd(componentPath)
  writeToFile(getComponentVueFile(name), `${name}.vue`)
  writeToFile(getComponentSpecFile(name), `${name}.test.js`)
  writeToFile(getComponentIndexFile(name), 'index.js')

  shelljs.cd(rootDir)
  writeToFile(getComponentsListFile(name), componentsListPath)
  writeToFile(getComponentSiteFile(singleName), componentSitePath)
  writeToFile(getIndexFile(), indexPath)
} else {
  shelljs.echo(`Component ${name} already exists`)
  shelljs.exit(1)
}
