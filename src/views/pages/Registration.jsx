const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form>
        <h2>REGISTRATION</h2>

        <input
          placeholder="Name"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <input
          placeholder="Email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <input
          placeholder="Password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};
