(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{402:function(s,e,a){"use strict";a.r(e);var t=a(42),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文档增删改查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档增删改查"}},[s._v("#")]),s._v(" 文档增删改查")]),s._v(" "),a("p",[s._v("在MongoDB中文档是指多个键及其关联的值有序地放置在一起就是文档，其实指的就是数据。")]),s._v(" "),a("p",[s._v("MongoDB中的文档地数据结构和JSON基本一样，所有存储在集合中地数据都是BSON。")]),s._v(" "),a("h2",{attrs:{id:"新增文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增文档"}},[s._v("#")]),s._v(" 新增文档")]),s._v(" "),a("h3",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[s._v("#")]),s._v(" insert")]),s._v(" "),a("p",[s._v("此方法是插入文档最常用的方法，可以插入单条或多条文档。")]),s._v(" "),a("p",[s._v("语法格式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.collection.insert(\n<document or documents>,\n{\n\twriteConcern:<document>,\n\tordered:<boolean>\n}\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("参数说明：")]),s._v(" "),a("p",[s._v("document or documents：一条文档或多条文档")]),s._v(" "),a("ul",[a("li",[s._v("一条：{doc}")]),s._v(" "),a("li",[s._v("多条：[{doc1},{doc2}...]")])]),s._v(" "),a("p",[s._v("writeConcern：可选参数，表示是否使用写入策略，该策略较为复杂，这里暂不讨论")]),s._v(" "),a("p",[s._v("ordered：是否为有序插入，默认为true")]),s._v(" "),a("ul",[a("li",[s._v("true：文档中有一个发生错误，mongodb将不再继续插入后续文档")]),s._v(" "),a("li",[s._v("false：当文档有一个发生错误，不会影响后续文档地插入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.user.insert(\n[{ 'name':'wj','age':23},{'name':'zhangsan','age':20}]\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110165048.png",alt:"image-20210110165048522"}})]),s._v(" "),a("h3",{attrs:{id:"save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[s._v("#")]),s._v(" save")]),s._v(" "),a("p",[s._v("save也可以插入一条或多条文档，但是insert方法插入主键相同的文档时会报错，而使用save方法插入主键相同的文档时则会覆盖原文档。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.collection.save(\n<document or documents >,\n{\n\twriteConcern:<document>\n}\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"insertone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertone"}},[s._v("#")]),s._v(" insertOne")]),s._v(" "),a("p",[s._v("insertOne只能插入一条文档，如果使用该方法插入多条文档，则mongodb只会新增第一条文档。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.collection.insertOne(\n<document>,\n{\n\twriteConcern:<document>\n}\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"insertmany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertmany"}},[s._v("#")]),s._v(" insertMany")]),s._v(" "),a("p",[s._v("该方法可以插入多个文档，语法与insert方法一样，插入成功后，会返回插入文档的主键。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110165645.png",alt:"image-20210110165645134"}})]),s._v(" "),a("p",[s._v("注意，使用insertMany插入单条文档，也必须用中括号括起来，否则报错。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110170041.png",alt:"image-20210110170041454"}})]),s._v(" "),a("h2",{attrs:{id:"变量定义和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量定义和使用"}},[s._v("#")]),s._v(" 变量定义和使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("test_user=({ 'name':'wj','age':23})\ndb.user.insert(test_user)\ntest_user2=([{ 'name':'wj','age':23},{ 'name':'wj2','age':24}])\ndb.user.insertMany(test_user2)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110170615.png",alt:"image-20210110170615689"}})]),s._v(" "),a("h2",{attrs:{id:"查询文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询文档"}},[s._v("#")]),s._v(" 查询文档")]),s._v(" "),a("h3",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" find")]),s._v(" "),a("p",[s._v("语法格式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.collection.find(<query>,<projection>);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参数说明：")]),s._v(" "),a("ul",[a("li",[s._v("如果不指定参数（参数为空，则查询该集合中所有文档）")]),s._v(" "),a("li",[s._v("query：查询条件")]),s._v(" "),a("li",[s._v('projection：该参数可以指定查询结果中需要显示的字段，设置为1，表示显示，为0，则不显示。"_id"字段默认显示。当设置"_id"为1时，其他字段必须为1，否则报错。')])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110172614.png",alt:"image-20210110172614076"}})]),s._v(" "),a("p",[s._v("查询name等于zhangsan,age等于20的文档：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.user.find({'name':'zhangsan','age':20})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110172829.png",alt:"image-20210110172829459"}})]),s._v(" "),a("h2",{attrs:{id:"比较操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较操作符"}},[s._v("#")]),s._v(" 比较操作符")]),s._v(" "),a("ul",[a("li",[s._v("小于 $lt")]),s._v(" "),a("li",[s._v("小于等于 $lte")]),s._v(" "),a("li",[s._v("大于 $gt")]),s._v(" "),a("li",[s._v("大于等于 $gte")]),s._v(" "),a("li",[s._v("不等于$ne")]),s._v(" "),a("li",[s._v("等于 $eq")]),s._v(" "),a("li",[s._v("包含 $in")]),s._v(" "),a("li",[s._v("不包含 $nin")])]),s._v(" "),a("p",[s._v("查询age小于22的文档")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.user.find({'age':{'$lt':22}})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询age大于等于22的文档")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.user.find({'age':{'$gte':22}})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询age不等于23的文档：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.user.find({'age':{'$ne':23}})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110173337.png",alt:"image-20210110173337445"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);