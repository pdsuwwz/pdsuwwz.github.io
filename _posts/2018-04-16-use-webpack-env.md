---
layout: post
title:  "webpack中的配置文件"
date:   2018-04-16 07:35:35
categories: webpack
tags:  打包 webpack
author: 王文章
---

* content
{:toc}

![webpack](https://i.loli.net/2018/04/21/5ada9267452a4.jpg)

在上节的打包 js 的例子中使用到了以下命令，该命令的作用就是找到 .bin 目录中的 webpack 命令工具，其次将指定目录中的 js 文件打包到想要的文件夹里。

```js

node_modules\.bin\webpack app/index.js build/index.bundle.js

```





## 过程

本小节将简化这种操作，使用配置文件的方式来事先配置好webpack，无需使用繁琐的 *“node_modules\.bin\webpack”*命令，可以直接使用简短的命令来打包。

1、接着上一节的内容，友情提示：另复制一份 first-webpack 文件夹。防止与上一节代码混淆。

2、在根目录 first-webpack 中新建一个 webpack.config.js

```js

var path = require("path");

module.exports = {
    // 入口文件
    entry: "./app/index.js",
    // 输出文件
    output: {
        // 输出的路径
        // path:__dirname+ '/build/',
        path: path.resolve(__dirname, "build"),
        // 输出的文件名
        filename: "[name].bundle.js"
    }
}


```

3、修改 package.json 文件，在其中加入以下npm内部的变量代码来简化打包命令

```js

"scripts": {
    "start": "webpack"
},

```

4、开始打包，直接使用以下命令即可进行打包，因为 webpack 会自动解析配置文件 webpack.config.js。打包完成后，可以得到与第一小节 #001 中同样的效果。

```js

npm start

```











