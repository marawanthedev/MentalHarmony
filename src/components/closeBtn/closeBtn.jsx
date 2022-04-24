import React from "react";
import closeBtn from "../../assets/images/closeBtn.png";
import "./closeBtn.scss";
export default function CloseBtn({ onClick }) {
  return (
    <div
      className="close__btn"
      style={{ backgroundImage: `url(${closeBtn})` }}
      onClick={onClick}
    />
  );
}
