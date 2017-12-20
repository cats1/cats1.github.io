---
title: 添加额外功能：plugins参数
date: 
tags:
- webpack
- plugins
---

# plugins: array
webpack 插件列表。例如，当多个 bundle 共享一些相同的依赖，CommonsChunkPlugin 有助于提取这些依赖到共享的 bundle 中，来避免重复打包。

### new webpack.optimize.UglifyJsPlugin(), // <----------- 压缩js

### new webpack.HotModuleReplacementPlugin() //热加载