export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--dribbble', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--dribbble',
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
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d:
              'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.2 7.4s-.2-.6-.3-.8c1.7-.8 2.8-1.7 3.2-2.2.7.9 1.1 2 1.2 3.2-.8-.2-2.6-.5-4.1-.2zM9.1 5.1C8.3 3.7 7.4 2.5 7 1.8c1.9-.5 3.6.1 4.9 1.3-.4.5-1.2 1.3-2.8 2zm-4-2.6c.4.5 1.2 1.7 2 3.2-2.2.5-4.2.6-5.1.6.4-1.6 1.6-3 3.1-3.8zM8 7.3c.1.2.2.4.3.5-2.8.9-4.6 3.2-5.2 4.1-.8-1.1-1.3-2.4-1.3-3.7.9-.1 3.5-.2 6.2-.9zm1 2.2c.7 2 1.1 3.6 1.2 4.4-2.1.7-4.5.3-5.8-.8.4-.7 1.7-2.5 4.6-3.6zm2.9 3.4c-.2-.8-.5-2.2-1.1-3.9 1.1-.2 2.7 0 3.3.2-.3 1.5-1.1 2.8-2.2 3.7z',
          },
        }),
      ])
    )
  },
}
