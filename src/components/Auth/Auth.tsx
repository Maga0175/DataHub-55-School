import React from 'react';
import styles from './Auth.module.css';

const Auth: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Вход в аккаунт</h1>
        <form className={styles.form}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">Войти</button>
        </form>
        <p>
          Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
