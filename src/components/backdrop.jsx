import React from 'react';
import styles from './backdrop.css';

const Backdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

export default Backdrop;
