import React, { Component } from "react";
import "./App.css";
// import Dashboard from "./Component/Dashboard/Dashboard";
// import Wizard from "./Component/Wizard/Wizard";
//import House from "./Component/House/House";
import Header from "./Component/Header/Header";
import route from "./route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Simulation 2 - Houses</h1>
          <Header />
        </header>
        {route}
        {/* <House /> */}
      </div>
    );
  }
}

export default App;
