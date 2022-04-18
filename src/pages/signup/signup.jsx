import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../../container/form/form";
export default function Signup() {
  let history = useHistory();

  const formInputs = [
    {
      type: "text",
      placeHolder: "Enter Full Name",
      displayType: "block",
      customLabel: "FullName*",
      className: "fullName form__right-side__innerForm__input-group",
    },
    {
      type: "email",
      placeHolder: "Enter Email Address",
      displayType: "block",
      customLabel: "Email Address*",
      className: "email form__right-side__innerForm__input-group",
    },
    {
      type: "password",
      placeHolder: "Enter Password",
      displayType: "block",
      customLabel: "Password*",
      className: "password form__right-side__innerForm__input-group",
    },
    {
      type: "text",
      placeHolder: "Enter Faculty Name",
      displayType: "block",
      customLabel: "Faculty Name*",
      className: "facultyName form__right-side__innerForm__input-group",
    },
    {
      type: "checkbox",
      placeHolder: null,
      displayType: "inline-block",
      customLabel: "Is service provider",
      className: "isServiceProvider form__right-side__innerForm__input-group",
    },
  ];

  const serviceProviderSpecialKeyInput = {
    type: "text",
    placeHolder: "Enter SpecialKey",
    displayType: "block",
    customLabel: "Special Key*",
    className: "specialKey form__right-side__innerForm__input-group",
  };
  const formButtons = [
    {
      type: "button",
      backGroundColor: "#1565D8",
      innerText: "Sign up account",
      color: "white",
      displayType: "block",
      width: "100%",
      margin: "2.5rem 0",
      boxShadow: "none",
      icon: null,
    },
  ];
  
  return (
    <div>
      <Form
        type="signup"
        formInputs={formInputs}
        formButtons={formButtons}
        goBackCallBack={() => history.goBack()}
        serviceProviderSpecialKeyInput={serviceProviderSpecialKeyInput}
        SubmitFormCallback={() => {}}
      ></Form>
    </div>
  );
}
