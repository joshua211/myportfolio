import React from "react";
import "./Snackbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Snackbar = props => {
  return (
    <div className="snackbarWrapper">
      <div className="snackbar">
        {props.children}
        <div onClick={props.onClick} className="closeButton">
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
