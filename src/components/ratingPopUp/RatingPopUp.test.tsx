import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import RatingPopUp from "./RatingPopUp";

describe("Rating popup functions properly", () => {
  const closeCallBack = jest.fn();
  const submitCallBack = jest.fn();
  const title = "rating-test-title";
  const readOnlyValue = 2;

  const componentRender = () =>
    render(
      <RatingPopUp
        title={title}
        submitCallBack={submitCallBack}
        closePopUpCallback={closeCallBack}
        readOnlyValue={readOnlyValue}
      />
    );

  test("close btn works properly", () => {
    componentRender();
    const closeBtn = screen.getByTitle(`${title}-close-btn`);
    fireEvent.click(closeBtn);
    expect(closeCallBack).toHaveBeenCalledTimes(1);
  });
  test("submit btn works properly", () => {
    componentRender();
    const submitBtn = screen.getByTitle(`${title}-submit-btn`);
    fireEvent.click(submitBtn);
    expect(submitCallBack).toHaveBeenCalledTimes(1);
  });
});
