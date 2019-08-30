const shelljs = require('shelljs')
const path = require('path')

const toKebabCase = str =>
  str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()

const getVueComponent = name =>
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

const getTestFile = name => {
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

const getIndexFile = name =>
  `import ${name} from './${name}.vue'

export default Vue => {
  Vue.component(${name}.name, ${name})
}\n`

const getSiteFile = name =>
  `<template>
  <div class="${toKebabCase(name)}">
    <${toKebabCase(name)} />
  </div>
</template>

<script>
export default {
  name: '${name}',
}
</script>\n`

const writeToFile = (contents, file) => {
  new shelljs.ShellString(contents).to(file)
}

const [singleName] = process.argv.slice(2)

if (!singleName) {
  shelljs.echo('🙈  See no component name. Please provide it.')
  shelljs.exit(1)
}

const name = `Pxl${singleName}`
const rootDir = path.join(__dirname, '..')
const componentPath = `src/components/${name}`
const componentIndex = 'src/components/index.js'
const routesIndex = 'site/routes.js'
const sitePath = `site/pages/components/${singleName}`

if (!shelljs.test('-e', componentPath) || !shelljs.test('-e', sitePath)) {
  shelljs.mkdir('-p', componentPath)
  shelljs.cd(componentPath)
  writeToFile(getVueComponent(name), `${name}.vue`)
  writeToFile(getTestFile(name), `${name}.test.js`)
  writeToFile(getIndexFile(name), 'index.js')

  shelljs.cd(rootDir)
  new shelljs.ShellString(`export { default as ${name} } from './${name}'`).toEnd(componentIndex)
  shelljs.sort(componentIndex)

  shelljs.mkdir('-p', sitePath)
  shelljs.cd(sitePath)
  writeToFile(getSiteFile(singleName), `${singleName}.vue`)

  shelljs.cd(rootDir)
  shelljs.sed(
    '-i',
    "'./pages/home/Home.vue'",
    `'./pages/home/Home.vue'\nimport ${singleName} from './pages/components/${singleName}/${singleName}.vue'`,
    routesIndex
  )
  shelljs.sed(
    '-i',
    ']',
    `{ path: '/components/${singleName.toLowerCase()}', component: ${singleName} }]`,
    routesIndex
  )

  shelljs.cd(rootDir)
} else {
  shelljs.echo(`Component ${name} already exists`)
  shelljs.exit(1)
}

shelljs.exec('npm run format')
