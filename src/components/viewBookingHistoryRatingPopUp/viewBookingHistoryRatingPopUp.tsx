import React from "react";
import RatingPopUp from "components/RatingPopUp/RatingPopUp";

type RatingPopUpProps = {
  closePopUpCallback: Function;
  submitCallBack: Function;
  rate: number;
};

export default function ViewBookingHistoryRatingPopUp({
  closePopUpCallback,
  submitCallBack,
  rate,
}: RatingPopUpProps): JSX.Element {
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
