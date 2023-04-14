const React = require('react');
const Layout = require('../Layout');

module.exports = function User({ user }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="css/user.css" />
      <script defer src="/js/films.js" />
      <h2 className="greetings">
        Личный кабинет:
        <span className="name">{user?.name}</span>
        {' '}
        <span className="email">{user?.email}</span>
      </h2>
      <div className="frosted-glass homeForm">

        <div className="speech-recognition-section">
          <p>
            Нажмите на иконку микрофона, и назовите фильм который хотите найти
          </p>
          <div className="audio-record-animation__wrapper">
            <div style={{ visibility: 'hidden' }} className="audio-record-animation">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="microphone-wrapper">
            <img className="microphone__image" src="/img/microphone.png" width="50" height="50" alt="" />
          </div>
          <div className="errorr" />
        </div>

        <div className="allFilmsDiv" />
      </div>
    </Layout>
  );
};
