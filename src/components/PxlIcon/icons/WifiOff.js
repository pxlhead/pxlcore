export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--wifi-off', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--wifi-off',
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
              'M8.142 7.507C8.094 7.506 8.048 7.5 8 7.5c-1.9 0-3.6.7-4.9 2.1L4.5 11c.798-.886 1.912-1.357 3.06-1.457l.582-2.036zM10.13 7.827l-.557 1.949c.724.242 1.398.636 1.927 1.224l1.4-1.4a6.423 6.423 0 00-2.77-1.773zM8.848 5.039l.557-1.946C8.942 3.037 8.475 3 8 3 5 3 2.2 4.1 0 6.2l1.4 1.4C3.2 5.9 5.5 5 8 5c.286 0 .568.015.848.039zM11.368 3.493l-.55 1.924A9.051 9.051 0 0114.599 7.7L16 6.2a11.442 11.442 0 00-4.632-2.707z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M6.001 16a1.001 1.001 0 01-.963-1.275l4-14a1.001 1.001 0 011.924.549l-4 14a1 1 0 01-.961.726z',
          },
        }),
      ])
    )
  },
}
