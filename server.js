const {PORT, SEVER_ADDRESS} = require("./config"),
  cors = require("cors");

var express = require('express'),
  app = express(),
  port = process.env.PORT || PORT,
  createError = require('http-errors'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var router = require('./api/routes/index');
router(app);

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

app.listen(port, SEVER_ADDRESS, () => {
  console.log(`${SEVER_ADDRESS}:${port} is listening.`);  
});
