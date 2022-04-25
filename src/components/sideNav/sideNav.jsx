import React from "react";
import "./sideNav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav({ tabs, selectionCallBack }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="side-nav">
      <Link to="/" className="side-nav__header">
        Mental Harmony
      </Link>
      <div className="side-nav__tabs-container">
        {tabs.map((tab, index) => {
          return (
            <div
              className={`side-nav__tab ${
                index === selectedIndex ? "side-nav__tab__selected" : null
              }`}
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                selectionCallBack(index);
              }}
            >
              <div
                className={`side-nav__tab__icon background-image-util ${
                  index === selectedIndex
                    ? "side-nav__tab__icon__selected"
                    : null
                }`}
                style={{ backgroundImage: `url(${tab.icon})` }}
              />
              <div className="side-nav__tab__text">{tab.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
