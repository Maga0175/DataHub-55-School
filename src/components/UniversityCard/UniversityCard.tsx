import React, { useState, useEffect } from 'react';
import styles from './UniversityCard.module.css';
import type { University } from '../../data/data';

type Props = {
  item: University;
};

const UniversityCard: React.FC<Props> = ({ item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!item.slides || item.slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % item.slides!.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [item.slides]);

  return (
    <article className={styles.card}>
      {item.slides && item.slides.length > 0 && (
        <div className={styles.sliderContainer}>
          {item.slides.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${item.title} slide ${idx + 1}`}
              className={`${styles.slideImage} ${
                idx === currentSlide ? styles.active : styles.inactive
              }`}
            />
          ))}
        </div>
      )}

      <div className={styles.infoBlock}>
        <img src={item.logo} alt={item.title} className={styles.logo} />
        <div className={styles.content}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
          {item.description && <p className={styles.description}>{item.description}</p>}

          <p className={styles.academyTitle}>Академические направления</p>
          <ul className={styles.list}>
            {[
              'Бизнес-администрирование',
              'Маркетинг и PR',
              'Цифровая экономика',
              'Государственное и местное управление',
              'Логистика',
              'IT-менеджмент'
            ].map((it, idx) => (
              <li key={idx} className={styles.listItem}>
                <span className={styles.bullet}>{idx + 1}</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default UniversityCard;
