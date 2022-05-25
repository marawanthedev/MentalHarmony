import React from "react";
import RatingPopUp from "../ratingPopUp/ratingPopUp";
export default function ViewBookingHistoryRatingPopUp({
  closePopUpCallback,
  submitCallBack,
  rate,
}) {
  return (
    <>
      <RatingPopUp
        title="rate appointment"
        readOnly={rate ? true : false}
        readOnlyValue={rate}
        closePopUpCallback={closePopUpCallback}
        submitCallBack={submitCallBack}
      />
    </>
  );
}
