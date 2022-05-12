import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const navOptions = {
    student: [
      {
        text: "Home",
        to: "/",
        selected: true,
      },
      {
        text: "View Dashboard",
        to: "/student/dashboard",
      },
      {
        text: "Browse Service Providers",
        to: "/browseServiceProvider",
      },
      {
        text: "About us",
        to: "/",
      },
    ],
    serviceprovider: [
      {
        text: "Home",
        to: "/",
        selected: true,
      },
      {
        text: "View booking requests",
        to: "/serviceprovider/dashboard",
      },
      {
        text: "View Dashboard",
        to: "/serviceprovider/dashboard",
      },
    ],
    admin: [
      {
        text: "Home",
        to: "/",
        selected: true,
      },
      {
        text: "appointments history",
        to: "/admin/dashboard",
      },
      {
        text: "Manage Service provider",
        to: "/admin/dashboard",
      },
      {
        text: "View university students",
        to: "/admin/dashboard",
      },
      {
        text: "Attach useful articles",
        to: "/admin/dashboard",
      },
    ],
    general: [
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
    ],
  };

  const manageLinkRendering = () => {
    const options = [];
    console.log(user);
    if (user) {
      const userType = user.type;

      navOptions[userType].forEach((option, index) =>
        options.push(getLink(option, index))
      );
    } else {
      //default options are set to student
      navOptions.student.forEach((option, index) =>
        options.push(getLink(option, index))
      );
    }
    //general options
    if (!user || (user && user.type !== "admin")) {
      navOptions["general"].forEach((option, index) => {
        if (!option.basedOnAuth) {
          options.push(getLink(option, index));
        }
        if (
          (option.basedOnAuth && !option.hideIfAuthed && user) ||
          (option.basedOnAuth && option.hideIfAuthed && !user)
        ) {
          options.push(getLink(option, index));
        }
      });
    }
    return options;
  };
  const getLink = (option, index) => {
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
  };
  return (
    <nav className="header">
      <h1 className="logo">
        <Link to="/" className="logo-container">
          <span>M</span>ental Harmony
        </Link>
      </h1>
      <div className="options">{manageLinkRendering()}</div>
    </nav>
  );
};

// nested destructuring

export default Navbar;
