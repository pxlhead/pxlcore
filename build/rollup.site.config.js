import fs from 'fs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import filesize from 'rollup-plugin-filesize'
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

if (fs.existsSync('./dist/main.js.map')) fs.unlinkSync('./dist/main.js.map')

const isProd = process.env.BUILD === 'production'

export default {
  input: 'site/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: !isProd,
    globals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
    },
  },
  external: ['vue', 'vue-router', 'vue-i18n'],
  plugins: [
    commonjs(),
    vue({ css: false }),
    scss({
      output: 'dist/index.css',
      processor: css =>
        postcss([autoprefixer, cssnano])
          .process(css, { from: undefined })
          .then(result => result.css),
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.vue'],
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    filesize(),
    copy({
      targets: [{ src: 'assets/*', dest: 'dist/assets' }, { src: 'site/index.html', dest: 'dist' }],
      copyOnce: true,
    }),
    isProd && terser(),
    !isProd && serve({ contentBase: './dist/', port: 8080, historyApiFallback: true }),
    !isProd && livereload(),
  ],
}
