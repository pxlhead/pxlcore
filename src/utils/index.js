export const toPascalCase = str =>
  str
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('')

export const toKebabCase = str =>
  str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
