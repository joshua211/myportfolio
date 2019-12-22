import React from "react";
import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Parallax } from "react-parallax";
import "./Home.scss";

const paraimage = require("../assets/parabackground.png");

const Home = props => {
  return (
    <div id="home">
      <Hero color="primary" size="medium">
        <Hero.Body>
          <Container>
            <Heading>Hey there!</Heading>
            My name is Joshua Hillmann and Im 20 years old. <br></br>
            Im currently studying computer science in Dortmund and Im in my{" "}
            {props.semester} semester.
            <div className="jumpto">
              <Heading subtitle>Got something to tell me?</Heading>
              <AnchorLink className="btn" href="#contact">
                Contact me!
              </AnchorLink>
            </div>
          </Container>
        </Hero.Body>
      </Hero>
      <Parallax bgImage={paraimage} strength={500}>
        <div className="insideParallex">
          <AnchorLink href="#timeline">
            <FontAwesomeIcon icon={faChevronDown} />
          </AnchorLink>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
