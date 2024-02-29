require('@babel/register'); // ? для работы с import/export
require('dotenv').config(); // ? для работы с переменными окружения

const express = require('express'); // ? подключаем express
const morgan = require('morgan'); // ? подключаем morgan для логирования запросов
const path = require('path'); // ? подключаем path для работы с путями

const session = require('express-session');
const FeleStore = require('session-file-store')(session);
const dbConect = require('./db/config/dbConect');
const ssr = require('./src/middlewares/ssr');

const app = express(); // ? создаем экземпляр приложения

const { PORT = 3111, COOKIE_SEKRET = 'secretik' } = process.env;
app.use(express.urlencoded({ extended: true })); // ? подключаем парсер для форм
app.use(express.json()); // ? подключаем парсер для json
app.use(morgan('dev'));
app.use(ssr);
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(
  session({
    name: 'UserAuth',
    store: new FeleStore(),
    secret: COOKIE_SEKRET,
    resave: false,
    saveUninitialized: false, // ?
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2, // ? 2 дня
      httpOnly: true,
    },
  }),
);

const indexRouter = require('./src/routes/index.routes');
const authRouter = require('./src/routes/auth.routes');
const todoRouter = require('./src/routes/todo.routes');

const OneFilm = require('./src/views/pages/OneFilm');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter);

//! -------------------------------------
app.get('/filmTrailer/:filmId', async (req, res) => {
  const { filmId } = req.params;
  const kinopoiskLink = `https://www.kinopoisk.ru/film/${filmId}`;
  let currentLink;
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/videos`,
    {
      headers: {
        accept: 'application/json',
        'X-API-KEY': '1f1379e4-9ae8-45ad-a941-e51333196ee3',
      },
    },
  );
  const responseData = await response.json();
  const trailerObjArr = responseData.items.filter((item) =>
    item.name.toLowerCase().includes('трейлер'),
  );
  const rusTrailerLinksArr = [];
  const notRusTrailerLinksArr = [];
  trailerObjArr.forEach((item) =>
    item.name.toLowerCase().includes('русский') || item.name.toLowerCase().includes('дублированный')
      ? rusTrailerLinksArr.push(item.url)
      : notRusTrailerLinksArr.push(item.url),
  );
  if (rusTrailerLinksArr.length > 0) {
    currentLink = rusTrailerLinksArr[0];
  } else {
    currentLink = notRusTrailerLinksArr[0];
  }
  const response2 = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${filmId}`, {
    headers: {
      accept: 'application/json',
      'X-API-KEY': '1f1379e4-9ae8-45ad-a941-e51333196ee3',
    },
  });
  const responseData2 = await response2.json();
  const { description } = responseData2.data;

  res.render(OneFilm, { currentLink, kinopoiskLink, description });
});

app.get('*', (req, res) => {
  res.redirect('/');
});
dbConect();
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
