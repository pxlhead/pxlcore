export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--pound', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--pound',
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
              'M12 13H7v-3h3c.6 0 1-.4 1-1s-.4-1-1-1H7V5c0-1.1.9-2 2-2s2 .9 2 2c0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.8-4-4-4S5 2.8 5 5v3H3c-.6 0-1 .4-1 1s.4 1 1 1h2v3H3c-.6 0-1 .4-1 1s.4 1 1 1h9c.6 0 1-.4 1-1s-.4-1-1-1z',
          },
        }),
      ])
    )
  },
}
