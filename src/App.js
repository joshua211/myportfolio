import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Home from "./Components/Home";
import Navigation from "Components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Home semester="third"></Home>
    </div>
  );
}

export default App;
