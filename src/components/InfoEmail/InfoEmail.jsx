import React from 'react';
import './InfoEmail.scss';

const InfoEmail = ({ email }) => {
  return (
    <a className="info-email" href={`mailto:${email}`} >
      {email}
    </a>
  );
};

export default InfoEmail;