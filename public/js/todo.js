// Получаем элементы страницы
const list = document.querySelector('.list');
const newTaskForm = document.forms.newTask;
// Функция для создания новой задачи
async function createNewTask(task) {
  try {
    const response = await fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });

    const data = await response.json();

    if (response.ok) {
      const newDiv = document.createElement('div');
      newDiv.className = 'taska input';
      newDiv.innerHTML = `
        <div class="left">
          <input id="${data.id}" class="checkbox" type="checkbox" />
          ${task}
        </div>
        <button class="delete" id="${data.id}">Удалить</button>
      `;
      list.prepend(newDiv);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
}

// Обработчик отправки формы для добавления новой задачи
newTaskForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = e.target.title.value;
  await createNewTask(task);
  e.target.title.value = '';
});

// Обработчик клика по списку задач
list?.addEventListener('click', async (e) => {
  // Обработчик клика по чекбоксу
  if (e.target.type === 'checkbox') {
    try {
      const response = await fetch(`/todo/${e.target.id}`, {
        method: 'PUT',
      });

      const data = await response.json();

      if (response.ok) {
        e.target.parentNode.classList.toggle('done');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Обработчик клика по кнопке удаления задачи
  if (e.target.tagName.toLowerCase() === 'button') {
    try {
      const response = await fetch(`/todo/${e.target.id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        e.target.parentNode.classList.toggle('done');
        e.target.parentNode.remove();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
