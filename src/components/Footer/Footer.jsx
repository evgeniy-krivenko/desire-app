import React from 'react';
import EmailForm from '../EmailForm/EmailForm';
import InfoEmail from '../InfoEmail/InfoEmail';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <h6 className="footer__info-title">Contact Us</h6>
              <p className="footer__info-text">Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy</p>
              <InfoEmail email={"ouremailaddress@email.com"} />
              <EmailForm className="footer" />
            </div>
            <ul className="footer__social">
              <li className="footer__social-item">
                <a className="footer__social-link footer__social-link--facebook" href="#">Facebook</a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link footer__social-link--instagram" href="#">Instagram</a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link footer__social-link--pinterest" href="#">Pinterest</a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link footer__social-link--whatsapp" href="#">WhatsApp</a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link footer__social-link--youtube" href="#">Youtube</a>
              </li>
            </ul>
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#">Delivery</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#">FAQ</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#">Help</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#">More About Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__copyrigth">
        <div className="container">
          <p>674 Gonzales Drive.   Washington, PA 15301</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;