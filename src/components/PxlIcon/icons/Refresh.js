export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--refresh', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--refresh',
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
              'M15.094 7.031L14.555.82l-1.93 1.93A7.014 7.014 0 008 1C4.14 1 1 4.14 1 8s3.14 7 7 7a7.027 7.027 0 006.063-3.499L12.332 10.5A5.022 5.022 0 018 13c-2.757 0-5-2.243-5-5s2.243-5 5-5c1.179 0 2.311.423 3.205 1.17L8.883 6.492l6.211.539z',
          },
        }),
      ])
    )
  },
}
