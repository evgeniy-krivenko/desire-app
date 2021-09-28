import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image'
import './About.scss';

const About = ({ title, paragraphs }) => {

  const [isActive, setActive] = useState(false);

  const closePopup = (e) => {
    if (e.key === 'Escape') {
      setActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closePopup)
    return () => {
      document.removeEventListener('keydown', closePopup)
    }
  }, [closePopup])

  // блокирование скролла
  useEffect(() => {
    if (isActive) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isActive])


  return (
    <section className="about">
      <div className="about__promo">
        <div className="container">
          <h2 className="about__promo-title">About Us</h2>
        </div>
      </div>
      <div className="about__content">
        <div className="container">
          <h3 className="about__content-title">{title}</h3>
          <div className="about__content-text">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="about__video-popup">
        <button className="about__video-popup-play" onClick={() => setActive(true)}>
          <StaticImage className="about__video-popup-img" src="../../images/play-button.svg" />
        </button>
      </div>
      <AnimatePresence>
        {isActive && <AboutPopup setActive={setActive} />}
      </AnimatePresence>
    </section>
  );
};

const AboutPopup = ({ setActive }) => {
  return (
    <motion.div
      key="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about__modal"
    >
      <motion.div
        key="video"
        initial={{ y: -1000 }}
        animate={{ y: 0, transition: { delay: 1 } }}
        exit={{ y: -1000 }}
        className="about__modal-content">
        <button className="about__modal-close" onClick={() => setActive(false)}>
          <StaticImage src="../../images/close-white.svg" alt="close" />
        </button>
        <div className="about__modal-wrapper">
          <iframe


            width="560" height="315" src="https://www.youtube.com/embed/5bFANekriZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </motion.div>
    </motion.div>
  )
}


export default About;