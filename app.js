require('@babel/register');
require('dotenv').config();

const dbConect = require('./db/config/dbConect');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

const work = require('./src/routes/work.router.js');
const home = require('./src/routes/home.router.js');
const registration = require('./src/routes/registration.router.js');
const login = require('./src/routes/login.router.js');
const auth = require('./src/routes/auth.router.js');

dbConect()

app.use('/home', home);
app.use('/work', work);
app.use('/registration', registration);
app.use('/login', login);
app.use('/auth', auth);


app.get('/', (req, res) => {
  res.redirect('/home');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
