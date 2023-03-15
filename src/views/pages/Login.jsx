const React = require('react');
const Layout = require('../Layout');

module.exports = function LogIn() {
  return (
    <Layout>
      <form>
        <h3>Log In</h3>
        <input type="text" placeholder="Email" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button className="login_submit">Submit</button>
      </form>
    </Layout>
  );
};
