import React from "react";
//import Dashboard from "../Dashboard/Dashboard";

const House = props => {
  // console.log(props);
  let { id, name, address, city, state, zip, img, mortgage, rent } = props.item;
  //console.log(img);
  return (
    <div>
      {/* <div>House</div> */}
      <h2>{name}</h2>
      <address>{address}</address>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
      <img src={img} alt="Picture" />
      <dd>${mortgage}</dd>
      <dd>${rent}</dd>
      <button className="delete_button" onClick={() => props.deleteHouse(id)}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};

export default House;
