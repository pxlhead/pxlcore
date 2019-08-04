export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--low-priority', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--low-priority',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { d: 'M11 2h5v2h-5zM11 6h5v2h-5zM11 10h5v2h-5z' } }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M5 4h4V2H5C2.243 2 0 4.243 0 7s2.243 5 5 5v3l4-4-4-4v3c-1.654 0-3-1.346-3-3s1.346-3 3-3z',
          },
        }),
      ])
    )
  },
}
