import React from "react";
import AvatarText from "../../components/avatarText/avatarText";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
import CustomButton from "../../components/button/button";
import { useState, useEffect } from "react";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import ManageRequestsRatingPopUp from "../../components/manageRequestRatingPopup/manageRequestRatingPopup";
import FormPopUp from "../../components/formPopUp/formPopUp";
import ManageRequestPopUp from "../../components/manageRequestPopUp/manageRequestPopUp";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBooking,
  acceptBooking,
  attachMeetingLink,
  completeBooking,
} from "../../redux/features/booking/bookingSlice";

const columns = [
  { id: "name", label: "Student Details", minWidth: 100 },

  {
    id: "phone_number",
    label: "Student Phone Number",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "requestStatus",
    label: "Status",
    minWidth: 120,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const dataRows = [
  {
    id: 0,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Stress Management",
    requestStatus: "completed",
    requestDetails: {
      meetingLink: "meeting.com",
      rate: "5",
    },
  },
  {
    id: 1,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Stress Management",
    requestStatus: "completed",
    requestDetails: {
      meetingLink: "meeting.com",
      rate: "4",
    },
  },

  {
    id: 2,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Anxiety",
    requestStatus: "accepted",
    requestDetails: {
      meetingLink: "meeting.com",
      rate: "3",
    },
  },

  {
    id: 3,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Anxiety",
    requestStatus: "accepted",
    requestDetails: {
      meetingLink: "",
      rate: "3",
    },
  },
  {
    id: 4,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Anxiety",
    requestStatus: "pending",
    requestDetails: {
      meetingLink: "",
      rate: "3",
    },
  },
  {
    id: 5,
    details: <AvatarText text="Tom Cruise" />,
    sessionTopic: "Anxiety",
    requestStatus: "pending",
    requestDetails: {
      meetingLink: "",
      rate: "3",
    },
  },
];

export default function ManageBookingRequests() {
  const dispatch = useDispatch();
  const [showRatingPopUp, setShowRatingPopUp] = useState(false);
  const [showStatusPopup, setShowStatusPopUp] = useState(false);
  const [showViewRequestDetails, setShowRequestDetails] = useState(false);
  const [showManageRequestPopUp, setShowManageRequestPopUp] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [selectedRequestRating, setSelectedRequestRating] = useState(null);
  const [bookingRequestStatus, setBookingRequestStatus] = useState(null);

  const {
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getUserBooking());
  }, []);

  useEffect(() => {
    // console.log(bookings);
  }, [
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  ]);

  const getActionButton = (requestDetails, requestStatus, requestId) => {
    const actionButtonTypes = {
      completed: {
        text: "View Rating",
        onClick: () => {
          setBlurTable(true);
          setShowRatingPopUp(true);
          setSelectedRequestRating(requestDetails.rate);
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
    const manageRequestPopUpOptions = {
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
            dispatch(acceptBooking(selectedBookingId));
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
            dispatch(completeBooking(selectedBookingId));
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

    return (
      <ManageRequestPopUp
        button_1={manageRequestPopUpOptions[bookingRequestStatus].button_1}
        button_2={manageRequestPopUpOptions[bookingRequestStatus].button_2}
        popupHeader={manageRequestPopUpOptions["general"].popupHeader}
        popupParagraph={
          manageRequestPopUpOptions[bookingRequestStatus].popupParagraph
        }
        closeBtnCallback={manageRequestPopUpOptions["general"].closeBtnCallback}
      />
    );
  };

  const meetingURLSubmission = (meeting_link) => {
    setShowRequestDetails(false);
    setShowStatusPopUp(true);

    // dispatch to api
    dispatch(attachMeetingLink({ selectedBookingId, meeting_link }));

    //could be improved later on
    setTimeout(() => window.location.reload(), 1500);
  };

  // const getMeetingLink = () => {
  //   const targetedBooking = bookings.find(
  //     (booking) => booking._id === selectedBookingId
  //   );
  //   return targetedBooking.meeting_link;
  // };

  const getBooking = () => {
    const targetedBooking = bookings.find(
      (booking) => booking._id === selectedBookingId
    );
    return targetedBooking;
  };

  // const getBookingRate = () => {
  //   const targetedBooking = bookings.find(
  //     (booking) => booking._id === bookingId
  //   );
  //   return targetedBooking.rate;
  // };

  const generateRows = () => {
    let rows = [];
    bookings.forEach((row, index) => {
      rows[index] = {
        name: row.student.name,
        phone_number: row.student.phone_number,
        requestStatus: row.requestStatus,
        action: getActionButton(
          {
            rate: row.rate,
            meeting_link: row.meeting_link,
          },
          row.requestStatus,
          row._id
        ),
      };
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

      {showManageRequestPopUp ? getManageRequestPopUp() : null}
      {showViewRequestDetails ? (
        <FormPopUp
          formTitle="Request Details"
          inputLabel="Scheduled Meeting URL"
          inputPlaceHolder="Meeting URL"
          initialValue={getBooking().meeting_link}
          submitCallback={(formInput) => meetingURLSubmission(formInput)}
          closeBtnCallback={() => {
            setShowRequestDetails(false);
            setBlurTable(false);
          }}
        />
      ) : null}
      <StickyHeadTable
        blur={blurTable ? true : false}
        rows={generateRows()}
        cols={columns}
      />
    </>
  );
}
