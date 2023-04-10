const React = require('react');
const Layout = require('../Layout');

module.exports = function LogIn() {
  return (
    <Layout>
      <form className="login-form">
        <h3>Log In</h3>
        <input
          className="input"
          name="email"
          required
          type="text"
          placeholder="E-mail"
          id="username"
        />
        <input
          className="input"
          name="password"
          required
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="login_submit">Submit</button>
      </form>
    </Layout>
  );
};
