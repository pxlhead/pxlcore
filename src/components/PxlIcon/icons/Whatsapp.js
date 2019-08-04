export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--whatsapp', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--whatsapp',
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
              'M13.6 2.3C12.1.8 10.2 0 8 0 3.7 0 .1 3.6.1 7.9c0 1.4.4 2.8 1.1 4L0 16l4.2-1.1c1.2.6 2.5 1 3.8 1 4.4 0 7.9-3.6 7.9-7.9.1-2.2-.8-4.2-2.3-5.7zm-1.7 8.5c-.2.5-1 .9-1.3.9-.3.1-1.3 0-2.4-.5-2-.9-3.3-2.9-3.4-3-.1-.1-.8-1.1-.8-2s.5-1.5.7-1.7c.4-.4 1.2-.3 1.4.1.1.4.5 1.4.6 1.5s.1.5-.2.7c-.1 0-.6.4-.4.7.1.2.5.8 1.1 1.4.8.7 1.4.9 1.6 1 .2.1.3.1.4-.1.1-.1.5-.6.6-.8.1-.2.3-.2.4-.1s1.2.5 1.4.6c.2.2.4.2.4.3.1.1.1.5-.1 1z',
          },
        }),
      ])
    )
  },
}
