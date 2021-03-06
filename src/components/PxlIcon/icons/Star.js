export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--star', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--star',
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
              'M11.86 15.542L8 13.513l-3.86 2.029c-.727.387-1.592-.235-1.451-1.054l.737-4.299L.302 7.145a1 1 0 01.555-1.706l4.316-.627L7.104.9C7.44.217 8.561.217 8.897.9l1.931 3.911 4.316.627a1.001 1.001 0 01.555 1.706l-3.124 3.045.737 4.299c.141.823-.726 1.436-1.452 1.054zm-3.394-4.044l2.532 1.331-.483-2.82a1 1 0 01.287-.885l2.049-1.998-2.831-.411a.996.996 0 01-.753-.547L8 3.602 6.733 6.168a1 1 0 01-.753.547l-2.831.411 2.049 1.998a1 1 0 01.287.885l-.483 2.82 2.532-1.331a.998.998 0 01.932 0z',
          },
        }),
      ])
    )
  },
}
