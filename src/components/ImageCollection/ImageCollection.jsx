import React from 'react';
import './ImageCollection.scss';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const ImageCollection = ({ data, size }) => {

  const additionalClass = size === 'small' ? ' small' : ''

  return (
    <div className="container-fluid">
      <div className={"collection" + additionalClass}>

        {data.map((element, index) => (
          <a key={index} href="#" className={"collection__item" + additionalClass}>

            <GatsbyImage image={getImage(element.image)} alt="" className={"collection__images" + additionalClass} />
            <div className="collection__info">
              <h6 className={"collection__info-title" + additionalClass}>
                {element.title}
              </h6>
              {element.text && <p className="collection__info-text">{element.text}</p>}

            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageCollection;