export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--structure', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--structure',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { d: 'M6 12h4v4H6zM6 0h4v4H6zM12 12h4v4h-4zM0 12h4v4H0z' } }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d: 'M3 9h4v2h2V9h4v2h2V8c0-.6-.4-1-1-1H9V5H7v2H2c-.6 0-1 .4-1 1v3h2V9z',
          },
        }),
      ])
    )
  },
}
