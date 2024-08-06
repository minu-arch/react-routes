import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';

function Form() {
  const [user, setUser] = useState({
    name: '',
    age: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={styles.form}>
      <div className={styles.names}>
        <h2>Form</h2>
        <form>
          <label className={styles.labelclass}>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label className={styles.labelclass}>
            Age:
            <input
              className={styles.age}
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className={styles.underline} />
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
}

export default Form;
