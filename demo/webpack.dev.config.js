const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  entry: {
    main: path.resolve(__dirname + '/main.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'vue-fab.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: [
        'babel-loader',
        'eslint-loader'
      ],
      exclude: /node_modules/
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
            indentedSyntax: true,
            data: `@import "~@/styles/index.sass";`
          }
        }
      ]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    }, {
      test: /\.vue$/,
      enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
      include: /src/,  // src文件夹下的文件需要被lint
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
        }
      }]
    }]
  },
  devServer: {
    inline: true,
    host: '0.0.0.0'
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html')
    })
  ]
}