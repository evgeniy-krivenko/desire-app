import React from 'react';
import './EmailForm.scss';
import Button from '../Button/Button';

const EmailForm = ({ className }) => {
  return (
    <form className={`${className}__form`}>
      <input className={`${className}__form-input`} type="email" placeholder="Subscribe by email" />
      <Button className={`${className}__form-btn`} >Send</Button>
    </form>
  );
};

export default EmailForm;