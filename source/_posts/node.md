---
title: node
date: 2017-12-20 13:13:26
tags:
- webpack
- node
---

# Node
可以配置是否 polyfill 或 mock 某些 Node.js 全局变量和模块。这可以使最初为 Node.js 环境编写的代码，在其他环境（如浏览器）中运行。
此功能由 webpack 内部的 NodeStuffPlugin 插件提供。如果 target 是 "web"（默认）或 "webworker"，那么 NodeSourcePlugin 插件也会被激活。
是一个对象，其中每个属性都是 Node.js 全局变量或模块的名称，value值：
* true：提供 polyfill。
* "mock"：提供 mock 实现预期接口，但功能很少或没有。
* "empty"：提供空对象。
* alse: 什么都不提供。预期获取此对象的代码，可能会因为获取不到此对象，触发 ReferenceError 而崩溃。尝试使用 require('modulename') 导入模块的代码，可能会触发 Cannot find module "modulename" 错误。

这里是默认值：

node: {
  console: false,
  global: true,
  process: true,
  __filename: "mock", //boolean||'mock'(默认值)
  __dirname: "mock", //boolean||'mock'(默认值)
  Buffer: true, //boolean||'mock',默认值:true
  setImmediate: true//boolean | "mock" | "empty"

  // 更多选项，请查看“其他 Node.js 核心库”
}

从 webpack 3.0.0 开始，node 选项可能被设置为 false，以完全关闭 NodeStuffPlugin 和 NodeSourcePlugin 插件。
## console 
boolean | "mock"
默认值：false
浏览器提供一个 console 对象，具有非常类似 Node.js console 的接口，所以通常不需要 polyfill。
## 其他 Node.js 核心库(Node.js core libraries)
boolean | "mock" | "empty"
只有当 target 是未指定、"web" 或 "webworker" 这三种情况时，此选项才会被激活（通过 NodeSourcePlugin）。 