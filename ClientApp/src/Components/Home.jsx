import React from "react";
import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CoolButton from "./CoolButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";
import "./Home.scss";

const Home = props => {
  return (
    <div id="home">
      <Hero color="primary" size="medium">
        <Hero.Body>
          <Container>
            <Heading>Hey there!</Heading>
            <div className="intro">
              My name is Joshua Hillmann and I'm 20 years old. <br></br>
              I'm currently studying computer science in Dortmund and I'm in my{" "}
              {props.semester} semester.
            </div>
            <div className="jumpto">
              <Heading size={4} subtitle>
                Got something you want to tell me?
              </Heading>
              <CoolButton renderAs="link" href="#contact">
                Contact me!
              </CoolButton>
            </div>
            <div className="gitTag">
              Or check out my{" "}
              <a
                href="https://github.com/joshua211"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github!
              </a>
            </div>
            <div className="divider"></div>
          </Container>
        </Hero.Body>
      </Hero>
      <Parallax
        bgImage={isMobile ? "parabackgroundMobile.png" : "parabackground.png"}
        strength={800}
      >
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
