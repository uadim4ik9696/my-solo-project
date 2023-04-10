const React = require('react');

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
        <link rel="stylesheet" href="../../css/formReg.css" />
        <link rel="stylesheet" href="../../css/navBar.css" />

        <script defer src="/js/authorization.js" />
        <title>To Do</title>
      </head>
      <body>
        <nav className="navBar">
          <a id="logo" className="navBarList" href="/"></a>
          {user ? (
            <>
              <a className="navBarList" href="/work">
                Work
              </a>
              <a className="navBarList logout" href="/auth/logout">
                Log Out
              </a>
            </>
          ) : (
            <>
              <a className="navBarList" href="/login">
                Log In
              </a>
              <a className="navBarList" href="/registration">
                Registration
              </a>
            </>
          )}
          <a className="navBarList" href="#link">
            <img className="navBarListImg" src="../../img/user.png" alt="" />
          </a>
        </nav>

        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        {children}
      </body>
    </html>
  );
};
