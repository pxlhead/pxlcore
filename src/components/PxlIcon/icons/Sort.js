export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--sort', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--sort',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M9 15H7a1 1 0 010-2h2a1 1 0 010 2z' } }),
        _c('path', { attrs: { d: 'M11 11H5a1 1 0 010-2h6a1 1 0 010 2z' } }),
        _c('path', {
          attrs: { 'data-color': 'color-2', d: 'M13 7H3a1 1 0 010-2h10a1 1 0 010 2z' },
        }),
        _c('path', { attrs: { d: 'M15 3H1a1 1 0 010-2h14a1 1 0 010 2z' } }),
      ])
    )
  },
}
