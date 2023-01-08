import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ViewMeetingDetailsPopUp from "./ViewMeetingDetailsPopUp";
describe("view meeting details works properly", () => {
  const closeCallBack = jest.fn();
  const meetingLink = "www.google.com";
  const title = "view-meeting-test";
  const componentRender = () =>
    render(
      <ViewMeetingDetailsPopUp
        closeCallBack={closeCallBack}
        meetingLink={meetingLink}
        title={title}
      />
    );

  test("close event works properly", () => {
    componentRender();
    const closeEl = screen.getByTitle(`${title}-close-btn`);
    fireEvent.click(closeEl);
    expect(closeCallBack).toHaveBeenCalledTimes(1);
  });
  test("meeting link prop to value mapped properly", () => {
    componentRender();
    const meetingLinkEl = screen.getByTitle(`${title}-meeting-link`);
    expect(meetingLinkEl).toHaveTextContent(meetingLink);
  });

  //todo add testing for copy to clipboard
});
