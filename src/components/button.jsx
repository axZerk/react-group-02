import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const getClasses = (isActive, isDisabled) => {
  const btnClasses = ['Button'];

  if (isActive) {
    btnClasses.push('Button--active');
  }

  if (isDisabled) {
    btnClasses.push('Button--disabled');
  }

  return btnClasses.join(' ');
};

const Button = ({ label, active, disabled, ...restProps }) => {
  // const btnClass = active ? 'Button Button--active' : 'Button';

  const btnClasses = classNames({
    Button: true,
    'Button--active': active,
    'Button--disabled': disabled,
  });

  return (
    <button className={btnClasses} {...restProps}>
      {label}
    </button>
  );
};

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
