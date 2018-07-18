import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateMortgageInput,
  updateRentInput,
  reset
} from "../../ducks/reducer";

class Wizard_Three extends Component {
  constructor(props) {
    super(props);

    this.handleClickAddHouse = this.handleClickAddHouse.bind(this);
    this.createHouse = this.createHouse.bind(this);
  }
  handleClickAddHouse() {
    let { name, address, city, state, zip, img, mortgage, rent } = this.props;
    this.createHouse(name, address, city, state, zip, img, mortgage, rent);
  }

  createHouse(name, address, city, state, zip, img, mortgage, rent) {
    axios
      .post("/api/create", {
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
      })
      .then(() => {
        this.props.reset();
      });
  }

  render() {
    // console.log(this.props);
    return (
      <section>
        <div>Wizard Three</div>
        <input
          className="Mortgage_Input"
          placeholder="Mortgage Amount"
          value={this.props.mortgage || ""}
          onChange={e => this.props.updateMortgageInput(e.target.value)}
        />
        <input
          className="Rent_Input"
          placeholder="Rent Amount"
          value={this.props.rent || ""}
          onChange={e => this.props.updateRentInput(e.target.value)}
        />
        <Link to={`/wizard/step2`}>
          <button className="Previous_Button">Previous Step</button>
        </Link>
        <div>Click on the Submit Please</div>
        <Link to={`/`}>
          <button className="Add_House" onClick={this.handleClickAddHouse}>
            Submit
          </button>
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
  {
    updateMortgageInput,
    updateRentInput,
    reset
  }
)(Wizard_Three);
