import React from "react";
import closeBtn from "assets/images/closeBtn.webp";
import "./CloseBtn.scss";

type closeBtnProps = {
  onClick: Function;
  [rest: string]: any;
};
export default function CloseBtn({ onClick, ...rest }: closeBtnProps) {
  return (
    <div
      className="close__btn background-image-util"
      style={{ backgroundImage: `url(${closeBtn && closeBtn})` }}
      role="button"
      {...rest}
      onClick={() => onClick()}
    />
  );
}
