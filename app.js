 //导入 express模块
var express = require('express');
var querystring = require('querystring');

//创建express 的服务器实例
var app = express();

//指定默认模版引擎
app.set('view engine','ejs');

//托管静态资源文件
app.use('/node_modules',express.static('node_modules'));