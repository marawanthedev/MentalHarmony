import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { FormInput } from "./../../constants/FormInput";

describe("Profile form works properly", () => {
  const submitCallBack = jest.fn();
  const title = "form title";
  const testTitle = "profile-form-test";

  const formInputs: FormInput[] = [
    {
      id: "1",
      name: "test-input",
      type: "text",
      label: "test-label",
      required: true,
      value: "test-value",
    },
  ];

  const componentRender = () =>
    render(
      <ProfileForm
        formTitle={title}
        formSubmissionCallBack={submitCallBack}
        formInputs={formInputs}
        title={testTitle}
      />
    );

  test("form inpuit updates properly", () => {
    componentRender();
    const mockValue = "test-value";
    const profileFormInput = screen.getAllByTitle(`${testTitle}-input`)[0];

    fireEvent.change(profileFormInput, { target: mockValue });

    expect(profileFormInput).toHaveValue(mockValue);
  });

  test("form input prop to value is properly mapped", () => {
    componentRender();

    const profileFormInputs = screen.getAllByTitle(`${testTitle}-input`);

    profileFormInputs.forEach((input, index: number) => {
      expect(input).toBeInTheDocument();

      expect(input).toHaveAttribute("name", formInputs[index].name);

      expect(input).toHaveAttribute("type", formInputs[index].type);

      expect(input).toHaveAttribute("placeholder", formInputs[index].value);

      expect(input).toHaveAttribute("value", formInputs[index].value);

      expect(input).toHaveAttribute("id", formInputs[index].id);
    });
  });

  test("form input label prop to value is properly mapped", () => {
    componentRender();

    const profileFormInputLabels = screen.getAllByTitle(`${testTitle}-label`);

    profileFormInputLabels.forEach((label, index: number) => {
      expect(label).toBeInTheDocument();

      expect(label).toHaveTextContent(formInputs[index].label || "");
    });
  });

  test("form header prop to value mapped properly", () => {
    componentRender();
    const formHeader = screen.getByTitle(`${testTitle}-header`);
    expect(formHeader).toHaveTextContent(title);
  });

  test("form submissions works properly", () => {
    componentRender();
    const submitBtn = screen.getByTitle(`${testTitle}-submit-btn`);
    fireEvent.click(submitBtn);
    expect(submitCallBack).toHaveBeenCalledTimes(1);
  });
});
