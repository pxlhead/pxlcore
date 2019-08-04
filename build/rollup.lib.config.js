import fs from 'fs'
import path from 'path'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

const componentsPath = 'src/components'

const components = fs
  .readdirSync(componentsPath)
  .filter(dir => fs.statSync(path.join(componentsPath, dir)).isDirectory())

const entries = {
  index: 'src/index.js',
  ...components.reduce((obj, name) => {
    obj[name] = `${componentsPath}/${name}`
    return obj
  }, {}),
}

export default [
  {
    input: entries,
    output: [
      {
        format: 'esm',
        dir: 'lib/esm',
      },
      {
        format: 'cjs',
        dir: 'lib/cjs',
        exports: 'named',
      },
    ],
    external: ['vue'],
    plugins: [
      commonjs(),
      vue(),
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.vue'],
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'pxlcore',
      file: 'lib/index.js',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    external: ['vue'],
    plugins: [
      commonjs(),
      vue({ css: false }),
      scss({
        output: 'lib/index.css',
        processor: css =>
          postcss([autoprefixer, cssnano])
            .process(css, { from: undefined })
            .then(result => result.css),
      }),
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.vue'],
      }),
      filesize(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'pxlcore',
      file: 'lib/index.min.js',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    external: ['vue'],
    plugins: [
      commonjs(),
      vue({ css: false }),
      scss({
        output: 'lib/index.min.css',
        processor: css =>
          postcss([autoprefixer, cssnano])
            .process(css, { from: undefined })
            .then(result => result.css),
      }),
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.vue'],
      }),
      terser(),
      filesize(),
    ],
  },
  ...components
    .map(name => [
      {
        input: `${componentsPath}/${name}/index.js`,
        output: {
          format: 'umd',
          name,
          file: `lib/components/${name}/index.js`,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
        external: ['vue'],
        plugins: [
          commonjs(),
          vue(),
          resolve(),
          replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.vue'],
          }),
        ],
      },
    ])
    .reduce((result, arr) => result.concat(arr), []),
]
