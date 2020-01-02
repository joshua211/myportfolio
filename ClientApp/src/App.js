import React, { Component } from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Wrapper from "./Components/Wrapper";
import Home from "./Components/Home";
import Navigation from "Components/Navigation";
import Timeline from "Components/Timeline";
import Contact from "Components/Contact";
import Foot from "Components/Foot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timelineItems: [] };
  }

  async componentDidMount() {
    var res = await fetch("https://joshuahillmann.com/api/timeline")
      .then(r => r.json())
      .catch(e => console.log("ERROR: ", e));
    this.setState({ timelineItems: res });
  }

  render() {
    return (
      <Wrapper>
        <Navigation />
        <Home semester="third" />
        <Timeline items={this.state.timelineItems} />
        <Contact />
        <Foot />
      </Wrapper>
    );
  }
}

export default App;
