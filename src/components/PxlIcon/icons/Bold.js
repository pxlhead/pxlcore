export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--bold', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--bold',
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
              'M11.56 7.316a3.483 3.483 0 001.418-3.207C12.782 2.305 11.143 1 9.33 1H2v1l1.447.724A1 1 0 014 3.618v8.764a1 1 0 01-.553.894L2 14v1h7.823c2.104 0 3.98-1.547 4.162-3.643a4.001 4.001 0 00-2.424-4.04zM7 3h1a2 2 0 110 4H7V3zm2 10H7V9h2a2 2 0 110 4z',
          },
        }),
      ])
    )
  },
}
