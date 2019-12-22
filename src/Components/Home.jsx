import React from "react";
import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Home.scss";

const Home = props => {
  return (
    <Hero color="primary" size="medium" id="home">
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
  );
};

export default Home;
