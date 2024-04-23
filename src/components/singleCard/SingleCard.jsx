import React, { useState } from 'react';
import './singleCard.css';
import ModalButton from '../modal/ModalButton';

function SingleCard({ title, img, price, category, asin }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`cardContainer ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-img" style={{ backgroundImage: `url(${img})` }} />
      <div className="details">
        <h2 className="hover-title">{title}</h2>
        <p className="price">{price}</p>
        <p className="category">{category}</p>
        {hovered && <ModalButton asin={asin} />}
      </div>
    </div>
  );
}

export default SingleCard;
