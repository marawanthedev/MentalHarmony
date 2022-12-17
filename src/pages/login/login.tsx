import React from "react";
import { useHistory } from "react-router-dom";
import Form from "container/form/form";
import { connect, ConnectedProps } from "react-redux";
import { login, resetAuth } from "redux/features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "interface/spinner/spinner";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import { RootState } from "redux/store";
import { selectAuthState } from "redux/features/auth/authSelector";

import "./login.scss";

function mapState(state: RootState) {
  return { ...selectAuthState(state) };
}
const mapDispatch = {
  login,
  resetAuth,
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  // include component props
}

function Login({
  user,
  isLoading,
  isError,
  isSuccess,
  login,
  resetAuth,
}: Props) {
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

  const handleSubmit = (userInfo: any) => login(userInfo);

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
    resetAuth();
  }, [user, isError, isSuccess, isLoading, history]);

  return (
    <div className="login-container">
      {showSpinner && <Spinner />}
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

export { Login }; // unconnected version
export default connector(Login); // connection
