import React from "react";
import "./dailyPopUp.scss";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import { useState } from "react";
import FeelingPopUp from "../../components/feelingPopUp/feelingPopUp";

export default function DailyPopUp() {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const [formVisiblity, setFormVisiblity] = useState(true);
  const [
    showRequestSubmissionStatusVisiblity,
    setShowSubmissionStatusVisiblity,
  ] = useState(false);

  const handleRending = () => {
    if (
      showRequestSubmissionStatusVisiblity === false &&
      formVisiblity === true
    ) {
      return (
        <FeelingPopUp
          submitBtnText="Submit feeling"
          submitCallBack={() => {
            setFormVisiblity(false);
            setShowSubmissionStatusVisiblity(true);
          }}
          feelingSelectionCallBack={(feeling) => setSelectedFeeling(feeling)}
          closeBtnCallBack={() => {
            setFormVisiblity(false);
          }}
        />
      );
    }
    if (
      showRequestSubmissionStatusVisiblity === true &&
      formVisiblity === false
    ) {
      return (
        <StatusPopUp
          success={true}
          closeBtnOnClick={() => {
            setFormVisiblity(false);
            setShowSubmissionStatusVisiblity(false);
          }}
        />
      );
    }
  };

  return <>{handleRending()}</>;
}
