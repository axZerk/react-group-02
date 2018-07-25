import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import classNames from 'classnames/bind';
// import styles from './button.css';

// const cx = classNames.bind(styles);

// const getClasses = (isActive, isDisabled) => {
//   const btnClasses = [styles.button];

//   if (isActive) {
//     btnClasses.push(styles.active);
//   }

//   if (isDisabled) {
//     btnClasses.push(styles.disabled);
//   }

//   return btnClasses.join(' ');
// };

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
  padding: 10px 20px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  background-color: ${props => (props.isActive ? '#ff4081' : '#2196f3')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Button = ({ label, active, disabled, ...restProps }) => {
  // const btnClass = active ? `${styles.button} ${styles.active}` : styles.button;

  // const btnClasses = classNames({
  //   Button: true,
  //   'Button--active': active,
  //   'Button--disabled': disabled,
  // });

  // const btnClasses = cx({
  //   button: true,
  //   active: active,
  //   disabled: disabled,
  // });

  // const btnClass = active ? styles.active : styles.button;

  return (
    <StyledButton {...restProps} isActive={active}>
      {/* <button className={btnClass} {...restProps}> */}
      {label}
      {/* </button> */}
    </StyledButton>
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
