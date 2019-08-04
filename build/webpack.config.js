const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: './site/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: isProd ? 'index.[chunkhash].js' : 'index.js',
  },
  resolve: {
    extensions: ['.js', 'vue'],
    alias: {
      '~': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [autoprefixer()],
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.scss$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,scss}'],
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash:7].css' : '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: '../site/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
}

if (!isProd) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    port: 8080,
    stats: 'minimal',
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new FriendlyErrorsPlugin())
} else {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    })
  )
}

module.exports = config
