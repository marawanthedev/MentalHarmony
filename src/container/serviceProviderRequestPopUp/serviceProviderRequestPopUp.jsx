import "./serviceProviderRequestPopUp.scss";
import React from "react";
import CustomButton from "../../components/button/button";
import { useState } from "react";
import CloseBtn from "../../components/closeBtn/closeBtn";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";

export default function ServiceProviderRequestPopUp({
  selectedCard,
  closePopUpCallBack,
}) {
  const [visible, setVisiblity] = useState(true);
  const [showRequestSubmissionStatus, setShowSubmissionStatus] =
    useState(false);

  const requestPopUp = () => {
    return (
      <div
        className={`sp-request-popup  ${
          visible && !showRequestSubmissionStatus
            ? "animate__animated animate__fadeIn"
            : "animate__animated animate__fadeOut"
        }`}
      >
        <CloseBtn
          onClick={() => {
            setVisiblity(false);
            closePopUpCallBack();
          }}
        />

        <div className="popup-header mt-4">{selectedCard.spName}</div>
        <div
          className="sp-request-popup__avatar background-image-util"
          style={{ backgroundImage: `url(${selectedCard.spAvatar})` }}
        ></div>
        <div className="popup-header">{selectedCard.spHeader}</div>
        <div className="popup-paragraph mt-2">
          Specialized in stress managment assistance
        </div>
        {/* custom button */}
        <CustomButton
          type={"button"}
          backGroundColor="#4F4F4F"
          innerText={"Request an appointment"}
          color={"white"}
          displayType={"block"}
          width="80%"
          height="4rem"
          margin="2.5rem 0"
          fontWeight="500"
          onClick={() => setShowSubmissionStatus(true)}
        />
      </div>
    );
  };

  const showSubmissionRequestStatusPopUp = () => {
    return (
      <StatusPopUp
        success={true}
        closeBtnOnClick={() => {
          setVisiblity(false);
          setShowSubmissionStatus(false);
          closePopUpCallBack();
        }}
      />
    );
  };
  return (
    <>
      {showRequestSubmissionStatus === false
        ? requestPopUp()
        : showSubmissionRequestStatusPopUp()}
    </>
  );
}