export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--home', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--home',
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
              'M10 16h4c.6 0 1-.4 1-1V6c0-.3-.1-.6-.4-.8l-6-5c-.4-.3-.9-.3-1.3 0l-6 5c-.2.2-.3.5-.3.8v9c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3h2v3c0 .6.4 1 1 1zm-4-6c-.6 0-1 .4-1 1v3H3V6.5l5-4.2 5 4.2V14h-2v-3c0-.6-.4-1-1-1H6z',
          },
        }),
      ])
    )
  },
}
