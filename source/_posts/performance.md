---
title: performance
date: 2017-12-20 13:07:16
tags:
- webpack
- performance
catergories: ['webpack']
---

# 性能(Performance):object
这些选项可以控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」。 此功能受到 webpack 性能评估的启发。
配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。

## performance.hints : false | "error" | "warning"

打开/关闭提示。此外，当找到提示时，告诉 webpack 抛出一个错误或警告。此属性默认设置为 "warning"。
给定一个创建后超过 250kb 的资源：
performance: {
  hints: false
}
不展示警告或错误提示。
performance: {
  hints: "warning"
}
将展示一条警告，通知你这是体积大的资源。在开发环境，我们推荐这样。
performance: {
  hints: "error"
}
在生产环境构建时，我们推荐使用 hints: "error"，有助于防止把体积巨大的 bundle 部署到生产环境，从而影响网页的性能。

## performance.maxEntrypointSize:int

入口起点表示针对指定的入口，对于所有资源，要充分利用初始加载时(initial load time)期间。此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。

performance: {
  maxEntrypointSize: 400000
}
## performance.maxAssetSize :int
资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。

performance: {
  maxAssetSize: 100000
}
## performance.assetFilter : Function
此属性允许 webpack 控制用于计算性能提示的文件。默认函数如下：
function(assetFilename) {
    return !(/\.map$/.test(assetFilename))
};
你可以通过传递自己的函数来覆盖此属性：
performance: {
  assetFilter: function(assetFilename) {
    return assetFilename.endsWith('.js');
  }
}
以上示例将只给出 .js 文件的性能提示。
