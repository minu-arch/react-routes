import React from 'react';
import styles from './ReactTesting.module.css';

const CounterMemo = ({ count, setCount }) => {
  return (
    <div className={styles.countermemo}>
      <h1 className={styles.title}>Use State</h1>
      <div className={styles.counter}>
        <h2>Counter</h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => setCount(count - 1)}>
            -
          </button>
          <span className={styles.count}>{count}</span>
          <button className={styles.button} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterMemo;
