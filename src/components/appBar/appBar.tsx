import React from "react";
import "./appBar.scss";
import AvatarText from "../avatarText/avatarText";
useSelector;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type AppBarProps = {
  header: string;
  name: string;
};

export default function AppBar({ header, name }: AppBarProps) {
  const { user } = useSelector((state: RootState) => state.auth);

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
