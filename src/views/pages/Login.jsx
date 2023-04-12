const React = require('react');
const Layout = require('../Layout');

module.exports = function LogIn() {
  return (
    <Layout>
      <form className="frosted-glass login-form auth">
        <h3>Log In</h3>
        <input
          className="input auth_input"
          name="email"
          required
          type="text"
          placeholder="E-mail"
          id="username"
        />
        <input
          className="input auth_input"
          name="password"
          required
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="auth-btn login_submit">Submit</button>
      </form>
    </Layout>
  );
};
