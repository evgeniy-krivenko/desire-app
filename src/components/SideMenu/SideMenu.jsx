import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import './SideMenu.scss';
import { motion } from "framer-motion"

const SideMenu = ({ isOpen, setOpen }) => {

  const variants = {
    hidden: { x: "200%" },
    visible: { x: "0%" },
  }

  return (

    <motion.div
      variants={variants}
      initial={'hidden'}
      animate={isOpen ? 'visible' : 'hidden'}
      transition={{ type: "spring", bounce: 0.25 }}
      className="side-menu"
    >
      <button className="side-menu__close" onClick={() => setOpen(false)}>
        <StaticImage src="../../images/close.svg" alt="close" />
      </button>
      <div className="side-menu__content">
        <Link to="/" className="side-menu__logo">
          <StaticImage src="../../images/big-logo.png" alt="big logo" />
        </Link>
        <h4 className="side-menu__title">Furniture for life</h4>
        <p className="side-menu__text">Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry +1 art party microdosing, put a bird on it brooklyn</p>
        <StaticImage className="side-menu__image" src="../../images/content/side-menu-chair.jpg" alt="chair" />
      </div>
    </motion.div>
  );
};

export default SideMenu;