import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../container/form/form";

export default function Signup() {
  let history = useHistory();

  const alternatingInputs = {
    serviceProviderSpecialKeyInput: {
      type: "text",
      placeHolder: "Enter Special Key",
      displayType: "block",
      customLabel: "Special Key*",
      className: "specialKey form__right-side__innerForm__input-group",
      minLength: 4,
      toggler: "isServiceProvider",
    },
    facultyNameInput: {
      type: "text",
      placeHolder: "Enter Faculty Name",
      displayType: "block",
      customLabel: "Faculty Name*",
      className: "facultyName form__right-side__innerForm__input-group",
      minLength: 4,
      toggler: "isServiceProvider",
    },
  };

  const [formInputs, setFormInputs] = useState([
    {
      type: "text",
      placeHolder: "Enter Full Name",
      displayType: "block",
      customLabel: "FullName*",
      className: "fullName form__right-side__innerForm__input-group",
      minLength: 5,
    },
    {
      type: "email",
      placeHolder: "Enter Email Address",
      displayType: "block",
      customLabel: "Email Address*",
      className: "email form__right-side__innerForm__input-group",
      minLength: null,
    },
    {
      type: "password",
      placeHolder: "Enter Password",
      displayType: "block",
      customLabel: "Password*",
      className: "password form__right-side__innerForm__input-group",
      minLength: 8,
    },
    alternatingInputs.facultyNameInput,
    {
      type: "checkbox",
      placeHolder: null,
      displayType: "inline-block",
      customLabel: "Is service provider",
      className: "isServiceProvider form__right-side__innerForm__input-group",
    },
  ]);

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

  const handleCheckBoxClick = (checkboxValue) => {
    setFormInputs(
      formInputs.map((formInput) => {
        if (formInput.toggler === undefined || formInput.toggler === "null") {
          return formInput;
        }
        if (formInput.toggler === "isServiceProvider") {
          if (checkboxValue === true)
            return alternatingInputs.serviceProviderSpecialKeyInput;
          else return alternatingInputs.facultyNameInput;
        }

        return null;
      })
    );
  };
  useEffect(() => {}, [formInputs]);
  return (
    <div>
      <Form
        type="signup"
        formInputs={formInputs}
        formButtons={formButtons}
        goBackCallBack={() => history.goBack()}
        handleCheckBoxClick={handleCheckBoxClick}
        SubmitFormCallback={() => {}}
      ></Form>
    </div>
  );
}
