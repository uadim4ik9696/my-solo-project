require('@babel/register'); //? подключаем babel для работы с import/export
require('dotenv').config(); //? подключаем dotenv для работы с переменными окружения

const dbConect = require('./db/config/dbConect'); //? подключаем файл с настройками подключения к базе данных
const express = require('express'); //? подключаем express
const morgan = require('morgan'); //? подключаем morgan для логирования запросов
const path = require('path'); //? подключаем path для работы с путями

const session = require('express-session') //? подключаем сессии
const FeleStore = require('session-file-store')(session) //? подключаем хранилище сессий


const { PORT, COOKIE_SEKRET } = process.env; //? получаем порт и секретную строку для сессии из .env файла
const app = express(); //? создаем экземпляр приложения

app.use(express.urlencoded({ extended: true })); //? подключаем парсер для форм
app.use(express.json()); //? подключаем парсер для json
app.use(morgan('dev')); //? подключаем morgan для логирования запросов
app.use(express.static(path.join(process.cwd(), 'public'))); //? подключаем статику

//? подключаем роутеры:
const index = require('./src/routes/index.router.js');
const auth = require('./src/routes/auth.router.js');

//! конфигурация сессии
const sessionConfig = {
  name: 'UserAuth',
  store: new FeleStore(), //? хранилище сессий
  secret: COOKIE_SEKRET ?? 'secretik', //? секретная строка для сессии
  resave: false, //? false для того, чтобы сессия не сохранялась автоматически, а только при req.session
  saveUninitialized: false, //?
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2, //? 2 дня
    httpOnly: true,
  },
};

// подключи сессию как мидлвар
app.use(session(sessionConfig));


dbConect() // подключение к базе данных

app.use('/', index);
app.use('/auth', auth); //? подключаем роутер для авторизации


// app.get('/', (req, res) => {
//   res.redirect('/home');
// });

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`); 
});
