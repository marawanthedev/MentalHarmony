import React from "react";
import "./dialogPopUp.scss";
import CustomButton from "components/button/button";
import CloseBtn from "components/closeBtn/closeBtn";

type IDialogPopUp = {
  cancelCallBack: Function;
  confirmCallBack: Function;
};

export default function DialogPopUp({
  cancelCallBack,
  confirmCallBack,
}: IDialogPopUp) {
  return (
    <div className="dialog-popup">
      <CloseBtn onClick={cancelCallBack} />
      <div className="dialog-popup__header">Calm Down</div>
      <div className="dialog-popup__paragraph">
        You are in serious action now. Be careful before you delete this field.
        It will be disappear at universe, forever.
      </div>
      <div className="dialog-popup__buttons-container">
        <CustomButton
          type={"button"}
          backGroundColor="white"
          border="1px solid black"
          innerText="Deny"
          color={"black"}
          displayType={"block"}
          width="10rem"
          height="2.4rem"
          margin="2.5rem 1rem"
          fontWeight="400"
          fontSize="1.2rem"
          borderRadius="3px"
          onClick={cancelCallBack}
        />
        <CustomButton
          type={"button"}
          backGroundColor="black"
          border="1px solid black"
          innerText="Confirm"
          color={"white"}
          displayType={"block"}
          width="10rem"
          height="2.4rem"
          margin="2.5rem 1rem"
          fontWeight="400"
          fontSize="1.2rem"
          borderRadius="3px"
          onClick={confirmCallBack}
        />
      </div>
    </div>
  );
}
