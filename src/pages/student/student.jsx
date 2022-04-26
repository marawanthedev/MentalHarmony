import React from "react";
import Templatev2 from "../../components/templatev2/templatev2";
import BookingIcon from "../../assets/images/booking.png";
import ViewBookingHistory from "../../container/viewBookingHistory/viewBookingHistory";
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
      <Templatev2 tabs={tabs} />
    </>
  );
}
