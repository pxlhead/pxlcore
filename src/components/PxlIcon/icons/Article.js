export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--article', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--article',
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
              'M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H3V2h10v12z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d: 'M4 3h4v4H4zM9 4h3v1H9zM9 6h3v1H9zM4 8h8v1H4zM4 10h8v1H4zM4 12h5v1H4z',
          },
        }),
      ])
    )
  },
}
