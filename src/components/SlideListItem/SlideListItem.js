import React from 'react';
import Style from './SlideListItem.module.scss';
import { Link } from 'react-router-dom';

const SlideListItem = ({ src, title, id }) => {
  return (
    <Link className={Style.item} to={{ pathname: 'watch', search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default SlideListItem;
