import React, { useEffect } from "react";
import FeelingPopUp from "components/feelingPopUp/feelingPopUp";
import { useState } from "react";
import FormPopUp from "components/formPopUp/formPopUp";
import StatusPopUp from "components/statusPopUp/statusPopUp";
import { useDispatch, useSelector } from "react-redux";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import Spinner from "components/spinner/spinner";
import {
  addArticleAttachment,
  getArticles,
  reset,
} from "redux/features/dailyPopUp/dailyPopUpSlice";
import { AppDispatch } from "redux/store";

export default function AttachUsefulArticles() {
  const [formVisiblity, setFormVisiblity] = useState<boolean>(true);
  const [showArticleAttachmentForm, setshowArticleAttachmentForm] =
    useState<boolean>(false);
  const [selectedFeeling, setSelectedFeeling] = useState<any>("");
  const dispatch = useDispatch<AppDispatch>();

  const {
    articleAttachments,
    isSuccess,
    isError,
    isLoading,
    isFormSuccess,
    isFormError,
    // todo see what type of use selector state is
  } = useSelector((state: any) => state.dailyPopUp);

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  /*eslint-disable */
  useEffect(() => {
    // todo see whats wrong with redux dispatch in ts
    dispatch(getArticles());
    dispatch(reset());
  }, []);
  /*eslint-enable */

  const handleRendering = () => {
    if (formVisiblity && !showArticleAttachmentForm) {
      return (
        <FeelingPopUp
          submitBtnText="Select feeling"
          feelingSelectionCallBack={(feeling: string) =>
            setSelectedFeeling(feeling)
          }
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
        // todo remove the any
        (article: any) =>
          article.article_feeling_relation === selectedFeeling.text
      );

      return (
        <FormPopUp
          formTitle="Article attachment"
          inputLabel="Write Article URL"
          inputPlaceHolder="Article URL"
          initialValue={
            existingAttachment ? existingAttachment.article_url : null
          }
          submitCallback={(formInput: string) => {
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
      {isFormSuccess ||
        (isFormError && (
          <StatusPopUp
            success={isFormSuccess ? true : false}
            closeBtnOnClick={() => {
              // setFormVisiblity(true);
              setshowArticleAttachmentForm(false);
              dispatch(reset());
            }}
          />
        ))}
      {handleRendering()}
    </>
  );
}
