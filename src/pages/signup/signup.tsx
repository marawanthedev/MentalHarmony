import React from "react";
import "./signup.scss";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "container/form/form";
import { useSelector, useDispatch } from "react-redux";
import { register, resetAuth } from "redux/features/auth/authSlice";
import Spinner from "components/spinner/spinner";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import { AppDispatch, RootState } from "redux/store";
import ObjectCleanse from "util/objectCleanse";

export default function Signup() {
  let history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  // similar to props and stating the part of store to look at
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state: RootState) => state.auth
  );
  const [userType, setUserType] = useState("student");
  let checkBoxValue = false;

  const alternatingInputs: any = {
    serviceprovider: {
      type: "text",
      placeHolder: "Enter Speciality",
      displayType: "block",
      customLabel: "Speciality *",
      className: "speciality form__right-side__innerForm__input-group",
      errorAlert: "Speciality should have a min length of 4",
      minLength: 4,
      toggler: "isServiceProvider",
    },
    student: {
      type: "text",
      placeHolder: "Enter Faculty Name",
      displayType: "block",
      customLabel: "Faculty Name*",
      className: "faculty_name form__right-side__innerForm__input-group",
      errorAlert: "Full name should have a min length of 4",
      minLength: 4,
      toggler: "isServiceProvider",
    },
  };
  const getInnerInput = () => {
    return alternatingInputs[userType];
  };

  const formInputs = [
    {
      type: "text",
      placeHolder: "Enter Full Name",
      displayType: "block",
      customLabel: "FullName*",
      className: "name form__right-side__innerForm__input-group",
      errorAlert: "Full name should have a min length of 5",
      minLength: 5,
    },
    {
      type: "email",
      placeHolder: "Enter Email Address",
      displayType: "block",
      customLabel: "Email Address*",
      className: "email form__right-side__innerForm__input-group",
      errorAlert: "Please enter a valid email address",
      minLength: null,
    },
    {
      type: "password",
      placeHolder: "Enter Password",
      displayType: "block",
      customLabel: "Password*",
      className: "password form__right-side__innerForm__input-group",
      errorAlert: "Password should have a min length of 8",
      minLength: 8,
    },
    getInnerInput(),
    {
      type: "checkbox",
      placeHolder: null,
      displayType: "inline-block",
      customLabel: "Is service provider",
      className: "isServiceProvider form__right-side__innerForm__input-group",
    },
    // ...alternatingInputs[userType],
  ];

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

  const handleCheckBoxClick = (checkboxValue: boolean) => {
    checkBoxValue = !checkBoxValue;
    if (checkboxValue === true) {
      //** */ setting user type
      setUserType("serviceprovider");
    } else {
      //** */ setting user type
      setUserType("student");
    }
  };

  const handleSubmit = async (userInfo: any) => {
    //dispatching register redux action

    const user = {
      name: userInfo.name,
      password: userInfo.password,
      faculty_name: userInfo.faculty_name,
      email: userInfo.email,
      speciality: userInfo.speciality && userInfo.speciality,
      type: userType,
    };

    dispatch(register(ObjectCleanse(user)));
  };

  useEffect(() => {}, [userType]);

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
    //reset-ing submission status
    setTimeout(() => {
      dispatch(resetAuth());
    }, 2000);
  }, [user, isError, isSuccess, isLoading, dispatch, history]);

  return (
    <div className="signup-container">
      {showSpinner && <Spinner />}
      <Form
        type="signup"
        formInputs={formInputs}
        formButtons={formButtons}
        checkBoxValue={checkBoxValue}
        goBackCallBack={() => history.goBack()}
        handleCheckBoxClick={handleCheckBoxClick}
        SubmitFormCallback={(userInfo: any) => handleSubmit(userInfo)}
      />
    </div>
  );
}
