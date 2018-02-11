const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {minify: htmlMinifier} = require('html-minifier')

const {NODE_ENV} = process.env
const ROOT = __dirname
const isProduction = NODE_ENV === 'production'
const SRC = path.resolve(ROOT, 'src')
const TEMPLATE_SRC = path.join(SRC, 'template')

const LIB = path.resolve(ROOT)
const TEMPLATE = path.join(LIB, 'template')

htmlFiles = [
  'class.html',
  'details.html',
  'file.html',
  'identifiers.html',
  'index.html',
  'manual.html',
  'manualCardIndex.html',
  'manualIndex.html',
  'nav.html',
  'properties.html',
  'single.html',
  'source.html',
  'summary.html',
  'test.html',
  'testInterface.html'
]

const minify = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  quoteCharacter: '"',
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortClassName: true,
  sortAttributes: true,
  useShortDoctype: true
}

const plugins = [
  new HtmlWebpackPlugin({
    minify,
    filename: 'layout.html',
    template: path.join(TEMPLATE_SRC, 'layout.html'),
    alwaysWriteToDisk: true
  }),
  new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(TEMPLATE_SRC, '*.html'),
      to: TEMPLATE,
      flatten: true,
      transform(content, path) {
        return htmlMinifier(content.toString(), minify)
      },
      cache: true
    },
    {
      from: path.join(SRC, 'image'),
      to: path.join(TEMPLATE, 'image'),
      flatten: true,
      transform(content, filePath) {
        const {ext} = path.parse(filePath)
        console.log(ext)
        if (ext === '.svg') {
          return htmlMinifier(content.toString(), minify)
        }
        return content
      },
      cache: true
    }
  ], {
    ignore: [path.join(TEMPLATE_SRC, 'layout.html')]
  })
]

if (isProduction) {
  plugins.push(new MinifyPlugin())
}
module.exports = {
  plugins,
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: TEMPLATE,
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: isProduction,
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: isProduction,
                sourceMap: !isProduction
              }
            }
          ]
        })
      }
    ]
  }
}
