import React from "react";
import checkedImg from "../../assets/images/checked.png";
import CloseBtn from "../closeBtn/closeBtn";
import CustomButton from "../button/button";
import "./statusPopUp.scss";

export default function StatusPopUp({ closeBtnOnClick, ctaBtnOnClick }) {
  return (
    <div className={`popup__status `}>
      <div
        className="popup__status__icon"
        style={{ backgroundImage: `url(${checkedImg})` }}
      />

      <CloseBtn onClick={closeBtnOnClick}></CloseBtn>

      <div className="popup-header mt-4">Success</div>
      <div className="popup-paragraph mt-2">
        Your request has been sent!
      </div>
      <CustomButton
        type={"button"}
        backGroundColor="#13C39C"
        innerText={"Home"}
        color={"white"}
        displayType={"block"}
        width="80%"
        height="4rem"
        margin="2.5rem 0"
        fontWeight="600"
        onClick={ctaBtnOnClick}
      />
    </div>
  );
}
