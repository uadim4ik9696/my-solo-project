const router = require('express').Router();
const Sequelize = require('sequelize');
const { Task } = require('../../db/models');

const handleError = (res) => {
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
    console.log(error);
    handleError(res);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    await task.destroy();
    res.status(200).json({ message: 'Задача удалена!' });
  } catch (error) {
    console.log(error);
    handleError(res);
  }
});

router.put('/status/:id', async (req, res) => {
  try {
    const respoon = await Task.update(
      { status: Sequelize.literal('NOT status') },
      { where: { id: req.params.id } },
    );
    res.status(200).json({ respoon });
  } catch (error) {
    console.log(error);
    handleError(res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.update({ title: req.body.title });
    // const respoon = await Task.update(
    //   { status: Sequelize.literal('NOT status') },
    //   { where: { id: req.params.id } },
    // );
    res.status(200).json({ message: 'Задача изменена!' });
  } catch (error) {
    console.log(error);
    handleError(res);
  }
});

module.exports = router;
