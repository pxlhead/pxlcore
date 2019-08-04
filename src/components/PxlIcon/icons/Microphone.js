export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--microphone', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--microphone',
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
              'M8 10c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4S4 1.8 4 4v2c0 2.2 1.8 4 4 4zM6 4c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1-.9 2-2 2s-2-.9-2-2V4z',
          },
        }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M15.9 7.1c.1-.5-.3-1-.8-1.1-.5-.1-1.1.3-1.1.8-.5 3-3 5.2-6 5.2S2.5 9.8 2.1 6.9C2 6.3 1.5 5.9.9 6c-.5.1-.9.6-.8 1.1.5 3.6 3.4 6.3 6.9 6.8V16h2v-2.1c3.5-.4 6.4-3.2 6.9-6.8z',
          },
        }),
      ])
    )
  },
}
