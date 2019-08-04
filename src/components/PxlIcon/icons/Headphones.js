export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--headphones', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--headphones',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('g', { attrs: { fill: '#444' } }, [
          _c('path', {
            attrs: {
              'data-color': 'color-2',
              d:
                'M10 0H6a6.006 6.006 0 00-6 6v6a1 1 0 002 0V6a4 4 0 014-4h4a4 4 0 014 4v6a1 1 0 002 0V6a6.006 6.006 0 00-6-6z',
            },
          }),
          _c('path', {
            attrs: {
              d:
                'M4.5 8A1.5 1.5 0 003 9.5v5a1.5 1.5 0 003 0v-5A1.5 1.5 0 004.5 8zM11.5 8A1.5 1.5 0 0010 9.5v5a1.5 1.5 0 003 0v-5A1.5 1.5 0 0011.5 8z',
            },
          }),
        ]),
      ])
    )
  },
}
