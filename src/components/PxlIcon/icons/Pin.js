export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--pin', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--pin',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '8', cy: '7', r: '2' } }),
        _c('path', {
          attrs: {
            d:
              'M7.3 15.7c-.1-.1-4.2-3.7-4.2-3.8C1.7 10.7 1 8.9 1 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4-.1zm-2.7-5l3.4 3 3.4-3c1-1 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5S3 4.2 3 7c0 1.4.6 2.7 1.6 3.7 0-.1 0-.1 0 0z',
          },
        }),
      ])
    )
  },
}
