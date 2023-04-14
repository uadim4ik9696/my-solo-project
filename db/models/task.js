const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, { foreignKey: 'userId' });
    }

    static async getAllTasks(id) {
      const tasks = await this.findAll({
        where: {
          userId: id,
        },
        order: [['id', 'DESC']], // сортировка по возрастанию id
      });
      return tasks;
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      priority: DataTypes.STRING,
      status: DataTypes.STRING,
      completionAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
