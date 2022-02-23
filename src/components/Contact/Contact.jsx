import React from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import InfoEmail from '../InfoEmail/InfoEmail';
import './Contact.scss';

const clearPhone = (phone) => {
  return phone.match(/\d/g).join('')
}

const Contact = ({
  h3,
  phone,
  email,
  addressSecond,
  addressFirst,
  aboutUs,
  socialItems
}) => {
  return (
    <section className="contact">
      <div className="container">
        <h3 className="contact__title">{h3}</h3>
        <ul className="contact__social">
          {socialItems.map((item, index) => (
            <li key={index} className="contact__social-item">
              <a href={item.slug} className="contact__social-link">
                <img className="contact__social-img" src={item.img.publicURL} />
              </a>
            </li>
          ))}
        </ul>
        <div className="contact__info">
          <p className="contact__text">{aboutUs}</p>
          <a href={`tel:+1${clearPhone(phone)}`} className="contact__phone">{phone}</a>
          <div className="contact__street">{addressFirst}</div>
          <div className="contact__city">{addressSecond}</div>
          <InfoEmail email={email} />
        </div>
        <FeedbackForm className="contact__form" />
      </div>

    </section>
  );
};

export default Contact;