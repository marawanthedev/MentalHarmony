import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import DialogPopUp from "./DialogPopUp";


describe("Dialog popup renders properly", () => {
  const cancelCallBack = jest.fn();
  const confirmCallBack = jest.fn();

  const componentRender = () =>
    render(
      <DialogPopUp
        cancelCallBack={cancelCallBack}
        confirmCallBack={confirmCallBack}
      />
    );
  test("dialog popup close btn testing", () => {
    componentRender();
    const closeBtn = screen.getByTitle("dialog-close-btn");
    //   mocking close btn event
    fireEvent.click(closeBtn);
    expect(cancelCallBack).toHaveBeenCalledTimes(1);
  });
  test("dialog cancel btn testing", () => {
    componentRender();
    const cancelBtn = screen.getByTitle("cancel-btn");
    //   mocking cancel btn event
    fireEvent.click(cancelBtn);
    expect(cancelCallBack).toHaveBeenCalledTimes(1);
  });
  test("dialog confirm btn testing", () => {
    componentRender();

    const confirmBtn = screen.getByTitle("confirm-btn");

    //   mocking confirm events
    fireEvent.click(confirmBtn);
    expect(confirmCallBack).toHaveBeenCalledTimes(1);
  });
});
