export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--full-screen', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--full-screen',
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
              'M2 6H0V1c0-.6.4-1 1-1h5v2H2v4zM16 6h-2V2h-4V0h5c.6 0 1 .4 1 1v5zM15 16h-5v-2h4v-4h2v5c0 .6-.4 1-1 1zM6 16H1c-.6 0-1-.4-1-1v-5h2v4h4v2z',
          },
        }),
      ])
    )
  },
}
