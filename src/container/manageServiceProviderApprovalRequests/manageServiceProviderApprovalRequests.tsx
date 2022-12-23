import React, { useEffect } from "react";
import StickyHeadTable from "components/StickyHeadTable/StickyHeadTable";
import CustomButton from "interface/button/button";
import { ConnectedProps, connect } from "react-redux";
import {
  getApprovalRequests,
  acceptApprovalRequest,
} from "redux/features/serviceProviderApprovalRequests/serviceProviderApprovalRequestsSlice";
import { RootState } from "redux/store";
import { selectServiceProviderState } from "./../../redux/features/serviceProviderApprovalRequests/serviceProviderApprovalSelector";

const columns = [
  { id: "name", label: "Details", minWidth: 100 },
  {
    id: "phone_number",
    label: " Mobile number",
    minWidth: 200,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 200,
    align: "left",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 120,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

function mapState(state: RootState) {
  return { ...selectServiceProviderState(state) };
}
const mapDispatch = {
  getApprovalRequests,
  acceptApprovalRequest,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapState, mapDispatch);

function ManageServiceProviderApprovalRequests({
  approvalRequests,
  isSuccess,
  isLoading,
  isError,
  getApprovalRequests,
  acceptApprovalRequest,
}: PropsFromRedux) {
  /*eslint-disable */
  useEffect(() => {
    if (!isLoading) {
      getApprovalRequests(false);
    }
  }, []);
  /*eslint-enable */

  useEffect(() => {
    // ApiCallStatusNotificationHandler({ isSuccess, isLoading, isError });
  }, [approvalRequests, isSuccess, isError, isLoading]);
  const generateRows = () => {
    const rows: any = [];

    if (approvalRequests) {
      approvalRequests.forEach((row: any, index: number) => {
        rows[index] = {
          location: row.requester?.location,
          name: row.requester?.name,
          phone_number: row.requester?.phone_number,
          action: (
            <CustomButton
              type={"button"}
              backGroundColor="#13C39C"
              innerText="Approve"
              color={"white"}
              displayType={"block"}
              width="100%"
              height="4rem"
              fontWeight="600"
              fontSize="1.1rem"
              borderRadius="2.5rem"
              onClick={() => {
                acceptApprovalRequest(row._id);
                setTimeout(() => window.location.reload(), 1200);
              }}
            />
          ),
        };
      });
    }

    return rows;
  };

  return (
    <>
      <StickyHeadTable rows={generateRows()} cols={columns} />
    </>
  );
}

export { ManageServiceProviderApprovalRequests }; // un-connected version
export default connector(ManageServiceProviderApprovalRequests); // connected version
