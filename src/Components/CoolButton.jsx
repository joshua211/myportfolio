import React from "react";
import "./CoolButton.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CoolButton = ({
  children,
  onClick,
  renderAs = "button",
  disabled = false,
  href = ""
}) => {
  switch (renderAs) {
    case "button":
      return (
        <div className={disabled ? "btn disabled" : "btn"} onClick={onClick}>
          {children}
        </div>
      );
      break;
    case "link":
      return (
        <AnchorLink className={disabled ? "btn disabled" : "btn"} href={href}>
          {children}
        </AnchorLink>
      );
  }
};

export default CoolButton;
