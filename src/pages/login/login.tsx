import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../../container/form/form";
import { useSelector, useDispatch } from "react-redux";
import { login, resetAuth } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "../../components/spinner/spinner";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import { AppDispatch, RootState } from "../../redux/store";

import "./login.scss";
export default function Login() {
  let history = useHistory();
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

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

  const handleSubmit = (userInfo: any) => {
    dispatch(login(userInfo));
  };

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
    successCallBack: () =>
      setTimeout(() => {
        history.push("/");
      }, 3500),
  });

  useEffect(() => {
    //reseting submission status
    dispatch(resetAuth());
  }, [user, isError, isSuccess, isLoading, dispatch, history]);

  return (
    <div className="login-container">
      {showSpinner ? <Spinner /> : null}
      <div className="login-container">
        <Form
          type="login"
          formInputs={formInputs}
          formButtons={formButtons}
          goBackCallBack={() => history.goBack()}
          SubmitFormCallback={(userInfo: any) => handleSubmit(userInfo)}
        />
      </div>
    </div>
  );
}
