import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";

import Home from "./Components/Home";
import Navigation from "Components/Navigation";
import Timeline from "Components/Timeline";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Home semester="third"></Home>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
