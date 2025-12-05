import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div>© {new Date().getFullYear()} Университеты. Все права защищены.</div>
          <div className={styles.links}>
            <Link to="/policy">Политика</Link>
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
