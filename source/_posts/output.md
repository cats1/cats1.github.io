---
title: 输出文件：output参数
date: 
tags:
- webpack
- output
---

output参数告诉webpack以什么方式来生成/输出文件。
## 常用配置参数：path、filename、publicPath

### path
path参数表示生成文件的根目录，需要传入一个绝对路径。path参数和后面的filename参数共同组成入口文件的完整路径。
```
path.resolve(__dirname, './dist')
```
### publicPath
publicPath参数表示的是一个URL路径（指向生成文件的根目录），用于生成css/js/图片/字体文件等资源的路径，以确保网页能正确地加载到这些资源。publicPath参数跟path参数的区别是：path参数其实是针对本地文件系统的，而publicPath则针对的是浏览器；因此，publicPath既可以是一个相对路径，如示例中的'../../../../build/'，也可以是一个绝对路径如http://www.xxxxx.com/。一般来说，我还是更推荐相对路径的写法，这样的话整体迁移起来非常方便。那什么时候用绝对路径呢？其实也很简单，当你的html文件跟其它资源放在不同的域名下的时候，就应该用绝对路径了，这种情况非常多见于后端渲染模板的场景。path指定了本地构建地址，publicPath指定的是构建后在html里的路径，一般也是用这个来指定上线后的cdn域名。
webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。
```
publicPath: "https://cdn.example.com/assets/", // CDN（总是 HTTPS 协议）
publicPath: "//cdn.example.com/assets/", // CDN (协议相同)
publicPath: "/assets/", // 相对于服务(server-relative)
publicPath: "assets/", // 相对于 HTML 页面
publicPath: "../assets/", // 相对于 HTML 页面
publicPath: "", // 相对于 HTML 页面（目录相同）
```
### filename
filename属性表示的是如何命名生成出来的入口文件，规则有以下三种：
* [name]，指代入口文件的name，也就是上面提到的entry参数的key，因此，我们可以在name里利用/，即可达到控制文件目录结构的效果。
* [hash]，指代本次编译的一个hash版本，值得注意的是，只要是在同一次编译过程中生成的文件，这个[hash]的值就是一样的；在缓存的层面来说，相当于一次全量的替换。
* [chunkhash]，指代的是当前chunk的一个hash版本，也就是说，在同一次编译中，每一个chunk的hash都是不一样的；而在两次编译中，如果某个chunk根本没有发生变化，那么该chunk的hash也就不会发生变化。这在缓存的层面上来说，就是把缓存的粒度精细到具体某个chunk，只要chunk不变，该chunk的浏览器缓存就可以继续使用。
* [id],模块标识符(module identifier) 
* [query] ,模块的 query，例如，文件名 ? 后面的字符串 
[hash] 和 [chunkhash] 的长度可以使用 [hash:16]（默认为20）来指定。或者，通过指定output.hashDigestLength 在全局配置长度。

## 其他配置参数
### auxiliaryComment : string|object
在和 output.library 和 output.libraryTarget 一起使用时，此选项允许用户向导出容器(export wrapper)中插入注释。要为 libraryTarget 每种类型都插入相同的注释，将 auxiliaryComment 设置为一个字符串：
output: {
  library: "someLibName",
  libraryTarget: "umd",
  filename: "someLibName.js",
  auxiliaryComment: "Test Comment"
}
### chunkFilename: string
此选项决定了非入口(non-entry) chunk 文件的名称。chunkFilename参数与filename参数类似，都是用来定义生成文件的命名方式的，只不过，chunkFilename参数指定的是除入口文件外的chunk（这些chunk通常是由于webpack对代码的优化所形成的，比如因应实际运行的情况来异步加载）的命名。「附加分块(additional chunk)」的文件名模板
```
chunkFilename: '[id].js'
chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)
```
### chunkLoadTimeout: integer
chunk 请求到期之前的毫秒数，默认为 120 000。从 webpack 2.6.0 开始支持此选项。
### crossOriginLoading :boolean | string
只用于 target 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。
启用 cross-origin 属性 加载 chunk。以下是可接收的值……
* crossOriginLoading: false - 禁用跨域加载（默认）
* crossOriginLoading: "anonymous" - 不带凭据(credential)启用跨域加载
* crossOriginLoading: "use-credentials" - 带凭据(credential)启用跨域加载 with credentials

### devtoolModuleFilenameTemplate : string | function(info)
此选项仅在 「devtool 使用了需要模块名称的选项」时使用。
自定义每个 source map 的 sources 数组中使用的名称。可以通过传递模板字符串(template string)或者函数来完成。例如，当使用 devtool: 'eval'，默认值是：
devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[loaders]"
当使用一个函数，同样的选项要通过 info 参数并使用驼峰式(camel-cased)：

devtoolModuleFilenameTemplate: info => {
  return `webpack:///${info.resourcePath}?${info.loaders}`
}

如果多个模块产生相同的名称，使用 output.devtoolFallbackModuleFilenameTemplate 来代替这些模块。
### devtoolFallbackModuleFilenameTemplate

当上面的模板字符串或函数产生重复时使用的备用内容。
### devtoolLineToLine
``` bash
避免使用此选项，因为它们已废弃，并将很快删除。 it is deprecated and will soon be removed.
```
对所有或某些模块启用「行到行映射(line to line mapping)」。这将生成基本的源映射(source map)，即生成资源(generated source)的每一行，映射到原始资源(original source)的同一行。这是一个性能优化点，并且应该只需要输入行(input line)和生成行(generated line)相匹配时才使用。
传入 boolean 值，对所有模块启用或禁用此功能（默认 false）。对象可有 test, include, exclude 三种属性。例如，对某个特定目录中所有 javascript 文件启用此功能：
devtoolLineToLine: { test: /\.js$/, include: 'src/utilities' }
### hashDigest
在生成 hash 时使用的编码方式，默认为 'hex'。支持 Node.js hash.digest 的所有编码。
### hashDigestLength
散列摘要的前缀长度，默认为 20。
### hashFunction
散列算法，默认为 'md5'。支持 Node.JS crypto.createHash 的所有功能。
### hashSalt
一个可选的加盐值，通过 Node.JS hash.update 来更新哈希。
### hotUpdateChunkFilename: string
自定义热更新 chunk 的文件名。占位符只能是 [id] 和 [hash]，默认值是：
hotUpdateChunkFilename: "[id].[hash].hot-update.js"
这里没有必要修改它。
HMR 分块」的文件名模板
### hotUpdateMainFilename: string
自定义热更新的主文件名(main filename)。占位符只能是 [hash]，默认值是：
hotUpdateMainFilename: "[hash].hot-update.json"
这里没有必要修改它。
### hotUpdateFunction: function
只在 target 是 web 时使用，用于加载热更新(hot update)的 JSONP 函数。
JSONP 函数用于异步加载(async load)热更新(hot-update) chunk。
### jsonpFunction : string
只在 target 是 web 时使用，用于按需加载(load on-demand) chunk 的 JSONP 函数。JSONP 函数用于异步加载(async load) chunk，或者拼接多个初始 chunk(CommonsChunkPlugin, AggressiveSplittingPlugin)。如果使用了 output.library 选项，library 名称时自动追加的。
### library 与 libraryTarget : String
library导出库(exported library)的名称，libraryTarget导出库(exported library)的类型。
libraryTarget:
* umd 通用模块定义
* umd2 通用模块定义
* commonjs2 exported with module.exports
* commonjs-module 使用 module.exports 导出
* commonjs 作为 exports 的属性导出
* amd 使用 AMD 定义方法来定义
* this 在 this 上设置属性
* var 变量定义于根作用域下
* assign 盲分配(blind assignment)
* window 在 window 对象上设置属性
* global property set to global object
* jsonp jsonp wrapper

### libraryExport : string or string[]
since webpack 3.0.0
libraryExport: ["MyModule", "MySubModule"]
===》 var MySubModule = _entry_return_.MyModule.MySubModule;

###  pathinfo: true, // boolean
在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 false，并且不应该用于生产环境(production)，但是对阅读开发环境(development)中的生成代码(generated code)极其有用。注意，这些注释也会被添加至经过 tree shaking 后生成的 bundle 中。

### sourceMapFilename ： string
此选项会向硬盘写入一个输出文件，只在 devtool 启用了 SourceMap 选项时才使用。配置 source map 的命名方式。默认使用 "[file].map"。可以使用 #output-filename 中的 [name], [id], [hash] 和 [chunkhash] 替换符号。除此之外，还可以使用以下替换符号。[file] 占位符会被替换为原始文件的文件名。我们建议只使用 [file] 占位符，因为其他占位符在非 chunk 文件(non-chunk files)生成的 SourceMap 时不起作用。
### sourcePrefix ： string
修改输出 bundle 中每行的前缀。
sourcePrefix: "\t"
注意，默认情况下使用空字符串。使用一些缩进会看起来更美观，但是可能导致多行字符串中的问题。
### strictModuleExceptionHandling ： boolean
如果一个模块是在 require 时抛出异常，告诉 webpack 从模块实例缓存(require.cache)中删除这个模块。
出于性能原因，默认为 false。
当设置为 false 时，该模块不会从缓存中删除，这将造成仅在第一次 require 调用时抛出异常（会导致与 node.js 不兼容）。
将 strictModuleExceptionHandling 设置为 false，只有第一个 require 抛出异常：
// with strictModuleExceptionHandling = false
require("module") // <- 抛出
require("module") // <- 不抛出
相反，将 strictModuleExceptionHandling 设置为 true，这个模块所有的 require 都抛出异常：
// with strictModuleExceptionHandling = true
require("module") // <- 抛出
require("module") // <- 仍然抛出

### umdNamedDefine ： boolean
当使用了 libraryTarget: "umd"，设置：
umdNamedDefine: true
会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。




