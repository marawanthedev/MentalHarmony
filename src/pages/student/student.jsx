import React from "react";
import Templatev2 from "../../components/templatev2/templatev2";
import BookingIcon from "../../assets/images/booking.webp";
import ViewBookingHistory from "../../container/viewBookingHistory/viewBookingHistory";
import Protected from "../../util/protected";
export default function student() {
  const tabs = [
    {
      text: "View Booking History",
      icon: BookingIcon,
      tabComponent: ViewBookingHistory,
    },
  ];

  return (
    <>
      <Protected userType={"student"}>
        <Templatev2 tabs={tabs} />
      </Protected>
    </>
  );
}
