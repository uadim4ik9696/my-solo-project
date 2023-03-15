const React = require('react');
const Layout = require('../Layout');

module.exports = function TaskList() {
  return (
    <Layout>
      <link rel="stylesheet" href="../../css/homeTask.css" />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="homeForm">
        <h3>TaskList</h3>
        {/* <button>Submit</button> */}
      </form>
    </Layout>
  );
};
