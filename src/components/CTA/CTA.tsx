import React from 'react';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBox}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Начните сотрудничество прямо сейчас</h2>
            <p className={styles.subtitle}>
              Оставьте заявку — мы поможем подобрать программу и подготовим документы.
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.btn}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
