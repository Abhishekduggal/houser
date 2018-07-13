import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  render() {
    return (
      <div>
        <div>Wizard</div>
        <Link to={`/`}>
          <button className="Cancel_Button">Cancel Wizard</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
