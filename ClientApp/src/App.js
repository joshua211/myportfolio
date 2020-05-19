import React, { Component } from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Wrapper from "./Components/Wrapper";
import Home from "./Components/Home";
import Navigation from "Components/Navigation";
import Timeline from "Components/Timeline";
import Contact from "Components/Contact";
import Foot from "Components/Foot";
import Snackbar from "Components/Snackbar";
import { differenceInMonths } from "date-fns";
import { isIE, isEdge } from "react-device-detect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timelineItems: [], oldBrowserWarning: false };
  }

  async componentDidMount() {
    var res = await fetch("https://joshuahillmann.com/api/timeline")
      .then((r) => r.json())
      .catch((e) => console.log("ERROR: ", e));

    var oldbrowser = isIE || isEdge;
    this.setState({ timelineItems: res, oldBrowserWarning: oldbrowser });
  }

  render() {
    return (
      <Wrapper>
        {this.state.oldBrowserWarning && (
          <Snackbar onClick={() => this.setState({ oldBrowserWarning: false })}>
            Sorry for the inconvenience, but this website does not support your
            browser or browser version and may look a bit odd!
          </Snackbar>
        )}
        <Navigation />
        <Home semester={this.getSemester()} age={this.getAge()} />
        <Timeline items={this.state.timelineItems} />
        <Contact />
        <Foot />
      </Wrapper>
    );
  }

  getAge = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1999);
    date.setMonth(date.getMonth() - 4);
    date.setDate(date.getDate() - 21);
    return date.getFullYear();
  };

  getSemester = () => {
    const startDate = new Date(2018, 8);
    const currentDate = new Date();

    var semester = Math.ceil(
      (differenceInMonths(currentDate, startDate) + 1) / 6
    );
    return Semesters[semester];
  };
}

const Semesters = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fith",
  6: "sixth",
  7: "seventh",
  8: "eight",
};

export default App;
