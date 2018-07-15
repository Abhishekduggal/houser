import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Wizard_Three extends Component {
  render() {
    return (
      <section>
        <div>Wizard Three</div>
        <input
          className="Mortgage_Input"
          placeholder="Mortgage Amount"
          //   onChange={e => this.props.updateMortgageInput(e.target.value)}
        />
        <input
          className="Rent_Input"
          placeholder="Rent Amount"
          //   onChange={e => this.props.updateRentInput(e.target.value)}
        />
        <div>Click on the Submit Please</div>
        <Link to={`/`}>
          <button
            className="Add_House"
            //   onClick={this.handleClickAddHouse}
          >
            Submit
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
  mapStateToProps
  //   ,{
  //     updateMortgageInput,
  //     updateRentInput
  //   }
)(Wizard_Three);
