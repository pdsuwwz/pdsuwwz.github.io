---
layout: post
title:  "webpack插件HtmlWebpackPlugin的用法"
date:   2018-04-16 10:06:07
categories: webpack
tags:  打包 webpack
author: 王文章
---

* content
{:toc}

![webpack](https://i.loli.net/2018/04/21/5ada9267452a4.jpg)

在上一节中，我们学会了如何用 webpack 打包 jQuery 文件，就是使用到了 jquery 和 expose-loader 这两个模块。

以前我们都是用 webpack 打包 assets 资源文件之后，自己新建一个 html 文件，再引入相关的 assets 文件，这样非常的不方便。那么我们这一节将 使用一个名字叫做 html-webpack-plugin 的插件，它能够解决这些问题并自动地完成构建。





## 过程

1、我们还是重新建立一个文件夹，里面生成 package.json 文件，并设置快捷使用 webpack 的方式: build 命令，同时安装 webpack@2.3.2 和 html-webpack-plugin 模块，一些安装命令就在这省略不写了，需要的就看前面几个章节
2、新建一个用于存放 js 文件的 src 文件夹。里面新建两个 js 文件，分别是 component.js 和 index.js 文件。

3、其中 component.js 内写入一个方法，并用 exports 暴露这个方法，详见如下代码。

```js

function addElement(){
    var el = document.createElement("div");
    el.innerHTML = "Hello World";
    return el;
}

module.exports.addEl = addElement;

```
4、index.js 文件里写入如下代码，代码很简单，不用解释。

```js

var com = require("./component");
document.body.appendChild(com.addEl());

```

5、最最重要的一步，不要忘了新建我们的配置文件 webpack.config.js，呵呵，我们在其中编写如下配置代码，详见官网API。[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

```js

// 引入所需模块
var path = require("path");
var HtmlWebapckPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    // 使用 "自动构建 html " 插件
    plugins: [new HtmlWebapckPlugin()]
}

```
6、命令行执行打包命令 npm run build，打包完成后可发现会自动生成一个 dist 文件夹，里面包含连个文件，分别是：index.html 和 main.bundle.js 并且打开 index.html 可发现里面引入了 main.bundle.js 文件。emmm...

7、用浏览器打开 index.html 看见 Hello World 字样即表示自动打包成功。





















