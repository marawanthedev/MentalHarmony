import React from "react";
import "./formClosure.scss";
import loginClosure from "../../assets/images/loginFigure.png";
import signupClosure from "../../assets/images/signupFigure.jpg";
import CustomButton from "../button/button";
import { useHistory } from "react-router-dom";
export default function FormClosure({
  formType,
  formSubmissionSuccessStatus,
  resetFormCallBack,
}) {
  const history = useHistory();
  const getFigure = (formType) => {
    switch (formType) {
      case "login":
        return loginClosure;

      case "signup":
        return signupClosure;

      default:
        return null;
    }
  };

  const redirectToHomePage = () => {
    return setTimeout(() => history.push("/"), 2000);
  };
  const getFormContent = (formSubmissionSuccessStatus) => {
    if (formSubmissionSuccessStatus === "success") {
      redirectToHomePage();
      return <div className="form-closure__message">Success</div>;
    } else {
      return (
        <>
          <div className="form-closure__message">Failed</div>
          <div className="form-closure__cta">
            {formButtons.map((formButton) => (
              <CustomButton {...formButton} onClick={resetFormCallBack} />
            ))}
          </div>
        </>
      );
    }
  };

  const formButtons = [
    {
      type: "button",
      backGroundColor: "#FB4B4B",
      innerText: "Try Again",
      color: "white",
      displayType: "block",
      width: "100%",
      margin: "2.5rem 0",
      boxShadow: "none",
      icon: null,
    },
  ];
  return (
    <div className="form-closure animate__animated animate__fadeIn">
      <div className="form-closure__logo">Mental Harmony</div>
      <div className="form-closure__content">
        <div
          className="form-closure__image background-image-util"
          style={{ backgroundImage: `url(${getFigure(formType)})` }}
        ></div>
        {getFormContent(formSubmissionSuccessStatus)}
      </div>
    </div>
  );
}
