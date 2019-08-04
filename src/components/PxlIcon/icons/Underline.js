export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--underline', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--underline',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M0 14h16v2H0z' } }),
        _c('path', {
          attrs: {
            d:
              'M15 0H9v1l1.447.724a1 1 0 01.553.894v4.264c0 1.45-.978 2.783-2.402 3.06A3.005 3.005 0 015 7V2.618a1 1 0 01.553-.894L7 1V0H1v1l1.447.724A1 1 0 013 2.618v4.159c0 2.61 1.903 4.945 4.5 5.199A5.006 5.006 0 0013 7V2.618a1 1 0 01.553-.894L15 1V0z',
          },
        }),
      ])
    )
  },
}
