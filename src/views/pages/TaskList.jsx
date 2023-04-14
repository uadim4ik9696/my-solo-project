const React = require('react');
const Layout = require('../Layout');

function isValidUserName(username) {
  const regexLetters = /^[a-zA-Zа-яА-Я]+$/;
  const regexDuplicates = /([a-zA-Zа-яА-Я])\1{2,}/;

  if (regexLetters.test(username)
    || regexDuplicates.test(username)
    || username.length < 3
    || username.length > 20) {
    return `Привет, ${username} 👋 !`;
  }
  return `Привет, ${username} 👋 ! Интересное у тебя имя 🤭`;
}

module.exports = function TaskList({ user, tasks }) {
  return (
    <Layout user={user}>

      <div className="greetings">
        {isValidUserName(user.name)}
      </div>
      <div className="frosted-glass homeForm">
        <div className="button_task">&#60;</div>
        <form name="newTask" className="add_task">
          <input name="title" type="text" className="input_task input" placeholder="Запиши то, что не хочешь забыть" required />
          <button className="btn_add_task">+</button>
        </form>
        <div className="list">
          {tasks.map((task) => (
            <div key={task.id} className="taska input">
              <div className="left">

                <input
                  id={task.id}
                  className="checkbox"
                  checked={task.status}
                  type="checkbox"
                  onChange={(e) => setTasks(
                    tasks.map((t) => (t.id === task.id ? { ...t, status: e.target.checked } : t)),
                  )}
                />

              </div>
              <span id={task.id} name="title" className="spanEdit">
                {task.title}
              </span>
              <div className="btnTasks">
                {/* <button className="task-edit" id={task.id}>Изменить</button> */}
                <button className="task-delete" id={task.id}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
