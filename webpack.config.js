const path = require('path')

const localPath = path.join(__dirname, 'public')

module.exports = {
  entry: './src/app.js',
  output: {
    path: localPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // test: /\.css$/,
        // use: ['style-loader', 'css-loader', ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: localPath
  }
}
