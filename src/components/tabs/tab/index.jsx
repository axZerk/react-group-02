import React from 'react';
import styles from './styles.css';

const Tab = ({ img, descr }) => (
  <div className={styles.tab}>
    <img src={img} alt="" width={200} />
    <p className={styles.text}>{descr}</p>
  </div>
);

export default Tab;
