import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../../container/form/form";
export default function Login() {
  let history = useHistory();

  const formInputs = [
    {
      type: "text",
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
      minLength: 8,
    },
  ];
  const formButtons = [
    {
      type: "button",
      backGroundColor: "#1565D8",
      innerText: "Login Account",
      color: "white",
      displayType: "block",
      width: "100%",
      margin: "2.5rem 0",
      boxShadow: "none",
      icon: null,
    },
  ];
  return (
    <>
      <div className="login-container">
        <Form
          type="login"
          formInputs={formInputs}
          formButtons={formButtons}
          goBackCallBack={() => history.goBack()}
          SubmitFormCallback={() => {}}
        ></Form>
      </div>
    </>
  );
}
