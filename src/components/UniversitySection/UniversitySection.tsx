import React from 'react';
import styles from './UniversitySection.module.css';
import UniversityCard from '../UniversityCard/UniversityCard';
import { universities } from '../../data/data';

const UniversitySection: React.FC = () => {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        {/* Можно добавить заголовок секции, если в макете есть */}
        <div className={styles.wrapper}>
          {universities.map((u) => (
            <UniversityCard key={u.id} item={u} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;