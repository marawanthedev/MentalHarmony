import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ViewBookingHistoryRatingPopUp from "./ViewBookingHistoryRatingPopUp";

describe("view booking history rating popup works fine", () => {
  const closeCallBack = jest.fn();
  const title = "view-booking-rating-popup-testing";
  const rate = 5;
  const renderComponent = () =>
    render(
      <ViewBookingHistoryRatingPopUp
        closePopUpCallback={closeCallBack}
        title={title}
        rate={rate}
      />
    );

  test("close event works properly", () => {
    renderComponent();
    const closeEl = screen.getByTitle(`${title}-close-btn`);
    fireEvent.click(closeEl);
    expect(closeCallBack).toHaveBeenCalledTimes(1);
  });
  test("rate prop to value mapping works properly", () => {
    renderComponent();
    const ratingEl = screen.getByTitle(`${title}-rating-value`);
    expect(ratingEl).toHaveAttribute("aria-label", `${rate} Stars`);
  });
});
