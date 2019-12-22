import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    var navclass = this.state.open ? "navigation open" : "navigation";
    var buttonclass = this.state.open ? "burger is-active" : "burger";
    return (
      <div className={navclass}>
        <AnchorLink className="navigationItem" href="#timeline">
          Timeline
        </AnchorLink>

        <AnchorLink className="navigationItem brand" href="#home">
          <img src="/jicon.png" width="32" height="32" alt="jicon" />
        </AnchorLink>

        <AnchorLink className="navigationItem" href="#contact">
          Contact
        </AnchorLink>

        <Navbar.Burger onClick={this.toggleNav} className={buttonclass} />
      </div>
    );
  }

  toggleNav = () => {
    this.setState((prev, props) => ({ open: !prev.open }));
  };
}

export default Navigation;
