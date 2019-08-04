export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--eye', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--eye',
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
              'M8 14c4.707 0 7.744-5.284 7.871-5.508a1 1 0 00.001-.98C15.746 7.287 12.731 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 00.002.975C.254 8.713 3.269 14 8 14zM8 4c2.839 0 5.036 2.835 5.818 4-.784 1.166-2.981 4-5.818 4-2.841 0-5.038-2.838-5.819-4.001C2.958 6.835 5.146 4 8 4z',
          },
        }),
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '8', cy: '8', r: '2' } }),
      ])
    )
  },
}
