const React = require('react');
const Layout = require('../Layout');
// const { Task } = require('../../../db/models');

// console.log(Task.getAllTasks());

function checkUsername(username) {
  console.log(username);
  const regex = /^[a-zA-Zа-яА-Я]+$/;
  if (regex.test(username)) {
    return `Привет, ${username} 👋 !`;
  }
  return 'Привет, 👋 ! Интересное у тебя имя 🤭';
}

module.exports = function TaskList({ user, tasks }) {
  return (
    <Layout user={user}>
      {/* <link rel="stylesheet" href="../../css/homeTask.css" /> */}
      <script defer src="/js/todo_add.js" />

      <div className="frosted-glass homeForm">
        <form name="newTask" className="add_task">
          <input name="title" type="text" className="input_task input" placeholder="Запиши то что не хочешь забыть" required />
          <button className="btn_add_task">+</button>
          {/* <div className="button_task">📝</div> */}
        </form>
        <div className="greetings">
          {checkUsername(user.name)}
        </div>
        <div className="list">
          {tasks.map((task) => (
            <div className="taska input">
              <input className="checkbox" type="checkbox" />
              {task.title}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
