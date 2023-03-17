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
          required="required"
          type="text"
          placeholder="e-mail"
          id="username"
        />
        <input
          className="input"
          name="password"
          required="required"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="login_submit">Submit</button>
      </form>
    </Layout>
  );
};
