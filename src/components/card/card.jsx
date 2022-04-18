import React from "react";
import "./card.scss";
export default function Card({ header, paragraph, topSection }) {
  return (
    <div className="card">
      <div className="card__top-section">{topSection}</div>
      <div className="card__header">{header}</div>
      <div className="card__paragraph">{paragraph}</div>
    </div>
  );
}
