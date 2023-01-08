import React from "react";
import CustomButton from "interface/button/button";
import CloseBtn from "components/CloseBtn/CloseBtn";
import "./ManageRequestPopUp.scss";
import { BaseInterface } from "constants/baseInterface";

export interface IButton {
  text: string;
  color: string;
  callback: Function;
}

interface ManageRequestProps extends BaseInterface {
  closeBtnCallback: Function;
  popupHeader: string;
  popupParagraph: string;
  button_1: IButton;
  button_2: IButton;
}

export default function ManageRequestPopUp({
  closeBtnCallback,
  popupHeader,
  popupParagraph,
  button_1,
  button_2,
  ...rest
}: ManageRequestProps) {
  return (
    <div className="manage-request-popup" {...rest}>
      <CloseBtn
        onClick={closeBtnCallback}
        title={"manage-request-popup-close-btn"}
      />
      <div className="manage-request-popup__content">
        <div className="manage-request-popup__header" title={"popup-header"}>
          {popupHeader}
        </div>
        <div
          className="manage-request-popup__paragraph"
          title="popup-paragraph"
        >
          {popupParagraph}
        </div>
        <div className="manage-request-popup__buttons-container">
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
            title="manage-request-button-1"
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
            title="manage-request-button-2"
          />
        </div>
      </div>
    </div>
  );
}
