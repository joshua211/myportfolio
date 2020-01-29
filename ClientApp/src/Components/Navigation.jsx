import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, posY: 0, hideOnScroll: false };
  }

  componentDidMount() {
    this.state.posY = window.scrollY;
    window.addEventListener("scroll", e => this.handleScroll(e));
  }

  handleScroll = e => {
    const window = e.currentTarget;

    if (this.state.posY > window.scrollY) {
      this.setState({ hideOnScroll: false });
    } else if (this.state.posY < window.scrollY) {
      this.setState({ hideOnScroll: true });
    }
    this.setState({ posY: window.scrollY });
  };

  render() {
    var navclass = this.state.open ? "navigation open" : "navigation";
    navclass = this.state.hideOnScroll ? navclass + " hideOnScroll" : navclass;
    var buttonclass = this.state.open ? "burger is-active" : "burger";
    return (
      <div className={navclass}>
        <AnchorLink offset="20" className="navigationItem" href="#timeline">
          <div onClick={this.closeNav}>Timeline</div>
        </AnchorLink>

        <AnchorLink offset="0" className="navigationItem brand" href="#home">
          <img
            src="/jicon.png"
            width="32"
            height="32"
            alt="jicon"
            onClick={this.closeNav}
          />
        </AnchorLink>

        <AnchorLink offset="0" className="navigationItem" href="#contact">
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
    this.setState({ open: false, hideOnScroll: true });
  };
}

export default Navigation;
