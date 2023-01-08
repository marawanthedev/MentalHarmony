import React from "react";
import RatingPopUp from "components/RatingPopUp/RatingPopUp";
import { BaseInterface } from "constants/baseInterface";

interface RatingPopUpProps extends BaseInterface {
  closePopUpCallback: Function;
  submitCallBack?: Function;
  rate: number;
}

export default function ViewBookingHistoryRatingPopUp({
  closePopUpCallback,
  submitCallBack,
  rate,
  title,
}: RatingPopUpProps): JSX.Element {
  return (
    <>
      <RatingPopUp
        title={title || "rate appointment"}
        readOnly={rate ? true : false}
        readOnlyValue={rate}
        closePopUpCallback={closePopUpCallback}
        submitCallBack={rate ? submitCallBack : undefined}
      />
    </>
  );
}
