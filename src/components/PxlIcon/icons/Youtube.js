export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--youtube', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--youtube',
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
              'M15.8 4.8c-.2-1.3-.8-2.2-2.2-2.4C11.4 2 8 2 8 2s-3.4 0-5.6.4C1 2.6.3 3.5.2 4.8 0 6.1 0 8 0 8s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C4.6 14 8 14 8 14s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4C16 9.9 16 8 16 8s0-1.9-.2-3.2zM6 11V5l5 3-5 3z',
          },
        }),
      ])
    )
  },
}
