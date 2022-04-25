import React from "react";
import "./dailyPopUp.scss";
import StatusPopUp from "../statusPopUp/statusPopUp";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import FeelingPopUp from "../feelingPopUp/feelingPopUp";
export default function DailyPopUp() {
  const history = useHistory();
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
          ctaBtnOnClick={() => {
            setShowSubmissionStatusVisiblity(false);
            history.push("/");
          }}
        />
      );
    }
  };

  return <>{handleRending()}</>;
}
