import React, { useState } from 'react';
import './singleCard.css';
import Button from 'react-bootstrap/Button';

function SingleCard({ title, img, price, category, asin, handleReviewClick }) {
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
        {hovered &&
          <Button
            variant="warning"
            className='w-100'
            onClick={handleReviewClick}>   
            Review this book
          </Button>}
      </div>
    </div>
  );
}

export default SingleCard;
