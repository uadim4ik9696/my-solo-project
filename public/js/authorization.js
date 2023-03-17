const formReg = document.querySelector('.registration-form');
const formLogin = document.querySelector('.login-form');
const btnLogOut = document.querySelector('a.navBarList.log_out');

formReg?.addEventListener('submit', async (e) => {
  e.preventDefault(); 
  const response = await fetch(`/auth/reg`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }),
  });
  if (response.status === 200) {
    window.location.href = '/login';
  } else if (response.status === 401) {
    const errTxt = document.createElement('p');
    errTxt.innerText = 'Sorry, this email address has already been taken';
    formReg.appendChild(errTxt);
    setTimeout(() => {
      errTxt.remove();
    }, 4000);
  }
});

formLogin?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch(`/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value,
    }),
  });

  if (response.status === 200) {
    window.location.href = '/work';
  } else {
    const errTxt = document.createElement('p');
    errTxt.innerText = 'Invalid email or password';
    formLogin.appendChild(errTxt);
    setTimeout(() => {
      errTxt.remove();
    }, 4000);
  }
});

// напиши слушатель событий на отправку запроса на удаление сессии
btnLogOut?.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch(`/auth/logout`, {
    method: 'GET',
  }).then((res) => res.json()); //? получаем ответ от сервера
  if (response.loggedout) {
    window.location.href = '/';
  }
})