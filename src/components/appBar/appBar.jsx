import React from "react";
import "./appBar.scss";
import appBarAvatar from "../../assets/images/appBarAvatar.png";
export default function AppBar({ header, name }) {
  return (
    <div className="app-bar">
      <div className="app-bar__header">{header}</div>
      <div className="app-bar__user">
        <div className="app-bar__user__name">{name}</div>
        <div
          className="app-bar__user__avatar background-image-util"
          style={{ backgroundImage: `url(${appBarAvatar})` }}
        />
      </div>
    </div>
  );
}
