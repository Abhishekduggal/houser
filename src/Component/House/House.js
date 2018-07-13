import React from "react";
//import Dashboard from "../Dashboard/Dashboard";

const House = props => {
  console.log(props);
  let { id, name, address, city, state, zip, img, mortgage, rent } = props.item;

  return (
    <div>
      <div>House</div>;
      {name}
      {address}
      {city}
      {state}
      {zip}
      {img}
      {mortgage}
      {rent}
      <button className="delete_button" onClick={() => props.deleteHouse(id)}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};

export default House;
