import React from "react";
import Templatev2 from "components/templatev2/templatev2";
import BookingIcon from "assets/images/booking.webp";
import ManageBookingRequests from "container/manageBookingRequests/manageBookingRequests";
import Protected from "util/protected";
import { tab } from "constants/tab";

export default function ServiceProvider() {
  const tabs: tab[] = [
    {
      text: "Manage Booking Requests",
      icon: BookingIcon,
      getTabComponentRender: ManageBookingRequests,
    },
  ];
  return (
    <>
      <Protected userType="serviceprovider">
        <Templatev2 tabs={tabs}></Templatev2>
      </Protected>
    </>
  );
}
