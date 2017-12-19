---
title: module配置：module参数
date: 
tags:
- webpack
- module
---

# 模块配置
各种Loader配置
## noParse :不解析这里的模块
RegExp | [RegExp]
RegExp | [RegExp] | function（从 webpack 3.0.0 开始）
防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。

```
noParse: /jquery|lodash/
// 从 webpack 3.0.0 开始
noParse: function(content) {
  return /jquery|lodash/.test(content);
}
```

## rules: array
创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。
规则数组，当规则匹配时使用。
### rule
每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。
#### Rule 条件

条件有两种输入值：

* resource：请求文件的绝对路径。它已经根据 resolve 规则解析。
* issuer: 被请求资源(requested the resource)的模块文件的绝对路径。是导入时的位置。

例如: 从 app.js 导入 './style.css'，resource 是 /path/to/style.css. issuer 是 /path/to/app.js。
在规则中，属性 test, include, exclude 和 resource 对 resource 匹配，并且属性 issuer 对 issuer 匹配。
当使用多个条件时，所有条件都匹配。

> 小心！resource 是文件的解析路径，这意味着符号链接的资源是真正的路径，而不是符号链接位置。在使用工具来符号链接包的时候（如 npm link）比较好记，像 /node_modules/ 等常见条件可能会不小心错过符号链接的文件。 

#### Rule 结果

规则结果只在规则条件匹配时使用。
规则有两种输入值：
* 应用的 loader：应用在 resource 上的 loader 数组。
* Parser 选项：用于为模块创建解析器的选项对象。这些属性会影响 loader：loader, options, use。也兼容这些属性：query, loaders。enforce 属性会影响 loader 种类。不论是普通的，前置的，后置的 loader。parser 属性会影响 parser 选项。

#### 嵌套的 Rule
可以使用属性 rules 和 oneOf 指定嵌套规则。
这些规则用于在规则条件(rule condition)匹配时进行取值。
#### 常用rule
##### test
Rule.test 是 Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。参数用来指示当前配置项针对哪些资源，该值应是一个条件值(condition)。

##### resource
条件会匹配 resource。既可以提供 Rule.resource 选项，也可以使用快捷选项 Rule.test，Rule.exclude 和 Rule.include。
##### resourceQuery
与资源查询匹配的条件。此选项用于对请求字符串的查询部分进行测试（即从问号开始）。 如果使用 import Foo from './foo.css?inline', 使用以下匹配:
```
{
  test: /.css$/,
  resourceQuery: /inline/,
  use: 'url-loader'
}
```
##### use
应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。
传递字符串（如：use: [ "style-loader" ]）是 loader 属性的简写方式（如：use: [ { loader: "style-loader "} ]）。
```
use: [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'less-loader',
    options: {
      noIeCompat: true
    }
  }
]
```
##### enforce
可能的值有："pre" | "post",指定 loader 种类。没有值表示是普通 loader。
还有一个额外的种类"行内 loader"，loader 被应用在 import/require 行内。
所有 loader 通过 前置, 行内, 普通, 后置 排序，并按此顺序使用。
所有普通 loader 可以通过在请求中加上 ! 前缀来忽略（覆盖）。
所有普通和前置 loader 可以通过在请求中加上 -! 前缀来忽略（覆盖）。
所有普通，后置和前置 loader 可以通过在请求中加上 !! 前缀来忽略（覆盖）。
不应该使用行内 loader 和 ! 前缀，因为它们是非标准的。它们可在由 loader 生成的代码中使用。
##### exclude
Rule.exclude 是 Rule.resource.exclude 的简写。如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。
##### include
Rule.include 是 Rule.resource.include 的简写。如果你提供了 Rule.include 选项，就不能再提供 Rule.resource。
##### issuer
A Condition to match against the module that issued the request. In the following example, the issuer for the a.js request would be the path to the index.js file.
eg:
> import A from './a.js'

##### loader
Rule.loader 是 Rule.use: [ { loader } ] 的简写。
##### loaders
由于需要支持 Rule.use，此选项已废弃。Rule.loaders 是 Rule.use 的别名。
##### oneOf
规则数组，当规则匹配时，只使用第一个匹配规则。
```
{
  test: /.css$/,
  oneOf: [
    {
      resourceQuery: /inline/, // foo.css?inline
      use: 'url-loader'
    },
    {
      resourceQuery: /external/, // foo.css?external
      use: 'file-loader'
    }
  ]
}
```
##### options/query
Rule.options 和 Rule.query 是 Rule.use: [ { options } ] 的简写。
由于需要支持 Rule.options 和 UseEntry.options，Rule.use，Rule.query 已废弃。
##### parser
解析选项对象。所有应用的解析选项都将合并。
解析器(parser)可以查阅这些选项，并相应地禁用或重新配置。大多数默认插件，会如下解释值：
* 将选项设置为 false，将禁用解析器。
* 将选项设置为 true，或不修改将其保留为 undefined，可以启用解析器。
然而，一些解析器(parser)插件可能不光只接收一个布尔值。例如，内部的 NodeStuffPlugin 差距，可以接收一个对象，而不是 true，来为特定的规则添加额外的选项。
示例（默认的插件解析器选项）：
```
parser: {
  amd: false, // 禁用 AMD
  commonjs: false, // 禁用 CommonJS
  system: false, // 禁用 SystemJS
  harmony: false, // 禁用 ES2015 Harmony import/export
  requireInclude: false, // 禁用 require.include
  requireEnsure: false, // 禁用 require.ensure
  requireContext: false, // 禁用 require.context
  browserify: false, // 禁用特殊处理的 browserify bundle
  requireJs: false, // 禁用 requirejs.*
  node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
  node: {...} // 在模块级别(module level)上重新配置 node 层(layer)
}
```

#### 条件
条件可以是这些之一：

    字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
    正则表达式：test 输入值。
    函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
    条件数组：至少一个匹配条件。
    对象：匹配所有属性。每个属性都有一个定义行为。

{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

{ include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

{ exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

{ and: [Condition] }：必须匹配数组中的所有条件

{ or: [Condition] }：匹配数组中任何一个条件

{ not: [Condition] }：必须排除这个条件
#### UseEntry： object
必须有一个 loader 属性是字符串。它使用 loader 解析选项（resolveLoader），相对于配置中的 context 来解析。
可以有一个 options 属性为字符串或对象。值可以传递到 loader 中，将其理解为 loader 选项。
由于兼容性原因，也可能有 query 属性，它是 options 属性的别名。使用 options 属性替代。
Example:
```
{
  loader: "css-loader",
  options: {
    modules: true
  }
}
```
