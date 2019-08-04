export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--euro', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--euro',
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
              'M12.8 12.2c-.9.5-1.8.8-2.8.8-2 0-3.8-1.2-4.6-3H9c.6 0 1-.4 1-1s-.4-1-1-1H5c0-.3 0-.7.1-1H9c.6 0 1-.4 1-1s-.4-1-1-1H6c.9-1.2 2.3-2 4-2 1 0 1.9.3 2.8.8.5.3 1.1.2 1.4-.3.3-.5.2-1.1-.3-1.4C12.7 1.4 11.4 1 10 1 7.2 1 4.8 2.6 3.7 5H2c-.6 0-1 .4-1 1s.4 1 1 1h1.1c-.1.3-.1.7-.1 1H2c-.6 0-1 .4-1 1s.4 1 1 1h1.3c.9 2.9 3.5 5 6.7 5 1.4 0 2.7-.4 3.9-1.2.5-.3.6-.9.3-1.4-.4-.4-1-.5-1.4-.2z',
          },
        }),
      ])
    )
  },
}
