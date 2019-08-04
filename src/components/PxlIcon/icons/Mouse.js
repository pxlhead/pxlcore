export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--mouse', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--mouse',
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
              d: 'M8 4a.945.945 0 00-1 1v2a.945.945 0 001 1 .945.945 0 001-1V5a.945.945 0 00-1-1z',
            },
          }),
          _c('path', {
            attrs: {
              d:
                'M8 0a6.006 6.006 0 00-6 6v4a6 6 0 0012 0V6a6.006 6.006 0 00-6-6zm4 10a4 4 0 01-8 0V6a4 4 0 018 0z',
            },
          }),
        ]),
      ])
    )
  },
}
