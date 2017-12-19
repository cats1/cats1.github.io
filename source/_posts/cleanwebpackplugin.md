---
title: cleanwebpackplugin
date: 2017-12-17 21:55:12
tags:
- clean-webpack-plugin
- webpack
categories:
- webpack
---

# clean-webpack-plugin用于在building之前删除你以前build过的文件

## 安装
```
npm install clean-webpack-plugin --save-dev
```

## 用法
```
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
 plugins: [
  new CleanWebpackPlugin(['dist','build'],
     {
      root:'/full/project/path', //一个根的绝对路径.
      verbose: true, //将log写到 console.
      dry: false, //不要删除任何东西，主要用于测试.
      exclude: ['shared.js'] //排除不删除的目录，主要用于避免删除公用的文件
    })
    ]
}
new CleanWebpackPlugin(paths [, {options}])
```