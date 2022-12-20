import React from "react";
import "./card.scss";

type ICard = {
  header: string;
  paragraph: string;
  onClick?: any;
  customClass?: string;
  children: any;
};

export default function Card(props: ICard) {
  const { header, paragraph, customClass, onClick } = props;
  return (
    <div onClick={onClick} className={`card ${customClass ?? customClass}`}>
      <div className="card__top-section">{props.children}</div>

      <div className="card__header">{header}</div>

      <div className="card__paragraph">{paragraph}</div>
    </div>
  );
}
