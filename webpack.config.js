const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

  entry: './frontend/app.js',
  output: {
    path: path.join(__dirname, 'backend/public'), 
    filename: 'js/app.bundle.js'
  },

  mode: devMode ? 'development' : 'production',

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }), 
    
    new MiniCssExtractPlugin({
      filename: 'style/style.bundle.css'
    })
  ], 

  devtool: 'source-map'

}