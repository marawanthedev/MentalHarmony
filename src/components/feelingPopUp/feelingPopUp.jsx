import React from "react";
import "./feelingPopUp.scss";
import CustomButton from "../button/button";
import sadIcon from "../../assets/images/loudly-crying-face.png";
import unsureIcon from "../../assets/images/neutral-face.png";
import goodIcon from "../../assets/images/smiling-face-with-smiling-eyes.png";
import happyIcon from "../../assets/images/happy-face-with-enlarged-eyes.png";
import CloseBtn from "../closeBtn/closeBtn";
import { useState } from "react";

export default function FeelingPopUp({
  closeBtnCallBack,
  feelingSelectionCallBack,
  submitCallBack,
  showCloseBtn,
  submitBtnText,
}) {
  const [selectedFeelingIndex, setSelectedFeelingIndex] = useState(null);
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
  return (
    <div className={`feeling-popup animate__animated animate__fadeIn `}>
      {showCloseBtn !== false ? <CloseBtn onClick={closeBtnCallBack} /> : null}

      <h1 className="popup-header mt-1 mb-1">Daily popup</h1>
      <p className="popup-paragraph">
        Hi there, we would appreciate you telling us how are you feeling today?
      </p>
      <div className="feeling-popup__feelings-row">
        {feelingsList.map((feeling, index) => (
          <div
            className={`feeling-popup__feeling ${
              index === selectedFeelingIndex
                ? "feeling-popup__feeling__selected"
                : null
            }`}
            key={index}
            onClick={() => {
              setSelectedFeelingIndex(index);
              feelingSelectionCallBack(feelingsList[index]);
            }}
          >
            <div
              className="feeling-popup__feeling__icon background-image-util"
              style={{ backgroundImage: `url(${feeling.icon})` }}
            />
            <div className="feeling-popup__feeling__text">{feeling.text}</div>
          </div>
        ))}
      </div>
      <CustomButton
        type={"button"}
        backGroundColor="#2C73EB"
        innerText={submitBtnText}
        color={"white"}
        displayType={"block"}
        width="100%"
        height="4rem"
        margin="2.5rem 0"
        fontWeight="600"
        onClick={submitCallBack}
      />
    </div>
  );
}
