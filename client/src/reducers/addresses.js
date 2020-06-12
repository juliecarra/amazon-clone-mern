import { ADD_ADDRESS, FETCH_ADDRESSES, DELETE_ADDRESS } from "../actions/types";

const initialState = {
  address: [],
};

const initialAddressesState = {
  addresses: [],
};

//reducer for address
export const address = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, address: action.payload };
    case DELETE_ADDRESS:
      return {
        ...state,
        address: state.address.filter((a) => a._id !== action.payload),
      };
    default:
      return state;
  }
};

//reducer for address
export const addresses = (state = initialAddressesState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES:
      return { ...state, addresses: action.payload };

    default:
      return state;
  }
};
