const { sequelize } = require('../models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.log('База данных не работает :(', error);
  }
};
