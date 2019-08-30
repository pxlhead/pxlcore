export const sizeProp = {
  type: String,
  default: 'medium',
  validator: val => ['s', 'm', 'l'].includes(val),
}

export const sizeXProp = {
  type: String,
  default: 'm',
  validator: val => ['xs', 's', 'm', 'l', 'xl'].includes(val),
}
