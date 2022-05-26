import React from "react";
import RatingPopUp from "../ratingPopUp/ratingPopUp";
export default function ManageRequestsRatingPopUp({
  closePopUpCallback,
  ratingValue,
  submitCallBack,
}) {
  return (
    <>
      <RatingPopUp
        title="Booking rating"
        closePopUpCallback={closePopUpCallback}
        readOnly={true}
        submitCallBack={() => submitCallBack()}
        readOnlyValue={ratingValue}
      />
    </>
  );
}
