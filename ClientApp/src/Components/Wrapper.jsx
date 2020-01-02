import React, { Component } from "react";
import posed from "react-pose";

const Animation = posed.div({
  visible: { opacity: 1, transition: { duration: 1500 } },
  hidden: { opacity: 0 }
});

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <Animation pose={this.state.isVisible ? "visible" : "hidden"}>
        {this.props.children}
      </Animation>
    );
  }
}

export default Wrapper;
