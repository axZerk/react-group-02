import React from 'react';
import styles from './styles.css';

const ErrorNotification = ({ message, children }) => (
  <div className={styles.container}>
    <p className={styles.text}>{message}</p>
    {children}
  </div>
);

export default ErrorNotification;
