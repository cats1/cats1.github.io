(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{451:function(a,t,r){"use strict";r.r(t);var s=r(42),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("[TOC]")]),a._v(" "),r("h2",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),r("h3",{attrs:{id:"基本语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),r("h3",{attrs:{id:"数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[a._v("#")]),a._v(" 数据类型")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("数值")]),a._v("：转为相应的字符串。")]),a._v(" "),r("li",[r("strong",[a._v("字符串")]),a._v("：转换后还是原来的值。")]),a._v(" "),r("li",[r("strong",[a._v("布尔值")]),a._v("："),r("code",[a._v("true")]),a._v("转为字符串"),r("code",[a._v('"true"')]),a._v("，"),r("code",[a._v("false")]),a._v("转为字符串"),r("code",[a._v('"false"')]),a._v("。")]),a._v(" "),r("li",[r("strong",[a._v("undefined")]),a._v("：转为字符串"),r("code",[a._v('"undefined"')]),a._v("。")]),a._v(" "),r("li",[r("strong",[a._v("null")]),a._v("：转为字符串"),r("code",[a._v('"null"')]),a._v("。")])]),a._v(" "),r("ol",[r("li",[a._v("先调用对象自身的"),r("code",[a._v("toString")]),a._v("方法。如果返回原始类型的值，则对该值使用"),r("code",[a._v("String")]),a._v("函数，不再进行以下步骤。")]),a._v(" "),r("li",[a._v("如果"),r("code",[a._v("toString")]),a._v("方法返回的是对象，再调用原对象的"),r("code",[a._v("valueOf")]),a._v("方法。如果"),r("code",[a._v("valueOf")]),a._v("方法返回原始类型的值，则对该值使用"),r("code",[a._v("String")]),a._v("函数，不再进行以下步骤。")]),a._v(" "),r("li",[a._v("如果"),r("code",[a._v("valueOf")]),a._v("方法返回的是对象，就报错。")])]),a._v(" "),r("ul",[r("li",[r("code",[a._v("undefined")])]),a._v(" "),r("li",[r("code",[a._v("null")])]),a._v(" "),r("li",[r("code",[a._v("-0")]),a._v("或"),r("code",[a._v("+0")])]),a._v(" "),r("li",[r("code",[a._v("NaN")])]),a._v(" "),r("li",[r("code",[a._v("''")]),a._v("（空字符串）")])]),a._v(" "),r("h3",{attrs:{id:"数值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数值"}},[a._v("#")]),a._v(" 数值")]),a._v(" "),r("h3",{attrs:{id:"字符串"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[a._v("#")]),a._v(" 字符串")]),a._v(" "),r("h3",{attrs:{id:"对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[a._v("#")]),a._v(" 对象")]),a._v(" "),r("h3",{attrs:{id:"数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),r("h3",{attrs:{id:"函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),r("h3",{attrs:{id:"运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[a._v("#")]),a._v(" 运算符")]),a._v(" "),r("h3",{attrs:{id:"数据类型转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[a._v("#")]),a._v(" 数据类型转换")]),a._v(" "),r("h3",{attrs:{id:"错误处理机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误处理机制"}},[a._v("#")]),a._v(" 错误处理机制")]),a._v(" "),r("h3",{attrs:{id:"编程风格"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编程风格"}},[a._v("#")]),a._v(" 编程风格")]),a._v(" "),r("h2",{attrs:{id:"标准库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标准库"}},[a._v("#")]),a._v(" 标准库")]),a._v(" "),r("h3",{attrs:{id:"object对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object对象"}},[a._v("#")]),a._v(" Object对象")]),a._v(" "),r("h3",{attrs:{id:"array对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array对象"}},[a._v("#")]),a._v(" Array对象")]),a._v(" "),r("h3",{attrs:{id:"包装对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包装对象"}},[a._v("#")]),a._v(" 包装对象")]),a._v(" "),r("h3",{attrs:{id:"number对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#number对象"}},[a._v("#")]),a._v(" Number对象")]),a._v(" "),r("h3",{attrs:{id:"string对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string对象"}},[a._v("#")]),a._v(" String对象")]),a._v(" "),r("h3",{attrs:{id:"math对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#math对象"}},[a._v("#")]),a._v(" Math对象")]),a._v(" "),r("h3",{attrs:{id:"date对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#date对象"}},[a._v("#")]),a._v(" Date对象")]),a._v(" "),r("h3",{attrs:{id:"regexp对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regexp对象"}},[a._v("#")]),a._v(" RegExp对象")]),a._v(" "),r("h3",{attrs:{id:"json对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#json对象"}},[a._v("#")]),a._v(" JSON对象")]),a._v(" "),r("h3",{attrs:{id:"console对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#console对象"}},[a._v("#")]),a._v(" console对象")]),a._v(" "),r("h3",{attrs:{id:"属性描述对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性描述对象"}},[a._v("#")]),a._v(" 属性描述对象")]),a._v(" "),r("h2",{attrs:{id:"面向对象编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程"}},[a._v("#")]),a._v(" 面向对象编程")]),a._v(" "),r("h3",{attrs:{id:"this-关键字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#this-关键字"}},[a._v("#")]),a._v(" this 关键字")]),a._v(" "),r("h3",{attrs:{id:"prototype-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prototype-对象"}},[a._v("#")]),a._v(" prototype 对象")]),a._v(" "),r("h3",{attrs:{id:"object-对象与继承"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-对象与继承"}},[a._v("#")]),a._v(" Object 对象与继承")]),a._v(" "),r("h3",{attrs:{id:"面向对象编程的模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程的模式"}},[a._v("#")]),a._v(" 面向对象编程的模式")]),a._v(" "),r("h2",{attrs:{id:"语法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),r("h3",{attrs:{id:"异步操作概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步操作概述"}},[a._v("#")]),a._v(" 异步操作概述")]),a._v(" "),r("h3",{attrs:{id:"定时器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[a._v("#")]),a._v(" 定时器")]),a._v(" "),r("h3",{attrs:{id:"promise对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise对象"}},[a._v("#")]),a._v(" Promise对象")]),a._v(" "),r("h3",{attrs:{id:"严格模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[a._v("#")]),a._v(" 严格模式")]),a._v(" "),r("h2",{attrs:{id:"dom-模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom-模型"}},[a._v("#")]),a._v(" DOM 模型")]),a._v(" "),r("h3",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),r("h3",{attrs:{id:"document-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#document-节点"}},[a._v("#")]),a._v(" Document 节点")]),a._v(" "),r("h3",{attrs:{id:"element-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#element-节点"}},[a._v("#")]),a._v(" Element 节点")]),a._v(" "),r("h3",{attrs:{id:"属性的操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性的操作"}},[a._v("#")]),a._v(" 属性的操作")]),a._v(" "),r("h3",{attrs:{id:"text节点和documentfragment节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#text节点和documentfragment节点"}},[a._v("#")]),a._v(" Text节点和DocumentFragment节点")]),a._v(" "),r("h3",{attrs:{id:"事件模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件模型"}},[a._v("#")]),a._v(" 事件模型")]),a._v(" "),r("h3",{attrs:{id:"事件类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[a._v("#")]),a._v(" 事件类型")]),a._v(" "),r("h3",{attrs:{id:"css操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css操作"}},[a._v("#")]),a._v(" CSS操作")]),a._v(" "),r("h3",{attrs:{id:"mutation-observer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mutation-observer"}},[a._v("#")]),a._v(" Mutation Observer")]),a._v(" "),r("h2",{attrs:{id:"浏览器环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境"}},[a._v("#")]),a._v(" 浏览器环境")]),a._v(" "),r("h3",{attrs:{id:"window对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#window对象"}},[a._v("#")]),a._v(" window对象")]),a._v(" "),r("h3",{attrs:{id:"history对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#history对象"}},[a._v("#")]),a._v(" History对象")]),a._v(" "),r("h3",{attrs:{id:"cookie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[a._v("#")]),a._v(" Cookie")]),a._v(" "),r("h3",{attrs:{id:"web-storage-浏览器端数据储存机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-浏览器端数据储存机制"}},[a._v("#")]),a._v(" Web Storage：浏览器端数据储存机制")]),a._v(" "),r("h3",{attrs:{id:"同源政策"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同源政策"}},[a._v("#")]),a._v(" 同源政策")]),a._v(" "),r("h3",{attrs:{id:"ajax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[a._v("#")]),a._v(" Ajax")]),a._v(" "),r("h3",{attrs:{id:"cors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[a._v("#")]),a._v(" CORS")])])}),[],!1,null,null,null);t.default=e.exports}}]);