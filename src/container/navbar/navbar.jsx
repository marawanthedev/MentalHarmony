import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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
      to: "/browseServiceProvider",
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
  return (
    <nav className="header">
      <h1 className="logo">
        <Link to="/" className="logo-container">
          <span>M</span>ental Harmony
        </Link>
      </h1>
      <div className="options">
        {options.map((option, index) => (
          <Link
            key={index}
            className="option"
            to={option.to}
            onClick={() => {
              setSelectedOption(option.text);
              console.log(selectedOption);
            }}
            style={{
              fontWeight: `${option.text === selectedOption ? "700" : "400"}`,
            }}
          >
            {option.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// nested destructuring

export default Navbar;
