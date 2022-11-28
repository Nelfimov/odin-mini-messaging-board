import createError from 'http-errors';
import express, {json, urlencoded} from 'express';
import path, {join} from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {fileURLToPath} from 'url';

import indexRouter from './routes/index.js';
import messageRouter from './routes/messages.js';

const app = express();

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error', {error: err});
});

export default app;
