import React from 'react';
import './EmailForm.scss';

const EmailForm = ({ className }) => {
  return (
    <form className={`${className}__form`}>
      <input className={`${className}__form-input`} type="email" placeholder="Subscribe by email" />
      <button className={`${className}__form-button`} type="submit">Send</button>
    </form>
  );
};

export default EmailForm;