import React from 'react';
import styles from './FormSimple.module.css';
import { useState } from 'react';

const FormSimple = () => {
  const [user, setUser] = useState({ name: 'Jhon', age: 25 });

  const changeName = () => {
    setUser({ ...user, name: 'Jane', age: 30 });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Understanding useState</h1>
        <div className={styles.changename}>
          <p className={styles.name}>Name : {user.name}</p>
          <p className={styles.age}>Age: {user.age}</p>
          <button className={styles.namechange} onClick={changeName}>
            Change Name
          </button>
        </div>
      </div>
    </>
  );
};

export default FormSimple;
