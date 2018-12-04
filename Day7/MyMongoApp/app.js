var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var secretRouter = require('./routes/secret');

var app = express();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
let decrypted;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

client.connect(function(err){
  const db = client.db('homework');
  const collection = db.collection('homework7');
  collection.findOne({}, function(err,doc){
      decrypted = decipher.update(doc.message, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      console.log(decrypted);
      
  });
  console.dir("Done");

});
client.close();

app.use(function(req,res,next) {
  req.secret = decrypted;
  next();
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/secret', secretRouter);

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

app.listen(3000, function(){
	console.log('server is running');
});
module.exports = app;
