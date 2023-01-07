import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import DialogPopUp from "./DialogPopUp";

test("Dialog popup renders properly", () => {
  const cancelCallBack = jest.fn();
  const confirmCallBack = jest.fn();
  render(
    <DialogPopUp
      cancelCallBack={cancelCallBack}
      confirmCallBack={confirmCallBack}
    />
  );

  //   layer 1 testing
  const closeBtn = screen.getByTitle("dialog-close-btn");
  const cancelBtn = screen.getByTitle("cancel-btn");
  const confirmBtn = screen.getByTitle("confirm-btn");

  //   mocking confirm events
  fireEvent.click(confirmBtn);
  expect(confirmCallBack).toHaveBeenCalledTimes(1);

  //   mocking close btn event
  fireEvent.click(closeBtn);
  expect(cancelCallBack).toHaveBeenCalledTimes(1);

  //   mocking cancel btn event
  fireEvent.click(cancelBtn);
  expect(cancelCallBack).toHaveBeenCalledTimes(2);
});
