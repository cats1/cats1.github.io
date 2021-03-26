(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{392:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[a._v("#")]),a._v(" mongodb")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/method/js-user-management/",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考文档"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mongoing.com/archives/docs/mongodb%e5%88%9d%e5%ad%a6%e8%80%85%e6%95%99%e7%a8%8b/%e5%a6%82%e4%bd%95%e5%9c%a8mongodb%e4%b8%ad%e5%88%9b%e5%bb%ba%e7%94%a8%e6%88%b7%e5%b9%b6%e6%b7%bb%e5%8a%a0%e8%a7%92%e8%89%b2",target:"_blank",rel:"noopener noreferrer"}},[a._v("中文参考文档"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.mongodb.org.cn/manual/104.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("中文参考文档1"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("p",[a._v("关于 Mongodb 4.x")]),a._v(" "),t("p",[a._v("1）3.x 步骤")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("安装\n环境变量配置path\n启动mongodb服务 mongod --dbpath 跟上存储路径开启服务\n再次启动一个客户端：mongo 即可！\n")])])]),t("p",[a._v("注：4.x 与3.x基本相同，但是无需指定存储路径，在安装的时候，要求配置(举例为windows环境下)2 ）"),t("strong",[a._v("4.x 步骤")])]),a._v(" "),t("ul",[t("li",[a._v("安装(可选可视化工具，windows环境下)")]),a._v(" "),t("li",[a._v("环境变量Path配置")]),a._v(" "),t("li",[a._v("直接用 mongo (相关服务直接写入开启任务中)")])]),a._v(" "),t("p",[a._v("https://blog.csdn.net/Tyro_java/article/details/105261282")]),a._v(" "),t("h3",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("h4",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("p",[a._v("启动MongoDB服务")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("net start MongoDB\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("方法一：（该方法缺点每次启动都要输入命令）")]),a._v(" "),t("ol",[t("li",[a._v("打开命令窗口，切换到mongodb安装目录下的“bin”目录中。")]),a._v(" "),t("li",[a._v("启动服务。输入命令：”mongod --dbpath E:\\software\\MongoDB\\data“ 注：--dbpath是指定数据库存放目录，要注意dbpath前有两个“-”。")]),a._v(" "),t("li",[a._v("命令窗口中打印一些启动信息，则表示启动成功。")]),a._v(" "),t("li",[a._v("打开http://localhost:27017/即可看到登录信息，表示mongodb服务已启动成功，关闭命令窗口即可关闭mongodb服务。")])]),a._v(" "),t("p",[a._v("方法二：")]),a._v(" "),t("ol",[t("li",[a._v("打开命令窗口，切换到mongodb安装目录下的“bin”目录中。")]),a._v(" "),t("li",[a._v("输入命令：mongod.exe --logpath E:\\software\\MongoDB\\data\\log\\mongodb.log  --logappend --dbpath E:\\software\\MongoDB\\data --directoryperdb  --serviceName MongoDB --install")]),a._v(" "),t("li",[a._v("开启服务。输入命令“net start MongoDB”。")])]),a._v(" "),t("p",[a._v("方法三:")]),a._v(" "),t("p",[a._v("创建一个配置文件位于 C:\\mongodb\\mongod.cfg，其中指定 systemLog.path 和 storage.dbPath。具体配置内容如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemLog:\n    destination: file\n    path: c:\\data\\log\\mongod.log\nstorage:\n    dbPath: c:\\data\\db\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("输入命令启动")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongod --config ./mongod.cfg\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("strong",[a._v("mongodb.config")])]),a._v(" "),t("blockquote",[t("p",[a._v("dbpath=D:\\MongoDB\\data #数据库路径\nlogpath=D:\\MongoDB\\logs\\mongodb.log #日志输出文件路径\nlogappend=true #错误日志采用追加模式\njournal=true #启用日志文件，默认启用\nquiet=true #过滤掉无用的日志信息，若需要调试使用请设置为false\nport=27017 #端口号 默认为27017")])]),a._v(" "),t("p",[a._v("认证启动：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("/mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dbpath "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MongoDB")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Server")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.4")]),a._v("\\data "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("logpath "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MongoDB")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Server")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.4")]),a._v("\\log\\mongod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("auth "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("logappend "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("fork\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"mongodb初始化创建管理员账户登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb初始化创建管理员账户登录"}},[a._v("#")]),a._v(" MongoDB初始化创建管理员账户登录")]),a._v(" "),t("p",[a._v("查看mongodb服务是否开启：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ps -ef | grep mongod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("管理员角色必须在启用--auth认证参数之前创建，否则会没有操作权限。如果之前已经创建过用户，请先删除。")]),a._v(" "),t("p",[a._v("kill掉mongod服务，重新启动，以noauth模式启动：")]),a._v(" "),t("p",[a._v("mongod --dbpath /var/log/mongodb/ --storageEngine=mmapv1 --smallfiles --logappend --logpath /var/log/mongodb/mongodb.log --noauth --fork")]),a._v(" "),t("p",[a._v("mongo")]),a._v(" "),t("p",[a._v("use admin")]),a._v(" "),t("p",[a._v("db.system.users.remove({}) --\x3e 删除所有用户")]),a._v(" "),t("p",[a._v('db.createUser({ user: "root", pwd: "123456", roles: [ { role: "root", db: "admin"} ]}) --\x3e 创建新用户，设置用户名密码')]),a._v(" "),t("p",[a._v("设置好新的管理员用户，以验证模式，重启mongod服务：")]),a._v(" "),t("p",[a._v('mongo admin -u root -p "123456"')]),a._v(" "),t("p",[a._v("mongo -u accountAdmin01 -p yourpassward --authenticationDatabase products")]),a._v(" "),t("p",[a._v("root是最高权限可以管理所有数据库")]),a._v(" "),t("p",[a._v("创建用户")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.createUser(user, writeConcern)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("blockquote",[t("p",[a._v("user这个文档创建关于用户的身份认证和访问信息；\nwriteConcern这个文档描述保证MongoDB提供写操作的成功报告。")])]),a._v(" "),t("p",[t("strong",[a._v("user文档字段介绍：")])]),a._v(" "),t("blockquote",[t("p",[a._v("user字段，为新用户的名字；\npwd字段，用户的密码；\ncusomData字段，为任意内容，例如可以为用户全名介绍；\nroles字段，指定用户的角色，可以用一个空数组给新用户设定空角色；在roles字段,可以指定内置角色和用户定义的角色。")])]),a._v(" "),t("p",[a._v("​      内置角色")]),a._v(" "),t("ol",[t("li",[a._v("数据库用户角色：read、readWrite;")]),a._v(" "),t("li",[a._v("数据库管理角色：dbAdmin、dbOwner、userAdmin；")]),a._v(" "),t("li",[a._v("集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；")]),a._v(" "),t("li",[a._v("备份恢复角色：backup、restore；")]),a._v(" "),t("li",[a._v("所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase")]),a._v(" "),t("li",[a._v("超级用户角色：root\n// 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）")]),a._v(" "),t("li",[a._v("内部角色：__system\nPS：关于每个角色所拥有的操作权限可以点击上面的内置角色链接查看详情。")])]),a._v(" "),t("p",[t("strong",[a._v("writeConcern")])]),a._v(" "),t("ol",[t("li",[a._v('w选项：允许的值分别是 1、0、大于1的值、"majority"、'),t("tag",{attrs:{set:""}},[a._v("；")])],1),a._v(" "),t("li",[a._v("j选项：确保mongod实例写数据到磁盘上的journal（日志），这可以确保mongd以外关闭不会丢失数据。设置true启用。")]),a._v(" "),t("li",[a._v("wtimeout：指定一个时间限制,以毫秒为单位。wtimeout只适用于w值大于1。")])]),a._v(" "),t("h4",{attrs:{id:"关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[a._v("#")]),a._v(" 关闭")]),a._v(" "),t("p",[a._v("关闭MongoDB服务")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("net stop MongoDB\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"移除-mongodb-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除-mongodb-服务"}},[a._v("#")]),a._v(" 移除 MongoDB 服务")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("C:\\mongodb\\bin\\mongod.exe --remove\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[a._v("#")]),a._v(" 连接")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"linux安装使用mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装使用mongodb"}},[a._v("#")]),a._v(" linux安装使用mongodb")]),a._v(" "),t("h4",{attrs:{id:"启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),t("p",[a._v("方法一：")]),a._v(" "),t("p",[a._v("增加配置文件启动配置文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./mongod -f ./mongodb.conf\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("方法二：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./mongod --dbpath=/data/db  --logpath=/data/logs\n./mongod --dbpath=/data/db  --fork --logpath=/data/logs //使用--fork参数常驻启动\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h4",{attrs:{id:"关闭服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭服务"}},[a._v("#")]),a._v(" 关闭服务")]),a._v(" "),t("p",[a._v("方法一:")]),a._v(" "),t("p",[a._v("进入shell 执行"),t("code",[a._v("db.shutdownServer();")]),a._v("命令")]),a._v(" "),t("p",[a._v("方法二：")]),a._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("MongoDB的数据逻辑结构：文档（document）、集合（collection）、数据库（database）。")]),a._v(" "),t("ul",[t("li",[a._v("文档（document）：由键值对构成，相当于关系数据库中的一行记录。")]),a._v(" "),t("li",[a._v("集合（collection）：多个文档组成一个集合，相当于关系数据库的表。")]),a._v(" "),t("li",[a._v("数据库（database）：多个集合逻辑上组织在一起，就是数据库。")])]),a._v(" "),t("p",[a._v("一个 MongoDB 实例支持多个数据库（database）。\n"),t("img",{attrs:{src:a.$withBase("/mongodb/gb.png"),alt:"dock"}})]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("关系型数据库")]),a._v(" "),t("th",[a._v("mongodb")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("table")]),a._v(" "),t("td",[a._v("collection")])]),a._v(" "),t("tr",[t("td",[a._v("row")]),a._v(" "),t("td",[a._v("document")])]),a._v(" "),t("tr",[t("td",[a._v("column")]),a._v(" "),t("td",[a._v("index")])]),a._v(" "),t("tr",[t("td",[a._v("table joins")]),a._v(" "),t("td",[a._v("populate")])]),a._v(" "),t("tr",[t("td",[a._v("primary key")]),a._v(" "),t("td",[a._v("_id")])])])]),a._v(" "),t("p",[a._v("需要注意的是：")]),a._v(" "),t("ol",[t("li",[a._v("文档中的键/值对是有序的。")]),a._v(" "),t("li",[a._v("文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。")]),a._v(" "),t("li",[a._v("MongoDB区分类型和大小写。")]),a._v(" "),t("li",[a._v("MongoDB的文档不能有重复的键。")]),a._v(" "),t("li",[a._v("文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符。")])]),a._v(" "),t("p",[a._v("文档键命名规范：")]),a._v(" "),t("ul",[t("li",[a._v("键不能含有\\0 (空字符)。这个字符用来表示键的结尾。")]),a._v(" "),t("li",[a._v(".和$有特别的意义，只有在特定环境下才能使用。")]),a._v(" "),t("li",[a._v('以下划线"_"开头的键是保留的(不是严格要求的)')])]),a._v(" "),t("h3",{attrs:{id:"命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令-2"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("h4",{attrs:{id:"创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[a._v("#")]),a._v(" 创建数据库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use dbname //创建数据库\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[a._v("#")]),a._v(" 删除数据库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.dropDatabase()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看所有数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据库"}},[a._v("#")]),a._v(" 查看所有数据库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show dbs\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"显示当前数据库对象或集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示当前数据库对象或集合"}},[a._v("#")]),a._v(" 显示当前数据库对象或集合")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"连接到一个指定的数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接到一个指定的数据库"}},[a._v("#")]),a._v(" 连接到一个指定的数据库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use local //use dbname\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("admin")]),a._v('： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。')]),a._v(" "),t("li",[t("strong",[a._v("local:")]),a._v(" 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合")]),a._v(" "),t("li",[t("strong",[a._v("config")]),a._v(": 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。")])]),a._v(" "),t("h4",{attrs:{id:"创建集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建集合"}},[a._v("#")]),a._v(" 创建集合")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.createCollection(name, options)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("参数说明：")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("name: 要创建的集合名称")]),a._v(" "),t("li",[a._v("options: 可选参数, 指定有关内存大小及索引的选项")])])]),a._v(" "),t("p",[a._v("创建固定集合  mycol，整个集合空间大小 6142800 KB, 文档最大个数为 10000 个。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('db.createCollection("mycol", { capped : true, autoIndexId : true, size : 6142800, max : 10000 } )\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除集合"}},[a._v("#")]),a._v(" 删除集合")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.collection.drop()//collection集合名\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集合"}},[a._v("#")]),a._v(" 查看集合")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show collections\n//or \nshow tables\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"创建文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建文档"}},[a._v("#")]),a._v(" 创建文档")]),a._v(" "),t("p",[a._v("MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.COLLECTION_NAME.insert(document)\n//or\ndb.COLLECTION_NAME.save(document)\ndb.collection.insertOne()\ndb.collection.insertMany() \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("blockquote",[t("ul",[t("li",[a._v("save()：如果 _id 主键存在则更新数据，如果不存在就插入数据。该方法新版本中已废弃，可以使用 "),t("strong",[a._v("db.collection.insertOne()")]),a._v(" 或 "),t("strong",[a._v("db.collection.replaceOne()")]),a._v(" 来代替。")]),a._v(" "),t("li",[a._v("insert(): 若插入的数据主键已经存在，则会抛 "),t("strong",[a._v("org.springframework.dao.DuplicateKeyException")]),a._v(" 异常，提示主键重复，不保存当前数据。")])])]),a._v(" "),t("h4",{attrs:{id:"删除文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文档"}},[a._v("#")]),a._v(" 删除文档")]),a._v(" "),t("h4",{attrs:{id:"修改文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文档"}},[a._v("#")]),a._v(" 修改文档")]),a._v(" "),t("h4",{attrs:{id:"查询文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询文档"}},[a._v("#")]),a._v(" 查询文档")]),a._v(" "),t("p",[a._v("MongoDB 查询数据的语法格式如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db.collection.find(query, projection)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[a._v("query")]),a._v(" ：可选，使用查询操作符指定查询条件")]),a._v(" "),t("li",[t("strong",[a._v("projection")]),a._v(" ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);