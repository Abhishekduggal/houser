import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateNameInput,
  updateAddressInput,
  updateCityInput,
  updateStateInput,
  updateZipInput
} from "../../ducks/reducer";

const axios = require("axios");

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    // this.updateNameInput = this.updateNameInput.bind(this);
    // this.updateAddressInput = this.updateAddressInput.bind(this);
    // this.updateCityInput = this.updateCityInput.bind(this);
    // this.updateStateInput = this.updateStateInput.bind(this);
    // this.updateZipInput = this.updateZipInput.bind(this);
    this.handleClickAddHouse = this.handleClickAddHouse.bind(this);
    this.createHouse = this.createHouse.bind(this);
  }

  //   updateNameInput(name) {
  //     this.setState({ name: name });
  //   }

  //   updateAddressInput(address) {
  //     this.setState({ address: address });
  //   }

  //   updateCityInput(city) {
  //     this.setState({ city: city });
  //   }

  //   updateStateInput(state) {
  //     this.setState({ state: state });
  //   }

  //   updateZipInput(zip) {
  //     this.setState({ zip: zip });
  //   }

  createHouse(name, address, city, state, zip) {
    axios.post("/api/create", { name, address, city, state, zip }).then(res => {
      console.log(res.data);
      // this.setState({ : res.data });
    });
  }

  handleClickAddHouse() {
    //console.log(this.props);
    let { name, address, city, state, zip } = this.props;
    this.createHouse(name, address, city, state, zip);
    // this.setstate = {
    //   name: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zip: 0
    // };
  }

  render() {
    // let { name, address, city, state, zip } = this.state;
    console.log(this.props);
    return (
      <section>
        <div>Wizard</div>

        <input
          className="Name_Input"
          placeholder="House Name"
          //value={name}
          onChange={e => this.props.updateNameInput(e.target.value)}
        />
        <input
          className="Address_Input"
          placeholder="House Address"
          //   value={address}
          onChange={e => this.props.updateAddressInput(e.target.value)}
        />
        <input
          className="City_Input"
          placeholder="House City"
          //   value={city}
          onChange={e => this.props.updateCityInput(e.target.value)}
        />
        <input
          className="State_Input"
          placeholder="House State"
          //   value={state}
          onChange={e => this.props.updateStateInput(e.target.value)}
        />
        <input
          className="Zip_Input"
          placeholder="House Zip"
          //   value={zip}
          onChange={e => this.props.updateZipInput(e.target.value)}
        />
        <Link to={`/`}>
          <button className="Add_House" onClick={this.handleClickAddHouse}>
            Submit
          </button>
        </Link>
        <Link to={`/`}>
          <button className="Cancel_Button">Cancel Wizard</button>
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
    updateNameInput,
    updateAddressInput,
    updateCityInput,
    updateStateInput,
    updateZipInput
  }
)(Wizard);
