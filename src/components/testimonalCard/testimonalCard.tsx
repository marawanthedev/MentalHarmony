import React from "react";
import { Testimonial } from "constants/testiomnials";
import "./testimonalCard.css";

type ITestimonalCard = {
  testimonial: Testimonial;
};

const TestimonalCard = ({ testimonial }: ITestimonalCard) => {
  return (
    <div className="testimonal-card">
      <div
        className="testimonal-card__author"
        title="author"
        role="contentinfo"
      >
        -{testimonial.author}
      </div>
      <div className="testimonal-card__text" title="text" role="contentinfo">
        {testimonial.text}
      </div>
    </div>
  );
};

export default TestimonalCard;
