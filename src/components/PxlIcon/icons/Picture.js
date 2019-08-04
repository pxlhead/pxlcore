export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--picture', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--picture',
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
              'M15 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d: 'M6.1 10.3l3 2L13.4 8 12 6.6 8.9 9.7l-3-2L2.6 11 4 12.4z',
          },
        }),
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '7', cy: '5', r: '1' } }),
      ])
    )
  },
}
