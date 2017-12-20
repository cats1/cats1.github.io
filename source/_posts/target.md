---
title: target
date: 2017-12-20 12:46:34
tags:
- webpack
- target
catergories: ['webpack']
---

webpack 能够为多种环境或 target 构建编译。
# target:string | function(compiler)

告知 webpack 为目标(target)指定一个环境。
## string
* async-node:编译为类 Node.js 环境可用（使用 fs 和 vm 异步加载分块） 
* node：编译为类 Node.js 环境可用（使用 Node.js require 加载 chunk）。
* node-webkit：编译为 Webkit 可用，并且使用 jsonp 去加载分块。支持 Node.js 内置模块和 nw.gui 导入（实验性质）。
* web：编译为类浏览器环境里可用（默认）。
* webworker： 编译成一个 WebWorker 。
* electron-main：编译为 Electron 主进程。
* electron-renderer：编译为 Electron 渲染进程，使用 JsonpTemplatePlugin, FunctionModulePlugin 来为浏览器环境提供目标，使用 NodeTargetPlugin 和 ExternalsPlugin 为 CommonJS 和 Electron 内置模块提供目标。 

> 例如，当 target 设置为 "electron"，webpack 引入多个 electron 特定的变量。

## function
如果传入一个函数，此函数调用时会传入一个 compiler 作为参数。如果以上列表中没有一个预定义的目标(target)符合你的要求，请将其设置为一个函数。
例如，如果你不需要使用以上任何插件：

const options = {
  target: () => undefined
};

或者可以使用你想要指定的插件

const webpack = require("webpack");

const options = {
  target: (compiler) => {
    compiler.apply(
      new webpack.JsonpTemplatePlugin(options.output),
      new webpack.LoaderTargetPlugin("web")
    );
  }
};

