import React, { useEffect, useState } from "react";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
// import AvatarText from "../../components/avatarText/avatarText";
import { useSelector, useDispatch } from "react-redux";
import { getUsersByType } from "../../redux/features/user/userSlice";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import Spinner from "../../components/spinner/spinner";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "faculty_name",
    label: "Faculty name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone_number",
    label: " Mobile number",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

//**  sample of using avatar
// details: <AvatarText text="Tom Cruise" />,

export default function ViewUniStudentsTab() {
  const dispatch = useDispatch();
  const { filteredUsers, isSuccess, isLoading, isError } = useSelector(
    (state) => state.user
  );
  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  useEffect(() => {
    if (isLoading !== true) {
      dispatch(getUsersByType("student"));
    }
  }, []);
  useEffect(() => [filteredUsers, isSuccess, isLoading, isError]);

  return (
    <>
      {showSpinner ? <Spinner /> : null}
      <StickyHeadTable rows={filteredUsers} cols={columns} />
    </>
  );
}
