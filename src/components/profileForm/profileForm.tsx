import "./ProfileForm.scss";
import React, { useEffect } from "react";
import CustomButton from "interface/button/button";
import { BaseInterface } from "constants/baseInterface";
import { FormInput } from "./../../constants/FormInput";

interface IProfileForm extends BaseInterface {
  formTitle: string;
  formInputs: FormInput[];
  formSubmissionCallBack: Function;
}
export default function ProfileForm({
  formTitle,
  formInputs,
  formSubmissionCallBack,
  title,
}: IProfileForm) {
  const profileInfo: any = {};

  /*eslint-disable */
  useEffect(() => {
    if (formInputs) {
      formInputs.forEach((input: any) => {
        profileInfo[input.id] = input.value ? input.value : null;
      });
    }
  }, [formInputs]);
  /*eslint-enable */
  const renderFormInputs = () => {
    return formInputs.map((formInput, index) => {
      return (
        <div
          className="form-group"
          key={index}
          title={`${title ? title : "profile-form"}-label`}
        >
          <label htmlFor={`${formInput.id}`}>{formInput.label}</label>
          <input
            id={formInput.id}
            type={formInput.type}
            name={formInput.name}
            required={true}
            placeholder={formInput.value && formInput.value}
            defaultValue={formInput.value && formInput.value}
            onChange={(e) => (profileInfo[formInput.id] = e.target.value)}
            title={`${title ? title : "profile-form"}-input`}
          />
        </div>
      );
    });
  };

  return (
    <div className="profile-form" title={title}>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header" title={`${title}-header`}>
            <h1>{formTitle}</h1>
          </div>
          <div className="form-content">
            <form>
              {renderFormInputs()}
              <CustomButton
                type={"button"}
                backGroundColor="#4285f4"
                innerText="Update Profile"
                color={"white"}
                displayType={"block"}
                width="100%"
                height="4rem"
                fontWeight="400"
                fontSize="1.2rem"
                borderRadius="3px"
                alignSelf="center"
                title={`${title}-submit-btn`}
                onClick={() => formSubmissionCallBack(profileInfo)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
