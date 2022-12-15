import React from "react";
import { Testimonial } from "constants/testiomnials";
import "./testimonalCard.css";

type ITestimonalCard = {
  testimonial: Testimonial;
};

const testimonalCard = ({ testimonial }: ITestimonalCard) => {
  return (
    <div className="testimonal-card">
      <div className="testimonal-card__author">-{testimonial.author}</div>
      <div className="testimonal-card__text">{testimonial.text}</div>
    </div>
  );
};

export default testimonalCard;
