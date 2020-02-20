var express = require('express');
var ejs = require('ejs'); 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
module.exports = app;
