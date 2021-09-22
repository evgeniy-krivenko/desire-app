import React from 'react';
import './ImageCollection.scss';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby';


const ImageCollection = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
  allCollectionJson {
    nodes {
      id
      title
      text
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

  `)


  return (
    <div className="collection">
      {data.allCollectionJson.nodes.map((element, index) => (
        <a key={index} href="#" className="collection__item">

          <GatsbyImage image={getImage(element.image)} alt="" className="collection__images" />
          <div className="collection__info">
            <h6 className="collection__info-title">
              {element.title}
            </h6>
            <p className="collection__info-text">
              {element.text}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageCollection;