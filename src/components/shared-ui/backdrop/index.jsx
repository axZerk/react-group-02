import React from 'react';
import styles from './styles.css';

const Backdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

export default Backdrop;
