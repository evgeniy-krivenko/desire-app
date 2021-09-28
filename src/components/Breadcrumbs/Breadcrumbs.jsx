import { Link } from 'gatsby';
import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ items }) => {

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {items.map((el, index) => (
            <li key={index} className="breadcrumbs__item">
              {el.slug
                ? <Link to={el.slug} className="breadcrumbs__link">{el.title}</Link>
                : <span className="breadcrumbs__link">{el.title}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;