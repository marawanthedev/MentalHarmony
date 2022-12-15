import React, { useEffect } from "react";
import StickyHeadTable from "components/StickyHeadTable/StickyHeadTable";
import CustomButton from "components/button/button";
import DialogPopUp from "components/dialogPopUp/dialogPopUp";
import StatusPopUp from "components/statusPopUp/statusPopUp";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersByType, deleteUser } from "redux/features/user/userSlice";
import Spinner from "components/spinner/spinner";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import { AppDispatch } from "redux/store";

const columns = [
  { id: "name", label: "Details", minWidth: 100 },
  {
    id: "speciality",
    label: "Speciality",
    minWidth: 120,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "phone_number",
    label: " Mobile number",
    minWidth: 120,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 120,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

export default function RemoveServiceProvider() {
  const [showDialog, setShowDialog] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, isSuccess, isLoading, isError } = useSelector(
    (state: any) => state.user
  );
  useEffect(() => {
    if (!isLoading) {
      dispatch(getUsersByType("serviceprovider"));
    }
  }, []);

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });
  useEffect(() => {
    // ApiCallStatusNotificationHandler({ isSuccess, isLoading, isError });
  }, [filteredUsers, isSuccess, isError, isLoading]);

  const generateRows = () => {
    let rows: any = [];

    filteredUsers.forEach((row: any, index: number) => {
      rows[index] = {
        ...row,
        action: (
          <CustomButton
            type={"button"}
            backGroundColor="#FB4B4B"
            innerText="REMOVE"
            color={"white"}
            displayType={"block"}
            width="100%"
            height="4rem"
            fontWeight="600"
            fontSize="1.1rem"
            borderRadius="2.5rem"
            onClick={() => {
              dispatch(deleteUser(row._id));
              setTimeout(() => window.location.reload(), 1200);
            }}
          />
        ),
      };
    });
    return rows;
  };

  return (
    <>
      {showSpinner ? <Spinner /> : null}

      {showDialog && (
        <DialogPopUp
          cancelCallBack={() => {
            setShowDialog(false);
            setBlurTable(false);
          }}
          confirmCallBack={() => {
            setShowConfirmPopUp(true);
            setShowDialog(false);
          }}
        />
      )}
      {showConfirmPopUp && (
        <StatusPopUp
          closeBtnOnClick={() => {
            setShowDialog(false);
            setBlurTable(false);
            setShowConfirmPopUp(false);
          }}
          success={true}
        />
      )}

      <StickyHeadTable blur={blurTable} rows={generateRows()} cols={columns} />
    </>
  );
}
