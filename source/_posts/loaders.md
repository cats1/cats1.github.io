---
title: loaders
date: 2017-12-20 14:51:23
tags:
---

# 加载 CSS
在 module 配置中 安装并添加 style-loader 和 css-loader：
> npm install --save-dev style-loader css-loader

{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}
## css单独分离
extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象;首先我先来介绍下这个插件的安装方法:
> npm install extract-text-webpack-plugin --save-dev

使用方法：
```
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
```

该插件有三个参数意义分别如下

* use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
* fallback:编译后用什么loader来提取css文件
* publicfile:用来覆盖项目路径,生成该css文件的文件路径

new ExtractTextPlugin({
    filename: "[name].[contenthash:6].css",
    allChunks: false
})

当你使用ExtractTextPlugin时，因为这个插件本身的原因，修改css文件是不会更新的，所以在dev的时候可以不使用这个插件。

压缩css的话用到的是'optimize-css-assets-webpack-plugin'
new OptmizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {discardComments:{removeAll: true}},
    canPrint: true
})


# 加载图片
背景和图标这些图片，使用 file-loader
> npm install --save-dev file-loader

{
    test: /\.(png|svg|jpg|gif)$/,
    use: [ 'file-loader' ]
}

# 加载字体
字体使用file-loader 和 url-loader
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ['file-loader']
}
# 加载数据
数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理这三类文件：
> npm install --save-dev csv-loader xml-loader

{
    test: /\.xml$/,
    use: [ 'xml-loader' ]
},
{
    test: /\.(csv|tsv)$/,
    use: [ 'csv-loader' ]
}