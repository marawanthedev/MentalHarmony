import "./mobileNavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function MobileNavBar() {
  const options = [
    {
      text: "Home",
      to: "/",
      selected: true,
    },
    {
      text: "View Dashboard",
      to: "/",
    },
    {
      text: "Browse Service Providers",
      to: "/",
    },
    {
      text: "About us",
      to: "/",
    },
    {
      text: "Signup",
      to: "/signup",
    },
    {
      text: "Login",
      to: "/login",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
        placeholder=""
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {options.map((option, index) => {
            return (
              <li
                className="navigation__item"
                key={index}
                onClick={() => setSelectedOption(option.text)}
              >
                <Link
                  to={option.to}
                  className="navigation__link"
                  style={{
                    fontWeight: `${
                      option.text === selectedOption ? "700" : "400"
                    }`,
                  }}
                >
                  {option.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
