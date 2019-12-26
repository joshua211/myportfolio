import "./Timeline.scss";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import TimelineItem from "./TimelineItem";

import React, { Component } from "react";
class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Section id="timeline" size="large">
        <Container>
          <Heading>Timeline</Heading>
          {this.props.items &&
            this.props.items.map(item => {
              return <TimelineItem item={item} key={item.title} />;
            })}
        </Container>
      </Section>
    );
  }
}

export default Timeline;
