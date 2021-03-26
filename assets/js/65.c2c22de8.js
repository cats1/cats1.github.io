(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{428:function(t,a,s){"use strict";s.r(a);var i=s(42),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css问题汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css问题汇总"}},[t._v("#")]),t._v(" css问题汇总")]),t._v(" "),s("h3",{attrs:{id:"使用attr-抓取data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用attr-抓取data"}},[t._v("#")]),t._v(" 使用attr()抓取data-*")]),t._v(" "),s("ul",[s("li",[t._v("要点：在标签上自定义属性data-*，通过attr()获取其内容赋值到content上")]),t._v(" "),s("li",[t._v("场景："),s("em",[s("strong",[t._v("提示框")])])])]),t._v(" "),s("h3",{attrs:{id:"使用-或-美化选项框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-或-美化选项框"}},[t._v("#")]),t._v(" 使用+或~美化选项框")]),t._v(" "),s("h2",{attrs:{id:"盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),s("h3",{attrs:{id:"介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的"}},[t._v("#")]),t._v(" "),s("strong",[t._v("介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？")])]),t._v(" "),s("p",[t._v("标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin\n低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin")]),t._v(" "),s("h3",{attrs:{id:"box-sizing属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing属性"}},[t._v("#")]),t._v(" "),s("strong",[t._v("box-sizing属性？")])]),t._v(" "),s("p",[t._v("用来控制元素的盒子模型的解析模式，默认为content-box\ncontext-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽\nborder-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽")]),t._v(" "),s("h2",{attrs:{id:"css选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css选择器"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS选择器")])]),t._v(" "),s("h3",{attrs:{id:"css选择器有哪些-哪些属性可以继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css选择器有哪些-哪些属性可以继承"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS选择器有哪些？哪些属性可以继承？")])]),t._v(" "),s("p",[t._v('CSS选择器：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 +  p)、子选择器（ul > li）、后代选择器（li  a）、通配符选择器（*）、属性选择器（a[rel="external"]）、伪类选择器（a:hover, li:nth-child）')]),t._v(" "),s("p",[t._v("可继承的属性：font-size, font-family, color")]),t._v(" "),s("p",[t._v("不可继承的样式：border, padding, margin, width, height")]),t._v(" "),s("p",[t._v("优先级（就近原则）：!important > [ id > class > tag ]\n!important 比内联优先级高")]),t._v(" "),s("h3",{attrs:{id:"css优先级算法如何计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css优先级算法如何计算"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS优先级算法如何计算？")])]),t._v(" "),s("p",[t._v("元素选择符：1\nclass选择符：10\nid选择符：100\n元素标签：1000")]),t._v(" "),s("ol",[s("li",[t._v("!important声明的样式优先级最高，如果冲突再进行计算。")]),t._v(" "),s("li",[t._v("如果优先级相同，则选择最后出现的样式。")]),t._v(" "),s("li",[t._v("继承得到的样式的优先级最低。")])]),t._v(" "),s("h3",{attrs:{id:"浏览器是怎样解析css选择器的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎样解析css选择器的"}},[t._v("#")]),t._v(" "),s("strong",[t._v("浏览器是怎样解析CSS选择器的？")])]),t._v(" "),s("p",[t._v("CSS选择器的解析是从右向左解析的。")]),t._v(" "),s("p",[t._v("若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。\n而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立  Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS  的解析结果（Style Rules）来确定生成怎样的 Render Tree。")]),t._v(" "),s("h2",{attrs:{id:"float"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float"}},[t._v("#")]),t._v(" float")]),t._v(" "),s("h3",{attrs:{id:"设置元素浮动后-该元素的display值是多少"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置元素浮动后-该元素的display值是多少"}},[t._v("#")]),t._v(" "),s("strong",[t._v("设置元素浮动后，该元素的display值是多少？")])]),t._v(" "),s("p",[t._v("自动变成display:block")]),t._v(" "),s("h2",{attrs:{id:"display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),s("h3",{attrs:{id:"display有哪些值-说明他们的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display有哪些值-说明他们的作用"}},[t._v("#")]),t._v(" "),s("strong",[t._v("display有哪些值？说明他们的作用?")])]),t._v(" "),s("p",[t._v("inline（默认）--内联\nnone--隐藏\nblock--块显示\ntable--表格显示\nlist-item--项目列表\ninline-block")]),t._v(" "),s("h3",{attrs:{id:"display-none与visibility-hidden的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-none与visibility-hidden的区别"}},[t._v("#")]),t._v(" "),s("strong",[t._v("display:none与visibility：hidden的区别？")])]),t._v(" "),s("p",[t._v("display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）\nvisibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）")]),t._v(" "),s("h3",{attrs:{id:"display-inline-block-什么时候会显示间隙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-block-什么时候会显示间隙"}},[t._v("#")]),t._v(" "),s("strong",[t._v("display:inline-block 什么时候会显示间隙？")])]),t._v(" "),s("ol",[s("li",[t._v("有空格时候会有间隙 解决：移除空格")]),t._v(" "),s("li",[t._v("margin正值的时候 解决：margin使用负值")]),t._v(" "),s("li",[t._v("使用font-size时候 解决：font-size:0、letter-spacing、word-spacing")])]),t._v(" "),s("h3",{attrs:{id:"请解释一下css3的flexbox-弹性盒布局模型-以及适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请解释一下css3的flexbox-弹性盒布局模型-以及适用场景"}},[t._v("#")]),t._v(" "),s("strong",[t._v("请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？")])]),t._v(" "),s("p",[t._v("该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block  布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。\n试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。")]),t._v(" "),s("h2",{attrs:{id:"position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" "),s("strong",[t._v("position")])]),t._v(" "),s("h3",{attrs:{id:"position的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position的值"}},[t._v("#")]),t._v(" "),s("strong",[t._v("position的值？")])]),t._v(" "),s("p",[t._v("static（默认）：按照正常文档流进行排列；\nrelative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；\nabsolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；\nfixed(固定定位)：所固定的参照对像是可视窗口。")]),t._v(" "),s("h3",{attrs:{id:"absolute的containing-block计算方式跟正常流有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#absolute的containing-block计算方式跟正常流有什么不同"}},[t._v("#")]),t._v(" "),s("strong",[t._v("absolute的containing block计算方式跟正常流有什么不同？")])]),t._v(" "),s("p",[t._v("无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：")]),t._v(" "),s("ol",[s("li",[t._v("若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；")]),t._v(" "),s("li",[t._v("否则,则由这个祖先元素的 padding box 构成。")])]),t._v(" "),s("p",[t._v("如果都找不到，则为 initial containing block。")]),t._v(" "),s("p",[t._v("补充：")]),t._v(" "),s("ol",[s("li",[t._v("static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）")]),t._v(" "),s("li",[t._v("absolute: 向上找最近的定位为absolute/relative的元素")]),t._v(" "),s("li",[t._v("fixed: 它的containing block一律为根元素(html/body)")])]),t._v(" "),s("h3",{attrs:{id:"position跟display、overflow、float这些特性相互叠加后会怎么样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position跟display、overflow、float这些特性相互叠加后会怎么样"}},[t._v("#")]),t._v(" "),s("strong",[t._v("position跟display、overflow、float这些特性相互叠加后会怎么样？")])]),t._v(" "),s("p",[t._v("display属性规定元素应该生成的框的类型；")]),t._v(" "),s("p",[t._v("position属性规定元素的定位类型；")]),t._v(" "),s("p",[t._v("float属性是一种布局方式，定义元素在哪个方向浮动。\n类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。")]),t._v(" "),s("h3",{attrs:{id:"position-fixed-在android下无效怎么处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed-在android下无效怎么处理"}},[t._v("#")]),t._v(" "),s("strong",[t._v("position:fixed;在android下无效怎么处理？")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"overflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow"}},[t._v("#")]),t._v(" "),s("strong",[t._v("overflow")])]),t._v(" "),s("p",[s("strong",[t._v("CSS属性overflow属性定义溢出元素内容区的内容会如何处理?")])]),t._v(" "),s("p",[t._v("参数是scroll时候，必会出现滚动条。\n参数是auto时候，子元素内容大于父元素时出现滚动条。\n参数是visible时候，溢出的内容出现在父元素之外。\n参数是hidden时候，溢出隐藏。")]),t._v(" "),s("h2",{attrs:{id:"margin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[t._v("#")]),t._v(" "),s("strong",[t._v("margin")])]),t._v(" "),s("h3",{attrs:{id:"上下margin重合的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下margin重合的问题"}},[t._v("#")]),t._v(" "),s("strong",[t._v("上下margin重合的问题")])]),t._v(" "),s("p",[t._v("在重合元素外包裹一层容器，并触发该容器生成一个BFC。")]),t._v(" "),s("h2",{attrs:{id:"动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" "),s("strong",[t._v("动画")])]),t._v(" "),s("h3",{attrs:{id:"如果需要手动写动画-你认为最小时间间隔是多久-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果需要手动写动画-你认为最小时间间隔是多久-为什么"}},[t._v("#")]),t._v(" "),s("strong",[t._v("如果需要手动写动画，你认为最小时间间隔是多久，为什么？")])]),t._v(" "),s("p",[t._v("多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。")]),t._v(" "),s("h2",{attrs:{id:"字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" "),s("strong",[t._v("字体")])]),t._v(" "),s("h3",{attrs:{id:"让页面里的字体变清晰-变细用css怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让页面里的字体变清晰-变细用css怎么做"}},[t._v("#")]),t._v(" "),s("strong",[t._v("让页面里的字体变清晰，变细用CSS怎么做？")])]),t._v(" "),s("p",[t._v("-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。")]),t._v(" "),s("h3",{attrs:{id:"怎么让chrome支持小于12px-的文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么让chrome支持小于12px-的文字"}},[t._v("#")]),t._v(" "),s("strong",[t._v("怎么让Chrome支持小于12px 的文字？")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"在网页中的应该使用奇数还是偶数的字体-为什么呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在网页中的应该使用奇数还是偶数的字体-为什么呢"}},[t._v("#")]),t._v(" "),s("strong",[t._v("在网页中的应该使用奇数还是偶数的字体？为什么呢？")])]),t._v(" "),s("p",[t._v("使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px  这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。")]),t._v(" "),s("h2",{attrs:{id:"响应式设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计"}},[t._v("#")]),t._v(" "),s("strong",[t._v("响应式设计")])]),t._v(" "),s("p",[s("strong",[t._v("什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？")])]),t._v(" "),s("p",[t._v("响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。\n基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。\n页面头部必须有meta声明的viewport。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高度"}},[t._v("#")]),t._v(" "),s("strong",[t._v("高度")])]),t._v(" "),s("p",[s("strong",[t._v("元素竖向的百分比设定是相对于容器的高度吗？")])]),t._v(" "),s("p",[t._v("当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom  等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。")]),t._v(" "),s("h2",{attrs:{id:"性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" "),s("strong",[t._v("性能")])]),t._v(" "),s("p",[s("strong",[t._v("CSS优化、提高性能的方法有哪些？")])]),t._v(" "),s("ol",[s("li",[t._v("避免过度约束")]),t._v(" "),s("li",[t._v("避免后代选择符")]),t._v(" "),s("li",[t._v("避免链式选择符")]),t._v(" "),s("li",[t._v("使用紧凑的语法")]),t._v(" "),s("li",[t._v("避免不必要的命名空间")]),t._v(" "),s("li",[t._v("避免不必要的重复")]),t._v(" "),s("li",[t._v("最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么")]),t._v(" "),s("li",[t._v("避免！important，可以选择其他选择器")]),t._v(" "),s("li",[t._v("尽可能的精简规则，你可以合并不同类里的重复规则")])]),t._v(" "),s("h2",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" "),s("strong",[t._v("BFC")])]),t._v(" "),s("p",[s("strong",[t._v("对BFC规范(块级格式化上下文：block formatting context)的理解？")])]),t._v(" "),s("p",[t._v("BFC规定了内部的Block Box如何布局。\n定位方案：")]),t._v(" "),s("ol",[s("li",[t._v("内部的Box会在垂直方向上一个接一个放置。")]),t._v(" "),s("li",[t._v("Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。")]),t._v(" "),s("li",[t._v("每个元素的margin box 的左边，与包含块border box的左边相接触。")]),t._v(" "),s("li",[t._v("BFC的区域不会与float box重叠。")]),t._v(" "),s("li",[t._v("BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。")]),t._v(" "),s("li",[t._v("计算BFC的高度时，浮动元素也会参与计算。")])]),t._v(" "),s("p",[t._v("满足下列条件之一就可触发BFC")]),t._v(" "),s("ol",[s("li",[t._v("根元素，即html")]),t._v(" "),s("li",[t._v("float的值不为none（默认）")]),t._v(" "),s("li",[t._v("overflow的值不为visible（默认）")]),t._v(" "),s("li",[t._v("display的值为inline-block、table-cell、table-caption")]),t._v(" "),s("li",[t._v("position的值为absolute或fixed")])]),t._v(" "),s("h2",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" "),s("strong",[t._v("兼容性")])]),t._v(" "),s("p",[s("strong",[t._v("常见的兼容性问题？")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("不同浏览器的标签默认的margin和padding不一样。")]),t._v(" "),s("p",[t._v("*{margin:0;padding:0;}")])]),t._v(" "),s("li",[s("p",[t._v("IE6双边距bug：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。")])]),t._v(" "),s("li",[s("p",[t._v("渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\nbackground-color:#f1ee18;/*所有识别*/\n.background-color:#00deff\\9; /*IE6、7、8识别*/\n+background-color:#a200ff;/*IE6、7识别*/\n_background-color:#1e0bd1;/*IE6识别*/\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。")])]),t._v(" "),s("li",[s("p",[t._v("IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。")])]),t._v(" "),s("li",[s("p",[t._v("Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。")])]),t._v(" "),s("li",[s("p",[t._v("超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}")])])]),t._v(" "),s("h2",{attrs:{id:"css3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS3")])]),t._v(" "),s("h3",{attrs:{id:"css3有哪些新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3有哪些新特性"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS3有哪些新特性？")])]),t._v(" "),s("ol",[s("li",[t._v("RGBA和透明度")]),t._v(" "),s("li",[t._v("background-image background-origin(content-box/padding-box/border-box) background-size background-repeat")]),t._v(" "),s("li",[t._v("word-wrap（对长的不可分割单词换行）word-wrap：break-word")]),t._v(" "),s("li",[t._v("文字阴影：text-shadow：5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）")]),t._v(" "),s("li",[t._v("font-face属性：定义自己的字体")]),t._v(" "),s("li",[t._v("圆角（边框半径）：border-radius 属性用于创建圆角")]),t._v(" "),s("li",[t._v("边框图片：border-image: url(border.png) 30 30 round")]),t._v(" "),s("li",[t._v("盒阴影：box-shadow: 10px 10px 5px #888888")]),t._v(" "),s("li",[t._v("媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性")])]),t._v(" "),s("h3",{attrs:{id:"css3新增伪类有那些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3新增伪类有那些"}},[t._v("#")]),t._v(" "),s("strong",[t._v("CSS3新增伪类有那些?")])]),t._v(" "),s("p",[t._v("p:first-of-type 选择属于其父元素的首个元素\np:last-of-type 选择属于其父元素的最后元素\np:only-of-type 选择属于其父元素唯一的元素\np:only-child 选择属于其父元素的唯一子元素\np:nth-child(2) 选择属于其父元素的第二个子元素\n:enabled :disabled 表单控件的禁用状态。\n:checked 单选框或复选框被选中。")])])}),[],!1,null,null,null);a.default=r.exports}}]);