import React from "react";
import "./Image.scss";
import logoImg from "../../content/logo.png";

export const Image = () => {
  return (
    <div className="logo-image">
      <img src={logoImg} />
    </div>
  );
};
