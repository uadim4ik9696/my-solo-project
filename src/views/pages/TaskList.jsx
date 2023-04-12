const React = require('react');
const Layout = require('../Layout');
// const { Task } = require('../../../db/models');

// console.log(Task.getAllTasks());

function checkUsername(username) {
  const regex = /^[a-zA-Zа-яА-Я]+$/;
  if (regex.test(username)) {
    return true;
  }
  return false;
}

module.exports = function TaskList({ user, tasks }) {
  console.log(tasks.length);
  return (
    <Layout user={user}>
      {/* <link rel="stylesheet" href="../../css/homeTask.css" /> */}
      <script defer src="/js/todo_add.js" />

      <div className="frosted-glass homeForm">
        <h4>
          {checkUsername(user.name)
            ? `Привет, ${user.name} 👋 !`
            : 'Привет 👋 !'}
        </h4>
        <form name="newTask" className="add_task">
          <input name="title" type="text" className="input_task input" placeholder="Запиши что бы не забыть" required />
          <button className="btn_add_task">+</button>
          {/* <div className="button_task">📝</div> */}
        </form>
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
