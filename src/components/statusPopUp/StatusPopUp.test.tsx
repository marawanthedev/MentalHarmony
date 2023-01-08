import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import StatusPopUp from "./StatusPopUp";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

describe("status popup functions properly", () => {
  const closeCallBack = jest.fn();
  const title = "status-test-title";

  type IComponentRender = {
    success: boolean;
  };
  const componentRender = ({ success }: IComponentRender) =>
    render(
      <StatusPopUp
        closeBtnOnClick={closeCallBack}
        success={success}
        title={title}
      />
    );

  test("success based rendering is working properly", () => {
    componentRender({ success: true });
    const statusEl = screen.getByTitle(`${title}-status`);
    expect(statusEl).toHaveTextContent("success");
  });

  test("success based rendering is working properly", () => {
    componentRender({ success: false });
    const statusEl = screen.getByTitle(`${title}-status`);
    expect(statusEl).toHaveTextContent("failed");
  });

  test("close btn works properly", () => {
    componentRender({ success: true });
    const closeBtn = screen.getByTitle(`${title}-close-btn`);
    fireEvent.click(closeBtn);
    expect(closeCallBack).toHaveBeenCalledTimes(1);
  });
  test("redirect to home button works properly", async () => {
    const history = createBrowserHistory();
    render(
      <Router history={history}>
        <StatusPopUp
          closeBtnOnClick={closeCallBack}
          success={true}
          title={title}
        />
      </Router>
    );

    const toHomeBtn = screen.getByTitle(`${title}-home-btn`);
    await fireEvent.click(toHomeBtn);

    // final checking
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe("/");
  });
});
