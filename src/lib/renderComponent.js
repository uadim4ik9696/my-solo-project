require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const renderComponent = (reactComponent, props = {}, res) => {
  const reactElement = React.createElement(reactComponent, { ...props }, res);
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  res.send(`<!DOCTYPE html>${html}`);
};

module.exports = renderComponent;
