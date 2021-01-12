var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

var indexRouter = require('./api/index');
var defineRouter = require('./api/define')
var queryRouter = require('./api/query')

var indexController = require('./routes/index');

var {Controlador} = require("./controllers/Controlador");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/define', defineRouter);
app.use('/api/consulta', queryRouter);

app.get("/", indexController.login);

app.get("/inicio", indexController.inicio);

app.get('/definir/:id', indexController.definir);

app.get('/consultar/:id', indexController.consultar);

app.post('/consultar/:id', indexController.consultar2);

app.use(indexController.error);


// information load
console.log('...Loading information...');
Controlador.bringData();


// Helper
hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
