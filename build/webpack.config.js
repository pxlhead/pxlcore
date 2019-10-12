const path = require('path')
const fs = require('fs')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const components = require('../components.js')
const componentNames = Object.keys(components)

const resolve = src => path.resolve(__dirname, '../' + src)

const componentEntries = componentNames.reduce((entries, name) => {
  entries[`lib/${name}/index`] = resolve(components[name])
  return entries
}, {})

const externals = {
  vue: 'vue',
}
componentNames.forEach(function(name) {
  externals[`@/components/${name}`] = resolve(`lib/${name}`)
})
const utilsList = fs.readdirSync(resolve('src/utils'))
utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`@/utils/${file}`] = resolve(`lib/utils/${file}`)
})

module.exports = {
  mode: 'production',
  entry: componentEntries,
  output: {
    path: resolve('/lib/'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    alias: {
      '@': resolve('src'),
    },
  },
  externals,
  // performance: {
  //   hints: false,
  // },
  // stats: 'none',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: process.cwd(),
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()],
}
