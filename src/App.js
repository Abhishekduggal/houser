import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Wizard from "./Component/Wizard/Wizard";
import House from "./Component/House/House";
import Header from "./Component/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Header />
        </header>
        <Dashboard />
        <Wizard />
        <House />
      </div>
    );
  }
}

export default App;
