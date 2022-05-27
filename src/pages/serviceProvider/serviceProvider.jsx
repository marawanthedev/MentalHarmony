import React from "react";
import Templatev2 from "../../components/templatev2/templatev2";
import BookingIcon from "../../assets/images/booking.png";
import ManageBookingRequests from "../../container/manageBookingRequests/manageBookingRequests";
import Protected from "../../util/protected";
export default function ServiceProvider() {
  const tabs = [
    {
      text: "Manage Booking Requests",
      icon: BookingIcon,
      tabComponent: ManageBookingRequests,
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
