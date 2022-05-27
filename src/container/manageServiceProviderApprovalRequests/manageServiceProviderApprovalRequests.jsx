import React, { useEffect } from "react";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
// import AvatarText from "../../components/avatarText/avatarText";
import CustomButton from "../../components/button/button";
import { useSelector, useDispatch } from "react-redux";
import {
  getApprovalRequests,
  acceptApprovalRequest,
} from "../../redux/features/serviceProviderApprovalRequests/serviceProviderApprovalRequestsSlice";
import Spinner from "../../components/spinner/spinner";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";

const columns = [
  { id: "name", label: "Details", minWidth: 100 },
  {
    id: "phone_number",
    label: " Mobile number",
    minWidth: 200,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 200,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 120,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function ManageServiceProviderApprovalRequests() {
  const dispatch = useDispatch();
  const { approvalRequests, isSuccess, isLoading, isError } = useSelector(
    (state) => state.serviceProviderApprovalRequest
  );

  /*eslint-disable */
  useEffect(() => {
    if (!isLoading) {
      dispatch(getApprovalRequests({ isApproved: false }));
    }
  }, []);
  /*eslint-enable */

  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });
  useEffect(() => {
    // ApiCallStatusNotificationHandler({ isSuccess, isLoading, isError });
  }, [approvalRequests, isSuccess, isError, isLoading]);
  const generateRows = () => {
    let rows = [];
    if (approvalRequests) {
      approvalRequests.forEach((row, index) => {
        rows[index] = {
          location: row.requester ? row.requester.location : null,
          name: row.requester ? row.requester.name : null,
          phone_number: row.requester ? row.requester.phone_number : null,
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
                dispatch(acceptApprovalRequest(row._id));
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
      {showSpinner ? <Spinner /> : null}

      <StickyHeadTable rows={generateRows()} cols={columns} />
    </>
  );
}
