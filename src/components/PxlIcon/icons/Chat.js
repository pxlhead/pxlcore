export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--chat', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--chat',
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
              'M13 15H1c-.8 0-1.3-.9-.8-1.6L3 9.7V4c0-1.7 1.3-3 3-3h7c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3zM3 13h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .2-.1.4-.2.6L3 13z',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M7 5h5v2H7zM7 9h5v2H7z' } }),
      ])
    )
  },
}
