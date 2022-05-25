import React from "react";
import "./dailyPopUp.scss";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import { useState } from "react";
import FeelingPopUp from "../../components/feelingPopUp/feelingPopUp";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticles,
  submitFeeling,
} from "../../redux/features/dailyPopUp/dailyPopUpSlice";
import { useEffect } from "react";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import Spinner from "../../components/spinner/spinner";
import { toast } from "react-toastify";
export default function DailyPopUp() {
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [formVisibility, setFormVisibility] = useState(true);
  const [
    showRequestSubmissionStatusVisibility,
    setShowSubmissionStatusVisibility,
  ] = useState(false);

  const dispatch = useDispatch();
  const { articleAttachments, isSuccess, isError, isLoading } = useSelector(
    (state) => state.dailyPopUp
  );

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });
  /*eslint-disable */
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  /*eslint-enable */

  const formSubmission = () => {
    const targetAttachment = articleAttachments.find(
      (article) => article.article_feeling_relation === selectedFeeling.text
    );

    //submit feeling to backend
    //** bugged and will be fixed later
    dispatch(submitFeeling({ feeling: selectedFeeling.text }));

    setFormVisibility(false);
    setShowSubmissionStatusVisibility(true);

    setTimeout(() => {
      setShowSubmissionStatusVisibility(false);
    }, 1750);
    if (targetAttachment) {
      setTimeout(() => {
        window.open(targetAttachment.article_url);
      }, 2000);
    } else {
      toast.info("Submitted feeling does not have an associated article Yet!");
    }
  };

  const handleRending = () => {
    if (
      showRequestSubmissionStatusVisibility === false &&
      formVisibility === true
    ) {
      return (
        <FeelingPopUp
          submitBtnText="Submit feeling"
          submitCallBack={formSubmission}
          feelingSelectionCallBack={(feeling) => setSelectedFeeling(feeling)}
          closeBtnCallBack={() => {
            setFormVisibility(false);
          }}
        />
      );
    }
    if (
      showRequestSubmissionStatusVisibility === true &&
      formVisibility === false
    ) {
      return (
        <StatusPopUp
          success={true}
          closeBtnOnClick={() => {
            setFormVisibility(false);
            setShowSubmissionStatusVisibility(false);
          }}
        />
      );
    }
  };

  return (
    <>
      {showSpinner ? <Spinner /> : null}
      {handleRending()}
    </>
  );
}
