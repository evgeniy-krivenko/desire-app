import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './BlogBox.scss';

const formatDate = (date) => {
  const options = { month: "long", day: "numeric", year: "numeric" }

  return new Date(Date.parse(date)).toLocaleDateString("en-US", options)
}

const BlogBox = ({ posts }) => {
  return (
    <section className="blog-box">
      <div className="container">
        <h3 className="blog-box__title">More inspiration ideas in our blog</h3>
        <div className="blog-box__items">
          {posts.map((el, index) => (
            <div key={el.id} className="blog-box__item">
              <a href="#" className="blog-box__img-link">
                <GatsbyImage image={getImage(el.img.childImageSharp)} />
              </a>
              <div className="blog-box__links">
                <span className="blog-box__date">{formatDate(el.date)}</span>
                <a className="blog-box__author" href="#" > | {el.author} | </a>
                <a className="blog-box__category" href="#" >{el.category}</a>
              </div>
              <a href="#" className="blog-box__post-title-link">
                <h5 className="blog-box__post-title">{el.title}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBox;