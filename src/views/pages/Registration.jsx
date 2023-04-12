const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="frosted-glass registration-form auth">
        <h3>Registration</h3>
        <input
          className="input auth_input"
          required
          type="text"
          name="name"
          placeholder="name"
          id="username"
        />
        <input
          className="input auth_input"
          required
          type="email"
          name="email"
          placeholder="E-mail"
          id="username"
        />
        <input
          className="input auth_input"
          required
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <button className="auth-btn registration_submit">Submit</button>
      </form>
    </Layout>
  );
};
