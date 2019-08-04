export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--dollar', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--dollar',
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
              'M9 7.2V4.1c.6.2 1 .8 1 1.4 0 .6.4 1 1 1s1-.4 1-1c0-1.8-1.3-3.2-3-3.4V1c0-.6-.4-1-1-1S7 .4 7 1v1.1c-1.7.2-3 1.6-3 3.4 0 2.1 1.6 2.9 3 3.3v3.1c-.6-.2-1-.8-1-1.4 0-.6-.4-1-1-1s-1 .4-1 1c0 1.8 1.3 3.2 3 3.4V15c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3-1.7 3-3.4 0-2.1-1.6-2.9-3-3.3zM6 5.5c0-.7.4-1.2 1-1.4v2.6c-.7-.3-1-.6-1-1.2zm3 6.4V9.3c.7.3 1 .6 1 1.2 0 .7-.4 1.2-1 1.4z',
          },
        }),
      ])
    )
  },
}
