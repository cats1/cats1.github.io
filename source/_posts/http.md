---
title: http
date: 2017-12-18 19:31:04
tags:
- nodejs
- http模块
categories:
- nodejs
---

# nodejs的http模块
nodejs提供了http模块，自身就可以用来构建服务器，而且http模块是由C++实现的，性能可靠。

## createServer
```
var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.write("hello nodejs");
    res.end();
}).listen(3000);
```

打开浏览器，输入localhost:3000我们就可以看到屏幕上的hello nodejs了，这表明这个最简单的nodejs服务器已经搭建成功了。

## nodejs中的http模块中封装了一个HTPP服务器和一个简易的HTTP客户端，http.Server是一个基于事件的http服务器，http.request则是一个http客户端工具，用于向http服务器发起请求。而上面的createServer方法中的参数函数中的两个参数req和res则是分别代表了请求对象和响应对象。其中req是http.IncomingMessage的实例，res是http.ServerResponse的实例

### http服务器
createServer方法返回了一个http.Server对象，这其实是一个创建http服务的捷径。
#### 1、http.Server的事件
直接创建一个http.Server对象，然后为其添加request事件监听，其实也就说createServer方法其实本质上也是为http.Server对象添加了一个request事件监听。
http.Server是一个基于事件的服务器，她是继承自EventEmitter，事实上，nodejs中大部分模块都继承自EventEmitter，包括fs、net等模块，这也是为什么说nodejs基于事件驱动。
* request：当客户端请求到来时，该事件被触发，提供两个参数req和res，表示请求和响应信息，是最常用的事件。
* connection：当TCP连接建立时，该事件被触发，提供一个参数socket，是net.Socket的实例。
* close：当服务器关闭时，触发事件（注意不是在用户断开连接时）。

```
var http=require("http");
var server=new http.Server();

server.on("request",function(req,res){
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.write("hello nodejs");
    res.end();
});
server.listen(3000);
```

# 二、http客户端
http模块提供了两个函数http.request和http.get，功能是作为客户端向http服务器发起请求。