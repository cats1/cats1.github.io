---
title: 开发中 Server：devServer参数
date: 
tags:
- webpack
- devServer
---

#使用错误提示
## Uncaught Error: [HMR] Hot Module Replacement is disabled

> 在插件中使用new webpack.HotModuleReplacementPlugin() 
 
# devServer:object
通过来自 webpack-dev-server 的这些选项，能够用多种方式改变其行为。
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
## 常用参数配置
### contentBase : boolean string array
告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录：
contentBase: path.join(__dirname, "public")
注意，推荐使用绝对路径。
但是也可以从多个目录提供内容：
contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
禁用 contentBase：
contentBase: false
cli
```
webpack-dev-server --content-base /path/to/content/dir
```
### publicPath
此路径下的打包文件可在浏览器中访问。
假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
可以修改 publicPath，将 bundle 放在一个目录：
publicPath: "/assets/"
你的包现在可以通过 http://localhost:8080/assets/bundle.js 访问。
确保 publicPath 总是以斜杠(/)开头和结尾。 
也可以使用一个完整的 URL。这是模块热替换所必需的。
publicPath: "http://localhost:8080/assets/"
bundle 可以通过 http://localhost:8080/assets/bundle.js 访问。
devServer.publicPath 和 output.publicPath 一样被推荐。
### port
指定要监听请求的端口号：
port: 8080
Usage via the CLI
```
webpack-dev-server --port 8080
```
### compress:boolean
一切服务都启用gzip 压缩：
compress: true
Usage via the CLI
```
webpack-dev-server --compress
```

## host
指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
```
host: "0.0.0.0"
```
Usage via the CLI
```
webpack-dev-server --host 0.0.0.0
```

### hot
启用 webpack 的模块热替换特性：
```
hot: true
```
### public
当使用内联模式(inline mode)并代理 dev-server 时，内联的客户端脚本并不总是知道要连接到什么地方。它会尝试根据 window.location 来猜测服务器的 URL，但是如果失败，你需要这样。
例如，dev-server 被代理到 nginx，并且在 myapp.test 上可用：
public: "myapp.test:80"
cli
```
webpack-dev-server --public myapp.test:80
```
### allowedHosts : array
allowedHosts: [
  'host.com'
]
或
allowedHosts: [
    '.host.com'
]
可匹配 host.com, www.host.com 或*.host.com
cli
```
webpack-dev-server --allowed-hosts .host.com,host2.com
```

### filename
如果 output.filename 设置为 bundle.js ，filename 使用如下：
lazy: true,
filename: "bundle.js"
现在只有在请求 /bundle.js 时候，才会编译 bundle。
filename 在不使用惰性加载时没有效果。 
### headers
在所有响应中添加首部内容：
headers: {
  "X-Custom-Foo": "bar"
}
## 只用于cli
### color
Enables/Disables colors on the console.
```
webpack-dev-server --color
```
### info
Output cli information. It is enabled by default.
```
webpack-dev-server --info=false
```
### stdin
This option closes the server when stdin ends.
```
webpack-dev-server --stdin
```
### progress --只用于命令行工具(CLI)
将运行进度输出到控制台。
```
webpack-dev-server --progress
```
## 其他参数
### after : function
### before:function
Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers, for example:
before(app){
  app.get('/some/path', function(req, res) {
    res.json({ custom: 'response' });
  });
}
### bonjour
This option broadcasts the server via ZeroConf networking on start
bonjour: true
Usage via the CLI
```
webpack-dev-server --bonjour
```

### clientLogLevel:string
当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换(Hot Module Replacement)启用时。这可能显得很繁琐。
clientLogLevel: none || error || warning || info（默认值）
Usage via the CLI
```
webpack-dev-server --client-log-level none
```

### disableHostCheck :boolean
When set to true this option bypasses host checking. THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS rebinding attacks.
disableHostCheck: true
Usage via the CLI
```
webpack-dev-server --disable-host-check
```

### historyApiFallback
当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
```
historyApiFallback: true
```

通过传入一个对象，比如使用 rewrites 这个选项，此行为可进一步地控制：

```
historyApiFallback: {
  rewrites: [
    { from: /^\/$/, to: '/views/landing.html' },
    { from: /^\/subpage/, to: '/views/subpage.html' },
    { from: /./, to: '/views/404.html' }
  ]
}
```
当路径中使用点(dot)（常见于 Angular），你可能需要使用 disableDotRule：
```
historyApiFallback: {
  disableDotRule: true
}
```
Usage via the CLI
```
webpack-dev-server --history-api-fallback
```

## hotOnly
Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
hotOnly: true
Usage via the CLI
```
webpack-dev-server --hot-only
```

## https
默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务：

> https: true

使用以下设置自签名证书，但是你可以提供自己的：
```
https: {
  key: fs.readFileSync("/path/to/server.key"),
  cert: fs.readFileSync("/path/to/server.crt"),
  ca: fs.readFileSync("/path/to/ca.pem"),
}
```
此对象直接传递到 Node.js HTTPS 模块，
Usage via the CLI
```
webpack-dev-server --https
```
To pass your own certificate via the CLI use the following options
```
webpack-dev-server --https --key /path/to/server.key --cert /path/to/server.crt --cacert /path/to/ca.pem
```
## index
The filename that is considered the index file.
index: 'index.htm'


## inline
在 dev-server 的两种不同模式之间切换。默认情况下，应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台。
也可以使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息。切换到 iframe 模式：
inline: false
Usage via the CLI
```
webpack-dev-server --inline=false
```
推荐使用模块热替换的内联模式，因为它包含来自 websocket 的 HMR 触发器。轮询模式可以作为替代方案，但需要一个额外的入口点：'webpack/hot/poll?1000'。 
### lazy
当启用 lazy 时，dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。
lazy: true
> watchOptions 在使用惰性模式时无效。 
如果使用命令行工具(CLI)，请确保内联模式(inline mode)被禁用。

Usage via the CLI
```
webpack-dev-server --lazy
```
### devServer.noInfo 🔑
boolean
启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。

noInfo: true

## open
When open is enabled, the dev server will open the browser.
open: true
Usage via the CLI
```
webpack-dev-server --open
```
## openPage
Specify a page to navigate to when opening the browser.
openPage: '/different/page'
Usage via the CLI
```
webpack-dev-server --open-page "/different/page"
```
## overlay
boolean object

Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors:
overlay: true
If you want to show warnings as well as errors:
overlay: {
  warnings: true,
  errors: true
}
## pfx
When used via the CLI, a path to an SSL .pfx file. If used in options, it should be the bytestream of the .pfx file.
pfx: '/path/to/file.pfx'
Usage via the CLI
```
webpack-dev-server --pfx /path/to/file.pfx
```
## pfxPassphrase
The passphrase to a SSL PFX file.
pfxPassphrase: 'passphrase'
Usage via the CLI
```
webpack-dev-server --pfx-passphrase passphrase
```
## proxy
如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
dev-server 使用了非常强大的 http-proxy-middleware 包。更多高级用法，请查阅其文档。
在 localhost:3000 上有后端服务的话，你可以这样启用代理：
proxy: {
  "/api": "http://localhost:3000"
}
请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users。
如果你不想始终传递 /api ，则需要重写路径：
proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  }
}

默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下：

proxy: {
  "/api": {
    target: "https://other-server.example.com",
    secure: false
  }
}

有时你不想代理所有的请求。可以基于一个函数的返回值绕过代理。

在函数中你可以访问请求体、响应体和代理选项。必须返回 false 或路径，来跳过代理请求。
例如：对于浏览器请求，你想要提供一个 HTML 页面，但是对于 API 请求则保持代理。你可以这样做：

proxy: {
  "/api": {
    target: "http://localhost:3000",
    bypass: function(req, res, proxyOptions) {
      if (req.headers.accept.indexOf("html") !== -1) {
        console.log("Skipping proxy for browser request.");
        return "/index.html";
      }
    }
  }
}

If you want to proxy multiple, specific paths to the same target, you can use an array of one or more objects with a context property:
proxy: [{
  context: ["/auth", "/api"],
  target: "http://localhost:3000",
}]
## quiet
启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
quiet: true
cli
```
webpack-dev-server --quiet
```
## setup
     This option is deprecated in favor of before and will be removed in v3.0.0. 

Here you can access the Express app object and add your own custom middleware to it. For example, to define custom handlers for some paths:

setup(app){
  app.get('/some/path', function(req, res) {
    res.json({ custom: 'response' });
  });
}
## socket
The Unix socket to listen to (instead of a host).
socket: 'socket'
Usage via the CLI
```
webpack-dev-server --socket socket
```
## staticOptions
It is possible to configure advanced options for serving static files from contentBase. See the Express documentation for the possible options. An example:

staticOptions: {
  redirect: false
}

    This only works when using contentBase as a string. 
## stats
This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.

To show only errors in your bundle:

stats: "errors-only"

For more information, see the stats documentation.

    This option has no effect when used with quiet or noInfo


## useLocalIp
This option lets the browser open with your local IP.
useLocalIp: true
Usage via the CLI
```
webpack-dev-server --useLocalIp
```
## watchContentBase
Tell the server to watch the files served by the devServer.contentBase option. File changes will trigger a full page reload.
watchContentBase: true
It is disabled by default.
Usage via the CLI
```
webpack-dev-server --watch-content-base
```
## watchOptions 
与监视文件相关的控制选项。
webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询：
watchOptions: {
  poll: true
}
如果这对文件系统来说太重了的话，你可以修改间隔时间（以毫秒为单位），将其设置为一个整数。
