import React from "react";
import closeBtn from "assets/images/closeBtn.webp";
import "./closeBtn.scss";

type closeBtnProps = {
  onClick: Function;
};
export default function CloseBtn({ onClick }: closeBtnProps) {
  return (
    <div
      className="close__btn background-image-util"
      style={{ backgroundImage: `url(${closeBtn && closeBtn})` }}
      onClick={() => onClick()}
    />
  );
}
