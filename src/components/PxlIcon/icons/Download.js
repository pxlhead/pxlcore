export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--download', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--download',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M9 8V1H7v7H4.6L8 12l3.4-4z' } }),
        _c('path', {
          attrs: {
            d:
              'M15 16H1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h3v2H2v7h12V7h-2V5h3c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z',
          },
        }),
      ])
    )
  },
}
