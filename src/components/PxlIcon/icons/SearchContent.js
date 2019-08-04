export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--search-content', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--search-content',
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
            d: 'M4 13H1a1 1 0 010-2h3v2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2zM4 8H1a1 1 0 010-2h3v2z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M15.707 13.293l-2.274-2.274A3.947 3.947 0 0014 9c0-2.206-1.794-4-4-4S6 6.794 6 9s1.794 4 4 4c.74 0 1.424-.215 2.019-.567l2.274 2.274 1.414-1.414zM10 11c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z',
          },
        }),
      ])
    )
  },
}
