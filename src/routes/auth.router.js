const router = require('express').Router();
const { User } = require('../../db/models');
const renderComponent = require('../lib/renderComponent');
const Error = require('../views/Error');

router.post('/reg', async (req, res) => {
  // console.log(req.body);
  try {
    await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      {
        returning: true,
        plain: true,
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(201);
  }
});

// module.exports = router.post('/login', (req, res) => {

// });

module.exports = router;
