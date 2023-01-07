import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card component functions properly", () => {

  test("Card component renders properly according to props", () => {
    const onClick = jest.fn();
    const header = "card-header";
    const paragraph = "card-pargraph";
    const customClass = "testing-class";
    const children = <div title="children-elements">mock child</div>;

    const cardProps = { onClick, header, paragraph, customClass, children };

    render(<Card {...cardProps} />);

    const cardEl = screen.getByRole("main");
    const cardHeaderEl = screen.getByTitle("header");
    const cardParagraphEl = screen.getByTitle("paragraph");
    const childernElements = screen.getByTitle("children-elements");

    // existence testing
    expect(childernElements).toBeInTheDocument();

    // text content testing
    expect(cardHeaderEl).toHaveTextContent(header);
    expect(cardParagraphEl).toHaveTextContent(paragraph);

    // children testing

    // todo i think this could be improved need to add layer of children testing
    // expect(cardChildrenEl).toContain(children);

    // click event testing
    fireEvent.click(cardEl);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  
});
