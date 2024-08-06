import React from 'react';
import { useState } from 'react';
import styles from './ReactTesting.module.css';
import CounterMemo from './CounterMemo';
import Form from './Form';
import FormSimple from './FormSimple';
import RegistrationForm from './RegistrationForm';

const ReactTesting = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.reacttesting}>
        <div className={styles.titlediv}>
          <h1 className={styles.title}>React Testing</h1>
          <CounterMemo count={count} setCount={setCount} />
          <Form />
          <FormSimple />
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};
export default ReactTesting;
