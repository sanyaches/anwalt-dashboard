const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.vue', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: JSON.stringify('production') ? false : true,
      __VUE_OPTIONS_API__: true
    }),
    new HtmlWebpackPlugin({
      title: 'Anwalt.de dashboard',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    
    compress: true,
    port: 9090,
  },
}