const form = document.querySelector('body > form');

form?.addEventListener('submit', async (e) => {
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
    window.location.href = '/';
  } else if (response.status === 201) {
    const errTxt = document.createElement('p');
    errTxt.innerText = 'Sorry, this email address has already been taken';
    form.appendChild(errTxt);
    setTimeout(() => {
      errTxt.remove();
    }, 4000);
  }
});
