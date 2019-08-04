export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--back', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--back',
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
            d:
              'M10 1H2v2h8c1.7 0 3 1.3 3 3s-1.3 3-3 3H4.4l3-3L6 4.6.6 10 6 15.4 7.4 14l-3-3H10c2.8 0 5-2.2 5-5s-2.2-5-5-5z',
          },
        }),
      ])
    )
  },
}
