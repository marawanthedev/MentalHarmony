import "./serviceProviderRequestPopUp.scss";
import React from "react";
import CustomButton from "interface/button/button";
import { useState } from "react";
import CloseBtn from "components/CloseBtn/CloseBtn";
import StatusPopUp from "components/statusPopUp/statusPopUp";

type IServiceProviderRequestPopUpProps = {
  selectedCard: any;
  closePopUpCallBack: Function;
  submitCallBack: Function;
};

export default function ServiceProviderRequestPopUp({
  selectedCard,
  closePopUpCallBack,
  submitCallBack,
}: IServiceProviderRequestPopUpProps) {
  const [visible, setVisiblity] = useState<boolean>(true);
  const [showRequestSubmissionStatus, setShowSubmissionStatus] =
    useState<boolean>(false);

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

        <div className="popup-header mt-4">{selectedCard.name}</div>

        {/* later done using backend if possible */}
        <div
          className="sp-request-popup__avatar background-image-util"
          style={{ backgroundImage: `url(${selectedCard.avatar})` }}
        ></div>
        <div className="popup-header">{selectedCard.speciality}</div>
        <div className="popup-paragraph mt-2">{selectedCard.description}</div>
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
          onClick={() => {
            submitCallBack();
            // setShowSubmissionStatus(true);
          }}
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
