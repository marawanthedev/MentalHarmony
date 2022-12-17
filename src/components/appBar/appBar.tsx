import React from "react";
import "./appBar.scss";
import AvatarText from "components/avatarText/avatarText";
import { Link } from "react-router-dom";

interface Props {
  // include component props
  header: string;
  name: string;
  user: any;
}

function AppBar({ header, name, user }: Props) {
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

export default AppBar;
