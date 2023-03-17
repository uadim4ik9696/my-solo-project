const React = require('react');
const Layout = require('../Layout');

function checkUsername(username) {
  const regex = /^[a-zA-Zа-яА-Я]+$/;
  if (regex.test(username)) {
    return true;
  } else {
    return false;
  }
}

module.exports = function TaskList({ user }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="../../css/homeTask.css" />
      <link rel="stylesheet" href="../../css/button.css" />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="homeForm">
        <h3>
          {checkUsername(user.name)
            ? `Hi, ${user.name} 👋 ! Do it here`
            : `Hi 👋 ! Do it here`}
        </h3>
        <div className="button_task">📝</div>
        <div className="input taska">
          <input className="galochka" type="checkbox" />
          Доделать функционал тудушечки своей
        </div>
        <div className="input taska">
          <input className="galochka" type="checkbox" />
          Провести тестирование кода и выявить и исправить ошибки.
        </div>
        <div className="input taska">
          <input className="galochka" type="checkbox" />
          Рефакторинг кода
        </div>
        <div className="input taska">
          <input className="galochka" type="checkbox" />
          Порадовать себя чашечкой кофе
        </div>
      </form>
    </Layout>
  );
};
