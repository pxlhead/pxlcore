export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--new', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--new',
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
              'M15 4h-1.2c.1-.3.2-.6.2-1 0-1.7-1.3-3-3-3-1.4 0-2.4.8-3 1.7C7.4.8 6.4 0 5 0 3.3 0 2 1.3 2 3c0 .4.1.7.2 1H1a1 1 0 00-1 1v3a1 1 0 001 1h1v6a1 1 0 001 1h10a1 1 0 001-1V9h1a1 1 0 001-1V5a1 1 0 00-1-1zm-4-2c.6 0 1 .4 1 1s-.4 1-1 1H9.2c.2-.9.7-2 1.8-2zM4 3c0-.6.4-1 1-1 1.1 0 1.6 1.1 1.8 2H5c-.6 0-1-.4-1-1zm0 6h3v5H4V9zm8 5H9V9h3v5zm2-7H2V6h12v1z',
          },
        }),
      ])
    )
  },
}
