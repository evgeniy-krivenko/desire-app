import { AnimatePresence, motion } from 'framer-motion';
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
            id
            childImageSharp {
              gatsbyImageData(width: 812)
            }
          }
        }
      }
    }
  `)

  const images = [...nodes[activeIndex].images]

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
            <GalleryImages images={images} />
          </div>
        </div>
      </div>

    </div>
  );
};

const GalleryImages = ({ images }) => {

  return (
    <AnimatePresence exitBeforeEnter>
      {images.map((img, index) => <motion.a
        href="#"
        key={img.id}
        initial={{ opacity: 0, y: 500, scale: 0.6 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 500, scale: 0.6 }}
        transition={{ opacity: { duration: 0.4 } }}
        className="gallery__item"
      ><GatsbyImage
          className="gallery__item-img"
          width={812}
          alt="alt-img"
          image={getImage(img.childImageSharp)} />
      </motion.a>)
      }
    </AnimatePresence >
  )
}

export default Gallery;