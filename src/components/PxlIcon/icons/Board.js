export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--board', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--board',
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
              'M15 10V1c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v9H0v2h4l-1.8 2.4c-.3.4-.2 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4L6.5 12H7v2h2v-2h.5l2.7 3.6c.2.3.5.4.8.4.2 0 .4-.1.6-.2.4-.3.5-1 .2-1.4L12 12h4v-2h-1zM3 2h10v8H3V2z',
          },
        }),
      ])
    )
  },
}
