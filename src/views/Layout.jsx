const React = require('react');
const NavBar = require('./pages/NavBar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../../css/background.css" />
        <link rel="stylesheet" href="../../css/index.css" />
        <link rel="stylesheet" href="../../css/authForm.css" />
        <link rel="stylesheet" href="../../css/navBar.css" />

        <script defer src="/js/authorization.js" />
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
