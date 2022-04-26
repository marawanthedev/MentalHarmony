import React from "react";
import Templatev2 from "../../components/templatev2/templatev2";
import BookingIcon from "../../assets/images/booking.png";
import ViewBookingRequest from "../../container/viewBookingRequest/viewBookingRequest";
export default function student() {
  const tabs = [
    {
      text: "View Booking History",
      icon: BookingIcon,
      tabComponent: ViewBookingRequest,
    },
  ];

  return (
    <>
      <Templatev2 tabs={tabs} />
    </>
  );
}
