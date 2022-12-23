import React from "react";
import "./dailyPopUp.scss";
import StatusPopUp from "components/statusPopUp/statusPopUp";
import { useState } from "react";
import FeelingPopUp from "components/feelingPopUp/feelingPopUp";
import { connect, ConnectedProps } from "react-redux";
import {
  getArticles,
  submitFeeling,
} from "redux/features/dailyPopUp/dailyPopUpSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { RootState } from "redux/store";
import { IFeeling } from "constants/Feeling";
import { selectDailyPopupState } from "redux/features/dailyPopUp/dailyPopUpSelector";

function mapState(state: RootState) {
  return { ...selectDailyPopupState(state) };
}
const mapDispatch = {
  getArticles,
  submitFeeling,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function DailyPopUp({
  articleAttachments,
  getArticles,
  submitFeeling,
}: PropsFromRedux) {
  const [selectedFeeling, setSelectedFeeling] = useState<IFeeling>();
  const [formVisibility, setFormVisibility] = useState(true);
  const [
    showRequestSubmissionStatusVisibility,
    setShowSubmissionStatusVisibility,
  ] = useState(false);

  /*eslint-disable */
  useEffect(() => {
    getArticles();
  }, []);
  /*eslint-enable */

  const formSubmission = () => {
    let targetAttachment: any;

    if (articleAttachments) {
      targetAttachment = articleAttachments.find(
        (article: any) =>
          article.article_feeling_relation === selectedFeeling?.text
      );
    }

    //submit feeling to backend
    //** bugged and will be fixed later
    // todo check later
    if (selectedFeeling) {
      submitFeeling(selectedFeeling.text);
    }

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
          feelingSelectionCallBack={(feeling: IFeeling) =>
            setSelectedFeeling(feeling)
          }
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

  return <>{handleRending()}</>;
}

export { DailyPopUp }; // un-connected version

export default connector(DailyPopUp); // connected version
