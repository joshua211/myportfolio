import React, { Component } from "react";
import posed from "react-pose";

const Box = posed.div({
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
      <Box className="box" pose={this.state.isVisible ? "visible" : "hidden"}>
        {this.props.children}
      </Box>
    );
  }
}

export default Wrapper;
