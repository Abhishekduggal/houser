import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
const axios = require("axios");

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };
    this.getRequestAll = this.getRequestAll.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount(getRequestAll) {
    this.getRequestAll();
  }

  getRequestAll() {
    axios.get("/api/houses").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`, { id }).then(res => {
      this.getRequestAll();
    });
  }

  render() {
    let inventory = this.state.inventory.map((item, i) => {
      //   console.log(item);

      return (
        <div key={i} className="house_inventory">
          <House item={item} deleteHouse={this.deleteHouse} />
        </div>
      );
    });
    return (
      <div>
        <div>Dashboard</div>
        <Link to={`/wizard`}>
          <button className="Add_New_Property">Add New Property</button>
        </Link>
        {inventory}
      </div>
    );
  }
}

export default Dashboard;
