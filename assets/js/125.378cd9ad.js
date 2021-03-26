(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{488:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue3有哪些不向下兼容的改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3有哪些不向下兼容的改变"}},[t._v("#")]),t._v(" Vue3有哪些不向下兼容的改变")]),t._v(" "),a("h2",{attrs:{id:"🔥🔥v-model新语法糖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥🔥v-model新语法糖"}},[t._v("#")]),t._v(" 🔥🔥v-model新语法糖")]),t._v(" "),a("p",[t._v("默认使用"),a("code",[t._v("modelValue")]),t._v("传递值。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<ChildComponent v-model="pageTitle" />\n\x3c!-- would be shorthand for: --\x3e\n<ChildComponent\n  :modelValue="pageTitle"\n  @update:modelValue="pageTitle = $event"\n/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("也支持绑定不同的属性，有点像是"),a("code",[t._v("v-model")]),t._v("和"),a("code",[t._v("sync")]),t._v("的结合体。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />\n\x3c!-- would be shorthand for: --\x3e\n<ChildComponent\n  :title="pageTitle"\n  @update:title="pageTitle = $event"\n  :content="pageContent"\n  @update:content="pageContent = $event"\n/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"🔥🔥全局api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥🔥全局api"}},[t._v("#")]),t._v(" 🔥🔥全局API")]),t._v(" "),a("h3",{attrs:{id:"_1-不再使用new-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-不再使用new-vue"}},[t._v("#")]),t._v(" 1. 不再使用"),a("code",[t._v("new Vue")])]),t._v(" "),a("h4",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("new Vue")]),t._v("会共享一个全局配置。这对于测试来说不太友好，每个测试用例都需要一个沙盒环境，全局变量去残留一些副作用。")]),t._v(" "),a("h4",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("开始使用"),a("code",[t._v("application")]),t._v("概念，创建一个"),a("code",[t._v("App")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-不再用vue-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-不再用vue-prototype"}},[t._v("#")]),t._v(" 2. 不再用Vue.prototype")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// before - Vue 2\nVue.prototype.$http = () => {}\n// after - Vue 3\nconst app = Vue.createApp({})\napp.config.globalProperties.$http = () => {}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-全局方法现在在app实例上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-全局方法现在在app实例上"}},[t._v("#")]),t._v(" 3. 全局方法现在在"),a("code",[t._v("app")]),t._v("实例上")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("vue2.x")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("vue3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.component")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("app.component")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.directive")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("app.directive")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.mixin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("app.mixin")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.use")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("app.use")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-现在需要手动挂载根元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-现在需要手动挂载根元素"}},[t._v("#")]),t._v(" 4. 现在需要手动挂载根元素")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('pp.mount("#app")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-tree-shaking"}},[t._v("#")]),t._v(" 5. Tree-shaking")]),t._v(" "),a("p",[t._v("没有用到的方法(代码)最后不会被打包到最终的包中。这可以优化项目体积。但是用法也需要进行改变：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { nextTick } from 'vue'\nnextTick(() => {\n  // something DOM-related\n})\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("不能再使用"),a("code",[t._v("Vue.nextTick")]),t._v("/"),a("code",[t._v("this.$nextTick")])]),t._v(" "),a("h2",{attrs:{id:"🔥异步组件需要显示定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥异步组件需要显示定义"}},[t._v("#")]),t._v(" 🔥异步组件需要显示定义")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { defineAsyncComponent } from 'vue'\nconst asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"🔥-attrs-将包含class和style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥-attrs-将包含class和style"}},[t._v("#")]),t._v(" 🔥$attrs 将包含class和style")]),t._v(" "),a("p",[t._v("vue2.x中，"),a("code",[t._v("class")]),t._v("和"),a("code",[t._v("style")]),t._v("会被直接设置在组件的根元素上并且不会出现在"),a("code",[t._v("$attrs")]),t._v("中。但是在vue3中，如果子组件只有一个根元素，则"),a("code",[t._v("class")]),t._v("和"),a("code",[t._v("style")]),t._v("会被直接设置在该元素上。超过一个则不会设置。如果组件中设置了"),a("code",[t._v("inheritAttrs: false")]),t._v("，则无论如何都不会自动设置根元素的"),a("code",[t._v("class")]),t._v("和"),a("code",[t._v("style")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"listeners被移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners被移除"}},[t._v("#")]),t._v(" $listeners被移除")]),t._v(" "),a("p",[t._v("事件监听器也被包含还在了"),a("code",[t._v("$attrs")]),t._v("中。")]),t._v(" "),a("p",[t._v("现在属性透传更方便了！")]),t._v(" "),a("h2",{attrs:{id:"🔥指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥指令"}},[t._v("#")]),t._v(" 🔥指令")]),t._v(" "),a("p",[t._v("指令和组件生命周期更契合，并使用统一的命名。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("vue2.x")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("vue3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("bind")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("beforeMount")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inserted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mounted")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("beforeUpdate (新)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("update (移除)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("componentUpdated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("updated")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("beforeUnmount (新)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("unbind")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("unmounted")])])])]),t._v(" "),a("h2",{attrs:{id:"新特性fragments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新特性fragments"}},[t._v("#")]),t._v(" 新特性fragments")]),t._v(" "),a("p",[t._v("允许组件有多个根元素！")]),t._v(" "),a("h2",{attrs:{id:"template允许设置key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template允许设置key"}},[t._v("#")]),t._v(" template允许设置key")]),t._v(" "),a("p",[t._v("循环template再也不用往里面设置key了。")]),t._v(" "),a("h2",{attrs:{id:"scopedslots正式弃用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopedslots正式弃用"}},[t._v("#")]),t._v(" scopedSlots正式弃用")]),t._v(" "),a("p",[t._v("vue2.6中对"),a("code",[t._v("slot")]),t._v("进行了改版，但是仍然对"),a("code",[t._v("scopedSlots")]),t._v("兼容，vue3正式弃用掉"),a("code",[t._v("scopedSlots")])]),t._v(" "),a("h2",{attrs:{id:"监听数组变化需要用deep属性啦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听数组变化需要用deep属性啦"}},[t._v("#")]),t._v(" 监听数组变化需要用deep属性啦")]),t._v(" "),a("p",[t._v("如果不加"),a("code",[t._v("deep")]),t._v("只能检测整个数组被替换。")]),t._v(" "),a("h2",{attrs:{id:"children-被移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children-被移除"}},[t._v("#")]),t._v(" $children 被移除")]),t._v(" "),a("p",[t._v("如果想访问子组件，使用"),a("code",[t._v("$refs")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"事件api被移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件api被移除"}},[t._v("#")]),t._v(" 事件API被移除")]),t._v(" "),a("p",[a("code",[t._v("$on,$off,$once")]),t._v("不再使用。2.x的EventBus方法不能再使用。")]),t._v(" "),a("h2",{attrs:{id:"🔥🔥filter被移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔥🔥filter被移除"}},[t._v("#")]),t._v(" 🔥🔥Filter被移除！")]),t._v(" "),a("p",[t._v("不能再用"),a("code",[t._v("|")]),t._v("使用filter。Sad。")])])}),[],!1,null,null,null);e.default=n.exports}}]);