const React = require('react');
const Layout = require('../Layout');

module.exports = function User({ user }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="user.css" />
      <script defer src="/js/films.js" />
      <div className="frosted-glass homeForm">

        <h2 className="greetings">Личный кабинет:
          <span className=""> {user?.name}</span>
          {' '}
          <span className="">{user?.email}</span>
        </h2>

      </div>
    </Layout>
  );
};
