import React from 'react';
import './singleCard.css';


function SingleCard({title, img, price, category, asin}) {
  return (
    <div className='cardContainer'>
        <h2>{title}</h2>
        <img className='card-img' src={img} alt={title} />
        <div className='details'>
        <p className='price'>{price}</p>
        <p className='category'>{category}</p>
        <p className='asin'>{asin}</p>
      </div>
    </div>
  )
}

export default SingleCard