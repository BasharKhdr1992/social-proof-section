import React from 'react';
import anne from '../../images/image-anne.jpg';
import colton from '../../images/image-colton.jpg';
import irene from '../../images/image-irene.jpg';
import Testimonial from './Testimonial';
import './index.css';

const testimonials = [
  {
    username: 'Colton Smith',
    title: 'Verified Buyer',
    avatar: colton,
    testimonial: `"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`,
  },
  {
    username: 'Irene Roberts',
    title: 'Verified Buyer',
    avatar: irene,
    testimonial: `"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`,
  },
  {
    username: 'Anne Wallace',
    title: 'Verified Buyer',
    avatar: anne,
    testimonial: `"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"`,
  },
];

const index = () => {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => {
        return (
          <Testimonial
            key={index}
            marginTop={index * 2}
            username={testimonial.username}
            title={testimonial.title}
            avatar={testimonial.avatar}
            testimonial={testimonial.testimonial}
          />
        );
      })}
    </div>
  );
};

export default index;
