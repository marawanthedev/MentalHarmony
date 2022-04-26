import React from "react";
import FeelingPopUp from "../../components/feelingPopUp/feelingPopUp";
import { useState } from "react";
import FormPopUp from "../../components/formPopUp/formPopUp";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";

export default function AttachUsefulArticles() {
  const [formVisiblity, setFormVisiblity] = useState(true);
  const [showArticleAttachmentForm, setshowArticleAttachmentForm] =
    useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false);
  const [articleUrl, setArticleUrl] = useState(null);
  const handleRendering = () => {
    if (formSubmissionStatus) {
      return (
        <StatusPopUp
          success={true}
          closeBtnOnClick={() => {
            setFormVisiblity(true);
            setshowArticleAttachmentForm(false);
            setFormSubmissionStatus(false);
          }}
        />
      );
    }

    if (formVisiblity && !showArticleAttachmentForm) {
      return (
        <FeelingPopUp
          submitBtnText="Select feeling"
          feelingSelectionCallBack={(feeling) => setSelectedFeeling(feeling)}
          showCloseBtn={false}
          submitCallBack={() => {
            setFormVisiblity(false);
            setshowArticleAttachmentForm(true);
          }}
        />
      );
    }
    if (!formVisiblity && showArticleAttachmentForm) {
      return (
        <FormPopUp
          formTitle="Article attachment"
          inputLabel="Write Article URL"
          inputPlaceHolder="Article URL"
          submitCallback={(formInput) => {
            setFormSubmissionStatus(true);
            setArticleUrl(formInput);
          }}
          closeBtnCallback={() => {
            setFormVisiblity(true);
            setshowArticleAttachmentForm(false);
          }}
        />
      );
    }
  };

  return <>{handleRendering()}</>;
}
