const forms = {
  reg: document.querySelector('.registration-form'),
  login: document.querySelector('.login-form'),
};
function isValidEmail(email) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}
function displayErrorMessage(message, parentElement) {
  const errTxt = document.createElement('p');
  errTxt.innerText = message;
  errTxt.style.color = 'red';
  parentElement.appendChild(errTxt);
  setTimeout(() => {
    errTxt.remove();
  }, 4000);
}
async function submitForm(form, endpoint) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: form.name?.value,
      email: form.email.value,
      password: form.password.value,
    }),
  });
  return response;
}
forms.reg?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (isValidEmail(e.target.email.value)) {
    const response = await submitForm(e.target, '/auth/reg');
    if (response.status === 200) {
      window.location.href = '/login';
    } else if (response.status === 401) {
      displayErrorMessage(
        'Адрес электронной почты уже занят',
        forms.reg,
      );
    }
  } else {
    displayErrorMessage(
      'Не верный формат электронной почты.',
      forms.reg,
    );
  }
});

forms.login?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (isValidEmail(e.target.email.value)) {
    const response = await submitForm(e.target, '/auth/login');
    if (response.status === 200) {
      window.location.href = '/work';
    } else {
      displayErrorMessage(
        'Неправильный адрес электронной почты или пароль',
        forms.login,
      );
    }
  } else {
    displayErrorMessage(
      'Введите правильный формат электронной почты.',
      forms.login,
    );
  }
});
