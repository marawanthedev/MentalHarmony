import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../../container/form/form";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner/spinner";

export default function Login() {
  let history = useHistory();
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
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

  const handleSubmit = (userInfo) => {
    console.log(userInfo);
    dispatch(login(userInfo));
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Login succeeded");
      setTimeout(() => {
        history.push("/");
      }, 3500);
    }
    if (isError) {
      toast.error("Invalid Credentials!");
    }
    if (isLoading) {
      return <Spinner />;
    }
    //reseting submission status
    dispatch(reset());
  }, [user, isError, isSuccess, isLoading, dispatch, history]);

  return (
    <>
      <div className="login-container">
        <Form
          type="login"
          formInputs={formInputs}
          formButtons={formButtons}
          goBackCallBack={() => history.goBack()}
          SubmitFormCallback={(userInfo) => handleSubmit(userInfo)}
        ></Form>
      </div>
    </>
  );
}
