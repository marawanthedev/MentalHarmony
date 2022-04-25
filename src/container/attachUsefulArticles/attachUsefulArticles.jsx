import React from "react";
import FeelingPopUp from "../../components/feelingPopUp/feelingPopUp";
import { useState } from "react";
import ArticleAttachmentPopUp from "../../components/articleAttachmentPopUp/articleAttachmentPopUp";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function AttachUsefulArticles() {
  const history = useHistory();
  const [formVisiblity, setFormVisiblity] = useState(true);
  const [showArticleAttachmentForm, setshowArticleAttachmentForm] =
    useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false);

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
          ctaBtnOnClick={() => {
            history.push("/");
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
        <ArticleAttachmentPopUp
          submitCallback={() => {
            setFormSubmissionStatus(true);
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
