import React, { useEffect } from "react";
import FeelingPopUp from "../../components/feelingPopUp/feelingPopUp";
import { useState } from "react";
import FormPopUp from "../../components/formPopUp/formPopUp";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import { useDispatch, useSelector } from "react-redux";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import Spinner from "../../components/spinner/spinner";

import {
  addArticleAttachment,
  getArticles,
  reset,
} from "../../redux/features/dailyPopUp/dailyPopUpSlice";

export default function AttachUsefulArticles() {
  const [formVisiblity, setFormVisiblity] = useState(true);
  const [showArticleAttachmentForm, setshowArticleAttachmentForm] =
    useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const dispatch = useDispatch();

  const {
    articleAttachments,
    isSuccess,
    isError,
    isLoading,
    isFormSuccess,
    isFormError,
  } = useSelector((state) => state.dailyPopUp);

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  /*eslint-disable */
  useEffect(() => {
    dispatch(getArticles());
    dispatch(reset());
  }, []);
  /*eslint-enable */

  const handleRendering = () => {
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
      const existingAttachment = articleAttachments.find(
        (article) => article.article_feeling_relation === selectedFeeling.text
      );
      console.log(existingAttachment);
      return (
        <FormPopUp
          formTitle="Article attachment"
          inputLabel="Write Article URL"
          inputPlaceHolder="Article URL"
          initialValue={
            existingAttachment ? existingAttachment.article_url : null
          }
          submitCallback={(formInput) => {
            setshowArticleAttachmentForm(false);
            dispatch(
              addArticleAttachment({
                article_url: formInput,
                article_feeling_relation: selectedFeeling.text,
              })
            );
          }}
          closeBtnCallback={() => {
            setFormVisiblity(true);
            setshowArticleAttachmentForm(false);
          }}
        />
      );
    }
  };
  return (
    <>
      {showSpinner ? <Spinner /> : null}
      {isFormSuccess || isFormError ? (
        <StatusPopUp
          success={isFormSuccess ? true : false}
          closeBtnOnClick={() => {
            // setFormVisiblity(true);
            setshowArticleAttachmentForm(false);
            dispatch(reset());
          }}
        />
      ) : null}
      {handleRendering()}
    </>
  );
}
