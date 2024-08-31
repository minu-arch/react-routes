import React from 'react';
import styles from './FormSimple.module.css';
import { useState } from 'react';

type UserType = {
  name: string;
  age: number;
  phone?: string;
};

const FormSimple = () => {
  const [user, setUser] = useState<UserType>({ name: 'Jhon', age: 25 });

  const names = ['Jhon', 'Jane', 'Doe', 'Smith', 'Alex', 'Max', 'Sam'];

  const changeName = () => {
    setUser({
      ...user,
      name: names[Math.floor(Math.random() * names.length)],
      age: 30,
      phone: '+1234567890',
    });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Understanding useState</h1>
        <div className={styles.changename}>
          <p className={styles.name}>Name : {user.name}</p>
          <p className={styles.age}>Age: {user.age}</p>
          <p className={styles.phone}>Phone: {user.phone}</p>
          <button className={styles.namechange} onClick={changeName}>
            Change Name
          </button>
        </div>
      </div>
    </>
  );
};

export default FormSimple;
