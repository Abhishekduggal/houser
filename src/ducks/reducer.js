const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0
};

const UPDATE_NAME_INPUT = "UPDATE_NAME_INPUT";
const UPDATE_ADDRESS_INPUT = "UPDATE_ADDRESS_INPUT";
const UPDATE_CITY_INPUT = "UPDATE_CITY_INPUT";
const UPDATE_STATE_INPUT = "UPDATE_STATE_INPUT";
const UPDATE_ZIP_INPUT = "UPDATE_ZIP_INPUT";

function reducer(state = initialState, action) {
  //   console.log(action);
  switch (action.type) {
    case UPDATE_NAME_INPUT:
      return Object.assign({}, { name: action.payload });

    case UPDATE_ADDRESS_INPUT:
      return {
        ...state,
        address: action.payload
      };

    case UPDATE_CITY_INPUT:
      return {
        ...state,
        city: action.payload
      };

    case UPDATE_STATE_INPUT:
      return {
        ...state,
        state: action.payload
      };

    case UPDATE_ZIP_INPUT:
      return {
        ...state,
        zip: action.payload
      };

    default:
      return state;
  }
}

export function updateNameInput(name) {
  return {
    type: UPDATE_NAME_INPUT,
    payload: name
  };
}

export function updateAddressInput(address) {
  return {
    type: UPDATE_ADDRESS_INPUT,
    payload: address
  };
}

export function updateCityInput(city) {
  return {
    type: UPDATE_CITY_INPUT,
    payload: city
  };
}

export function updateStateInput(state) {
  return {
    type: UPDATE_STATE_INPUT,
    payload: state
  };
}

export function updateZipInput(zip) {
  return {
    type: UPDATE_ZIP_INPUT,
    payload: zip
  };
}
export default reducer;
