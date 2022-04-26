import React from "react";
import RatingPopUp from "../ratingPopUp/ratingPopUp";
export default function ViewBookingHistoryRatingPopUp({
  closePopUpCallback,
  submitCallBack,
}) {
  return (
    <>
      <RatingPopUp
        title="rate appointment"
        closePopUpCallback={closePopUpCallback}
        submitCallBack={submitCallBack}
      />
    </>
  );
}
