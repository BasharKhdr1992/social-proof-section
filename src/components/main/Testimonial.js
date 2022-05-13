import React from 'react';
import './Testimonial.css';

const Testimonial = ({ avatar, username, title, testimonial, marginTop }) => {
  return (
    <div className="testimonial" style={{ marginTop: `${marginTop}rem` }}>
      <div className="testimonial-header">
        <img src={avatar} alt={username} className="avatar" />
        <div className="user-info">
          <p className="username">{username}</p>
          <p className="title">{title}</p>
        </div>
      </div>
      <blockquote className="blockquote">{testimonial}</blockquote>
    </div>
  );
};

export default Testimonial;
