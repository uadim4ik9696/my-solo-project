// const list = document.querySelector('.list');
const { newTask } = document.forms;
document.querySelector('.button_task').addEventListener('click', () => {
  if (newTask.style.display === 'block') {
    newTask.style.display = 'none';
  } else {
    newTask.style.display = 'block';
  }
});

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

  // const data = response.json();
  // console.log('=-=-=-=-=-=--=-=-=-=-=-=--=-=-', data);
});
