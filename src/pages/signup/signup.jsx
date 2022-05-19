import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../container/form/form";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner/spinner";

export default function Signup() {
  let history = useHistory();
  const dispatch = useDispatch();
  // similar to props and stating the part of store to look at
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [showSpinner, setShowSpinner] = useState(false);
  const [userType, setUserType] = useState("student");
  let checkBoxValue = false;

  const alternatingInputs = {
    serviceprovider: [
      {
        type: "text",
        placeHolder: "Enter Special Key",
        displayType: "block",
        customLabel: "Special Key*",
        className: "specialKey form__right-side__innerForm__input-group",
        errorAlert: "Full name should have a min length of 4",
        minLength: 4,
        toggler: "isServiceProvider",
      },
      {
        type: "text",
        placeHolder: "Enter Speciality",
        displayType: "block",
        customLabel: "Speciality *",
        className: "speciality form__right-side__innerForm__input-group",
        errorAlert: "Speciality should have a min length of 4",
        minLength: 4,
        toggler: "isServiceProvider",
      },
      {
        type: "text",
        placeHolder: "Enter Description",
        displayType: "block",
        customLabel: "Description *",
        className: "description form__right-side__innerForm__input-group",
        errorAlert: "Description should have a min length of 12",
        minLength: 12,
        toggler: "isServiceProvider",
      },
    ],
    student: [
      {
        type: "text",
        placeHolder: "Enter Faculty Name",
        displayType: "block",
        customLabel: "Faculty Name*",
        className: "faculty_name form__right-side__innerForm__input-group",
        errorAlert: "Full name should have a min length of 4",
        minLength: 4,
        toggler: "isServiceProvider",
      },
    ],
  };
  const getInnerInput = () => {
    return alternatingInputs[userType][0];
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

  const handleCheckBoxClick = (checkboxValue) => {
    checkBoxValue = !checkBoxValue;
    if (checkboxValue === true) {
      //** */ setting user type
      setUserType("serviceprovider");
    } else {
      //** */ setting user type
      setUserType("student");
    }
  };

  const handleSubmit = async (userInfo) => {
    //dispatching register redux action
    dispatch(
      register({
        name: userInfo.name,
        password: userInfo.password,
        faculty_name: userInfo.faculty_name,
        email: userInfo.email,
        specialKey: userInfo.specialKey,
        type: userType,
      })
    );
  };

  useEffect(() => {}, [userType]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signup succeeded");
      setTimeout(() => {
        history.push("/");
      }, 3500);
      setShowSpinner(false);
    }
    if (isError) {
      setShowSpinner(false);
      toast.error("Email Address is already in use!");
    }
    if (isLoading) {
      setShowSpinner(true);
    }

    setTimeout(() => {
      dispatch(reset());
    }, 2000);
    //reset-ing submission status
  }, [user, isError, isSuccess, isLoading, dispatch, history]);

  return (
    <div>
      {showSpinner ? <Spinner /> : null}
      <Form
        type="signup"
        formInputs={formInputs}
        formButtons={formButtons}
        checkBoxValue={checkBoxValue}
        goBackCallBack={() => history.goBack()}
        handleCheckBoxClick={handleCheckBoxClick}
        SubmitFormCallback={(userInfo) => handleSubmit(userInfo)}
      ></Form>
    </div>
  );
}
