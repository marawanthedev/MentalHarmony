import React from "react";
import "./button.scss";
const CustomButton = ({
  backGroundColor,
  innerText,
  color,
  boxShadow,
  type,
  displayType,
  width,
  height,
  margin,
  icon,
  borderRadius,
  onClick,
  iconPosition,
  iconWidth = "1.6rem",
  iconHeight = "1.6rem",
  animationClassName,
  animationDelay,
  padding,
  border,
  fontWeight,
}) => {
  const style = {
    backgroundColor: backGroundColor,
    color: color,
    display: displayType,
    width,
    height,
    margin,
    boxShadow,
    borderRadius,
    animationDelay,
    padding,
    border,
    fontWeight,
  };
  const value1 = "translateX(1.6rem)";
  const value2 = null;
  const styleIcon = {
    transform: iconPosition === "false" ? value2 : value1,
    width: iconWidth,
    height: iconHeight,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${animationClassName}`}
      style={style}
    >
      {innerText}
      {icon ? (
        <img
          className="custom-button__icon"
          src={icon}
          alt="icon"
          style={styleIcon}
        ></img>
      ) : null}
    </button>
  );
};

export default CustomButton;
