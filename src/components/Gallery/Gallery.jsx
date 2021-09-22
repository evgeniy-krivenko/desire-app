import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import './Gallery.scss';

const Gallery = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const { allGalletyDataJson: { nodes } } = useStaticQuery(graphql`
    query GalletyQuery {
      allGalletyDataJson {
        nodes {
          id
          title
          images {
        childImageSharp {
          gatsbyImageData(width: 812)
        }
      }
        }
      }
    }
  `)

  console.log(nodes)

  return (
    <div className="gallery">
      <div className="container-fluid">
        <div className="gallery__buttons">
          {nodes.map((n, index) => <button
            className={activeIndex === index ? "gallery__btn active" : "gallery__btn"}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {n.title}
          </button>)}
        </div>
        <div className="gallery__inner">
          <div className="gallery__items">
            {nodes[activeIndex].images.map((img, index) => <GatsbyImage
              className="gallery__item"
              key={index}
              width={812}
              image={getImage(img.childImageSharp)} />)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;