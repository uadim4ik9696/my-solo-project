const router = require('express').Router();
const Registration = require('../views/pages/Registration');
const renderComponent = require('../lib/renderComponent');

module.exports = router.get('/', (req, res) => {
  renderComponent(Registration, {}, res);
});