import React from "react";
import closeBtn from "assets/images/closeBtn.webp";
import "./CloseBtn.scss";
import { BaseInterface } from "constants/baseInterface";

interface closeBtnProps extends BaseInterface {
  onClick: Function;
}
export default function CloseBtn({ onClick, ...rest }: closeBtnProps) {
  return (
    <div
      className="close__btn background-image-util"
      style={{ backgroundImage: `url(${closeBtn && closeBtn})` }}
      onClick={() => onClick()}
      role="button"
      {...rest}
    />
  );
}
