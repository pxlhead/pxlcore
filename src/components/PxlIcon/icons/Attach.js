export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--attach', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--attach',
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
              'M9.6 12.8c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.7-4-.1-5.5l4.5-4.5c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5L8.3 9.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.8-2.8-1.5-1.4L5.5 7c-1.2 1.2-1.2 3.1 0 4.2s3.1 1.2 4.2 0l3.6-3.6c1.8-1.8 1.8-4.6 0-6.4-1.8-1.8-4.6-1.8-6.4 0L2.4 5.9c-2.3 2.3-2.2 6 .1 8.3C3.7 15.4 5.2 16 6.8 16s3.1-.6 4.2-1.8l4.3-4.3-1.4-1.4-4.3 4.3z',
          },
        }),
      ])
    )
  },
}
