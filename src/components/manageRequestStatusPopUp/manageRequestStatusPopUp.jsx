import React from "react";
import "./manageRequestStatusPopUp.scss";
import CustomButton from "../button/button";
import CloseBtn from "../closeBtn/closeBtn";
import "./manageRequestStatusPopUp.scss";

export default function ManageRequestStatusPopUp({
  closeBtnCallback,
  confirmCallBack,
}) {
  return (
    <div className="manage-request-popup">
      <CloseBtn onClick={closeBtnCallback} />
      <div className="manage-request-popup__content">
        <div className="manage-request-popup__header ">
          Manage Request Status
        </div>
        <div className="manage-request-popup__paragraph">
          Update request status using the action button
        </div>
        <div className="dialog-popup__buttons-container">
          <CustomButton
            type={"button"}
            backGroundColor="#FB4B4B"
            innerText="Deny"
            color={"white"}
            displayType={"block"}
            width="18rem"
            height="4rem"
            margin="2.5rem 1rem"
            fontWeight="400"
            fontSize="1.2rem"
            borderRadius="8px"
            onClick={closeBtnCallback}
          />
          <CustomButton
            type={"button"}
            backGroundColor="black"
            innerText="Confirm"
            color={"white"}
            displayType={"block"}
            width="18rem"
            height="4rem"
            margin="2.5rem 1rem"
            fontWeight="400"
            fontSize="1.2rem"
            borderRadius="8px"
            onClick={confirmCallBack}
          />
        </div>
      </div>
    </div>
  );
  debugger;
}
