require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

// const registration = require('./src/routes/registration.js');

// app.use('/registration', registration);

app.get('/', (req, res) => {
  // res.send('HELO');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
