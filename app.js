require('@babel/register'); // ? для работы с import/export
require('dotenv').config(); // ? для работы с переменными окружения

const express = require('express'); // ? подключаем express
const morgan = require('morgan'); // ? подключаем morgan для логирования запросов
const path = require('path'); // ? подключаем path для работы с путями

const session = require('express-session');
const FeleStore = require('session-file-store')(session);
const dbConect = require('./db/config/dbConect');

const app = express(); // ? создаем экземпляр приложения

const { PORT = 3111, COOKIE_SEKRET = 'secretik' } = process.env;
app.use(express.urlencoded({ extended: true })); // ? подключаем парсер для форм
app.use(express.json()); // ? подключаем парсер для json
app.use(morgan('dev')); // ? подключаем morgan для логирования запросов
app.use(express.static(path.join(process.cwd(), 'public'))); //
app.use(session({
  name: 'UserAuth',
  store: new FeleStore(),
  secret: COOKIE_SEKRET,
  resave: false,
  saveUninitialized: false, // ?
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2, // ? 2 дня
    httpOnly: true,
  },
}));

const indexRouter = require('./src/routes/index.routes');
const authRouter = require('./src/routes/auth.routes');
const todoRouter = require('./src/routes/todo.routes');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter);

dbConect();
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
