import React from "react";
import RatingPopUp from "components/ratingPopUp/ratingPopUp";
import { BaseInterface } from "constants/baseInterface";

interface ManageRequestsRatingPopUpProps extends BaseInterface {
  // tableTitle: string;
  closePopUpCallback: Function;
  ratingValue: number;
  submitCallBack?: Function;
}

// @Guide

// only acts as view mode

export default function ManageRequestsRatingPopUp({
  closePopUpCallback,
  ratingValue,
  submitCallBack,
  ...rest
}: ManageRequestsRatingPopUpProps) {
  return (
    <>
      <RatingPopUp
        title="Booking rating"
        closePopUpCallback={closePopUpCallback}
        readOnly={true}
        submitCallBack={() => (submitCallBack ? submitCallBack() : null)}
        readOnlyValue={ratingValue}
        role="main"
        {...rest}
      />
    </>
  );
}
