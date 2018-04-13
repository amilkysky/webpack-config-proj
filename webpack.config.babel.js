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
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=/public/images/[name].[ext]'
      },
    ]
  }
}

module.exports = config