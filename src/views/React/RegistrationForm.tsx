import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

type FormDataType = {
  name: string;
  email: string;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState<FormDataType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(formData);
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
                required
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
                required
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
          {submitted && (
            <>
              <h2>Input information:</h2>
              <p>Name: {submitted?.name}</p>
              <p>Email: {submitted?.email}</p>
              <button
                className={styles.regbutton}
                onClick={() => setSubmitted(null)}
              >
                Clear data
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
