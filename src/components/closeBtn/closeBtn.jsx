import React from "react";
import closeBtn from "../../assets/images/closeBtn.webp";
import "./closeBtn.scss";
export default function CloseBtn({ onClick }) {
  return (
    <div
      className="close__btn background-image-util"
      style={{ backgroundImage: `url(${closeBtn})` }}
      onClick={onClick}
    />
  );
}
