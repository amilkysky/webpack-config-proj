const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: `dist/index.html`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: ['style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash]']
      },
      {
        test: /\.(jp(e*)g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg?$/,
        use: [
          {          
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader?name=/[path][name].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config