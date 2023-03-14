const router = require('express').Router();

const Registration = require('../views/pages/Registration');
const renderComponent = require('../lib/renderComponent');

router.get('/', (req, res) => {
  renderComponent(Registration, {}, res);
});
console.log('========');
console.log(Registration);
