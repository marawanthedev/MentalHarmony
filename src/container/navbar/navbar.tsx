import "./navbar.scss";
import "./mobileNavbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "redux/features/user/userSlice";
import { AppDispatch, RootState } from "redux/store";
import { logout, resetAuth } from "redux/features/auth/authSlice";

type INavbar = {
  isMobile?: boolean;
};
const Navbar = ({ isMobile }: INavbar): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const navOptions: any = {
    student: [
      {
        text: "Home",
        to: "/",
        selected: true,
        requiresAuth: false,
      },
      {
        text: "View Dashboard",
        to: "/student/dashboard",
        requiresAuth: true,
      },
      {
        text: "Browse Service Providers",
        to: "/browseServiceProvider",
        requiresAuth: false,
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
        requiresAuth: true,
        hideIfAuthed: true,
        hideForAdmin: false,
      },
      {
        text: "Login",
        to: "/login",
        requiresAuth: true,
        hideIfAuthed: true,
        hideForAdmin: true,
      },
      {
        text: "Profile",
        to: `/profile?type=${user ? user.type : null}`,
        requiresAuth: true,
        hideIfAuthed: false,
        hideForAdmin: false,
      },
      {
        text: "Logout",
        to: "/",
        requiresAuth: true,
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
    const options: any = [];

    if (user) {
      const userType = user.type;
      if (navOptions[userType]) {
        navOptions[userType].forEach((option: any, index: number) =>
          options.push(getLink(option, `${userType} ${index}`))
        );
      }
    } else {
      //default options are set to student
      if (navOptions.student) {
        navOptions.student.forEach((option: any, index: number) => {
          if (!option.requiresAuth) {
            options.push(getLink(option, `student ${index}`));
          }
        });
      }
    }
    //general options
    if (!user || user) {
      if (navOptions["general"]) {
        navOptions["general"].forEach((option: any, index: number) => {
          if (!option.requiresAuth) {
            options.push(getLink(option, index));
          }
          if (
            (option.requiresAuth && !option.hideIfAuthed && user) ||
            (option.requiresAuth && option.hideIfAuthed && !user)
          ) {
            options.push(getLink(option, index));
          }
        });
      }
    }
    return options;
  };
  const getLink = (option: any, key: number | string) => {
    if (isMobile) {
      return (
        <li
          className="navigation__item"
          key={key}
          onClick={() => setSelectedOption(option.text)}
        >
          <Link
            to={option.to}
            className="navigation__link"
            style={{
              fontWeight: `${option.text === selectedOption ? "700" : "400"}`,
            }}
            onClick={() => {
              setSelectedOption(option.text);
              if (option.onClickCallBack) {
                option.onClickCallBack();
              }
            }}
          >
            {option.text}
          </Link>
        </li>
      );
    }
    if (!isMobile) {
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
    }
  };

  const mobileNavBar = () => {
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
          <ul className="navigation__list">{manageLinkRendering()}</ul>
        </nav>
      </div>
    );
  };

  const desktopNavBar = () => {
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
  return (
    <>
      {!isMobile && desktopNavBar()}
      {isMobile && mobileNavBar()}
    </>
  );
};

// nested destructuring

export default Navbar;
