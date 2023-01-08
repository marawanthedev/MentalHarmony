import React from "react";
import "./ViewMeetingDetailsPopUp.scss";
import CustomButton from "interface/button/button";
import CloseBtn from "components/CloseBtn/CloseBtn";
import { BaseInterface } from "constants/baseInterface";

interface ViewMeetingDetailsPopUpProps extends BaseInterface {
  closeCallBack: Function;
  meetingLink: string;
}
export default function ViewMeetingDetailsPopUp({
  closeCallBack,
  meetingLink,
  title,
}: ViewMeetingDetailsPopUpProps) {
  const copyMeetingLinkToClipBoard = () => {
    navigator.clipboard.writeText(meetingLink);
    alert(`link was copied ${meetingLink}`);
  };

  return (
    <div className="view-meeting-details-popup" title={title}>
      <div className="popup-header">Meeting Link</div>
      <CloseBtn onClick={closeCallBack} title={`${title}-close-btn`} />
      <p
        className="view-meeting-details-popup__paragraph"
        title={`${title}-meeting-link`}
      >
        {meetingLink}
      </p>

      <span className="align-center">
        <CustomButton
          type={"button"}
          backGroundColor="#4F4F4F"
          innerText={"Copy Link to clipboard"}
          color={"white"}
          displayType={"block"}
          width="22rem"
          height="4.4rem"
          fontWeight="500"
          onClick={copyMeetingLinkToClipBoard}
          title={`${title}-copy-link`}
        />
      </span>
    </div>
  );
}
