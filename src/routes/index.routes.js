const router = require('express').Router();
const renderComponent = require('../lib/renderComponent');

const Home = require('../views/pages/Home');
const Login = require('../views/pages/Login');
const Registration = require('../views/pages/Registration');
const TaskList = require('../views/pages/TaskList');

const { Task } = require('../../db/models');

router.get('/', (req, res) => {
  const { user } = req.session;
  const title = 'Home';
  renderComponent(Home, { title, user }, res);
});

router.get('/login', (req, res) => {
  renderComponent(Login, {}, res);
});

router.get('/registration', (req, res) => {
  renderComponent(Registration, {}, res);
});

router.get('/work', async (req, res) => {
  const { user } = req.session;
  const tasks = await Task.getAllTasks(user?.id);
  renderComponent(TaskList, { user, tasks }, res);
});

module.exports = router;
