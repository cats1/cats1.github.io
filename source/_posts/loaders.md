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