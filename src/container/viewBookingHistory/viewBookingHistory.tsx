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
import { bookingStructure } from "../../constants/booking";
import {
  getUserBooking,
  rateBooking,
} from "../../redux/features/booking/bookingSlice";
import { ActionButtonStructure } from "../../constants/actionButton";
import { ColumnType } from "./constants";
import { bookingState } from "../../redux/features/booking/constants";
import { AppDispatch } from "../../redux/store";

// todo
const columns: any[] = [
  { id: "name", label: "Student Details", minWidth: 100 },
  {
    id: "faculty_name",
    label: "Faculty",
    minWidth: 120,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "requestStatus",
    label: "Request Status",
    minWidth: 120,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "rate",
    label: "Rate",
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

const getStars = (value: number) => {
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
  const dispatch = useDispatch<AppDispatch>();
  const [showRatingPopUp, setShowRatingPopUp] = useState<boolean>(false);
  const [showStatusPopup, setShowStatusPopUp] = useState<boolean>(false);
  const [blurTable, setBlurTable] = useState<boolean>(false);
  const [showViewMeetingDetails, setShowMeetingDetails] =
    useState<boolean>(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number>(0);
  
  const {
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  } = useSelector((state: any) => state.bookings);

  console.log(bookings)

  useEffect(() => {
    dispatch(getUserBooking());
  }, []);

  useEffect(() => {}, [
    bookings,
    isBookingProcessError,
    isBookingProcessSuccess,
    isBookingProcessLoading,
  ]);

  const getActionButton = (requestStatus: keyof ActionButtonStructure) => {
    const actionButtonTypes: ActionButtonStructure = {
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

    //todo might be worth checking later
    if (Object.keys(actionButtonTypes).includes(requestStatus)) {
      const targetActionType = actionButtonTypes[requestStatus];
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

  const getBooking = () => {
    const targetedBooking = bookings.find(
      (booking: bookingStructure) => booking._id === selectedBookingId
    );
    return targetedBooking;
  };

  const generateRows = () => {
    let rows: any = [];
    console.log(bookings);
    if (bookings.length > 0) {
      bookings.forEach((row: bookingStructure, index: number) => {
        rows[index] = {
          ...row,
          _id: row._id,
          name: row.student.name,
          faculty_name: row.student.faculty_name,
          rate: getStars(row.rate),
          action: getActionButton(
            row.requestStatus as keyof ActionButtonStructure
          ),
        };
      });
    }

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
          rate={getBooking().rate}
          submitCallBack={(value: number) => {
            setShowRatingPopUp(false);
            setShowStatusPopUp(true);
            dispatch(
              rateBooking({ bookingId: selectedBookingId, rate: value })
            );
            setTimeout(() => {
              window.location.reload();
            }, 1500);
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
          meetingLink={getBooking().meeting_link}
          closeCallBack={() => {
            setShowMeetingDetails(false);
            setBlurTable(false);
          }}
        />
      ) : null}
      <StickyHeadTable
        blur={blurTable ? true : false}
        rows={generateRows()}
        actionButtonCallback={(bookingId: number) =>
          setSelectedBookingId(bookingId)
        }
        cols={columns}
      />
    </>
  );
}
