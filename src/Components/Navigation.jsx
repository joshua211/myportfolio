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
          <div onClick={this.closeNav}>Timeline</div>
        </AnchorLink>

        <AnchorLink className="navigationItem brand" href="#home">
          <img
            src="/jicon.png"
            width="32"
            height="32"
            alt="jicon"
            onClick={this.closeNav}
          />
        </AnchorLink>

        <AnchorLink className="navigationItem" href="#contact">
          <div onClick={this.closeNav}>Contact</div>
        </AnchorLink>

        <Navbar.Burger onClick={this.toggleNav} className={buttonclass} />
      </div>
    );
  }

  toggleNav = () => {
    this.setState((prev, props) => ({ open: !prev.open }));
  };

  closeNav = () => {
    this.setState({ open: false });
  };
}

export default Navigation;
