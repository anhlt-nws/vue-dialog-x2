const path = require('path')


module.exports = {
  entry: {
    main: path.resolve(__dirname + '/src/main.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'vue-dialog-x.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.resolve(__dirname + '/src')
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }
      ]
    }]
  }
}