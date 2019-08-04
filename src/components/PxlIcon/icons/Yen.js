export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--yen', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--yen',
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
              'M12 10H9V9h3c.6 0 1-.4 1-1s-.4-1-1-1H9.3l3.5-4.4c.3-.4.3-1.1-.2-1.4-.4-.3-1.1-.3-1.4.2L8 5.4l-3.2-4c-.3-.4-1-.5-1.4-.2-.4.3-.5 1-.2 1.4L6.7 7H4c-.6 0-1 .4-1 1s.4 1 1 1h3v1H4c-.6 0-1 .4-1 1s.4 1 1 1h3v2c0 .6.4 1 1 1s1-.4 1-1v-2h3c.6 0 1-.4 1-1s-.4-1-1-1z',
          },
        }),
      ])
    )
  },
}
