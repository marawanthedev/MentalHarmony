import React, { useEffect } from "react";
import StickyHeadTable from "components/StickyHeadTable/StickyHeadTable";
import { connect, ConnectedProps } from "react-redux";
import { getUsersByType } from "redux/features/user/userSlice";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import Spinner from "components/spinner/spinner";
import { RootState } from "redux/store";
import { selectUserState } from "./../../redux/features/user/userSelector";

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

function mapState(state: RootState) {
  return { ...selectUserState(state) };
}

const mapDispatch = {
  getUsersByType,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapState, mapDispatch);

function ViewUniStudentsTab({
  filteredUsers,
  isSuccess,
  isLoading,
  isError,
  getUsersByType,
}: PropsFromRedux) {
  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });

  useEffect(() => {
    if (isLoading !== true) {
      getUsersByType("student");
    }
  }, []);

  return (
    <>
      {showSpinner && <Spinner />}
      {filteredUsers && <StickyHeadTable rows={filteredUsers} cols={columns} />}
    </>
  );
}

export { ViewUniStudentsTab }; // un-connected version
export default connector(ViewUniStudentsTab); // connected version
