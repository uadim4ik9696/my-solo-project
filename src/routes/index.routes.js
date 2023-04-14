const router = require('express').Router();

const Home = require('../views/pages/Home');
const Login = require('../views/pages/Login');
const Registration = require('../views/pages/Registration');
const TaskList = require('../views/pages/TaskList');
const renderComponent = require('../lib/renderComponent');


const { Task } = require('../../db/models');
const User = require('../views/pages/User');

router.get('/', (req, res) => {
  const title = 'Home';
  res.render(Home, { title });
});

router.get('/login', (req, res) => {
  res.render(Login, {});
});

router.get('/registration', (req, res) => {
  res.render(Registration, {});
});

router.get('/user', (req, res) => {
  res.render(User, {});
});

router.get('/work', async (req, res) => {
  const { user } = req.session;
  const tasks = await Task.getAllTasks(user?.id);
  res.render(TaskList, { tasks, func: res.locals });
});

module.exports = router;
