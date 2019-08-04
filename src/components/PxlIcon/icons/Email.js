export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--email', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--email',
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
              'M15.439 9.683a3.329 3.329 0 01-3.073 2.444 2.075 2.075 0 01-2.1-1.522 3.51 3.51 0 01-2.876 1.522 3.18 3.18 0 01-2.5-1.024 4.015 4.015 0 01-.912-2.771 4.5 4.5 0 011.21-3.263c1.3-1.346 3.04-1.391 4.893-1.122a9.347 9.347 0 011.605.366c-.019.394-.215 4.4-.215 4.771q0 1.562 1.015 1.561.77 0 1.224-1a6.9 6.9 0 00-.229-5.469 5.226 5.226 0 00-4.832-2.625 6.285 6.285 0 00-5.961 3.312 8.073 8.073 0 00-.81 3.7c0 3.648 1.952 5.873 5.854 5.873a12.789 12.789 0 004.5-.878v1.6A11.649 11.649 0 017.771 16C3.1 16 .122 13.42.122 8.625a9.247 9.247 0 011.093-4.533A8.086 8.086 0 018.629 0a6.945 6.945 0 016.337 3.38 7.93 7.93 0 01.473 6.303zm-9.59-1.312q0 2.274 1.785 2.274 1.883 0 2.059-2.859l.117-2.332a3.1 3.1 0 00-3.263.664 3.39 3.39 0 00-.698 2.253z',
          },
        }),
      ])
    )
  },
}
