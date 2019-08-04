export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--globe', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--globe',
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
              'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.9 7H12c-.1-1.5-.4-2.9-.8-4.1 1.4.9 2.4 2.4 2.7 4.1zM8 14c-.6 0-1.8-1.9-2-5h4c-.2 3.1-1.4 5-2 5zM6 7c.2-3.1 1.3-5 2-5s1.8 1.9 2 5H6zM4.9 2.9C4.4 4.1 4.1 5.5 4 7H2.1c.3-1.7 1.3-3.2 2.8-4.1zM2.1 9H4c.1 1.5.4 2.9.8 4.1-1.4-.9-2.4-2.4-2.7-4.1zm9 4.1c.5-1.2.7-2.6.8-4.1h1.9c-.2 1.7-1.2 3.2-2.7 4.1z',
          },
        }),
      ])
    )
  },
}
