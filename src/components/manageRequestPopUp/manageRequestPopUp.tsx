import React from "react";
import CustomButton from "../button/button";
import CloseBtn from "../closeBtn/closeBtn";
import "./manageRequestPopUp.scss";

interface Button {
  text: string;
  color: string;
  callback: Function;
}

type ManageRequestProps = {
  closeBtnCallback: Function;
  popupHeader: string;
  popupParagraph: string;
  // todo not be optional
  button_1: Button;
  button_2: Button;
};

export default function ManageRequestPopUp({
  closeBtnCallback,
  popupHeader,
  popupParagraph,
  button_1,
  button_2,
}:ManageRequestProps) {
  return (
    <div className="manage-request-popup">
      <CloseBtn onClick={closeBtnCallback} />
      <div className="manage-request-popup__content">
        <div className="manage-request-popup__header ">{popupHeader}</div>
        <div className="manage-request-popup__paragraph">{popupParagraph}</div>
        <div className="dialog-popup__buttons-container">
          <CustomButton
            type={"button"}
            backGroundColor={button_1?.color}
            innerText={button_1?.text}
            color={"white"}
            displayType={"block"}
            width="18rem"
            height="4rem"
            margin="2.5rem 1rem"
            fontWeight="400"
            fontSize="1.2rem"
            borderRadius="8px"
            onClick={button_1.callback}
          />
          <CustomButton
            type={"button"}
            backGroundColor={button_2?.color}
            innerText={button_2?.text}
            color={"white"}
            displayType={"block"}
            width="18rem"
            height="4rem"
            margin="2.5rem 1rem"
            fontWeight="400"
            fontSize="1.2rem"
            borderRadius="8px"
            onClick={button_2.callback}
          />
        </div>
      </div>
    </div>
  );
}
