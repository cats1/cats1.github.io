---
title: webpackplugin
date: 2017-12-17 22:35:22
tags:
- webpack
---

# ProvidePlugin
自动加载模块，而不必到处 import 或 require 。
```
new webpack.ProvidePlugin({
  identifier: 'module1',
  // ...
})
or
new webpack.ProvidePlugin({
  identifier: ['module1', 'property1'],
  // ...
})
```

## 使用：jQuery
```
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
```

## 使用：jQuery 和 Angular 1
```
new webpack.ProvidePlugin({
  'window.jQuery': 'jquery'
})
```

## 使用：Lodash Map
```
new webpack.ProvidePlugin({
  _map: ['lodash', 'map']
})
```

## 使用：Vue.js
```
new webpack.ProvidePlugin({
  Vue: ['vue/dist/vue.esm.js', 'default']
})
```

# DefinePlugin
DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志。这就是 DefinePlugin 的用处，设置它，就可以忘记开发和发布构建的规则。

## 用法
每个传进 DefinePlugin 的键值都是一个标志符或者多个用 . 连接起来的标志符。
* 如果这个值是一个字符串，它会被当作一个代码片段来使用。
* 如果这个值不是字符串，它会被转化为字符串(包括函数)。
* 如果这个值是一个对象，它所有的 key 会被同样的方式定义。
* 如果在一个 key 前面加了 typeof,它会被定义为 typeof 调用。

这些值会被内联进那些允许传一个代码压缩参数的代码中，从而减少冗余的条件判断。
>注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。