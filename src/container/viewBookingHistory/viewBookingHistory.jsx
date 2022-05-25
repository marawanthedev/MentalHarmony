import React from "react";
import AvatarText from "../../components/avatarText/avatarText";
import StickyHeadTable from "../../components/StickyHeadTable/StickyHeadTable";
import CustomButton from "../../components/button/button";
import { useState, useEffect } from "react";
import StatusPopUp from "../../components/statusPopUp/statusPopUp";
import ViewMeetingDetailsPopUp from "../../components/viewMeetingDetailsPopUp/viewMeetingDetailsPopUp";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ViewBookingHistoryRatingPopUp from "../../components/viewBookingHistoryRatingPopUp/viewBookingHistoryRatingPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/features/booking/bookingSlice";

const columns = [
  { id: "name", label: "Student Details", minWidth: 100 },
  {
    id: "faculty_name",
    label: "Faculty",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "requestStatus",
    label: "Request Status",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "rate",
    label: "Rate",
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
    details: <AvatarText text="Tom Cruise" />,
    faculty: "Computing",
    requestStatus: "completed",
    rate: "5",
  },
  {
    details: <AvatarText text="Barbie" />,
    faculty: "Engineering",
    requestStatus: "accepted",
    rate: "0",
  },
  {
    details: <AvatarText text="Mousa" />,
    faculty: "Business",
    requestStatus: "pending",
    rate: "0",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    faculty: "Computing",
    requestStatus: "completed",
    rate: "4",
  },
  {
    details: <AvatarText text="Barbie" />,
    faculty: "Engineering",
    requestStatus: "accepted",
    rate: "0",
  },
  {
    details: <AvatarText text="Mousa" />,
    faculty: "Business",
    requestStatus: "completed",
    rate: "3",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    faculty: "Computing",
    requestStatus: "completed",
    rate: "3",
  },
  {
    details: <AvatarText text="Barbie" />,
    faculty: "Engineering",
    requestStatus: "accepted",
    rate: "0",
  },
  {
    details: <AvatarText text="Mousa" />,
    faculty: "Business",
    requestStatus: "pending",
    rate: "0",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    faculty: "Computing",
    requestStatus: "completed",
    rate: "5",
  },
  {
    details: <AvatarText text="Barbie" />,
    faculty: "Engineering",
    requestStatus: "accepted",
    rate: "0",
  },
  {
    details: <AvatarText text="Mousa" />,
    faculty: "Business",
    requestStatus: "pending",
    rate: "0",
  },
  {
    details: <AvatarText text="Tom Cruise" />,
    faculty: "Computing",
    requestStatus: "completed",
    rate: "4",
  },
  {
    details: <AvatarText text="Barbie" />,
    faculty: "Engineering",
    requestStatus: "accepted",
    rate: "0",
  },
  {
    details: <AvatarText text="Mousa" />,
    faculty: "Business",
    requestStatus: "pending",
    rate: "5",
  },
];

const getStars = (value) => {
  return (
    <Rating
      name="customized-empty"
      value={value}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      readOnly
    />
  );
};

export default function ViewBookingHistory() {
  const dispatch = useDispatch();
  const [showRatingPopUp, setShowRatingPopUp] = useState(false);
  const [showStatusPopup, setShowStatusPopUp] = useState(false);
  const [blurTable, setBlurTable] = useState(false);
  const [showViewMeetingDetails, setShowMeetingDetails] = useState(false);
  const [selectedBookingIndex, setSelectedBookingIndex] = useState(0);
  const {
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getBooking());
  }, []);

  useEffect(() => {}, [
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  ]);

  const getActionButton = (callBackParam, requestStatus) => {
    const actionButtonTypes = {
      completed: {
        text: "Rate appointment",
        onClick: () => {
          setBlurTable(true);
          setShowRatingPopUp(true);
        },
      },
      accepted: {
        text: "View appointment details",
        onClick: () => {
          setBlurTable(true);
          setShowMeetingDetails(true);
        },
      },
    };

    if (requestStatus !== "pending") {
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
    }
  };

  const generateRows = () => {
    let rows = [];
    console.log(bookings);
    bookings.forEach((row, index) => {
      rows[index] = {
        ...row,
        _id: row._id,
        name: row.student.name,
        faculty_name: row.student.faculty_name,
        rate: getStars(row.rate),
        action: getActionButton(
          dataRows[index].faculty,
          dataRows[index].requestStatus
        ),
      };
    });
    return rows;
  };

  return (
    <>
      {showRatingPopUp ? (
        <ViewBookingHistoryRatingPopUp
          closePopUpCallback={() => {
            setShowRatingPopUp(false);
            setBlurTable(false);
          }}
          rate={bookings[selectedBookingIndex].rate}
          submitCallBack={(value) => {
            setShowRatingPopUp(false);
            setShowStatusPopUp(true);
          }}
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

      {showViewMeetingDetails ? (
        <ViewMeetingDetailsPopUp
          meetingLink={bookings[selectedBookingIndex].meeting_link}
          closeCallBack={() => {
            setShowMeetingDetails(false);
            setBlurTable(false);
          }}
        />
      ) : null}
      <StickyHeadTable
        blur={blurTable ? true : false}
        rows={generateRows()}
        actionButtonCallback={(selectedIndex) =>
          setSelectedBookingIndex(selectedIndex)
        }
        cols={columns}
      />
    </>
  );
}
