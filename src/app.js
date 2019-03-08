var express = require('express');
var morgan=require('morgan');
var app = express();
app.use(morgan('this is my service'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
module.exports =app;