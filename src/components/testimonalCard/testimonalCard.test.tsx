import React from "react";
import { screen, render } from "@testing-library/react";
import TestimonalCard from "./TestimonalCard";
import { Testimonial } from "constants/testiomnials";

describe("Testiomnial card is functioning properly", () => {
  test("Ensure Testiomnial card renders properly according to props", () => {
    const author = "Marwan";
    const text = "it was great";

    const testiomnialSample: Testimonial = {
      author,
      text,
    };
    render(<TestimonalCard testimonial={testiomnialSample} />);

    const authorEl = screen.getByTitle("author");
    const textEl = screen.getByTitle("text");

    //   first layer of testing (existence)
    expect(authorEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();

    // second layer of testing (value checking)
    expect(authorEl).toHaveTextContent(author);
    expect(textEl).toHaveTextContent(text);
  });
});
