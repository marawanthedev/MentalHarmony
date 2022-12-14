import React from "react";
import "./addServiceProviderTab.scss";
import FormInputGroup from "../../components/formInput/formInput";
import { useState } from "react";
import CustomButton from "../../components/button/button";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
export default function AddServiceProviderForm() {
  const [specialKey, setSpecialKeyValue] = useState();
  const [showStatusPopUp, setShowStatusPopUp] = useState<boolean>(false);
  const [formVisiblity, setFormVisiblity] = useState<boolean>(true);
  //   reset-ing error alert
  if (document.querySelector("input")) {
    document.querySelector("input")?.classList.remove("error-alert");
  }

  const handleRendering = () => {
    if (showStatusPopUp && !formVisiblity) {
      return (
        <StatusPopUp
          success={true}
          closeBtnOnClick={() => {
            setShowStatusPopUp(false);
            setFormVisiblity(true);
          }}
        />
      );
    }
    if (!showStatusPopUp && formVisiblity) {
      return (
        <div className="add-service-provider-form">
          <h1 className="add-service-provider-form__header">Add Special Key</h1>
          <p className="add-service-provider-form__paragraph">
            Add service provider special key which will be used in their signup
            process
          </p>
          <FormInputGroup
            type="text"
            placeHolder="Special Key"
            customLabel="Special Key"
            displayType="block"
            className={`specialKey  form__right-side__innerForm__input-group`}
            onChange={(value:any) => setSpecialKeyValue(value)}
          />

          <CustomButton
            type={"button"}
            backGroundColor="#2C73EB"
            innerText={"Add Service Provider"}
            color={"white"}
            displayType={"block"}
            width="100%"
            height="5rem"
            margin="2.5rem 0"
            fontWeight="600"
            onClick={() => {
              if (
                specialKey !== null &&
                specialKey !== undefined &&
                specialKey !== ""
              ) {
                setFormVisiblity(false);
                setShowStatusPopUp(true);
              } else {
                document.querySelector("input")?.classList.add("error-alert");
              }
            }}
          />
        </div>
      );
    }
  };

  return <>{handleRendering()}</>;
}
