export default {
  functional: true,
  render(_h, _vm) {
    const { _c, data, children = [] } = _vm

    const { class: classNames, staticClass, style, staticStyle, attrs = {}, ...rest } = data

    return _c(
      'svg',
      {
        class: ['pxl-icon--hide', classNames, staticClass],
        style: [style, staticStyle],
        attrs: Object.assign(
          {
            fill: 'currentColor',
            class: 'pxl-icon--hide',
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
              'M14.574 5.669L13.15 7.093c.278.347.506.664.669.907-.76 1.13-2.85 3.82-5.561 3.985L6.443 13.8c.496.124 1.014.2 1.557.2 4.707 0 7.744-5.284 7.871-5.508a1 1 0 00.001-.98c-.047-.085-.5-.881-1.298-1.843zM.293 15.707a.997.997 0 001.414 0l14-14A.999.999 0 1014.293.293l-2.745 2.745C10.515 2.431 9.331 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 00.002.975c.07.125 1.044 1.802 2.693 3.276L.292 14.294a.999.999 0 00.001 1.413zm1.888-7.708C2.958 6.835 5.146 4 8 4c.742 0 1.437.201 2.078.508L8.512 6.074A1.925 1.925 0 008 6a2 2 0 00-2 2c0 .178.029.348.074.512L4.24 10.346a12.603 12.603 0 01-2.059-2.347z',
          },
        }),
      ])
    )
  },
}
