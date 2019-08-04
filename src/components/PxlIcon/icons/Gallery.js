export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--gallery', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--gallery',
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
              'M15 4H1a.945.945 0 00-1 1v10a.945.945 0 001 1h14a.945.945 0 001-1V5a.945.945 0 00-1-1zm-1 10H2V6h12z',
            fill: '#444',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M2 0h12v2H2zM5 13l5-5 3 5H5z' } }),
        _c('circle', { attrs: { cx: '5', cy: '9', r: '1', 'data-color': 'color-2' } }),
      ])
    )
  },
}
