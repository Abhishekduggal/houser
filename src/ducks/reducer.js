const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_NAME_INPUT = "UPDATE_NAME_INPUT";
const UPDATE_ADDRESS_INPUT = "UPDATE_ADDRESS_INPUT";
const UPDATE_CITY_INPUT = "UPDATE_CITY_INPUT";
const UPDATE_STATE_INPUT = "UPDATE_STATE_INPUT";
const UPDATE_ZIP_INPUT = "UPDATE_ZIP_INPUT";
const UPDATE_IMAGE_INPUT = "UPDATE_IMAGE_INPUT";
const UPDATE_MORTGAGE_INPUT = "UPDATE_MORTGAGE_INPUT";
const UPDATE_RENT_INPUT = "UPDATE_RENT_INPUT";
const RESET = "RESET";

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

    case UPDATE_IMAGE_INPUT:
      return {
        ...state,
        img: action.payload
      };

    case UPDATE_MORTGAGE_INPUT:
      return {
        ...state,
        mortgage: action.payload
      };

    case UPDATE_RENT_INPUT:
      return {
        ...state,
        rent: action.payload
      };

    case RESET:
      return {
        state: action.payload
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

export function updateImageInput(img) {
  return {
    type: UPDATE_IMAGE_INPUT,
    payload: img
  };
}

export function updateMortgageInput(mortgage) {
  return {
    type: UPDATE_MORTGAGE_INPUT,
    payload: mortgage
  };
}

export function updateRentInput(rent) {
  return {
    type: UPDATE_RENT_INPUT,
    payload: rent
  };
}

export function reset() {
  return {
    type: RESET,
    payload: ""
  };
}

export default reducer;
