import React from "react";
import avatar from "../../assets/images/appBarAvatar.webp";
import "./avatarText.scss";
export default function AvatarText({ img, text, reverse }) {
  return (
    <div className={`avatar ${reverse ? "avatar__reverse" : null}`}>
      <div
        className="avatar__img background-image-util"
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="avatar__text">{text}</div>
    </div>
  );
}
