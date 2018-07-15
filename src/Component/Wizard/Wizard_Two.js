import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Wizard_Two extends Component {
  render() {
    return (
      <section>
        <div>Wizard Two</div>
        <input
          className="Image_Input"
          placeholder="Image URL"
          //onChange={e => this.props.updateImageInput(e.target.value)}
        />

        <div>Hit the next Button to continue with the Wizard</div>
        <Link to={`/wizard/step3`}>
          <button className="Next_Button">Next Step</button>
        </Link>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
  //   ,updateImageInput
)(Wizard_Two);
