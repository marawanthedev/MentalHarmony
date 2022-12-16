import React, { useEffect } from "react";
import StickyHeadTable from "components/StickyHeadTable/StickyHeadTable";
import { useSelector, useDispatch } from "react-redux";
import { getUsersByType } from "redux/features/user/userSlice";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import Spinner from "components/spinner/spinner";
import { AppDispatch, RootState } from "redux/store";

const columns: any = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "faculty_name",
    label: "Faculty name",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "phone_number",
    label: " Mobile number",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

export default function ViewUniStudentsTab() {


  const dispatch = useDispatch<AppDispatch>();

  const { filteredUsers, isSuccess, isLoading, isError } = useSelector(
    (state: RootState) => state.user
  );
  
  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  useEffect(() => {
    console.log("attempting to render")
    if (isLoading !== true) {
      dispatch(getUsersByType("student"));
    }
  }, []);

  return (
    <>
      {showSpinner && <Spinner />}
      {filteredUsers && <StickyHeadTable rows={filteredUsers} cols={columns} />}
    </>
  );
}
