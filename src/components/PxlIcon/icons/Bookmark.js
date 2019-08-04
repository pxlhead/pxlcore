export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--bookmark', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--bookmark',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M11 6H9V4H7v2H5v2h2v2h2V8h2z' } }),
        _c('path', {
          attrs: {
            d: 'M13 2v11.3l-5-1.4-5 1.4V2h10m0-2H3C1.9 0 1 .9 1 2v14l7-2 7 2V2c0-1.1-.9-2-2-2z',
          },
        }),
      ])
    )
  },
}
