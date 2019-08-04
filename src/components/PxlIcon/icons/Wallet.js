export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--wallet', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--wallet',
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
              'M15 4h-4V1c0-.6-.4-1-1-1H3C1.3 0 0 1.3 0 3v10c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM2 3c0-.6.4-1 1-1h6v2H2V3zm12 11H3c-.6 0-1-.4-1-1V6h12v8z',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M11 9h2v2h-2z' } }),
      ])
    )
  },
}
