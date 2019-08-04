export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--soundcloud', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--soundcloud',
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
            'data-color': 'color-2',
            d:
              'M.3 8.2s0-.1 0 0c-.1-.1-.1 0-.1 0L0 9.7l.2 1.5s0 .1.1.1c0 0 .1 0 .1-.1l.2-1.5-.3-1.5zM2.3 6.8c-.1 0-.2.1-.2.2L2 9.7l.1 1.8c0 .1.1.1.1.1.1 0 .1-.1.1-.1l.1-1.8V7c0-.1-.1-.2-.1-.2zM6.3 11.6c.1 0 .2-.1.2-.2l.1-1.7-.1-4.2c0-.1-.1-.2-.2-.2s-.2.1-.2.2L6 9.7l.1 1.7c0 .1.1.2.2.2zM4.3 11.6c.1 0 .2-.1.2-.2l.1-1.7L4.5 6c0-.1-.1-.2-.2-.2s-.2.1-.2.2L4 9.7l.1 1.7c0 .1.1.2.2.2z',
          },
        }),
        _c('path', {
          attrs: {
            d:
              'M14 7.5c-.3 0-.5.1-.8.2-.2-1.9-1.7-3.3-3.6-3.3-.5 0-.9.1-1.3.2-.2.1-.2.2-.2.3v6.5c0 .1.1.2.2.2h5.6c1.1 0 2-.9 2-2s-.8-2.1-1.9-2.1z',
          },
        }),
      ])
    )
  },
}
