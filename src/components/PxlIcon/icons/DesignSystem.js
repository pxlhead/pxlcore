export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--design-system', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--design-system',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M0 0h4v4H0zM12 12h4v4h-4z' } }),
        _c('path', {
          attrs: {
            d:
              'M3 12V6H1v6a3 3 0 003 3h6v-2H4a1 1 0 01-1-1zM13 4v6h2V4a3 3 0 00-3-3H6v2h6a1 1 0 011 1z',
            fill: '#444',
          },
        }),
      ])
    )
  },
}
