// // const list = document.querySelector('.list');
const { newTask } = document.forms;
const button = document.querySelector('.btn_add_task');

newTask.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = e.target.title.value;
  const response = fetch('/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
  });

  const data = response.json();
  console.log(data);
});
