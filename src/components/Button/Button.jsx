import React from 'react';
import './Button.scss';

const Button = ({ type, children, className }) => {
  const classNameBtn = className ? `form-button ${className}` : 'form-button'
  return (
    <button className={classNameBtn} type={type} > {children}</button>
  );
};

export default Button;