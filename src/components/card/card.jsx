import React from "react";
import "./card.scss";
export default function Card(props) {
  const { header, paragraph, customClass, onClick } = props;
  return (
    <div onClick={onClick} className={`card ${customClass ?? customClass}`}>
      <div className="card__top-section">{props.children}</div>
      <div className="card__header">{header}</div>
      <div className="card__paragraph">{paragraph}</div>
    </div>
  );
}
