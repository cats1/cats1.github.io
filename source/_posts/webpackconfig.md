---
title: webpack配置文件
date: 
tags:
- webpack
- webpack.config
---
webpack的配置文件是一个node.js的module，用CommonJS风格来书写，形如：
```
module.exports = {
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}
```
webpack的配置文件并没有固定的命名，也没有固定的路径要求，如果你直接用webpack来执行编译，那么webpack默认读取的将是当前目录下的webpack.config.js。
如果你有其它命名的需要或是你有多份配置文件，可以使用--config参数传入路径：
```
webpack --config ./webpackConfig/dev.config.js
```


