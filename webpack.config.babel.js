const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
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
        loader: 'file-loader?name=/[name].[ext]'
      },
      {
        test: /\.svg?$/,
        use: [
          {          
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader?name=/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config