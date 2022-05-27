import React from "react";
import "./appBar.scss";
import AvatarText from "../avatarText/avatarText";
import { Link } from "react-router-dom";

// to: `/profile?type=${user ? user.type : null}`,

export default function AppBar({ header, name }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="app-bar">
      <div className="app-bar__header">{header}</div>
      <Link
        to={`${user ? `/profile?type=${user.type}` : null}`}
        style={{ textDecoration: "none", color: "#252733" }}
      >
        <AvatarText text={name} reverse />
      </Link>
    </div>
  );
}
