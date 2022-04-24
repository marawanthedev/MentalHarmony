import React from "react";
import "./dailyPopUp.scss";
import CustomButton from "../button/button";
import sadIcon from "../../assets/images/loudly-crying-face.png";
import unsureIcon from "../../assets/images/neutral-face.png";
import goodIcon from "../../assets/images/smiling-face-with-smiling-eyes.png";
import happyIcon from "../../assets/images/happy-face-with-enlarged-eyes.png";
import CloseBtn from "../closeBtn/closeBtn";
import StatusPopUp from "../statusPopUp/statusPopUp";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DailyPopUp() {
  const history = useHistory();

  const [selectedFeelingIndex, setSelectedFeelingIndex] = useState(null);
  const [visiblity, setVisiblity] = useState(true);
  const [showRequestSubmissionStatus, setShowSubmissionStatus] =
    useState(false);
  const feelingsList = [
    {
      icon: sadIcon,
      text: "Sad",
    },
    {
      icon: unsureIcon,
      text: "Unsure",
    },
    {
      icon: goodIcon,
      text: "Good",
    },
    {
      icon: happyIcon,
      text: "Happy",
    },
  ];

  const dailyPopup = () => {
    return (
      <div
        className={`daily-popup animate__animated animate__fadeIn ${
          !visiblity ? "daily-popup__hide" : null
        }`}
      >
        <CloseBtn
          onClick={() => {
            setVisiblity(false);
          }}
        />
        <h1 className="popup-header mt-1 mb-1">Daily popup</h1>
        <p className="popup-paragraph">
          Hi there, we would appreciate you telling us how are you feeling
          today?
        </p>
        <div className="daily-popup__feelings-row">
          {feelingsList.map((feeling, index) => (
            <div
              className={`daily-popup__feeling ${
                index === selectedFeelingIndex
                  ? "daily-popup__feeling__selected"
                  : null
              }`}
              key={index}
              onClick={() => setSelectedFeelingIndex(index)}
            >
              <div
                className="daily-popup__feeling__icon"
                style={{ backgroundImage: `url(${feeling.icon})` }}
              />
              <div className="daily-popup__feeling__text">{feeling.text}</div>
            </div>
          ))}
        </div>
        <CustomButton
          type={"button"}
          backGroundColor="#2C73EB"
          innerText={"Submit Feeling"}
          color={"white"}
          displayType={"block"}
          width="100%"
          height="4rem"
          margin="2.5rem 0"
          fontWeight="600"
          onClick={() => {
            //Submit feeling
            // feelingsList[selectedFeelingIndex]
            setVisiblity(false);
            setShowSubmissionStatus(true);
          }}
        />
      </div>
    );
  };
  const showSubmissionRequestStatusPopUp = () => {
    return (
      <StatusPopUp
        closeBtnOnClick={() => {
          setVisiblity(false);
          setShowSubmissionStatus(false);
        }}
        ctaBtnOnClick={() => {
          setShowSubmissionStatus(false);
          history.push("/");
        }}
      />
    );
  };

  return (
    <div>
      {showRequestSubmissionStatus === false
        ? dailyPopup()
        : showSubmissionRequestStatusPopUp()}
    </div>
  );
}
