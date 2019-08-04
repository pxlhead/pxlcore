export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--translation', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--translation',
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
              'M7.548 9.55l.634-1.805a8.59 8.59 0 01-1.875-.828A7.423 7.423 0 007.416 5.3 7.865 7.865 0 008.1 3.369c.589 0 .979.02 1.419.06V1.62a12.226 12.226 0 01-1.45.07H5.687v-.61a3.078 3.078 0 01.06-.61H3.738a3.034 3.034 0 01.06.62v.6H1.589A12.321 12.321 0 01.14 1.62v1.809c.5-.04.839-.06 1.429-.06a8.8 8.8 0 00.69 1.709 8.7 8.7 0 001.289 1.829A10.892 10.892 0 010 8.216a5.793 5.793 0 01.959 1.769 12.816 12.816 0 003.979-1.839 11.581 11.581 0 002.61 1.404zm-4.06-6.181h2.649a5.635 5.635 0 01-1.25 2.418 5.7 5.7 0 01-1.399-2.418z',
            'data-color': 'color-2',
          },
        }),
        _c('path', {
          attrs: {
            d:
              'M13.717 16l-.725-2.379H9.349L8.624 16H6.341L9.868 5.965h2.591L16 16zm-1.231-4.156l-1.131-3.657a10.295 10.295 0 01-.181-.67q-.226.874-1.292 4.327z',
            fill: '#444',
          },
        }),
      ])
    )
  },
}
