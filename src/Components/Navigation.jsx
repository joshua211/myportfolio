import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="/jicon.png"
            alt="jicon"
            href="jicon"
            width="32px"
            height="32px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <AnchorLink href="#home">Home</AnchorLink>
            </Nav.Link>
            <Nav.Link>
              <AnchorLink href="#timeline">Timeline</AnchorLink>
            </Nav.Link>
            <Nav.Link>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
