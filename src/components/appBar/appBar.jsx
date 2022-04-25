import React from "react";
import "./appBar.scss";
import AvatarText from "../avatarText/avatarText";
export default function AppBar({ header, name }) {
  return (
    <div className="app-bar">
      <div className="app-bar__header">{header}</div>
      <AvatarText text={name} reverse />
    </div>
  );
}
