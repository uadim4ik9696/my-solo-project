const React = require('react');
const Layout = require('../Layout');

module.exports = function OneFilm({
  currentLink, description, kinopoiskLink, user,
}) {
  console.log('-=-=-=-=-=-=-=-=-=-=', kinopoiskLink);
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="/css/oneFilm.css" />
      <div className="frosted-glass homeForm">

        <div className="trailerDiv">
          <a className="link" href={currentLink}>Трейлер</a>
          <p className="ppp">Описание:</p>
          <p className="description">{ description }</p>
          <a className="link" href={kinopoiskLink}>Больше информации о фильме</a>
          <a className="homelink" href="/">На главную</a>
        </div>
      </div>
    </Layout>
  );
};
