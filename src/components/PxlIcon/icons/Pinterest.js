export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--pinterest', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--pinterest',
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
              'M8 0C3.6 0 0 3.6 0 8c0 3.4 2.1 6.3 5.1 7.4-.1-.6-.1-1.6 0-2.3.1-.6.9-4 .9-4s-.2-.4-.2-1.1c0-1.1.7-2 1.5-2 .7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.7-.2.8.4 1.4 1.2 1.4 1.4 0 2.5-1.5 2.5-3.7 0-1.9-1.4-3.3-3.3-3.3-2.3 0-3.6 1.7-3.6 3.5 0 .7.3 1.4.6 1.8v.4c-.1.3-.2.8-.2.9 0 .1-.1.2-.3.1-1-.5-1.6-1.9-1.6-3.1C2.9 5.3 4.7 3 8.2 3c2.8 0 4.9 2 4.9 4.6 0 2.8-1.7 5-4.2 5-.8 0-1.6-.4-1.8-.9 0 0-.4 1.5-.5 1.9-.2.7-.7 1.6-1 2.1.8.2 1.6.3 2.4.3 4.4 0 8-3.6 8-8s-3.6-8-8-8z',
          },
        }),
      ])
    )
  },
}
