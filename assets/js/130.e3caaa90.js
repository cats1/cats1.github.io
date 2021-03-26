(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{492:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"component-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-api"}},[t._v("#")]),t._v(" Component API")]),t._v(" "),a("p",[t._v("Composition API将组件属性公开为函数，因此第一步是导入所需的函数。")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" "),a("code",[t._v("setup")])]),t._v(" "),a("p",[t._v("一个组件选项，在创建组件"),a("strong",[t._v("之前")]),t._v("执行，一旦 "),a("code",[t._v("props")]),t._v(" 被解析，并作为组合式 API 的入口点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用Composition API 的入口")])]),t._v(" "),a("li",[a("p",[t._v("setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数，也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的。创建组件实例，然后初始化 "),a("code",[t._v("props")]),t._v(" ，紧接着就调用 "),a("code",[t._v("setup")]),t._v(" 函数。 从 vue2 生命周期钩子的视角来看，它会在 "),a("code",[t._v("beforeCreate")]),t._v(" 钩子之后，"),a("code",[t._v("created")]),t._v(" 之前被调用。")])]),t._v(" "),a("li",[a("p",[t._v("在setup中没有this")])]),t._v(" "),a("li",[a("p",[t._v("可以返回一个对象，这个对象的属性被合并到渲染上下文，并可以在模板中直接使用；")])]),t._v(" "),a("li",[a("p",[t._v("以返回一个渲染函数")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("接收props对象作为第一个参数，接收来的props对象，可以通过watchEffect监视其变化。")])]),t._v(" "),a("li",[a("p",[t._v("接受context对象作为第二个参数，这个对象包含attrs，slots，emit等属性。")])]),t._v(" "),a("li",[a("p",[t._v("setup函数只能是同步的不能是异步的")])])]),t._v(" "),a("p",[a("code",[t._v("reactive")]),t._v("：接收一个普通对象然后返回该普通对象的响应式代理。")]),t._v(" "),a("p",[a("code",[t._v("ref")]),t._v("：接受一个参数值并返回一个响应式且可改变的 "),a("code",[t._v("ref")]),t._v(" 对象。"),a("code",[t._v("ref")]),t._v(" 对象拥有一个指向内部值的单一属性 .value。")]),t._v(" "),a("p",[a("code",[t._v("computed")]),t._v("：传入一个 "),a("code",[t._v("getter")]),t._v(" 函数，返回一个默认不可手动修改的 "),a("code",[t._v("ref")]),t._v(" 对象。")]),t._v(" "),a("p",[a("code",[t._v("readonly")]),t._v("：传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。")]),t._v(" "),a("p",[a("code",[t._v("watchEffect")]),t._v("：立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。可显式的调用返回值以停止侦听。")]),t._v(" "),a("p",[t._v("watchEffect 被称之为副作用，立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const wa = watchEffect(() => {\n      // 使用到了哪个 ref/reactive 对象.value, 就监听哪个\n      console.log(double.value)\n    })\n    // 可以通过 wa.stop 停止监听\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"ref-和-torefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref-和-torefs"}},[t._v("#")]),t._v(" ref 和 toRefs")]),t._v(" "),a("p",[t._v("toRefs 提供了一个方法可以把 reactive 的值处理为 ref，也就是将响应式的对象处理为普通对象。")]),t._v(" "),a("p",[a("code",[t._v("watch")]),t._v("：全等效于 2.x "),a("code",[t._v("this.\\$watch")]),t._v(" （以及 "),a("code",[t._v("watch")]),t._v(" 中相应的选项）。")]),t._v(" "),a("h2",{attrs:{id:"生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),a("h2",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject"}},[t._v("#")]),t._v(" Provide / Inject")]),t._v(" "),a("h2",{attrs:{id:"getcurrentinstance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcurrentinstance"}},[t._v("#")]),t._v(" "),a("code",[t._v("getCurrentInstance")])]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getCurrentInstance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" internalInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    internalInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalProperties "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// access to globalProperties")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);