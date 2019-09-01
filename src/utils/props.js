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

export const spacingProp = {
  type: String,
  validator: val => ['xs', 's', 'm', 'l', 'xl'].includes(val),
}

export const spacings = {
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '20px',
}
