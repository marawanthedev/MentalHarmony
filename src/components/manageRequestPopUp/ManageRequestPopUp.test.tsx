import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import ManageRequestPopUp from "./ManageRequestPopUp";
import { IButton } from "./ManageRequestPopUp";

describe("manage request works properly", () => {
  const buttonOneCallback = jest.fn();
  const buttonTwoCallback = jest.fn();
  const closeBtnCallBack = jest.fn();
  const popUpHeader = "header";
  const popupParagraph = "paragraph";

  const button1: IButton = {
    color: "red",
    text: "button1",
    callback: buttonOneCallback,
  };
  const button2: IButton = {
    color: "red",
    text: "button2",
    callback: buttonTwoCallback,
  };
  
  const buttons = [button1, button2];

  const componentRender = () =>
    render(
      <ManageRequestPopUp
        popupHeader={popUpHeader}
        popupParagraph={popupParagraph}
        button_1={button1}
        button_2={button2}
        closeBtnCallback={closeBtnCallBack}
      />
    );

  test("close btn testing", () => {
    componentRender();

    const closeBtn = screen.getByTitle("manage-request-popup-close-btn");

    fireEvent.click(closeBtn);

    expect(closeBtnCallBack).toHaveBeenCalledTimes(1);
  });

  test("prop to content mapping is correct", () => {
    componentRender();

    const manageRequestHeader = screen.getByTitle("popup-header");
    const manageRequestParagraph = screen.getByTitle("popup-paragraph");

    // header value checking
    expect(manageRequestHeader).toHaveTextContent(popUpHeader);

    // paragraph value checking
    expect(manageRequestParagraph).toHaveTextContent(popupParagraph);
  });

  test("buttons testing", () => {
    componentRender();

    buttons.forEach((_button, index: number) => {
      const button = screen.getByTitle(`manage-request-button-${index + 1}`);

      // text content checking
      expect(button).toHaveTextContent(_button.text);

      // background color checking
      expect(button.style.backgroundColor).toBe(_button.color);

      // onClick testing
      fireEvent.click(button);
      expect(buttonOneCallback).toHaveBeenCalledTimes(1);
    });
  });
});
