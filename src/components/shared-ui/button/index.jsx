import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ label, active, ...restProps }) => (
  <button className={active ? styles.active : styles.button} {...restProps}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  active: false,
  onClick: () => null,
};

export default Button;
