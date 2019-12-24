import React, { Component } from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";

import Home from "./Components/Home";
import Navigation from "Components/Navigation";
import Timeline from "Components/Timeline";
import Contact from "Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timelineItems: [] };
  }

  async componentDidMount() {
    var res = await fetch("timelineItems.json")
      .then(r => r.json())
      .catch(e => console.log("ERROR: ", e));
    console.log(res);
    this.setState({ timelineItems: res });
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Home semester="third"></Home>
        <Timeline items={this.state.timelineItems}></Timeline>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
