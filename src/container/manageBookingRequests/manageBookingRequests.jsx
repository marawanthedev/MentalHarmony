import React from "react";
import AvatarText from "../../components/avatarText/avatarText";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
import CustomButton from "../../components/button/button";
import { useState } from "react";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import ManageRequestsRatingPopUp from "../../components/manageRequestRatingPopup/manageRequestRatingPopup";
import FormPopUp from "../../components/formPopUp/formPopUp";
import ManageRequestStatusPopUp from "../../components/manageRequestStatusPopUp/manageRequestStatusPopUp";
const columns = [
  { id: "details", label: "Student Details", minWidth: 100 },

  {
    id: "sessionTopic",
    label: "Session Topic",
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
  const [showRatingPopUp, setShowRatingPopUp] = useState(false);
  const [showStatusPopup, setShowStatusPopUp] = useState(false);
  const [showViewRequestDetails, setShowRequestDetails] = useState(false);
  const [showManageRequestPopUp, setShowManageRequestPopUp] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [selectedRequestRating, setSelectedRequestRating] = useState(null);
  const [selectedRequestMeetingLink, setSelectedRequestMeetingLink] =
    useState(null);

  const getActionButton = (requestDetails, requestStatus, requestId) => {
    const actionButtonTypes = {
      completed: {
        text: "View Rating",
        onClick: () => {
          setBlurTable(true);
          setShowRatingPopUp(true);
          setSelectedRequestRating(requestDetails.rate);
          setSelectedRequestId(requestId);
        },
      },
      accepted: {
        text: "View appointment details",
        onClick: () => {
          setBlurTable(true);
          setShowRequestDetails(true);
          setSelectedRequestMeetingLink(requestDetails.meetingLink);
          setSelectedRequestId(requestId);
        },
      },
      pending: {
        text: "Manage Request Status",
        onClick: () => {
          setBlurTable(true);
          setShowManageRequestPopUp(true);
          setSelectedRequestId(requestId);
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

  const meetingURLSubmission = (formInput) => {
    setShowRequestDetails(false);
    setSelectedRequestMeetingLink(formInput);
    setShowStatusPopUp(true);

    //mimic
    dataRows[selectedRequestId]["requestDetails"]["meetingLink"] = formInput;
  };
  const generateRows = () => {
    let rows = [];

    dataRows.forEach((row, index) => {
      rows[index] = {
        ...row,
        action: getActionButton(
          dataRows[index].requestDetails,
          dataRows[index].requestStatus,
          dataRows[index].id
        ),
      };
    });
    return rows;
  };

  //   it gets updated
  //   useEffect(() => {
  //     console.log(selectedRequestMeetingLink);
  //   }, [selectedRequestMeetingLink]);
  return (
    <>
      {showRatingPopUp ? (
        <ManageRequestsRatingPopUp ratingValue={selectedRequestRating} />
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

      {showManageRequestPopUp ? (
        <ManageRequestStatusPopUp
          closeBtnCallback={() => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);
          }}
          confirmCallBack={() => {
            setBlurTable(false);
            setShowManageRequestPopUp(false);
            dataRows[selectedRequestId].requestStatus = "accepted";
          }}
        />
      ) : null}
      {showViewRequestDetails ? (
        <FormPopUp
          formTitle="Request Details"
          inputLabel="Scheduled Meeting URL"
          inputPlaceHolder="Meeting URL"
          initialValue={selectedRequestMeetingLink}
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
