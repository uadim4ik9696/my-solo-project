const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { Task } = require('../../db/models');

router.post('/', async (req, res) => {
  const { user } = req.session;
  const { task } = req.body;
  try {
    await Task.create(
      {
        title: task,
        userId: user.id,
        status: false,
      },
      {
        returning: true,
        plain: true,
      },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

module.exports = router;
