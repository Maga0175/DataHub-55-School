import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/hero.jpg';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* фон-изображение */}
      <div className={styles.heroImage} style={{ backgroundImage: `url(${heroImg})` }} />

      {/* overlay блок */}
      <div className={styles.overlayBox}>
        <h1 className={styles.title}>Программы сотрудничества</h1>
        <p className={styles.subtitle}>Подбор и интеграция студенческих программ.</p>
        <button className={styles.cta}>Узнать больше</button>
      </div>
    </section>
  );
};

export default Hero;
