export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--align-left', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--align-left',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { d: 'M0 1h16v2H0z' } }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M0 5h10v2H0z' } }),
        _c('path', { attrs: { d: 'M0 9h16v2H0z' } }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M0 13h10v2H0z' } }),
      ])
    )
  },
}
