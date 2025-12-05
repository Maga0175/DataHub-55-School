import React from 'react';
import styles from './Features.module.css';
import feature1 from '../../assets/feature1.svg';
import feature2 from '../../assets/feature2.svg';
import feature3 from '../../assets/feature3.svg';

const Features: React.FC = () => {
  const items = [
    { icon: feature1, title: 'Консультации', desc: 'Персональные советы и помощь в выборе университета.' },
    { icon: feature2, title: 'Поддержка', desc: 'Помощь на всех этапах поступления и обучения.' },
    { icon: feature3, title: 'Аккредитация', desc: 'Только проверенные и официально признанные программы.' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {items.map((it, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.iconWrapper}>
                <img src={it.icon} alt={it.title} className={styles.icon} />
              </div>
              <h4 className={styles.title}>{it.title}</h4>
              <p className={styles.desc}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
