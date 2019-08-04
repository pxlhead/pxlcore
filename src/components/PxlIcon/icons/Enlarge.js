export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--enlarge', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--enlarge',
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
              'M7.4 1.2l-5 4 1.2 1.6L8 3.3l4.4 3.5 1.2-1.6-5-4c-.3-.3-.9-.3-1.2 0zM8 12.7L3.6 9.2l-1.2 1.6 5 4c.2.1.4.2.6.2s.4-.1.6-.2l5-4-1.2-1.6L8 12.7z',
          },
        }),
      ])
    )
  },
}
