const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="registration-form">
        <h3>Registration</h3>
        <input
          className="input"
          required="required"
          type="text"
          name="name"
          placeholder="name"
          id="username"
        />
        <input
          className="input"
          required="required"
          type="email"
          name="email"
          placeholder="e-mail"
          id="username"
        />
        <input
          className="input"
          required="required"
          type="password"
          name="password"
          placeholder="password"
          id="password"
        />

        <button className="registration_submit">Submit</button>
      </form>
    </Layout>
  );
};
