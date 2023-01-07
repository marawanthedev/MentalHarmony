import React from "react";
import "./button.scss";

type CustomButtonProps = {
  backGroundColor: string;
  innerText: string;
  color: string;
  boxShadow?: string;
  className?: string;
  type?: any;
  displayType: string;
  width: string;
  height: string;
  margin?: string;
  icon?: string;
  borderRadius?: string;
  onClick?: Function;
  iconPosition?: string;
  iconWidth?: string;
  iconHeight?: string;
  animationClassName?: string;
  animationDelay?: string;
  padding?: string;
  border?: string;
  fontWeight?: string;
  fontSize?: string;
  alignSelf?: string;
  [rest: string]: any;
};

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
  fontSize,
  alignSelf,
  ...rest
}: CustomButtonProps) => {
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
    fontSize,
    alignSelf,
  };
  const value1 = "translateX(1.6rem)";
  const value2 = null;
  // todo be updated
  const styleIcon: any = {
    transform: iconPosition === "false" ? value2 : value1,
    width: iconWidth,
    height: iconHeight,
  };

  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className={`custom-button ${animationClassName}`}
      style={style}
      {...rest}
    >
      {innerText}
      {icon && (
        <img
          className="custom-button__icon"
          src={icon}
          alt="icon"
          style={styleIcon}
        />
      )}
    </button>
  );
};

export default CustomButton;
