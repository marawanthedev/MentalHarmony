import React, { useEffect } from "react";
import FeelingPopUp from "components/FeelingPopUp/FeelingPopUp";
import { useState } from "react";
import FormPopUp from "components/FormPopUp/FormPopUp";
import StatusPopUp from "components/StatusPopUp/StatusPopUp";
import { connect, ConnectedProps } from "react-redux";
import {
  addArticleAttachment,
  getArticles,
  reset,
} from "redux/features/dailyPopUp/dailyPopUpSlice";
import { RootState } from "redux/store";
import { selectDailyPopupState } from "redux/features/dailyPopUp/dailyPopUpSelector";

function mapState(state: RootState) {
  return { ...selectDailyPopupState(state) };
}

const mapDispatch = {
  addArticleAttachment,
  getArticles,
  reset,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AttachUsefulArticles({
  articleAttachments,
  isFormSuccess,
  isFormError,
  addArticleAttachment,
  getArticles,
  reset,
}: PropsFromRedux) {
  const [formVisiblity, setFormVisiblity] = useState<boolean>(true);
  const [showArticleAttachmentForm, setshowArticleAttachmentForm] =
    useState<boolean>(false);
  const [selectedFeeling, setSelectedFeeling] = useState<any>("");

  /*eslint-disable */
  useEffect(() => {
    getArticles();
    reset();
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
      const existingAttachment = articleAttachments?.find(
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
            console.log(formInput);
            addArticleAttachment({
              article_url: formInput,
              article_feeling_relation: selectedFeeling.text,
            });
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
      {isFormSuccess ||
        (isFormError && (
          <StatusPopUp
            success={isFormSuccess ? true : false}
            closeBtnOnClick={() => {
              // setFormVisiblity(true);
              setshowArticleAttachmentForm(false);
              reset();
            }}
          />
        ))}
      {handleRendering()}
    </>
  );
}

export { AttachUsefulArticles }; // un-connected version
export default connector(AttachUsefulArticles); // connected version
