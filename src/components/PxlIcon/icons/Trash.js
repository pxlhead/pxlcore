export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--trash', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--trash',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M5 7h2v6H5zM9 7h2v6H9z' } }),
        _c('path', {
          attrs: {
            d:
              'M12 1c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2H0v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5h1V3h-4V1zM6 2h4v1H6V2zm7 3v9H3V5h10z',
          },
        }),
      ])
    )
  },
}
