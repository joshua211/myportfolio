import React from "react";
import "./CoolButton.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CoolButton = ({
  children,
  onClick,
  isLoading = false,
  renderAs = "button",
  className = "",
  disabled = false,
  href = ""
}) => {
  switch (renderAs) {
    case "button":
      return (
        <div
          className={disabled ? "btn disabled" : "btn " + className}
          onClick={onClick}
        >
          {!isLoading ? (
            children
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
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
