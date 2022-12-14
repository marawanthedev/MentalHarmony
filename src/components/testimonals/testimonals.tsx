import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonals.css";
import { Testimonial } from "../../constants/testiomnials";
// import PrevArrowIcon from "../../assets/svg/prevArrow.svg";
// import NextArrowIcon from "../../assets/svg/nextArrow.svg";
import TestimonalCard from "../testimonalCard/testimonalCard";

// function PrevArrow(props) {
//   const { className, style, onClick } = props;

//   return (
//     <img
//       src={PrevArrowIcon}
//       alt="prev arrow"
//       className={`arrow prevArrow ${className}`}
//       style={{ ...style, width: "30px", height: "10px" }}
//       onClick={onClick}
//     />
//   );
// }

// function NextArrow(props) {
//   const { className, style, onClick } = props;

//   return (
//     <img
//       src={NextArrowIcon}
//       alt="next arrow"
//       className={` arrow nextArrow ${className}`}
//       style={{ ...style, width: "30px", height: "10px" }}
//       onClick={onClick}
//     />
//   );
// }

export default class Testimonals extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <></>,
      prevArrow: <></>,
      // responsive: [
      //   {
      //     breakpoint: 770,
      //     settings: {
      //       nextArrow: null,
      //       prevArrow: null,
      //     },
      //   },
      // ],
    };
    const testimonialData: Testimonial[] = [
      {
        author: "Karen Smith",
        text: "Highly recommend Flair for natural and subtle results!",
      },
      {
        author: "Jess Doe",
        text: "Flair helped me boost confidence in myself for the first time in a long time!",
      },
      {
        author: "Hailey Gooden",
        text: "The practitioner at Flair did an amazing job. I can’t thank her enough!!",
      },
      {
        author: "Janice Thompson",
        text: "Can’t recommend Flair’s dermal fillers enough! It was my first time having this sort of procedure, and they made me feel safe and confident.",
      },
    ];

    return (
      <div className="testimonals-container">
        <Slider {...settings} >
          {testimonialData.map((testimonial: Testimonial, index: number) => (
            <TestimonalCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    );
  }
}
