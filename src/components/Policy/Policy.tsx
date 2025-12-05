import React from 'react';
import styles from './Policy.module.css';

const Policy: React.FC = () => {
  return (
    <section className={styles.policySection}>
      <div className="container">
        <h1 className={styles.title}>Политика конфиденциальности</h1>
        <p className={styles.text}>
          Мы уважаем вашу конфиденциальность и обязуемся защищать личные данные пользователей.
        </p>
        <p className={styles.text}>
          Любая информация, которую вы предоставляете, используется только для целей обработки ваших запросов и улучшения сервиса.
        </p>
        <p className={styles.text}>
          Мы не передаем ваши данные третьим лицам без вашего согласия.
        </p>
        <p className={styles.text}>
          Подробнее о сборе и хранении данных вы можете прочитать здесь.
        </p>
      </div>
    </section>
  );
};

export default Policy;
