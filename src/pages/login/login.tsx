import React from "react";
import { useHistory } from "react-router-dom";
import Form from "container/form/form";
import { connect, ConnectedProps } from "react-redux";
import { login, resetAuth } from "redux/features/auth/authSlice";
import { useEffect } from "react";
import { RootState } from "redux/store";
import { selectAuthState } from "redux/features/auth/authSelector";

import "./login.scss";
import { ILoginUser } from "constants/ILoginUser";

function mapState(state: RootState) {
  return { ...selectAuthState(state) };
}
const mapDispatch = {
  login,
  resetAuth,
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Login({
  user,
  isLoading,
  isError,
  isSuccess,
  login,
  resetAuth,
}: PropsFromRedux) {
  const history = useHistory();

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

  const handleSubmit = (userInfo: ILoginUser) => login(userInfo);

  // todo add success callback

  useEffect(() => {
    //reseting submission status
    resetAuth();
  }, [user, isError, isSuccess, isLoading, history]);

  return (
    <div className="login-container">
      <div className="login-container">
        <Form
          type="login"
          formInputs={formInputs}
          formButtons={formButtons}
          goBackCallBack={() => history.goBack()}
          SubmitFormCallback={(userInfo: ILoginUser) => handleSubmit(userInfo)}
        />
      </div>
    </div>
  );
}

export { Login }; // unconnected version
export default connector(Login); // connection
