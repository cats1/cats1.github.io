---
title: 入口文件配置：entry参数
date: 
tags:
- webpack
- entry
---

entry可以是字符串（单入口），可以是数组（多入口），但为了后续发展，请务必使用object，因为object中的key在webpack里相当于此入口的name，既可以后续用来拼生成文件的路径，也可以用来作为此入口的唯一标识。

## 单入口

```
entry: './index.js'
```

## 多入口

