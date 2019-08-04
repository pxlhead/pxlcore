export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--device', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--device',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', {
          attrs: { d: 'M6 15H2a2 2 0 01-2-2V2a2 2 0 012-2h9a2 2 0 012 2v3h-2V2H2v9h4z' },
        }),
        _c('path', {
          attrs: {
            d: 'M15 7H9a1 1 0 00-1 1v7a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1zm-1 7h-4V9h4z',
            'data-color': 'color-2',
          },
        }),
      ])
    )
  },
}
