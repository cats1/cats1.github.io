---
title: devtool
date: 2017-12-20 13:27:48
tags:
- webpack
---

# Devtool

* "inline-source-map", // 嵌入到源文件中
* "eval-source-map", // 将 SourceMap 嵌入到每个模块中
* "hidden-source-map", // SourceMap 不在源文件中引用
* "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
* "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
* "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。