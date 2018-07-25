import React from 'react';
import Backdrop from './backdrop';
import Button from './button';
import styles from './modal.css';

const Modal = ({ onClose, isOpen, children }) =>
  isOpen && (
    <Backdrop>
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
        <Button label="Close" onClick={onClose} />
      </div>
    </Backdrop>
  );

export default Modal;
