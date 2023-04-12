const React = require('react');
const Layout = require('../Layout');
// const { Task } = require('../../../db/models');

function checkUsername(username) {
  const regex = /^[a-zA-Zа-яА-Я]+$/;
  if (regex.test(username)) {
    return `Привет, ${username} 👋 !`;
  }
  return 'Привет, 👋 ! Интересное у тебя имя 🤭';
}

module.exports = function TaskList({ user, tasks }) {
  return (
    <Layout user={user}>

      <div className="frosted-glass homeForm">
        <div className="button_task">📝</div>
        <form name="newTask" className="add_task">
          <input name="title" type="text" className="input_task input" placeholder="Запиши то что не хочешь забыть" required />
          <button className="btn_add_task">+</button>
        </form>
        <div className="greetings">
          {checkUsername(user.name)}
        </div>
        <div className="list">
          {tasks.map((task) => (
            <div key={task.id} className="taska input">
              {task.status ? (
                <input
                  id={task.id}
                  className="checkbox"
                  checked
                  onChange={() => {}}
                  type="checkbox"
                />
              ) : (
                <input
                  id={task.id}
                  className="checkbox"
                  type="checkbox"
                />
              )}

              {task.title}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
