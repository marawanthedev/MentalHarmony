import "./profileForm.scss";
import React, { useEffect } from "react";
import CustomButton from "../button/button";

type IProfileForm = {
  formTitle: string;
  formInputs: any[];
  formSubmissionCallBack: Function;
};
export default function ProfileForm({
  formTitle,
  formInputs,
  formSubmissionCallBack,
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
  useEffect(() => {
    return () => {};
  }, []);
  const renderFormInputs = () => {
    return formInputs.map((formInput, index) => {
      return (
        <div className="form-group" key={index}>
          <label htmlFor={`${formInput.id}`}>{formInput.label}</label>
          <input
            id={formInput.id}
            type={formInput.type}
            name={formInput.name}
            required={true}
            placeholder={formInput.value ? formInput.value : null}
            defaultValue={formInput.value ? formInput.value : null}
            onChange={(e) => (profileInfo[formInput.id] = e.target.value)}
          />
        </div>
      );
    });
  };

  return (
    <div className="profile-form">
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
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
                onClick={() => formSubmissionCallBack(profileInfo)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
