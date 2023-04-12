const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { Task } = require('../../db/models');

router.post('/', async (req, res) => {
  const { user } = req.session;
  const { task } = req.body;
  console.log(task);
  try {
    await Task.create(
      {
        title: task,
        userId: user.id,
      },
      {
        returning: true,
        plain: true,
      },
    );
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
});

module.exports = router;
