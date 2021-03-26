(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{398:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),n("p",[s._v("https://www.cnblogs.com/it774274680/p/12218420.html")]),s._v(" "),n("h2",{attrs:{id:"方式一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[s._v("#")]),s._v(" 方式一")]),s._v(" "),n("p",[s._v("通过终端指令去启动")]),s._v(" "),n("p",[s._v("首先在终端切换到你的MongoDB的安装目录的bin目录下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 首先在终端切换到你的MongoDB的安装目录的bin目录下\n2. mongod --dbpath C:\\MongoDB\\Server\\4.4\\data\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("blockquote",[n("p",[s._v("注意：这种方式窗口千万不要关闭，否则无法连接，如果对数据库的操作结束，可以打开该控制台通过 "),n("code",[s._v("Ctrl + C")]),s._v(" 关闭。")])]),s._v(" "),n("h2",{attrs:{id:"方式二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[s._v("#")]),s._v(" 方式二")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mongod -f C:\\MongoDB\\Server\\4.4\\bin\\mongo.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"方式三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式三"}},[s._v("#")]),s._v(" 方式三")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("先检查自己的配置信息，如若一切无误后，则使用管理员模式开启cmd，不要直接打开cmd。")])]),s._v(" "),n("li",[n("p",[s._v("然后在cmd中转跳至自己MongoDB的bin目录，使用我的举例是：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('cd` `"C:\\Program Files\\MongoDB\\Server\\3.4\\bin"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("然后cmd写入服务")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mongod --dbpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\data"')]),s._v(" --logpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --install --serviceName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mongod.exe --logpath C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MongoDB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongodb.log  --logappend --dbpath C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongodata --directoryperdb  --serviceName MongoDB --install\n\nmongod --dbpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\mongodata"')]),s._v(" --logpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --install --auth --serviceName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v("\n\nmongod -f C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MongoDB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongo.conf\nmongod --config C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MongoDB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongo.conf --install\nmongod.exe --dbpath c:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongodata\n\n//删除服务\nmongod --logpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --logappend --dbpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\data"')]),s._v(" --directoryperdb --serviceName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --serviceDisplayName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --remove\n//重新安装  注意：去除--directoryperdb 命令\nmongod --logpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --logappend --dbpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\data"')]),s._v(" --serviceName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --serviceDisplayName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --install\n//添加权限启动\nmongod --logpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --logappend --dbpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\MongoDB\\Server'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[s._v("\\4")]),s._v('.4\\data"')]),s._v(" --serviceName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --auth --serviceDisplayName "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --install\n\n\n服务器启动\n // "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、下载 我是直接在local里面创一个mongodb文件夹进行下载和解压\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.9.tgz\n//2、 解压\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mongodb-linux-x86_64-3.2.9.tgz\n//3创建数据文件夹和日志文件等\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p  /usr/local/mongodb/data\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /usr/local/mongodb/mongod.log\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /usr/local/mongodb/mongodb.conf\n//4启动\n//进入你安装的文件夹 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mongodb/mongodb-3.29/bin\n//启动\n./mongod --dbpath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/mongodb-3.29/data --logpath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/mongodb-3.29/mongod.log --logappend  --port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" --fork \n\n./mongod --dbpath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/software/mongodb/data --logpath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/software/mongodb/logs/mongod.log --logappend  --port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" --fork \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("最后是开启服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("net start MongoDB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("开启完可进行简单的测试是否开启")]),s._v(" "),n("p",[s._v("在浏览器中输入"),n("code",[s._v("http://127.0.0.1:27017")]),s._v("，如若显示"),n("strong",[s._v("It looks like you are trying to access MongoDB over HTTP on the native driver port.")]),s._v(" 则开启成功")])]),s._v(" "),n("li",[n("p",[s._v("关闭服务")]),s._v(" "),n("p",[s._v("net stop MongoDB")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);