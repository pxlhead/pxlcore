export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--arrow-horizontal', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--arrow-horizontal',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', {
          attrs: {
            d: 'M11 3L9.6 4.4 12.2 7H3.8l2.6-2.6L5 3 0 8l5 5 1.4-1.4L3.8 9h8.4l-2.6 2.6L11 13l5-5z',
          },
        }),
      ])
    )
  },
}
