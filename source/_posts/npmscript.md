---
title: npmscript
date: 2017-12-20 13:39:21
tags:
- npm
---

# npm
npm 允许在package.json文件里面，使用scripts字段定义脚本命令。
定义在package.json里面的脚本，就称为 npm 脚本。它的优点很多。
* 项目的相关脚本，可以集中在一个地方。
* 不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行npm run test即可。
* 可以利用 npm 提供的很多辅助功能。

## 查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的npm run命令。
> npm run

# npm脚本原理
npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。
比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。
这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。
>   "test": "mocha test"

替换
> "test": "./node_modules/.bin/mocha test"

由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。
npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是0，npm 就认为这个脚本执行失败。

# 通配符
由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。
```
    "lint": "jshint *.js"
    "lint": "jshint **/*.js"
```
上面代码中，*表示任意文件名，**表示任意一层子目录。
如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。
```
"test": "tap test/\*.js"
```


# 传参
向 npm 脚本传入参数，要使用--标明。
例如：
"lint": "jshint **.js"
向上面的npm run lint命令传入参数，必须写成下面这样。
> npm run lint --  --reporter checkstyle > checkstyle.xml

也可以在package.json里面再封装一个命令。
 "lint": "jshint **.js",
 "lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"

# 执行顺序
如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。
如果是并行执行（即同时的平行执行），可以使用&符号。
例如：npm run script1.js & npm run script2.js
如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。
例如：npm run script1.js && npm run script2.js
这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块：script-runner、npm-run-all、redrun。
# 默认值
一般来说，npm 脚本由用户提供。但是，npm 对两个脚本提供了默认值。也就是说，这两个脚本不用定义，就可以直接使用。
```
 "start": "node server.js"，
 "install": "node-gyp rebuild"
```

npm run start的默认值是node server.js，前提是项目根目录下有server.js这个脚本；npm run install的默认值是node-gyp rebuild，前提是项目根目录下有binding.gyp文件。
# 钩子
npm 脚本有pre和post两个钩子。举例来说，build脚本命令的钩子就是prebuild和postbuild。
用户执行npm run build的时候，会自动按照下面的顺序执行。
npm run prebuild && npm run build && npm run postbuild
因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。
```
"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
```
自定义的脚本命令也可以加上pre和post钩子。比如，myscript这个脚本命令，也有premyscript和postmyscript钩子。不过，双重的pre和post无效，比如prepretest和postposttest是无效的。
npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，比如pretest、test、posttest等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的npm scripts命令编写代码。请看下面的例子。

# 简写
四个常用的 npm 脚本有简写形式。

        npm start是npm run start
        npm stop是npm run stop的简写
        npm test是npm run test的简写
        npm restart是npm run stop && npm run restart && npm run start的简写

npm start、npm stop和npm restart都比较好理解，而npm restart是一个复合命令，实际上会执行三个脚本命令：stop、restart、start。具体的执行顺序如下。
        prerestart
        prestop
        stop
        poststop
        restart
        prestart
        start
        poststart
        postrestart
# 变量
npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。
首先，通过npm_package_前缀，npm 脚本可以拿到package.json里面的字段。
获取process.env.npm_package_*
name:process.env.npm_package_name //获取package.json的name
通过环境变量process.env对象，拿到package.json的字段值。如果是 Bash 脚本，可以用$npm_package_name和$npm_package_version取到这两个值。npm_package_前缀也支持嵌套的package.json字段。
# 常用脚本示例
```
// 删除目录
"clean": "rimraf dist/*",

// 本地搭建一个 HTTP 服务
"serve": "http-server -p 9090 dist/",

// 打开浏览器
"open:dev": "opener http://localhost:9090",

// 实时刷新
 "livereload": "live-reload --port 9091 dist/",

// 构建 HTML 文件
"build:html": "jade index.jade > dist/index.html",

// 只要 CSS 文件有变动，就重新执行构建
"watch:css": "watch 'npm run build:css' assets/styles/",

// 只要 HTML 文件有变动，就重新执行构建
"watch:html": "watch 'npm run build:html' assets/html",

// 部署到 Amazon S3
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",

// 构建 favicon
"build:favicon": "node scripts/favicon.js",
```
