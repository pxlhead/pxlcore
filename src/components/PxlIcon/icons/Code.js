export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--code', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--code',
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
              'M12.7 11.7l-1.4-1.4L13.6 8l-2.3-2.3 1.4-1.4 3 3c.4.4.4 1 0 1.4l-3 3zM3.3 11.7l-3-3c-.4-.4-.4-1 0-1.4l3-3 1.4 1.4L2.4 8l2.3 2.3-1.4 1.4z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M6 15c-.1 0-.2 0-.3-.1-.5-.2-.8-.7-.6-1.3l4-12c.2-.5.7-.8 1.3-.6.5.2.8.7.6 1.3l-4 12c-.2.4-.6.7-1 .7z',
          },
        }),
      ])
    )
  },
}
