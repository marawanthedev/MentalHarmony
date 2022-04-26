import React from "react";
import RatingPopUp from "../ratingPopUp/ratingPopUp";
export default function ManageRequestsRatingPopUp({
  closePopUpCallback,
  ratingValue,
}) {
  return (
    <>
      <RatingPopUp
        title="rate appointment"
        closePopUpCallback={closePopUpCallback}
        readOnly
        readOnlyValue={ratingValue}
      />
    </>
  );
}
