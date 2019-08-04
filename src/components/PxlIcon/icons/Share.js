export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--share', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--share',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', {
          attrs: { d: 'M15 16H1c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h3v2H2v10h12V9h2v6c0 .6-.4 1-1 1z' },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d: 'M10 3c-3.2 0-6 2.5-6 7 1.1-1.7 2.4-3 6-3v3l6-5-6-5v3z',
          },
        }),
      ])
    )
  },
}
