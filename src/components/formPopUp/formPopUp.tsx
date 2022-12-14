import React from "react";
import "./formPopUp.scss";
import FormInput from "../formInput/formInput";
import CustomButton from "../button/button";
import CloseBtn from "../closeBtn/closeBtn";
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

      <div className="popup-header">{formTitle}</div>
      <span className="article-attachment-popup__form-input">
        <FormInput
          type="text"
          placeHolder={inputPlaceHolder}
          customLabel={inputLabel}
          displayType="block"
          initialValue={initialValue ? initialValue : ""}
          className={`articleUrl form__right-side__innerForm__input-group`}
          onChange={(value: string) => setFormInput(value)}
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
