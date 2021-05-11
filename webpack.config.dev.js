"use strict";

var path = require('path'); // 导入自动生成HTMl文件的插件


var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './src',
    open: true,
    port: 8082,
    host: '127.0.0.1'
  },
  // 配置plugins
  plugins: [//在打包之前做清空dist的操作
  //htmlWebpack可以配置
  new htmlWebpackPlugin({
    //tmplate ： 要打包的html文件
    template: path.resolve(__dirname, './index.html'),
    // 打包后的html文件名
    filename: 'index.html',
    minify: true
  })],
  module: {
    // 用来配置第三方loader模块的
    rules: [// 文件的匹配规则
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, //处理css文件的规则
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, //处理less文件规则
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: 'url-loader?limit=28340&name=[hash:8]-[name].[ext]'
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      use: 'url-loader'
    }]
  }
};