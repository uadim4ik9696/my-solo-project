require('@babel/register');
require('dotenv').config();

const express = require('express'); 
const morgan = require('morgan'); 
const path = require('path');
const app = express(); 

const dbCheck = require('./db/dbCheck');

//! импорт роутов
const indexRoutes = require('./routes/index.routes');

//.env
const { PORT = 3111, COOKIE_SEKRET = 'secretik' } = process.env;

app.use(express.static(path.resolve('public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
  name: 'UserAuth',
  store: new FeleStore(), 
  secret: COOKIE_SEKRET, 
  resave: false,
  saveUninitialized: false, 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2,
    httpOnly: true,
  },
}));

//роутеры
app.use('/', indexRoutes);

dbCheck();