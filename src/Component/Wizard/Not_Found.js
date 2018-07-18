import React, { Component } from "react";
import { Link } from "react-router-dom";

class Not_Found extends Component {
  render() {
    return (
      <div>
        <h3>404: Page Not Found</h3>
        <p>Sorry the page you are looking is not available</p>
        <Link to={`/`}>
          <button className="ClickMe">Explore Our Site</button>
        </Link>
      </div>
    );
  }
}

export default Not_Found;
