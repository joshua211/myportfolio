import React, { Component } from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <img src="/jicon.png" width="32" height="32" alt="jicon" />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="start"></Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item renderAs="div">
              <AnchorLink href="home">Home</AnchorLink>
            </Navbar.Item>
            <Navbar.Item renderAs="div">
              <AnchorLink href="timeline">Timeline</AnchorLink>
            </Navbar.Item>
            <Navbar.Item renderAs="div">
              <AnchorLink href="contact">Contact</AnchorLink>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Navigation;
