const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="frosted-glass registration-form">
        <h3>Registration</h3>
        <input
          className="input"
          required
          type="text"
          name="name"
          placeholder="name"
          id="username"
        />
        <input
          className="input"
          required
          type="email"
          name="email"
          placeholder="E-mail"
          id="username"
        />
        <input
          className="input"
          required
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <button className="btn registration_submit">Submit</button>
      </form>
    </Layout>
  );
};
