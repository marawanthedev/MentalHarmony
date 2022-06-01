import React, { useState } from "react";
import ProfileForm from "../../components/profileForm/profileForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/features/user/userSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner/spinner";
import Template from "../../components/template/template";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import Protected from "../../util/protected";

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { user, isError, isSuccess, isLoading } = useSelector(
    (state) => state.user
  );
  const [formInputs, setFormInputs] = useState([]);

  /*eslint-disable */
  useEffect(() => {
    if (storedUser) {
      dispatch(getUser());
    }
  }, []);
  /*eslint-enable */

  const handleLabelExtraction = (key) => {
    if (key.startsWith("_")) {
      return key.substr(1, key.length - 1);
    }
    if (key.includes("_") && !key.startsWith("_")) {
      return key.replace("_", " ");
    }
    return key;
  };

  const isFormValid = (userInfo) => {
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
  const handleFormSubmission = (userInfo) => {
    const isValid = isFormValid(userInfo);
    // const isValid = true;
    if (isValid) {
      dispatch(updateUser({ ...userInfo }));
      toast.success("success");
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } else {
      toast.error("Please fill all fields");
    }
  };

  const getFormInputs = () => {
    console.log(formInputs);
    return formInputs;
  };
  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  useEffect(() => {
    if (isSuccess) {
      if (user) {
        const keys = Object.keys(user);
        const toBeFormedInputs = [];
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
  }, [user, isError, isSuccess, isLoading, dispatch]);

  return (
    <>
      <Protected>
        {showSpinner ? <Spinner /> : null}
        {formInputs ? (
          <Template>
            <ProfileForm
              formInputs={getFormInputs()}
              formTitle={`${
                user ? user.type : storedUser.type
              } profile update form`}
              formSubmissionCallBack={handleFormSubmission}
            />
          </Template>
        ) : null}
      </Protected>
    </>
  );
}
