const router = require('express').Router();
const renderComponent = require('../lib/renderComponent');

const Home = require('../views/pages/Home');
const Login = require('../views/pages/Login');
const Registration = require('../views/pages/Registration');
const TaskList = require('../views/pages/TaskList');

router.get('/', (req, res) => {
  const { user } = req.session;
  renderComponent(Home, { user }, res);
});

router.get('/login', (req, res) => {
  renderComponent(Login, {}, res);
});

router.get('/registration', (req, res) => {
  renderComponent(Registration, {}, res);
});

router.get('/work', (req, res) => {
  const { user } = req.session;
  renderComponent(TaskList, { user }, res);
});

module.exports = router;
