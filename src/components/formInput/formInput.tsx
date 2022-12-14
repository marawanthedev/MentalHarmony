import React from "react";
import { useState } from "react";
import "./formInput.scss";
// type="text"
// placeHolder={inputPlaceHolder}
// customLabel={inputLabel}
// displayType="block"
// initialValue={initialValue ? initialValue : undefined}
// className={`articleUrl form__right-side__innerForm__input-group`}
// onChange={(value: string) => setFormInput(value)}

type FormInputGroupProps = {
  type: string;
  placeHolder: string;
  displayType: string;
  className?: string;
  customLabel?: string;
  onChange: Function;
  missing?: string;
  width?: string;
  initialValue?: string;
};
const FormInputGroup = ({
  type,
  placeHolder,
  displayType,
  className,
  customLabel,
  onChange,
  missing,
  width,
  initialValue,
}: FormInputGroupProps) => {
  const labelClassName = `${className}__label`;
  const inputClassName = `${className}__input-field`;
  const [inputValue, setInputValue] = useState(
    initialValue ? initialValue : undefined
  );
  let style = {
    width: width,
  };
  return (
    <div>
      {/* todo figure out using style tags with typescript */}
      {/* style={width ? style : null} */}
      <div className={`${className} ${missing}`}>
        {displayType === "block" ? (
          <div className={labelClassName} style={{ display: displayType }}>
            {customLabel}
          </div>
        ) : null}

        <input
          value={inputValue}
          className={inputClassName}
          placeholder={placeHolder ? placeHolder : ""}
          type={type}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
        />
        {displayType === "inline-block" ? (
          <div className={labelClassName} style={{ display: displayType }}>
            {customLabel}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormInputGroup;
