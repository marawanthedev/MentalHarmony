import React from "react";
import "./FormPopUp.scss";
import FormInput from "interface/formInput/formInput";
import CustomButton from "interface/button/button";
import CloseBtn from "components/CloseBtn/CloseBtn";
import { useState } from "react";

type FormPopUpProps = {
  submitCallback: Function;
  closeBtnCallback: Function;
  formTitle: string;
  inputPlaceHolder: string;
  inputLabel: string;
  initialValue: string;
};
export default function FormPopUp({
  submitCallback,
  closeBtnCallback,
  formTitle,
  inputPlaceHolder,
  inputLabel,
  initialValue,
}: FormPopUpProps) {
  const [formInput, setFormInput] = useState<string>("");

  document.querySelector("input")?.classList.remove("error-alert");

  return (
    <div className="article-attachment-popup">
      <CloseBtn onClick={closeBtnCallback} />

      <div className="popup-header" title="title">
        {formTitle}
      </div>
      <span className="article-attachment-popup__form-input">
        <FormInput
          type="text"
          placeHolder={inputPlaceHolder}
          customLabel={inputLabel}
          displayType="block"
          initialValue={initialValue ? initialValue : ""}
          className={`articleUrl form__right-side__innerForm__input-group`}
          onChange={(value: string) => setFormInput(value)}
          title="form-popup-input"
        />
      </span>
      <span className="align-center">
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
              (formInput !== null &&
                formInput !== undefined &&
                formInput !== "") ||
              (initialValue !== null &&
                initialValue !== undefined &&
                initialValue !== "")
            ) {
              submitCallback(formInput);
            } else {
              document.querySelector("input")?.classList.add("error-alert");
            }
          }}
        />
      </span>
    </div>
  );
}
