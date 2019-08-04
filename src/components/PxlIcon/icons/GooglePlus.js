export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--google-plus', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--google-plus',
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
              'M8 7v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4s2-4.4 4.3-4.4c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.6 1.7 10 1 8.1 1c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H8z',
          },
        }),
      ])
    )
  },
}
