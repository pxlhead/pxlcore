const shelljs = require('shelljs')
const svgToVue = require('svg-to-vue')
const icons = require('./icons.json').icons

const iconsPath = 'src/components/PxlIcon/icons'

const toPascalCase = str =>
  str
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('')

if (shelljs.test('-e', iconsPath)) {
  shelljs.rm('-rf', iconsPath)
}

shelljs.mkdir('-p', iconsPath)
shelljs.cd(iconsPath)
Promise.all(
  icons.map(icon =>
    svgToVue(
      icon.content
        .replace(/class=\"nc-icon-wrapper\"/gi, '') // eslint-disable-line no-useless-escape
        .replace(/fill=\"#444444\"/gi, '') // eslint-disable-line no-useless-escape
        .replace(/svg /gi, `svg fill="currentColor" class=\"pxl-icon--${icon.name}\" `) // eslint-disable-line no-useless-escape
    )
  )
).then(components => {
  let iconsIndex = ''
  components.forEach((component, index) => {
    const name = toPascalCase(icons[index].name)
    new shelljs.ShellString(component.replace(/_v, /gi, '')).to(`${name}.js`)
    iconsIndex = `${iconsIndex}export { default as ${name} } from './${name}'\n`
  })

  new shelljs.ShellString(iconsIndex).toEnd('index.js')
  shelljs.exec(`npm run format:icons`)
})
