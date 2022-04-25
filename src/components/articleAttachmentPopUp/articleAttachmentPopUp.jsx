import React from "react";
import "./articleAttachmentPopUp.scss";
import FormInputGroup from "../formInput/formInput";
import CustomButton from "../button/button";
import CloseBtn from "../closeBtn/closeBtn";

import { useState } from "react";
export default function ArticleAttachmentPopUp({
  submitCallback,
  closeBtnCallback,
}) {
  const [articleUrl, setArticleUrl] = useState(null);

  if (document.querySelector("input")) {
    document.querySelector("input").classList.remove("error-alert");
  }
  return (
    <div className="article-attachment-popup">
      <CloseBtn onClick={closeBtnCallback} />

      <div className="popup-header">Article Attachment</div>
      <span className="article-attachment-popup__form-input">
        <FormInputGroup
          type="text"
          placeHolder="Article URL"
          customLabel="Write Article URL"
          displayType="block"
          className={`articleUrl form__right-side__innerForm__input-group`}
          onChange={(value) => setArticleUrl(value)}
        />
      </span>
      <span className="custom-button-container">
        <CustomButton
          type={"button"}
          backGroundColor="#4F4F4F"
          innerText={"Save attachment"}
          color={"white"}
          displayType={"block"}
          width="18rem"
          height="4.4rem"
          fontWeight="600"
          onClick={() => {
            if (
              articleUrl !== null &&
              articleUrl !== undefined &&
              articleUrl !== ""
            ) {
              submitCallback();
            } else {
              document.querySelector("input").classList.add("error-alert");
            }
          }}
        />
      </span>
    </div>
  );
}
