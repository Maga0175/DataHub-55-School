import React from 'react';
import styles from './Register.module.css';

const Register: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Регистрация</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p>
          Уже есть аккаунт? <a href="/auth">Войти</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
