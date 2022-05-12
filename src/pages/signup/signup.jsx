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

  const [userType, setUserType] = useState("student");
  const alternatingInputs = {
    serviceProviderSpecialKeyInput: {
      type: "text",
      placeHolder: "Enter Special Key",
      displayType: "block",
      customLabel: "Special Key*",
      className: "specialKey form__right-side__innerForm__input-group",
      errorAlert: "Full name should have a min length of 4",
      minLength: 4,
      toggler: "isServiceProvider",
    },
    facultyNameInput: {
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

  const [formInputs, setFormInputs] = useState([
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
          if (checkboxValue === true) {
            //** */ setting user type
            setUserType("serviceprovider");

            return alternatingInputs.serviceProviderSpecialKeyInput;
          } else {
            //** */ setting user type
            setUserType("student");
            return alternatingInputs.facultyNameInput;
          }
        }

        return null;
      })
    );
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
  useEffect(() => {}, [formInputs]);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Signup succeeded");
      setTimeout(() => {
        history.push("/");
      }, 3500);
    }
    if (isError) {
      toast.error("Email Address is already in use!");
    }
    if (isLoading) {
      return <Spinner />;
    }
    //reseting submission status
    dispatch(reset());
  }, [user, isError, isSuccess, isLoading, dispatch, history]);
  return (
    <div>
      <Form
        type="signup"
        formInputs={formInputs}
        formButtons={formButtons}
        goBackCallBack={() => history.goBack()}
        handleCheckBoxClick={handleCheckBoxClick}
        SubmitFormCallback={(userInfo) => handleSubmit(userInfo)}
      ></Form>
    </div>
  );
}
