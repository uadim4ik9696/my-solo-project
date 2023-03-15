const router = require('express').Router();
const Login = require('../views/pages/Login');
const renderComponent = require('../lib/renderComponent');

module.exports =  router.get('/', (req, res) => {
  renderComponent(Login, {}, res);
});
