export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--paypal', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--paypal',
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
              'M12.8 1.2C12 .4 10.7 0 9 0H4c-.4 0-.6.3-.7.6L1.2 13.7c0 .3.2.5.4.5h3.1l.7-4.7c.1-.3.4-.6.7-.6h1.5c2.9 0 5.1-1.2 5.8-4.5 0-.1.3-2.1-.6-3.2z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M14.3 4.8c-.8 3.3-3 5.1-6.7 5.1H6.4L5.5 16h2c.3 0 .6-.2.6-.5l.5-3.2v-.2c.1-.6 1-.5 1-.5 2.5 0 4.5-1 5-4 .3-1.1.2-2.1-.3-2.8z',
          },
        }),
      ])
    )
  },
}
