const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {minify: htmlMinifier} = require('html-minifier')

const {NODE_ENV} = process.env
const ROOT = __dirname

const DOCS = path.resolve(ROOT, 'docs')


const plugins = [
  new ExtractTextPlugin({
    filename: 'css/[name].css',
    allChunks: true
  })
]


module.exports = {
  plugins,
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: DOCS,
    filename: 'script/[name].js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          relativePath: true,
          outputPath: 'css/fonts/',
          name: `[name].[ext]`
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
}
