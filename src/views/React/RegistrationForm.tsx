import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('date bagate:', formData);
  };
  return (
    <div className={styles.regform}>
      <h1 className={styles.title}>Understanding useState</h1>
      <div className={styles.regwrapper}>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className={styles.regbutton} type="submit">
            Send
          </button>
        </form>
        <div className={styles.inputreg}>
          <h2>Input information:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
