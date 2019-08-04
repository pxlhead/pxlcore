export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--medium', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--medium',
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
              'M15 0H1a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V1a1 1 0 00-1-1zm-1.708 3.791l-.858.823a.251.251 0 00-.1.241V10.9a.251.251 0 00.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6 12.124h-.329l-2.81-6.13V10.1a.567.567 0 00.156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 00.146-.472V5.351A.416.416 0 003.683 5l-1-1.209V3.61H5.8l2.4 5.283 2.122-5.283h2.971z',
            fill: '#444',
          },
        }),
      ])
    )
  },
}
