export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--question', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--question',
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
              'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z',
          },
        }),
        _c('circle', { attrs: { 'data-color': 'color-2', cx: '8', cy: '12', r: '1' } }),
        _c('path', {
          attrs: {
            'data-color': 'color-2',
            d:
              'M7.1 5.5c.2-.3.5-.5.9-.5.6 0 1 .4 1 1 0 .3-.1.4-.6.7C7.8 7.1 7 7.7 7 9v1h2V9c0-.2 0-.3.5-.6.6-.4 1.5-1 1.5-2.4 0-1.7-1.3-3-3-3-1.1 0-2.1.6-2.6 1.5l-.5.9 1.7 1 .5-.9z',
          },
        }),
      ])
    )
  },
}
