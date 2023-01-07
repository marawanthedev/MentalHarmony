import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import FeelingPopUp from "./FeelingPopUp";

describe("feeling popup functions properly", () => {
  // mock fn
  const submitCallBack = jest.fn();
  const closeCallBack = jest.fn();
  const feelingSelectionCallBack = jest.fn();

  //   mock var
  const submitBtnText = "submit";
  const showCloseBtn = true;

  const componentRender = () =>
    render(
      <FeelingPopUp
        submitBtnText={submitBtnText}
        feelingSelectionCallBack={feelingSelectionCallBack}
        showCloseBtn={showCloseBtn}
        submitCallBack={submitCallBack}
        closeBtnCallBack={closeCallBack}
      />
    );

  test("submit btn testing", () => {
    componentRender();

    const submitBtn = screen.getByTitle("feeling-popup-submit");
    //   submit btn
    fireEvent.click(submitBtn);
    expect(submitCallBack).toHaveBeenCalledTimes(1);

    //   prop to content testing
    expect(submitBtn).toHaveTextContent(submitBtnText);
  });

  test("close btn testing", () => {
    componentRender();

    //   close btn
    if (showCloseBtn) {
      const closeBtn = screen.getByTitle("feeling-pop-close-btn");

      fireEvent.click(closeBtn);
      expect(closeCallBack).toHaveBeenCalledTimes(1);
    }
  });
  test("feeling selection update", () => {
    componentRender();
    const feelingSelection = screen.getAllByTitle("feeling-selection");
    const mockSelectionIndex = 0;
    const mockFeelingSelection = feelingSelection[mockSelectionIndex];

    fireEvent.click(mockFeelingSelection);

    expect(feelingSelection[mockSelectionIndex]).toHaveClass(
      "feeling-popup__feeling__selected"
    );
  });
});
