const React = require('react');
const Layout = require('../Layout');

module.exports = function Home() {
  return (
    <Layout>
      <link rel="stylesheet" href="../../css/homeTask.css" />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="homeForm">
        <h3>TO DO</h3>
        <h4>Планируйте свою жизнь с легкостью</h4>
        <span>
          Добро пожаловать на главную страницу, где вы можете создавать,
          управлять и отслеживать свои задачи и планы. TO DO поможет вам
          организовать свой день, неделю или месяц и добиться большей
          продуктивности. Создавайте списки задач, устанавливайте приоритеты,
          отслеживайте выполнение и получайте уведомления, чтобы ничего не
          забыть. Приступайте к работе над своими задачами и достигайте своих
          целей вместе с нашим TO DO!
        </span>
        {/* <button>Submit</button> */}
      </form>
    </Layout>
  );
};
