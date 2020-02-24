const path = require('path')

const localPath = path.join(__dirname, 'public')

module.exports = {
  entry: './src/app.js',
  output: {
    path: localPath,
    filename: 'bundle.js'
  },
  module: {
    noParse: [/.*(pixi\.js).*/],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: localPath,
    historyApiFallback: {
      index: 'public/index.html'
    }
  }
}
