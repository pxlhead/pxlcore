export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--user', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--user',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
          },
          attrs
        ),
        ...rest,
      },
      children.concat([
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '5', cy: '9', r: '1' } }),
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '11', cy: '9', r: '1' } }),
        _c('path', {
          attrs: {
            d:
              'M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6 0-.563.083-1.105.229-1.622 2.092-.878 5.097.717 8.317-2.196 1.131 1.79 2.471 2.571 3.379 2.914.044.295.075.596.075.904 0 3.309-2.691 6-6 6z',
          },
        }),
      ])
    )
  },
}
