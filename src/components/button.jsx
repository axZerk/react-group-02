import React from 'react';
import './button.css';

const Button = ({ label, onClick }) => (
  <button className="Button" type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
