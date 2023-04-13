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
  // const handleCheckboxChange = (taskId, isChecked) => {
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.id === taskId) {
  //       return {
  //         ...task,
  //         status: isChecked,
  //       };
  //     }
  //     return task;
  //   });
  //   setTasks(updatedTasks);
  // };

  return (
    <Layout user={user}>

      <div className="frosted-glass homeForm">
        <div className="button_task">&#60;</div>
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
              <span name="title" className="spanEdit">
                {task.title}
              </span>
              <div className="btnTasks">
                <button className="task-edit" id={task.id}>Изменить</button>
                <button className="task-delete" id={task.id}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
