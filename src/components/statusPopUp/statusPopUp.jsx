import React from "react";
import successImg from "../../assets/images/checked.png";
import failedImg from "../../assets/images/cancel.png";
import CloseBtn from "../closeBtn/closeBtn";
import CustomButton from "../button/button";
import "./statusPopUp.scss";

export default function StatusPopUp({
  closeBtnOnClick,
  ctaBtnOnClick,
  success,
}) {
  return (
    <div className={`popup__status `}>
      <div
        className="popup__status__icon background-image-util"
        style={{
          backgroundImage: `url(${success ? successImg : failedImg})`,
        }}
      />

      <CloseBtn onClick={closeBtnOnClick}></CloseBtn>

      <div className="popup-header mt-4">{success ? "success" : "failed"}</div>
      <div className="popup-paragraph mt-2">
        {success
          ? "Your request has been sent!"
          : "Your request was not sent successfully, try again later"}
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
