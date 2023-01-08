import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ManageRequestsRatingPopUp from "./ManageRequestRatingPopup";

describe("Manage request popup works properly", () => {
  const closeCallBack = jest.fn();
  const ratingValue = 5;
  const componentRender = () =>
    render(
      <ManageRequestsRatingPopUp
        closePopUpCallback={closeCallBack}
        ratingValue={ratingValue}
        role="main"
      />
    );

  test("close btn testing", () => {
    componentRender();

    const manageRequestRatingPopCloseBtn = screen.getByTitle(
      "Booking rating-close-btn"
    );

    fireEvent.click(manageRequestRatingPopCloseBtn);

    expect(closeCallBack).toHaveBeenCalledTimes(1);
  });
  test("rating value prop to value maps properly", () => {
    componentRender();

    const ratingValueEl = screen.getByTitle("Booking rating-rating-value");

    expect(ratingValueEl).toHaveAttribute("aria-label", `${ratingValue} Stars`);
  });
});
