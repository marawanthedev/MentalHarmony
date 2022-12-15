import React from "react";
import successImg from "assets/images/checked.webp";
import failedImg from "assets/images/cancel.webp";
import CloseBtn from "components/closeBtn/closeBtn";
import CustomButton from "components/button/button";
import "./statusPopUp.scss";
import { useHistory } from "react-router-dom";

type StatusPopUpProps = {
  closeBtnOnClick: Function;
  success: boolean;
};

export default function StatusPopUp({
  closeBtnOnClick,
  success,
}: StatusPopUpProps) {
  const history = useHistory();

  return (
    <div className={`popup__status `}>
      <div
        className="popup__status__icon background-image-util"
        style={{
          backgroundImage: `url(${success ? successImg : failedImg})`,
        }}
      />

      <CloseBtn onClick={closeBtnOnClick} />

      <div className="popup-header mt-4">{success ? "success" : "failed"}</div>
      <div className="popup-paragraph mt-2">
        {success ? "Process was successful!" : "Process has failed"}
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
        onClick={() => history.push("/")}
      />
    </div>
  );
}
