import { FETCH_ORDERS } from "../actions/types";

const initialState = {
  orders: [],
};

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return Object.assign({}, state, {
        orders: action.payload,
      });

    default:
      return state;
  }
};
