export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--book', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--book',
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
              'M11.5 1c-1.4 0-2.7.4-3.5 1.1C7.2 1.4 5.9 1 4.5 1 1.9 1 0 2.3 0 4v10c0 .6.4 1 1 1s1-.4 1-1c0-.3.9-1 2.5-1s2.5.7 2.5 1c0 .6.4 1 1 1s1-.4 1-1c0-.3.9-1 2.5-1s2.5.7 2.5 1c0 .6.4 1 1 1s1-.4 1-1V4c0-1.7-1.9-3-4.5-3zm-7 10c-.9 0-1.8.2-2.5.5V4c0-.3.9-1 2.5-1S7 3.7 7 4v7.5c-.7-.3-1.6-.5-2.5-.5zm9.5.5c-.7-.3-1.6-.5-2.5-.5-.9 0-1.8.2-2.5.5V4c0-.3.9-1 2.5-1s2.5.7 2.5 1v7.5z',
          },
        }),
      ])
    )
  },
}
