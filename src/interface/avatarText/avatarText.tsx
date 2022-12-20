import React from "react";
import "./avatarText.scss";

interface AvatarTextProps {
  text: string;
  reverse?: boolean;
}

export default function AvatarText({ text, reverse }: AvatarTextProps) {
  return (
    <div className={`avatar ${reverse ? "avatar__reverse" : null}`}>
      <div
        className="avatar__img background-image-util"
        // style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="avatar__text">{text}</div>
    </div>
  );
}
