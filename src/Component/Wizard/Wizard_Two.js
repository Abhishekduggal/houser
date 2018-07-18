import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateImageInput, reset } from "../../ducks/reducer";

class Wizard_Two extends Component {
  render() {
    // console.log(this.props);
    return (
      <section>
        <div>Wizard Two</div>
        <input
          className="Image_Input"
          placeholder="Image URL"
          value={this.props.img || ""}
          onChange={e => this.props.updateImageInput(e.target.value)}
        />

        <div>Hit the next Button to continue with the Wizard</div>
        <Link to={`/wizard/step1`}>
          <button className="Previous_Button">Previous Step</button>
        </Link>

        <Link to={`/wizard/step3`}>
          <button className="Next_Button">Next Step</button>
        </Link>

        <Link to={`/`}>
          <button className="Cancel_Button" onClick={() => this.props.reset()}>
            Cancel Wizard
          </button>
        </Link>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateImageInput, reset }
)(Wizard_Two);
