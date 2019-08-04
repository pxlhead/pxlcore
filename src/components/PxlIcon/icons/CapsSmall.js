export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--caps-small', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--caps-small',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { d: 'M6 1H0v3h1l1-1h3v11l-2 1v1h6v-1l-2-1V3h3l1 1h1V1z' } }),
        _c('path', {
          attrs: { 'data-color': 'color-2', d: 'M8 6v3h1l1-1h1v6l-1 1v1h4v-1l-1-1V8h1l1 1h1V6z' },
        }),
      ])
    )
  },
}
