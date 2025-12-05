import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user-icon.svg';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = (type: 'login' | 'register') => {
    setMenuOpen(false); // закрываем меню
    navigate(`/Auth?type=${type}`); // ведёт на страницу Auth с параметром
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <nav className={styles.nav}>
            <Link to="/">Главная</Link>
            <Link to="/programs">Программы</Link>
            <Link to="/features">Преимущества</Link>
            <Link to="/universities">Университеты</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>

          <div className={styles.rightSide}>
            <Link to="/application" className={styles.cta}>
              Оставить заявку
            </Link>

            <div className={styles.userMenuWrapper}>
              <img
                src={userIcon}
                alt="User"
                className={styles.userIcon}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              {menuOpen && (
                <div className={styles.dropdown}>
                  <button
                    className={styles.dropdownItem}
                    onClick={() => handleAuthClick('login')}
                  >
                    Войти
                  </button>
                  <button
                    className={styles.dropdownItem}
                    onClick={() => handleAuthClick('register')}
                  >
                    Регистрация
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
