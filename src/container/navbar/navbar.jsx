import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, resetAuth } from "../../redux/features/auth/authSlice";
import { reset } from "../../redux/features/user/userSlice";
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
        hideForAdmin: false,
      },
      {
        text: "Login",
        to: "/login",
        basedOnAuth: true,
        hideIfAuthed: true,
        hideForAdmin: true,
      },
      {
        text: "Profile",
        to: `/profile?type=${user ? user.type : null}`,
        basedOnAuth: true,
        hideIfAuthed: false,
        hideForAdmin: false,
      },
      {
        text: "Logout",
        to: "/",
        basedOnAuth: true,
        hideIfAuthed: false,
        onClickCallBack: () => {
          dispatch(logout());
          dispatch(resetAuth());
          dispatch(reset());
        },
      },
    ],
  };

  const manageLinkRendering = () => {
    const options = [];
    if (user) {
      const userType = user.type;
      navOptions[userType].forEach((option, index) =>
        options.push(getLink(option, `${userType} ${index}`))
      );
    } else {
      //default options are set to student
      navOptions.student.forEach((option, index) =>
        options.push(getLink(option, `student ${index}`))
      );
    }
    //general options
    if (!user || user) {
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
  const getLink = (option, key) => {
    return (
      <Link
        key={key}
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
