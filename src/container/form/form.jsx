import React from "react";
import "./form.scss";
import FormInputGroup from "../../components/formInput/formInput";
import CustomButton from "../../components/button/button";
import leftArrow from "../../assets/svg/left-arrow.svg";
import loginFigure from "../../assets/images/loginFigure.webp";
import signupFigure from "../../assets/images/signupFigure.webp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      formSubmissionSuccessStatus: false,
    };
  }
  validateEmailFormat = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  addKeyListener = () => {
    document.querySelector(".form").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleFormSubmission(
          this.props.formInputs,
          this.props.SubmitFormCallback
        );
      }
    });
  };
  removeKeyListener = () => {
    document.querySelector(".form").removeEventListener("keydown");
  };
  componentDidMount() {
    this.addKeyListener();
  }
  componentDidUnMount() {
    this.removeKeyListener();
  }
  getLeftSide = (type) => {
    return (
      <div className="form__left-side ">
        <div className="form__left-side__main-content">
          <div className="form__left-side__main-content__header">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Mental Harmony
            </Link>
          </div>
          <div
            className="form__left-side__main-content__img background-image-util"
            style={{
              backgroundImage: `url(${
                type === "login" ? loginFigure : signupFigure
              })`,
            }}
          ></div>
        </div>
      </div>
    );
  };
  resetForm = () => {
    this.setState({
      formSubmissionSuccessStatus: false,
      userInfo: {},
      formInputs: [],
    });
    //reset ui values
    document.querySelectorAll("input").forEach((input) => {
      input.value = null;
      input.classList.remove("error-alert");
    });
  };

  //**** to be modified */
  handleFormSubmission = (formInputs, SubmitFormCallback) => {
    const { userInfo } = this.state;

    let isFormValid = true,
      isEmailValid = false;

    formInputs.forEach((formInput) => {
      let elementIdentifer = formInput.className.split(" ")[0];
      //targeting the actual input field not its group
      let targetElement = document.querySelectorAll(`.${elementIdentifer}`)[2];
      targetElement.classList.remove("error-alert");

      if (elementIdentifer === "email") {
        isEmailValid = this.validateEmailFormat(userInfo[elementIdentifer]);
        //format error alert
        if (!isEmailValid) {
          // targetElement.classList.add("error-alert");
          toast.error(formInput.errorAlert);
          isFormValid = false;
        }
      } else {
        //length validating for non email inputs

        if (formInput.length !== null) {
          if (
            userInfo[elementIdentifer] === undefined ||
            userInfo[elementIdentifer].length < formInput.minLength
          ) {
            // targetElement.classList.add("error-alert");
            toast.error(formInput.errorAlert);
            isFormValid = false;
          }
        }
      }
    });

    // **** to be further completed for validation
    if (isFormValid) {
      SubmitFormCallback(userInfo);
    }
  };
  handleInputChange = (
    formInput,
    value,
    userInfo,
    formInputIdentfier,
    handleCheckBoxClick
  ) => {
    //nested object set state way
    if (formInput.type !== "checkbox") {
      userInfo[formInputIdentfier] = value;
    } else {
      userInfo[formInputIdentfier] = !userInfo[formInputIdentfier];
      userInfo["faculty_name"] = null;
      handleCheckBoxClick(userInfo[formInputIdentfier]);
    }
  };
  renderInputFields = (formInput, index, handleCheckBoxClick) => {
    const { userInfo } = this.state;
    // dynamically adding state attributes instead of typing it statically
    // state attrib tues will be customized to each form type

    var formInputIdentfier = formInput.className.split(" ")[0];
    if (formInput.type === "checkbox") {
      if (userInfo[formInputIdentfier] === undefined) {
        userInfo[formInputIdentfier] = false;
      }
    }

    return (
      <div
        className={`animate__animated animate__zoomInDown`}
        style={{
          width: formInput.width,
          animationDelay: `${index * 0.5}s`,
        }}
      >
        {
          // @ts-ignore
          <FormInputGroup
            key={index}
            type={formInput.type}
            placeHolder={formInput.placeHolder}
            className={formInput.className}
            customLabel={formInput.customLabel}
            displayType={formInput.displayType}
            onChange={(value) =>
              this.handleInputChange(
                formInput,
                value,
                userInfo,
                formInputIdentfier,
                handleCheckBoxClick
              )
            }
          />
        }
      </div>
    );
  };

  render() {
    const {
      formInputs,
      formButtons,
      type,
      SubmitFormCallback,
      goBackCallBack,
      handleCheckBoxClick,
    } = this.props;

    return (
      <>
        <div className={`form ${type === "signup" ? "form__extended" : null}`}>
          {this.getLeftSide(type)}

          <div className="form__right-side">
            <div
              className="form__right-side__back-btn"
              onClick={() => goBackCallBack()}
            >
              <img className="backArrow" src={leftArrow} alt="" />
              Back
            </div>
            <form
              className="form__right-side__innerForm"
              style={type === "signup" ? { top: "43%" } : { top: "50%" }}
              autoComplete="true"
            >
              <div className="form__right-side__innerForm__header">
                {type === "signup" ? (
                  <div>
                    <div className="form__right-side__innerForm__header__primary">
                      Register Individual Account!
                    </div>
                    <div className="form__right-side__innerForm__header__secondary">
                      For the purpose of industry regulation, your details are
                      required.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="form__right-side__innerForm__header__primary ">
                      Login
                    </div>
                    <div className="form__right-side__innerForm__header__secondary">
                      If you are already a member you can login with your email
                      address and password.
                    </div>
                  </div>
                )}
              </div>
              <hr className="style-two" />

              {formInputs.map((formInput, index) =>
                this.renderInputFields(formInput, index, handleCheckBoxClick)
              )}

              {formButtons.map((formButton, index) => {
                return (
                  <div
                    className=" animate__animated animate__zoomIn"
                    style={{ animationDelay: `${formButtons.length * 1.1}s` }}
                  >
                    {
                      <CustomButton
                        key={index}
                        {...formButton}
                        onClick={
                          index === 0
                            ? () => {
                                this.handleFormSubmission(
                                  formInputs,
                                  SubmitFormCallback
                                );
                              }
                            : null
                        }
                      ></CustomButton>
                    }
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
