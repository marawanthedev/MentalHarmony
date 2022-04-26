import React from "react";
import { useState } from "react";
import "./formInput.scss";
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
}) => {
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
      <div className={`${className} ${missing}`} style={width ? style : null}>
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
