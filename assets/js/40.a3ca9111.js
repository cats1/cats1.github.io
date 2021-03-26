(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{403:function(s,a,n){"use strict";n.r(a);var e=n(42),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mongodb-集合管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-集合管理"}},[s._v("#")]),s._v(" MongoDB：集合管理")]),s._v(" "),n("p",[s._v("MongoDB中的集合（Collection）是一组文档的集，相当于关系型数据库中的表。")]),s._v(" "),n("h2",{attrs:{id:"创建集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建集合"}},[s._v("#")]),s._v(" 创建集合")]),s._v(" "),n("p",[s._v("MongoDB中使用db.createCollection()函数来创建集合")]),s._v(" "),n("p",[s._v("语法格式，name：集合名，options：对集合的约束")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.createCollection(name,options);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("options常用参数说明：")]),s._v(" "),n("ul",[n("li",[s._v("capped：默认为false，设置为true时，则表示创建固定大小的集合，必须搭配参数size使用")]),s._v(" "),n("li",[s._v("size：此参数必须搭配capped参数使用，用来指定固定集合的大小，当文档超过设置最大值，mongodb会自动删除旧文档为新文档腾出空间")]),s._v(" "),n("li",[s._v("max：用于限制固定集合中可存放的文档数，size参数会优先于此参数")]),s._v(" "),n("li",[s._v("autoIndexId：当为false时，则不会自动将'_id'字段创建为索引。在4.0版本以后，不能在\"local\"以外的数据库中设置此选项，且该属性被标注为deprecated。")])]),s._v(" "),n("p",[s._v("查询当前库中的所有的集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("show collections;\n# show tables; 也行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110152327.png",alt:"image-20210110152319951"}})]),s._v(" "),n("p",[s._v("此外，往mongodb中不存在的集合中插入一条数据，mongodb会默认创建该集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.tb_users2.insert({'name':'wj','age':23});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110153211.png",alt:"image-20210110153211122"}})]),s._v(" "),n("h2",{attrs:{id:"查看集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看集合"}},[s._v("#")]),s._v(" 查看集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("show tables;\nshow collections;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查看集合详细信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('db.集合名.stats();\n\n#以下为详细信息（部分内容用省略）\n{\n        "ns" : "admin.tb_users2",# 数据库名.集合名\n        "size" : 48,#文档的字节数\n        "count" : 1,#文档个数\n        "avgObjSize" : 48,#平均字节数\n        "storageSize" : 20480,\n        "capped" : false,#是否为固定集合（固定大小集合）\n        "wiredTiger" : {\n                "metadata" : {\n                        "formatVersion" : 1\n                },\n                "creationString" : .....,\n                "type" : "file",\n                "uri" : "statistics:table:collection-4--6828561572677876910",\n                "LSM" : {\n                },\n                "block-manager" : {\n                },\n                "btree" : {\n                },\n                "cache" : {\n                },\n                "cache_walk" : {\n                },\n                "compression" : {\n                },\n                "cursor" : {\n                },\n                "reconciliation" : {\n                },\n                "session" : {\n                        "object compaction" : 0\n                },\n                "transaction" : {\n                        "update conflicts" : 0\n                }\n        },\n        "nindexes" : 1,#索引数目\n        "indexBuilds" : [ ],\n        "totalIndexSize" : 20480,\n        "indexSizes" : {\n                "_id_" : 20480\n        },\n        "scaleFactor" : 1,\n        "ok" : 1\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h2",{attrs:{id:"删除集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除集合"}},[s._v("#")]),s._v(" 删除集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.集合名.drop();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/wj204811/wj204811/raw/master/img/20210110162534.png",alt:"image-20210110162534068"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);