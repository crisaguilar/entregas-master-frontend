import React from "react";
import "./imageComponentStyles.scss";
import logoImg from "./content/logo.png";

export const ImageComponent = () => {
  return (
    <div className="logo-image">
      <img src={logoImg} />
    </div>
  );
};
