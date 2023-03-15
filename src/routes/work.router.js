const router = require('express').Router();
const TaskList = require('../views/pages/TaskList');
const renderComponent = require('../lib/renderComponent');

module.exports =  router.get('/', (req, res) => {
  renderComponent(TaskList, {}, res);
});
