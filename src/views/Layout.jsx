const React = require('react');
const NavBar = require('./pages/NavBar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" src="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="/css/background.css" rel="stylesheet" />
        <link href="/css/index.css" rel="stylesheet" />

        <script defer src="/js/authorization.js" />
        <script defer src="/js/todo.js" />
        <title>To Do</title>
      </head>
      <body className="body">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="container">
          <NavBar user={user} />
          {children}
        </div>
      </body>
    </html>
  );
};
