import React from "react";
import "./FeelingPopUp.scss";
import CustomButton from "interface/button/button";
import { feelingsList } from "./constants";
import CloseBtn from "components/CloseBtn/CloseBtn";
import { useState } from "react";
import { IFeeling } from "constants/Feeling";

type FeelingPopUpProp = {
  closeBtnCallBack?: Function;
  feelingSelectionCallBack: Function;
  submitCallBack: Function;
  showCloseBtn?: boolean;
  submitBtnText: string;
};
export default function FeelingPopUp({
  closeBtnCallBack,
  feelingSelectionCallBack,
  submitCallBack,
  showCloseBtn,
  submitBtnText,
}: FeelingPopUpProp) {
  const [selectedFeelingIndex, setSelectedFeelingIndex] = useState<number>();
  useState(false);

  return (
    <div className={`feeling-popup animate__animated animate__fadeIn `}>
      {showCloseBtn !== false && (
        <CloseBtn
          onClick={() => (closeBtnCallBack ? closeBtnCallBack() : null)}
          title="feeling-pop-close-btn"
        />
      )}

      <h1 className="popup-header mt-1 mb-1">Daily popup</h1>
      <p className="popup-paragraph">
        Hi there, we would appreciate you telling us how are you feeling today?
      </p>
      <div className="feeling-popup__feelings-row">
        {feelingsList.map((feeling: IFeeling, index: number) => (
          <div
            className={`feeling-popup__feeling ${
              index === selectedFeelingIndex &&
              "feeling-popup__feeling__selected"
            }`}
            key={index}
            onClick={() => {
              setSelectedFeelingIndex(index);
              feelingSelectionCallBack(feelingsList[index]);
            }}
            title="feeling-selection"
          >
            <div
              className="feeling-popup__feeling__icon background-image-util"
              style={{ backgroundImage: `url(${feeling.icon})` }}
            />
            <div className="feeling-popup__feeling__text" title="feeling-text">
              {feeling.text}
            </div>
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
        title="feeling-popup-submit"
      />
    </div>
  );
}
