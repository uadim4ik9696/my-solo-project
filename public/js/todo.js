const { newTask } = document.forms;
const buttonTask = document.querySelector('.button_task');
buttonTask?.addEventListener('click', (e) => {
  if (newTask.style.display === 'none') {
    newTask.style.display = 'block';
    buttonTask.innerHTML = '&#62;';
  } else {
    newTask.style.display = 'none';
    buttonTask.innerHTML = '&#60;';
  }
});
const list = document.querySelector('.list');

// Обработчик добавления новой задачи
newTask?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = e.target.title.value;
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
      e.target.title.value = '';

      const newDiv = document.createElement('div');
      newDiv.className = 'taska input';
      newDiv.innerHTML = `
        <div class="left">
          <input id="${data.id}" class="checkbox" type="checkbox" />
          </div>
          <span name="title" class="spanEdit">
          ${task}
          </span>
          <div class="btnTasks">
          <button class="task-edit" id=${data.id}>Изменить</button>
          <button class="task-delete" id=${data.id}>Удалить</button>
          </div>
      `; // <input class="input-edit" type="text" defaultValue=${task} />

      list.prepend(newDiv);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
});

list?.addEventListener('click', async (e) => {
  // Обработчик клика по чекбоксу
  if (e.target.type === 'checkbox') {
    try {
      const response = await fetch(`/todo/status/${e.target.id}`, {
        method: 'PUT',
      });
      if (response.ok) {
        e.target.parentNode.classList.toggle('done');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
  // Обработчик клика по кнопке удаления
  // console.log(e.target.innerHTML.toLowerCase());
  if (e.target.innerHTML.toLowerCase() === 'удалить') {
    try {
      const response = await fetch(`/todo/${e.target.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        e.target.parentNode.parentNode.remove();
      } else { alert(data.message); }
    } catch (error) { console.error(error); }
  }
  // todo: =-=-=-=-==реализовать редактирование задачи==-=-=-=-=
  // Обработчик клика по кнопке редактирования задачи
  if (e.target.innerHTML.toLowerCase() === 'изменить') {
    const spanEdit = e.target.parentNode.parentNode.querySelector('.spanEdit');
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = spanEdit.innerHTML;
    inputEdit.className = 'spanEdit';
    inputEdit.addEventListener('blur', () => {
      spanEdit.innerHTML = inputEdit.value;
      inputEdit.parentNode.replaceChild(spanEdit, inputEdit);
    });
    spanEdit.parentNode.replaceChild(inputEdit, spanEdit);
    inputEdit.focus();
  }
  // Обработчик клика по кнопке сохранить
  const saveButton = document.querySelector('.task-edit');
  // ?.addEventListener('submit', async (event) => {
  //   event.preventDefault();
  //   // const task = e.target.title.value;
  //   if (event.target.innerHTML.toLowerCase() === 'сохранить') {
  //     console.log(event.target.parentNode.querySelector('.input-edit').value);
  //     // const response = await fetch(`/todo/${e.target.id}`, {
  //     //   method: 'PUT',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({ title: event.target.parentNode.parentNode.querySelector('.input-edit').value }),
  //     // });
  //     // const data = await response.json();
  //     // if (response.ok) {
  //     //   e.target.parentNode.parentNode.remove();
  //     // } else {
  //     //   alert(data.message);
  //     // }
  //   }
  // });
});
