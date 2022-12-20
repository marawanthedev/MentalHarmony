import React from "react";
import StickyHeadTable from "components/StickyHeadTable/StickyHeadTable";
import CustomButton from "interface/button/button";
import { useState, useEffect } from "react";
import StatusPopUp from "components/statusPopUp/statusPopUp";
import ManageRequestsRatingPopUp from "components/manageRequestRatingPopup/manageRequestRatingPopup";
import FormPopUp from "components/formPopUp/formPopUp";
import ManageRequestPopUp from "components/manageRequestPopUp/manageRequestPopUp";
import { connect, ConnectedProps } from "react-redux";
import {
  getUserBooking,
  acceptBooking,
  attachMeetingLink,
  completeBooking,
} from "redux/features/booking/bookingSlice";
import { TableColumnsInterface, TableRowInterface } from "constants/table";
import { RootState } from "redux/store";
import { selectBookingState } from "redux/features/booking/bookingSelector";

const columns: TableColumnsInterface[] = [
  { id: "name", label: "Student Details", minWidth: 100, align: "center" },

  {
    id: "phone_number",
    label: "Student Phone Number",
    minWidth: 120,
    align: "center",
    // todo
    format: (value: any) => value.toLocaleString("en-US"),
  },
  {
    id: "requestStatus",
    label: "Status",
    minWidth: 120,
    align: "center",
    // todo
    format: (value: any) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    // todo
    format: (value: any) => value.toFixed(2),
  },
];

function mapState(state: RootState) {
  return { ...selectBookingState(state) };
}

const mapDispatch = {
  getUserBooking,
  acceptBooking,
  attachMeetingLink,
  completeBooking,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ManageBookingRequests({
  bookings,
  getUserBooking,
  acceptBooking,
  attachMeetingLink,
  completeBooking,
}: PropsFromRedux) {
  const [showRatingPopUp, setShowRatingPopUp] = useState(false);
  const [showStatusPopup, setShowStatusPopUp] = useState(false);
  const [showViewRequestDetails, setShowRequestDetails] = useState(false);
  const [showManageRequestPopUp, setShowManageRequestPopUp] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number>();
  const [bookingRequestStatus, setBookingRequestStatus] = useState<string>("");

  useEffect((): void => {
    getUserBooking();
  }, []);

  //todo update param
  const getActionButton = (requestStatus: any, requestId: any) => {
    const actionButtonTypes: any = {
      completed: {
        text: "View Rating",
        onClick: () => {
          setBlurTable(true);
          setShowRatingPopUp(true);
          setSelectedBookingId(requestId);
        },
      },
      accepted: {
        text: "Manage Request",
        onClick: () => {
          setBlurTable(true);
          setSelectedBookingId(requestId);
          setShowManageRequestPopUp(true);
          setBookingRequestStatus(requestStatus);
        },
      },
      pending: {
        text: "Manage Request Status",
        onClick: () => {
          setBlurTable(true);
          setShowManageRequestPopUp(true);
          setSelectedBookingId(requestId);
          setBookingRequestStatus(requestStatus);
        },
      },
    };

    return (
      <CustomButton
        type={"button"}
        backGroundColor="#2B4BF2"
        innerText={`${actionButtonTypes[requestStatus].text}`}
        color={"white"}
        displayType={"block"}
        width="100%"
        height="4rem"
        fontWeight="600"
        fontSize="1.1rem"
        borderRadius="2.5rem"
        onClick={actionButtonTypes[requestStatus].onClick}
      />
    );
  };

  const getManageRequestPopUp = () => {
    const manageRequestPopUpOptions: any = {
      pending: {
        popupParagraph: "Update request status using the action button",
        closeBtnCallback: () => {
          setBlurTable(false);
          setShowManageRequestPopUp(false);
        },
        button_1: {
          text: "Ignore",
          color: "#FB4B4B",
          callback: () => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);
          },
        },
        button_2: {
          text: "Accept",
          color: "black",
          callback: () => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);
            //dispatch to api
            if (selectedBookingId) {
              acceptBooking(selectedBookingId);
            }
            setTimeout(() => window.location.reload(), 1500);
          },
        },
      },

      accepted: {
        popupParagraph:
          "Attach meeting link or set request status to completed",
        button_1: {
          text: "Attach Link",
          color: "#2B4BF2",
          callback: () => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);
            setShowRequestDetails(true);
          },
        },
        button_2: {
          text: "Set to completed",
          color: "#2B4BF2",
          callback: () => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);

            if (selectedBookingId) {
              completeBooking(selectedBookingId);
            }
            //could be improved later on
            setTimeout(() => window.location.reload(), 1500);
          },
        },
      },
      general: {
        popupHeader: "Choose a request action to apply",
        closeBtnCallback: () => {
          setBlurTable(false);
          setShowManageRequestPopUp(false);
        },
      },
    };
    const currentManageRequestPopUpOptions =
      manageRequestPopUpOptions[
        bookingRequestStatus as keyof typeof manageRequestPopUpOptions
      ];

    // const button_1=
    return (
      <ManageRequestPopUp
        button_1={
          manageRequestPopUpOptions[
            bookingRequestStatus as keyof typeof manageRequestPopUpOptions
          ].button_1
        }
        button_2={
          manageRequestPopUpOptions[
            bookingRequestStatus as keyof typeof manageRequestPopUpOptions
          ].button_2
        }
        popupHeader={manageRequestPopUpOptions["general"].popupHeader}
        popupParagraph={
          manageRequestPopUpOptions[
            bookingRequestStatus as keyof typeof manageRequestPopUpOptions
          ].popupParagraph
        }
        closeBtnCallback={manageRequestPopUpOptions["general"].closeBtnCallback}
      />
    );
  };

  //todo  fix  any later
  const meetingURLSubmission = (meeting_link: any) => {
    setShowRequestDetails(false);
    setShowStatusPopUp(true);

    // dispatch to api
    if (selectedBookingId && meeting_link) {
      attachMeetingLink({ bookingId: selectedBookingId, meeting_link });
    }

    //could be improved later on
    setTimeout(() => window.location.reload(), 1500);
  };

  const getBooking = () => {
    // todo update type
    const targetedBooking = bookings?.find(
      (booking: any) => booking._id === selectedBookingId
    );
    return targetedBooking;
  };

  const generateRows = (): TableRowInterface[] => {
    const rows: TableRowInterface[] = [];

    // todo convert to booking type when set at redux
    bookings?.forEach((row: any) => {
      rows.push({
        name: row.student.name,
        phone_number: row.student.phone_number,
        requestStatus: row.requestStatus,
        action: getActionButton(row.requestStatus, row._id),
      });
    });

    return rows;
  };

  return (
    <>
      {showRatingPopUp ? (
        <ManageRequestsRatingPopUp
          closePopUpCallback={() => {
            setShowRatingPopUp(false);
            setBlurTable(false);
          }}
          //could be improved
          ratingValue={getBooking().rate}
        />
      ) : null}
      {showStatusPopup ? (
        <StatusPopUp
          success={true}
          closeBtnOnClick={() => {
            setShowStatusPopUp(false);
            setBlurTable(false);
          }}
        />
      ) : null}

      {showManageRequestPopUp && getManageRequestPopUp()}
      {showViewRequestDetails && (
        <FormPopUp
          formTitle="Request Details"
          inputLabel="Scheduled Meeting URL"
          inputPlaceHolder="Meeting URL"
          initialValue={getBooking().meeting_link}
          submitCallback={(formInput: any) => meetingURLSubmission(formInput)}
          closeBtnCallback={() => {
            setShowRequestDetails(false);
            setBlurTable(false);
          }}
        />
      )}
      <StickyHeadTable
        blur={blurTable ? true : false}
        rows={generateRows()}
        cols={columns}
      />
    </>
  );
}

export { ManageBookingRequests }; // un-connected version
export default connector(ManageBookingRequests); // connected version
