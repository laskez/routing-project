import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= roundedRating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
};

export default StarRating;