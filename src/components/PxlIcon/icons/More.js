export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--more', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--more',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '8', cy: '8', r: '2' } }),
        _c('circle', { attrs: { cx: '2', cy: '8', r: '2' } }),
        _c('circle', { attrs: { cx: '14', cy: '8', r: '2' } }),
      ])
    )
  },
}
