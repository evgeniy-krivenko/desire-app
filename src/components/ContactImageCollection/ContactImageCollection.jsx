import React from 'react';
import Slider from '../Slider/Slider';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './ContactImageCollection.scss';

const ContactImageCollection = ({ data }) => {
  return (
    <div style={{ marginBottom: '100px' }} className="container-fluid">
      <Slider slideToShow={10} className="contact__collection">
        {data.map((element, index) => (
          <a draggable="false" key={index} href="#" className="contact__collection-link">
            <GatsbyImage image={getImage(element.image)} alt="" className="contact__collection-image" />
            <div className="contact__collection-info">
              <h6 className="contact__collection-title">
                {element.title}
              </h6>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default ContactImageCollection;