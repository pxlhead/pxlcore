export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--folder-remove', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--folder-remove',
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
              'M15 2H8.4L6.7.3C6.5.1 6.3 0 6 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zm-1 12H2V2h3.6l1.7 1.7c.2.2.4.3.7.3h6v10z',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M5 8h6v2H5z' } }),
      ])
    )
  },
}
