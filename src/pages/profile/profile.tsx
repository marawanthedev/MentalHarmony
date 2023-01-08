import React, { useState } from "react";
import ProfileForm from "components/ProfileForm/ProfileForm";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getUser, updateUser } from "redux/features/user/userSlice";
import { toast } from "react-toastify";
import Template from "interface/template/template";
import Protected from "util/protected";
import { RootState } from "redux/store";
import { useHistory } from "react-router-dom";
import { selectUserState } from "./../../redux/features/user/userSelector";
import { FormInput } from "./../../constants/FormInput";

function mapState(state: RootState) {
  return { ...selectUserState(state) };
}

const mapDispatch = {
  getUser,
  updateUser,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapState, mapDispatch);

function Profile({
  getUser,
  updateUser,
  user,
  isError,
  isSuccess,
  isLoading,
}: PropsFromRedux) {
  const history = useHistory();
  const storedUser = JSON.parse(localStorage.getItem("user") || "");

  const [formInputs, setFormInputs] = useState<FormInput[]>([]);

  /*eslint-disable */
  useEffect(() => {
    if (storedUser) {
      getUser();
    }
  }, []);
  /*eslint-enable */

  const handleLabelExtraction = (key: string) => {
    if (key.startsWith("_")) {
      return key.substr(1, key.length - 1);
    }
    if (key.includes("_") && !key.startsWith("_")) {
      return key.replace("_", " ");
    }
    return key;
  };

  const isFormValid = (userInfo: any) => {
    let valid = true;

    Object.keys(userInfo).forEach((key) => {
      if (
        userInfo[key] === "" ||
        userInfo[key] === undefined ||
        userInfo[key] === null
      ) {
        valid = false;
      }
    });
    return valid;
  };
  const handleFormSubmission = (userInfo: any) => {
    const isValid = isFormValid(userInfo);

    if (isValid) {
      updateUser({ ...userInfo });
      toast.success("success");
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } else {
      toast.error("Please fill all fields");
    }
  };

  const getFormInputs = () => formInputs;

  useEffect(() => {
    if (isSuccess) {
      if (user) {
        const keys = Object.keys(user);
        const toBeFormedInputs: any = [];
        keys.forEach((key) => {
          if (key !== "_id" && key !== "type") {
            toBeFormedInputs.push({
              label: handleLabelExtraction(key),
              type: "text",
              name: key,
              id: key,
              value: user[key] ? user[key] : null,
            });
          }
        });
        setFormInputs(toBeFormedInputs);
      }
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
      <Protected>
        {formInputs && (
          <Template>
            <ProfileForm
              formInputs={getFormInputs()}
              formTitle={`${
                user ? user.type : storedUser.type
              } profile update form`}
              formSubmissionCallBack={handleFormSubmission}
            />
          </Template>
        )}
      </Protected>
    </>
  );
}

export { Profile }; // un-connected version
export default connector(Profile); // connected version
