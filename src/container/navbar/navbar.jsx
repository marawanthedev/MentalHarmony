import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const options = [
    {
      text: "Home",
      to: "/",
      selected: true,
    },
    {
      text: "Student Side",
      to: "/student",
    },
    {
      text: "Admin Side",
      to: "/admin",
    },
    {
      text: "SP Side",
      to: "/serviceprovider",
    },
    {
      text: "Signup",
      to: "/signup",
      basedOnAuth: true,
      hideIfAuthed: true,
    },
    {
      text: "Login",
      to: "/login",
      basedOnAuth: true,
      hideIfAuthed: true,
    },
    {
      text: "Logout",
      to: "/",
      basedOnAuth: true,
      hideIfAuthed: false,
      onClickCallBack: () => {
        console.log("call");
        dispatch(logout());
        dispatch(reset());
      },
    },
  ];

  const manageLinkRendering = (option, index) => {
    if (!option.basedOnAuth) {
      return (
        <Link
          key={index}
          className="option"
          to={option.to}
          onClick={() => {
            setSelectedOption(option.text);
          }}
          style={{
            fontWeight: `${option.text === selectedOption ? "700" : "400"}`,
          }}
        >
          {option.text}
        </Link>
      );
    }
    if (
      (option.basedOnAuth && !option.hideIfAuthed && user) ||
      (option.basedOnAuth && option.hideIfAuthed && !user)
    ) {
      return (
        <Link
          key={index}
          className="option"
          to={option.to}
          onClick={() => {
            setSelectedOption(option.text);
            if (option.onClickCallBack) {
              option.onClickCallBack();
            }
          }}
          style={{
            fontWeight: `${option.text === selectedOption ? "700" : "400"}`,
          }}
        >
          {option.text}
        </Link>
      );
    }
    return null;
  };
  return (
    <nav className="header">
      <h1 className="logo">
        <Link to="/" className="logo-container">
          <span>M</span>ental Harmony
        </Link>
      </h1>
      <div className="options">
        {options.map((option, index) => manageLinkRendering(option, index))}
      </div>
    </nav>
  );
};

// nested destructuring

export default Navbar;
