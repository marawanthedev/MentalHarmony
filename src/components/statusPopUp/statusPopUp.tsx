import React from "react";
import successImg from "assets/images/checked.webp";
import failedImg from "assets/images/cancel.webp";
import CloseBtn from "components/CloseBtn/CloseBtn";
import CustomButton from "interface/button/button";
import "./StatusPopUp.scss";
import { useHistory } from "react-router-dom";
import { BaseInterface } from "constants/baseInterface";

interface StatusPopUpProps extends BaseInterface {
  closeBtnOnClick: Function;
  success: boolean;
}

export default function StatusPopUp({
  closeBtnOnClick,
  success,
  title,
}: StatusPopUpProps) {
  const history = useHistory();

  return (
    <div className={`popup__status `} title={title}>
      <div
        className="popup__status__icon background-image-util"
        style={{
          backgroundImage: `url(${success ? successImg : failedImg})`,
        }}
      />

      <CloseBtn onClick={closeBtnOnClick} title={`${title}-close-btn`} />

      <div className="popup-header mt-4" title={`${title}-status`}>
        {success ? "success" : "failed"}
      </div>
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
        title={`${title}-home-btn`}
        onClick={() => history.push("/")}
      />
    </div>
  );
}
