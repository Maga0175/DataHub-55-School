import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер. Пока просто alert:
    alert(`Спасибо, ${form.name}! Мы получили ваше сообщение.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" style={{ background: 'var(--color-light-gray)' }}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h3>Свяжитесь с нами</h3>
            <p>Оставьте сообщение, и мы ответим в ближайшее время.</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              className={styles.input}
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
              type="email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Сообщение"
              className={styles.textarea}
              rows={5}
              required
            />
            <button className={styles.btn} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;