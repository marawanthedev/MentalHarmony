import React from "react";
import "./form.scss";
import FormInputGroup from "../../components/formInput/formInput";
import CustomButton from "../../components/button/button";
import leftArrow from "../../assets/svg/left-arrow.svg";
import FormClosure from "../../components/formClosure/formClosure";
import loginFigure from "../../assets/images/loginFigure.png";
import signupFigure from "../../assets/images/signupFigure.jpg";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      toggleFormClosure: false,
      formSubmissionSuccessStatus: false,
    };
  }
  validateEmailFormat = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  getLeftSide = (style, type) => {
    return (
      <div className="form__left-side " style={style}>
        <div className="form__left-side__main-content">
          <div className="form__left-side__main-content__header">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Mental Harmony
            </Link>
          </div>
          <div
            className="form__left-side__main-content__img"
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
      toggleFormClosure: false,
      formSubmissionSuccessStatus: false,
      userInfo: {},
    });
    //reset ui values
    document.querySelectorAll("input").forEach((input) => (input.value = null));
  };

  //**** to be modified */
  handleFormSubmission = (formInputs, SubmitFormCallback) => {
    const { userInfo, toggleFormClosure } = this.state;

    let missingField,
      isEmailValid = false;

    formInputs.forEach((formInput) => {
      let elementIdentifer = formInput.className.split(" ")[0];
      //targeting the actual input field not its group
      let targetElement = document.querySelectorAll(`.${elementIdentifer}`)[2];
      targetElement.classList.remove("error-alert");

      if (userInfo[elementIdentifer] && userInfo[elementIdentifer] !== "") {
        if (elementIdentifer === "email") {
          isEmailValid = this.validateEmailFormat(userInfo[elementIdentifer]);
          //format error alert
          if (!isEmailValid) {
            targetElement.classList.add("error-alert");
          }
        }
      } else {
        if (
          formInput.type !== "checkbox" &&
          formInput.preRequiste === undefined
        ) {
          missingField = true;
          //input entry error alert
          targetElement.classList.add("error-alert");
        } else {
          if (userInfo[formInput.preRequiste]) {
            missingField = true;
          } else {
            missingField = false;
          }
        }
      }
    });

    // **** to be further completed for validation

    this.setState({ toggleFormClosure: true });
    // !missingField
    //   ? isEmailValid
    //     ? SubmitFormCallback(userInfo)
    //     : alert("please fill a valid email")
    //   : alert("please fill in all input field");
  };
  handleInputChange = (formInput, value, userInfo, formInputIdentfier) => {
    //nested object set state way
    if (formInput.type !== "checkbox") {
      userInfo[formInputIdentfier] = value;
    } else {
      userInfo[formInputIdentfier] = !userInfo[formInputIdentfier];
      this.setState({});
    }
  };
  renderInputFields = (formInput, index) => {
    const { userInfo } = this.state;

    // dynamically adding state attributes instead of typing it statically
    // state attribtues will be customized to each form type

    var formInputIdentfier = formInput.className.split(" ")[0];
    if (formInput.type === "checkbox") {
      if (userInfo[formInputIdentfier] === undefined) {
        userInfo[formInputIdentfier] = false;
      }
    }

    if (
      formInput.preRequiste === undefined ||
      (formInput.preRequiste && userInfo.isServiceProvider === true)
    ) {
      return (
        <div
          className={`animate__animated animate__zoomInDown`}
          style={{
            width: formInput.width,
            animationDelay: `${formInput.preRequiste ? 0.25 : index * 0.5}s`,
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
                  formInputIdentfier
                )
              }
            />
          }
        </div>
      );
    }
  };

  render() {
    const {
      formInputs,
      formButtons,
      type,
      SubmitFormCallback,
      goBackCallBack,
      serviceProviderSpecialKeyInput,
    } = this.props;
    const style = {
      height: "100vh",
    };

    console.log("rendering");
    console.log(serviceProviderSpecialKeyInput);
    return (
      <>
        <div className="form">
          {this.getLeftSide(style, type)}

          <div className="form__right-side ">
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
                this.renderInputFields(formInput, index)
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
          {/* form closure */}
          {this.state.toggleFormClosure ? (
            <FormClosure
              formType={type}
              formSubmissionSuccessStatus={
                this.state.formSubmissionSuccessStatus
              }
              resetFormCallBack={this.resetForm}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default Form;
