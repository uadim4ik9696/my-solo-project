const microphoneIcon = document.querySelector('.microphone__image');
const microphoneWrapper = document.querySelector('.microphone-wrapper');
const audioRecordAnimation = document.querySelector('.audio-record-animation');
const allFilmsDiv = document.querySelector('.allFilmsDiv');
const errorr = document.querySelector('.errorr');

// Навешиваем обработчик клика на allFilmsDiv
allFilmsDiv.addEventListener('click', (event) => {
  const closestDiv = event.target.closest('div');
  // Проверяем, что клик был по элементу с классом oneFilmDiv
  if (closestDiv && closestDiv.classList.contains('oneFilmDiv')) {
    // Перенаправляем пользователя на страницу с трейлером фильма
    window.location = `http://localhost:3000/filmTrailer/${closestDiv.id}`;
  }
});

// Инициализируем распознавание речи
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.lang = 'ru-RU';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Навешиваем обработчик клика на иконку микрофона
microphoneIcon.onclick = function () {
  // Начинаем распознавание речи
  recognition.start();
  console.log('Готов принять команду цвета.');
  errorr.innerHTML = '';
};

// Навешиваем обработчик на событие начала записи звука
recognition.onaudiostart = function () {
  // Скрываем иконку микрофона и показываем анимацию записи звука
  microphoneWrapper.style.visibility = 'hidden';
  audioRecordAnimation.style.visibility = 'visible';
};

// Навешиваем обработчик на событие окончания записи звука
recognition.onspeechend = function () {
  // Останавливаем распознавание речи и возвращаем иконку микрофона и скрываем анимацию записи звука
  recognition.stop();
  microphoneWrapper.style.visibility = 'visible';
  audioRecordAnimation.style.visibility = 'hidden';
};

// Навешиваем обработчик на событие результатов распознавания речи
recognition.onresult = (event) => {
  // Получаем текст распознанной речи
  const voiceRequest = event.results[0][0].transcript;
  console.log(voiceRequest);

  // Функция для получения фильмов по запросу
  async function getFilm(inputValue) {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${inputValue}&page=1`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': '1f1379e4-9ae8-45ad-a941-e51333196ee3',
      },
    });
    const responseData = await response.json();
    console.log(responseData);
    allFilmsDiv.innerHTML = '';
    for (let i = 0; i < responseData.films.length; i++) {
      allFilmsDiv.innerHTML
      += `<div class="oneFilmDiv" id="${responseData.films[i].filmId}">
        <p class="oneFilmTitle">${responseData.films[i].nameRu}</p>
        <img class="img" src="${responseData.films[i].posterUrl}" alt="">
        <p class="oneFilmYear">${responseData.films[i].year}, ${responseData.films[i].countries[0].country}</p>
      </div>`;
    }
  }
  if (voiceRequest) {
    getFilm(voiceRequest);
  }
};

recognition.onerror = () => {
  recognition.stop();
  errorr.innerHTML = '<p>Я не понiв, повтори</p>';
  microphoneWrapper.style.visibility = 'visible';
  audioRecordAnimation.style.visibility = 'hidden';
};
