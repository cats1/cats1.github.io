---
title: externals
date: 2017-12-20 12:58:08
tags:
- webpack
- externals
catergories: ['webpack']
---

# 外部扩展(Externals):string array object function regex
externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
> 用户(consumer)，在这里是指，引用了「使用 webpack 打包的 library」 的任何终端用户的应用程序(end user application)。 

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 CommonJS, AMD, 全局变量和 ES2015 模块。外部 library 可能是以下任何一种形式：

    root - 外部 library 能够作为全局变量使用。用户可以通过在 script 标签中引入来实现。这是 externals 的默认设置。
    commonjs - 用户(consumer)应用程序可能使用 CommonJS 模块系统，因此外部 library 应该使用 CommonJS 模块系统，并且应该是一个 CommonJS 模块。
    commonjs2 - 类似上面几行，但导出的是 module.exports.default。
    amd - 类似上面几行，但使用 AMD 模块系统。

externals 接受各种语法，并且按照不同方式去解释他们。

### string
例如：externals: {
  jquery: 'jQuery'
}
externals 中的 jQuery，表示你的 bundle 需要访问全局形式的 jQuery 变量。

### array
externals: {
  subtract: ['./math', 'subtract']
}
subtract: ['./math', 'subtract'] 转换为父子结构，其中 ./math 是父模块，而 bundle 只引用 subtract 变量下的子集。

### object
externals : {
  react: 'react'
}
// 或者
externals : {
  lodash : {
    commonjs: "lodash",
    amd: "lodash",
    root: "_" // indicates global variable
  }
}
// or

externals : {
  subtract : {
    root: ["math", "subtract"]
  }
}

此语法用于描述所有外部 library 可用的访问方式。这里 lodash 这个外部 library 可以在 AMD 和 CommonJS 模块系统中通过 lodash 访问，但在全局变量形式下用 _ 访问。subtract 可以通过全局 math 对象下的属性 subtract 访问（例如 window['math']['subtract']）。

### function
externals: [
  function(context, request, callback) {
    if (/^yourregex$/.test(request)){
      return callback(null, 'commonjs ' + request);
    }
    callback();
  }
]
### regex
externals: /^(jquery|\$)$/i






