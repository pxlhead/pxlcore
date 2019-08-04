export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--time', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--time',
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
              'M12.7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.8.8-.9.9C10 2.5 8.6 2 7 2 3.1 2 0 5.1 0 9s3.1 7 7 7 7-3.1 7-7c0-1.6-.5-3-1.4-4.2l.9-.9.8.8c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3zM7 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M8 6H6v4h4V8H8z' } }),
      ])
    )
  },
}
