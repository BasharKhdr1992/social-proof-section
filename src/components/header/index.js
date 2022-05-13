import React from 'react';
import star from '../../images/icon-star.svg';
import './index.css';

const reviews = [
  { rating: 5, text: 'Rated 5 Stars in Reviews' },
  { rating: 5, text: 'Rated 5 Stars in Report Guru' },
  { rating: 5, text: 'Rated 5 Stars in BestTech' },
];

const Rating = ({ rating, iconStar }) => {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars = [...stars, '*'];
  }

  return (
    <div className="rating">
      {stars.map((star, index) => {
        return <img key={index} src={iconStar} className="star" alt="star" />;
      })}
    </div>
  );
};

const Review = ({ review, marginLeft }) => {
  const { rating, text } = review;

  return (
    <div className="review" style={{ marginLeft: `${marginLeft}%` }}>
      <Rating rating={rating} iconStar={star} />
      <p className="review-text">{text}</p>
    </div>
  );
};

const index = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1 className="main-title">10,000+ of our users love our products.</h1>
        <p className="sub-title">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="reviews">
        {reviews.map((review, index) => {
          return <Review key={index} review={review} marginLeft={index * 10} />;
        })}
      </div>
    </div>
  );
};

export default index;
