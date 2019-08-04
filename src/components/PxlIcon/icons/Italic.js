export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--italic', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--italic',
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
              'M12 2V0H6v2h1.27a.5.5 0 01.496.57l-1.51 10.571a1 1 0 01-.99.859H4v2h6v-2H8.73a.5.5 0 01-.496-.57l1.51-10.571a1 1 0 01.99-.859H12z',
          },
        }),
      ])
    )
  },
}
