import { ReactNode } from "constants/reactNode";
import React from "react";
import "./Card.scss";
import { BaseInterface } from "constants/baseInterface";

interface ICard extends BaseInterface {
  header: string;
  paragraph: string;
  onClick?: any;
  customClass?: string;
  children: ReactNode;
}

export default function Card(props: ICard) {
  const { header, paragraph, customClass, onClick, ...rest } = props;
  return (
    <div
      onClick={onClick}
      title="card"
      className={`card ${customClass ?? customClass}`}
      role="main"
      {...rest}
    >
      <div className="card__top-section" title={"children"} role="contentinfo">
        {props.children}
      </div>

      <div className="card__header" title="header" role={"contentinfo"}>
        {header}
      </div>

      <div className="card__paragraph" title="paragraph" role="contentinfo">
        {paragraph}
      </div>
    </div>
  );
}
