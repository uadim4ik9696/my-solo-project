const React = require('react');
const Layout = require('../Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="../../css/homeTask.css" />
      <div className="background">
        {/* <div className="shape"></div>
        <div className="shape"></div> */}
      </div>
      <form className="homeForm">
        <h3>TO DO</h3>
        <h4>Планируйте свою жизнь с легкостью</h4>
        <span className="">
          Добро пожаловать на главную страницу, где вы сможете легко планировать
          свою жизнь. Наш TO DO поможет вам организовать ваш день, неделю или
          месяц, и повысить вашу продуктивность. Вы сможете создавать списки
          задач, устанавливать приоритеты, отслеживать выполнение и получать
          уведомления, чтобы ничего не забыть. Начните работу над вашими
          задачами прямо сейчас и достигайте своих целей вместе с TO DO!
        </span>
      </form>
    </Layout>
  );
};
