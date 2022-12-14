import React from "react";
import RatingPopUp from "../ratingPopUp/ratingPopUp";

type ManageRequestsRatingPopUpProps = {
  // tableTitle: string;
  closePopUpCallback: Function;
  ratingValue: number;
  submitCallBack?: Function;
};

export default function ManageRequestsRatingPopUp({
  closePopUpCallback,
  ratingValue,
  submitCallBack,
}: ManageRequestsRatingPopUpProps) {
  return (
    <>
      <RatingPopUp
        title="Booking rating"
        closePopUpCallback={closePopUpCallback}
        readOnly={true}
        submitCallBack={() => (submitCallBack ? submitCallBack() : null)}
        readOnlyValue={ratingValue}
      />
    </>
  );
}
