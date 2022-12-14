import React from "react";
import Templatev2 from "../../components/templatev2/templatev2";
import BookingIcon from "../../assets/images/booking.webp";
import ViewBookingHistory from "../../container/viewBookingHistory/viewBookingHistory";
import Protected from "../../util/protected";
import { tab } from "../../constants/tab";

export default function student() {
  const tabs: Array<tab> = [
    {
      text: "View Booking History",
      icon: BookingIcon,
      getTabComponentRender: () => ViewBookingHistory,
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
