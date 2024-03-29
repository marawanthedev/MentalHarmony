import React from "react";
import { useState } from "react";
import "./formInput.scss";

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
  [rest: string]: any;
};
const FormInputGroup = ({
  type,
  placeHolder,
  displayType,
  className,
  customLabel,
  onChange,
  missing,
  initialValue,
  ...rest
}: FormInputGroupProps) => {
  const labelClassName = `${className}__label`;
  const inputClassName = `${className}__input-field`;
  const [inputValue, setInputValue] = useState(
    initialValue ? initialValue : undefined
  );

  return (
    <div>
      {/* todo figure out using style tags with typescript */}
      {/* style={width ? style : null} */}
      <div className={`${className} ${missing}`}>
        {displayType === "block" && (
          <div className={labelClassName} style={{ display: displayType }}>
            {customLabel}
          </div>
        )}

        <input
          value={inputValue}
          className={inputClassName}
          placeholder={placeHolder ? placeHolder : ""}
          type={type}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
          {...rest}
        />
        {displayType === "inline-block" && (
          <div className={labelClassName} style={{ display: displayType }}>
            {customLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInputGroup;
