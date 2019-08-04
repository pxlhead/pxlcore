export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--wifi', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--wifi',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('circle', { attrs: { cx: '8', cy: '12.5', r: '1.5' } }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M11.5 10C10.6 9 9.3 8.5 8 8.5S5.4 9 4.5 10L3.1 8.6c1.3-1.4 3-2.1 4.9-2.1s3.6.7 4.9 2.1L11.5 10z',
          },
        }),
        _c('path', {
          attrs: {
            d:
              'M8 2C5 2 2.2 3.1 0 5.2l1.4 1.4C3.2 4.9 5.5 4 8 4s4.8.9 6.6 2.7L16 5.2C13.8 3.1 11 2 8 2z',
          },
        }),
      ])
    )
  },
}
