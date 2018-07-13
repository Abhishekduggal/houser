import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>Dashboard</div>
        <Link to={`/wizard`}>
          <button className="Add_New_Property">Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
