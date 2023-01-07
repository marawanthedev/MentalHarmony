import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CloseBtn from "./CloseBtn";

test("Button is rendering and executing callbacks properly", () => {
  const onClick = jest.fn();

  render(<CloseBtn onClick={onClick} />);

  const closeBtn = screen.getByRole("button");

  //   onclick mocking
  fireEvent.click(closeBtn);

  //   click calling checking
  expect(onClick).toHaveBeenCalledTimes(1);
});
