import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import FormPopUp from "./FormPopUp";

describe("Form popup functions properly", () => {
  const submitCallBack = jest.fn();
  const closeCallBack = jest.fn();
  const formTitle = "form title";
  const inputPlaceHolder = "placeholder";
  const inputLabel = "label";
  const initialValue = "init";

  const componentRender = () =>
    render(
      <FormPopUp
        closeBtnCallback={closeCallBack}
        formTitle={formTitle}
        inputLabel={inputLabel}
        initialValue={initialValue}
        inputPlaceHolder={inputPlaceHolder}
        submitCallback={submitCallBack}
      />
    );

  test("form title prop to value maps properly", () => {
    componentRender();
    const title = screen.getByTitle("title");
    expect(title).toHaveTextContent(formTitle);
  });
  test("form input prop to value maps properly", () => {
    componentRender();
    const formInput = screen.getByTitle("form-popup-input");

    // placeholder checking
    expect(formInput).toHaveAttribute("placeholder", inputPlaceHolder);

    // inital value checking
    expect(formInput).toHaveValue(initialValue);

    // todo figure out how to test parent-child flows

    // label checking
    // expect(formInput).toHaveAttribute("label", inputLabel);
  });
});
