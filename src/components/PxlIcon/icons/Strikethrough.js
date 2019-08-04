export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--strikethrough', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--strikethrough',
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
              'M9 13.28V11H7v2.28a1 1 0 01-.684.948L4 15v1h8v-1l-2.316-.772A1 1 0 019 13.279zM9 2h3.382a1 1 0 01.894.553L14 4h1V0H1v4h1l.724-1.447A1 1 0 013.618 2H7v5h2V2z',
          },
        }),
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M16 9V7H0v2z' } }),
      ])
    )
  },
}
