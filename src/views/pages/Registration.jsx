const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="registration-form">
        <h3>Registration</h3>
        <input
          required="required"
          type="text"
          name="name"
          placeholder="Name"
          id="username"
        />
        <input
          required="required"
          type="email"
          name="email"
          placeholder="Email"
          id="username"
        />
        <input
          required="required"
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />

        <button className="registration_submit">Submit</button>
      </form>
    </Layout>
  );
};
