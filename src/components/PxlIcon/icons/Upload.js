export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--upload', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--upload',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('path', { attrs: { 'data-color': 'color-2', d: 'M7 4v7h2V4h2.4L8 0 4.6 4z' } }),
        _c('path', {
          attrs: {
            d:
              'M15 16H1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h3v2H2v7h12V7h-2V5h3c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z',
          },
        }),
      ])
    )
  },
}
