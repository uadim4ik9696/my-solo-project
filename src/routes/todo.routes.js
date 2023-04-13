const router = require('express').Router();
const Sequelize = require('sequelize');
const { Task } = require('../../db/models');

const handleError = (res, message) => {
  console.log(message);
  res.status(401).json({ message: 'Что-то пошло не так! Повторите попытку!' });
};

router.post('/', async (req, res) => {
  const { user } = req.session;
  const { task } = req.body;
  try {
    const newTask = await Task.create({
      title: task,
      userId: user.id,
      status: false,
    }, {
      returning: true,
      plain: true,
    });
    res.status(200).json(newTask);
  } catch (error) {
    handleError(res, error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    await task.destroy();
    res.sendStatus(200);
  } catch (error) {
    handleError(res, error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Task.update(
      { status: Sequelize.literal('NOT status') },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
