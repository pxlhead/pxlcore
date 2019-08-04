export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--high-priority', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--high-priority',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { d: 'M11 12h5v2h-5zM11 8h5v2h-5zM11 4h5v2h-5z' } }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M5 12h4v2H5c-2.757 0-5-2.243-5-5s2.243-5 5-5V1l4 4-4 4V6C3.346 6 2 7.346 2 9s1.346 3 3 3z',
          },
        }),
      ])
    )
  },
}
