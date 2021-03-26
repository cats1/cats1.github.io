(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{415:function(s,e,a){"use strict";a.r(e);var n=a(42),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"koa-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-redis"}},[s._v("#")]),s._v(" koa-redis")]),s._v(" "),a("p",[s._v("在node项目中，koa-redis是koa连接redis的一个工具，koa-generic-session是koa生成session的工具。session存储在redis中，因为redis是以键值对的形式存储数据的。koa-generic-session模块来存储用户信息和登录状态等信息，koa-redis模块来进行登陆状态的持久化，将登陆信息存储在redis中。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install koa-redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("koa-redis")]),s._v(" works with "),a("a",{attrs:{href:"https://github.com/koajs/generic-session",target:"_blank",rel:"noopener noreferrer"}},[s._v("koa-generic-session"),a("OutboundLink")],1),s._v(" (a generic session middleware for koa).")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm i koa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("generic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("session koa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[s._v("#")]),s._v(" 引入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const Redis = require('koa-redis');\nconst Koa_Generic_Session = require('koa-generic-session');\n//session配置，这个app.keys应该是用来加密的秘钥，加密的其实是sessonID，这个sessionId使我们自己命名的，\napp.keys = [ 'keys', 'keykeys' ];\napp.use(\n\tKoa_Generic_Session({\n\t\tkey: 'koa.sid', //cookie的name，默认是koa.sid\n\t\tprefix: 'koa:sess', //redis key的前缀，默认是koa:sess\n\t\tcookie: {\n\t\t\tpath: '/',\n\t\t\thttpOnly: true, //表示key(koa.sid)这个值只能在server端修改，不能在客户端修改\n\t\t\tmaxAge: 24 * 60 * 60 * 1000 //cookie的过期时间，登录的过期时间\n\t\t},\n\t\tttl: 24 * 60 * 60 * 1000, //redis的过期时间，默认和cookie过期时间保持一致\n\t\tstore: new Redis({\n\t\t\tall: `${REDIS_CONF.host}:${REDIS_CONF.port}`\n\t\t})\n\t})\n);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"redis来读取和存储数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis来读取和存储数据"}},[s._v("#")]),s._v(" Redis来读取和存储数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//控制器中引用redis\nconst Redis = require('koa-redis');\nconst Store = new Redis().client;\n//存储\nconst st = await Store.hset('fix', 'name', Match.random());\n//读取\nconst st = await Store.hget('fix','name');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);