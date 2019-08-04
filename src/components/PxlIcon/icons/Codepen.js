export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--codepen', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--codepen',
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
              'M15.7 5L8.4.1c-.2-.1-.6-.1-.8 0C7.6.1.6 4.8.3 5s-.3.5-.3.6v4.9c0 .3.3.5.3.5l7.3 4.9c.1.1.3.1.4.1.1 0 .3 0 .4-.1l7.3-4.9s.3-.2.3-.6V5.6c0-.1 0-.4-.3-.6zm-7-3l5.4 3.6-2.4 1.6-3-2V2zM7.3 2v3.2l-3 2-2.4-1.6L7.3 2zM1.4 6.8L3.1 8 1.4 9.2V6.8zM7.3 14l-5.4-3.6 2.4-1.6 3 2V14zM8 9.6L5.6 8 8 6.4 10.4 8 8 9.6zm.7 4.4v-3.2l3-2 2.4 1.6L8.7 14zm5.9-4.8L12.9 8l1.7-1.2v2.4z',
          },
        }),
      ])
    )
  },
}
