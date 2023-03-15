const router = require('express').Router();
const Home = require('../views/pages/Home');
const renderComponent = require('../lib/renderComponent');

module.exports = router.get('/', (req, res) => {
  renderComponent(Home, {}, res);
});