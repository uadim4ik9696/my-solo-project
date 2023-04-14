const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <nav className="navBar">
      <link href="/css/navBar.css" rel="stylesheet" />
      <a id="logo" className="navBarList" href="/"> TODO</a>
      {user ? (
        <>
          <a className="navBarList" href="/work">
            Work
          </a>
          <a className="navBarList logout" href="/auth/logout">
            Log Out
          </a>
          <a className="navBarList" href="/user">
            <img className="navBarListImg" src="/img/user.png" alt="" />
          </a>
        </>
      ) : (
        <>
          <a className="navBarList" href="/login">
            Log In
          </a>
          <a className="navBarList" href="/registration">
            Registration
          </a>
        </>
      )}
    </nav>
  );
};
