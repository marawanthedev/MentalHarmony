import React from "react";
import "./viewMeetingDetailsPopUp.scss";
import CustomButton from "interface/button/button";
import CloseBtn from "components/closeBtn/closeBtn";

type ViewMeetingDetailsPopUpProps = {
  closeCallBack: Function;
  meetingLink: string;
};
export default function ViewMeetingDetailsPopUp({
  closeCallBack,
  meetingLink,
}: ViewMeetingDetailsPopUpProps) {
  const copyMeetingLinkToClipBoard = () => {
    navigator.clipboard.writeText(meetingLink);
    alert(`link was copied ${meetingLink}`);
  };

  return (
    <div className="view-meeting-details-popup">
      <div className="popup-header">Meeting Link</div>
      <CloseBtn onClick={closeCallBack} />
      <p className="view-meeting-details-popup__paragraph">{meetingLink}</p>

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
        />
      </span>
    </div>
  );
}
